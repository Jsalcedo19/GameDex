// imports
const dotenv = require("dotenv");// loads environment variables "keeps Sensitive data"
dotenv.config();
const express = require("express");
const app = express(); //express app created
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");
const session = require("express-session"); //imports express-session
const authController = require("./controllers/auth.js"); //import auth controller
const gameController = require("./controllers/gameController.js");

const isSignedIn = require('./middleware/is-signed-in.js');
const passUserToView = require('./middleware/pass-user-to-view.js')



//declare port
const port = process.env.PORT ? process.env.PORT : "3000";

//monitors mongoDB connection
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan("dev"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
//app.use(passUserToView);
app.use('/auth', authController);
app.use('/videoGames', gameController);
//app.use(isSignedIn);
app.use(express.json());


//app.use(express.static(path.join(__dirname, 'public')));




// GET route for landing page
app.get("/", async (req, res) => {
  res.render("index.ejs");
});



// server Connection "Starts Server"
app.listen(port, () => {
  console.log(`The express app is ready on port http://localhost:${port}`);
});
