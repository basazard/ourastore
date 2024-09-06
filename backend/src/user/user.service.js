const prisma = require("../db");

const { getAllUsers, getUserByUsername, createUser } = require("./user.repository");

const listAllUsers = async () => {
  const users = await getAllUsers();

  return users;
};

const findUserByUsername = async (username) => {
  const user = await getUserByUsername(username);

  return user;
};

const registerUser = async (data) => {
  const isUser = await findUser(data.username);

  if (isUser) {
    throw new Error("username already registered");
  }

  const user = await createUser(data);

  return user;
};

module.exports = {
  listAllUsers,
  findUserByUsername,
  registerUser,
};
