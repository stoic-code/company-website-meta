import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    email: {
      type: String,
    },
    contact: {
      type: String,
    },
    companyName: {
      type: String,
    },
    companyLocation: {
      type: String,
    },
    description: {
      type: String,
    },
    opened: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);

export default Message;
