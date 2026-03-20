import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectToDatabase() {
    const uri = process.env.MONGO_CONNECTION_STRING;
    if (!uri) {
        throw new Error('MONGO_CONNECTION_STRING environment variable is not set');
    }

    mongoose.connect(uri)
        .then(() => console.log('Connected to MongoDB'))
        .catch((err) => console.error('Error connecting to MongoDB:', err));
}