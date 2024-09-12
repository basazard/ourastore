const express = require('express');
const prisma = require('../db');
const router = express.Router();

router.get('/:serviceId', async(req,res) => {
  const servId = req.params.serviceId;
  const itemByService = await prisma.item.findMany({
    where : {
      serviceId : servId
    }
  })

  return res.status(200).send({
    status : "success",
    message : "Item retrieved",
    data : itemByService
  })
});

module.exports = router;