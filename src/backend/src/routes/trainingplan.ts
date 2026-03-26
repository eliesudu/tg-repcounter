import express from 'express';
import TrainingPlanModel from '../models/TrainingPlan.js';

const router = express.Router()

router.get('/userPlans', async (req, res) => {
    const telegram_id = req.query.telegram_id as string
    const objId = req.query.objId as string

    if (!objId || !telegram_id) {
        return res.status(404).json({error: "plan not found"})
    }

})

router.post('/', async (req, res) => {
    const {name, description, workouts} = req.body;
    try {
        const trainingPlan = new TrainingPlanModel({
            name: name,
            description: description,
            workouts: workouts
        })
    
    await trainingPlan.save();
    return res.status(201).json({ message: 'Training plan created successfully' });
    } catch (error) {
        console.error('Error creating training plan:', error);
        return res.status(500).json({ error: 'An error occurred while creating the training plan' });
    }
})

export default router