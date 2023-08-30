const mongoose = require("mongoose");
// dotenv.config({path: "./config.env"});
const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/.env` });
// const mongoose = require("mongoose");
const app = require("./index");

const DB = process.env.MONGODB_URL
//process.env.MONGODB_URL

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("DB connection successful");
}).catch((error) => {
    console.log(error)
});

const port = 4001;

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});