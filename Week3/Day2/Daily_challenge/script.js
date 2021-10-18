let noun = document.getElementById("noun");
let adjective = document.getElementById("adjective");
let person = document.getElementById("person");
let verb = document.getElementById("verb");
let place = document.getElementById("place");

let story = document.getElementById("story");
let form = document.querySelector("form");
let libBtn = document.getElementById("lib-button");

const libGame = () => {
  let stories = [
    "The majestic " +
      person.value +
      " has roamed the forests of " +
      place.value +
      " for thousands of years. Today, she " +
      verb.value +
      " in a search of " +
      noun.value +
      ". She must eat it  to survive. she has encountered a " +
      adjective.value +
      " monster, she never seen anything like this before. What will " +
      person.value +
      " do?",

    ` ${person.value} is a well known ${adjective.value}, he is the most famous in ${place.value} he likes to get up in the morning and ${verb.value} he loves his ${noun.value} so much so decided to dedicate his life to it.`,
    `Some where over the rainbow a ${adjective.value} ${person.value} lives, one day he ${verb.value} in a search for ${noun.value}, suddenly he fell into ${place.value} nothing can help him now, what will he do?`,
  ];
  if (
    noun.value.length > 0 &&
    adjective.value.length > 0 &&
    person.value.length > 0 &&
    verb.value.length > 0 &&
    place.value.length > 0
  ) {
    newArticle = document.createElement("article");
    newStory = document.createTextNode(stories[rndNum]);

    newArticle.appendChild(newStory);
    newArticle.setAttribute("id", "lim-Story");
    story.appendChild(newArticle);
  } else {
    alert("You didn't filed all the needed input");
  }
};

let rndNum = Math.round(Math.random() * 2);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  libGame();
});

newBtn = document.createElement("button");
newBtn.appendChild(document.createTextNode("New Story?"));
story.appendChild(newBtn);

newBtn.addEventListener("click", function () {
  console.log(document.getElementById("lim-Story"));
  document.getElementById("lim-Story").remove();
  rndNum = Math.round(Math.random() * 2);
  libGame();
});
