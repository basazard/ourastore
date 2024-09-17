const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");

require("dotenv").config();

app.use(express.json());
app.use(
  cors({
    origin: process.env.DEV_ORIGIN,
  })
);

const rootRouter = express.Router();

const userController = require("./user/user.controller");
const categoryController = require("./category/category.controller");
const serviceController = require("./service/service.controller");
const storageController = require("./storage/storage.controller");
const itemController = require("./item/item.controller");
const cartController = require("./cart/cart.controller");

rootRouter.use("/users", userController);
rootRouter.use("/categories", categoryController);
rootRouter.use("/services", serviceController);
rootRouter.use("/storage", storageController);
rootRouter.use("/item", itemController);
rootRouter.use("/cart", cartController);

app.use("/api", rootRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
