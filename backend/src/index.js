const express = require("express");
const postRouter = require("./routes/postRoutes");

const accountRouter = require("./routes/accountRoutes");
const userRouter = require("./routes/userRoutes")
const cors = require("cors");
const app = express();
const AppError = require("./utils/appError");
// middlewares

app.use(express.json());
app.use(cors());
app.use("/static", express.static(`${__dirname}/public/img/accounts`));
app.use("/media", express.static(`${__dirname}/public/media`));
app.use("/post", express.static(`${__dirname}/public/img/posts`));


app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// routes
app.use("/api/v1/posts", postRouter);

app.use("/api/v1/accounts", accountRouter);
app.use("/api", userRouter)
// for all unhandles routes
app.all("*", (req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl}`));
});

// express identifieds this function as error handling function
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});


module.exports = app;
