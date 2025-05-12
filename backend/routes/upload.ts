import express from "express";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3 } from "../aws/s3Client.js";

const router = express.Router();

router.get("/generate-presigned-url", async (req: any, res: any) => {
  const { filename, contentType } = req.query;

  if (!filename || !contentType) {
    return res.status(400).send("Missing filename or contentType");
  }

  const command = new PutObjectCommand({
    Bucket: process.env.S3_BUCKET!,
    Key: filename as string,
    ContentType: contentType as string,
  });

  const url = await getSignedUrl(s3, command, { expiresIn: 60 }); // expires in 60 seconds
  res.send({ url });
});

export default router;
