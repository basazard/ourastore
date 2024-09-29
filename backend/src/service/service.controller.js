const express = require("express");
const prisma = require("../db");
const router = express.Router();
const { verifyToken } = require("../utils/utils");
const { getObjectSignedUrl } = require("../utils/s3Config");

router.get("/", async (req, res) => {
  const services = await prisma.service.findMany({
    include: {
      category: true,
    },
  });

  return res.status(200).send({
    status: "success",
    message: "Services retrieved",
    data: services,
  });
});

router.get("/:categoryId", async (req, res) => {
  const catgId = req.params.categoryId;
  const servicesByCategory = await prisma.service.findMany({
    where: { categoryId: catgId },
  });

  const serviceWithImageUrl = await Promise.all(
    servicesByCategory.map(async (service) => ({
      ...service,
      imageUrl: await getObjectSignedUrl(service.imageName),
    }))
  );

  return res.status(200).send({
    status: "success",
    message: "Services retrieved",
    data: serviceWithImageUrl,
  });
});

router.post("/", async (req, res) => {
  const { serviceName, serviceOwner, catgId, imageName } = req.body;
  try {
    const service = await prisma.service.create({
      data: {
        name: serviceName,
        owner: serviceOwner,
        categoryId: catgId,
        imageName: imageName,
      },
    });

    return res.status(201).send({
      status: "success",
      message: "Service created",
      data: service,
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
  const serviceName = req.params.name;
  try {
    const service = await prisma.service.delete({
      where: {
        name: serviceName,
      },
    });

    return res.status(200).send({
      status: "success",
      message: `Service ${service.name} deleted`,
    });
  } catch (err) {
    return res.status(500).send({
      status: "failed",
      message: err.message,
    });
  }
});

router.put("/:name", async (req, res) => {
  const serviceName = req.params.name;
  const { newServiceName, newServiceOwner, newCatgId } = req.body;
  try {
    const service = await prisma.service.update({
      where: {
        name: serviceName,
      },
      data: {
        name: newServiceName,
        owner: newServiceOwner,
        categoryId: newCatgId,
      },
    });
    return res.status(200).send({
      status: "success",
      message: `Service ${service.name} updated`,
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

router.get("/service/:id", async (req, res) => {
  const serviceId = req.params.id;
  try {
    const service = await prisma.service.findUnique({
      where: {
        id: serviceId,
      },
    });
    if (!service) {
      throw new Error("Service with that name not available");
    }
    service.imageUrl = await getObjectSignedUrl(service.imageName);
    return res.status(200).send({
      status: "success",
      message: "service retrieved hbhb",
      data: service,
    });
  } catch (err) {
    return res.status(500).send({
      status: "failed",
      message: err.message,
    });
  }
});

module.exports = router;
