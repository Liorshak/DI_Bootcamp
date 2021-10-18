// Using DOM methods, remove the last paragraph in the <article> tag from the DOM.
// Add an event listener which will change the background color of the h2 tag from the DOM when clicked on.
// Set the font size of the h1 tag to a random pixel size between 0 to 100.(Check out this documentation)
// Add an event listener which will hide the h3 when it’s clicked on (use the display property).
// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// When the “Submit” button of the form is clicked:
// get the values of the input tags
// make sure that they are not empty,
// then append them to a HTML table, in the div, below the form.
// When you hoover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

const addElementWId = (tag, data, location, id) => {
  let newTag = document.createElement(tag);
  let newText = document.createTextNode(data);
  newTag.appendChild(newText);
  newTag.setAttribute("id", id);
  location.appendChild(newTag);
};

const addElement = (tag, data, location) => {
  let newTag = document.createElement(tag);
  let newText = document.createTextNode(data);
  newTag.appendChild(newText);
  location.appendChild(newTag);
};

let article = document.getElementsByTagName("article")[0];
let h2 = document.querySelector("h2");

article.lastElementChild.remove(); //1

addElementWId("button", "change h2 background", article, "btnCC");

let btnCC = document.getElementById("btnCC");

btnCC.addEventListener("click", function () {
  //2
  if (h2.style.backgroundColor === "aqua") {
    h2.style.backgroundColor = "white";
  } else {
    h2.style.backgroundColor = "aqua";
  }
});

let h1 = document.querySelector("h1");
let rndNum = Math.round(Math.random() * 100) + "px";
h1.style.fontSize = rndNum; //3

let h3 = document.querySelector("h3");

h3.addEventListener("click", function () {
  //4
  h3.style.display = "none";
});

addElementWId("button", "Bolding", article, "btnBold");
let btnBold = document.getElementById("btnBold");

let arrP = document.querySelectorAll("p");

btnBold.addEventListener("click", function () {
  //5
  for (item of arrP) {
    if (item.style.fontWeight === "normal") {
      item.style.fontWeight = "bold";
    } else {
      item.style.fontWeight = "normal";
    }
  }
});

let inputFN = document.getElementById("fname");
let inputLN = document.getElementById("lname");
let ansList = document.querySelector("div");

console.log(ansList);

form = document.querySelector("form");
submit = document.getElementById("submit");
form.addEventListener("submit", addValue);

function addValue(event) {
  event.preventDefault();
  if (inputFN.value.length > 0 && inputLN.value.length > 0) {
    let newTxt = inputFN.value + " " + inputLN.value;
    addElement("p", newTxt, ansList);
    inputFN.value = "";
    inputLN.value = "";
  }
}

h2.addEventListener("mouseover", function () {
  h2.style.opacity = "0";
  h2.style.transition = "opacity 2s linear";
});

h2.addEventListener("mouseout", function () {
  h2.style.opacity = "1";
  h2.style.transition = "opacity 2s linear";
});

// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph.
// Create a function called highlight() that changes the color of all the bold text to blue.
// Create a function called return_normal() that changes the color of all the bold text back to black.
// Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

const getBold_items = () => {
  let arrBold = document.querySelectorAll(" p> strong");
  return arrBold;
};

const highlight = () => {
  let arrBold = getBold_items();
  for (item of arrBold) {
    item.style.color = "blue";
  }
};

const return_normal = () => {
  let arrBold = getBold_items();
  for (item of arrBold) {
    item.style.color = "black";
  }
};

let par = document.querySelector(".par");
par.addEventListener("mouseover", highlight);
par.addEventListener("mouseout", return_normal);
