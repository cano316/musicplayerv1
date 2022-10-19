const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const mongoose = require("mongoose");
const Song = require('./models/song');
const { urlencoded } = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local')

const dbURl = process.env.DB_URL || "mongodb://localhost:27017/musicApp";
main().catch(e => console.log(e))
async function main() {
    await mongoose.connect(dbURl);
    console.log("CONNECTED TO MONGODB")
}

// Allow CORS
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
// parse incoming data
app.use(express.urlencoded({ extended: true }))
// This is needed because axios sends post request as JSON, we need to parse it.
app.use(express.json())
// Session

// since this is in production mode no need to set maxAge, that will be set when we store session to MongoStore
app.use(session({
    secret: 'fakesecret',
    resave: false,
    saveUninitialized: true
}))
// Passport
// app.use(passport.initialize());
// app.use(passport.session());

app.use((req, res, next) => {
    console.log(req.session);
    next();
})


// Routes
app.get("/api", async (req, res) => {
    const allSongs = await Song.find({});
    res.status(200).json(allSongs);
})

app.get("/api/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const song = await Song.findById(id)
        res.status(200).json(song);
    } catch (error) {
        res.status(404).json(error)
    }

})

// Post request, receiving form data and saving to DB

app.post("/api", async (req, res) => {
    const userSong = req.body;
    const newSong = new Song(userSong);
    await newSong.save((err, userInput) => {
        if (err) return res.status(400).send(err.name);
        res.status(200).json(userInput);
    });
})

// Update song by ID route
// won't need a route to send form, will only need the post request route
app.patch("/api/:id", async (req, res) => {
    const { id } = req.params;
    const newSong = req.body;
    try {
        const results = await Song.findByIdAndUpdate(id, newSong, { runValidators: true, new: true });
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json(error)
    }
})

app.delete("/api/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await Song.findByIdAndDelete(id)
    } catch (error) {
        res.status(400).json(error)
    }
})








// Listen
app.listen(5000, function () {
    console.log('LISTENING ON 5000')
})