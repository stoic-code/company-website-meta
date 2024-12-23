import mongoose from "mongoose";

const { Schema } = mongoose;

const applicationSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  contact: { type: String, required: true },
  linkedIn: { type: String, required: true },
  coverLetter: { type: String, required: true },
  resume: { type: String, required: true },
  job: { type: String, required: true },
});

export default mongoose.model("Application", applicationSchema);
