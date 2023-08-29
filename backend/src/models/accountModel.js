const mongoose = require("mongoose");
const opts = {runValidators: true, context: "query"};
const {Schema} = require("mongoose");

const accountSchema = new Schema(
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
  },
  {toJSON: {virtuals: true}, toObject: {virtuals: true}}
);

accountSchema.virtual("mediaIcon").get(function () {
  return `${this.platform}.svg`;
});

//  type: Schema.Types.ObjectId,
//   ref: "Account",
//   required: [true, "Post must belong to the account"],

accountSchema.virtual("postsPublished", {
  ref: "Post",
  localField: "username",
  foreignField: "account",
});

// accountSchema.set("toObject", {virtuals: true});
// accountSchema.set("toJSON", {virtuals: true});

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
