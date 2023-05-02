const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  password: { type: String, required: true },
});

const usermodel = mongoose.model("signinuser", userSchema);

module.exports = {
  usermodel,
};

// name: { type: String, required: true },
// email: { type: String, required: true },
// gender: { type: String, required: true },
// password: { type: String, required: true },
