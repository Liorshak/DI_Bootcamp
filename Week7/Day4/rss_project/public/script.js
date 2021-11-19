// let arrRss;

// function hideAll() {
//   /// making the rss hidden and
//   arrRss = document.querySelectorAll(".post_content");
//   console.log(arrRss);
//   arrRss.forEach((v) => v.classList.add("hidden"));
// }
// onpageload = hideAll();

async function SBT(event) {
  event.preventDefault();
  const sT = document.getElementById("searchTitle").value;
  let result = await fetch("http://localhost:3000/search/title", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ sT }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  addElement(result);
}

async function SBC(event) {
  event.preventDefault();
  const sC = document.getElementById("searchCat").value;

  let result = await fetch("http://localhost:3000/search/category", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ sC }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  addElement(result);
}

function addElement(arr) {
  clearAll();
  const posts = document.getElementById("posts");
  console.log(arr);

  arr.forEach((item) => {
    console.log(item);
    newDiv = document.createElement("div");
    newA = document.createElement("a");
    newA.setAttribute("href", item.link);
    newH2 = document.createElement("h2");
    newH2.innerText = item.title;
    newA.appendChild(newH2);
    newDiv.appendChild(newA);
    newP = document.createElement("p");
    console.log(item.categories);
    newP.innerText = `${item.isoDate} | ${
      item.creator
    } | Catagories: ${item.categories.join(", ")}`;
    newDiv.appendChild(newP);
    newDiv2 = document.createElement("div");
    newDiv2.innerHTML = item.content;
    newDiv.appendChild(newDiv2);

    posts.appendChild(newDiv);
  });
}

function clearAll() {
  let posts = document.querySelectorAll("#posts>div");
  posts.forEach((v) => v.remove());
}
