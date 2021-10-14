// number(num);
// operator(operator);
// equal();

let operators = ["+", "-", "/", "*"];
let line = "";
let ans = "";
let res = "";
let old = "";
let def = "0";

const number = (num) => {
  line += num;
  return (document.getElementById("baseLine").textContent = line);
};

const operator = (operator) => {
  line += operator;
  return (document.getElementById("baseLine").textContent = line);
};

const equal = () => {
  if (operators.indexOf(line[0]) > -1) {
    line = ans + line;
  }

  res = eval(line);
  ans = res.toString();
  line = "";

  return (document.getElementById("baseLine").textContent = res);
};

const reset = () => {
  line = "";
  ans = "";
  return (document.getElementById("baseLine").textContent = def);
};

const clean = () => {
  line = "";

  return (document.getElementById("baseLine").textContent = def);
};

const oldAns = () => {
  if (ans.length > 0 && ans != undefined) {
    line += ans;
  }
  if (line.length > 0) {
    return (document.getElementById("baseLine").textContent = line);
  } else {
    return (document.getElementById("baseLine").textContent = def);
  }
};
