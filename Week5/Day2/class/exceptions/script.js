(function () {
  let num1 = parseInt(prompt("please give me a num you want to divide"));

  try {
    let num2 = parseInt(
      prompt("please give me the 2nd  number you want to divide in")
    );
    if (num2 === 0) {
      throw new rangeError("you gave me a zero , its not correct");
    } else {
      alert(num1 / num2);
    }
  } catch {
    alert("i dont want to play with you game ended");
  } finally {
    console.log("we finished");
  }
})();
///part 2

const someVar = "Cannot be reassigned";
try {
  someVar = "Still going to try";
} catch (e) {
  console.log(e);
}

console.log("after");

// 1. Which type of error will be thrown ? Look on the different types errors on the Google     =>>> TypeError
// 2. Is the console.log("after") will be shown on the console ?  =>> yes it will be shown
