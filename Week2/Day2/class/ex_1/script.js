let userCart = {
  username: "John",
  password: 1234,
  isUserSignedIn: true,
  cart: {
    apple: 2,
    banana: 1,
    pear: 5,
  },
  prices: {
    apple: 0.5,
    banana: 0.8646466363,
    pear: 0.2,
  },
};

// Add the lastname Smith to the object
// Change the price of the pear, so it will contain the Taxes
// Ask the user for the fruit he wants between Apple, Banana and Pear. Make sure that your code accept all type of strings, for example "Banana" or "banana" or "BaNaNA"
// Console.log the price for the specific fruit the user wants
// round banana price to 2 decimal points

userCart["lastName"] = "Smith";
userCart["prices"]["pear"] *= 1.17;
console.log(userCart["prices"]["pear"]);
chFruit = prompt("pick a fruit: Apple, Banana or Pear").toLowerCase();
console.log(chFruit);
console.log(`The price for ${chFruit} is ${userCart["prices"][chFruit]}`);
userCart["prices"]["banana"] =
  Math.round(userCart["prices"]["pear"] * 100) / 100;
console.log(userCart["prices"]["banana"]);

// ex 2 conditional

// 1. If the user is SignedIn - show him his name and password
// 2. If not - alert the user "you need to sign in"

//ex 3
// 1. If the user is John AND his password is 1234 - alert him "You are signed in"
// 2. If the user is John OR his password is 1234 - alert him "One credential is false"
// 3. Else,alert the user "you need to sign in

if (userCart["isUserSignedIn"]) {
  console.log(`You username is ${userCart["username"]} and your password is ${userCart["password"]}`);

} 
else {
  console.log("you need to sign in");
}

if (userCart["username"] === "John" && userCart["password"] == 1234) {
  alert("You are signed in");
} else if (userCart["username"] === "John" || userCart["password"] == 1234) {
  alert("One credential is false");
} else {
  alert("you need to sign in");
}
