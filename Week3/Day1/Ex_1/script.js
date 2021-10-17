// In the <div> above, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (li).
// Finally, append this updated list node to the unordered list above, using the appendChild method.
// Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last li elements from their parent element (ul). Display the text of each link. (Hint: use the textContent property).

let nav = document.getElementById("navBar");
nav.setAttribute("id", "socialNetworkNavigation");

let newLi = document.createElement("li");
let newText = document.createTextNode("Logout");
newLi.appendChild(newText);
let ul = document.querySelector("ul");
ul.appendChild(newLi);

console.log(ul.firstElementChild.textContent);
console.log(ul.lastElementChild.textContent);

// In the HTML above change the name “Pete” to “Richard”.
// Change each first name of the two <ul>'s to your name.
// At the end of each <ul> add a <li> that says “Hey students”.
// Delete the name Sarah from the second <ul>.
// Bonus
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.

let liFirstLast = document.querySelector(".list > li:last-child");
liFirstLast.textContent = "Richard";

let ul_2 = document.querySelectorAll(".list");
console.log(ul_2);
for (let item of ul_2) {
  let newLi2 = document.createElement("li");
  let newText2 = document.createTextNode("Hey students");
  newLi2.appendChild(newText2);
  item.appendChild(newLi2);
  console.log(item);
}

let sarah = document.querySelectorAll(".list")[1].children[1].remove();

for (let item of ul_2) {
  item.classList.add("student_list");
}

ul_2[0].classList.add("university", "attendance");

// For the following exercise use the HTML presented above:

// Add a “light blue” background color and some padding to the <div>.
// Do not display the first name (John) in the list.
// Add a border to the second name (Pete).
// Change the font size of the whole body.
// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

let lastDiv = document.querySelectorAll("div")[2];
lastDiv.style.backgroundColor = "lightblue";
let lastUL = lastDiv.nextElementSibling;
let john = lastUL.children[0];
john.style.display = "none";
lastUL.children[1].style.border = "5px Solid Black";
document.querySelector("body").style.fontSize = "2em";
if (lastDiv.style.backgroundColor === "lightblue") {
  alert(`hello ${john.textContent} and ${lastUL.children[1].textContent}`);
}
