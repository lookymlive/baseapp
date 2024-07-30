
import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";
// Connect to MongoDB using Mongoose

export async function connectDB() { 
  try {
    const db = await mongoose.connect(MONGODB_URI)
    console.log('Connected to MongoDB', db.connection.name);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
  
