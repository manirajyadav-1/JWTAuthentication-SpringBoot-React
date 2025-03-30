import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

function Login () {
    const [password, setPasswordValue] = useState("");
    const [userId, setUserIdValue] = useState("");

    const cookies = new Cookies();
    const navigate = useNavigate();

    const setPassword = (e) => {
        setPasswordValue(e.target.value);
    }

    const setUserId = (e) => {
        setUserIdValue(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("this is our data "+ userId +"   "+ password )
        
        const data = {
            "email": userId,
            "password": password
        }

        try{
            const response = await axios.post("http://localhost:8080/auth/login", data);
            console.log("this is the response " + response.data);
            if(!response.data) {
                alert("Invalid User Id or Password");
            }
            else {
                const token = response.data.token;
                cookies.set("token", token);
                alert("Login Successfull");
                navigate("/users")
            }
            
        } catch(error) {
            console.error(error);
        }
    }

    const redirectToRegister = () => {
        window.location.href = "/register";
    }

    return (
        <><h1> This is login page</h1>
        <div className="container">
           <form onSubmit={handleSubmit}>

            <label>User ID:</label>
            <input type="emial" placeholder="Enter your user id" value={userId} onChange={setUserId}/>
            <br></br>
            <br></br>
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" value={password} onChange={setPassword}/>
            <br></br>
            <br></br>

            <a onClick={redirectToRegister}>Don't have an account</a>
            <button type="submit">Login</button>
           </form>

        </div></>
    )
}

export default Login;