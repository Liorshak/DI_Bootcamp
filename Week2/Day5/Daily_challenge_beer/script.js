const validNumber = () => {
  let userNumber = prompt("Give me a number of beer to start the song from");

  while (!/^\d+$/.test(userNumber)) {
    userNumber = prompt(
      "Did you already drink my friend?? its not a number try again"
    );
  }
  return parseInt(userNumber);
};

let one = "it";
let many = "them";
let totalBear = validNumber();
let breakingBear = () => {
  let counter = 1;

  while (totalBear > 0) {
    console.log(
      `${totalBear} ${testBeer(
        totalBear
      )} of beer on the wall \n${totalBear} ${testBeer(
        totalBear
      )} of beer\nTake ${Math.min(counter, totalBear)} down, pass ${testIt(
        counter,
        totalBear
      )} around`
    );
    totalBear -= counter;
    counter++;
  }
  console.log(
    "No more beers? its about the fucking time STOP DRINKING and start programing you lazy slob"
  );
};
let testBeer = (totalBear) => {
  if (totalBear > 1) {
    return "bottles";
  } else {
    return "bottle";
  }
};

let testIt = (counter, totalBear) => {
  if (counter > 1 && totalBear > 1) {
    return "them";
  } else {
    return "it";
  }
};

breakingBear();

// Have you heard the infamous song “99 Bottles of Beer?”
// In ths exercise you need to console.log the lyrics to the song 99 Bottles of Beer as an output.

// Prompt the user for a number to begin counting down bottles.
// In the song everytime a bottle falls we subtract the bottles by 1.
// What your code should do is:
// instead of subtracting by 1, everytime a bottle drops the subtracted number should go up by 1
// For example the first time a bottle drops we subtract by 1, the second time we subtract by 2 and so on.
// Take a look below for more help.

// ==============================

// 99 bottles of beer on the wall
// 99 bottles of beer
// Take 1 down, pass it around
// 98 bottles of beer on the wall
// 98 bottles of beer on the wall
// 98 bottles of beer
// Take 2 down, pass them around
// 96 bottles of beer on the wall
// 96 bottles of beer on the wall
// 96 bottles of beer
// Take 3 down, pass them around
// 93 bottles of beer on the wall

// ==============================

// How will you choose to make the song end?
// Make sure you get the grammar correct.

// For 1 bottle, you pass “it” around.
// For more than one bottle, you pass “them” around.
