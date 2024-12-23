"use server";

import jwt from "jsonwebtoken";
import User from "@/models/Admin";
import bcrypt from "bcryptjs";
import connectDB from "@/utils/connectDB";

const jwtSecret = "metalogicsecret";

export const adminAuth = (token: string) => {
  if (!token) {
    return false;
  }
  jwt.verify(token, jwtSecret, (err) => {
    if (err) {
      console.log(err);
      return false;
    }
    return true;
  });
};

export const registerAdmin = async (username: string, password: string) => {
  //   const { phone, username, address, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return {
        success: false,
        message: "User already exists, please choose a different username",
      };
    }

    if (password.length < 8) {
      return {
        message: "Password must be at least 8 characters long",
        success: false,
      };
    }
    //Hashing the password 10 times
    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      password: hash,
    });

    return {
      message: "Employee created successfully",
      user: user._id,
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      message: "An error occurred while creating a user",
      success: false,
    };
  }
};
