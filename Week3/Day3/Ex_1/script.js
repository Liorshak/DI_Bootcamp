let box = document.getElementById("animate");
let btn = document.getElementById("btnPlay");
let p;

let play = () => {
  var p = 0;
  let moveInterval = setInterval(function () {
    console.log(p);
    if (p == 350) {
      clearInterval(moveInterval);
    } else {
      p++;
      box.style.top = p + "px";
      box.style.left = p + "px";
    }
  }, 5);
};

btn.addEventListener("click", play);

// part2

let dropZone = document.getElementsByClassName("dropzone");
console.log(dropZone);

let ball = document.querySelector(".dragme");
console.log(ball);

let addDraggingAbility = () => {
  for (let zone of dropZone) {
    zone.addEventListener("dragover", enableDrag);
    zone.addEventListener("drop", dropping);
    zone.addEventListener("dragenter", entering);
    zone.addEventListener("dragleave", leaving);
  }
};

let enableDrag = (event) => {
  event.preventDefault();
  event.target.classList.add("dragpossible");
};

let dragging = (event) => {
  event.dataTransfer.setData("text/plain", event.target.id);
};

let dropping = (event) => {
  let dragElem = event.dataTransfer.getData("text/plain");
  let elemToDrop = document.getElementById(dragElem);
  console.log(dragElem);
  event.target.appendChild(elemToDrop);
  event.target.classList.remove("dragpossible");
};

let entering = (event) => {
  event.target.classList.add("draginside");
};

let leaving = (event) => {
  event.target.classList.remove("draginside");
};

addDraggingAbility();

ball.addEventListener("dragstart", dragging);
