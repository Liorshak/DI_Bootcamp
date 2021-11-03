const urls = [
  "https://swapi.dev/api/people/1",
  "https://swapi.dev/api/people/2",
  "https://swapi.dev/api/people/3",
  "https://swapi.dev/api/people/4",
];

Promise.all(urls.map((urls) => fetch(urls)))
  .then((res) => Promise.all(res.map((v) => v.json())))
  .then((res) => res.forEach((v, i) => console.log(v)))
  .catch((err) => console.log("We had an error you must fix it!", err));

const urls2 = [
  "https://swapi.dev/api/people/1",
  "https://swapi.dev/api/people/2",
  "https://swapi.dev/api/peoplese/3",
  "https://swapi.dev/api/people/4",
];

Promise.all(urls2.map((urls) => fetch(urls)))
  .then((res) => Promise.all(res.map((v) => v.json())))
  .then((res) => res.forEach((v, i) => console.log(v)))
  .catch((err) => console.log("We had an error you must fix it!", err));
