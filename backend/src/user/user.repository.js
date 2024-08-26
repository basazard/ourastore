const prisma = require("../db");

const findUsers = async () => {
  const users = await prisma.user.findMany();

  return users;
};

module.exports = {
  findUsers,
};
