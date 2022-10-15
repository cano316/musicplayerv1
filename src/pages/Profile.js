import { Link, useParams, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";
export default function Profile(props) {
    const { userId } = useParams();
    const [song, setSong] = useState({
        title: "",
        artist: "",
        coverImg: ""
    })
    useEffect(() => {
        const fetchSong = async () => {
            try {
                const results = await axios.get(`http://localhost:5000/api/${userId}`)
                setSong(results.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchSong()
    }, [])
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
