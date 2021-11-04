(function () {
  look = document.getElementById("look");
  loadingOff();
  look.addEventListener("click", newPerson);
})();

async function newPerson() {
  this.disabled = true;
  clear();
  loadingOn();
  let info = await fetchingNew().catch("Oh No! That person isn't available");
  console.log(info);
  addingElem(info);
  this.disabled = false;
}

function clear() {
  if (document.getElementById("person")) {
    let oldPerson = document.getElementById("person");
    oldPerson.remove();
  }
}

function loadingOn() {
  let loadPart = document.getElementById("loading");
  loadPart.classList.remove("hidden");
}

function loadingOff() {
  let loadPart = document.getElementById("loading");
  loadPart.classList.add("hidden");
}

async function fetchingNew() {
  let randomNum = Math.round(Math.random() * 83);
  console.log(randomNum);
  let { name, height, gender, birth_year, homeworld } = await fetch(
    `https://swapi.dev/api/people/${randomNum}/`
  ).then((res) => res.json());
  console.log(homeworld);
  let homeW = await fetch(homeworld).then((res) => res.json());
  console.log(homeW);
  return [name, height, gender, birth_year, homeW.name];
}

function addingElem([name, height, gender, birthY, HomeW]) {
  let content = document.getElementById("content");
  let newDiv = document.createElement("div");
  newDiv.setAttribute("id", "person");
  newName = document.createElement("h3");
  newNameTxt = document.createTextNode(name);
  newName.appendChild(newNameTxt);

  newDiv.appendChild(newName);

  newHeight = document.createElement("p");
  newHeight.appendChild(document.createTextNode(`Height: ${height}`));

  newDiv.appendChild(newHeight);

  newGender = document.createElement("p");
  newGender.appendChild(document.createTextNode(`Gender: ${gender}`));

  newDiv.appendChild(newGender);

  newBirthY = document.createElement("p");
  newBirthY.appendChild(document.createTextNode(`Birth Year: ${birthY}`));
  newDiv.appendChild(newBirthY);

  newHome = document.createElement("p");
  newHome.appendChild(document.createTextNode(`Home World: ${HomeW}`));
  newDiv.appendChild(newHome);

  loadingOff();
  content.appendChild(newDiv);
}
