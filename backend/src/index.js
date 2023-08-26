const express = require("express");
const postRouter = require("./routes/postRoutes");
const accountRouter = require("./routes/accountRoutes");
const cors = require("cors");
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// routes
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/accounts", accountRouter);

module.exports = app;
