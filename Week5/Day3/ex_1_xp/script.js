//Part 1

function compareToTen(number) {
  return new Promise((resolve, reject) =>
    number > 10
      ? resolve(number + " is greater than 10, success!")
      : reject(number + " is smaller than 10, error!")
  );
}

compareToTen(15)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

compareToTen(8)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//part 2

let ex2 = new Promise((resolve) => setTimeout(() => resolve("success"), 4000))
  .then((result) => console.log(result))
  .catch("Ooops something went wrong");

setTimeout(
  () =>
    Promise.resolve("success")
      .then((res) => console.log(res))
      .catch("Ooops something went wrong"),
  4000
);

// part 3

Promise.resolve(3).then((result) => console.log(result));
Promise.reject("Boo").catch((err) => console.log(err));
