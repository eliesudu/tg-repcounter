import {Schema, model} from 'mongoose'

const userSchema = new Schema({
    telegram_id: { type: String, required: true },
    firstname: { type: String, required: true },
    plan: [{ type: Schema.Types.ObjectId, ref: 'TrainingPlan' }],
    created_at: { type: Date, default: Date.now }
})

const UserModel = model('User', userSchema)

export default UserModel
