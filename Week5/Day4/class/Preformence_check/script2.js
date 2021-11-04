let btn = document.getElementById("btn");
btn.addEventListener("click", requestData);

async function requestData() {
  const t0 = performance.now();

  const urls = [
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/users/2",
  ];
  let [firstUser, secondUser] = await Promise.all(
    urls.map((u) => {
      return fetch(u)
        .then((res) => res.json())
        .catch((err) => console.log(err));
    })
  );

  let resultsDiv = document.getElementById("results");
  let p = document.createElement("p");
  p.textContent = `1st USER : ${firstUser.name} - 2nd USER : ${secondUser.name}`;
  resultsDiv.appendChild(p);
  const t1 = performance.now();
  console.log(`Promise.all version took ${t1 - t0} milliseconds.`);
}
