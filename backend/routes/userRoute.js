import express from 'express'
const router = express.Router()
import {authUser,deleteUser,getUserProfile ,getUsers,registerUser, updateUserProfile,getUserById, updateUser } from '../controllers/userController.js'
import {protect,admin} from '../middleware/authMiddleware.js'

// @desc Fetch all products
//@route GET /api/products
//@access public
router.route('/').post(registerUser).get(protect,admin,getUsers)
router.post('/login',authUser)
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile)
router.route('/:id')
.delete(protect,admin,deleteUser)
.get(protect,admin,getUserById)
.put(protect,admin,updateUser)

// @desc Fetch  product
//@route GET /api/product/:id
//@access public    

export default router