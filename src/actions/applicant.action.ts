"use server";
import Applicant from "@/models/Applicant";
import { connectToDatabase } from "./jobs.actions";
import { revalidatePath } from "next/cache";
import { Tabs } from "@/app/admin/jobs/[id]/applicants/types";

export const createApplicant = async (data: any) => {
  await connectToDatabase();
  // Checks if same email has been already applied for a particular vacancy
  try {
    const previousApplicant = await Applicant.findOne({
      email: data.email,
      vacancy: data.jobId,
    });
    if (previousApplicant) {
      return {
        message: "Your application has been already sent !",
        desc: "Your application is currently under review. We'll carefully assess your qualifications and get back to you shortly",
        success: true,
      };
    }
    console.log(previousApplicant);
  } catch (error) {
    console.log(error);
    return {
      message: "Server Error !",
      desc: "If You are a developer see on server console",
      success: false,
    };
  }

  console.log("DATA:", data);
  try {
    const newApplicant = new Applicant({
      vacancy: data.jobId,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      contact: data.contact,
      linkedIn: data.linkedIn,
      coverLetter: data.coverLetter,
      resume: data.resume,
      province: data.province,
      district: data.district,
      local: data.local,
    });
    console.log("SAVED APPLICANT:", newApplicant);
    revalidatePath("/careers");
    revalidatePath("/admin/jobs");
    revalidatePath("/admin/applicants");
    revalidatePath("/applicants");
    return {
      message: "Application Submitted successfully!",
      success: true,
      desc: "You're all set! Your application has been submitted. We're excited to consider you for the position",
    };
  } catch (error) {
    console.log(error);
    return {
      message: "Server Error !",
      desc: "If You are a developer see on server console",
      success: false,
    };
  }
};

export const changeStatus = async ({
  status,
  _id,
}: {
  status: Tabs;
  _id: string;
}) => {
  try {
    const updatedApplicant = await Applicant.findByIdAndUpdate(_id, { status });
    console.log("UPDATED APPLICANT:", updatedApplicant);
    revalidatePath("/admin/applicants/[id]", "page");
    revalidatePath("/admin/jobs/[id]/applicants", "page");
    return { success: true, message: "Successfully updated the status !!" };
  } catch (err) {
    console.log(err);
    return { success: false, message: "Internal server error !!" };
  }
};

export const changeOpenedStatus = async (id: string) => {
  try {
    const updatedApplicant = await Applicant.findByIdAndUpdate(id, {
      opened: true,
    });
    console.log("UPDATED APPLICANT:", updatedApplicant);
    revalidatePath("/admin/applicants/[id]", "page");
    revalidatePath("/admin/jobs/[id]/applicants", "page");
    return { success: true, message: "Successfully updated the status !!" };
  } catch (err: any) {
    console.log(err);
    throw new Error(err.message || "Couldn't update Applicant");
  }
};
