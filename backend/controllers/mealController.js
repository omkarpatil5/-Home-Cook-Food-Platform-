import Meal from '../models/Meal.js';

export const addMeal = async (req, res) => {
  try {
    const { title, description, price, image } = req.body; // ✅ include image

    const meal = await Meal.create({
      title,
      description,
      price,
      image,                // ✅ store image in DB
      chefId: req.user.id
    });

    res.status(201).json(meal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getMeals = async (req, res) => {
  try {
    const meals = await Meal.find().populate('chefId', 'name');
    res.status(200).json(meals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const getChefMeals = async (req, res) => {
  try {
    const meals = await Meal.find({ chefId: req.user.id });
    res.status(200).json(meals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
