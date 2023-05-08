import React, { useState } from "react";

const ChatFooter = ({ socket, groupchat }) => {
  const [message, setMessage] = useState("");

  // Handler function for sending a 'typing' event to the LS to server
  const handleTyping = () => {
    socket.emit("typing", `${localStorage.getItem("username")} is typing`);
  };

  const handleSendMessage = (e) => {
    // Prevent the default form submission
    // behavior which is to refresh immediatley
    e.preventDefault();
    // Check if the msg has content and a user name is
    // available in local storage (this might need to be edited for mDB)
    if (message.trim() && localStorage.getItem("userName")) {
      // Emit a "message" event to the LS/Server with the message object
      socket.emit("message", {
        text: message,
        name: localStorage.getItem("userName"),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    // Reset the msg state to an empty string
    // This is so when you press enter, the field resets so you can write
    // a new message to send
    setMessage("");
  };

  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleTyping}
        />
        <button className="sendBtn">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;
