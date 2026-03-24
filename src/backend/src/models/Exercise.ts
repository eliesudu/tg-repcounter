import {Schema, model} from 'mongoose';

const exerciseSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    img_url: { type: String , required: false},
    muscle_group: {type: [String], default: []},
    category: {type: String, enum: ['strength', 'cardio', 'flexibility', 'balance']},
})

const ExerciseModel = model('Exercise', exerciseSchema)

export default ExerciseModel
