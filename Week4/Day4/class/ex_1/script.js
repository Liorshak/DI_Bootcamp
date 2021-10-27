//Exercise
// 1. Turn an array of voter objects into a count of how many people voted
// 2. Do the exercise using reduce only
// 3. Then do it by chaning map and reduce
let voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Bob", age: 30, voted: true },
];

let sumVoters = voters.reduce((total, el) => {
  if (el.voted === true) {
    return total + 1;
  } else {
    return total;
  }
}, 0);

console.log(sumVoters);

let sumVotersFR = voters
  .filter((v) => v.voted === true)
  .reduce((total) => total + 1, 0);

console.log(sumVotersFR);

let sumVotersMR = voters
  .map((v) => v.voted)
  .reduce((total, v) => (v === true ? total + 1 : total), 0);
console.log(sumVotersMR);

let sumVotersFMR = voters
  .filter((v) => v.voted === true)
  .map((v) => v.name)
  .reduce((total) => total + 1, 0);
console.log(sumVotersFMR);

///part 2

getDetails({ name: "Harry Potter", house: "Gryfindor", goodstudent: false });

function getDetails({ name, house, goodstudent }) {
  console.log(name);
  console.log(house);
  console.log(goodstudent);
}

function getDetails1({ name, house, friend: { friendName, age } }) {
  //console log all the data
  console.log(name);
  console.log(house);
  console.log(friendName);
  console.log(age);
}
getDetails1({
  name: "Hermione Granger",
  house: "Gryfindor",
  friend: { friendName: "Harry Potter", age: 20 },
});

// Exercise Object Destructuring
// 1. Write a function called displayName() that takes an object as an
// argument and prints the person's first and last name.
// Use object destructuring in the function argument.
// And also, use template strings when printing the first and last name.
// Use the object below:
// 2. Change the displayName() to print the person's first and last name
// the houses location and the value of those houses
const person = {
  first: "Elon",
  last: "Musk",
  housesLocation: ["new york", "paris"],
  twitter: "@elonmusk",
  company: "Space X",
  houses: {
    amount: 2,
    value: "5Million",
  },
};

function displayName({
  first,
  last,
  housesLocation: [location1, location2],
  houses: { value },
}) {
  console.log(
    `the name is ${first} ${last} and he have houses in total of ${value} the location houses in: ${location1} and ${location2}`
  );
}

displayName(person);
