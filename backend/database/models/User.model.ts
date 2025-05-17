import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  department: String,
  DoB: { type: Date },
  email: {type: String, required: true, unique: true, lowercase: true},
  employeeOf: String,
  industry: String,
  loanTypes: String,
  name: { type: String, required: true },
  password: {type: String, required: true},
  root: { type: Boolean, default: false }, // true if head user
  role: String,
  totalLoans: [String],
  userJobTitle: String,
})

export const User = mongoose.model('User', userSchema)