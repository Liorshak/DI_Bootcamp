// Exercise 1: Random Number
// Instructions
// Get a random number between 1 and 100.
// Console.log all even numbers from 0 to the random number.

let endNum = Math.round(Math.random() * 100);
console.log(endNum);
for (let i = 0; i <= endNum; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Exercise 2: Capitalized Letters
// Instructions
// Create a function that takes a string as an argument.
// Have the function return:
// The string but all letters in even indexes should be capitalized.
// The string but all letters in odd indexes should be capitalized.
// Note:

// Index 0 will be considered even.
// The argument of the function should be a lowercase string with no spaces.
// For example,
// capitalize("abcdef") will return ['AbCdEf', 'aBcDeF']

let capitalEvenOdd = (str) => {
  str = str.toLowerCase();
  oddString = "";
  evenString = "";

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      evenString += str[i].toUpperCase();
      oddString += str[i];
    } else {
      oddString += str[i].toUpperCase();
      evenString += str[i];
    }
  }
  return [evenString, oddString];
};

console.log(capitalEvenOdd("abcdefghijklm"));

// Exercise 3 : Is Palindrome?
// Instructions
// Write a JavaScript function that checks whether a string is a palindrome or not.
// Note A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward, e.g., madam, bob or kayak.

let isPalindrome = (str) => {
  let arrPal = str.split("");
  backStr = arrPal.reverse().join("");
  if (str === backStr) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome("bob"));
console.log(isPalindrome("yaka"));
console.log(isPalindrome("madam"));

// Exercise 4 : Biggest Number
// Instructions
// Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
// Note : This function should work with any array;
// Example:

let biggestNumberInArray = (arrayNumber) => {
  let max = 0;
  arrayNumber.forEach((v) => {
    if (!isNaN(v)) {
      max = Math.max(max, v);
    }
  });

  return max;
};

const array = [-1, 0, 3, 100, 99, 2, 99]; // should return 100
const array2 = ["a", 3, 4, 2]; // should return 4
const array3 = []; // should return 0

console.log(biggestNumberInArray(array));
console.log(biggestNumberInArray(array2));
console.log(biggestNumberInArray(array3));

// Exercise 5: Unique Elements
// Instructions
// Write a JS function that takes an array and returns a new array with only unique elements.

let list1 = [1, 2, 3, 3, 3, 3, 4, 5]; //newList = [1,2,3,4,5]
let list2 = [1, 2, 3, 3, 3, 3, 4, 5]; // newList = [1,2,3,4,5]

let uniqueIt = (arr) => {
  let uniqueArr = [];
  arr.forEach((v) => {
    if (uniqueArr.indexOf(v) === -1) {
      uniqueArr.push(v);
    }
  });

  return uniqueArr;
};

console.log(uniqueIt(list1));

console.log(uniqueIt(list2));
