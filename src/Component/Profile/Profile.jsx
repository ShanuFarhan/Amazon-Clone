import React from 'react'
import {Link} from 'react-router-dom'
import "./Profile.css"
const Profile = () => {
  return (
    <>
    <div className="profile">
    <Link to="/">
            <img src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png"
             alt="" className='profilelogo'/>   
        </Link>
        <div className="profilecontainer">
            <h1>Your Profile</h1>
            <form >
                <h3>Name</h3>
                <input type='text' placeholder='Enter Your Name' required/>
                <h3>Email</h3>
                <input type='email' placeholder='Enter Your Email' required/>
                <h3>Mobile</h3>
                <input type='number' placeholder='Enter Your Number' required/>
                <button className="profilebutton">Update Profile</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Profile
