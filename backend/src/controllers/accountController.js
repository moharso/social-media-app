const fs = require("fs");
const Account = require("../models/accountModel");
const multer = require("multer");
const {error} = require("console");

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

exports.getAllAccounts = async (req, res) => {
  try {
    // EXECUTE QUERY
    // below are folter, sort functionalities
    // const features = new APIFeatures(Tour.find(), req.query)
    //   .filter()
    //   .sort()
    //   .limitFields()
    //   .paginate();
    // const tours = await features.query;

    const accounts = await Account.find();

    // SEND RESPONSE
    res.status(200).json({
      status: "success",
      requestedAt: req.requestTime,
      results: accounts.length,
      data: {
        accounts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: {...err, errmsg: err.errmsg},
    });
  }
};

exports.getAccount = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        account,
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
exports.createAccount = async (req, res) => {
  const filteredBody = filterObj(req.body, "username", "platform", "mediaIcon");
  if (req.file) filteredBody.photo = req.file.filename;

  try {
    const newAccount = await Account.create(filteredBody);

    res.status(201).json({
      status: "success",
      data: {
        account: newAccount,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent",
    });
  }
};

exports.updateAccount = async (req, res) => {
  try {
    const account = await Account.findByIdAndUpdate(req.params.id, req.body, {
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
exports.deleteAccount = async (req, res) => {
  try {
    await Account.findByIdAndDelete(req.params.id);
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
