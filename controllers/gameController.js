const express = require("express");
const router = express.Router();
const Videogame = require("../models/videogame.js");
const User = require("../models/user.js");

// this renders mygameList, the route is actually /videoGames/mygameList as set in server.js
router.get('/mygameList', async (req, res) => {
  try {
    //retrieves the user's favorite games from the database using the User model
    //populate method fills that user field favoriteGames with the actual videogame objects (full details)
    const user = await User.findById(req.session.user._id).populate('favoriteGames');

    //is used to render the mygameList.ejs view while passing the favoriteGames of logged-in user as variable games
      res.render('videoGames/mygameList', { games: user.favoriteGames });
  } catch (error) {
      console.log(error);
      res.redirect('/');
  }
});


// Route to display all video games
router.get('/gameList', async (req, res) => {
  try {
    // Fetch all video games from the database
    const allGames = await Videogame.find({});

    const user = await User.findById(req.session.user._id);

    // Render the view and pass the video games to it
    res.render('videoGames/gameList', { games: allGames, user });
  } catch (error) {
    console.error("Error fetching all video games:", error);
    res.redirect('/');
  }
});

// Route to add a video game to a user's favorites
router.post('/gameList/:id', async (req, res) => {
  try {
    const userId = req.session.user._id;

    await User.findByIdAndUpdate(userId, { 
      $addToSet: { favoriteGames: req.params.id } 
    });
    res.redirect('/videoGames/mygameList');
  } catch (error) {
    console.error("Error adding game to favorites:", error);
    res.redirect('/');
  }
});

//update rating of favorite videogame
router.put('/mygameList/:id', async (req, res) => {
  try {
    const gameId = req.params.id; // ID of the game to update
    const newRating = req.body.rating; // New rating from the form

    // Ensure the game belongs to the user's favorites
    const user = await User.findById(req.session.user._id);
    if (!user.favoriteGames.includes(gameId)) {
      console.error("Game not in user's favorites");
      return res.status(403).send('You can only update ratings for your favorite games.');
    }

    // Update the rating of the game in the Videogame collection
    await Videogame.findByIdAndUpdate(gameId, { rating: newRating });

    res.redirect('/videoGames/mygameList');
  } catch (error) {
    console.error("Error updating game rating:", error);
    res.redirect('/');
  }
});


//Delete a videogame from my game list 
router.delete('/mygameList/:id', async (req, res) => {
  try {
    const userId = req.session.user._id;
      await User.findByIdAndUpdate(userId, {
        $pull: { favoriteGames: req.params.id }
      });
      res.redirect('/videoGames/mygameList');
  }
  catch (error) {
      console.error("Error deleting game in my game list")
  }
});

  module.exports = router;
