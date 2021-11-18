const exp = require("express");
const fs = require("fs");

app = exp();
app.use("/", exp.static(__dirname + "/public"));

app.use(exp.urlencoded());
app.use(exp.json());
app.listen(3000, () => console.log("I am listening"));

app.post("/register", (req, res) => {
  console.log("received request");
  console.log(req.body);
  fs.readFile("users", (err, data) => {
    if (err) {
      console.log("reading a file errr:", err);
    } else {
      if (data.toString().includes(req.body.username)) {
        console.log("Username already exists");
        res.json("Username already exists");
      } else {
        fs.appendFile(
          "users",
          `${req.body.username} ${req.body.password} ${req.body.fName} ${req.body.lName} ${req.body.email}  \n`,
          (err) => console.log("writing to a file errr:", err)
        );
        console.log("Hello you account is now created!");
        res.json("Hello you account is now created!");
      }
    }
  });
});

app.post("/login", (req, res) => {
  console.log("received request");
  console.log(req.body);
  fs.readFile("users", (err, data) => {
    if (err) {
      console.log("err reading file loging", err);
    } else {
      if (
        data.toString().includes(`${req.body.username} ${req.body.password}`)
      ) {
        console.log(`Hey ${req.body.username} welcome back`);
        res.json(`Hey ${req.body.username} welcome back`);
      } else {
        console.log("Username is not registred");
        res.json("Username is not registred");
      }
    }
  });
});
