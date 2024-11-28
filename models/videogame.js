const mongoose = require("mongoose");

const videogameSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    genre: {
        type: String,
        require: true,
    },
    date: {
        type: Number,
        require: true,
    },
    isFavorite: {
        type: Boolean,
        default: false
    }
});

const Videogame = mongoose.model('Videogame',videogameSchema);
module.exports = Videogame;