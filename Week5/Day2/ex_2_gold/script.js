let xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
);
xhr.responseType = "json";
xhr.send();

xhr.onload = function () {
  if (xhr.status == 200) {
    console.log(typeof xhr.response);
    console.log(xhr.response);
    addGifRandom(xhr.response.data);
  } else {
    console.log(xhr.status + ": " + xhr.statusText);
  }
};

xhr.onprogress = () => {
  if (xhr.total) {
    console.log(`Already received' ${xhr.load / xhr.total}%`);
  } else {
    console.log(`Already received' ${xhr.load}`);
  }
};

xhr.onerror = () => {
  console.log("Something went wrong");
};

function addGifRandom(array) {
  let main = document.getElementById("main");
  let randomNum = Math.round(Math.random() * array.length);

  let newDiv = document.createElement("div");
  let newGif = document.createElement("img");

  newGif.setAttribute("src", array[randomNum].images.downsized.url);

  newDiv.appendChild(newGif);

  main.appendChild(newDiv);
}
