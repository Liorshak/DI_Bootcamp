let xhr = new XMLHttpRequest();

//2. Set the request
xhr.open("GET", "https://lisenakache.github.io/HttpRequestGithub/test.json");

//4. Send the request
xhr.responseType = "json"; // or this
xhr.send();

//5. when the request is complete and the response is fully downloaded.
xhr.onload = function () {
  if (xhr.status != 200) {
    console.log("error status");
    displayError(xhr);
  } else {
    console.log("Finished Loading");
    console.log(xhr.response);
    console.log(typeof xhr.response);
    // console.log(JSON.parse(xhr.response));

    displayUser(xhr.response); // displayUser(JSON.parse(xhr.response)); // or this
  }
};

const displayUser = (animals) => {
  let results = document.getElementById("results");
  animals.forEach((info) => {
    let li = document.createElement("li");
    li.textContent = `${info.name} - ${info.species}`;
    results.appendChild(li);
  });
};

const displayError = (xhr) => {
  console.log("in display error");
  let error = document.getElementById("error");
  let h2 = document.createElement("h2");
  h2.textContent = `Error : ${xhr.status}`;
  h2.style.backgroundColor = "pink";
  error.appendChild(h2);
};
