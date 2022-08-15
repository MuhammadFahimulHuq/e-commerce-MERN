import express from 'express'
const router = express.Router()
import { getProductById, getProducts } from '../controllers/productControllers.js'
// @desc Fetch all products
//@route GET /api/products
//@access public
router.route('/').get(getProducts)
// @desc Fetch  product
//@route GET /api/product/:id
//@access public    
router.route('/:id').get(getProductById)

export default router