// Exercise 1 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

let colors = ["blue", "green", "purple", "red"];
colors.forEach((v, i) => console.log(`My #${i + 1} choice is ${v}`));

let suffix = ["1st", "2nd", "3rd", "4th", "5th"];
colors.forEach((v, i) => console.log(`My ${suffix[i]} choice is ${v}`));

// Exercise 2 : List Of People
// Instructions
// let people = ["Greg", "Mary", "Devon", "James"]

let people = ["Greg", "Mary", "Devon", "James"];
people.shift(); // Write code to remove “Greg” from the people array.
people[people.indexOf("James")] = "Jason"; // Write code to replace “James” to “Jason”.
people.push("Lior"); // Write code to add your name to the end of the people array.
people.forEach((element) => {
  console.log(element);
}); // Using a loop, iterate through the people array and console.log each person.

let i = 0;

do {
  console.log(people[i]);
  i++;
} while (people[i] != "Jason"); // Using a loop, iterate through the people array and after you console.log “Jason” exit the loop.

peopleCopy = people.slice(people.indexOf("Mary") + 1, people.indexOf("lior"));//Write code to make a copy of the people array using slice. The copy should NOT include “Mary” or your name.
console.log(people.indexOf("Mary")); // Write code that console.logs Mary’s index. take a look at indexOf on google.

// Write code that gives the indexOf “Foo” (this should return -1). Why does it return -1
console.log(people.indexOf("foo")); //-1 because not in the array

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
last = people[people.length - 1];
console.log(last);

// Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number, while the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
// Hint : Check the data type you receive from the prompt (ie. typeof method)

let userNum;
while (userNum < 10 || isNaN(userNum)) {
  userNum = parseInt(prompt("guess a number to break free"));
}

// Exercise 4 : Attendance
// Instructions
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina",
};
// Given the object above where the key is the students name and the value is the country they are from.
// Prompt the student for their name :
let student = prompt("what your student name?").toLowerCase();
// If the name is in the object, console.log the name of the student and the country they come from.
// example: "Hi! I'm [name], and I'm from [country]."
// Hint: Look up the statement if ... in
// If the name is not in the object, console.log: "Hi! I'm a guest."

if (student in guestList) {
  console.log(`Hi! I'm ${student}, and I'm from ${guestList[student]}.`);
} else {
  console.log("Hi! I'm a guest");
}

// Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Console.log the keys. (using a for loop).
// Console.log the values. (using a for loop).

let family = {
  name: "Shaked",
  children: 1,
  income: "good",
  married: true,
  location: "Manara",
};

for (let element in family) {
  console.log(element);
}
for (let element in family) {
  console.log(family[element]);
}

// Exercise 6
// Instructions
let details = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};
// Given the object above, console.log “my name is Rudolf the raindeer”
let sentence =""
for (let element in details) {
    sentence+=element + " ";
    sentence+=details[element]+ " ";
}
console.log(sentence);

// Exercise 7 : Secret Group
// Instructions
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
let secretName=""
names.forEach((element) => secretName+=element[0]);

console.log(secretName);
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society.
