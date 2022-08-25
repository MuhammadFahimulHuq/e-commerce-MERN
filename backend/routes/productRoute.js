import express from 'express'
const router = express.Router()
import {createProduct,deleteProduct, getProductById, getProducts, updateProduct } from '../controllers/productControllers.js'
import {protect,admin} from '../middleware/authMiddleware.js'

// @desc Fetch all products
//@route GET /api/products
//@access public
router.route('/').get(getProducts).post(protect,admin,createProduct)
// @desc Fetch  product
//@route GET /api/product/:id
//@access public    
router.route('/:id').get(getProductById).delete(deleteProduct)
.put(protect,admin,updateProduct)


export default router