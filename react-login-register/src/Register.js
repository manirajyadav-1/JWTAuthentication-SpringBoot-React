import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/signup",
        {
          name: register.name.trim(),
          email: register.email.trim(),
          password: register.password.trim(),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      alert("User registered successfully");
      setRegister({ name: "", email: "", password: "" });
      navigate("/login");
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={register.name}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={register.email}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={register.password}
          onChange={handleChange}
        />
        <br />
        <br />

        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}

export default Register;
