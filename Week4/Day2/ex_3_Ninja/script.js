// Exercise 1 : Merge Words
// Instructions
// Create a function such as mergeWords('Hello')() that returns the following string: 'Hello'
// When the function is called without any arguments return a string where all words have been merged into a sentence.

// For example
// mergeWords('There')('is')('no')('spoon.')();
// should return 'There is no spoon.
function mergeWords(str) {
  return function (str2) {
    if (str2 === undefined) {
      return str;
    } else {
      return mergeWords(str + " " + str2);
    }
  };
}
// console.log(mergeWords("Hello")());
console.log(mergeWords("There")("is")("no")("spoon.")());
// Below is a verbose JavaScript solution, turn this into a currying function.

// function mergeWords(string) {
//  return function(nextString) {
//    if (nextString === undefined) {
//      return string;
//    } else {
//      return mergeWords(string + ' ' + nextString);
//    }
//  }
// }

const mergeWords2 = (string) => (string2) => {
  if (string2 === undefined) {
    return string;
  } else {
    return mergeWords2(string + " " + string2);
  }
};
console.log(mergeWords2("There")("is")("no")("spoon.")());
