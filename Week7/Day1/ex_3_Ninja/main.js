//part 1

var faker = require("faker");
const prompts = require("prompts");

let users = [];

for (let i = 0; i < 10; i++) {
  let newObj = {
    name: faker.name.findName(),
    streetAddress: faker.address.streetAddress(),
    country: faker.address.country(),
  };
  console.log(newObj);
  users.push(newObj);
}

// console.log(users);

// part 2
function takeOutDigit(str) {
  return str.replace(/[\D]/g, "");
}

console.log(takeOutDigit("k5k3q2g5z6x9bn"));

(async () => {
  const response = await prompts({
    type: "text",
    message: "What is your valid name??",
  });
  let checkName = response;
  if (/^[A-Z][a-z]* [A-Z][a-z]*$/.test("Lior Shaked")) {
    console.log(checkName, "is a valid name");
  } else {
    console.log(checkName, "not a good name");
  }
})();
