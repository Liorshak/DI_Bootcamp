let xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.responseType = "json";
xhr.send();

xhr.onload = function () {
  if (xhr.status == 200) {
    console.log(xhr.response);
    displayRobotInfo(xhr.response);
  } else {
    console.log(xhr.status);
  }
};

function displayRobotInfo(array) {
  let results = document.getElementById("results");
  array.forEach((v) => {
    let newLi = document.createElement("li");

    let newName = document.createElement("h2");
    let newNameTxt = document.createTextNode(v.name);
    newName.appendChild(newNameTxt);
    newLi.appendChild(newName);

    let newCity = document.createElement("h3");
    let newCityTxt = document.createTextNode(`From: ${v.address.city}`);
    newCity.appendChild(newCityTxt);
    newLi.appendChild(newCity);

    let newEmail = document.createElement("h5");
    let newEmailTxt = document.createTextNode(`Contact me: ${v.email}`);
    newEmail.appendChild(newEmailTxt);
    newLi.appendChild(newEmail);

    results.appendChild(newLi);
  });
}

let xhr1 = new XMLHttpRequest();
xhr1.open("POST", "https://reqres.in/api/users");
xhr1.setRequestHeader("Content-Type", "application/json");
xhr1.send(xhr.response);

xhr1.onload = function () {
  if (xhr1.status == 200 || xhr1.status == 201) {
    console.log(xhr1.response);
  } else {
    console.log("something went wrong");
    console.log(xhr1.status);
  }
};
