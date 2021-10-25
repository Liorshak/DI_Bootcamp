// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

// Copy this object using the method that was taught in today’s lesson.
// Change the value of totalPrice to 35$. Will we also see this modification in the copied objects ?
// Change the value of payed to false. Will we also see this modification in the copied objects ? Why ?

let groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    payed: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

// what you mean by copy? does you means groceries 1= groces2? if so :\

// let groceries2=groceries

// groceries2.totalPrice="35$"     // in this way it will also change in groceries its exactly the same object just with 2 alias
// groceries2.other.payed=false;  // same as before

/// 2nd option creating just a copy of the object we didnt learn any method , just a sec asking google,

let shoppingList = Object.assign({}, groceries);
console.log(shoppingList);

shoppingList.totalPrice = "35$"; // in the groceries it will stay 20$ because we did a copy it doesnt effect
shoppingList.other.payed = false; // in this thing it change! because we did copy to the main object but this is an object inside, the object is  the same as in groceries object same object different alias
