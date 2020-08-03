filterSelection("all");

function filterSelection(c) {
  if (c == "all") c = "";
  var x = document.getElementsByClassName("work-block");
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("show");
    if (x[i].className.indexOf(c) > -1) {
      x[i].classList.add("show");
    }
  }
}

var btnContainer = document.getElementById('filters');
if (btnContainer == null) console.log("nope");
var btns = btnContainer.getElementsByClassName("filter-button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var currentSelected = document.getElementsByClassName("active")[0];
    currentSelected.className = currentSelected.className.replace(" active", "");
    this.className += " active";
  });
}
