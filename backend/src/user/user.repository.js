const prisma = require("../db");
const bcrypt = require("bcrypt");

const { hashPassword } = require("../helper/utils");

const getAllUsers = async () => {
  const users = await prisma.user.findMany();

  return users;
};

const getUserByUsername = async (username) => {
  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });

  return user;
};

const createUser = async (data) => {
  const user = await prisma.user.create({
    data: {
      username: data.username,
      password: await hashPassword(data.password),
      email: data.email,
      phone: data.phone,
    },
  });

  return user;
};

module.exports = {
  getAllUsers,
  getUserByUsername,
  createUser,
};
