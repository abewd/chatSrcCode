import React from "react";

const Chats = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <aside
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "10%",
          backgroundColor: "#f5f5f5",
        }}
      >
        <a href="#">Multiplayer</a>
      </aside>
      <aside
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "10%",
          backgroundColor: "#f5f5f5",
        }}
      >
        <a href="#">Solo</a>
      </aside>
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
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
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button style={{ padding: "0.5rem 1rem" }}>Create group</button>
            <button style={{ padding: "0.5rem 1rem" }}>Create chat</button>
            <button style={{ padding: "0.5rem 1rem" }}>
              Add user as friend
            </button>
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
    </div>
  );
};

export default Chats;
