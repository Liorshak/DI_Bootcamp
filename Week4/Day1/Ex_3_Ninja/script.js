let menu = [
  {
    type: "starter",
    name: "Houmous with Pita",
  },
  {
    type: "starter",
    name: "Vegetable Soup with Houmous peas",
  },
  {
    type: "dessert",
    name: "Chocolate Cake",
  },
];
let check = false;
menu.forEach((v) => {
  v.type === "dessert" ? (check = true) : v;
  return check;
});

console.log(check);

let starterCheck = true;
menu.forEach((v) => {
  if (v.type !== "starter") {
    return (starterCheck = false);
  }
});

console.log(starterCheck);

checkMain = false;
menu.forEach((v) => {
  if (v.type === "main course") {
    return (starterCheck = true);
  }
});

console.log(checkMain);

let vegetarian = ["vegetable", "Houmous", "eggs", "vanilla", "potatoes"];

menu.forEach((el) => {
  nameArr = el.name.split(" ");
  nameArr.some(checkVege)
    ? (el["vegetarian"] = true)
    : (el["vegetarian"] = false);
});

function checkVege(value) {
  return vegetarian.includes(value);
}

console.log(menu);

// part 2

function string_chop(str, num) {
  let wordArray = [];
  let i = 0;
  while (i < str.length) {
    wordArray.push(str.slice(i, i + num));
    i += num;
  }
  return wordArray;
}

console.log(string_chop("developers", 2));

//part 3
// "'fox' was found 1 times."

function searchWord(str, word) {
  let num = 0;
  let arrStr = str.split(" ");
  arrStr.forEach((v) => (v === word ? num++ : v));
  return `${str} was found ${num} times.`;
}

console.log(searchWord("The quick brown fox", "fox"));
