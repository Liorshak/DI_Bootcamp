const express = require("express");
app = express();

app.listen(3000, console.log(`i am listening on 3000`));

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>This is an HTML tag</h1>");
});
