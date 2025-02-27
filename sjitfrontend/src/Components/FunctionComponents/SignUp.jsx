import "../css/SignUp.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [FirstName, setFirst] = useState("");
  const [LastName, setLast] = useState("");
  const [EmailID, setEmail] = useState("");
  const [Password, setPass] = useState("");
  const [PhoneNumber, setPhone] = useState(0);
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://sjitmern-fa74.onrender.com/signup", {
        firstName: FirstName,
        lastName: LastName,
        email: EmailID,
        password: Password,
        phoneNumber: PhoneNumber,
      });

      const message = response.data.message;
      const isSignup = response.data.isSignup;

      alert(message);
      if (isSignup) {
        navigate("/login");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="maindiv">
      <h1 className="font">SIGN UP</h1>
      <form onSubmit={handleSignup}>
        <div className="inputdiv">
          <label htmlFor="FirstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            value={FirstName}
            onChange={(e) => setFirst(e.target.value)}
          />

          <label htmlFor="LastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            value={LastName}
            onChange={(e) => setLast(e.target.value)}
          />

          <label htmlFor="EmailID">Email ID:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email ID"
            value={EmailID}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={Password}
            onChange={(e) => setPass(e.target.value)}
          />

          <label htmlFor="PhoneNumber">Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Enter Phone Number"
            value={PhoneNumber}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />

          <button type="submit">Sign Up</button>
        </div>
      </form>
      <div className="logindiv">
        <p>Already have an account?</p>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default SignUp;
