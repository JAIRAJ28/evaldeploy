const express = require("express");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { postmodel } = require("../model/posts.model");

const posts = express.Router();

// req.body.name=decoded.name
// req.body.id=decoded.id

posts.post("/create", async (req, res) => {
  let devarr = ["PC", "TABLET", "MOBILE"];
  try {
    if (devarr.includes(req.body.device)) {
      const posts = new postmodel(req.body);
      await posts.save();
      res.status(200).send("Net Norte has been created");
    } else {
      res.status(200).send("device name is needed");
    }
  } catch (error) {
    res.status(400).send("error get route of post");
  }
});
posts.get("/", async (req, res) => {
  const { postid } = req.body;
  try {
    const posts = await postmodel.find({ postid: postid });
    console.log(posts);
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send("error get route of post");
  }
});

posts.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const posts = await postmodel.findOne({ _id: id });
   console.log(posts)
  try {
    if (res.body.postid !== posts.postid) {
      res.status(200).send("You cannot delete other persons note");
    } else {
      await postmodel.findByIdAndDelete({ _id: postid });
      res.status(400).send(`The notes of id:${postid} has been deleted`);
    }
  } catch (error) {
    res.status(400).send("You cannot delete err");
  }
});





posts.patch("/update/:id", async (req, res) => {
  const { postid } = req.params;
  const posts = await postmodel.findOne({ _id: postid });

  try {
    if (res.body.id !== posts.id) {
      res.status(200).send("You cannot delete other persons note");
    } else {
      await postmodel.findByIdAndUpdate({ _id: postid });
      res.status(400).send(`The notes of id:${postid} has been updated`);
    }
  } catch (error) {
    res.status(400).send("You cannot delete err persons note");
  }
});

module.exports = {
  posts,
};
