// I want to go through the colors array, and print each letter of each color
// 1. Do I need one or more loops?
// 2. Which type of loop is needed?
// 3. What is the logic inside the loop?

// Output should be like this:
// "b"
// "l"
// "u"
// "e"

// "r"
// "e"
// "d"

let colors = ["blue", "red", "yellow", "lightblue"];

colors.forEach((v, i) => {
  for (let letters of v) {
    console.log(letters);
  }
});

// //1st function
// 1. Create a function, that accepts 3 arguments:
// * name of pet
// * color of pet
// * breed of pet

// 2. The function will alert a sentence using the values

let dogExplanation = function (N, C, B) {
  console.log(`${N} is a dog in ${C} color from type ${B}`);
};

// 2nd function
// 1. Create a function, that accepts 2 arguments:
// * your age
// * array of favorite colors
// 2. In the function,
// * create a local variable, that is equal to twice your age
// * go through the colors array, and console.log all the colors
// * try to call the local variable outside of the function, what happens?

let ageColor = function (age, color) {
  let doubleAge = 2 * age;
  console.log(doubleAge);
  color.forEach((V) => {
    console.log(V);
  });
};

dogExplanation("Tuna", "Black", "Mixed-race");
ageColor(35, colors);

console.log(doubleAge);
