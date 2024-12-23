import React from "react";
import Visitor from "@/models/Visitor";
import { unstable_noStore as noStore } from "next/cache";
import connectDB from "@/utils/connectDB";
import ExampleChart from "./Chart";
import { transformedData } from "@/lib/chart";

const page = async () => {
  noStore();
  await connectDB();
  const visitors = await Visitor.find();

  const data = transformedData(visitors);

  if (!visitors || visitors.length < 0) {
    return <div>No Visitors</div>;
  }

  return (
    <div className="min-h-screen pt-20">
      <ExampleChart data={data} total={visitors.length} />
    </div>
  );
};

export default page;
