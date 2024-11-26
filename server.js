const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});


// GET routes 
app.get("/", async (req, res) => {
    res.send("hello, friend testing landing page!");
  });
  
// server Connection
app.listen(3000, () => {
  console.log("Listening on port http://localhost:3000");
});