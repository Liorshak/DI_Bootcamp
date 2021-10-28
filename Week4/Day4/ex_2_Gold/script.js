//part1

let printFullName = ({ first, last }) =>
  console.log(`Your full name is ${first} ${last}`);

printFullName({ first: "Elie", last: "Schoppik" });

//part 2

// Examples;
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]

keysAndValues = (obj) => {
  ///not working
  let keyArray = Object.keys(obj).sort();
  let valueArray = Object.values(obj).sort();
  return keyArray.concat(valueArray);
};

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));

// part 3

// class Counter {
//   constructor() {
//     this.count = 0;
//   }

//   increment() {
//     this.count++;
//   }
// }

// const counterOne = new Counter();
// counterOne.increment(); //1
// counterOne.increment(); //2

// const counterTwo = counterOne;  //equal by reference
// counterTwo.increment();  //3

// console.log(counterOne.count);  //its the same obj as counter 2 so it will be 3!
