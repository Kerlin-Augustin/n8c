import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  department: String,
  DoB: { type: Date },
  email: String,
  employeeOf: String,
  industry: String,
  loanTypes: String,
  name: { type: String, required: true },
  root: { type: Boolean, default: false }, // true if head user
  role: String,
  totalLoans: [String],
  userJobTitle: String,
})

export const User = mongoose.model('User', userSchema)