const URLParams = new URLSearchParams(window.location.search);
let mainDiv = document.getElementById("main");

for (const [key, value] of URLParams.entries()) {
  let newP = document.createElement("p");
  let newtxt = document.createTextNode(`${key} : ${value.trim()}`);
  newP.appendChild(newtxt);
  mainDiv.appendChild(newP);
}
