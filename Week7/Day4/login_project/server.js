const exp = require("express");

const cors = require("cors");
const pword = require("p4ssw0rd");
const env = require("dotenv");
const db = require("./module/db");

const app = exp();

app.use("/", exp.static(__dirname + "/public"));

app.use(exp.urlencoded({ extended: true }));
app.use(exp.json());

env.config();
app.use(cors());
pword.simulate();

app.listen(process.env.PORT, () => {
  console.log(`listening to port ${process.env.PORT}`);
});

app.post("/register", async (req, res) => {
  console.log("received request");
  console.log(req.body);

  const hashPass = pword.hash(req.body.password, {
    cost: 10,
  });
  let obj = await db
    .registerUser(
      req.body.fName,
      req.body.lName,
      req.body.email,
      req.body.username,
      hashPass
    )
    .catch((err) => {
      res.json(err.detail);
    });

  console.log(obj[0].user_id);
  let addUser = await db
    .addUserToLogin(obj[0].user_id, req.body.username, hashPass)
    .catch((err) => {
      res.json(err.detail);
    });
  console.log("Hello you account is now created!");
  res.json(`OK Hello ${req.body.username} your ID is ${obj[0].user_id}`);
});

app.post("/login", async (req, res) => {
  console.log("received request");
  console.log(req.body);
  let passObj = await db.retriveHashPass(req.body.username);
  console.log(passObj[0].password);
  console.log(req.body.password);
  try {
    if (
      pword.check(req.body.password, passObj[0].password, {
        cost: 10,
      })
    ) {
      let obj = await db
        .checkRegistered(req.body.username, req.body.password)
        .catch((err) => console.log(err));
      console.log(obj);
      console.log(obj[0].login_id);

      let currentDate = new Date();
      currentDate = currentDate.toISOString().split("T")[0];
      console.log(currentDate);
      db.updateLoginDate(obj[0].login_id, currentDate)
        .then(console.log(" loggin information ok, i updated the  login date"))
        .catch((err) => console.log(err));

      res.json("Hello username and pass are correct welcome to the system");
    }
  } catch (err) {
    console.log(
      "login information was not ok username or password not exist",
      err
    );
    res.status(400);
    res.send("login information was not ok username or password not exist");
  }
});
