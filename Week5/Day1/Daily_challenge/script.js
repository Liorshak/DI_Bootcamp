(function () {
  let form = document.getElementById("form");

  form.addEventListener("submit", writeJson);
})();

function writeJson(event) {
  event.preventDefault();
  let main = document.getElementById("main");
  let name = document.getElementById("name");
  let lastName = document.getElementById("lastName");

  let objectJson = {
    name: name.value,
    lastname: lastName.value,
  };

  let newP = document.createElement("p");
  let newTxt = document.createTextNode(JSON.stringify(objectJson));
  newP.appendChild(newTxt);

  main.appendChild(newP);
}
