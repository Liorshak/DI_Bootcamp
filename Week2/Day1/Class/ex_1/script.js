 let addressNumber = 85;
 let addressStreet= "Manara";
 let country= "Israel";


let global_address=   `i live in ${addressStreet} ${addressNumber}, in ${country}`;
console.log(global_address);

// Ex Array

let pets= ['cat','dog','fish','rabbit','cow']
console.log(pets[1]);

pets.pop();
pets.push("horse");

console.log(pets);

console.log(`The length is: ${pets.length}`);

pets.splice(3,1);
console.log(pets);


pets.push(prompt("add a pet name"));
console.log(pets);
