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
    rating: {
        type: Number,
        enum: [1, 2, 3, 4, 5],
        require: false,
    },
    image:{
        type: String,
        require: false,
    }
});

const Videogame = mongoose.model('Videogame',videogameSchema);
module.exports = Videogame;