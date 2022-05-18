import express from "express";

import User from "../model/User.js";

const router = express.Router();

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(401).json("Invalid email or password");
  }
});

router.post("/signup", async (req, res) => {
  const { name, email, phone, password } = req.body;
  const emailExists = await User.findOne({ email });
  if (emailExists) {
    return res.status(400).json("This email has already been registered");
  }
  const user = await User.create({
    name,
    email,
    phone,
    password,
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
