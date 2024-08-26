const express = require("express");
const prisma = require("../db");

const { getAllUsers, getUserByUsername } = require("./user.service");

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await getAllUsers();

  res.status(200).send(users);
});

router.get("/:username", async (req, res) => {
  const username = req.params.username;
  const user = await getUserByUsername(username);

  res.status(200).send(user);
});

router.post("/", async (req, res) => {
  const data = req.body;

  const user = await prisma.user.create({
    data: {
      username: data.username,
      password: data.password,
      email: data.email,
      phone: data.phone,
    },
  });

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
