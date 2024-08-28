const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

require("dotenv").config();

app.use(express.json());

const userController = require("./user/user.controller");
const categoryController = require("./category/category.controller")
const serviceController = require("./service/service.controller");

app.use("/users", userController);
app.use("/categories",categoryController);
app.use("/services",serviceController);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
