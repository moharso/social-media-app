const fs = require("fs");
const Account = require("../models/accountModel");
const multer = require("multer");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

const multerStorage = multer.diskStorage({
  destination: (req, file, callbackFunc) => {
    // the first argument is an error
    callbackFunc(null, `${__dirname}/../public/img/accounts`);
  },
  filename: (req, file, callbackfunc) => {
    // we will give files unique names:account-accountID-current time stamp.jpg

    // we will get png, jpeg or svg
    const extention = file.mimetype.split("/")[1];
    callbackfunc(null, `user-${Date.now()}.${extention}`);
  },
});

const multerFilter = (req, file, callbackFunc) => {
  // to check if file is an image

  if (file.mimetype.startsWith("image")) {
    callbackFunc(null, true);
  } else {
    callbackFunc("Not an image! Please upload only images.", false);
  }
};
const upload = multer({storage: multerStorage, fileFilter: multerFilter});

exports.uploadAccountPhoto = upload.single("photo");

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getAllAccounts = catchAsync(async (req, res, next) => {
  const accounts = await Account.find().populate({
    path: "postsPublished",
    select: "post",
  });

  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    results: accounts.length,
    data: {
      accounts,
    },
  });
});

exports.getAccount = catchAsync(async (req, res, next) => {
  if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    const account = await Account.findById(req.params.id);

    if (account === null) {
      return next(new AppError("No tour found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        account,
      },
    });
  }
});

exports.createAccount = catchAsync(async (req, res, next) => {
  const filteredBody = filterObj(req.body, "username", "platform", "mediaIcon");

  if (req.file) filteredBody.photo = req.file.filename;

  const newAccount = await Account.create(filteredBody);

  res.status(201).json({
    status: "success",
    data: {
      account: newAccount,
    },
  });
});

exports.updateAccount = catchAsync(async (req, res, next) => {
  const filteredBody = filterObj(req.body, "username", "platform", "mediaIcon");
  if (req.file) filteredBody.photo = req.file.filename;

  const account = await Account.findByIdAndUpdate(req.params.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  if (account === null) {
    return next(new AppError("No tour found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
  });
});

exports.deleteAccount = catchAsync(async (req, res, next) => {
  const account = await Account.findByIdAndDelete(req.params.id);

  if (account === null) {
    return next(new AppError("No tour found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
