import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const Mongo_URI = process.env.MONGO_URI as string;

if (!Mongo_URI) {
  throw new Error('MONGO_URI is not defined in .env');
}

// Setup Mongoose
export async function connectToDB(): Promise<void> {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(Mongo_URI);
    console.log("Connected to MongoDB via Mongoose");
    console.log("Connected to database:", mongoose.connection.db?.databaseName);
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1)
  }
}
