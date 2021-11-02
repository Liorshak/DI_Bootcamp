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

fetch("http://random-word-api.herokuapp.com/word?number=1")
  .then((res) => res.json())
  .then((res) => res[0])
  .then((word) => {
    console.log(word);
    fetch(
      `https://api.giphy.com/v1/gifs/random?tag=${word}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.data.length == 0) {
          return fetch(
            `https://api.giphy.com/v1/gifs/random?tag=404_ERROR&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
          ).then((res) => res.json());
        } else {
          return res;
        }
      })
      .then((res) => {
        let main = document.getElementById("main");
        let newImg = document.createElement("img");
        console.log(res.data);
        newImg.setAttribute("src", res.data.images.downsized_large.url);
        main.appendChild(newImg);
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
console.log("hello");

// (function () {
//   let promise1 = fetch("http://random-word-api.herokuapp.com/word?number=1")
//     .then((res) => res.json())
//     .then((res) => res[0]);

//   let promise2 = fetch(
//     `https://api.giphy.com/v1/gifs/random?tag=${promise1}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
//   )
//     .then((res) => res.json())
//     .then((res) => {
//       if (res.data.length == 0) {
//         return fetch(
//           `https://api.giphy.com/v1/gifs/random?tag=404_ERROR&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
//         ).then((res) => res.json());
//       } else {
//         return res;
//       }
//     });

//   Promise.all([promise1, promise2])
//     .then((res) => console.log(res))
//     .then((res) => {
//       let main = document.getElementById("main");
//       let newImg = document.createElement("img");
//       console.log(res.data);
//       newImg.setAttribute("src", res.data.images.downsized_large.url);
//       main.appendChild(newImg);
//     })
//     .catch((err) => console.log(err));
// })();
