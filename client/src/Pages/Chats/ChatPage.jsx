import React, { useState, useEffect, useRef } from "react";
import ChatBar from "../../componets/ChatComponents/Chatbar";
import ChatBody from "../../componets/ChatComponents/ChatBody";
import ChatFooter from "../../componets/ChatComponents/ChatFooter";
import "./chat.css";
const ChatPage = ({ socket, groupchat }) => {
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState("");
  const lastMessageRef = useRef(null);

  // Listens for 'messageResponse' for the following useEffects (see below)
  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  useEffect(() => {
    //  scroll to bottom every time messages change
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Listens to 'typingResponse' and then notifies that a user is typing
  useEffect(() => {
    socket.on("typingResponse", (data) => setTypingStatus(data));
  }, [socket]);
  // here...
  console.log(typingStatus);

  return (
    <div className="chat">
      <ChatBar socket={socket} groupchat={groupchat} />
      <div className="chat__main">
        <ChatBody
          groupchat={groupchat}
          messages={messages}
          typingStatus={typingStatus}
          lastMessageRef={lastMessageRef}
        />
        <ChatFooter socket={socket} groupchat={groupchat} />
      </div>
    </div>
  );
};

export default ChatPage;
