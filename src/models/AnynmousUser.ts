import mongoose from "mongoose";

const anynmousUserSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
});

const AnynmousUser =
  mongoose.models.AnynmousUser ||
  mongoose.model("AnynmousUser", anynmousUserSchema);

export default AnynmousUser;
