const express = require("express");
const prisma = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const { findUserByUsername, registerUser } = require("../user/user.service");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const body = req.body;

    const user = await registerUser(body);

    res.status(200).send({
      data: user,
      message: "user is success to registered",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await findUserByUsername(username);

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const payload = {
      id: user.id,
      username: user.username,
    };

    const secret = process.env.JWT_SECRET;

    if (!secret) {
      return res.status(500).json({ message: "Missing JWT secret" });
    }

    const expiresIn = 60 * 60;
    const token = jwt.sign(payload, secret, { expiresIn });

    return res.json({
      success: true,
      message: "Login successfull",
      data: {
        token,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
