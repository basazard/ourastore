const bcrypt = require('bcrypt');

const passwordHash = async (password) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(password,salt);
};

module.exports = {
  passwordHash
}