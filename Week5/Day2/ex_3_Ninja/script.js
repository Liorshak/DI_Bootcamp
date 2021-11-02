(function () {
  let form = document.querySelector("form");
  form.addEventListener("input", searchGif);
  let clear = document.getElementById("clear");
  clear.addEventListener("click", deleteAll);
})();

function deleteAll() {
  let gifs = document.querySelectorAll("div");
  gifs.forEach((v) => v.remove());
}

function searchGif(event) {
  event.preventDefault();
  search = document.getElementById("search");
  let key = search.value;
  // array.filter((v) => !v.title.includes(key)).map((v) => v.id);

  console.log(key);
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.giphy.com/v1/gifs/search?q=${key}&limit=30&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
  );
  xhr.responseType = "json";
  xhr.send();

  xhr.onload = function () {
    if (xhr.status == 200) {
      console.log(typeof xhr.response);
      console.log(xhr.response);
      addGif(xhr.response.data);
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

  function addGif(array) {
    let main = document.getElementById("main");

    array.forEach((v) => {
      let newDiv = document.createElement("div");
      let newGif = document.createElement("img");
      console.log(v);
      console.log(v.url);
      newGif.setAttribute("src", v.images.downsized.url);

      newDiv.appendChild(newGif);

      main.appendChild(newDiv);
    });
  }
}
