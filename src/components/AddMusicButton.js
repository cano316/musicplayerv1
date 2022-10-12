import { Link } from "react-router-dom"
export default function AddMusicButton() {
    return (
        // <button className="music--button">Add Music</button>
        <Link className="music--button" to="upload">Upload</Link>
    )
}