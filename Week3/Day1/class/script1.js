let divNode = document.body.children[0];
let divNode2 = document.body.firstElementChild;
let ulNode = divNode.nextElementSibling;
let ulNode2 = document.body.children[1];
let secoundLiNode = ulNode.lastElementChild;
let secoundLiNode2 = ulNode.children[1];

/// Cant hard code the roots need the element connection!!!!

console.log(divNode, divNode2);

divNode.textContent += " Shaked";
divNode2.textContent += ` Lior`;
secoundLiNode.textContent += " La";
secoundLiNode2.textContent += " Jhon";

// let thirdLiNode=ulNode.appendChild("li");
// let thirdLiText=

// getelement by tag = array
//getelementbyclass name = array
