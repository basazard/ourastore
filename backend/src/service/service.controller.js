const express = require('express');
const prisma = require('../db');
const router = express.Router();
const { verifyToken } = require('../utils/utils');

router.get('', async (req, res) => {
  const services = await prisma.service.findMany();

  return res.status(200).send({
    status : "success",
    message : "Services retrieved",
    data : services
  })
})

router.get('/:categoryId', async (req, res) => {
  const catgId = req.params.categoryId;
  const servicesByCategory = await prisma.service.findMany({
    where : { categoryId : catgId }
  })

  return res.status(200).send({
    status : "success",
    message : "Services retrieved",
    data : servicesByCategory
  })
})


module.exports = router;