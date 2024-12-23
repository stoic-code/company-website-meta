// const mongoose = require("mongoose");
import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

// module.exports = mongoose.model("Admin", adminSchema);
const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema);

export default Admin;
