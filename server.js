// loads environment variables "keeps Sensitive data"
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();//express app created

const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");

const session = require("express-session");

//import authcontroller 
const authController = require("./controllers/auth.js");

//declare port
const port = process.env.PORT ? process.env.PORT : "3000";

//monitors mongoDB connection
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan('dev'));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);


// GET route for landing page
app.get("/", async (req, res) => {
    res.render("index.ejs");
  });


app.use("/auth", authController);


// server Connection "Starts Server"
app.listen(port, () => {
  console.log(`The express app is ready on port http://localhost:${port}`);
});
