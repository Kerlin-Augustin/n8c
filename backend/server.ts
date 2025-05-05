import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDB } from "./database/config/db.ts";

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json());

connectToDB()

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

