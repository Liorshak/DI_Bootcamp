// //Exercise

// let famousPeople = [
//   {
//     name: "Angelina Jolie",
//     job: "actor",
//     age: 80,
//   },
//   {
//     name: "Georges Clooney",
//     job: "actor",
//     age: 2,
//   },
//   {
//     name: "Paris Hilton",
//     job: "actor",
//     age: 5,
//   },
//   {
//     name: "Kayne West",
//     job: "singer",
//     age: 16,
//   },
//   {
//     name: "Britney Spears",
//     job: "singer",
//     age: 100,
//   },
// ];

// 1. Use the map method, to create a new array and push the name of the people which age
// is equal or bigger than 16.
// 2. Use the map method, to create a new array and to push an object in the new array.
// Each object should contain the name of the actor, and it's job

// let olderActors = famousPeople.map((v) => {
//   if (v.age > 16) {
//     return v.name;
//   } else {

//   }
// });

// console.log(olderActors);

const studentsFootball = [
  { name: "Rich", score: 33 },
  { name: "Peter", score: 55 },
];
// Use map to push every student into another array. Every student is an object with the key name, score and average. Average should be equal to true if the score is bigger than 50.

let evaluateStudentFootball = studentsFootball.map((v) => {
  let value = v.score > 50 ? true : false;
  return {
    name: v.name,
    score: v.score,
    average: value,
  };
});
console.log(studentsFootball);
console.log(evaluateStudentFootball);

// Exercise 1: filter only the positive value
let numbers = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];

let positiveNumber = numbers.filter((num) => num >= 0);
console.log(positiveNumber);

// ----

// Exercise 2: Suppose you have a list of Star Trek characters,
// and you want to get just the characters that appeared in
// Star Trek: The Next Generation.
// Use filter() to filter the array of characters below

const characters = [
  { name: "James T. Kirk", series: ["Star Trek"] },
  { name: "Spock", series: ["Star Trek", "Star Trek: The Next Generation"] },
  { name: "Jean-Luc Picard", series: ["Star Trek: The Next Generation"] },
  {
    name: "Worf",
    series: ["Star Trek: The Next Generation", "Star Trek: Deep Space Nine"],
  },
];

let theNGChars = characters.filter((obj) =>
  obj.series.includes("Star Trek: The Next Generation")
);
console.log(theNGChars);

// //Exercise NOT MANDATORY - send me the answer by Slack

// 1. Create an array without duplicates using filter
const colors = ["blue", "red", "blue", "yellow"];

uniqueColors = colors.filter((el, i) => !colors.includes(el, i + 1));
console.log(uniqueColors);
