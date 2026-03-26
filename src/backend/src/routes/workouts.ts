import express from 'express';
import WorkoutModel from '../models/Workout.js';
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Router is funcs")

})

router.post('/', async (req, res) => {
    const {name, description, exercises} = req.body;
    try {
        const workout = new WorkoutModel({
            name: name,
            description: description,
            exercises: exercises
        })
    
    await workout.save();
    return res.status(201).json({ message: 'Workout created successfully' });
    } catch (error) {
        console.error('Error creating workout:', error);
        return res.status(500).json({ error: 'An error occurred while creating the workout' });
    }
})

export default router