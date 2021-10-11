let userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5
	},
	prices : {
		apple : 0.5,
		banana : 0.8646466363,
		pear : 0.2
	}
};

// Add the lastname Smith to the object
// Change the price of the pear, so it will contain the Taxes
// Ask the user for the fruit he wants between Apple, Banana and Pear. Make sure that your code accept all type of strings, for example "Banana" or "banana" or "BaNaNA"
// Console.log the price for the specific fruit the user wants

userCart["lastName"] = "Smith";
userCart["prices"]["pear"]*=1.17;
console.log(userCart["prices"]["pear"]);
chFruit=prompt("pick a fruit: Apple, Banana or Pear").toLowerCase();
console.log(chFruit);
console.log(`The price for ${chFruit} is ${userCart["prices"][chFruit]}`);