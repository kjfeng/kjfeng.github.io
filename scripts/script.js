tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        body: ["Sans Times Sans 24", "sans-serif"],
        mono: ["Sans Times Sans 16", "sans-serif"],
        heading: ["Sans Times Sans 32", "sans-serif"]
      },
      colors: {
        accent: "#2563eb",
        subtext: "#888",
        highlight: "#ed6300"
      }
    }
  }
};

const cursorRoot = document.documentElement;
const clearMouseDownCursor = (event) => {
  if (!event || event.pointerType === "mouse") {
    cursorRoot.classList.remove("pointer-down");
  }
};

document.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "mouse") {
    cursorRoot.classList.add("pointer-down");
  }
});
document.addEventListener("pointerup", clearMouseDownCursor);
document.addEventListener("pointercancel", clearMouseDownCursor);
window.addEventListener("blur", () => clearMouseDownCursor());

const copyText = async (text) => {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();

  if (!copied) {
    throw new Error("Copy failed");
  }
};

const bibtexSource = "publications.bib";
let bibtexEntriesPromise;

const parseBibtexEntries = (source) => {
  const entries = new Map();
  const entryStart = /@[a-zA-Z]+\s*\{/g;
  let match;

  while ((match = entryStart.exec(source)) !== null) {
    const start = match.index;
    const openingBrace = source.indexOf("{", start);
    let depth = 0;
    let inQuotes = false;
    let escaped = false;
    let end = -1;

    for (let index = openingBrace; index < source.length; index += 1) {
      const character = source[index];

      if (inQuotes) {
        if (escaped) {
          escaped = false;
        } else if (character === "\\") {
          escaped = true;
        } else if (character === '"') {
          inQuotes = false;
        }
        continue;
      }

      if (character === '"') {
        inQuotes = true;
      } else if (character === "{") {
        depth += 1;
      } else if (character === "}") {
        depth -= 1;
        if (depth === 0) {
          end = index + 1;
          break;
        }
      }
    }

    if (end === -1) {
      throw new Error("Unclosed BibTeX entry.");
    }

    const comma = source.indexOf(",", openingBrace + 1);
    if (comma === -1 || comma > end) {
      entryStart.lastIndex = end;
      continue;
    }

    const key = source.slice(openingBrace + 1, comma).trim();
    entries.set(key, source.slice(start, end).trim());
    entryStart.lastIndex = end;
  }

  return entries;
};

const loadBibtexEntries = () => {
  if (!bibtexEntriesPromise) {
    bibtexEntriesPromise = fetch(bibtexSource)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Unable to load ${bibtexSource}: ${response.status}`);
        }
        return response.text();
      })
      .then(parseBibtexEntries);
  }

  return bibtexEntriesPromise;
};

const populateBibtexBox = async (bibtex) => {
  if (bibtex.dataset.bibtexLoaded === "true" || bibtex.dataset.bibtexLoading === "true") {
    return;
  }

  const content = bibtex.querySelector("[data-bibtex-content]");
  const copyButton = bibtex.querySelector("[data-bibtex-copy]");
  bibtex.dataset.bibtexLoading = "true";
  content.textContent = "Loading BibTeX…";
  copyButton.disabled = true;
  copyButton.textContent = "Loading…";

  try {
    const entries = await loadBibtexEntries();
    const entry = entries.get(bibtex.dataset.bibtexKey);

    if (!entry) {
      throw new Error(`No BibTeX entry found for ${bibtex.dataset.bibtexKey}.`);
    }

    content.textContent = entry;
    bibtex.dataset.bibtexLoaded = "true";
    copyButton.disabled = false;
    copyButton.textContent = "Copy";
  } catch (error) {
    content.textContent = "Unable to load BibTeX.";
    copyButton.textContent = "Unavailable";
    console.warn("Unable to load BibTeX.", error);
  } finally {
    delete bibtex.dataset.bibtexLoading;
  }
};

const initializeBibtexControls = () => {
  document.querySelectorAll("[data-bibtex-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const bibtex = document.getElementById(button.getAttribute("aria-controls"));
      const isOpen = button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", String(!isOpen));
      bibtex.classList.toggle("hidden", isOpen);
      button.classList.toggle("text-highlight", !isOpen);
      button.classList.toggle("text-accent", isOpen);

      if (!isOpen) {
        populateBibtexBox(bibtex);
      }
    });
  });

  document.querySelectorAll("[data-bibtex-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const bibtex = document.getElementById(button.getAttribute("aria-controls"));
      if (bibtex.dataset.bibtexLoaded !== "true") {
        return;
      }

      const content = bibtex.querySelector("[data-bibtex-content]").textContent;

      try {
        await copyText(content);
        button.textContent = "Copied!";
        button.classList.remove("text-accent");
        button.classList.add("text-highlight");
      } catch (error) {
        console.warn("Unable to copy BibTeX to the clipboard.", error);
      }
    });
  });
};

const loadHtmlIncludes = async () => {
  const includes = Array.from(document.querySelectorAll("[data-include]"));

  await Promise.all(includes.map(async (placeholder) => {
    const source = placeholder.dataset.include;

    try {
      const response = await fetch(source);
      if (!response.ok) {
        throw new Error(`Unable to load ${source}: ${response.status}`);
      }

      const template = document.createElement("template");
      template.innerHTML = await response.text();
      placeholder.replaceWith(template.content);
    } catch (error) {
      console.error(`Unable to load HTML section ${source}.`, error);
    }
  }));
};

const initializeUpdatesToggle = () => {
  const list = document.querySelector("#updates-list");
  const button = document.querySelector("[data-updates-toggle]");
  if (!list || !button) return;

  const extraUpdates = Array.from(list.children).slice(6);
  if (extraUpdates.length === 0) return;

  extraUpdates.forEach((update) => {
    update.hidden = true;
  });
  button.hidden = false;

  button.addEventListener("click", () => {
    const showAll = button.getAttribute("aria-expanded") !== "true";
    extraUpdates.forEach((update) => {
      update.hidden = !showAll;
    });
    button.setAttribute("aria-expanded", String(showAll));
    button.textContent = showAll ? "Show less" : "Show more";
  });
};

const initializeEmailReveal = () => {
  const button = document.querySelector("[data-email-reveal]");
  if (!button) return;

  button.addEventListener("click", () => {
    button.textContent = button.dataset.email;
    delete button.dataset.email;
  }, { once: true });
};

const initializePage = async () => {
  await loadHtmlIncludes();
  initializeUpdatesToggle();
  initializeBibtexControls();
  initializeEmailReveal();

  if (window.location.hash) {
    const targetId = window.location.hash.slice(1);
    document.getElementById(targetId)?.scrollIntoView();
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializePage, { once: true });
} else {
  initializePage();
}
