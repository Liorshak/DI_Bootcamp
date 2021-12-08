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

const registerUser = (fName, lName, email, userN, pass) => {
  return db("users_info")
    .insert({
      first_name: fName,
      last_name: lName,
      email: email,
      username: userN,
      password: pass,
    })
    .returning(["user_id"]);
};

const addUserToLogin = (id, userN, pass) => {
  return db("login")
    .insert({ login_id: id, username: userN, password: pass })
    .returning(["login_id"]);
};

const checkRegistered = (userN) => {
  return db("login").select("login_id").where({ username: userN });
};

const updateLoginDate = (id, date) => {
  return db("users_info")
    .update({ last_login: date })
    .where({ user_id: id })
    .returning(["last_login"]);
};

const retriveHashPass = (userN) => {
  return db("login").select("password").where({ username: userN });
};

module.exports = {
  checkRegistered,
  updateLoginDate,
  registerUser,
  addUserToLogin,
  retriveHashPass,
};
