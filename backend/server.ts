import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import uploadRoute from './routes/upload.js'
import { connectToDB } from "./config/mongoDatabase.js";
import { UserCompany } from "./database/models/UserCompany.js";

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api', uploadRoute)

// connect to mongoDB
connectToDB()

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

