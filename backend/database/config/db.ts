import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const Mongo_URI = process.env.MONGO_URI as string;

if (!Mongo_URI) {
  throw new Error('MONGO_URI is not defined in .env');
}

// Setup MongoClient 
// const client = new MongoClient(Mongo_URI);

// Setup Mongoose
async function connectToDB(): Promise<void> {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(Mongo_URI);
    console.log("Connected to MongoDB via Mongoose");
    console.log("Connected to database:", mongoose.connection.db?.databaseName);
  } catch (e) {
    console.error("MongoDB connection error:", e);
    throw e;
  }
}

export { connectToDB };
