const express = require("express");
const prisma = require("../db");
const router = express.Router();

router.get("/", async (req, res) => {
  const categories = await prisma.category.findMany();

  return res.status(200).send({
    status: "success",
    message: "Categories retrieved",
    data: categories,
  });
});

router.post("/", async (req, res) => {
  const { name } = req.body;

  try {
    const category = await prisma.category.create({
      data: {
        name: name,
      },
    });

    return res.status(201).send({
      status: "success",
      message: "Category created",
      data: category,
    });
  } catch (err) {
    if (err.code === "P2002") {
      return res.status(500).send({
        status: "failed",
        message: `A ${err.meta.modelName} with that ${err.meta.target[0]} already exist`,
      });
    }
    return res.status(500).send({
      status: "failed",
      message: err.message,
    });
  }
});

router.delete("/:name", async (req, res) => {
  const categoryName = req.params.name;
  try {
    const category = await prisma.category.delete({
      where: {
        name: categoryName,
      },
    });

    return res.status(200).send({
      status: "success",
      message: `Category ${category.name} deleted`,
      data: category,
    });
  } catch (err) {
    if (err.code === "P2025") {
      return res.status(500).send({
        status: "failed",
        message: err.meta.cause,
      });
    }
    return res.status(500).send({
      status: "failed",
      message: err.message,
    });
  }
});

router.put("/:name", async (req, res) => {
  const categoryName = req.params.name;
  const { newName } = req.body;
  try {
    const category = await prisma.category.update({
      where: {
        name: categoryName,
      },
      data: {
        name: newName,
      },
    });

    return res.status(200).send({
      status: "success",
      message: "Category updated",
    });
  } catch (err) {
    return res.status(500).send({
      status: "failed",
      message: err.message,
    });
  }
});
module.exports = router;
