import mongoose from 'mongoose';

const user10KFilingSchema = new mongoose.Schema({
  filename: String,
  filetype: String,
  filesize: Number,
  uploadedBy: String, // change to this type when context is setup { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  uploadDate: { type: Date, default: Date.now },
  s3Key: String,
  s3Url: String,
})

export const User10KFiling = mongoose.model('User10Kfiling', user10KFilingSchema)