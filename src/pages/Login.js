import axios from "axios";
import { useState } from "react"

export default function Login() {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const [loggedIn, setLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
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
        const registerApiCall = async () => {
            try {
                const results = await axios.post("http://localhost:5000/api/login", formData);
                setLoggedIn(true)

            } catch (error) {
                setErrorMessage("Invalid login credentials. Please try again.");
            }
        }
        registerApiCall();
        // Clear form data after submission.
        setFormData({
            username: "",
            password: ""
        });
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="upload-form">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" onChange={handleChange} value={formData.username} />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={handleChange} value={formData.password} />
                <button type="submit">Login</button>
            </form>
            {loggedIn && <p>You are successfully logged in.</p>}
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    )
}