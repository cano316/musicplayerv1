import axios from "axios";
import { useState } from "react"

export default function Register() {

    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: ""
    })
    const [register, setRegister] = useState(false);
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
                const results = await axios.post("http://localhost:5000/api/register", formData);
                setRegister(true)

            } catch (error) {
                setErrorMessage(error.response.data.message);
            }
        }
        registerApiCall();
        // Clear form data after submission.
        setFormData({
            email: "",
            username: "",
            password: ""
        });
    }
    return (
        <div className="register">
            <h1>Register</h1>
            <form onSubmit={handleSubmit} className="upload-form">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} />
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" onChange={handleChange} value={formData.username} />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={handleChange} value={formData.password} />
                <button type="submit">Register</button>
            </form>
            {register && <p>You are successfully registered.</p>}
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    )
}