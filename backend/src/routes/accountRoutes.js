const express = require("express");
const accountController = require("./../controllers/accountController");
const cors = require("cors");
const router = express.Router();

router
  .route("/")
  .get(accountController.getAllAccounts)
  // single because we want to update one single image, into single we pass the name of the field that's going to hold the image upload (in the form-front-end)
  .post(accountController.uploadAccountPhoto, accountController.createAccount);

router
  .route("/:id")
  .get(accountController.getAccount)
  .patch(accountController.uploadAccountPhoto, accountController.updateAccount)
  .delete(accountController.deleteAccount);

module.exports = router;
