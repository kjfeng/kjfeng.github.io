(() => {
  const article = document.querySelector(".blog-content");
  const toc = document.querySelector(".blog-toc");

  if (article && toc) {
    const headings = [...article.querySelectorAll("h2, h3")].filter((heading) => heading.id);
    if (headings.length > 0) {
      const title = document.createElement("p");
      title.className = "blog-toc-title";
      title.textContent = "Contents";

      const list = document.createElement("ul");
      headings.forEach((heading) => {
        const item = document.createElement("li");
        if (heading.tagName === "H3") item.className = "blog-toc-subsection";

        const link = document.createElement("a");
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent.trim();
        item.append(link);
        list.append(item);
      });

      toc.replaceChildren(title, list);
      toc.hidden = false;
    }
  }

  const footnotes = article?.querySelector(".footnotes");

  if (!article || !footnotes) return;

  const notes = new Map(
    [...footnotes.querySelectorAll("li[id]")].map((note) => [note.id, note])
  );
  const sidenotesById = new Map();
  const references = [...article.querySelectorAll('a.footnote[href^="#fn:"]')]
    .filter((reference) => !footnotes.contains(reference));
  const firstReferenceByNote = new Map();

  references.forEach((reference) => {
    const noteId = decodeURIComponent(reference.getAttribute("href").slice(1));
    if (notes.has(noteId) && !firstReferenceByNote.has(noteId)) {
      firstReferenceByNote.set(noteId, reference);
    }
  });

  const referencesByParagraph = new Map();
  firstReferenceByNote.forEach((reference) => {
    const marker = reference.closest("sup") || reference;
    const paragraph = marker.closest("p");
    if (!paragraph) return;

    if (!referencesByParagraph.has(paragraph)) {
      referencesByParagraph.set(paragraph, []);
    }
    referencesByParagraph.get(paragraph).push(reference);
  });

  referencesByParagraph.forEach((paragraphReferences, paragraph) => {
    const flow = document.createElement("div");
    flow.className = "sidenote-flow";
    paragraph.replaceWith(flow);
    flow.append(paragraph);

    // Split from right to left so each reference remains inside the paragraph
    // while its trailing text is moved into the next paragraph.
    paragraphReferences.reverse().forEach((reference) => {
      const marker = reference.closest("sup") || reference;
      const noteId = decodeURIComponent(reference.getAttribute("href").slice(1));
      const sourceNote = notes.get(noteId);
      if (!sourceNote || !paragraph.contains(marker)) return;

      const note = document.createElement("div");
      note.className = "sidenote is-collapsed";
      note.id = sourceNote.id;
      note.dataset.referenceId = marker.id;
      note.setAttribute("role", "doc-endnote");
      note.setAttribute("aria-hidden", "true");
      while (sourceNote.firstChild) note.append(sourceNote.firstChild);
      sourceNote.remove();
      sidenotesById.set(noteId, note);

      const firstNoteParagraph = note.querySelector("p");
      const number = document.createElement("span");
      number.className = "sidenote-number";
      number.textContent = `${reference.textContent.trim()}.`;
      if (firstNoteParagraph) {
        firstNoteParagraph.prepend(number, document.createTextNode(" "));
      } else {
        note.prepend(number, document.createTextNode(" "));
      }

      const range = document.createRange();
      range.setStartAfter(marker);
      range.setEnd(paragraph, paragraph.childNodes.length);
      const trailingContent = range.extractContents();

      paragraph.after(note);
      if (trailingContent.childNodes.length > 0) {
        const continuation = document.createElement("p");
        continuation.append(trailingContent);
        note.after(continuation);
      }
    });
  });

  if (!footnotes.querySelector("li[id]")) footnotes.remove();

  const triggersByNote = new Map();
  references.forEach((reference) => {
    const noteId = decodeURIComponent(reference.getAttribute("href").slice(1));
    const note = sidenotesById.get(noteId);
    if (!note) return;

    if (!triggersByNote.has(noteId)) triggersByNote.set(noteId, []);
    triggersByNote.get(noteId).push(reference);
    reference.setAttribute("aria-controls", note.id);
  });

  const setNoteOpen = (noteId, open) => {
    const note = sidenotesById.get(noteId);
    if (!note) return;

    note.classList.toggle("is-collapsed", !open);
    note.setAttribute("aria-hidden", String(!open));
    (triggersByNote.get(noteId) || []).forEach((trigger) => {
      trigger.setAttribute("aria-expanded", String(open));
    });
  };

  const closeAllNotes = () => {
    sidenotesById.forEach((_, noteId) => setNoteOpen(noteId, false));
  };

  references.forEach((reference) => {
    const noteId = decodeURIComponent(reference.getAttribute("href").slice(1));
    if (!sidenotesById.has(noteId)) return;

    reference.setAttribute("aria-expanded", "false");
    reference.addEventListener("click", (event) => {
      if (window.matchMedia("(min-width: 1280px)").matches) return;

      event.preventDefault();
      const note = sidenotesById.get(noteId);
      const shouldOpen = note.classList.contains("is-collapsed");
      closeAllNotes();
      if (shouldOpen) setNoteOpen(noteId, true);
    });
  });

  document.addEventListener("pointerdown", (event) => {
    if (window.matchMedia("(min-width: 1280px)").matches) return;
    if (event.target.closest(".sidenote, a.footnote")) return;
    closeAllNotes();
  });

  const alignSidenotes = () => {
    const desktop = window.matchMedia("(min-width: 1280px)").matches;
    article.querySelectorAll(".sidenote").forEach((note) => {
      const noteId = note.id;
      if (desktop) {
        note.classList.remove("is-collapsed");
        note.setAttribute("aria-hidden", "false");
        (triggersByNote.get(noteId) || []).forEach((trigger) => {
          trigger.removeAttribute("aria-expanded");
        });
      } else {
        note.classList.add("is-collapsed");
        note.setAttribute("aria-hidden", "true");
        (triggersByNote.get(noteId) || []).forEach((trigger) => {
          trigger.setAttribute("aria-expanded", "false");
        });
        note.style.removeProperty("--sidenote-top");
        return;
      }

      const reference = document.getElementById(note.dataset.referenceId);
      const flow = note.closest(".sidenote-flow");
      if (!reference || !flow) return;

      const top = reference.getBoundingClientRect().top - flow.getBoundingClientRect().top;
      note.style.setProperty("--sidenote-top", `${top}px`);
    });
  };

  alignSidenotes();
  requestAnimationFrame(alignSidenotes);
  window.addEventListener("load", alignSidenotes);
  window.addEventListener("resize", alignSidenotes);
  if (document.fonts?.ready) document.fonts.ready.then(alignSidenotes);
})();
