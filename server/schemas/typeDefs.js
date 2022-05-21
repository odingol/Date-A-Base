const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Character {
    _id: ID!
    name: String!
    gender: String!
    codeLanguage: String!
    prompt: String!
    description: String!
    image: String!
    link: String!
  }

  type Query {
    users: [User]
    user(username: String!): User 
    characters(username: String): [Character]
    character(characterId: ID!): Character
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateCharacter(characterId: ID!, name: String!, image: String!, description: String!, gender: String!, codeLanguage: String!): Character
  }
`;

module.exports = typeDefs;
