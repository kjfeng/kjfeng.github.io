window.onscroll = function() {
  scrollTrigger()
};

function scrollTrigger() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("top-button").style.display = "block";
  }
  else {
    document.getElementById("top-button").style.display = "none";
  }
}

function smoothScroll() {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(smoothScroll);
    window.scrollTo(0, c - c / 6);
  }
}

function toTopFunction() {
  smoothScroll();
}
