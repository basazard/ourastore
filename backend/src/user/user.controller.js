const express = require("express");
const prisma = require("../db");
require("dotenv").config();

const { listAllUsers, findUserByUsername, registerUser } = require("./user.service");
const { middleware } = require("../middleware");

const router = express.Router();

router.get("/", middleware, async (req, res) => {
  const users = await listAllUsers();

  res.status(200).send(users);
});

router.get("/:username", middleware, async (req, res) => {
  const username = req.params.username;
  const user = await findUserByUsername(username);

  if (!user) {
    return res.status(404).send("username is not found");
  }

  res.status(200).send(user);
});

router.post("/", async (req, res) => {
  const data = req.body;

  const user = await registerUser(data);

  res.status(201).send({
    data: user,
    message: "create user is success",
  });
});

router.patch("/:username", async (req, res) => {
  const username = req.params.username;
  const data = req.body;

  const user = await prisma.user.update({
    where: {
      username: username,
    },
    data: {
      username: data.username,
      password: data.password,
      email: data.email,
      phone: data.phone,
    },
  });

  res.status(201).send({
    data: user,
    message: "update data is success",
  });
});

module.exports = router;
