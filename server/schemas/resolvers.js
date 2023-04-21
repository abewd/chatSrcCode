const { AuthenticationError } = require('apollo-server-express');
const { User, Chat } = require('../models');
const { signToken } = require('../utils/auth');

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

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
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
    // addComment: async (parent, { thoughtId, commentText }, context) => {
    //   if (context.user) {
    //     return Thought.findOneAndUpdate(
    //       { _id: thoughtId },
    //       {
    //         $addToSet: {
    //           comments: { commentText, commentAuthor: context.user.username },
    //         },
    //       },
    //       {
    //         new: true,
    //         runValidators: true,
    //       }
    //     );
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
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
    // removeComment: async (parent, { thoughtId, commentId }, context) => {
    //   if (context.user) {
    //     return Thought.findOneAndUpdate(
    //       { _id: thoughtId },
    //       {
    //         $pull: {
    //           comments: {
    //             _id: commentId,
    //             commentAuthor: context.user.username,
    //           },
    //         },
    //       },
    //       { new: true }
    //     );
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
  },
};

module.exports = resolvers;
