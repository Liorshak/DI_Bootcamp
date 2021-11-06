(function () {
  loadData = document.getElementById("loadData");
  left = document.getElementById("left");
  right = document.getElementById("right");

  loadData.addEventListener("click", getPoke);
  left.addEventListener("click", previousPoke);
  right.addEventListener("click", nextPoke);
  loadingOff();
})();

let randNum;
let pokeName = document.getElementById("name");
let num = document.getElementById("num");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let type = document.getElementById("type");
let photo = document.getElementById("photo");

async function getPoke() {
  loadingOn();
  try {
    randNum = Math.round(Math.random() * 898);
    let newPoke = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randNum}`
    ).then((res) => res.json());
    console.log(newPoke);

    changeInfo(newPoke);
    loadingOff();
    changePhoto(newPoke);
  } catch (err) {
    loadingOff();
    noPoke();
    console.log(err);
  }
}

function changeInfo(obj) {
  pokeName.textContent = obj.forms.name;
  num.textContent = `Pokemon n° ${obj.id}`;
  height.textContent = `Height: ${obj.game_indices.height}`;
  weight.textContent = `Width: ${obj.weight}`;
  type.textContent = `Type: ${obj.types[0].type.name}`;
}

function changePhoto(obj) {
  photo.style.background = `url("${obj.sprites.front_default}")`;
  photo.style.backgroundRepeat = "no-repeat";
  photo.style.backgroundPosition = "center";
  photo.style.height = "200px";
  photo.style.width = "200px";
  photo.style.backgroundSize = "cover";
  photo.style.marginTop = "50px";
  photo.style.marginLeft = "15px";
}

async function previousPoke() {
  this.disabled = true;
  try {
    randNum--;
    let newPoke = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randNum}`
    ).then((res) => res.json());
    changeInfo(newPoke);
    changePhoto(newPoke);
  } catch (err) {
    noPoke();
  } finally {
    this.disabled = false;
  }
}

async function nextPoke() {
  this.disabled = true;
  try {
    randNum++;
    let newPoke = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randNum}`
    ).then((res) => res.json());

    changeInfo(newPoke);
    changePhoto(newPoke);
  } catch (err) {
    noPoke();
  } finally {
    this.disabled = false;
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

function noPoke() {
  pokeName.textContent = "Oh no! That Pokemon isn’t available…";
  num.textContent = "";
  height.textContent = "";
  width.textContent = "";
  type.textContent = "";
}
