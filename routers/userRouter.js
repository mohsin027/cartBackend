import express from 'express';
import { addToCart, fetchUser } from '../controllers/userController.js';
const router= express.Router()

router.post('/addToCart', addToCart);
router.get('/fetchUser', fetchUser);


export default router