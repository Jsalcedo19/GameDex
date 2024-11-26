const mongoose = require("mongoose");

const userSchema = new Mongoose.Schema({
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
        type: [Mongoose.Schema.Types.ObjectId],
        ref: 'Videogame'
    }
});

const User = mongoose.model('User',userSchema);
module.exports = User;