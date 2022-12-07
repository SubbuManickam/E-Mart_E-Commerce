var express = require("express");
var router = express.Router();
var user = require("../models/user.schema");
const b = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "jswrt2537876gjhgjhbhjk";

router.post("/login", async function (req, res, next) {
  const { email, password } = req.body;
  const user2 = await user.findOne({ email });
  if (!user2) {
    return res.json({ error: "User Not Found" });
  }
  if (await b.compare(password, user2.password)) {
    const token = jwt.sign({}, JWT_SECRET);
    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "Error!" });
    }
  }
  res.json({ status: "Error", error: "Password Invalid" });
});

router.post("/add", function (req, res, next) {
  let newUser = new user({ ...req.body });
  newUser.save(function (err, newUser) {
    if (err) {
      res.send({ message: err.message });
    } else {
      res.setHeader("Content-Type", "application/json");
      res.send({
        message: "User Information saved successfully",
        newUserObj: newUser,
      });
    }
  });
});

router.get("/logout", (req, res) => {
  console.log("Hello logout page");
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("user logged out!");
});

module.exports = router;
