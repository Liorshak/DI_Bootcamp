const time = require("./date.js");

console.log(`1st of January 2022 is in ${time.time("1/1/2022")}`);

console.log(
  `the person who was born in 19/8/1986 is ${time.age()} minutes old`
);

console.log(`The next holiday : Hanoka will be on ${time.time("11/28/2021")} `);
