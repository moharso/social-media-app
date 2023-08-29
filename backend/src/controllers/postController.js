const fs = require("fs");
const Post = require("../models/postModel");
const Account = require("../models/accountModel");
const multer = require("multer");

const multerStorage = multer.diskStorage({
  destination: (req, file, callbackFunc) => {
    callbackFunc(null, `${__dirname}/../public/img/posts`);
  },
  filename: (req, file, callbackfunc) => {
    const extention = file.mimetype.split("/")[1];
    callbackfunc(null, `post-${Date.now()}.${extention}`);
  },
});

const multerFilter = (req, file, callbackFunc) => {
  if (file.mimetype.startsWith("image")) {
    callbackFunc(null, true);
  } else {
    callbackFunc("Not an image! Please upload only images.", false);
  }
};
const upload = multer({storage: multerStorage, fileFilter: multerFilter});

exports.uploadPostPhoto = upload.single("image");

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    // SEND RESPONSE
    res.status(200).json({
      status: "success",
      requestedAt: req.requestTime,
      results: posts.length,
      data: {
        posts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: {...err, errmsg: err.errmsg},
    });
  }
};

exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: {...err, errmsg: err.errmsg},
    });
  }
};

// user for post request
exports.createPost = async (req, res) => {
  try {
    const filteredBody = filterObj(
      req.body,
      "post",
      "startDate",
      "endDat",
      "account"
    );

    if (req.file) filteredBody.image = req.file.filename;

    console.log(req.body);
    // console.log(req.body);

    // const filteredBody = filterObj(
    //   req.body,
    //   "post",
    //   "startDate",
    //   "endDate",
    //   "username",
    //   "platform",
    //   "account",
    //   "user"
    // );

    // if (req.file) filteredBody.image = req.file.filename;
    const newPost = await Post.create(filteredBody);
    console.log(newPost);
    // await newPost.save();
    // console.log(newPost);
    // const account = await Account.findById({_id: newPost.account});
    // account.publishedPosts.push(book);
    // await account.save();

    res.status(201).json({
      status: "success",
      data: {
        post: newPost,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const filteredBody = filterObj(
      req.body,
      "post",
      "startDate",
      "endDate",
      "account"
    );

    if (req.file) filteredBody.image = req.file.filename;

    const post = await Post.findByIdAndUpdate(req.params.id, filteredBody, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: {...err, errmsg: err.errmsg},
    });
  }
};
exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: {...err, errmsg: err.errmsg},
    });
  }
};
