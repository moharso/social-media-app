const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const postSchema = new Schema({
  post: {
    type: String,
    trim: true,
    // required: [true, "A post must have a post text"],
    maxlength: [150, "A post must have less or equal then 150 characters"],
  },
  startDate: {
    type: Date,
    default: Date.now(),
    // required: [true, "A post must have a date"],
  },
  endDate: {type: Date},
  image: {type: String, default: "default.jpg"},

  account: {
    type: Schema.Types.ObjectId,
    ref: "Account",
    required: [true, "Post must belong to the account"],
  },

  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  //   required: [true, "Post must belong to the user"],
  // },
});

postSchema.pre(/^find/, function (next) {
  this.populate({
    path: "account",
    select: "platform account",
  });
  // .lean();

  next();
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
