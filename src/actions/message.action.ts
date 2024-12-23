"use server";
import Message from "@/models/Message";
import { TContactForm } from "@/schemas/contactForm.schema";
import connectDB from "@/utils/connectDB";
import { revalidatePath } from "next/cache";

export const addMessage = async (data: TContactForm) => {
  await connectDB();
  const message = new Message(data);
  try {
    const res = await message.save();
    console.log(res);
    revalidatePath("/admin/messages");
    return { success: true };
  } catch (err) {
    return { success: false };
  }
};

export const setMessageRead = async (id: string) => {
  await connectDB();
  try {
    const res = await Message.findByIdAndUpdate(
      id,
      { opened: true },
      { new: true },
    );
    revalidatePath("/admin/messages");
    return;
  } catch (err) {
    throw new Error("Couldn't update the message.");
  }
};
