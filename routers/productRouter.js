import express from 'express';
import { addProduct } from '../controllers/adminController.js';
const router= express.Router()

router.get('/', function(req, res){
console.log('product');
})


export default router