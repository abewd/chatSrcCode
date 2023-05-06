import { gql } from '@apollo/client';

export const ADD_USER = gql
  `mutation AddUser($username: String!, $email: String!, $password: String!) {
      addUser(username: $username, email: $email, password: $password) {
        token
        user {
          _id
          username
          email
          password
        }
      }
}`

export const LOG_IN = gql
  `mutation Login($username: String!, $password: String!) {
      login(username: $username, password: $password) {
        token
        user {
          username
          email
        }
      }
}`