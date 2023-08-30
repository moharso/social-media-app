const express = require("express");
const { createUser, loginUser, getUser } = require("../controllers/userController");

const router = express.Router();

router.post('/signup', createUser)

router.post('/login', loginUser)

router.get("/get/:email", getUser)

module.exports = router;