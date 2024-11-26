const mongoose = require("mongoose");

const videogameSchema = new Mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: number,
        require: true,
    },
    favoritegame: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Videogame'
    }
});

const Videogame = mongoose.model('Videogame',videogameSchema);
module.exports = Videogame;