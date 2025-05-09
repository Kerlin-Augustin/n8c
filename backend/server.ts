import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDB } from "./database/config/db.ts";
import mongoose from "mongoose";
import uploadRoute from './routes/upload.ts'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json());
app.use('/api', uploadRoute)

connectToDB()

// Create routes after connectDB

const userCompanySchema = new mongoose.Schema({
  userCompanyName: { type: String, required: true },
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

const UserCompany = mongoose.model('UserCompany', userCompanySchema)

app.get('/api/userCompany', async (req, res) => {
  try {
    const userCompanies = await UserCompany.find({});
    res.json(userCompanies);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

