const playTheGame = () => {
  if (confirm("do you want to play the game?")) {
    let computerNumber = Math.round(Math.random() * 10);
    let userNumber = validNumber();
    alert(computerNumber);
    for (let i = 0; i <= 3; i++) {
      // test(userNumber,computerNumber);
      if (test(userNumber, computerNumber)) {
        alert("Winner");
        return;
      } else if (i == 3) {
        alert("out of chances");
      } else {
        userNumber = validNumber();
      }
    }
  } else {
    alert("No problem, Goodbye");
  }
};

const test = (userNumber, computerNumber) => {
  if (computerNumber === userNumber) {
    return true;
    // }else if(counter>3){
    //     alert("out of chances")
    //     return
  } else if (userNumber > computerNumber) {
    alert("“Your number is bigger then the computer’s, guess again");
    // counter++
    // test(userNumber,computerNumber)
  } else if (userNumber < computerNumber) {
    alert("Your number is smaller then the computer’s, guess again");
    // counter++

    // test(userNumber,computerNumber)
  }
};

const validNumber = () => {
  let userNumber = prompt("Guess the number between 0 to 10");

  while (!/^\d+$/.test(userNumber) || userNumber > 10 || userNumber < 0) {
    userNumber = prompt(
      "You didn't enter a valid number please try again , Guess the number between 0 to 10 "
    );
  }
  return parseInt(userNumber);
};

// If the user guessed more than 3 times, alert “out of chances” and exit the function.
