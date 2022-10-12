import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../mpclogo.png"
export default function Navbar(props) {
    return (
        <header>
            <nav className={props.darkMode ? "dark" : "navbar"}>
                <div className="navbar--left">
                    <NavLink to="/"><img src={logo} className="beat-logo" /></NavLink>
                    <h2 className="header--title">Beatfolio</h2>
                    <div className="nav--links">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="about">About</NavLink>
                        <NavLink to="contact">Contact</NavLink>
                        <NavLink to="upload">Upload</NavLink>
                    </div>
                </div>
                {/* <h3 className="header--project">Cano Web Solutions</h3> */}
                <div
                    className="toggler"
                >
                    <p className="toggler--light">Light</p>
                    <div
                        className="toggler--slider"
                        onClick={props.toggleDarkMode}
                    >
                        <div className="toggler--slider--circle"></div>
                    </div>
                    <p className="toggler--dark">Dark</p>
                </div>
            </nav>
        </header>
    )
}