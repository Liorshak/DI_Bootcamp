let btn = document.getElementById("btn");
btn.addEventListener("click", requestData);

async function requestData() {
  const t0 = performance.now();
  try {
    const url1 = "https://jsonplaceholder.typicode.com/users/1";
    const url2 = "https://jsonplaceholder.typicode.com/users/2";
    const fetch1 = await fetch(url1);
    const fetch2 = await fetch(url2);

    if (fetch1.status === 200 && fetch2.status === 200) {
      const firstUser = await fetch1.json();
      const secondUser = await fetch2.json();

      let resultsDiv = document.getElementById("results");
      let p = document.createElement("p");
      p.textContent = `1st USER : ${firstUser.name} - 2nd USER : ${secondUser.name}`;
      resultsDiv.appendChild(p);
    } else {
      throw new Error("not 200");
    }
  } catch (err) {
    console.log(err);
  }

  const t1 = performance.now();
  console.log(`Await version took ${t1 - t0} milliseconds.`);
}
