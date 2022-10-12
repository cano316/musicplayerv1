import { Link, useParams, useLocation } from "react-router-dom"
import { useState } from "react"
import { type } from "@testing-library/user-event/dist/type";
export default function Profile(props) {
    const { userId } = useParams();
    // const [song, setSong] = useState()
    const { music } = props
    const song = music.find(s => s.id == userId);
    return (
        <div>
            <div className="show-song-container">
                <img src={`${song.coverImg}`} alt="" width={300} />
                <h1>{song.title}</h1>
                <h2>{song.artist}</h2>
            </div>
            <Link to="/">Home</Link>
        </div>

    )
}
