function success() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let fName = document.getElementById("name").value;
  let lName = document.getElementById("lName").value;
  let email = document.getElementById("email").value;
  let submit = document.getElementById("submit");
  if (
    username != "" &&
    password != "" &&
    lName != "" &&
    email != "" &&
    fName != ""
  ) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
}

function register(event) {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let fName = document.getElementById("name").value;
  let lName = document.getElementById("lName").value;
  let email = document.getElementById("email").value;
  let root = document.getElementById("root");

  fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ username, password, fName, lName, email }),
  })
    .then((res) => res.json())
    .then((str) => {
      console.log("sent request received detail");
      root.innerText = str;
    })
    .catch((err) => console.log(err));
}
