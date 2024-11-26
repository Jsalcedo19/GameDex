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
app.use(express.urlencoded({ extended: false }));


// GET routes 
app.get("/", async (req, res) => {
    res.render("index.ejs");
  });
  
  
  






// server Connection "Starts Server"
app.listen(3000, () => {
  console.log("Express app ready at http://localhost:3000");
});
