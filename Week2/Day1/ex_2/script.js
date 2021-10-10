// Exercise 1 : Favorite Color

let me = ["my", "favorite", "color", "is", "blue"];
me = me.join(" ");
console.log(me);

// Exercise 2 : Mixup

let str1 = "veggie";
let str2 = "towards";

let newStr1 = str2.slice(0, 2) + str1.slice(2, str1.length);
let newStr2 = str1.slice(0, 2) + str2.slice(2, str2.length);

console.log(`${newStr1} ${newStr2}`);

//Exercise 3 : Calculator

// Prompt the user for the first number.
// Store the first number in a variable called num1.
// Prompt the user for the second number.
// Store the second number in a variable called num2.
// Create an Alert where the value is the SUM of num1 and num2.
// BONUS: Make a program that can subtract, multiply, and also divide!

let num1 = parseInt(prompt("Please insert a number"));
// console.log(typeof(num1))

let num2 = parseInt(prompt("Please insert a number"));

let sum = num1 + num2;
//alert("The sum of the numbers is: " + sum);    //last line for ex_3


///Bonus addition
let outcome = prompt(
  "choose an math outcome: subtract / multiply / divide /sum"
);

outcome = outcome.toLowerCase();
var result;

if (outcome == "subtract") {
  result = num1 - num2;
  alert(`the outcome of ${outcome} is: ${result}`);
} else if (outcome == "multiply") {
  result = num1 * num2;
  alert(`the outcome of ${outcome} is: ${result}`);
} else if (outcome == "divide") {
  result = num1 / num2;
  alert(`the outcome of ${outcome} is: ${result}`);
} else if (outcome == "sum") {
  result = num1 + num2;
  alert(`the outcome of ${outcome} is: ${result}`);
}
else{
    alert(" You have been a naughty boy you didnt follow the rules, your lost, your computer is going to be formatted in 3 sec have a nice life")
}