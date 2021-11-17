const fs = require("fs");

fs.readFile("./text.txt", (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data.toString());
});

fs.writeFile("data.txt", "bla bla bla", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("creation was succesfully");
  }
});

fs.appendFile("./data.txt", "\nbla bla", (err) => {
  if (err) console.log(err);
});

fs.unlink("./data.txt", (err) => console.log(err));
