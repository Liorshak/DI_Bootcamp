// Exercise 1 : Checking The BMI
// Instructions
// Create two objects, each object should hold a persons details. Here are the details:
// FullName
// Mass
// Height
// Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person
// Outside of the objects, create a JS function that compares the BMI of both objects.
// Display the name of the person who has the largest BMI.

let bmiChecker = function(mass, height)  {
    return mass/height**2 
}

let whoLarger = (per1,per2) =>{
if (per1.BMI(per1.Mass,per1.Height)>per2.BMI(per2.Mass,per2.Height)){
    console.log(per1.FullName, " is the largest his BMI is: ", per1.BMI(per1.Mass,per1.Height));

}else if (per1.BMI(per1.Mass,per1.Height)<per2.BMI(per2.Mass,per2.Height)){
    console.log(per2.FullName, " is the largest his BMI is: ", per2.BMI(per2.Mass,per2.Height));
}else {
    console.log("They both are equal");
}

} 

let person1={
    FullName:"Jack jon" ,
    Mass:80 , // in kg
    Height: 1.82 , //in meter
    BMI: bmiChecker
}

let person2={
    FullName: "Jermie yak",
    Mass: 72 , // in kg
    Height: 1.74, //in meter
    BMI: bmiChecker
}

whoLarger(person1,person2);



// Exercise 2 : Grade Average
// Instructions
// Hint:
// - This Exercise is trickier then the others. You have to think about its structure before you start coding.
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.

// Create a function called findAvg(gradesList) that takes an argument called gradesList.
// Your function must calculate and console.log the average.
// If the average is above 65 let the user know they passed
// If the average is below 65 let the user know they failed and must repeat the course.
// Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
// Hint One function must call the other.

let findAvg = (arr)=> { 
    var sum =0;
        arr.forEach(V=> {sum+=V});
    var avg= sum/arr.length;
    console.log("The grade average is: ", avg);
    return avg;
}
let doesPass = (arr) =>{
    if (findAvg(arr)>=65){
        console.log("you have passed!")
    }else{
        console.log("you have failed you must do the course again!")
    }
}


scores=[90,50,100,70,80,80,90,100,95]

doesPass(scores);