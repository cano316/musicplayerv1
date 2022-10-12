// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";
import Navbar from "./components/Navbar";
// import MusicCard from "./components/MusicCard";
import Main from "./components/Main";
import UploadForm from "./pages/UploadForm";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import data from "./data"
import AddMusicButton from "./components/AddMusicButton";
import { Router, Routes, Route, Link, Switch, useParams } from "react-router-dom"

function App() {
  const [music, setMusic] = useState(data);
  const [darkMode, setDarkMode] = useState(false)

  // I am going to need to create an updateMusic function that updates the state of my music array based on user form input

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  document.body.style.backgroundColor = darkMode ? "#434555" : ""
  return (
    <div className="App">
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Routes>
        <Route path='/' element={<Main
          darkMode={darkMode}
          music={music}
        />} />
        <Route path='upload' element={<UploadForm />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path=":userId" element={<Profile
          music={music}
        />} />
      </Routes>

    </div >
  );
}

export default App;

{/* <section className="music--container">
        {musicElements}
      </section> */}