import express from "express";

import User from "../model/User.js";

const router = express.Router();

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  res.status(200).json(user);
});
router.post("/signup", () => {});
router.post("/logout", () => {});

export default router;
