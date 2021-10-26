// Exercise 1 : Analyzing The Map Method
// Instructions
// Analyze this code, what will be the output ?

// [1, 2, 3].map(num => {
//   if (typeof num === 'number') return num * 2;     /// will output [2,4,6]
//   return ;
// });

// Exercise 2: Analyzing The Reduce Method
// Instructions
// Analyze this code, what will be the output ?

// [[0, 1], [2, 3]].reduce(
//   (acc, cur) => {
//     return acc.concat(cur);  // [1, 2, 0, 1, 2, 3]
//   },
//   [1, 2],
// );

// Exercise 3 : Analyze This Code
// Instructions
// Using this code:

// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//                                           //console.log each element, then alert each element than
//   console.log(num, i);                   // than time 2 and putting in a new array
//   alert(num); //                         [2,4,8,10,16,18]
//   return num * 2;
// });
// What is the value of i ?               ///its the index 0, 1, 2,3,4 ,5

// Exercise 4 : Nested Arrays
// Instructions
// Using a method, take this array
const array = [[1], [2], [3], [[[4]]], [[[5]]]]; //and modify it to look like this array: [1,2,3,[4],[5]].
let flatArray = array.flat(2);
console.log(flatArray);

// Bonus Try to do it on one line.

// Using a method, take this array
const greeting = [
  ["Hello", "young", "grasshopper!"],
  ["you", "are"],
  ["learning", "fast!"],
]; //and modify it to look like this array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ].
let shellowGreet = greeting.map((v) => v.join(" "));
console.log(shellowGreet);
newStr = shellowGreet.join(" ");
console.log(newStr);
// Turn the greeting array into a string: ‘Hello young grasshopper you are learning fast!’.
// Turn the trapped number 3
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]; //into: [3]
let breakFree = trapped.flat(Infinity);
console.log(breakFree);
