// Exercise

// let colors = ["blue", "yellow", "green", "pink"];

// 1. Add inside the HTMl file a div of id container (do it directly in the HTML)
// 2. Add one button per color inside the div container (do it directly in the JS)
// 3. Each button should have an "click" event listener that
// changes the background color of the document,  to the color of the button (do it directly in the JS)

// Example:
// when you click on the YELLOW button, it should change the document
// background color to yellow

let colors = ["blue", "yellow", "green", "pink"];
let body = document.body;

const changeColor = (event) => {
  let color = event.target.textContent.toLowerCase();
  body.style.backgroundColor = color;
};

containerE = document.getElementById("container");

colors.forEach((v) => {
  newBtn = document.createElement("button");
  newTxt = document.createTextNode(v);
  newBtn.appendChild(newTxt);
  newBtn.addEventListener("click", changeColor);
  containerE.appendChild(newBtn);
});

let pics = [
  "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/3439576/pexels-photo-3439576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

// 1. Using this array, create a button on the page that when clicked on
// display one animal randomly
// 2. Set a class to the image, so each image will be 200px height, and width, and in the middle of the page
// 3. Add a button next to each image
// 4. When we click on one image, it should disapear(ie. be deleted),
// When we hover on the image, it should display the "alt".

const randomPic = () => {
  rndNum = Math.round(Math.random() * (pics.length - 1));
  let pic = document.getElementById("pic");
  pic.style.backgroundImage = `url(${pics[rndNum]})`;
  pic.style.width = "200px";
  pic.style.height = "200px";
  pic.style.imageSize = "cover";
  pic.style.backgroundRepeat = "no-repeat";
  pic.style.backgroundSize = "200px";
  pic.style.imagePosition = "center";
};
newDiv = document.createElement("div");
newTxt = document.createTextNode("Random Pic");
newBtn = document.createElement("button");
newBtn.appendChild(newTxt);
newBtn.addEventListener("click", randomPic);
newPic = document.createElement("div");
newPic.setAttribute("id", "pic");
newPic.style.height = "200px";
newPic.style.width = "200px";
newDiv.appendChild(newBtn);
newDiv.appendChild(newPic);
containerE.appendChild(newDiv);
