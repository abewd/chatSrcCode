// const express = require('express');
// const path = require('path');
// const cors = require('cors');
// const { ApolloServer } = require('apollo-server-express');
// const { authMiddleware } = require('./utils/auth');
// const { typeDefs, resolvers } = require('./schemas');
// const db = require('./config/connection');
// const Message = require('./models/Chats');

// const PORT = process.env.PORT || 3001;
// const app = express();

// app.use(cors());
// app.use(express.json());
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware,
// });

// app.use(express.urlencoded({ extended: false }));

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// // Socket.io setup
// const httpServer = require('http').createServer(app);
// const io = require('socket.io')(httpServer, {
//   cors: {
//     origin: 'http://localhost:3000',
//     credentials: true,
//   },
// });

// io.on('connection', (socket) => {
//   console.log('User connected', socket.id);

//   socket.on('disconnect', () => {
//     console.log('User disconnected', socket.id);
//   });

//   socket.on('new-message', async (message) => {
//     console.log('New message received', message);

//     const newMessage = await Message.create(message);

//     io.emit('new-message', newMessage);
//   });
// });

// const startApolloServer = async () => {

//   await server.start();
//   server.applyMiddleware({ app });

//   db.once('open', () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//       console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//     });
//   });
// }

// startApolloServer(typeDefs, resolvers);
const express = require('express');
const app = express();
const PORT = 4000;

//New imports
const http = require('http').Server(app);
const cors = require('cors');

app.use(cors());

const socketIO = require('socket.io')(http, {
  cors: {
    origin: "http://localhost:3000"
  }
});

let users = [];

//Add this before the app.get() block
socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  //Listens and logs the message to the console
  socket.on('message', (data) => {
    socketIO.emit("messageResponse", data)
  });
  socket.on("typing", data => (
    socket.broadcast.emit("typingResponse", data)
  ))
  //Listens when a new user joins the server
  socket.on('newUser', (data) => {
    //Adds the new user to the list of users
    users.push(data);
    //Sends the list of users to the cliento
    console.log(data)
    socketIO.emit('newUserResponse', users)

  })
  socket.on('joinRoom', (room) => {
    socket.join(room);
  });

  socket.on('leaveRoom', (room) => {
    socket.leave(room);
  });

  socket.on('sendMessage', (data) => {
    // Broadcast the message to all clients in the room
    socket.to(data.room).emit('newMessage', data.message);
  });

  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
    //Updates the list of users when a user disconnects from the server
    users = users.filter((user) => user.socketID !== socket.id)

    socketIO.emit('newUserResponse', users);
    socket.disconnect()
  });
});
app.get('/api', (req, res) => {
  res.json({
    message: 'Hello world',
  });
});


http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});