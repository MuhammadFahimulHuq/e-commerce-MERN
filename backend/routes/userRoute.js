import express from 'express'
const router = express.Router()
import { authUser, getUserProfile,registerUser } from '../controllers/userController.js'
import {protect} from '../middleware/authMiddleware.js'

// @desc Fetch all products
//@route GET /api/products
//@access public
router.route('/').post(registerUser)
router.post('/login',authUser)
router.route('/profile').get(protect,getUserProfile)

// @desc Fetch  product
//@route GET /api/product/:id
//@access public    

export default router