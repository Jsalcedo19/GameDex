// imports
const dotenv = require("dotenv");// loads environment variables "keeps Sensitive data"
dotenv.config();
const express = require("express");
const app = express(); //express app created
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");
const session = require("express-session"); //imports express-session
const isSignedIn = require('./middleware/is-signed-in.js');
const passUserToView = require('./middleware/pass-user-to-view.js')
const authController = require("./controllers/auth.js"); //import auth controller
const gameController = require("./controllers/gameController.js");


//declare port
const PORT = process.env.PORT ? process.env.PORT : "3000";

const path = require('path');
//set ejs as the view engine, so .ejs files can be rendered
app.set('view engine', 'ejs');



//monitors mongoDB connection
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

//middleware
app.use(express.urlencoded({ extended: false })); // form submissions
app.use(methodOverride("_method")); // allows us to use PUT and DELETE methods
app.use(morgan("dev")); // logging of server requests
app.use(express.static(path.join(__dirname, 'public')));
//manages user sessions with secret key for security
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
); 


app.use(passUserToView);

// GET route for landing page
app.get("/", async (req, res) => {
  res.render("index.ejs");
});

app.use('/auth', authController); // Handles all routes starting with "/auth" 
app.use(isSignedIn); // Protects all routes below this:
app.use('/videoGames', gameController); // Handles all routes starting with "/videoGames" 


// server Connection "Starts Server"
app.listen(PORT, () => {
  console.log(`The express app is ready on port http://localhost:${PORT}`);
});
