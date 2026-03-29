import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './database.js';
import usersRouter from './routes/users.js'
import workoutsRouter from './routes/workouts.js'
import exercisesRouter from './routes/exercises.js'
import trainingPlansRouter from './routes/trainingplan.js'

const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use('/api/users', usersRouter);
app.use('/api/workouts', workoutsRouter);
app.use('/api/exercises', exercisesRouter);
app.use('/api/training-plans', trainingPlansRouter);

connectToDatabase();
app.get('/health',  (req, res) => {
    res.status(200).json({ status: 'ok' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});