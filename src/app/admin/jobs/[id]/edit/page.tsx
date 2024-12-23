import React from "react";
import EditClient from "./Edit.client";
import Vacancy from "@/models/Vacancy";
import { notFound } from "next/navigation";
import connectDB from "@/utils/connectDB";

const page = async ({ params }: { params: { id: string } }) => {
  await connectDB();
  const data = await Vacancy.findById(params.id);

  if (!data) return notFound();

  return (
    <EditClient
      id={data._id}
      title={data.title}
      noOfPosition={data.noOfPosition}
      category={data.category}
      jobDescription={data.jobDescription}
      qualification={data.qualification}
      responsibilities={data.responsibilities}
      expiresIn={data.expiresIn}
      location={data.location}
      level={data.level}
      vacancyClosed={data.vacancyClosed}
    />
  );
};

export default page;
