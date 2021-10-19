let inZone = document.getElementById("inZone");
let show = document.getElementById("disp");

let displaying = (event) => {
  let lettersArr = event.target.value.split("");
  let showArr = [];
  lettersArr.forEach((v) => {
    if (v.match(/^[A-Z]+$/i)) {
      showArr.push(v);
    }
  });
  show.textContent = showArr.join("");
};

inZone.addEventListener("input", displaying);
