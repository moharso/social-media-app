const mongoose = require("mongoose");
const opts = {runValidators: true, context: "query"};

const accountSchema = new mongoose.Schema(
  {
    platform: {
      type: String,
      unique: true,
      required: [true, "Platform must be stated"],
      enum: {
        values: ["facebook", "twitter", "linkedin", "pinterest", "instagram"],
        message:
          "Platform is either: facebook, twitter, linkedin, pinterest, instagram",
      },
    },
    username: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Username must be stated"],
      minlength: [1, "Username must have more or equal than 1 characters"],
    },
    photo: {type: String, default: "default.jpg"},
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

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
