const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    chats: [Chat]!
  }

  type Chat {
    _id: ID
    chatText: String
    chatAuthor: String
    createdAt: String
    // comments: [Comment]!
  }

//   type Comment {
//     _id: ID
//     commentText: String
//     commentAuthor: String
//     createdAt: String
//   }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    chats(username: String): [Chat]
    chat(chatId: ID!): Chat
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addChat(chatText: String!): Chat
    // addComment(chatId: ID!, commentText: String!): Chat
    removeChat(thoughtId: ID!): Chat
    removeComment(chatId: ID!, commentId: ID!): Chat
  }
`;

module.exports = typeDefs;