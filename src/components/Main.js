import React from "react";
import MusicCard from "./MusicCard";


export default function Main(props) {
    const { music } = props;
    // console.log(music)
    const musicElements = music.map(song => {
        return <MusicCard
            {...song}
            key={song._id}
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