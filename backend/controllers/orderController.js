import Order from '../models/Order.js';

export const placeOrder = async (req, res) => {
  try {
    const { mealId } = req.body;
    const order = await Order.create({
      userId: req.user.id,
      mealId
    });
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id }).populate('mealId');
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
