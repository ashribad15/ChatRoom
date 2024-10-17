import React, { useState } from 'react';
import { Link } from "react-router-dom";  // Import Link for navigation

import './Join.css';  // Import the CSS for styling the Join component

// Functional component for the sign-in page
export default function SignIn() {
  const [name, setName] = useState('');  // State to store the user's name
  const [room, setRoom] = useState('');  // State to store the room name

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>  {/* Title for the sign-in page */}
        
        {/* Input field for entering the name */}
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}  {/* Update 'name' state on input change */}
          />
        </div>
        
        {/* Input field for entering the room name */}
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}  {/* Update 'room' state on input change */}
          />
        </div>
        
        {/* Link to the chat page, with dynamic name and room parameters */}
        {/* Prevent navigation if name or room is not provided */}
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className="button mt-20" type="submit">Sign In</button>  {/* Button to sign in */}
        </Link>
      </div>
    </div>
  );
}
