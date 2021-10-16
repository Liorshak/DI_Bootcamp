// Exercise 1 : Is_Blank
// Instructions
// Write a program to check whether a string is blank or not.

let isBlank = (str) => {
  if (str.length === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isBlank("")); // true
console.log(isBlank("abc")); // false

// Exercise 2 : Abbrev_name
// Instructions
// Write a JavaScript function to convert a string into an abbreviated form.

// console.log(abbrevName("Robin Singh")); --> "Robin S."

let abbrevName = (name) => {
  let arrName = name.split(" ");
  arrName[1] = arrName[1][0];
  abbName = arrName.join(" ") + ".";
  return abbName;
};

console.log(abbrevName("Robin Singh")); // "Robin S."

// Exercise 3 : SwapCase
// Instructions
// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example :

// if you input 'The Quick Brown Fox'
// the output should be 'tHE qUICK bROWN fOX'.

let swapCase = (str) => {
  let swapStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      swapStr += str[i].toLowerCase();
    } else {
      swapStr += str[i].toUpperCase();
    }
  }

  return swapStr;
};

console.log(swapCase("The Quick Brown Fox"));

// Exercise 4 : Omnipresent Value
// Instructions
// Create a function that determines whether an argument is omnipresent for a given array.
// A value is omnipresent if it exists in every subarray inside the main array.
// To illustrate:

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// // 3 exists in every element inside this array, so is omnipresent.
// Examples

// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true
// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false

let isOmnipresent = (arr, val) => {
  for (index = 0; index < arr.length; index++) {
    // check if any number in the first val array includes
    if (!arr[index].includes(val)) {
      return false;
    }
  }

  return true;
};

console.log(
  isOmnipresent(
    [
      [1, 1],
      [1, 3],
      [5, 1],
      [6, 1],
    ],
    1
  )
); // true
console.log(
  isOmnipresent(
    [
      [1, 1],
      [1, 3],
      [5, 1],
      [6, 1],
    ],
    6
  )
); // false
