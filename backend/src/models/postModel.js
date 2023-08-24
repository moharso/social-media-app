const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  post: {
    type: String,
    trim: true,
  },
  startDate: {
    type: Date,
    default: Date.now(),
    required: [true, "A post must have a date"],
  },
  endDate: {type: Date},
  label: {
    type: String,
  },
  image: {type: String},
  images: [String],
});

//  {
//     start: moment("2023-08-08T10:00:00").toDate(),
//     end: moment("2023-08-08T11:00:00").toDate(),
//     post: "Ar is relaxing for your body... ",
//     data: {
//       profile: ["facebook", "linkedin"],
//       image: Art,
//       icon: [Facebook, Linkedin],
//     },
//   },

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
