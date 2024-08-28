const express = require('express');
const prisma = require('../db');
const router = express.Router();

router.get('', async (req, res) => {
  const categories = await prisma.category.findMany();

  return res.status(200).send({
    status : "success",
    message : "Categories retrieved",
    data : categories
  })
})

module.exports = router;