// loads environment variables "keeps Sensitive data"
const dotenv = require("dotenv");
dotenv.config();

//imports modules
const express = require("express");
const mongoose = require("mongoose");

//express app created
const app = express();

//monitors mongoDB connection
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});
//import authcontroller 
const authController = require("./controllers/auth.js");

//middleware
app.use("/auth", authController);



// GET routes 
app.get("/", async (req, res) => {
    res.send("hello, friend testing landing page!");
  });

  
  






// server Connection "Starts Server"
app.listen(3000, () => {
  console.log("Listening on port http://localhost:3000");
});
