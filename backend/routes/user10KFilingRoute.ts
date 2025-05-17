import express, { RequestHandler } from "express";
import { user10KFilingController } from "../controller/user10KFilingController.js"

const router = express.Router()

router.post('/user10KFiling', user10KFilingController as RequestHandler)

export default router