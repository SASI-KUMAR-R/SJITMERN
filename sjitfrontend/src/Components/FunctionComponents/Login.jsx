import React from 'react'
import '../css/Login.css'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="User">
        <h3 className='font'>Login In</h3>
        <form>
            <div className="FormInput">
                <label>Email:</label>
                <input  id="Email" placeholder="Enter your Email"/>

                <label>Password:</label>
                <input id="Password" placeholder="Enter your Password"/>
                <button class="btn">Login</button>
            </div>
        </form>
        <div className='signup'>
            <p>Don't have an account?</p>
            <br />
            <Link to="/signup" class="signupbtn">SignUp</Link>
        </div>
    </div>

  )
}

export default Login