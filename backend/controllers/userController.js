import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";

const signup = async (req, res) => {
  const salt = 10;

  const { username, password } = req.body;

  let existingUser = await userModel.findOne({ username });

  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User already exists. Login instead!" });
  }

  const hashedPass = bcrypt.hashSync(password, salt);

  const User = new userModel({
    username,
    password: hashedPass,
  });

  try {
    await User.save();
    console.log(`User saved: ${User}`);
  } catch (error) {
    console.error(`Error creating user: ${error.message}`);
  }

  return res.status(200).json({ message: "user created successfully" });
};

const login = async (req, res) => {
  const { username, password } = req.body;

  let existingUser = await userModel.findOne({ username });

  if (!existingUser) {
    return res.status(400).json({ message: "Invalid crededtials" });
  }

  const checkedPass = bcrypt.compareSync(password, existingUser.password);

  if (!checkedPass) {
    return res.status(400).json({ message: "Incorrect password" });
  }

  const token = jwt.sign({ id: existingUser._id }, process.env.SECRET_KEY);

  return res
    .status(200)
    .json({ message: "Logged In successfully", token, id: existingUser._id });
};

export { signup, login };
