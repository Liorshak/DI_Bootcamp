// Exercise 1 : Age Difference
// Instruction
// Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY
// -------------------------------------------------------------
let year1 = parseInt(
  prompt("What is the year person 1 was born in YYYY template")
);
let year2 = parseInt(
  prompt("What is the year person 1 was born in YYYY template")
);

let age1 = 2021 - year1;
let age2 = 2021 - year2;

// // ////// algorithm thinking  ageS - year= (ageB-year)/2
// // ////  2ageS -2year= ageB -year
// // /// 2ageS -year = ageB
// // /// 2ageS -ageB=year
let before;

if (age1 > age2) {
  before = 2 * age2 - age1;
  if (before < 0) {
    console.log(
      "there is not a such time some one was half the age of the other, someone is too old"
    );
  } else {
    console.log(
      `The year that person 2 was half the age of person 1 is: ${
        year2 + age2 - before
      }`
    );
  }
} else if (age2 > age1) {
  before = 2 * age1 - age2;
  if (before < 0) {
    console.log(
      "there is not a such time some one was half the age of the other, someone is too old"
    );
  } else {
    console.log(
      `The year that person 1 was half the age of person 2 is: ${
        year2 + age2 - before
      }`
    );
  }
} else {
  console.log("Are you playing with me you both the same age!");
}
// ----------------------------------------------------------------
// Exercise 2 : Zip Codes
// Instruction
// Harder exercise
// Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions

// While working in a Post Office you must have the clients’ zip code in order to send them their letters.
// Ask the client for their zip code and console.log “success” or “error” based on the following rules.
// Zip codes consists of 5 numbers
// Must only contain numbers
// Must not contain any whitespace (spaces)
// Must not be greater than 5 digits in length

// let zipCode= prompt("give me you zip code");

let zipCode = prompt("give me your zip code");

// Option 1
if ((parseInt(zipCode).length = zipCode && zipCode.length == 5)) {
  console.log("success");
} else {
  console.log("error");
}
//Option 2

flag = true;
if (zipCode.length != 5) {
  flag = false;
}

let zipArr = zipCode.split("");

for (let i = 0; i < zipCode.length; i++) {
  if (isNaN(parseInt(zipArr[i]))) {
    flag = false;
  }
}
if (flag) {
  console.log("Success");
} else {
  console.log("Error");
}

///option 3

if (zipCode.match("^[0-9]*$") && zipCode.length == 5) {
    console.log("Success");
}
else{
    console.log("Error");
}

// Exercise 3 : Secret Word
// Instruction
// Harder exercise
// Hint : Use Regular Expressions

// Prompt the user for a word and save it to a variable.
// Delete all the vowels of the word and console.log the result.
// Bonus: Replace the vowels with another character and console.log the result
// a = 1
// e = 2
// i = 3
// o = 4
// u = 5

let word= prompt("give me a word")
let wordNV=word.replace(/[aeiou]/gi,'');
console.log(wordNV);
let wordRe=word.replace(/a/gi,"1");
wordRe=wordRe.replace(/[e]/gi,"2");
wordRe=wordRe.replace(/[i]/gi,"3");
wordRe=wordRe.replace(/[o]/gi,"4");
wordRe=wordRe.replace(/[u]/gi,"5");

console.log (wordRe);