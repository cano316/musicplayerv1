const mongoose = require("mongoose");
const Song = require('./models/song');

main().catch(e => console.log(e))
async function main() {
    await mongoose.connect("mongodb://localhost:27017/musicApp");
    console.log("Connection Open")
}

const arrOfSongs = [
    {
        title: "Hard Times",
        artist: "Freddie Gibbs",
        coverImg: "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/ykhdu9an0yoeqyoo0hsw/soul-sold-separately"
    },
    {
        title: "Addictions",
        artist: "Brent Faiyaz",
        coverImg: "https://media.pitchfork.com/photos/62c715e86284eb9164c12cd5/1:1/w_600/Brent-Faiyaz-Wasteland.jpg"
    },
    {
        title: "My First Reply (Till It's Over)",
        artist: "Dom Kennedy",
        coverImg: "https://upload.wikimedia.org/wikipedia/en/0/08/By_Dom_Kennedy.jpeg"
    },
    {
        title: "Justice",
        artist: "Justin Bieber",
        coverImg: "https://upload.wikimedia.org/wikipedia/en/0/08/Justin_Bieber_-_Justice.png"
    }
];

Song.insertMany(arrOfSongs)
    .then(songs => console.log(songs))
    .catch(err => console.log(err))