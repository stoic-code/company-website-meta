"use server";
import { revalidatePath } from "next/cache";

import Vacancy from "@/models/Vacancy";
import connectDB from "@/utils/connectDB";

type TDataTypes = {
  title: string;
  category: string;
  expiresIn: string;
  noOfVacancy: string;
  jobDescription: string;
  vacancyClosed?: boolean;
  qualification: string;
  responsibilities: string;
  location: string;
  level: string;
};

export const connectToDatabase = async () => {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    return {
      message: "Database connection error",
      desc: "If You are a developer see on server console",
      success: false,
    };
  }
};

export const createNewVacancy = async (data: TDataTypes) => {
  await connectToDatabase();
  try {
    const vacancy = new Vacancy({
      title: data.title,
      noOfPosition: Number(data.noOfVacancy),
      category: data.category,
      jobDescription: data.jobDescription,
      qualification: data.qualification,
      responsibilities: data.responsibilities,
      expiresIn: data.expiresIn,
      level: data.level,
      location: data.location,
    });
    await vacancy.save();
    revalidatePath("/admin/jobs");
    revalidatePath("/careers");
    return { message: "Vacancy created successfully!!", success: true };
  } catch (error) {
    console.log(error);
    return {
      message: "Server Error",
      desc: "If You are a developer see on server console",
      success: false,
    };
  }
};

export const editVacancy = async (id: string, data: TDataTypes) => {
  await connectToDatabase();
  try {
    const updatedVacancy = await Vacancy.findByIdAndUpdate(id, {
      title: data.title,
      noOfPosition: Number(data.noOfVacancy),
      category: data.category,
      jobDescription: data.jobDescription,
      qualification: data.qualification,
      responsibilities: data.responsibilities,
      expiresIn: data.expiresIn,
      level: data.level,
      location: data.location,
      vacancyClosed: data.vacancyClosed,
    });
    revalidatePath("/admin/jobs");
    revalidatePath("/careers");
    return { message: "Vacancy updated successfully!!", success: true };
  } catch (error) {
    console.log(error);
    return {
      message: "Server Error",
      desc: "If You are a developer see on server console",
      success: false,
    };
  }
};

export const deleteVacancy = async (id: string) => {
  await connectToDatabase();
  try {
    const deletedVacancy = await Vacancy.findByIdAndDelete(id);
    revalidatePath("/admin/jobs");
    revalidatePath("/careers");
    return { message: "Vacancy deleted successfully!!", success: true };
  } catch (error) {
    console.log(error);
    return {
      message: "Server Error",
      desc: "If You are a developer see on server console",
      success: false,
    };
  }
};
