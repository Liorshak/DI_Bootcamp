// Exercise 1 : Find Nemo
// Instructions
// Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo !"
// Find the word “Nemo”
// Console.log a string as follows: "I found Nemo at [the position of the word Nemo]!".
// Bonus : If you can’t find Nemo, console.log “I can’t find Nemo”.
// "I love the movie named Nemo !" ➞ "I found Nemo at 5"
// "Nemo is a cute fish" ➞ "I found Nemo at 0"
// "My fish is called Nemo, I love it" ➞ "I found Nemo at 4"



let story=prompt("give me a sentence with Nemo and i will find it for you inside");
story= story.toLowerCase();
storyArray=story.split(" ");
if (storyArray.includes("nemo")) {
    console.log(`I found Nemo at ${storyArray.indexOf("nemo")}`);
    }
else {
    console.log("I can’t find Nemo");
}



// Exercise 1 : Evaluation
// Instructions
// Evaluate the comparisons found below:
// Look at this link for help

//!!!!!!IMPORTANT CHECK ANSWER IN THE COMMENTS BELLOW


//     5 >= 1  = true
//     0 === 1 = false
//     4 <= 1 =  false
//     1 != 1 = false
//     "A" > "B" =false
//     "B" < "C" =true
//     "a" > "A" =true
//     "b" < "A" =false
//     true === false =false
//     true != true = false


// Exercise 2 : Evaluation(2)
// Instructions
// Evaluate the code below. what would be the outcome if you run the code in the Javascript Console.
// Answer the questions below then check them line by line in the console.

    // let c;
    // let a = 34;
    // let b = 21;
    // a = 2;
    // a + b


//// ANSWER IS IN THE COMMENTS !!@!

// What will be the outcome of a + b?== 23
// What is the value of c? === undefined 
// Analyse the code below what will be the outcome?
// console.log(3 + 4 + '5');  == 75


// Exercise 3 : Ask For Numbers
// Instructions
// Ask the user for a string of numbers separated by commas, console.log the sum of the numbers.
// Hint: use some string methods

// Examples
// "2,3"➞ 5


let numbers=prompt("enter numbers separated by commas and i will sum for you");
let arrNum=numbers.split(",");
let summing = 0;
for (i=0;i<arrNum.length;i++) {
    summing+=parseInt(arrNum[i]);
}
console.log(`The total sum of all numbers is: ${summing}`);


// Exercise 4 : Boomm
// Instructions
// Hint: if statement (tomorrow’s lesson)

// Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. Follow the rules below:

// If the number given is less than 2 : return “boom”
// If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
// If the number given is evenly divisible by 2, add a exclamation mark to the end.
// If the number given is evenly divisible by 5, return the string in ALL CAPS.
// If the number given is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
// Examples
// 4 ➞ "Boooom!"
// // There are 4 "o"s and 4 is divisible by 2 (exclamation mark included)
// 1 ➞ "boom"
// // 1 is lower than 2, so we return "boom"

bonum=parseInt(prompt("Give a number and i will show you your BOOM"));
let word ;

if (bonum<=2){
    word="boom"
}
else {
    word="B"+"o".repeat(bonum)+"m";

}
if (bonum%2==0){
    word=word+"!";
}
if (bonum%5==0){
    word=word.toUpperCase();
}

console.log(word);
alert(word);