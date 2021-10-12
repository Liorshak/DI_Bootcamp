// Exercise 1
// Create a structured HTML file linked to a JS file

// 1. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

// Sample Output: //"0 is even" //"1 is odd" //"2 is even"


for (let i=1;i<=15;i++){
    if (i%2==0){
        console.log(i ,"is even")
    }
    else {
        console.log(i ,"is odd")
    }
}

// 1. Loop over this array, and add to the array the word in plural ("s" at the end) of every fruit
let shopping = ["apple", "pear", "melon", "banana"];

for(let i=0 ;i<shopping.length;i++){
    shopping[i]+="s";
}

console.log(shopping);

// 1. Loop over this array, and console.log the sum of the prices
// 2. Where should you console log

let prices = [23, 15, 34, 10];
let sum =0;
for(let i=0; i<prices.length; i++){
    sum+=prices[i];
}
console.log(sum);