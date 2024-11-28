const User = require("../Models/AuthModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const SignupController = async (req, res) => {
  try {
    const { name, email, password, isAdmin } = req.body;
    const existedUser = await User.findOne({ email: email });

    if (existedUser) {
      return res.status(401).json({ message: "User is existed", success: false });
    }

    const hashPass = await bcrypt.hash(password, 10);
    const CreateUser = await User.create({ name, email, password:hashPass, isAdmin });

    res.status(201).json({ message: "user is created", success: true });
  } catch (error) {
    res.status(501).json({ message: "internal server error", success: false });
    console.log(error);
  }
};

const LoginController = async (req, res) => {
 try {
    const { email, password } = req.body;
    const existedUser = await User.findOne({ email: email });
    const ComparePass = await bcrypt.compare(password, existedUser.password);
  
    if (!existedUser) {
      return res.status(401).json({ message: "user is not existed", success: false });
    }
  
    if (!ComparePass) {
      return res
        .status(402)
        .json({ message: "email or password are wrong", success: false });
    }
  
    const Token = jwt.sign(
      {
        data: {
          id: existedUser._id,
          name: existedUser.name,
        },
      },
      process.env.SECERETKEY,
      { expiresIn: "24h" }
    );
  
    res
      .status(201)
      .json({
        message: "login successfull",
        name: existedUser.name,
        email: existedUser.email,
        Token,
      });
 } catch (error) {
    res.status(501).json({ message: "internal server error", success: false });
    console.log(error);
 }
};

module.exports = { SignupController, LoginController };
