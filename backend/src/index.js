const express = require("express");
const postRouter = require("./routes/postRoutes");
const app = express();

// middlewares
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// routes
app.use("/api/v1/posts", postRouter);

module.exports = app;
