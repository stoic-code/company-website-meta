import mongoose, { models, model } from "mongoose";

// Define Mongoose schema
const partnershipFormSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full Name is required."],
    },
    province: { type: String, required: true },
    district: { type: String, required: true },
    local: { type: String, required: true },
    email: {
      type: String,
      required: [true, "Invalid email format."],
    },
    contact: {
      type: String,
      required: [true, "Contact no should be at least 10 characters."],
    },
    experiences: {
      experience: {
        type: String,
        required: [true, "Experience is required."],
      },
      other: { type: String },
    },
    salesExperience: {
      type: String,
      required: [true, "Please select an option."],
    },
    skills: {
      skill: {
        type: [String],
        required: [true, "Please select at least 1 option."],
      },
      other: { type: String },
    },
    interests: {
      interest: {
        type: [String],
        required: [true, "Please select at least 1 option."],
      },
      other: { type: String },
    },
    sourcings: {
      sourcing: {
        type: [String],
        required: [true, "Please select at least 1 option."],
      },
      other: { type: String },
    },
    industries: {
      industry: {
        type: [String],
        required: [true, "Please select at least 1 option."],
      },
      other: { type: String },
    },
    contributions: {
      contribution: {
        type: [String],
        required: [true, "Please select at least 1 option."],
      },
      other: { type: String },
    },
    refered: { type: Boolean, default: false, required: true },
    referer: { type: String },
    additionalInformation: { type: String },
    opened: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Partnership =
  models.Partnership || model("Partnership", partnershipFormSchema);

export default Partnership;
