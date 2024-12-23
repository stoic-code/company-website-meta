"use server";

import Partnership from "@/models/Partner";
import {
  TPartnershipForm,
  partnershipFormSchema,
} from "@/schemas/partnerForm.schema";
import connectDB from "@/utils/connectDB";
import { revalidatePath } from "next/cache";

export const addPartnership = async (data: TPartnershipForm) => {
  const parsedData = partnershipFormSchema.safeParse(data);
  if (parsedData.success) {
    await connectDB();
    const { email, contact } = data;
    const partnerExists = await Partnership.findOne({
      $or: [{ email: email }, { contact: contact }],
    });

    if (partnerExists)
      return {
        success: true,
        message:
          "You have already submitted a partnership request. It will take some time! Expect a response soon. 🤝",
      };

    const newPartner = new Partnership(data);
    const savedData = await newPartner.save();
    console.log(savedData);
    revalidatePath("/admin/partners");
    return {
      success: true,
      message:
        "We've got your inquiry and are on it! Expect a response soon. 🤝",
    };
  } else {
    return {
      success: false,
      message:
        "Looks like there's a small glitch in the system. We're working to fix this issue! 🛠️",
    };
  }
};

export const setPartnershipRead = async (id: string) => {
  await connectDB();
  try {
    const res = await Partnership.findByIdAndUpdate(id, { opened: true });
    revalidatePath("/admin/partners");
    return;
  } catch (err) {
    throw new Error("Couldn't update the partnership.");
  }
};
