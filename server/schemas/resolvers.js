const { AuthenticationError } = require('apollo-server-express');
const { User, Chat } = require('../models');
const { signToken } = require('../utils/auth');
const bcrypt = require("bcrypt"); // Added bycrypt for chat messages //need to look at connecting bycyrpt to functions


const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('chats');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('chats');
    },
    chats: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Chat.find(params).sort({ createdAt: -1 });
    },
    chat: async (parent, { chatId }) => {
      return Chat.findOne({ _id: chatId });
    },
    me: async (parent, x, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('chats');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {

    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = bcrypt.compare(User.isCorrectPassword(password));

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    //Added logout functionality for users this maynot be required as this is handled by deleting the access token on the client side 

    logout: async (_, __, context) => {
      if (context.user) {
        context.logout();
        return true;
      }
      return false;
    },
    
    //Adds chats between users
    addChat: async (parent, { chatText }, context) => {
      if (context.user) {
        const chat = await Chat.create({
          chatText,
          chatAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { chats: chat._id } }
        );

        return chat;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    //Removes chats between users

    removeChat: async (parent, { chatId }, context) => {
      if (context.user) {
        const chat = await Chat.findOneAndDelete({
          _id: chatId,
          chatAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { chats: chat._id } }
        );

        return chat;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
 
  //Message functions to get/add/delete messages 
  getMessages: async (parent, { from, to }, context) => {
    if (context.user) {
      try {
        const messages = await Chat.find({
          users: {
            $all: [from, to],
          },
        }).sort({ updatedAt: 1 });
        
        const projectedMessages = messages.map((msg) => {
          return {
            fromSelf: msg.sender.toString() === from,
            message: msg.message.text,
          };
        });
  
        return projectedMessages;
      } catch (ex) {
        throw new Error('Could not fetch messages');
      }
    }
    throw new AuthenticationError('You need to be logged in!');
  },
  
    // adds chats between said User's
    addMessage: async (parent, { to, message }, context) => {
      if (context.user) {
        try {
          const newMessage = new Chat({
            sender: context.user._id,
            users: [context.user._id, to],
            message: {
              text: message,
            },
          });
          await newMessage.save();
    
          return {
            fromSelf: true,
            message: newMessage.message.text,
          };
        } catch (ex) {
          throw new Error('Could not add message');
        }
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    
    //removes messages from the Chat between Users

    removeMessage: async (parent, { messageId }, context) => {
      if (context.user) {
        try {
          const message = await Chat.findById(messageId);
          
          if (!message) {
            throw new Error('Message not found');
          }
          
          if (!message.sender.equals(context.user._id)) {
            throw new Error('You are not authorized to delete this message');
          }
          
          await message.remove();
          
          return message;
        } catch (ex) {
          throw new Error('Could not delete message');
        }
      }
      throw new AuthenticationError('You need to be logged in!');
    }
    
  },
};




























module.exports = resolvers;
