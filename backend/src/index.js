const express = require("express");
const postRouter = require("./routes/postRoutes");
const userRouter = require("./routes/userRoutes")
const app = express();
const cors = require("cors")

// middlewares
app.use(express.json());
app.use(cors())

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// routes
app.use("/api/v1/posts", postRouter);
app.use("/api", userRouter)

module.exports = app;
