const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please tell us your name!"],
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      unique: true,
      lowercase: true,
      // validate: [validator.isEmail, "Please provide a valid email"],
    },
    // photo: String,
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: 8,
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, "Please confirm your password"],
      // validate: {
      //   validator: function (el) {
      //     return el === this.password;
      //   },
      //   message: "Passwords are not the same!",
      // },
    },
    // passwordChangedAt: Date,
    // passwordResetToken: String,
    // passwordResetExpires: Date,
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
    // networks: [
    //   {
    //     platform: {
    //       type: String,
    //       required: [true, "Platform must be stated"],
    //       enum: {
    //         values: [
    //           "facebook",
    //           "twitter",
    //           "linkedin",
    //           "pinterest",
    //           "instagram",
    //         ],
    //         message:
    //           "Platform is either: facebook, twitter, linkedin, pinterest, instagram",
    //       },
    //     },
    //     username: {
    //       type: String,
    //       trim: true,
    //       required: [true, "Username must be stated"],
    //       minlength: [1, "Username must have more or equal than 1 characters"],
    //     },
    //     photo: {type: String, default: "default.jpg"},
    //   },
    // ],
    // child referencing, each account should be mongoDB id (objectId)
    // accounts: [
    //   {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "Account",
    //     maxItems: [5, "User can have up to 5 accounts"],
    //   },
    // ],
  }
  // {toJSON: {virtuals: true}, toObject: {virtuals: true}}
);

// userSchema.virtual("postsPublished", {
//   ref: "Post",
//   localField: "_id",
//   foreignField: "user",
// });

// userSchema.set("toObject", {virtuals: true});
// userSchema.set("toJSON", {virtuals: true});

const User = mongoose.model("User", userSchema);

module.exports = User;
