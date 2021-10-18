let pi = 3.1415926535898;
// let v = (4 / 3)*pi*r**3;

let form = document.forms[0];
let radius = document.getElementById("radius");
let volume = document.getElementById("volume");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (radius.value.length > 0) {
    volume.value = (4 / 3) * pi * radius.value ** 3;
  }
});
