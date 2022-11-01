import { Link, useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Error from "../components/Error";
import axios from "axios";
export default function Profile(props) {
    const { causeRefresh } = props;
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
    }, [userId])
    function handleDelete() {
        try {
            axios.delete(`http://localhost:5000/api/${userId}`)
        } catch (error) {
            console.log(error)
        }
        causeRefresh();
        navigate("/")
    }
    return song ? (
        <div>
            <div className={`show-song-container ${props.darkMode ? "music-dark" : ""}`}>
                <img src={`${song.coverImg}`} alt="" width={300} />
                <div className="song-card-right">
                    <div className="song-details">
                        <h1>{song.title}</h1>
                        <h2>{song.artist}</h2>
                    </div>
                    <div className="song-links">
                        <Link className="update-link" to="update">Update</Link>
                        <button className="delete-button" onClick={handleDelete}>Delete</button>
                    </div>
                </div>

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