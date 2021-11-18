function addItem(event) {
  event.preventDefault();
  const item = document.getElementById("item").value;
  const amount = document.getElementById("amount").value;

  fetch("http://localhost:3000/shopping", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ item, amount }),
  })
    .then((res) => res.json())
    .then((arr) => {
      console.log("sent request received detail");
      addElement(arr);
    })
    .catch((err) => console.log(err));
}

function addElement(str) {
  const root = document.getElementById("root");
  root.innerText = str;
}
