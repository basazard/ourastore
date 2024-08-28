const express = require('express');
const prisma = require('../db');
const router = express.Router();

router.get('/:serviceId', async (req, res) => {
  const servId = req.params.serviceId;

  const storage = await prisma.storage.findUnique({
    where : {
      serviceId : servId
    }
  })

  return res.status(200).send({
    status : "success",
    message : "storage retrieved",
    data : storage
  })
});


module.exports = router;