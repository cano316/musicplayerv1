import React from "react";
import logo from "../mpclogo.png"
export default function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <div className="navbar--left">
                    <img src={logo} className="beat-logo" />
                    <h2 className="header--title">Beatfolio</h2>
                </div>
                <h3 className="header--project">Cano Web Solutions</h3>
            </nav>
        </header>
    )
}