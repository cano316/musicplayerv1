// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MusicCard from "./components/MusicCard";
import data from "./data"

function App() {
  const [music, setMusic] = useState(data);
  const musicElements = music.map(song => {
    return <MusicCard
      {...song}
      key={song.id}
    />
  })
  return (
    <div className="App">
      <Navbar />
      <section className="music--container">
        {musicElements}
      </section>
    </div>
  );
}

export default App;
