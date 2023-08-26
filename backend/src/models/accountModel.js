const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Username must be stated"],
      minlength: [1, "Username must have more or equal than 1 characters"],
    },
    platform: {
      type: String,
      required: [true, "Platform must be stated"],
      enum: {
        values: ["facebook", "twitter", "linkedin", "pinterest", "instagram"],
        message:
          "Platform is either: facebook, twitter, linkedin, pinterest, instagram",
      },
    },
    clientIcon: {type: String, default: "default.jpg"},
    // mediaIcon: {
    //   type: String,
    //   required: [true, "An account must have a media icon"],
    // },
  },
  {toJSON: {virtuals: true}, toObject: {virtuals: true}}
);

accountSchema.virtual("mediaIcon").get(function () {
  return `${this.platform}.svg`;
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

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
