import express from 'express';
import { addProduct, editProduct, findProducts } from '../controllers/adminController.js';
const router= express.Router()

router.get('/',findProducts)
router.post('/product',addProduct)
router.put('/editProduct',editProduct)

export default router