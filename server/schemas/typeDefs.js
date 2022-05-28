const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedCharacter: [Character]
  }

  type Character {
    _id: ID!
    name: String!
    gender: String!
    codeLanguage: String!
    prompt: String!
    description: String!
    image: String!
    link: String
    dialog: String
  }

  type Auth {
    user: User
    token: ID!
  }

  type Query {
    user: User
    savedCharacter: [Character]
    characters(username: String): [Character]
    getCharactersByGender(gender: String!): [Character]
    character(characterId: ID!): Character
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email:String!, password:String!): Auth

    updateUser(userId: ID!, savedCharacter: String!): User
  }
`;

module.exports = typeDefs;
