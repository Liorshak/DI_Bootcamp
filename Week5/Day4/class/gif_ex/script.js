// Exercise FETCH
// Part I
// Use fetch to fetch one 1 random gif with the category of "sun"
// You append the gif to the page
// Part II
// Instead of having a fixed category of gif.
// Fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1
// Depending on the word, fetch 1 random gif with the word as its category
// Display the word and the gif on the page
// Part III
// If the gif api doesn't find a gif depending on the word
// (because the word can be strange),
// then instead of displaying an empty image, display a gif that says "404 ERROR"
// Part IV
// Try using Promise.all

let addGif = (gif) => {
  let main = document.getElementById("main");
  let newImg = document.createElement("img");
  newImg.setAttribute("src", gif.data.images.downsized_large.url);
  main.appendChild(newImg);
};

let gettingGif = async () => {
  let word = await fetch(
    "http://random-word-api.herokuapp.com/word?number=1"
  ).then((res) => res.json());
  let gif = await fetch(
    `https://api.giphy.com/v1/gifs/random?tag=${word}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
  ).then((res) => res.json());

  if (gif.data.length == 0) {
    gif = await fetch(
      `https://api.giphy.com/v1/gifs/random?tag=404_ERROR&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
    ).then((res) => res.json());
  }
  addGif(gif);
};

gettingGif().catch((err) => console.log(err));
