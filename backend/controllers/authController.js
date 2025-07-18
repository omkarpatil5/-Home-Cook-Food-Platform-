import User from '../models/User.js';
import Chef from '../models/Chef.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const createToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

export const register = async (req, res) => {
    const { name, email, password, phone, role } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const Model = role === 'chef' ? Chef : User;

        const user = await Model.create({
            name,
            email,
            password: hashedPassword,
            phone,
            role
        });

        const token = createToken(user._id, user.role);
        res.status(201).json({ user, token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const login = async (req, res) => {
    const { email, password, role } = req.body;
    try {
        const Model = role === 'chef' ? Chef : User;
        const user = await Model.findOne({ email });
        if (!user) return res.status(400).json({ error: 'Invalid email' });

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(400).json({ error: 'Incorrect password' });

        const token = createToken(user._id, user.role);
        res.status(200).json({ user, token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
