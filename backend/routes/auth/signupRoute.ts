import express, { RequestHandler } from 'express'
import { signupController } from '../../controller/auth/signupController.js'

const router = express.Router()

router.post('/signup', signupController as RequestHandler)

export default router