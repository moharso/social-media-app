const express = require("express");
const { createUser, loginUser, getUser, deleteUser, updateUser } = require("../controllers/userController");

const router = express.Router();

router.post('/signup', createUser)

router.post('/login', loginUser)

router.get("/get/:email", getUser)

router.delete("/delete/:email", deleteUser)

router.put("/update/:email", updateUser)

module.exports = router;