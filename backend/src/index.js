const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

require("dotenv").config();

app.use(express.json());

const userController = require("./user/user.controller");

app.use("/users", userController);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
