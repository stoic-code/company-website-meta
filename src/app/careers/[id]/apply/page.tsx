import React from "react";
import connectDB from "@/utils/connectDB";
import Vacancy from "@/models/Vacancy";
import Application from "./Application";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Logo from "@/assets/logo.png";
import { dateFormatter } from "@/lib/dateConverter";

const page = async ({ params }: { params: { id: string } }) => {
  await connectDB();
  const data = await Vacancy.findOne({ _id: params.id, vacancyClosed: false });

  if (!data) return notFound();

  return (
    <div className="px-4 py-24">
      <div className="md:grid md:grid-cols-3">
        <div className="flex md:justify-end">
          <Card className="h-fit w-fit px-2">
            <div className="py-4 md:px-2">
              <div className="flex items-center gap-4">
                <img
                  src="/metalogo.png"
                  alt="MetaLogic"
                  className="h-10 w-10"
                />
                <div className="flex flex-col">
                  <h1 className="flex text-2xl font-bold">
                    <span className="">Meta</span>
                    <span className="">Logic</span>
                  </h1>
                  <span className="text-xs">Software Pvt Ltd</span>
                </div>
              </div>
            </div>
            <CardContent>
              <ul>
                <li>
                  <span className="font-bold">Title</span> : {data.title}
                </li>
                <li>
                  <span className="font-bold">Type</span>: Full Time
                </li>
                <li>
                  <span className="font-bold">Level</span>: Entry Level
                </li>
                <li>
                  <span className="font-bold">No of Positions</span>:{" "}
                  {data.noOfPosition}
                </li>
                <li>
                  <span className="font-bold">Posted</span>:{" "}
                  {dateFormatter(data.createdAt)}
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-2">
          <Application jobId={params.id} />
        </div>
      </div>
    </div>
  );
};

export default page;
