const express = require("express");
const accountController = require("./../controllers/accountController");
const cors = require("cors");
const router = express.Router();

router
  .route("/")
  .get(accountController.getAllAccounts)
  .post(accountController.uploadAccountPhoto, accountController.createAccount);

router
  .route("/:id")
  .get(accountController.getAccount)
  .patch(accountController.uploadAccountPhoto, accountController.updateAccount)
  .delete(accountController.deleteAccount);

module.exports = router;
