import React from "react";

const Chats = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: "#f5f5f5",
        }}
      >
        <div style={{ display: "flex", gap: "1rem" }}>
          <h2>Logo</h2>
          <nav style={{ display: "flex", gap: "1rem" }}>
            <div
              style={{
                overflowX: "auto",
                display: "flex",
                gap: "1rem",
              }}
            >
              <a href="#">Multiplayer</a>
              <a href="#">Solo</a>
            </div>
          </nav>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button style={{ padding: "0.5rem 1rem" }}>Create group</button>
          <button style={{ padding: "0.5rem 1rem" }}>Create chat</button>
          <button style={{ padding: "0.5rem 1rem" }}>Add user as friend</button>
        </div>
      </div>
      <div style={{ flex: 4, display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "10%",
          }}
        >
          <input
            type="text"
            placeholder="Search group ID"
            style={{ width: "50%" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90%",
          }}
        >
          <p>Chats linked to logged in user</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
