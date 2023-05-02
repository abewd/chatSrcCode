import React from 'react'

export default function MainChat() {
  return (
    <>
                <div className="flex flex-col flex-grow">
          <div className="flex justify-between items-center p-4 bg-gray-200">
            <div className="flex gap-4">
              {/* this will redirect to home if you want it to... but ive sacked it for now /}
                  {/ <h2>Logo</h2> */}
            </div>
            <div className="flex gap-4">
              <button className="px-4 py-2 hover:bg-blue-600 bg-blue-500 text-white rounded">
                Create group
              </button>
              <button className="px-4 py- 2 hover:bg-blue-600 bg-blue-500 text-white rounded">
                Create chat
              </button>
              <button className="px-4 py-2 hover:bg-blue-600 bg-blue-500 text-white rounded">
                Add user as friend
              </button>
            </div>
          </div>
          <div className="flex-grow flex flex-col">
            <div className="flex justify-center items-center h-10">
              <input
                type="text"
                placeholder="Search group ID"
                className="w-1/2 p-2 mt-10 border border-gray-400 rounded"
              />
            </div>
            <div className="flex-grow flex justify-center items-center">
              <p>Chats linked to logged in user</p>
            </div>
          </div>
        </div>
    </>
  )
}
