const sounds = [
  { text: "boom", src: "audio/boom.wav", id: "1", keycode: 65, keyChar: "A" },
  { text: "Clap", src: "audio/clap.wav", id: "2", keycode: 83, keyChar: "S" },
  {
    text: "HiHat",
    src: "audio/hihat.wav",
    id: "3",
    keycode: 68,
    keyChar: "D",
  },
  { text: "Kick", src: "audio/kick.wav", id: "4", keycode: 70, keyChar: "F" },
  {
    text: "OpenHat",
    src: "audio/openhat.wav",
    id: "5",
    keycode: 71,
    keyChar: "G",
  },
  { text: "Ride", src: "audio/ride.wav", id: "6", keycode: 72, keyChar: "H" },
  {
    text: "Snare",
    src: "audio/snare.wav",
    id: "7",
    keycode: 74,
    keyChar: "J",
  },
  { text: "Tink", src: "audio/tink.wav", id: "8", keycode: 75, keyChar: "K" },
  { text: "Tom", src: "audio/tom.wav", id: "9", keycode: 76, keyChar: "L" },
];

(function () {
  window.addEventListener("keydown", playing);
  window.addEventListener("keyup", stopping);

  // add btns + sounds
  sounds.forEach((v) => addsButton(v));

  //keydown - > add class to the relvante button
  //keyUp -> remove class
})();

function addsButton({ text, id, keyChar }) {
  let main = document.getElementById("main");
  let newBtn = document.createElement("button");
  newBtn.setAttribute("id", id);
  let newKey = document.createElement("h1");
  let newTxtKey = document.createTextNode(keyChar);
  newKey.appendChild(newTxtKey);
  let newDisKey = document.createElement("h3");
  let newTxtDis = document.createTextNode(text);
  newDisKey.appendChild(newTxtDis);
  newBtn.appendChild(newKey);
  newBtn.appendChild(newDisKey);

  newBtn.addEventListener("mousedown", pressing);
  newBtn.addEventListener("mouseup", releasing);
  newBtn.addEventListener("mouseover", hovering);
  newBtn.addEventListener("mouseout", exiting);
  main.appendChild(newBtn);
}

function pressing(event) {
  //adding a class
  event.target.closest("button").classList.add("press");
  let indexInSounds = event.target.closest("button").id;
  console.log(sounds[indexInSounds - 1].src);
  let elemAudio = new Audio(sounds[indexInSounds - 1].src);

  elemAudio.play();
  // playing sound
}
function releasing(event) {
  //removing the class
  event.target.closest("button").classList.remove("press");
  //stop playing sound
}
function hovering(event) {
  event.target.closest("button").classList.add("inTo");
}

function exiting(event) {
  //removing class
  event.target.closest("button").classList.remove("inTo");
}

function playing(event) {
  event.preventDefault();
  console.log(event.keyCode);
  let elemI = sounds.filter((v) => event.keyCode === v.keycode);
  console.log(elemI);
  elemI = elemI[0].id;
  console.log(event.keyCode);
  console.log(elemI);

  let btn = document.getElementById(elemI);
  console.log(btn);
  btn.classList.add("inTo", "press");
  let elemAudio = new Audio(sounds[elemI - 1].src);
  elemAudio.play();
}

function stopping(event) {
  event.preventDefault();
  let elemI = sounds.filter((v) => v.keycode == event.keyCode);
  console.log(elemI);
  elemI = elemI[0].id;
  console.log(elemI);
  let btn = document.getElementById(elemI);
  btn.classList.remove("inTo", "press");
}
