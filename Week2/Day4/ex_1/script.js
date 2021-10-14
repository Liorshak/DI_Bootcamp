// Exercise 1 : Information
// Instructions
// Part I

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.

function infoAboutMe() {
  console.log("my name is Lior age 35 and i like programing");
}
infoAboutMe();

// Part II

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

function infoAboutPerson(personName, personAge, personFavoriteColor) {
  console.log(
    `Your name is ${personName} you are ${personAge} years old, your favorite color is ${personFavoriteColor}`
  );
}
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

// Part III

// Add a parameter personHobbies to the function infoAboutPerson(personName, personAge, personFavoriteColor, personHobbies).
// The function should
// console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// console.log the person’s hobbies one by one (ie. loop through the array of hobbies).
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue", ["tennis", "painting"])
// infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])

let about = function (
  personName,
  personAge,
  personFavoriteColor,
  personHobbies
) {
  console.log(
    `Your name is ${personName} you are ${personAge} years old, your favorite color is ${personFavoriteColor}`
  );
  for (let i = 0; i < personHobbies.length; i++) {
    console.log(personHobbies[i]);
  }
};

about("David", 45, "blue", ["tennis", "painting"]);
about("Josh", 12, "yellow", [
  "videoGame",
  "hanging out with friends",
  "playing cards",
]);

// Exercise 2 : Keyless Car
// Instructions
// Ask the user for their age, and save the value to a variable.
// Create a function called checkDriverAge() that will notify the user if they are permitted to drive. They must be at least 18 to drive.
// if the user is too young, alert “Sorry, you are too young to drive this car. Powering off”
// if the user is old enough, alert “You are old enough to drive, Powering On. Enjoy the ride!”
// if the user just turned 18, alert “Congratulations on your first year of driving. Enjoy the ride!”
// Call the function.
// Instead of using prompt to ask the user for their age, have the checkDriverAge() function accept an argument age.

let userAge = parseInt(prompt("what is your age?"));

const checkDriverAge = function () {
  if (userAge < 18) {
    console.log("Sorry, you are too young to drive this car. Powering off");
  } else if (userAge > 18) {
    console.log("You are old enough to drive, Powering On. Enjoy the ride!");
  } else {
    console.log(
      "Congratulations on your first year of driving. Enjoy the ride!"
    );
  }
};
checkDriverAge();

// Exercise 3: Odd Or Even
// Instructions
// Create a function called checkNumber() that takes no parameter.
// In the function, loop through numbers 0 to 100.
// Add an if/else block
// If the number is even, console.log "the number <number> is even"
// Else, console.log "the number <number> is odd"
// Call the function

let checkNumber = function () {
  for (i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(`the number ${i} is even`);
    } else {
      console.log(`the number ${i} is odd`);
    }
  }
};
checkNumber();

// Exercise 4: Find The Numbers Divisible By 23
// Instructions
// Create a function call isDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.
// Console.log all the numbers divisible by 23.
// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313

// Bonus: Add a parameter divisor to the function.

// isDivisible(divisor)

// Example:
// isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
// isDivisible(45) : Console.log all the numbers divisible by 45, and their sum

let isDivisible = function (divisor) {
  let sum = 0;
  for (i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      console.log(i);
      sum += i;
    }
  }
  console.log(sum);
};
isDivisible(23);
isDivisible(3);
isDivisible(45);

// Exercise 5 : Amazon Shopping
// Instructions
// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }
// Create a function called checkBasket().
// It should:
// prompt the user for an item
// let the user know if the item is in the basket
// Hint: Use the in keyword inside the conditional

let amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100,
};

let checkBasket = function () {
  let userItem = prompt("what item are you checking for");
  if (userItem in amazonBasket) {
    console.log(userItem, "is in the basket");
  } else {
    console.log(userItem, "is in not the basket");
  }
};

checkBasket();

// Exercise 6 : What’s In My Wallet ?
// Instructions
// Given a item price and an array representing the amount of change in your pocket, determine whether or not you can afford the item.
// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// Quarters  = 0.25
// Dimes = 0.10
// Nickels = 0.05
// Pennies = 0.01
// To illustrate:
// changeEnough([25, 20, 5, 0], 4.25) should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

// Examples

// changeEnough([2, 100, 0, 0], 14.11) ➞ false
// changeEnough([0, 0, 20, 5], 0.75) ➞ true

let worth = [0.25, 0.1, 0.05, 0.01];

const changeEnough = function (arr, price) {
  let sumCoins = 0;
  arr.forEach((v, i) => {
    sumCoins += v * worth[i];
  });
  if (sumCoins > price) {
    return true;
  } else {
    return false;
  }
};

console.log(changeEnough([2, 100, 0, 0], 14.11));
console.log(changeEnough([0, 0, 20, 5], 0.75));

// Exercise 7 : Shopping List
// Instructions
// let stock = {
//     "banana": 6,
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }

// let prices = {
//     "banana": 4,
//     "apple": 2,
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// }
// Add the stock and prices objects to your js file.
// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
// Create a function called myBill() that takes no parameters.
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock.
// If the item is in stock find out the price in the prices object.
// Call the myBill() function.
// Bonus: If the item is in stock, decrease the item’s stock by 1

let stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

let prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

let shoppingList = ["banana", "orange", "apple"];

const myBill = () => {
  let total = 0;
  shoppingList.forEach((v) => {
    if (v in stock) {
      total += prices[v];
      stock[v]--;
      console.log(
        `${v} found in stock! its price is ${prices[v]} i'm adding to your bill and reducing the stock`
      );
    }
  });
  return total;
};

console.log(myBill());

// Exercise 8 : Tips
// Instructions
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// The calculator has the following rules:
// 1. Tip 20% when the bill is less than $50,
// 2. Tip 15% when the bill is between $50 and $200,
// 3. Tip 10% if the bill is more than $200.

// Ask John for the amount of the bill.
// Create the program explained above.
// In the end, John would like to know:
// Tip amount.
// Final bill (bill + tip).
// (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

const tipCalculator = (bill) => {
  if (bill < 50) {
    return bill * 1.2;
  } else if (bill > 200) {
    return bill * 1.1;
  } else {
    return bill * 1.15;
  }
};

console.log("total you will need to pay include the tip", tipCalculator(70));

// Exercise 9 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

// Define a function called planeRideCost().
// It should ask the user for their destination.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$
// If the user doesn’t answer or if the answer is not a string, ask again.

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost.
// Call the function totalVacationCost()
// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function.

const hotelCost = (nights) => {
  return 140 * nights;
};

const planeRideCost = (location) => {
  if (location == "london") {
    return 183;
  } else if (location == "paris") {
    return 220;
  } else {
    return 300;
  }
};

const rentalCarCost = (days) => {
  if (days > 10) {
    return 40 * days * 0.95;
  } else {
    return 40 * days;
  }
};

const totalVacationCost = () => {
  let location = prompt("What is the destination you would like to travel??"); /// couldnt find the right sentence to make sure its buggy
   
  let nights =parseInt(prompt("How many nights you would like to stay in the hotel?"));
    

  let days = parseInt(prompt("How many days you would like to rent a car?"));
  
  
  console.log(
    `The car cost: ${rentalCarCost(days)}, the hotel cost: ${hotelCost(
      nights
    )}, the plane tickets cost: ${planeRideCost(
      location
    )}. the total cost of the trip is ${
      rentalCarCost(days) + hotelCost(nights) + planeRideCost(location)
    }`
  );
};

totalVacationCost();
