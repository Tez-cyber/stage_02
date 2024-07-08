import express from 'express'
import authController from '../controllers/authController.js'

const router = express.Router()

router.route('/register').get(authController.registerUser)

export default router