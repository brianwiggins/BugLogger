import mongoose from "mongoose";
const Schema = mongoose.Schema;
const objectId = Schema.Types.ObjectId;

const Note = new Schema({
  content: { type: Boolean },
  bug: { type: objectId, ref: "Bug" }
}, { timestamps: true, toJSON: { virtuals: true } })
export default Note;