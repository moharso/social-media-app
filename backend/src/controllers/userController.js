const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.loginUser = async (req, res) => {
    try {
        const userExists = await User.findOne({ email: req.body.email })

        if(!userExists) {
            return res.status(404).send("Email or Password is wrong!")
        }

        const isUserPasswordCorrect = await bcrypt.compareSync(req.body.password.toString(), userExists.password)

        if (!isUserPasswordCorrect) {
            return res.status(404).send("Email or Password is wrong!!")
        }

        const token = jwt.sign({id: userExists._id}, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        console.log("Logged in!")
        res.cookie("session_token", token, {
            httpOnly: true,
        }).status(200).send(`Hello, ${userExists.email}!`)
    } catch (error) {
        console.log(error);
      res.status(400).send(error);
    }
  }

exports.createUser = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);
        const hashedPasswordConfirm = bcrypt.hashSync(req.body.passwordConfirm.toString(), salt);

      const user = new User({
        ...req.body,
        password: hashedPassword,
        passwordConfirm: hashedPasswordConfirm,
      });
  
      await user.save();

      const {password, passwordConfirm, ...remainingUserData} = user._doc;
  
      res.status(201).json(remainingUserData);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  };

  exports.getUser = async (req, res) => {
    try {
      const user = await User.findOne(
        { email: req.params.email }
      );
  
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  };
  