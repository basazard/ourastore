const bcrypt = require("bcrypt")

async function hashPassword(password) {
  try {
    return await bcrypt.hash(password, 10);
  } catch (error) {
    throw new Error("Error hashing password: " + error.message);
  }
}

module.exports = {
  hashPassword,
};
