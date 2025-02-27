import "../css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [EmailID, setemail] = useState("");
  const [Password, setpass] = useState("");
  const navigate = useNavigate();

  const handlesigup = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://sjitmern-fa74.onrender.com/login", {
        email: EmailID,
        password: Password,
      });

      const message = response.data.message;
      const isLogin = response.data.isLogin;

      alert(message);
      if (isLogin) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="User">
      <h3 className="font">Login In</h3>
      <form onSubmit={handlesigup}>
        <div className="FormInput">
          <label htmlFor="Email">Email:</label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={EmailID}
            onChange={(e) => setemail(e.target.value)}
          />

          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={Password}
            onChange={(e) => setpass(e.target.value)}
          />

          <button type="submit" className="btn">
            Login
          </button>
        </div>
      </form>
      <div className="signup">
        <p>Don't have an account?</p>
        <br />
        <Link to="/signup" className="signupbtn">
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default Login;
