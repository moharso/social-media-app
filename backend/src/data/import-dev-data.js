const dotenv = require("dotenv");
const mongoose = require("mongoose");
const fs = require("fs");
const Post = require("../models/accountModel");
// dotenv.config({path: "./config.env"});

dotenv.config({path: `${__dirname}/../config.env`});

const DB = process.env.DATABASE;

mongoose.connect(DB, {useUnifiedTopology: true}).then((conn) => {
  console.log("DB connection successful");
});

// READ JSON FILE
const posts = JSON.parse(fs.readFileSync(`${__dirname}/posts.json`, "utf-8"));

// IMPORT DATA INTO db
const importData = async () => {
  try {
    await Post.create(posts);
    console.log("Data has been added");
  } catch (err) {
    console.log(err);
  }
};

// DELETE ALL DATA FROM COLLECTION
const deleteData = async () => {
  try {
    await Post.deleteMany();
    console.log("Data has been deleted");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// to add data to our database
if (process.argv[2] === "--import") {
  importData();
  process.exit();
  // to delete data from our database:
} else if (rocess.argv[2] === "--delete") {
  deleteData();
}

console.log(process.argv);
// we get this array from the above console.log [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\DELL\\Desktop\\javascript-bootcamp\\social-media-app\\backend\\src\\data\\import-dev-data.js'
// ]
