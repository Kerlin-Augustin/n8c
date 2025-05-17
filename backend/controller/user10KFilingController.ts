import { Request, Response } from "express";
import { User10KFiling } from "../database/models/User10KFiling.model.js";

export const user10KFilingController = async (req: Request, res: Response) => {
  const { filename, filetype, filesize, s3Key, s3Url, userId } = req.body;

  const placeholderId = '000000000000000000000000'

  try{
    const metadata = new User10KFiling({
      filename,
      filetype,
      filesize,
      s3Key,
      s3Url,
      uploadedBy: userId || placeholderId,
    });

    await metadata.save()
    return res.status(201).json({ message: 'Metadata saved', file: metadata })

  } catch (err) {
    console.error("Error saving metadata:", err);
    res.status(500).json({error: 'Failed to save metadata'})
  }
}