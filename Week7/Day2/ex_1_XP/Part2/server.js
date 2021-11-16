const express = require("express");

const app = express();

app.listen(3000, () => console.log("listening on port 3000"));

app.use("/", express.static(__dirname + "/public"));

const user = {
  firstname: "John",
  lastname: "Doe",
};

app.get("/user", (req, res) => {
  //   res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(user));
  console.log(user);
});

app.get("/:id", (req, res) => {
  console.log(req.params);
  res.send(req.params);
});
