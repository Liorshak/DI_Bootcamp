books = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
    image:
      "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
    alreadyRead: false,
  },
  {
    title: "Bhagavad Gita",
    author: "His Divine Grace A. C. Bhaktivedanta Swami Prabhupada / Vyasa",
    image:
      "https://kbimages1-a.akamaihd.net/bc852c9f-2f5e-46fc-8bd5-92adb413189b/353/569/90/False/bhagavad-gita-as-it-is-1.jpg",
    alreadyRead: true,
  },
];

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

const addElement = (tag, data, location) => {
  let newTag = document.createElement(tag);
  let newText = document.createTextNode(data);
  newTag.appendChild(newText);
  location.appendChild(newTag);
};

let mainDiv = document.querySelector(".listBooks");

addElement("table", "bookslist", mainDiv);
let NewTable = document.querySelector("table");
for (let i = 0; i < 3; i++) {
  addElement("tr", "", NewTable);
}
let newRaw1 = document.querySelectorAll("tr")[0];
for (i = 0; i < 2; i++) {
  td1 = addElement("td", books[i].title, newRaw1);
}
let newRaw2 = document.querySelectorAll("tr")[1];
for (i = 0; i < 2; i++) {
  td2 = addElement("td", books[i].author, newRaw2);
}
let newRaw3 = document.querySelectorAll("tr")[2];
for (i = 0; i < 2; i++) {
  let newTag = document.createElement("td");
  newTag.style.backgroundImage = `url(${books[i].image})`;
  newTag.style.width = "100px";
  newTag.style.height = "200px";
  newTag.style.imageSize = "cover";
  newTag.style.backgroundSize = "100px";
  newTag.style.imagePosition = "center";
  newRaw3.appendChild(newTag);
}
tdList = document.querySelectorAll("td");
for (let i = 0; i < tdList.length; i++) {
  tdList[i].style.border = "2px solid black";
  tdList[i].style.textAlign = "center";
}

NewTable.style.border = "2px solid black";
newRaw1.style.border = "2px solid black";
newRaw2.style.border = "2px solid black";
newRaw3.style.border = "2px solid black";
NewTable.style.margin = "auto";

let trNew = document.querySelectorAll("tr");
let tdNew = document.querySelectorAll("td");

for (let i = 0; i < books.length; i++) {
  if (books[i].alreadyRead) {
    for (let b = 0; b < 3; b++) {
      trNew[b].children[i].style.color = "red";
    }
  }
}
