const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  post: {
    type: String,
    trim: true,
    // required: [true, "A post must have a post text"],
    maxlength: [150, "A post must have less or equal then 150 characters"],
  },
  startDate: {
    type: Date,
    default: Date.now(),
    required: [true, "A post must have a date"],
  },
  endDate: {type: Date},
  images: [String],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
