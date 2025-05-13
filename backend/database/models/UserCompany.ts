import mongoose from "mongoose";

const userCompanySchema = new mongoose.Schema({
  userCompanyName: { type: String, required: true },
  headUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  accountAge: Date
});

export const UserCompany = mongoose.model('UserCompany', userCompanySchema)