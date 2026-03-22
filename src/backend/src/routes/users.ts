import express from 'express';
import mongoose from 'mongoose';
import UserModel from '../models/User.js';
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Router is funcs")

})

router.post('/', async (req, res) => {
    const { telegram_id, firstname } = req.body;
    try {
    const user = new UserModel({
        telegram_id: telegram_id,
        firstname: firstname
    })

    await user.save();
    return res.status(201).json({ message: 'User registered successfully' });

} catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ error: 'An error occurred while registering the user' });
}

})

export default router
