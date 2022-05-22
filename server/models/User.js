const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// import schema from Character.js
const characterSchema = require("./Character");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    // add foreign key for gender
    // set savedCharacter to be an array of data that adheres to the CharacterSchema
    savedCharacter: [characterSchema],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `characterCount` with the number of saved books we have
userSchema.virtual("characterCount").get(function () {
  return this.savedCharacter.length;
});

const User = model("User", userSchema);

module.exports = User;
