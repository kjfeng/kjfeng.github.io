// var btnContainer = document.getElementById('filters');
// var btns = btnContainer.getElementsByClassName("filter-button");
//
// document.addEventListener("DOMContentLoaded", function() {
//
//   var actives = document.getElementsByClassName("active");
//   for (var i = 0; i < actives.length; i++) {
//     actives[i].className.replace(" .active", "");
//   }
//
//   if (localStorage.getItem("filter") == null) {
//     localStorage.setItem("filter", "all");
//     document.getElementById("all").className += " active";
//     filterSelection("all");
//   }
//
//   else {
//     document.getElementById(localStorage.getItem("filter")).className += " active";
//     filterSelection(localStorage.getItem("filter"));
//   }
//
// });
//
//
//
// function filterSelection(c) {
//   if (c == "all") {
//     localStorage.setItem("filter", "all");
//     c = "";
//   }
//   else {
//     localStorage.setItem("filter", c);
//   }
//   var x = document.getElementsByClassName("work-block");
//   for (var i = 0; i < x.length; i++) {
//     x[i].classList.remove("show");
//     if (x[i].className.indexOf(c) > -1) {
//       x[i].classList.add("show");
//     }
//   }
//
// }
//
//
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var currentSelected = document.getElementsByClassName("active")[0];
//     currentSelected.className = currentSelected.className.replace(" active", "");
//     this.className += " active";
//   });
// }
