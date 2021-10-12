// Instructions
// Using the .toString() method convert the array to a string.
// Using the .join()method convert the array to a string. Try passing different values into the join.
// Eg .join(“+”), .join(” “), .join(“”)
// Bonus : To do this Bonus look up how to work with nested for loops
// Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).

// The output should be: [9,8,7,6,5,4,3,2,1,0]
// Hint: The algorithm is called “Bubble Sort”
// Use a temporary variable to swap values in the array.
// Use 2 “nested” for loops (Nested means one inside the other).
// Add comments and console.log the result for each step, this will help you understand.
// Requirement: Don’t copy paste solutions from Google

const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];
let numbers2 = [...numbers];
str1 = numbers.toString();
console.log(str1);
str2 = numbers.join("+");
console.log(str2);
str3 = numbers.join(" ");
console.log(str3);
str4 = numbers.join("");
console.log(str4);

let flag = false;

while (flag == false) {
  let countChange = 0;
  let temp;
  numbers2.forEach((v, i) => {
    if (v < numbers2[i + 1]) {
      ///switching between
      temp = v;
      numbers2[i] = numbers2[i + 1];
      numbers2[i + 1] = temp;
      countChange++;
    }
   
    });
  console.log(numbers2);
  if (countChange == 0) {
    //checking if array is sorted change flag
    flag = true; /// or break;
  }
}

console.log(`This the sorted list: ${numbers2.join(" ")}`);

//checking if it still sorted
