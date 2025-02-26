const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const Signup = require("./models/signupSchema");
const bcrypt = require("bcrypt");
const cors = require('cors');
const app = express();
const PORT = 3001;
dotenv.config();
app.use(cors());
app.use(express.json());

mdb
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MONGODB CONNECTION SUCCESS");
  })
  .catch((err) => {
    console.log("CHECK YOUR CONNECTION", err);
  });

app.get("/static", (req, res) => {
  res.sendFile("/Users/delishsasir/MYFILES/DEVLOP_PACK/MERN_STACK/DAY-2/HTML_CSS/index.html");
});

app.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const { firstName, lastName, email, password, phoneNumber } = req.body;
    const hashedPass = await bcrypt.hash(password, 10);
    const newSignup = new Signup({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPass,
      phoneNumber: phoneNumber,
    });
    await newSignup.save();
    console.log("SIGNUP SUCCESS");
    res.status(201).json({ message: "SIGNUP DONE", isSignup: true });
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).json({ message: "SIGNUP FAILED", isSignup: false });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Signup.findOne({ email: email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "USER NOT FOUND", isLogin: false });
    }
    const ismatch = await bcrypt.compare(password, user.password);
    if (ismatch) {
      console.log("LOGIN SUCCESS");
      return res
        .status(200)
        .json({ message: "Login successful", isLogin: true });
    } else {
      return res
        .status(400)
        .json({ message: "Invalid credentials", isLogin: false });
    }
  } catch (error) {
    return res.status(500).json({ message: "CATCH ERROR", isLogin: false });
  }
});

app.listen(PORT, () => console.log("SERVER STARTED"));
