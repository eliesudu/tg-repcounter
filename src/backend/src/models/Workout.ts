import {Schema, model} from 'mongoose';

const workoutSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    exercises: [{
        exercise_id: { type: Schema.Types.ObjectId, ref: 'Exercise', required: true },
        sets: [
            {
            reps: { type: Number, required: true },
            weight: { type: Number, required: false },
            duration: { type: Number, required: false }
        }]
    }],
    created_at: { type: Date, default: Date.now }
})

const WorkoutModel = model('Workout', workoutSchema)
export default WorkoutModel
 