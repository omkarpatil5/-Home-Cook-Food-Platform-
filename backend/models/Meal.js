import mongoose from 'mongoose';

const mealSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: { type: String, default: '' }, // ← Add this
  chefId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chef' },
  createdAt: { type: Date, default: Date.now }
});

const Meal = mongoose.model('Meal', mealSchema);
export default Meal;
