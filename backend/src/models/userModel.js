const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
  },
  photo: String,
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 5,
  },
  passwordConfirm: {
    type: String,
  },
  
  accounts: [{type: mongoose.Schema.ObjectId, ref: "Account"}],
});

const User = mongoose.model("users", userSchema);

module.exports = User;

