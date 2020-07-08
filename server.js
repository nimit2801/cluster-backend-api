const express = require("express");
const app = express();
// const path = require("path");
// //const bcrypt= require('bcrypt-nodejs')
// const cors = require("cors");

// //mongoose connecting to mongoDB
// const connectDB = require("./DB/conection");
// const user = require("./DB/User");
// connectDB();

// //api user model
// // const userModel = require("./Api/User");
// // app.use(express.json({ extended: false }));
const port = process.env.Port || 3001;
// const NODE_ENV = "production";

// // app.get("/", (req, res) => {
// //   res.send("<h1>Hello World!</h1>");
// // });

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(cors());

// if (NODE_ENV == "production") {
//   app.use(express.static("build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "build", "index.html"));
//   });
// }

// //routes called
// const loginRoute = require("./routes/login.routes");
// const signupRoute = require("./routes/signup.routes");
// const userRoute = require("./routes/user.routes");

// // app.post("/signup", userModel);

// app.post("/login", loginRoute);
// app.post("/signup", signupRoute);
// app.post("/user", userRoute);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

app.get("/", (req, res) => {
  res.send("<h1>suck my balls</h1>");
});

app.post("/login", (req, res) => {
  res.json({ msg: "suck my balls" });
});
