const dotenv = require("dotenv");
const mongoose = require("mongoose");
const fs = require("fs");
const Post = require("../models/accountModel");

dotenv.config({path: `${__dirname}/../config.env`});

const DB = process.env.DATABASE;

mongoose.connect(DB, {useUnifiedTopology: true}).then((conn) => {
  console.log("DB connection successful");
});

const posts = JSON.parse(fs.readFileSync(`${__dirname}/posts.json`, "utf-8"));

const importData = async () => {
  try {
    await Post.create(posts);
    console.log("Data has been added");
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await Post.deleteMany();
    console.log("Data has been deleted");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "--import") {
  importData();
  process.exit();
} else if (rocess.argv[2] === "--delete") {
  deleteData();
}

console.log(process.argv);
