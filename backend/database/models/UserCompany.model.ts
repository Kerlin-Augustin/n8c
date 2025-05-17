import mongoose from "mongoose";

const userCompanySchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  // headUser has type mongoose.SChema.Types.ObjectId to reference another collection for that specific user
  headUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  userCompanyName: { type: String, required: true },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

export const UserCompany = mongoose.model('UserCompany', userCompanySchema)