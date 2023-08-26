const express = require("express");
const accountController = require("./../controllers/accountController");

const router = express.Router();

router
  .route("/")
  .get(accountController.getAllAccounts)
  .post(accountController.createAccount);

router
  .route("/:id")
  .get(accountController.getAccount)
  // single because we want to update one single image, into single we pass the name of the field that's going to hold the image upload (in the form-front-end)
  .patch(accountController.updateAccount, accountController.uploadAccountPhoto)
  .delete(accountController.deleteAccount);

module.exports = router;
