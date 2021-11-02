// make a function that takes in a single parameter
// and returns a new promise. using setTimeout,
// after 5000 milliseconds, the promise will either
// resolve or reject. if the input is a string,
// the promise resolves with that same string
// uppercased. if the input is anything but a string
// it rejects with that same input
// use then to repeat the string twice
// use catch to console.log the error
// finally call a function that console.log ("congratulation")

function makePromise(parameter) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof parameter === "string") {
        resolve(parameter.toUpperCase() + " ");
      } else {
        reject("This is not a string: ", parameter);
      }
    }, 5000);
  });
}
makePromise("hello World")
  .then((str) => console.log(str.repeat(2)))
  .catch((err) => console.log(err))
  .finally(() => console.log("congratulation"));
