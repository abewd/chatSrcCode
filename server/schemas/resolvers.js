const { AuthenticationError } = require("apollo-server-express");
const { User, Chat } = require("../models");
const { signToken } = require("../utils/auth");
const bcrypt = require("bcrypt");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("chats");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("chats");
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
        return User.findOne({ _id: context.user._id }).populate("chats");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    getUserByUsername: async ({ username }) => {
      try {
        const user = await User.findOne({ username });
        return {user};
      } catch (ex) {
        next(ex);
      }
    },
    getAllMessages: async(parent, args) => {
      try {
        const messages = await Message.find()
          .populate('chat')
          .populate('user');
        return messages;
      } catch (ex) {
        console.error(ex);
        throw ex;
      }
    },
    getAllFriends: async(parent, { username }) => {
      try {
        const user = await User.findOne({ username }).populate('friends');
        const friends = user.friends;
        return friends;
      } catch (ex) {
        console.error(ex);
        throw ex;
      }
    },
  },

  Mutation: {

    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("No user found with this username");
      }

      const correctPw = bcrypt.compare(password, User.password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    addChat: async (parent, { users }, context) => {
      if (context.user) {
        const chat = await Chat.create({
          users,
          chatAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { chats: chat._id } }
        );

        return chat;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removeChat: async (parent, { _id }, context) => {
      if (context.user) {
        const chat = await Chat.findOneAndDelete({
          _id: _id,
          chatAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { chats: chat._id } }
        );

        const otherUser = await User.findOneAndUpdate(
          { chats: chat._id, _id: { $ne: context.user._id } },
          { $pull: { chats: chat._id } }
        );
    
        return chat;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    
    addMessage: async (parent, { _id, text }, context) => {
      if (context.user) {
        try {
          const recipient = await User.findOne({ username: _id });
    
          if (!recipient) {
            throw new Error("Recipient user does not exist");
          }
    
          const newMessage = new Chat({
            sender: context.user._id,
            users: [context.user._id, recipient._id],
            message: {
              text: text,
            },
          });
    
          await newMessage.save();
    
          const notification = {
            title: "New message",
            body: `You have a new message from ${context.user.username}`,
          };
          recipient.notifications.push(notification);
          await recipient.save();
    
          return newMessage
          
        } catch (ex) {
          throw new Error("Could not add message");
        }
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    
    removeMessage: async (parent, { _id }, context) => {
      if (context.user) {
        try {
          const message = await Chat.findById(_id);

          if (!message) {
            throw new Error("Message not found");
          }

          if (!message.sender.equals(context.user._id)) {
            throw new Error("You are not authorized to delete this message");
          }

          await message.remove();

          return message;
        } catch (ex) {
          throw new Error("Could not delete message");
        }
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  addFriend: async (parent, { username }, context) => {
    if (context.user) {
      const friend = await User.findOne({ username });

      if (!friend) {
        throw new UserInputError("User not found!");
      }

      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { friends: friend._id } }
      );

      return friend;
    }
    throw new AuthenticationError("You need to be logged in!");
  },

  removeFriend: async (parent, { username }, context) => {
    if (context.user) {
      const friend = await User.findOne({ username });
  
      if (!friend) {
        throw new UserInputError("User not found!");
      }
  
      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { friends: friend._id } }
      );
  
      return friend;
    }
    throw new AuthenticationError("You need to be logged in!");
  },
  
};

module.exports = resolvers;


