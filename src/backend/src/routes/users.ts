import express from 'express';
import mongoose from 'mongoose';
import UserModel from '../models/User.js';
const router = express.Router()

router.get('/', (req, res) => {
    console.log("Router is funcs")
    const telegram_id = req.query.telegram_id as string;

    // Validate the presence of telegram_id
    if (!telegram_id) {
        return res.status(400).json({ error: 'telegram_id query parameter is required' });
    }

    // Query user from database 
    UserModel.findOne({ telegram_id: telegram_id })
        .then(user => {
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            return res.status(200).json(user);
        })
        .catch(error => {
            console.error('Error fetching user:', error);
            return res.status(500).json({ error: 'An error occurred while fetching the user' });
        });
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
