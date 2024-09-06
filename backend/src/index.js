const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

require("dotenv").config();

app.use(express.json());

const userController = require("./user/user.controller");
const authController = require("./auth/auth.controller");

app.use("/api/users", userController);
app.use("/api", authController);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
