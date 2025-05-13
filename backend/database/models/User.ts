import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  DoB: { type: Date },
  industry: String,
  userJobTitle: String,
  department: String,
  totalLoans: [String],
  loanTypes: String,
  root: { type: Boolean, default: false }, // true if head user
  email: String,
  role: String
})

export const User = mongoose.model('User', userSchema)