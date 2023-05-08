import React, { useState, useEffect } from "react";

// Importing socket and groupchat functionality
const ChatBar = ({ socket, groupchat }) => {
  const [users, setUsers] = useState([]);

  // 'useEffect' hook to listen for 'newUserResponse' event from the socket
  useEffect(() => {
    // When 'newUserResponse' event is received update the 'users'
    //state with received data
    socket.on("newUserResponse", (data) => setUsers(data));
  }, [socket, users]);

  return (
    <div className="chat__sidebar">
      <h2>{!groupchat && "Open Chat"}</h2>

      <div>
        {/*  Display "Group Name" if in a group chat, otherwse display "ACTIVE USERS" */}
        <h4 className="chat__header">
          {groupchat ? "Group Name" : "ACTIVE USERS"}
        </h4>
        <div className="chat__users">
          {
            // If not in a group chat, display a list of all users
            !groupchat
              ? users.map((user) => <p key={user.socketID}>{user.userName}</p>)
              : // If in a group chat, display only the first user in the list
                users
                  .slice(0, 1)
                  .map((user) => <p key={user.socketID}>{user.userName}</p>)
          }
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
