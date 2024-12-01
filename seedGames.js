// Import required modules
const mongoose = require("mongoose");
const Videogame = require("./models/videogame");

// Connect to MongoDB
mongoose.connect("mongodb+srv://jsalcedo19:Delilah05301219@clusterjose.dry9u.mongodb.net/Gamedex?retryWrites=true&w=majority&appName=ClusterJose")
    .then(() => {
        console.log("Database connected");
    })
    .catch((error) => {
        console.error("Database connection error:", error);
    });

   // videogame data
   const seedGames = [
    { name: "The Legend of Zelda: Breath of the Wild", genre: "Adventure", date: 2017, rating: 5 },
    { name: "Elden Ring", genre: "RPG", date: 2022, rating: 5 },
    { name: "Super Mario Odyssey", genre: "Platformer", date: 2017, rating: 5 },
    { name: "God of War Ragnarök", genre: "Action", date: 2022, rating: 5 },
    { name: "Hollow Knight", genre: "Metroidvania", date: 2017, rating: 4 },
    { name: "Red Dead Redemption 2", genre: "Action-Adventure", date: 2018, rating: 5 },
    { name: "Animal Crossing: New Horizons", genre: "Simulation", date: 2020, rating: 4 },
    { name: "Final Fantasy VII Remake", genre: "RPG", date: 2020, rating: 5 },
    { name: "Cyberpunk 2077", genre: "RPG", date: 2020, rating: 3 },
    { name: "Stardew Valley", genre: "Simulation", date: 2016, rating: 5 },
    { name: "Fortnite", genre: "Battle Royale", date: 2017, rating: 4 },
    { name: "Call of Duty: Modern Warfare II", genre: "Shooter", date: 2022, rating: 4 },
    { name: "Minecraft", genre: "Sandbox", date: 2011, rating: 5 },
    { name: "Among Us", genre: "Party", date: 2018, rating: 4 },
    { name: "Overwatch 2", genre: "Shooter", date: 2022, rating: 4 },
    { name: "League of Legends", genre: "MOBA", date: 2009, rating: 4 },
    { name: "Apex Legends", genre: "Battle Royale", date: 2019, rating: 4 },
    { name: "Horizon Forbidden West", genre: "Action-Adventure", date: 2022, rating: 4 },
    { name: "Dark Souls III", genre: "RPG", date: 2016, rating: 5 },
    { name: "The Witcher 3: Wild Hunt", genre: "RPG", date: 2015, rating: 5 },
];

// Function to seed the database
const seedDB = async () => {
    try {
        await Videogame.deleteMany({});  // Clears the Videogame collection
        await Videogame.insertMany(seedGames);  // Inserts the seed data
        console.log("Database seeded successfully");
    } catch (err) {
        console.error("Error seeding the database:", err);
    } finally {
        mongoose.connection.close();  // Closes the connection
    }
};

// Runs the seed function
seedDB();