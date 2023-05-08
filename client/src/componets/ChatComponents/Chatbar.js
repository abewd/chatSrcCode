import React,{useState,useEffect} from 'react';

const ChatBar = ({ socket, groupchat  }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        socket.on('newUserResponse', (data) => setUsers(data));
    }, [socket, users]);    

    return (
        <div className="chat__sidebar">
            <h2> {!groupchat && "Open Chat"}</h2>

            <div>
                <h4 className="chat__header">{groupchat  ?"Group Name":"ACTIVE USERS"}</h4>
                <div className="chat__users">
                    {!groupchat ? users.map((user) => (
                        <p key={user.socketID}>{user.userName}</p>
                    ))
                    :users.slice(0,1).map((user)=>(
                        <p key={user.socketID}>{user.userName}</p>
                    ))
                }
                </div>
            </div>
        </div>
    );
};

export default ChatBar;
