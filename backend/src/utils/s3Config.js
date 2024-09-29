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

module.exports = {
  randomNameImage,
  upload,
  uploadS3Object,
  deleteS3Object,
  getObjectSignedUrl,
};
