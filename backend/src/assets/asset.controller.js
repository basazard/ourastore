const express = require("express");
const prisma = require("../db");
const router = express.Router();
const multer = require("multer");
const {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const crypto = require("crypto");

require("dotenv").config();

const bucketName = process.env.BUCKET_NAME;
const bucketRegion = process.env.BUCKET_REGION;
const accessId = process.env.ACCESS_ID;
const accessKey = process.env.ACCESS_KEY;

const s3 = new S3Client({
  credentials: {
    accessKeyId: accessId,
    secretAccessKey: accessKey,
  },
  region: bucketRegion,
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const randomNameImage = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

const uploadS3Object = (fileName, fileBuffer, fileType) => {
  const params = {
    Bucket: bucketName,
    Key: fileName,
    Body: fileBuffer,
    ContentType: fileType,
  };
  const command = new PutObjectCommand(params);
  return s3.send(command);
};

const deleteS3Object = (fileName) => {
  const params = {
    Bucket: bucketName,
    Key: fileName,
  };
  const command = new DeleteObjectCommand(params);
  return s3.send(command);
};

const getObjectSignedUrl = async (fileName) => {
  const params = {
    Bucket: bucketName,
    Key: fileName,
  };
  const command = new GetObjectCommand(params);
  const url = await getSignedUrl(s3, command, { expiresIn: 3600 });

  return url;
};

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
    const newAssetWithSignedUrl = await Promise.all(
      assets.map(async (asset) => ({
        ...asset,
        imageUrl: await getObjectSignedUrl(asset.assetCodedName),
      }))
    );
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
