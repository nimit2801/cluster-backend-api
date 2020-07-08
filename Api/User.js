const express = require("express");
const mongoose = require("mongoose");
const User = require("../DB/User");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { name, username, email, password } = req.body;
  let user = {};
  user.name = name;
  user.username = username;
  user.email = email;
  user.password = password;
  let userModel = new User(user);
  await userModel.save();
  res.json(userModel);
});

module.exports = router;
