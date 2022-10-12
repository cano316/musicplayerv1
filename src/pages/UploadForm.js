import { useState } from "react";
import { Link } from "react-router-dom"
export default function UploadForm(props) {
    const [formData, setFormData] = useState({
        song: "",
        artist: "",
        imgUrl: ""
    })

    function handleChange(e) {
        // destructure name and value from e.target
        const { name, value } = e.target;
        console.log(name, value)
        // e.target.name will return different names dynamically based on what is being changes
        //name could be song, artist, or imgUrl
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData)
    }
    return (
        <div>
            <form className="upload-form" onSubmit={handleSubmit}>
                <input type="text" name="song" placeholder="Song Name" onChange={handleChange} value={formData.song} />
                <input type="text" name="artist" placeholder="Artist" onChange={handleChange} value={formData.artist} />
                <input type="text" name="imgUrl" placeholder="Image Url" onChange={handleChange} value={formData.imgUrl} />
                <button type="submit">Submit</button>
            </form>
            <Link to="/">Home</Link>
        </div>

    )
}