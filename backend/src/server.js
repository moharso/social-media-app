const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config({path: `${__dirname}/.env`});

const app = require("./index");

const DB = process.env.MONGODB_URL;

mongoose.connect(DB, {useUnifiedTopology: true})
  .then((conn) => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

const port = 4001;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
