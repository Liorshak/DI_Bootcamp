/*
// #1
function q1() {
  var a = 5;
  if (a > 1) {
    a = 3;
  }
  alert(a); ///a=3
}

//#2
var a = 0;
function q2() {
  //a=5 no function calling
  a = 5;
}

function q22() {
  alert(a); //if calling q2 a=5 if not calling a=0 i dont see calling in any of the function
}

//#3
function q3() {
  window.a = "hello";
}

function q32() {
  alert(a); //if calling both function a = "hello" if not a = undefine
}

//#4
var a = 1;
function q4() {
  var a = "test";
  alert(a); //a="test"
}

//#5
var a = 2;
if (true) {
  var a = 5;
  alert(a); // a=5
}
alert(a); //a=5
*/
/// Part 2

function winBattle() {
  return true;
}

let experiencePoints = winBattle() ? 10 : 1;

//part3
let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.includes("Violet");

colors.forEach((v, i) => console.log(`${i}# choice is ${v}`));

///part4

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th", "st", "nd", "rd"];

color.forEach((v, i, a) => {
  i + 1 < ordinal.length
    ? console.log(`${i + 1}${ordinal[i + 1]} choice is ${v}`)
    : console.log(`${i + 1}${ordinal[0]} choice is ${v}`);
});

/// part5

let isString = (item) => typeof item == "string";

console.log(isString("hello"));
//true
console.log(isString([1, 2, 4, 0]));
//false

//part 6

let bankAmount = 10000;
const vat = 0.17;
let accountActions = ["+200", "-100", "+146", "+167", "-2900"];
accountActions.forEach((v, i) => {
  v < 0 ? (accountActions[i] = v * (1 + vat)) : v;
  bankAmount += parseInt(accountActions[i]);
});
console.log(accountActions);
console.log(bankAmount);
