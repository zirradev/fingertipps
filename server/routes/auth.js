import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../model/User.js";

const router = express.Router();

router.post("/signin", async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(res.status(404, "Invalid email or password!"));

    const token = jwt.sign({ user }, process.env.SECRETKEY || "secretkey");
    const { password, isAdmin, staff, superAdmin, ...otherdetails } = user._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ ...otherdetails });
  } else {
    res.status(404).json("Invalid email or password");
  }
});

router.post("/signup", async (req, res) => {
  const { name, email, phone, password } = req.body;
  const emailExists = await User.findOne({ email });
  if (emailExists) {
    return res.status(400).json("This email has already been registered");
  }
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  const user = await User.create({
    name,
    email,
    phone,
    password: hash,
  });
  if (user) {
    res.status(201).json(user);
  } else {
    res
      .status(400)
      .json("Unable to create account at the moment please try again later");
  }
});
router.post("/logout", () => {});

export default router;
