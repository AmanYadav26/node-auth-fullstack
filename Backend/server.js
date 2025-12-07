require('dotenv').config();  
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const auth = require("./middleware/auth");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/auth", authRoutes);

app.get("/ping", (req, res) => {
  res.send("pong");
});


// Protected route
app.get("/dashboard", auth, (req, res) => {
    res.json({ msg: `Welcome User ${req.user}` });
});

app.listen(process.env.PORT, () => console.log("Server running..."));
