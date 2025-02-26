import "../css/SignUp.css";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const [FirstName, setfirst] = useState("");
  const [LastName, setlast] = useState("");
  const [EmailID, setemail] = useState("");
  const [Password, setpass] = useState("");
  const [PhoneNumber, setphone] = useState(0);
  const handlesigup = async (event) => {
    event.preventDefault();
    const req = await axios.post("https://sjitmern-fa74.onrender.com", {
      firstName: FirstName,
      lastName: LastName,
      email: EmailID,
      password: Password,
      phoneNumber: PhoneNumber,
    });
    const message = req.data.message;
    const isSignup = req.data.isSignup;
    if (isSignup) {
      alert(message);
      Navigate("/login");
    } else {
      alert(message);
    }
  };
  return (
    <div className="maindiv">
      <h1 className="font">SIGN UP</h1>
      <form>
        <div className="inputdiv">
          <label htmlFor="FirstName">FirstName :</label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={FirstName}
            onChange={(e) => setfirst(e.target.value)}
          />
          <label htmlFor="LastName">LastName :</label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={LastName}
            onChange={(e) => setlast(e.target.value)}
          />

          <label htmlFor="EmailID">EmailID :</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Emailid"
            value={EmailID}
            onChange={(e) => setemail(e.target.value)}
          />

          <label htmlFor="Password">Password :</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={Password}
            onChange={(e) => setpass(e.target.value)}
          />

          <label htmlFor="PhoneNumber">PhoneNumber :</label>
          <input
            type="number"
            name="PhoneNumber"
            placeholder="PhoneNumber"
            value={PhoneNumber}
            onChange={(e) => setphone(parseInt(e.target.value))}
          />
          <br />
          <button type="submit" onClick={handlesigup}>
            SignUp
          </button>
        </div>
      </form>
      <div className="logindiv">
        <p>Already a Account Holder??</p>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default SignUp;
