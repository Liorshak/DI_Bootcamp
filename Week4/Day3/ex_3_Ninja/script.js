// Exercise 1 : Array To Object
// Instructions
// Using this array
const letters = ["x", "y", "z", "z"];

let lettersObj = {};
for (let item of letters) {
  if (lettersObj[item] > 0) {
    lettersObj[item]++;
  } else {
    lettersObj[item] = 1;
  }
}
console.log(lettersObj);

// Use a for loop to get this output { x: 1, y: 1, z: 2 };

// Use the reduce() method to get this output { x: 1, y: 1, z: 2 };

//option 2nd
console.log(
  letters.reduce((total, value) => {
    if (!(value in total)) {
      total[value] = 0;
    }
    ++total[value];
    return total;
  }, {})
);

///option 3rd
const occurrences = letters.reduce(function (acc, curr) {
  return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
}, {});

console.log(occurrences);
// Exercise 2 : Let’s Play!
// Instructions
// Using this array:

const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];
// Create an array using map() that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
let gameInfoName = gameInfo.map((v) => v.username + "!");
console.log(gameInfoName);

// Filter the gameInfo array to only include users who are on the red team.

let gameInfoRed = gameInfo.filter((v) => v.team === "red");
console.log(gameInfoRed);

// Exercise 3: Dog Competition
// Instructions
// Using the following data

const data = [
  {
    name: "Butters",
    age: 3,
    type: "dog",
  },
  {
    name: "Cuty",
    age: 5,
    type: "rabbit",
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog",
  },
  {
    name: "Red",
    age: 1,
    type: "cat",
  },
  {
    name: "Joey",
    age: 3,
    type: "dog",
  },
  {
    name: "Rex",
    age: 10,
    type: "dog",
  },
];
// Hint: Dog Years -> the dog’s age is the age multiplied by 7.

// Use a loop to find the sum of all the dog’s ages in dog years.
let sumYears = 0;
for (let ele of data) {
  if (ele.type === "dog") {
    sumYears += ele.age * 7;
  }
}

console.log(sumYears);

// Using the map() method, find the sum of all the dog’s ages in dog years.

let sumMap = 0;
data.map((v) => {
  if (v.type === "dog") {
    sumMap += v.age * 7;
  }
});

console.log(sumMap);

// Using the filter() method, find the sum of all the dog’s ages in dog years.

let sumFilter = 0;
data.filter((v) => v.type === "dog").forEach((v) => (sumFilter += v.age * 7));
console.log(sumFilter);

// Using the reduce() method, find the sum of all the dog’s ages in dog years.

let sumDogReduce = data.reduce(
  (acc, v) => (v.type === "dog" ? acc + v.age * 7 : acc),
  0
);

console.log(sumDogReduce);

// Exercise 4 : Email
// Instructions
// Clean up this email to have no whitespaces. Do it in a single line (return a new string).
const userEmail3 = " cannotfillemailformcorrectly@gmail.com ";
clearEmail = userEmail3
  .split("")
  .reduce((total, value) => (value === " " ? total : total + value), "");
console.log(clearEmail);
// Exercise 5: Employees #3
// Instructions
// Using this array

let users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];
// Change the structure of the users array. The user’s full name should be the key and the user’s role should be the value.

let newUsers = users.map((value) => {
  let key = value.firstName + " " + value.lastName;
  return {
    [key]: value.role,
  };
});
console.log(newUsers);

// Example: { 'Bradley Bouley': 'Full Stack Resident' }
// Hint: Step one, create an empty object.
