const { AuthenticationError } = require("apollo-server-express");
const { User, Character } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    // Double check to see if the character do a get request once a username is found
    savedCharacter: async () => {
        return await User.find({ Character });
    },
    getCharactersByGender: async (parent, { Character }) => {
      return Character.find({ Character });
    },
    character: async (parent, { characterId }) => {
      return Character.findOne({ _id: characterId });
    },
    characters: async () => {
      return Character.find();
    },
  },

  Mutation: {
    addUser: async (parent, { username }) => {
      // First we create the user
      const user = await User.create({ username, email, password });
      // To reduce friction for the user, we immediately sign a JSON Web Token and log the user in after they are created
      const token = signToken(user);
      // Return an `Auth` object that consists of the signed token and user's information
      return { token, username: user.username };
    },
    login: async (parent, { email, password }) => {
      // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
      const user = await User.findOne({ email });
      // If there is no user with that email address, return an Authentication error stating so
      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }
      // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
      const correctPw = await user.isCorrectPassword(password);
      // If the password is incorrect, return an Authentication error stating so
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      // If email and password are correct, sign user into the application with a JWT
      const token = signToken(user);

      // Return an `Auth` object that consists of the signed token and user's information
      return { token, username: user.username };
    },

    updateUser: async (parent, { userId, savedCharacter }) => {
      const user = await User.findOneAndUpdate(
        { _id: userId },
        { $push: { savedCharacter: Character.savedCharacter } }
      );
      return user;
    },
  },
};

module.exports = resolvers;
