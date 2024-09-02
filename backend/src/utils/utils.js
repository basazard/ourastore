const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const passwordHash = async (password) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(password,salt);
};

const verifyToken = (req,res,next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).send({
      message : "Token not provided"
    })
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.JWT_KEY, (err, user) => {
    if (err) {
      return res.status(403).send({
        message : err.message
      })
    }
    next();
  });
};

module.exports = {
  passwordHash,
  verifyToken
}