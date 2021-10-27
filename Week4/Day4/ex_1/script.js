// Exercise 1 : Location
// Instructions
// Analyze the code below. What will be the output?
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//  I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// Exercise 2: Display Student Info
// Instructions
// Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.
// For example displayStudentInfo({first: 'Elie', last:'Schoppik'}).
// Destructure the parameter inside the function and return a string as the example seen below:
// displayStudentInfo({first: 'Elie', last:'Schoppik'})
// // output : 'Your full name is Elie Schoppik'`

function displayStudentInfo({ first, last }) {
  console.log(`Your full name is ${first} ${last}`);
}
displayStudentInfo({ first: "Elie", last: "Schoppik" });

// Exercise 3: User & Id
// Instructions
// Using this object
const users = { user1: 18273, user2: 92833, user3: 90315 };

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

console.log(Object.entries(users));

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

let doubleID = [];

for (item of Object.entries(users)) {
  doubleID.push(item[0], item[1] * 2);
}
console.log(doubleID);

// Exercise 4 : Person Class
// Instructions
// Analyze the code below. What will be the output?
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person("John");
// console.log(typeof member);  //  print the type which is: object;

// Exercise 5 : Dog Class
// Instructions
// Analyze the options below.
// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// };
// Which constructor will successfully extend the Dog class?
//   // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };

//   // 2
// class Labrador extends Dog {
//   constructor(name, size) {   <<=== Option number 2 is the correct extended for Dog class
//     super(name);
//     this.size = size;
//   }
// };

//   // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };

//   // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };

// Exercise 6 : Challenges
// Evaluate these (ie True or False)

// [2] === [2] /False

// {} === {} /False

// What is the value of property “number” for each object.

// const object1 = { number: 5 };    //4
// const object2 = object1;          //4
// const object3 = object2;          //4
// const object4 = { number: 5};      //5
// object1.number = 4;

// Create a class Animal with the attributes name, type and color

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

// Create a class Mamal that extends from the Animal class. It has a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

class Mamal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }
  sound = (voice) => {
    console.log(
      `${voice.repeat(3)} the ${this.name} says it is a ${
        this.type
      }  and its in color ${this.color}`
    );
  };
}
// Create a cow object that accepts a name, a type and a color and calls the sound method that moo’s her name, type and color.

let cow = new Mamal("cow", "weed eater", "black and white");
cow.sound("Moo ");
