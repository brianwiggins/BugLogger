import mongoose from "mongoose";
const Schema = mongoose.Schema;


const Bug = new Schema({
  closed: { type: Boolean, default: false },
  description: { type: String, required: true },
  title: { type: String, required: true },
  reportedBy: { type: String },
  lastModified: { type: Date }
}, { timestamps: true, toJSON: { virtuals: true } })
export default Bug;