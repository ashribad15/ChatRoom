import React, { useState, useEffect } from "react";
import queryString from 'query-string';  // To parse query strings (e.g., name, room) from the URL
import io from "socket.io-client";  // For real-time communication using WebSockets
import { useLocation } from 'react-router-dom';  // To access the URL/location object

import TextContainer from '../TextContainer/TextContainer';  // Component for displaying the list of users
import Messages from '../Messages/Messages';  // Component for displaying chat messages
import InfoBar from '../InfoBar/InfoBar';  // Component for displaying room name and close button
import Input from '../Input/Input';  // Component for the message input field

import './Chat.css';  // Importing styles

const ENDPOINT = 'https://chatroombackend-40jx.onrender.com';  // Backend server URL

let socket;  // Declare the socket variable globally to be used across components

const Chat = () => {
  const location = useLocation();  // Get the location object to access query parameters
  const [name, setName] = useState('');  // State to store the username
  const [room, setRoom] = useState('');  // State to store the room name
  const [users, setUsers] = useState('');  // State to store the list of users in the room
  const [message, setMessage] = useState('');  // State to store the current message input by the user
  const [messages, setMessages] = useState([]);  // State to store all messages exchanged in the chat

  // This effect runs once when the component mounts and sets up the socket connection
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);  // Parse the 'name' and 'room' from the URL

    socket = io(ENDPOINT);  // Initialize the socket connection to the backend

    setRoom(room);  // Set the room from the URL
    setName(name);  // Set the user name from the URL

    // Emit a 'join' event to the backend with name and room details
    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);  // Display error if there's an issue with joining the room
      }
    });
  }, [location.search]);  // Runs again if location.search changes (URL changes)

  // This effect listens for incoming messages and updates the message state
  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);  // Append new messages to the state
    });

    // Listen for updates to the room's user list and update the users state
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  // Function to send a message
  const sendMessage = (event) => {
    event.preventDefault();  // Prevent the default form submission behavior

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));  // Emit the message and clear the input field
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />  {/* Display room information */}
        <Messages messages={messages} name={name} />  {/* Display chat messages */}
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />  {/* Input field for sending messages */}
      </div>
      <TextContainer users={users} />  {/* Display list of users in the chat room */}
    </div>
  );
};

export default Chat;
