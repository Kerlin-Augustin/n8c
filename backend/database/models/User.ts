import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  DoB: { type: Date },
  id: { type: String, required: true }, // or use _id
  industry: String,
  userJobTitle: String,
  department: String,
  totalLoans: [String],
  loanTypes: String,
  root: { type: Boolean, default: false }, // true if head user
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'UserCompany' }
})

export const User = mongoose.model('User', userSchema)