const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

require("dotenv").config();

app.use(express.json());

const userController = require("./user/user.controller");
const categoryController = require("./category/category.controller");
const serviceController = require("./service/service.controller");
const storageController = require("./storage/storage.controller");
const itemController = require("./item/item.controller");
const cartController = require("./cart/cart.controller");

app.use("/users", userController);
app.use("/categories",categoryController);
app.use("/services",serviceController);
app.use("/storage", storageController);
app.use("/item",itemController);
app.use("/cart",cartController);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
