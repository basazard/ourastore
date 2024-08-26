const prisma = require("../db");

const { findUsers } = require("./user.repository");

const getAllUsers = async () => {
  const users = await findUsers();

  return users;
};

const getUserByUsername = async (username) => {
  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });

  if (!user) {
    return res.status(404).send("username is not found");
  }

  return user;
};

module.exports = {
  getAllUsers,
  getUserByUsername,
};
