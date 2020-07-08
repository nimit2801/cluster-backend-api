const mongoose = require("mongoose");

const newUser = new mongoose.Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  phone: {
    type: Number,
  },
  department: {
    type: String,
  },
});

module.exports = User = mongoose.model("newUser", newUser);
