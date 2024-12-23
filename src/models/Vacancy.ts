import mongoose from "mongoose";

const vacancySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    noOfPosition: { type: Number, required: true },
    category: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      enum: ["internship", "senior", "mid", "junior"],
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    responsibilities: {
      type: String,
      required: true,
    },
    expiresIn: {
      type: Date,
      required: true,
    },
    vacancyClosed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Vacancy =
  mongoose.models.Vacancy || mongoose.model("Vacancy", vacancySchema);

export default Vacancy;
