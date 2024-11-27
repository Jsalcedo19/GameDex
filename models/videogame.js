const mongoose = require("mongoose");

const videogameSchema = new Mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    genre: {
        type: String,
        require: true,
    },
    date: {
        type: number,
        require: true,
    },
    isFavorite: {
        type: Boolean,
        default: false
    }
});

const Videogame = mongoose.model('Videogame',videogameSchema);
module.exports = Videogame;