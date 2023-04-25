import React from "react";

const Chats = () => {
  return (
    <div>
      <div className="bg-gray-50 min-h-screen flex items-center justify-center px-16">
        <div className="relative w-full max-w-lg">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="m-8 relative space-y-4"></div>
        </div>
      </div>
      <div
        className="h-screen flex flex-row"
        style={{
          position: "absolute",
          bottom: "-81px",
          width: "100%",
        }}
      >
        <aside className="flex flex-col justify-center items-center w-1/12 bg-gray-200">
          <a href="#">Multiplayer</a>
        </aside>
        <aside className="flex flex-col justify-center items-center w-1/12 bg-gray-200">
          <a href="#">Solo</a>
        </aside>
        <div className="flex flex-col flex-grow">
          <div className="flex justify-between items-center p-4 bg-gray-200">
            <div className="flex gap-4">
              {/* this will redirect to home if you want it to... but ive sacked it for now /}
                  {/ <h2>Logo</h2> */}
            </div>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded">
                Create group
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded">
                Create chat
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded">
                Add user as friend
              </button>
            </div>
          </div>
          <div className="flex-grow flex flex-col">
            <div className="flex justify-center items-center h-10">
              <input
                type="text"
                placeholder="Search group ID"
                className="w-1/2 p-2 border border-gray-400 rounded"
              />
            </div>
            <div className="flex-grow flex justify-center items-center">
              <p>Chats linked to logged in user</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
