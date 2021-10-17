// 1. Create a function that adds the name of each students to
// a paragraph
// 2. each paragraph needs to be background yellow, font-size 25px
// 3. Add the 3 paragraph to the div already on the page

let names = ["John", "Lola", "Tom"];
let containerE = document.getElementById("container");
console.log(containerE);

let addingNames = () => {
  names.forEach((v) => {
    let p = document.createElement("p");
    p.textContent += v + " ";
    p.style.backgroundColor = "yellow";
    p.style.fontSize = "25px";
    let newP = containerE.appendChild(p);
  });
};

addingNames();
