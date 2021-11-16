const express = require("express");
const knex = require("knex");
const fs = require("fs");
const bodyparser = require("body-parser");
const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: "5432",
    user: "postgres",
    password: "tsypwW4s",
    database: "dvdrental",
  },
});

const app = express();
app.use(express.urlencoded());
app.use(express.json());

app.use("/", express.static(__dirname + "/public"));

app.listen(3000, () => console.log("I am listing on 3000"));

app.get("/api/countries", (req, res) => {
  db("country")
    .then((data) => {
      fs.appendFile("log.txt", "full query \n", (err) => {
        if (err) {
          console.log(err);
          return;
        }
      });

      res.json(data);
    })
    .catch((e) => {
      console.log(e);
    });
});

app.put("/api/countries/:countryName", (req, res) => {
  db("country")
    .insert([{ country: req.params.countryName }])
    .returning("*")
    .then((data) => {
      console.log(data);
      fs.appendFile(
        "log.txt",
        `${JSON.stringify(data)} was add to database \n`,
        (err) => {
          if (err) {
            console.log(err);
            return;
          }
        }
      );
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
    });
});

app.post("/api/countries", (req, res) => {
  console.log(parseInt(req.body.countryId));
  fs.appendFile(
    "log.txt",
    `Country with Id of ${parseInt(req.body.countryId)} was updated to ${
      req.body.country
    } \n`,
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );

  db("country")
    .update({ country: req.body.country })
    .where({ country_id: req.body.countryId })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
    });
});

app.delete("/api/countries/:countryId", (req, res) => {
  parseInt(req.body.countryId);

  fs.appendFile(
    "log.txt",
    `Country with Id of ${req.params.countryId} was Deleted \n`,
    (err) => {
      if (err) {
        console.log(err);
        return;
      }
    }
  );

  db("country")
    .del()
    .where({ country_id: req.params.countryId })
    .returning("*")
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
    });
});
