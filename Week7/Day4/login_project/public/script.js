function successRegi() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let fName = document.getElementById("name").value;
  let lName = document.getElementById("lName").value;
  let email = document.getElementById("email").value;
  let submitRegi = document.getElementById("submitRegi");
  if (
    username != "" &&
    password != "" &&
    lName != "" &&
    email != "" &&
    fName != ""
  ) {
    submitRegi.disabled = false;
  } else {
    submitRegi.disabled = true;
  }
}

function successLogin() {
  let usernameL = document.getElementById("username").value;
  let passwordL = document.getElementById("password").value;
  let submit = document.getElementById("submit");
  if (username != "" && password != "") {
    submitLogin.disabled = false;
  } else {
    submitLogin.disabled = true;
  }
}

function register(event) {
  event.preventDefault();
  let username = document.getElementById("username").value.toLowerCase();
  let password = document.getElementById("password").value;
  let fName = document.getElementById("name").value.toLowerCase();
  let lName = document.getElementById("lName").value.toLowerCase();
  let email = document.getElementById("email").value.toLowerCase();
  let register_info = document.getElementById("register_info");

  fetch("http://localhost:5000/register", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ username, password, fName, lName, email }),
  })
    .then((res) => res.json())
    .then((str) => {
      console.log("sent request received detail");
      register_info.innerText = str;
    })
    .catch((err) => console.log(err));
}

function login(event) {
  event.preventDefault();
  let username = document.getElementById("usernameL").value.toLowerCase();
  let password = document.getElementById("passwordL").value;
  let login_info = document.getElementById("login_info");
  fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log("sent request received detail");
      login_info.innerText = res;
    })
    .catch((err) => {
      console.log(err);
      login_info.innerText =
        "login information was not ok username or password not exist";
    });
}
