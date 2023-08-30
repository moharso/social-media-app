const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    //required: [true, "Please tell us your name!"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    // validate: [validator.isEmail, "Please provide a valid email"],
  },
  photo: String,
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 5,
  },
  passwordConfirm: {
    type: String,
    //required: [true, "Please confirm your password"],
    // validate: {
    //   validator: function (el) {
    //     return el === this.password;
    //   },
    //   message: "Passwords are not the same!",
    // },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },

  // child referencing, each account should be mongoDB id (objectId)
  accounts: [{type: mongoose.Schema.ObjectId, ref: "Account"}],
});

const User = mongoose.model("users", userSchema);

module.exports = User;

