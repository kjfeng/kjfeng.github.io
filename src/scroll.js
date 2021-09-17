import React from 'react';

window.onscroll = function() {
  scrollTrigger()
};

function scrollTrigger() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("top-button").style.display = "block";
  }
  else {
    document.getElementById("top-button").style.display = "none";
  }
}

function smoothScroll() {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    // window.requestAnimationFrame(smoothScroll);
    // window.scrollTo(0, c - c / 6);
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
  }
}

// export function toTopFunction() {
//   smoothScroll();
// }

function Scroller() {
  return (
    <button onClick={smoothScroll} id="top-button" title="Go to top">
      ↑<br/><span className="top-text">Top</span>
    </button>
  )
}

export default Scroller;
