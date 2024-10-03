const express = require("express");
const prisma = require("../db");
const router = express.Router();
const {
  randomNameImage,
  upload,
  uploadS3Object,
  deleteS3Object,
  getObjectSignedUrl,
  cloudFrontOrigin,
} = require("../utils/s3Config");

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const asset = await prisma.assets.findUnique({
      where: {
        id: id,
      },
    });
    await deleteS3Object(asset.assetCodedName);

    await prisma.assets.delete({
      where: {
        id: asset.id,
      },
    });

    return res.status(200).send({
      status: "success",
      message: `Asset ${asset.assetName} deleted`,
    });
  } catch (err) {
    return res.status(500).send({
      status: "failed",
      message: err,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const assets = await prisma.assets.findMany({
      orderBy: {
        assetName: "asc",
      },
    });

    // Using AWS S3 signed URL
    // const newAssetWithSignedUrl = await Promise.all(
    //   assets.map(async (asset) => ({
    //     ...asset,
    //     imageUrl: await getObjectSignedUrl(asset.assetCodedName),
    //   }))
    // );

    const newAssetWithSignedUrl = assets.map((asset) => ({
      ...asset,
      imageUrl: cloudFrontOrigin + "/" + asset.assetCodedName,
    }));

    return res.status(200).send({
      status: "success",
      message: "Assets retrived",
      data: newAssetWithSignedUrl,
    });
  } catch (err) {
    return res.status(500).send({
      status: "failed",
      message: err.message,
    });
  }
});

router.post("/", upload.single("image"), async (req, res) => {
  const { assetName } = req.body;
  const file = req.file;
  const imageName = randomNameImage();
  try {
    if (file.size > 300000) {
      throw Error("Image size can't be bigger than 300 KB");
    }
    await uploadS3Object(imageName, file.buffer, file.mimetype);
    const assets = await prisma.assets.create({
      data: {
        assetName: assetName, // image name for showing in front end
        assetCodedName: imageName, // coded name for get signed url s3
      },
    });
    return res.status(201).send({
      status: "success",
      message: "Asset created",
      data: assets,
    });
  } catch (err) {
    if (err.code === "P2002") {
      await deleteS3Object(imageName);
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

module.exports = router;
