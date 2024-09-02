const express = require("express");
const prisma = require("../db");
const { passwordHash } = require('../utils/utils');
const { getAllUsers, getUserByUsername } = require("./user.service");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const router = express.Router();
require("dotenv").config();

router.get("/", async (req, res) => {
  const users = await getAllUsers();

  return res.status(200).send({
    status : "success",
    message : "Users retrieved",
    data : users
  });
});

router.get("/:username", async (req, res) => {
  const username = req.params.username;
  const user = await getUserByUsername(username);
  
  return res.status(200).send({
    status : "success",
    message : "Username retrieved",
    data : user
  });
});

router.post("/register", async (req, res) => {
  const { username, password, email, phone } = req.body;
  const hashPassword = await passwordHash(password);

  const user = await prisma.user.create({
    data: {
      username: username,
      password: hashPassword,
      email: email,
      phone: phone,
    },
  });

  return res.status(201).send({
    status : "success",
    message: "User created successfully",
    data: {
      username : user.username,
      email : user.email
    }
  });
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
    status : "success",
    message : "User updated",
    data : {
      username : user.username,
      email : user.email
    }
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await getUserByUsername(username);
  const token = jwt.sign({ 
    username : user.username, 
    email : user.email 
  }, process.env.JWT_KEY, {
    expiresIn : "5m"
  });

  if (user) {
    const isMatch = await bcrypt.compare(password,user.password);
    if (isMatch){
      return res.status(200).send({
        status : "success",
        message : "login success",
        access_token : token
      })
    }
    return res.status(401).send({
      status : "failed",
      message : "invalid password"
    })
  }
  return res.status(401).send({
    status : "failed",
    message : "invalid username"
  })
});


module.exports = router;
