import React, { useState, useEffect, useRef } from 'react'
import ChatPage from './ChatPage';

export default function MainChat({ setOpen, chatActive, socket, onOpen, groupchat }) {
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState('');
  const lastMessageRef = useRef(null);

  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  console.log(messages)
  return (
    <>
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-center p-4 bg-gray-200">
          <div className="flex gap-4">
            {/* this will redirect to home if you want it to... but ive sacked it for now /}
                  {/ <h2>Logo</h2> */}
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 hover:bg-blue-600 bg-blue-500 text-white rounded"
              onClick={() => onOpen()}>
              Create group
            </button>
            <button className="px-4 py- 2 hover:bg-blue-600 bg-blue-500 text-white rounded" onClick={() => setOpen(true)}>
              Create chat
            </button>
            <button className="px-4 py-2 hover:bg-blue-600 bg-blue-500 text-white rounded">
              Add user as friend
            </button>
          </div>
        </div>
        {chatActive ?
          <ChatPage socket={socket} groupchat={groupchat} />
          :
          <div className="flex-grow flex flex-col">
            <div className="flex justify-center items-center h-10">
              <input
                type="text"
                placeholder="Search group ID"
                className="w-1/2 p-2 mt-10 border border-gray-400 rounded"
              />
            </div>
            <div className="flex-grow flex-col flex justify-center items-center">
              <p className='text-gray-800'>Create Chat by using Create Chat Button</p>
              <p className='text-red-800'>Create Group by using Create Group Button</p>
              <p className='text-red-800'>Add Friend by using Add user as friend</p>
            </div>
          </div>
        }
      </div>
    </>
  )
}
