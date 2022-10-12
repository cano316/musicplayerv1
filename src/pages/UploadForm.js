import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
export default function UploadForm(props) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        artist: "",
        coverImg: ""
    })

    function handleChange(e) {
        // destructure name and value from e.target
        const { name, value } = e.target;
        // e.target.name will return different names dynamically based on what is being changes
        //name could be song, artist, or imgUrl
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
        // the syntax about is the same as saying return a new object with the old object data
        // and override e.target.name to be set to e.target.value
        // ie, when artist input is changed, it runs setFormData on each keystroke/change
        // and spreads old object data to new object, and overrides artist to be set to be whatever user inputs
        // remember, we are getting value from the state and overriding HTML value
    }
    function handleSubmit(e) {
        e.preventDefault();
        props.addMusic(formData);
        navigate('/');
    }

    return (
        <div>
            <form className="upload-form" onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Song Name" onChange={handleChange} value={formData.title} />
                <input type="text" name="artist" placeholder="Artist" onChange={handleChange} value={formData.artist} />
                <input type="text" name="coverImg" placeholder="Image Url" onChange={handleChange} value={formData.coverImg} />
                <button type="submit">Submit</button>
            </form>
            <Link to="/">Home</Link>
        </div>

    )
}