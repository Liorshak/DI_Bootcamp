const knex = require("knex");
const env = require("dotenv");

env.config({ path: "./.env" });

const db = knex({
  client: "pg",
  connection: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NANE,
  },
});

const allContries = () => {
  return db("country").orderBy("country");
};

const allCities = (country) => {
  return db("city").where({ country_id: country }).orderBy("city");
};

module.exports = {
  allContries,
  allCities,
};
