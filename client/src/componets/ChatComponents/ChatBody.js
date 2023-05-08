import React from "react";
import { useNavigate } from "react-router-dom";

const ChatBody = ({ messages, lastMessageRef, typingStatus, groupchat }) => {
  // 'useNavigate' hook to handle navigation between routes
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/");
    // Reload the window to apply changes
    window.location.reload();
  };

  return (
    <>
      <header className="chat__mainHeader">
        <p>Hangout with Colleagues</p>
        {/* Render leave group / chat button and attach click handler */}
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          {groupchat ? "Leave Group" : "LEAVE CHAT"}
        </button>
      </header>
      <div>
        <div ref={lastMessageRef} />
      </div>
      {/* Render message containers for each message in the 
      'messages' array */}
      <div className="message__container">
        {messages.map((message) =>
          // If the message is sent by the current user,
          // display "You" as the sender's name
          message.name === localStorage.getItem("userName") ? (
            <div className="message__chats" key={message.id}>
              {/* See below, it'll make sense */}
              <p className="sender__name">You</p>
              <div className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            // If the message is sent by another user,
            // display their name
            <div className="message__chats" key={message.id}>
              <p>{message.name}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}
        {/* Render typing status message */}
        <div className="message__status">
          <p>{typingStatus}</p>
        </div>
      </div>
    </>
  );
};

export default ChatBody;
