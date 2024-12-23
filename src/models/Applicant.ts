import mongoose from "mongoose";
import Vacancy from "./Vacancy";

const applicantSchema = new mongoose.Schema(
  {
    vacancy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Vacancy.modelName,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    linkedIn: {
      type: String,
    },
    resume: {
      type: String,
    },
    province: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    local: {
      type: String,
      required: true,
    },
    coverLetter: {
      type: String,
      required: true,
    },
    opened: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["FIT", "MAYBE", "REJECTED"],
    },

    image: { type: String },
    citizenship_front: { type: String },
    citizenship_back: { type: String },
  },
  { timestamps: true },
);

const Applicant =
  mongoose.models.Applicant || mongoose.model("Applicant", applicantSchema);

export default Applicant;
