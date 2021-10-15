let guess;
let theWord;

let arrMainWord = [];
let arrGuessWord = [];
let arrGuessTried = [];
let arrGuessPossible = [];
let alphabet = "abcdefghijklmnopqrstuvwxyz";

let playGame = () => {
  let attempt = 10;
  arrGuessPossible = alphabet.split("");
  let guessWord = "*".repeat(validWord().length); ///creating same length string as theWord
  arrGuessWord = guessWord.split(""); /// storing in data the string as array
  // player 2 guessing
  while (attempt != 0 && arrGuessWord.join("") != theWord) {
    guess = validChar(attempt);
    if (arrMainWord.indexOf(guess) > -1) {
      updateCharTrue();
    } else {
      updateCharFalse();
      attempt--;
    }
  }
  if (attempt === 0) {
    alert("OUT OF ATTEMPTS , YOU LOSE!!");
  } else {
    alert("CONGRATS YOU WON!!");
  }
};

let validWord = () => {
  ///check if player 1 word is ok , at least 8 char only letters , return lower case arr

  theWord = prompt(
    "Player 1 please give a word from only letters and have at least 8 chars"
  );
  while (!/^[a-z]+$/i.test(theWord) || theWord.length < 8) {
    theWord = prompt(
      "Not a valid word please try again, only letters, at least 8 chars"
    );
  }
  theWord = theWord.toLowerCase();
  arrMainWord = theWord.split("");
  return arrMainWord;
};

let validChar = (attempt) => {
  /// check if player 2 char is ok , can only from arrGuessPossible
  guess = prompt(
    `The word is: (${showWord()}), you have: ${attempt} tries, please guess a letter: ${showPossible()} You already guess: ${showGuessed()}`
  );
  while (guess.length != 1 || showPossible().indexOf(guess) == -1) {
    guess = prompt(
      `You entered a invalid char ,the word is: (${showWord()}), you have: ${attempt} tries, please guess a letter: ${showPossible()} You already guess: ${showGuessed()}} `
    );
  }

  return guess;
};

let showWord = () => {
  /// Show the string word with already good guess letters

  return arrGuessWord.join("");
};

let updateCharTrue = () => {
  charUpdate();
  let correctIndex = [];
  arrMainWord.forEach((v, i) => {
    if (v === guess) {
      correctIndex.push(i);
    }
  });
  correctIndex.forEach((v) => {
    arrGuessWord[v] = guess;
  });
  guessWord = arrGuessWord.join("");
};

let charUpdate = () => {
  arrGuessTried.push(guess);
  let index = arrGuessPossible.indexOf(guess);
  arrGuessPossible.splice(index, 1);
};
let updateCharFalse = () => {
  charUpdate();
};

let showGuessed = () => {
  /// show the a string of char which player 2 already guess
  return arrGuessTried.join(" ");
};

let showPossible = () => {
  /// show a string of char which player 2 can guess
  return arrGuessPossible.join(" ");
};

playGame();
