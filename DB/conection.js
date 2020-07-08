const mongoose = require("mongoose");
const config = require("config");

const URI = config.get("connectionURI");
const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log("db connected..!");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
