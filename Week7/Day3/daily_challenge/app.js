const fs = require("fs");
let possition = 0;

// part 1
fs.readFile("./Rightleft.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    let moves = data.toString();
    for (let char of moves) {
      if (char == ">") {
        possition++;
      }
      if (char == "<") {
        possition--;
      }
    }
    console.log(possition);
  }
});

//part 2

let count = 0;

fs.readFile("./Rightleft.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    possition = 0;
    let moves = data.toString();
    for (let char of moves) {
      count++;
      if (char == ">") {
        possition++;
      }
      if (char == "<") {
        possition--;
      }
      if (possition == -1) {
        console.log(
          `In the number of steps:${count} possition will be ${possition}`
        );
        return;
      }
    }
  }
});
