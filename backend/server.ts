import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDB } from "./database/config/db.ts";
import mongoose from "mongoose";

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json());

connectToDB()

// Create routes after connectDB

const companySchema = new mongoose.Schema({
  company: { type: String, required: true },
  users: [
    {
      name: { type: String, required: true },
      id: { type: String, required: true },
      industry: { type: String },
      userJobTitle: { type: String },
      department: { type: String },
      totalLoans: { type: [String] },
      loanTypes: { type: String }
    }
  ]
});

const Company = mongoose.model('Company', companySchema)

app.get('/api/company', async (req, res) => {
  try {
    const companies = await Company.find({});
    console.log('sssss')
    res.json(companies);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

