import React,{useState} from "react";
import ChatNav from "./ChatNav";
import MainChat from "./MainChat";
import MultiplayerPanel from "./MultiplayerPanel";
import SoloPanel from "./SoloPanel";
import ChatPopup from "../../componets/popupmodal/ChatPopup";
import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:4000");

const Chats = () => {
  const [open, setOpen] = useState(false);
  const [groupchat,setGroupChat]=useState(false)
  const [chatActive,setchatActive]=useState(false)
  const [userName,setUsername]=useState('')
  const HandleOpen=()=>{
    setGroupChat(true)
    setOpen(true)
  }
  const handleSubmit = () => {
    localStorage.setItem('userName', userName);
    //sends the username and socket ID to the Node.js server
    socket.emit('newUser', { userName, socketID: socket.id });
    // navigate('/chat');
    setOpen(false)
    console.log(userName,"username")
    setchatActive(true)
  };
  return (
    <div>
        <ChatNav/>
      <div
        className="h-screen flex flex-row"
        style={{
          position: "absolute",
          bottom: "-81px",
          width: "100%",
        }}
      >
        <ChatPopup open={open} groupchat={groupchat} setOpen={setOpen} setUsername={setUsername} userName={userName} onClose={handleSubmit} />
        <SoloPanel/>
        <MultiplayerPanel/>
        <MainChat setOpen={setOpen} groupchat={groupchat} onOpen={HandleOpen} open={open} socket={socket} chatActive={chatActive} />

      </div>
    </div>
  )
};

export default Chats;
