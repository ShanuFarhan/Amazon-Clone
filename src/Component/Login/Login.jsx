import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
const Login = () => {
  return (
    <>
    <div className="login">
        <Link to="/">
            <img src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png"
             alt="" className='Loginlogo'/>   
        </Link>
        <div className="logincontainer">
            <h1>Sign In</h1>
            <form>
                <h3>Email</h3>
                <input type='email' placeholder='Your Email' 
                required></input>
                <h3>Password</h3>
                <input type='password' placeholder='Your Password' 
                required></input>
                <button className='Loginbutton'>Sign In</button>
            </form>
            <p>
                By continuing, you are agree to Amazon's Condition of Use and Privacy Notice
            </p>
            <button className="Loginbutton">Create Your Amazon Acount
            </button>
        </div>
    </div>
    </>
  )
}

export default Login
