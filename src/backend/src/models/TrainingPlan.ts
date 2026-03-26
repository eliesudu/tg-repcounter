import {Schema, model} from 'mongoose';

const trainingPlanSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    workouts: [{ type: Schema.Types.ObjectId, ref: 'Workout' }],
    created_at: { type: Date, default: Date.now }
})

const TrainingPlanModel = model('TrainingPlan', trainingPlanSchema)

export default TrainingPlanModel