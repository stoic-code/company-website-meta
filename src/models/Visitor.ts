import mongoose from "mongoose";

const { Schema } = mongoose;

const visitorSchema = new Schema(
  {
    uid: String,
  },
  { timestamps: true },
);

//If the Post collection does not exist create a new one.

const Visitor =
  mongoose.models.Visitor || mongoose.model("Visitor", visitorSchema);

export default Visitor;
