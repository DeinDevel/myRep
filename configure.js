var box = document.getElementById("box");
var figure = document.getElementById("figure");
var scrolled = window.pageYOffset || document.documentElement.scrollTop;



window.addEventListener("wheel", colorShift);

function colorShift() {
  figure.classList.add("start");
}
