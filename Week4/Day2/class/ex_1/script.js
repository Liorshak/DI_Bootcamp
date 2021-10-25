// 1. Add in your html file a div with an id of container
// 2. Create a self invoking function that takes one parameter
// the name of the user
// 3. When invoked, the function add the name of the user in a sentence in the div

(function (name) {
  let container = document.getElementById("container");
  let newText = document.createTextNode(name);
  container.appendChild(newText);
})("lior");

// First Part
// 1. Create a function named `starWars` that takes no parameter.
// 2. The function should declare a variables `characters` equal to an empty array
// 3. In the startWars function, create a function named `createCharacter`.
// It receives two parameters, the first name and last name of a character.
// If the character doesn't have a last name, the default should be "Smith"
// 4. The createCharacter function should console.log the fullname of the character,
// and push it to the `characters` array.
// 5. Call the `createCharacter` function a few times inside the starWars function
// and console.log the `characters` array

// Second Part
// 6. Change the `starWars` function, to take one parameter, the name of the
// spaceship the characters are in
// 7. The `createCharacter` function should now console.log the fullname and spaceship
// of the character
// 8. Call the `starWars` function once with the spaceship "The Devastator", and another times
// with the spaceship "Republic Attack Cruiser". what happens?

// function starWars() {
//   let characters = [];

//   function createCharacter(fName, lName = "Smith") {
//     console.log("The Full name is: " + fName + lName);
//     characters.push(fName + " " + lName]);
//   }

//   createCharacter("Lior");
//   createCharacter("Luke", "Skywalker");
//   createCharacter("Chimba", "Chimbaba");

//   return characters;
// }

// console.log("starWars");
// //// part 2

function starWars(ship) {
  let characters = [];

  function createCharacter(fName, lName = "Smith") {
    console.log(
      "The Full name is: " + fName + lName + "from spaceship: " + ship
    );
    characters.push(fName + " " + lName);
  }

  createCharacter("Lior");
  createCharacter("Luke", "Skywalker");
  createCharacter("Chimba", "Chimbaba");

  return characters;
}

// console.log(starWars());

console.log(starWars("The Devastator"));
console.log(starWars("Republic Attack Cruise"));

// Write a function called specialMultiply which accepts two parameters.
// If the function is passed both parameters,
// it should return the product of the two.
// If the function is only passed one parameter -
// it should return a function which can later
// be passed another parameter to return the product.
// You will have to use closure and arguments to solve this.
// Examples:
//     specialMultiply(3,4); // 12
//     specialMultiply(3)(4); // 12
//     specialMultiply(3); // function(){}....

function specialMultiply(num1, num2 = null) {
  function multiply(num2) {
    return (num1 *= num2);
  }
  if (num2 === null) {
    return multiply;
  } else {
    return multiply(num2);
  }
}

console.log(specialMultiply(3, 4));
console.log(specialMultiply(3)(4));
console.log(specialMultiply(3));
