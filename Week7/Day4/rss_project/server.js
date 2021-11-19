const exp = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
let Parser = require("rss-parser");
let parser = new Parser();

const app = exp();

app.use(cors());
app.use(exp.urlencoded({ extended: true }));
app.use(exp.json());

app.set("view engine", "ejs");

app.use("/", exp.static(__dirname + "/public"));

app.listen(3000, () => console.log("I am listening on port 3000"));

app.get("/", async (req, res) => {
  let feed = await parser.parseURL("https://www.thefactsite.com/feed/");
  console.log(feed);

  res.render("pages/index", {
    data: JSON.stringify(feed),
  });
});

app.get("/search", async (req, res) => {
  res.render("pages/search");
});

app.post("/search/title", async (req, res) => {
  let feed = await parser.parseURL("https://www.thefactsite.com/feed/");
  let relevantfeed = [];
  feed.items.forEach((v) => {
    if (v.title.toLowerCase().includes(req.body.sT.toLowerCase()))
      relevantfeed.push(v);
  });
  console.log(relevantfeed);
  res.json(relevantfeed);
});

app.post("/search/category", async (req, res) => {
  let feed = await parser.parseURL("https://www.thefactsite.com/feed/");
  let relevantfeed = [];
  feed.items.forEach((v) => {
    if (
      v.categories.some((v) =>
        v.toLowerCase().includes(req.body.sC.toLowerCase())
      )
    ) {
      relevantfeed.push(v);
    }
  });
  console.log(relevantfeed);
  res.json(relevantfeed);
});
