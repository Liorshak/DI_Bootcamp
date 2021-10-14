// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

// stars and words


let words= prompt("give several words separated by commas");
let arrWords= words.split(",");
let longWord=0;

arrWords.forEach((value) => {
    longWord=Math.max(value.length,longWord); //check what is the longest word
 })
 let starWord="*".repeat(longWord+4)+"\n";
 arrWords.forEach(value =>{
     starWord+="* "+value+" ".repeat(longWord-value.length)+" *\n";
 })
 starWord+="*".repeat(longWord+4);
 console.log (starWord);