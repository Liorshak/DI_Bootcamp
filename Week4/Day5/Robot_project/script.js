const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
];

/// self invoking function with dom and listners

(function () {
  //elements
  const input = document.getElementById("searchInput");
  robots.forEach((v) => addRobot(v));
  input.addEventListener("input", displaying);
  //DOM search
})();

//function
function displaying(event) {
  event.preventDefault();
  //   const main = document.getElementById("main");
  robots
    .filter(
      (v) => !v.name.toLowerCase().includes(event.target.value.toLowerCase())
    )
    .forEach((v) => document.getElementById(v.id).classList.add("hidden"));
  robots
    .filter((v) =>
      v.name.toLowerCase().includes(event.target.value.toLowerCase())
    )
    .forEach((v) => document.getElementById(v.id).classList.remove("hidden"));
}

function addRobot({ id, name, email, image }) {
  const main = document.getElementById("main");

  let newCard = document.createElement("div");
  newCard.setAttribute("id", id);

  let newImg = document.createElement("img");
  newImg.setAttribute("src", image);

  //create Name element
  let newName = document.createElement("h2");
  let nameTxt = document.createTextNode(name);
  newName.appendChild(nameTxt);

  // create email element
  let newEmail = document.createElement("h4");
  let emailTxt = document.createTextNode(email);
  newEmail.appendChild(emailTxt);

  newCard.appendChild(newImg);
  newCard.appendChild(newName);
  newCard.appendChild(newEmail);

  main.appendChild(newCard);
}
