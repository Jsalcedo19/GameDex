const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: Number,
        require: true,
    },
    favoriteGames: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Videogame'
    }
});

const User = mongoose.model('User',userSchema);
module.exports = User;