// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect, forceUpdate } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
// import MusicCard from "./components/MusicCard";
import Main from "./components/Main";
import UploadForm from "./pages/UploadForm";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Update from "./pages/Update";
import data from "./data"
import AddMusicButton from "./components/AddMusicButton";
import { Router, Routes, Route, Link, Switch, useParams } from "react-router-dom"

function App() {
  const [music, setMusic] = useState([]);
  const [darkMode, setDarkMode] = useState(false)

  async function submittedFromChild() {
    const apiResults = await axios.get("http://localhost:5000/api");
    setMusic(apiResults.data)
  }
  // API call

  useEffect(() => {
    console.log("fetched API data")
    const getApiData = async () => {
      const apiResults = await axios.get("http://localhost:5000/api");
      setMusic(apiResults.data)
    }
    getApiData();
  }, [])


  // I am going to need to create an updateMusic function that updates the state of my music array based on user form input

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  // function addMusic(formData) {
  //   formData.id = music.length + 1;
  //   setMusic(prevMusic => {
  //     return [...prevMusic, formData]
  //   })
  // }
  // The above function to add music has been removed because we are using express and mongo


  // Night mode on background of web app 
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
        <Route path='upload' element={<UploadForm
          submittedFromChild={submittedFromChild}
        />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path=':id/update' element={< Update />} />
        <Route path=":userId" element={<Profile
          darkMode={darkMode}
        />} />
      </Routes>

    </div >
  );
}

export default App;

{/* <section className="music--container">
        {musicElements}
      </section> */}