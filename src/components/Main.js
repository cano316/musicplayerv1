import React from "react";
import MusicCard from "./MusicCard";
import AddMusicButton from "./AddMusicButton";

export default function Main(props) {
    const { music } = props;
    const musicElements = music.map(song => {
        return <MusicCard
            {...song}
            key={song.id || music.length + 1}
        />
    })

    return (
        <div>
            <section className={`music--container ${props.darkMode ? "music-dark" : ""}`}>
                {musicElements}
            </section>
        </div>
    )
}