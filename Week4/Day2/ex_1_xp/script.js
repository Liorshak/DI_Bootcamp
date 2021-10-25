// Exercise 1 : Function With Two Parameters
// Instructions
// Create a one line function that receives two numbers as parameters and returns the sum.

let sumFunc = (num1, num2) => num1 + num2;

console.log(sumFunc(4, 5));

// Exercise 2 : Closure
// Instructions
// Analyse the code below, and before executing it, predict the outcome of the last line.
const addTo = (x) => (y) => x + y;
var addToTen = addTo(10);
addToTen(3); // x= 10 y =3 = 13

// Exercise 3 : Currying
// Instructions
// Analyse the code below, and before executing it, predict the outcome of the last line.
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b; // a=30 b=1 = 31
curriedSum(30)(1);

// Exercise 4 : Currying
// Analyse the code below, and before executing it, predict the outcome of the last line.
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b; /// a = 5  b =12  = 17
const add5 = curriedSum(5);
add5(12);

// Exercise 5 : Composing
// Analyse the code below, and before executing it, predict the outcome of the last line.
const compose = (f, g) => (a) => f(g(a)); /// a= 10  --> g(10) =15 -->f(15) =16
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10);
