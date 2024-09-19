const express = require("express");
const prisma = require("../db");
const { passwordHash } = require("../utils/utils");
const { getAllUsers, getUserByUsername } = require("./user.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();
require("dotenv").config();

router.get("/", async (req, res) => {
  const users = await getAllUsers();

  return res.status(200).send({
    status: "success",
    message: "Users retrieved",
    data: users,
  });
});

router.get("/:username", async (req, res) => {
  const username = req.params.username;
  const user = await getUserByUsername(username);

  return res.status(200).send({
    status: "success",
    message: "Username retrieved",
    data: user,
  });
});

router.post("/register", async (req, res) => {
  const { fullname, username, password, email, phone } = req.body;
  const hashPassword = await passwordHash(password);

  try {
    const user = await prisma.user.create({
      data: {
        fullname: fullname,
        username: username,
        password: hashPassword,
        email: email,
        phone: phone,
      },
    });

    return res.status(201).send({
      status: "success",
      message: "User Created Successfully",
      data: {
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    if (err.code === "P2002") {
      return res.status(500).send({
        status: "failed",
        message: `A ${err.meta.modelName} with that ${err.meta.target[0]} already exist`,
      });
    }
    return res.status(500).send({
      status: "failed",
      message: err.message,
    });
  }
});

router.patch("/:username", async (req, res) => {
  const username = req.params.username;
  const { newUsername, newPassword, newEmail, newPhone } = req.body;

  const hashPassword = await passwordHash(newPassword);

  const user = await prisma.user.update({
    where: {
      username: username,
    },
    data: {
      username: newUsername,
      password: hashPassword,
      email: newEmail,
      phone: newPhone,
    },
  });

  return res.status(200).send({
    status: "success",
    message: "User updated",
    data: {
      username: user.username,
      email: user.email,
    },
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await getUserByUsername(username);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const token = jwt.sign(
          {
            username: user.username,
            email: user.email,
          },
          process.env.JWT_KEY,
          {
            expiresIn: "1m",
          }
        );
        return res.status(200).send({
          status: "success",
          message: "Login Successfull",
          access_token: token,
        });
      }
      return res.status(401).send({
        status: "failed",
        message: "Invalid Credential",
      });
    }
    return res.status(401).send({
      status: "failed",
      message: "Invalid Credential",
    });
  } catch (err) {
    return res.status(500).send({
      status: "failed",
      message: err.message,
    });
  }
});

module.exports = router;
