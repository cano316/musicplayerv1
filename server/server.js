const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const Song = require('./models/song');
const { urlencoded } = require('express');

main().catch(e => console.log(e))
async function main() {
    await mongoose.connect("mongodb://localhost:27017/musicApp");
    console.log("CONNECTED TO MONGODB")
}

// Allow CORS
app.use(cors());
// parse incoming data
app.use(express.urlencoded({ extended: true }))
// This is needed because axios sends post request as JSON, we need to parse it.
app.use(express.json())

app.get("/api", async (req, res) => {
    const allSongs = await Song.find({});
    res.status(200).json(allSongs);
})

app.get("/api/:id", async (req, res) => {
    const { id } = req.params;
    const song = await Song.findById(id)
    res.status(200).json(song);
})

// Post request, receiving form data and saving to DB

app.post("/api", async (req, res) => {
    const userSong = req.body;
    const newSong = new Song(userSong);
    await newSong.save();
})









// Listen
app.listen(5000, function () {
    console.log('LISTENING ON 5000')
})