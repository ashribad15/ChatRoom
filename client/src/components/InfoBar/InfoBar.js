import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';  // Import the online icon image
import closeIcon from '../../icons/closeIcon.png';  // Import the close icon image

import './InfoBar.css';  // Import the CSS for styling the InfoBar component

// InfoBar functional component that receives 'room' as a prop
const InfoBar = ({ room }) => (
  <div className="infoBar">
    {/* Left section of the InfoBar with an online icon and the room name */}
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />  {/* Display online icon */}
      <h3>{room}</h3>  {/* Display the room name */}
    </div>
    
    {/* Right section with a close icon that redirects to the home page */}
    <div className="rightInnerContainer">
      <a href="/"><img src={closeIcon} alt="close icon" /></a>  {/* Link to home page ("/") */}
    </div>
  </div>
);

export default InfoBar;  // Export the InfoBar component as the default export
