import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, redirect } from "react-router-dom"
export default function UploadForm(props) {
    const navigate = useNavigate();
    const { causeRefresh } = props;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        artist: "",
        coverImg: ""
    })
    useEffect(() => {
        async function checkAuth() {
            try {
                const results = await axios.get("http://localhost:5000/api/auth");
                console.log(results)
            } catch (error) {
                console.log(error);
            }

        }
        checkAuth();
    }, [])

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }
    function handleSubmit(e) {
        e.preventDefault();
        // Make a POST request to my API passing in the form data
        const postToApi = async () => {
            try {
                const results = await axios.post("http://localhost:5000/api", formData);
                // If song successfully posts to DB, re-route to the show page
                navigate(`/${results.data._id}`)
            } catch (error) {
                console.log(error)
            }
        }
        postToApi();
        causeRefresh();
    }

    return isLoggedIn ? (
        <div className="form-container">
            <form className="upload-form" onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Song Name" onChange={handleChange} value={formData.title} />
                <input type="text" name="artist" placeholder="Artist" onChange={handleChange} value={formData.artist} />
                <input type="text" name="coverImg" placeholder="Image Url" onChange={handleChange} value={formData.coverImg} />
                <button type="submit">Submit</button>
            </form>
            <Link to="/">Home</Link>
        </div>
    ) : (
        <h1>You need to be logged in for that.</h1>
    )
}