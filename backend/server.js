import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import orderRoutes from './routes/orderRoutes.js';
import authRoutes from './routes/authRoutes.js';
import mealRoutes from './routes/mealRoutes.js';

dotenv.config();
const app = express();
app.use(cors({
  origin: [
    "https://home-cook-food-platform.vercel.app",
    "https://home-cook-food-platform-lcvfsgr5p.vercel.app"
  ],
  credentials: true,
}));

app.use(express.json());



app.use('/api/orders', orderRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/meals', mealRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('MongoDB connected');
    app.listen(5000, () => console.log('Server running on port 5000'));
}).catch(err => console.log(err));
