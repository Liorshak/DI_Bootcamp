function success() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let submit = document.getElementById("submit");
  if (username != "" && password != "") {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
}

function login(event) {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let root = document.getElementById("root");
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log("sent request received detail");
      root.innerText = res;
    })
    .catch((err) => console.log(err));
}
