
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  device: { type: String, required: true },
  postid:{ type: String, required: true },
  postname:{ type: String, required: true }
});

const postmodel = mongoose.model("postuser", userSchema);



module.exports = {
  postmodel,
};

