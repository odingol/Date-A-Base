const { AuthenticationError } = require("apollo-server-express");
const { User, Character } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async () => {
      return await User.find();
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
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },

    updateUser: async (parent, { userId, savedCharacter }) => {
      const user = await User.findOneAndUpdate(
        { _id: userId },
        { $push: { savedCharacter: savedCharacter } }
      );
      return user;
    },
    
  },
};

module.exports = resolvers;
