import React from "react";
import connectDB from "@/utils/connectDB";
import Message from "@/models/Message";
import { notFound } from "next/navigation";
import { setMessageRead } from "@/actions/message.action";
import { dateFormatterWithTime } from "@/lib/dateConverter";

const page = async ({ params }: { params: { id: string } }) => {
  await connectDB();
  const { id } = params;
  const message = await Message.findById(id);
  setMessageRead(id);

  if (!message) return notFound();
  return (
    <div className="min-h-screen pt-20">
      <ul>
        <li>Full Name : {message.fullName}</li>
        <li>Email : {message.email}</li>
        <li>Contact : {message.contact}</li>
        <li>Company : {message.companyName}</li>
        <li>Company Location : {message.companyLocation}</li>
        <li className="pt-4">
          <span className="font-semibold">Message</span> : {message.description}
        </li>
      </ul>
      <p className="pt-10 text-ui-400">
        {dateFormatterWithTime(message.createdAt)}
      </p>
    </div>
  );
};

export default page;
