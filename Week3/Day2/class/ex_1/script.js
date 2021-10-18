// 1. Create two buttons - id of "red", id of "blue"
// 2. When we click on the red button -> Change the backgroundcolor of the page to red
// 3. the same for blue

btnRed = document.getElementById("red");
btnBlue = document.getElementById("blue");
body = document.querySelector("body");

btnBlue.addEventListener("click", function () {
  if (body.classList.contains("red")) {
    body.classList.replace("red", "blue");
  } else {
    body.classList.add("blue");
  }
});

btnRed.addEventListener("click", function () {
  if (body.classList.contains("blue")) {
    body.classList.replace("blue", "red");
  } else {
    body.classList.add("red");
  }
});
