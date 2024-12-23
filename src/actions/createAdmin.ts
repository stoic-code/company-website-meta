import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // await mongoose.connect(
    //   "mongodb+srv://metalogic:memoryking123@cluster0.88ptydc.mongodb.net/metalogic",
    // );

    await mongoose.connect(
      "mongodb+srv://metalogic:memoryking123@cluster0.88ptydc.mongodb.net/metalogic-development",
    );
    console.log("Connected to DB Successfully!");
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

import { registerAdmin } from "./auth";

async function reg() {
  await connectDB();
  await registerAdmin("metalogic@admin", "met@log!c9");
}

reg();
