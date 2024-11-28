const express = require("express");
const router = express.Router();
const  Videogame = require("../models/videogame.js");

//create a video game
router.post("/", async (req, res) => {
    try {
      const newGame = await Videogame.create(req.body);
      res.redirect("/videoGames/gameList");
    } catch (error) {
      console.log(error);
      res.send("Error creating game");
    }
  });

  // Read video games
router.get("/", async (req, res) => {
    try {
      const games = await Videogame.find();
      res.render("gameList.ejs", { games });
    } catch (error) {
      console.log(error);
      res.send("Error fetching games");
    }
  });

  // Update a video game
router.put("/:id", async (req, res) => {
    try {
      await Videogame.findByIdAndUpdate(req.params.id, req.body);
      res.redirect("/videoGames/gameList");
    } catch (error) {
      console.log(error);
      res.send("Error updating game");
    }
  });

// Delete a video game
router.delete("/:id", async (req, res) => {
    try {
      await Videogame.findByIdAndDelete(req.params.id);
      res.redirect("/videoGames/gameList");
    } catch (error) {
      console.log(error);
      res.send("Error deleting game");
    }
  });

  module.exports = router;