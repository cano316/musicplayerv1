import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import React, { useState } from "react";

export default function MusicCard(props) {
    const [isHovered, setIsHovered] = useState(false)

    const styles = {
        backgroundColor: isHovered ? "#e2e2e2" : ""
    }
    function handleMouseEnter(e) {
        e.preventDefault();
        setIsHovered(prev => !prev)
    }
    function handleMouseExit(e) {
        e.preventDefault();
        setIsHovered(prev => !prev)
    }
    return (
        <div style={styles} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} className="music-card">
            <img src={props.coverImg} alt="" className="album-cover" />
            <div className="song-info">
                <h3 className="song--title">{props.title}</h3>
                <p>{props.artist}</p>
            </div>
        </div>
    )
}