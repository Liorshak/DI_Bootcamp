const getData = async function () {
  try {
    const data = await fetch("http://localhost:3000/user").then((response) =>
      response.json()
    );
    let root = document.getElementById("root");
    newDiv = document.createElement("div");
    newDiv.appendChild(
      document.createTextNode(data.firstname + " " + data.lastname)
    );
    root.appendChild(newDiv);
  } catch (err) {
    console.log(err);
  }
};
