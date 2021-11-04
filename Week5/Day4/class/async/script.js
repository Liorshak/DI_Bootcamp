// Exercise Game - The word game
// You need to create 4 functions, each of them return a promises
// 1. The 1st function, receives 2 famous persons name from the user - if the names are not a string -> reject
// 2. The 2nd function, receives a noun - if the noun is less than 3 letters - reject
// 3. The 3rd function, receives a city - if the city doesn't start with an uppercase letter -> reject
// 4. The 4st function, receives a verb (finishing with "ing") - if it doesn't end with "ing" -> reject
// 5. The last function, is an async function - it receives all the above promises, and return a sentence with it
// Ex: "Beyonce is playing football with Barack Obama in Paris"

let gameOn = async () => {
  let [name1, name2] = await isString();
  let noun = await isNoun();
  let city = await isCapital();
  let verb = await isVerb();
  return `${name1} is ${verb} ${noun} with ${name2} in ${city}`;
};

let isString = async () => {
  let name1 = prompt("give me a famous person name");
  let name2 = prompt("give me a 2nd name of a famous person");
  if (typeof name1 === "string" && typeof name2 === "string") {
    return [name1, name2];
  } else {
    throw new Error("they are not a string");
  }
};

let isNoun = async () => {
  let noun = prompt("give me a  noun");
  if (noun.length >= 3) {
    return noun;
  } else {
    throw new Error("the noun is too short");
  }
};

let isCapital = async () => {
  let city = prompt("give me a city");
  if (city[0] === city[0].toUpperCase()) {
    return city;
  } else {
    throw new Error("the city is not correct");
  }
};

let isVerb = async () => {
  let verb = prompt("give me a verb ending with ing");
  verb = verb.toLowerCase();
  let endV = verb.length - 3;
  if (verb.includes("ing", endV)) {
    return verb;
  } else {
    throw new Error("the verb is not good");
  }
};

gameOn()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
