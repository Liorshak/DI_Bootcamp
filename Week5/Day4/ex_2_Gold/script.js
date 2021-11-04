// let resolveAfter2Seconds = function () {
//   console.log("starting slow promise");
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       resolve("slow");
//       console.log("slow promise is done");
//     }, 2000);
//   });
// };

// let resolveAfter1Second = function () {
//   console.log("starting fast promise");
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       resolve("fast");
//       console.log("fast promise is done");
//     }, 1000);
//   });
// };

// let sequentialStart = async function () {
//   console.log("==SEQUENTIAL START==");
//   const slow = await resolveAfter2Seconds();
//   console.log(slow);
//   const fast = await resolveAfter1Second();
//   console.log(fast);
// };

// sequentialStart();

/// it will output:
//  ==SEQUENTIAL START==
//  starting slow promise
//  slow promise is done
//  slow
//  starting fast promise
//  fast promise is done
//  fast

///    part 2

// let resolveAfter2Seconds = function () {
//   console.log("starting slow promise");
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       resolve("slow");
//       console.log("slow promise is done");
//     }, 2000);
//   });
// };

// let resolveAfter1Second = function () {
//   console.log("starting fast promise");
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       resolve("fast");
//       console.log("fast promise is done");
//     }, 1000);
//   });
// };

// let concurrentStart = async function () {
//   console.log("==CONCURRENT START with await==");
//   const slow = resolveAfter2Seconds();
//   const fast = resolveAfter1Second();
//   console.log(await slow);
//   console.log(await fast);
// };

// setTimeout(concurrentStart, 4000);

// The output will be:

// after atleast 4 sec -->
// ==CONCURRENT START with await==
// starting slow promise
// starting fast promise

// after atleast 2 sec -->
// slow promise is done
// fast promise is done
// slow
// fast

//part 3

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  const [users, posts, albums] = await DataFetch();

  console.log("users", users);
  console.log("posts", posts);
  console.log("albums", albums);
};

const DataFetch = async () => {
  let theData = await Promise.all(urls.map((url) => fetch(url)));
  let [users, posts, albums] = theData;
  users = await users.json();
  posts = await posts.json();
  albums = await albums.json();
  return [users, posts, albums];
};

getData();
