const express = require("express");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { usermodel } = require("../model/register.model");

const signin = express.Router();

signin.post("/register", async (req, res) => {
  const { name, email, gender, password } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      let post = new usermodel({ name, email, gender, password: hash });
      await post.save();
      res.status(200).send({ msg: "USer Registered {res.body.name}" });
    });
  } catch (error) {
    res.status(400).send({ msg: " Registeration Issue" });
  }
});

signin.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await usermodel.findOne({ email });
    console.log(user);
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        // result == true
        const token = jwt.sign({ name: user.name, id: user._id }, "masai");
        res
          .status(200)
          .send({ msg: "Logged in Token passed Successfully", token: token });
      });
    } else {
      res.status(200).send({ msg: "Logged in Issue" });
    }
  } catch (error) {
    res.status(400).send({ msg: "Login Issue" });
  }
});

module.exports = {
  signin,
};
