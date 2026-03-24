import {Schema, model} from 'mongoose';

const exerciseSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    workouts: [{ type: Schema.Types.ObjectId, ref: 'Workout' }, {}],
    created_at: { type: Date, default: Date.now }
});

const ExerciseModel = model('Exercise', exerciseSchema);

export default ExerciseModel