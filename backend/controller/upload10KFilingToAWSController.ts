import { Request, Response } from "express";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3 } from "../aws/s3Client.js";
import dotenv from 'dotenv'

dotenv.config()

export const upload10KFilingToAWSController = async (req: Request, res: Response) => {

  const filename = req.query.filename as string | undefined;
  const contentType = req.query.contentType as string | undefined;

  if (!filename || !contentType) {
    return res.status(400).send("Missing filename or contentType");
  }

  try{
    const key = `10kfilings/${Date.now()}-${filename}`;
  
    const command = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET!,
      Key: key,
      ContentType: contentType,
    });
  
    const url = await getSignedUrl(s3, command, { expiresIn: 60 }); // expires in 60 seconds
    return res.status(200).json({ url, key });

  } catch (err) {
    console.error(err)
    res.status(500).json({message: 'Failed to upload to S3'})
  }

}