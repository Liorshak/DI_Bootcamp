// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
//     .then(console.log);

let fetchData = async () => {
  let data = await fetch("https://swapi.dev/api/starships/9/");
  let jsData = await data.json();

  console.log(jsData);
};

fetchData();

// function resolveAfter2Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved");
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log("calling");
//   let result = await resolveAfter2Seconds();
//   console.log(result);
// }

// asyncCall();

/// the output will be:
///console.log ->> calling'
/// console.log->> resolved)
