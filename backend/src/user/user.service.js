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
  
  return user;
};

module.exports = {
  getAllUsers,
  getUserByUsername,
};
