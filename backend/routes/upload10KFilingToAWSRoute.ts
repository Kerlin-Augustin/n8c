import express, { RequestHandler } from "express";
import { upload10KFilingToAWSController } from "../controller/upload10KFilingToAWSController.js";

const router = express.Router();

router.get("/generate-presigned-url", upload10KFilingToAWSController as RequestHandler)

export default router;
