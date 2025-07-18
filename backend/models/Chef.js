import mongoose from 'mongoose';

const chefSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    phone: { type: String, required: true },
    role: { type: String, default: 'chef' }
});

const Chef = mongoose.model('Chef', chefSchema);
export default Chef;
