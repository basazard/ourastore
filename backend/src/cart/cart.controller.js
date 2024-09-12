const express = require('express');
const prisma = require('../db');
const router = express.Router();
const { verifyToken } = require('../utils/utils');
const { nanoid } = require('nanoid');

router.post('', verifyToken, async(req,res) => {
  const { itemId, itemCount, gameId, server } = req.body;

  const cart = await prisma.cart.create({
    data : {
      id : nanoid(16),
      itemCount : itemCount,
      gameId : gameId,
      server : server,
      itemId : itemId
    }
  })
  const item = await prisma.item.findUnique({
    where : {
      id : itemId
    }
  })

  return res.status(200).send({
    status : "success",
    message : "Cart created",
    data : {
      id : cart.id,
      itemCount : cart.itemCount,
      gameId : cart.gameId,
      server : cart.server,
      item : item
    }
  })
});

module.exports = router;