//part 1

let array = [2, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14];
total = 0;
array.forEach((v) => (total += v));

//part 2

let array2 = [3, 4, 5, 3, 4, 5, 6, 5, 4, 3, 3, 5, 7];

array2 = [...new Set(array2)];

console.log(array2);

//part 3

let sampleArray = [NaN, 0, 15, false, -22, "", undefined, 47, null];
///Expected result : [15, -22, 47]
let sampleIndex = [];
sampleArray.forEach((v, i, a) => (v ? console.log(v) : sampleIndex.push(i)));
console.log(sampleIndex);
sampleIndex.forEach((v, i, a) => sampleArray.splice(a[a.length - 1 - i], 1));
console.log(sampleArray);

//part 4

repeatFun = (str, times) => {
  var word = "";
  for (let i = 0; i < times; i++) {
    word += str;
  }
  return word;
};

console.log(repeatFun("Hello! ", 50));

//part5

const startLine = "     ||<- Start line";
let turtle = "🐢";
let rabbit = "🐇";

let padNum = Math.floor(startLine.length / 2 - 1);
console.log(startLine);
console.log(turtle.padStart(padNum));
console.log(rabbit.padStart(padNum));

turtle = turtle.trim().padEnd(9, "=");
console.log(turtle.padStart(padNum));
