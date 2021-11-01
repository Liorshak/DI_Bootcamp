let xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
);
xhr.responseType = "json";
xhr.send();

xhr.onload = function () {
  if (xhr.status == 200) {
    console.log(typeof xhr.response);
    console.log(xhr.response);
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

/// part 2

let xhr2 = new XMLHttpRequest();
xhr2.open(
  "GET",
  "https://api.giphy.com/v1/gifs/search?q=sun&offset=2&limit=10&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
);
xhr2.responseType = "json";
xhr2.send();

xhr2.onload = function () {
  if (xhr2.status == 200) {
    console.log(typeof xhr2.response);
    console.log(xhr2.response);
  } else {
    console.log(xhr2.status + ": " + xhr2.statusText);
  }
};

xhr2.onprogress = () => {
  if (xhr2.total) {
    console.log(`Already received' ${xhr2.load / xhr2.total}%`);
  } else {
    console.log(`Already received' ${xhr2.load}`);
  }
};

xhr2.onerror = () => {
  console.log("Something went wrong");
};
