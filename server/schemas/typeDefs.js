const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedCharacter: ID
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

  type Auth {
    username: String!
    token: String!
  }

  type Query {
    users: [User]
    user(username: String!): User
    characters(username: String): [Character]
    getCharactersByGender(gender: String!): [Character]
    character(characterId: ID!): Character
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email:String! , password:String!): Auth
    updateUser(userId: ID!, savedCharacter: ID!): User
    updateCharacter(characterId:ID!): Character
  }
`;

module.exports = typeDefs;
