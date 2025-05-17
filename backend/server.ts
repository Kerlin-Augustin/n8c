import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import upload10KFilingToAWSRoute from './routes/upload10KFilingToAWSRoute.js'
import signupRoute from "./routes/auth/signupRoute.js";
import user10KFilingRoute from "./routes/user10KFilingRoute.js"
import { connectToDB } from "./config/mongoDatabase.js";
import { UserCompany } from "./database/models/UserCompany.js";
import { User } from "./database/models/User.js";

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api', signupRoute)
app.use('/api', upload10KFilingToAWSRoute)
app.use('/api', user10KFilingRoute)

// connect to mongoDB
connectToDB()

app.get('/api/userCompany', async (req, res) => {
  try {
    const userCompanies = await UserCompany.find({});
    const users = await User.find({})
    res.json({
      userCompanies: userCompanies,
      users: users
    });

  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

