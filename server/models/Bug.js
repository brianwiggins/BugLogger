import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Bug = new Schema({
  closed: { type: Boolean },
  description: { type: String },
  title: { type: String },
  reportedBy: { type: String },
  lastModified: { type: Date }
}, { timestamps: true, toJSON: { virtuals: true } })
export default Bug;