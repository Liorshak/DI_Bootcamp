let divElement = document.getElementById("container");
console.log(divElement);

let divElement2 = document.querySelector("div");
console.log(divElement2);

let divElement3 = document.querySelector("#container");
console.log(divElement3);

let ulElement = document.getElementsByTagName("ul");
let ulElement2 = document.querySelectorAll("ul");

console.log(ulElement);
console.log(ulElement2);

// for(let index =0; index< ulElement.length;index++){

// for (let i =0; i< ulElement[index].children.length;i++) {
//   console.log(ulElement.[index].children[i]);
// }
// }

for (let ul of ulElement) {
  for (let li of ul.children) {
    console.log(li.textContent);
  }
}

let firstLi = document.querySelectorAll("ul > li:first-child");
let firstLi2 = [ulElement[0].firstElementChild, ulElement[1].firstElementChild];

console.log(firstLi);
console.log(firstLi2);
