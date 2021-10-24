const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

//    Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
// Create an array using forEach that contains the usernames of all players with a score bigger than 5.
// Tip: Use the ternary operator
// Find and display the total score of the users.

//part 1
let userNameArr = [];

gameInfo.forEach((v) => userNameArr.push(v.username + "!"));
console.log(userNameArr);
//part 2

let highScoreUser = [];
gameInfo.forEach((v) => (v.score > 5 ? highScoreUser.push(v.username) : v));

console.log(highScoreUser);

sumScore = 0;
gameInfo.forEach((v) => (sumScore += v.score));

console.log(sumScore);
