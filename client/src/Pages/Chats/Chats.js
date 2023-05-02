import React from "react";
import ChatNav from "./ChatNav";
import MainChat from "./MainChat";
import MultiplayerPanel from "./MultiplayerPanel";
import SoloPanel from "./SoloPanel";

const Chats = () => {
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
        <SoloPanel/>
        <MultiplayerPanel/>
        <MainChat/>

      </div>
    </div>
  );
};

export default Chats;
