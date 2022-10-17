import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Update(props) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        title: '',
        artist: '',
        coverImg: ''
    });

    useEffect(() => {
        const FindSong = async () => {
            const foundSong = await axios.get(`http://localhost:5000/api/${id}`)
            setFormData(foundSong.data);
        }
        FindSong()
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
        console.log(formData)
        // Make a POST request to my API passing in the form data
        const postToApi = async () => {
            try {
                await axios.patch(`http://localhost:5000/api/${id}`, formData)
            } catch (error) {
                console.log(error)
            }
        }
        postToApi();
        navigate('/');
    }


    return (
        <div className="form-container">
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