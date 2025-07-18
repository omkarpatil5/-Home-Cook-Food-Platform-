import express from 'express';
import { placeOrder, getUserOrders } from '../controllers/orderController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, placeOrder);
router.get('/my-orders', authMiddleware, getUserOrders);

export default router;
