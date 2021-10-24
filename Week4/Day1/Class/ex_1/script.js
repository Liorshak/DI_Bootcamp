// Function that takes 2 parameters, first name and last name
// The point of the function is to console log the fullname
// If you don't have any first name, by default it should be equal to "John", if we don't have any last name by default = "Smith"
// checkName();
// checkName("kHALESSI");
// checkName("Lea", "Doe")
// 10:57
// Code to help
// function checkValue(x = 0, y = 1) {
// 	console.log("x: ", x, " y: ", y)
// 	let sum = x + y;
// 	console.log(sum)
// }

// checkValue(4,5); //9
// checkValue(1); //2
// checkValue(); //1
// checkValue(0,2); //2

let checkName = (fName = "John", lName = "Smith") => {
  console.log(fName + " " + lName);
};

checkName();
checkName("kHALESSI");
checkName("Lea", "Doe");

function compare(a, b, operator) {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else {
    return "ERROR";
  }
  console.log("end of func"); //this will not display
}

let resultA = compare(2, 3, "+");
console.log(`The result of the function is ${resultA}`); /// The result of the function is 5

let resultB = compare(2, 3, "-");
console.log(`The result of the function is ${resultB}`); // The result of the function is -1

let resultC = compare(2, 3, "*");
console.log(`The result of the function is ${resultC}`); ///The result of the function is ERROR

////////////////////////////////
let colorArray = ["blue", "green", "red"];

let [bcolor1, bcolor2, bcolor3] = colorArray;

console.log(bcolor1);
console.log(bcolor2);
console.log(bcolor3);

let [ncolor1, ncolor2, ncolor3, ncolor4] = colorArray;

console.log(ncolor1);
console.log(ncolor2);
console.log(ncolor3);
console.log(ncolor4);

let family = { name: "Smith", members: 3, pet: true };

let { name, members, pet } = family;
console.log(name);
console.log(members);
console.log(pet);

// Exercise:
// 1. Greet the user (ie. using the username as an argument),
// * first by using function declarations
// * then function expression,
// * then arrow function

// maybe prompt for username

function greeting(username) {
  console.log("Hello and welcome " + username);
}

const greet = function (username) {
  console.log("Hello and welcome " + username);
};

let greetArrow = (username) => "Hello and welcome " + username;

greeting("ela");
greet("Lior");
console.log(greetArrow("jhon"));

// Exercise2:
// Create a button in the HTML file
// In the JS file, add an event listener to this button, do the exercise 3 times
// the callback function should be a function declaration
// the callback function should be an anonymous function
// the callback function should be an anonymous ARROW function

let btn1 = document.getElementById("1");
let btn2 = document.getElementById("2");
let btn3 = document.getElementById("3");
//////
btn1.addEventListener("click", btn1action);

function btn1action(event) {
  alert(`hello i am ${event.target.textContent} Btn`);
}
///////
let btn2action = function (event) {
  alert(`hello i am ${event.target.textContent} Btn`);
};

btn2.addEventListener("click", btn2action);
////////////////////////////////

// function testing() {
//   var champion = "javascript.";
// }

// testing();

////

btn3.addEventListener("click", (event) =>
  alert(`hello i am ${event.target.textContent} Btn`)
);
////

["josh", "lily!"];
