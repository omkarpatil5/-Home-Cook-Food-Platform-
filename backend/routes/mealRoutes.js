import express from 'express';
import { addMeal, getMeals } from '../controllers/mealController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import { getChefMeals } from '../controllers/mealController.js';



const router = express.Router();

router.post('/add', authMiddleware, addMeal);
router.get('/', getMeals);
router.get('/my-meals', authMiddleware, getChefMeals);

export default router;
