let colorMenu = document.getElementById("colorMenu");
let main = document.getElementById("main");
let content = document.getElementById("content");
let clearBtn = document.getElementById("clearBtn");
let sideBar = document.getElementById("sideBar");
var myColor;
var flagMouse;

let setColor = (event) => {
  myColor = event.target.style.background;
  console.log("setting color");
};

let clickIn = () => {
  flagMouse = true;
};
let clickOut = () => {
  flagMouse = false;
};

const createElementColor = (tag, color, location) => {
  let newTag = document.createElement(tag);
  newTag.style.background = color;
  newTag.addEventListener("click", setColor);

  location.appendChild(newTag);
};

main.addEventListener("mousedown", clickIn);
main.addEventListener("mouseup", clickOut);

let colorArray = [
  "red",
  "orangered",
  "orange",
  "yellow",
  "yellowgreen",
  "lightgreen",
  "green",
  "turquoise",
  "cyan",
  "lightskyblue",
  "dodgerblue",
  "blue",
  "darkblue",
  "indigo",
  "darkmagenta",
  "violet",
  "lightpink",
  "lightgray",
  "gray",
  "black",
  "white",
];

colorArray.forEach((v) => {
  console.log(v);
  createElementColor("div", v, colorMenu);
});

let paintC = (event) => {
  event.target.style.background = myColor;
  console.log(myColor);
  console.log(event.target.style.background);
  console.log("change paint");
};

let paintO = (event) => {
  if (flagMouse) {
    event.target.style.background = myColor;
  }
};

const createElement = (tag, location) => {
  newTag = document.createElement(tag);
  newTag.classList.add("board");
  newTag.addEventListener("click", paintC);
  newTag.addEventListener("mouseover", paintO);
  location.appendChild(newTag);
};

for (let i = 0; i < 60 * 24; i++) {
  createElement("div", content);
}

let paintBoard = document.getElementsByClassName("board");
console.log(paintBoard);

clearingAll = () => {
  for (let board of paintBoard) {
    board.style.background = "white";
  }
};

clearBtn.addEventListener("click", clearingAll);
