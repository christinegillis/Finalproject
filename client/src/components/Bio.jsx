import React, { PropTypes } from 'react';
import { Link } from 'react-router';


const Bio = ({ user }) =>(

    <div className = "container">
    <img src={user.profilePic}/>
    <h1>{user.firstName} {user.lastName}</h1>
    <h1>About</h1>
    <h2>Education: </h2> 
    {user.education}
    <h2>Experience: </h2>
    {user.experience}
    <h2>Portfolio: </h2>
    <a href={user.port1}>Port1</a>
    <a href={user.port2}>Port2</a>

    <h2>Contact info: </h2>
    <text>Phone: {user.phone}</text>
    <text>Email: {user.email}</text>
	
    </div>

);

export default Bio;