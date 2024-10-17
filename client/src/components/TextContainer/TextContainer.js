import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';  // Import the online icon image

import './TextContainer.css';  // Import the CSS for styling the TextContainer component

// Functional component that displays chat room information and active users
const TextContainer = ({ users }) => (
  <div className="textContainer">
    {/* Static content section with chat room introduction */}
    <div>
      <h1>Private Chat Room <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2>
      <h2>Made with <span role="img" aria-label="emoji">❤️</span> by Ashribad</h2>
    </div>

    {/* If there are users currently in the chat room, display their names and online status */}
    {
      users ? (
        <div>
          <h1>People currently chatting:</h1>
          <div className="activeContainer">
            <h2>
              {users.map(({name}) => (
                // Display each user's name and the online icon
                <div key={name} className="activeItem">
                  {name}
                  <img alt="Online Icon" src={onlineIcon}/>  {/* Online icon next to each user's name */}
                </div>
              ))}
            </h2>
          </div>
        </div>
      ) : null  // If no users are online, display nothing
    }
  </div>
);

export default TextContainer;  // Export the TextContainer component as the default export
