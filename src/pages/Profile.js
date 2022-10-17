import { Link, useParams, useLocation, redirect, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Error from "../components/Error";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";
export default function Profile(props) {
    const navigate = useNavigate();
    const { userId } = useParams();
    const [song, setSong] = useState();
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
    function handleDelete() {
        try {
            axios.delete(`http://localhost:5000/api/${userId}`)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
        props.causeRefresh();
    }
    return song ? (
        <div>
            <div className={`show-song-container ${props.darkMode ? "music-dark" : ""}`}>
                <img src={`${song.coverImg}`} alt="" width={300} />
                <div className="song-details">
                    <h1>{song.title}</h1>
                    <h2>{song.artist}</h2>
                </div>
                <Link to="update">Update</Link>
                <button onClick={handleDelete}>Delete</button>
            </div>
            <Link to="/">Home</Link>
        </div>

    ) : (
        <div className="api-error">
            <h1>Could not find that song.</h1>
        </div>
    )
}


 // return (
    //     <div>
    //         <div className={`show-song-container ${props.darkMode ? "music-dark" : ""}`}>
    //             <img src={`${song.coverImg}`} alt="" width={300} />
    //             <div className="song-details">
    //                 <h1>{song.title}</h1>
    //                 <h2>{song.artist}</h2>
    //             </div>
    //             <Link to="update">Update</Link>
    //         </div>
    //         <Link to="/">Home</Link>
    //     </div>
    // )