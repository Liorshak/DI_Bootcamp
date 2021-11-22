const exp = require("express");
const env = require("dotenv");
const cors = require("cors");
const db = require("./db");

app = exp();
app.use(cors());
env.config();
app.use(exp.urlencoded({ extended: false }));
app.use(exp.json());

app.listen(process.env.PORT, () => {
  console.log(`listening to port ${process.env.PORT}`);
});

app.get("/country", (req, res) => {
  const countries = db.allContries();
  countries
    .then((data) => {
      res.json(data);
    })
    .catch((e) => console.log(e.detail));
});

app.get("/country/:country_id", (req, res) => {
  db.allCities(req.params.country_id)
    .then((data) => {
      res.json(data);
    })
    .catch((e) => console.log(e.detail));
});
