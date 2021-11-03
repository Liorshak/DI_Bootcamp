//part 1

makeAllCaps = (array) => {
  console.log(array);
  return array.map((v) => v.toUpperCase());
};

sortWords = (array) => {
  console.log(array);
  return array.sort();
};

//testing
Promise.resolve(["tomatoes", "avocados", "cucumbers"])
  .then(makeAllCaps)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

// Part 2

let morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;

let toJs = (json) => {
  return new Promise((resolve, reject) => {
    if (Object.entries(JSON.parse(json)).length > 0) {
      resolve(JSON.parse(json));
    } else {
      reject("This is empty, what is this!");
    }
  });
};

//   The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
//   This function should asks the user for a word or a sentence
//   if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
//   else return an array with it’s morse translation of the user’s word.

//   The last function called joinWords(), should join the morse translation by using line break.

let toMorse = (morseJS) => {
  let wordArr = prompt(
    "give me a word or a sentence and i will translate to morse"
  )
    .toLowerCase()
    .replaceAll(" ", "")
    .split("");
  // console.log(wordArr);
  return new Promise((resolve, reject) => {
    if (wordArr.every((v) => v in morseJS)) {
      // console.log(wordArr.map((v) => morseJS[v]));
      resolve(wordArr.map((v) => morseJS[v]));
    } else {
      //   console.log(wordArr.every((v) => v in morseJS));
      reject("The word/sentence is in correct, it have strange Chars");
    }
  });
};

let joinWords = (arr) => arr.join("\n");

toJs(morse)
  .then(toMorse)
  // .then((res) => toMorse(res))
  .then(joinWords)
  // .then((res) => joinWords(res))
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
