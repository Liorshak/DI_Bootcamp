const main = document.getElementById("main");
main.style.display = "grid";
main.style.gridTemplateRows = "repeat(7,1fr)";
main.style.gridTemplateColumns = "repeat(7,1fr)";
main.style.background = "black";
main.style.padding = "10px";
main.style.color = "red";

let elementCreate = (txt) => {
  let newDiv = document.createElement("div");
  let newTxt = document.createTextNode(txt);
  newDiv.appendChild(newTxt);
  newDiv.style.width = "50px";
  newDiv.style.height = "50px";
  newDiv.style.textAlign = "center";
  newDiv.style.fontSize = "2em";
  //   newDiv.style.border = "1px solid white";
  main.appendChild(newDiv);
};

for (let row = 0; row < 7; row++) {
  if (row === 0) {
    for (let col = 0; col < 7; col++) {
      if (col >= 2 && col <= 4) {
        elementCreate("*");
      } else {
        elementCreate("");
      }
    }
  } else if (row === 3) {
    for (let col = 0; col < 7; col++) {
      if (col >= 1 && col <= 5) {
        elementCreate("*");
      } else {
        elementCreate("");
      }
    }
  } else {
    for (let col = 0; col < 7; col++) {
      if (col === 1 || col === 5) {
        elementCreate("*");
      } else {
        elementCreate("");
      }
    }
  }
}
