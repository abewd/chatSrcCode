const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    chats: [Chat]
    friends: [User]
  }
  type Chat {
    _id: ID
    users: [User]
    messages: [Message]
  }
  type Message {
    _id: ID
    userID: String
    text: String
    createdAt: String
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    users: [User]
    user(username: String!): User
    chats(username: String!): [Chat]
    chat(chatId: ID!): Chat
    me: User
    getAllMessages( _id:ID!, text: String! ): [Chat]
    getUserByUsername(username: String!): User
    getAllFriends(username: String!): User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addChat(users: [ID!]): Chat
    addMessage(_id: ID!, text: String!): Chat
    removeChat(_id: ID!): Chat
    removeMessage(_id: ID!): Chat
    addFriend(username: String!): User
    removeFriend(username: String!): User
  }
`;

module.exports = typeDefs;