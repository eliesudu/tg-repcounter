import express from 'express';
import ExerciseModel from '../models/Exercise.js';
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Router is funcs")

})

router.post('/', async (req, res) => {
    const {name, description, muscle_group, category, img_url} = req.body;
    try {
        const workout = new ExerciseModel({
            name: name,
            description: description,
            muscle_group: muscle_group,
            category: category,
            img_url: img_url
        })
        await workout.save();
        return res.status(201).json({ message: 'Exercise created successfully' });
    } catch (error) {
        console.error('Error creating workout:', error);
        return res.status(500).json({ error: 'An error occurred while creating the workout' });
    }
})

export default router