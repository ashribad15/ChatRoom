import React from 'react';

import './Input.css';  // Import the CSS for styling the Input component

// Input functional component that receives 'setMessage', 'sendMessage', and 'message' as props
const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    {/* Input field for typing messages */}
    <input
      className="input"
      type="text"
      placeholder="Type a message..."  {/* Placeholder text in the input */}
      value={message}  {/* Bind input value to the 'message' state */}
      onChange={({ target: { value } }) => setMessage(value)}  {/* Update the message state when the input changes */}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}  {/* Send message if 'Enter' key is pressed */}
    />
    
    {/* Button to send the message */}
    <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
  </form>
)

export default Input;  // Export the Input component as the default export
