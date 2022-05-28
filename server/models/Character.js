const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedCharacter` array in User.js
const characterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  codeLanguage: {
    type: String,
    required: true,
  },
  prompt: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  dialogue: {
    type: String,
  }
});

const Character = model('Character', characterSchema);

module.exports = Character;

