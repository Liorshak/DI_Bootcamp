// Exercise 1 : Analyzing
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ["bread", ...vegetables, "chicken", ...fruits];
console.log(result); // the spread will break all elements to 1 array = ['bread',"carrot", "potato", 'chicken', "apple", "orange"]

// ------2------
const country = "USA";
console.log([...country]); // ["U","S","A"]

// ------Bonus------
let newArray = [...[, ,]]; // [undefined, undefined]
console.log(newArray);

// Exercise 2 : Employees
// Instructions
// Using this array:

let users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];
// Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)

let helloArr = users.map((v) => `Hello ${v.firstName}`);
console.log(helloArr);

// Using the filter() method, congratulate only the Full Stack Residents.

let specialHelloArr = users
  .filter((v) => v.role === "Full Stack Resident")
  .map((v) => "Hello " + v.firstName);
console.log(specialHelloArr);

// Exercise 3 : Star Wars
// Instructions
// Using this array
let epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];
// 1. Use the reduce() method to combine all of these into a single string.
let theStory = epic.reduce((acc, v) => (acc += " " + v + " "));
console.log(theStory);

// Exercise 4 : Employees #2
// Instructions
// Using this object:

let student = [
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Liam", course: "Computer Science", isPassed: false },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marco", course: "Robotics", isPassed: true },
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
  { name: "Jamie", course: "Big Data", isPassed: false },
];

//  Using the filter() method, create a new array, containing the students that passed the course.
// Bonus : Chain the filter method with a map method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)

let passStudents = student.filter((v) => v.isPassed === true);

let passStudentsWCong = student
  .filter((v) => v.isPassed === true)
  .map((v) => `Good job ${v.name}, you passed the course in ${v.course}`);

console.log(passStudents);
console.log(passStudentsWCong);
