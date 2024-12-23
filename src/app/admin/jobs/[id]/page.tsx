import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Info } from "lucide-react";
import { Tabs } from "./types";

import connectDB from "@/utils/connectDB";
import Applicant from "@/models/Applicant";
import Vacancy from "@/models/Vacancy";
import { dateFormatterWithTime } from "@/lib/dateConverter";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ApplicantTabs from "./ApplicantTabs";
import { QueryParams } from "./types";
import { cn } from "@/lib/utils";

const page = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: QueryParams;
}) => {
  await connectDB();
  const job = await Vacancy.findById(params.id);

  const { q, tab } = searchParams; // Assuming searchParams is correctly defined

  const filter: any = {
    vacancy: job._id.toString(),
  };

  if (tab !== "") {
    filter.status = tab;
  }

  if (q) {
    const regexPattern = new RegExp(q, "i"); // Use 'q' instead of 'searchParams'
    filter.$or = [
      { name: { $regex: regexPattern } },
      { contact: { $regex: regexPattern } },
      { email: { $regex: regexPattern } },
    ];
  }

  const applicants = await Applicant.find(filter)
    .populate("vacancy")
    .sort({ createdAt: -1 });

  if (!applicants && !job) return notFound();
  return (
    <div className="flex min-h-screen flex-col py-16">
      <h1 className="text-3xl font-bold">Applicants in {job.title}</h1>
      <ApplicantTabs />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>SN</TableHead>
            <TableHead className="font-medium">Applicant's Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact No</TableHead>
            <TableHead>Job Title</TableHead>
            <TableHead className="">Applied In</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicants
            ? applicants.map((a, idx) => (
                <TableRow
                  key={idx}
                  className={cn(
                    !a.status || a.status === Tabs.all
                      ? "bg-blue-100 hover:bg-blue-100/50"
                      : "",
                  )}
                >
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell className="font-medium">{`${a.firstName} ${a.lastName}`}</TableCell>
                  <TableCell>{a.email}</TableCell>
                  <TableCell>{a.contact}</TableCell>
                  <TableCell>
                    {a.vacancy ? (
                      a.vacancy.title
                    ) : (
                      <span className="text-red-400">Deleted Job</span>
                    )}
                  </TableCell>
                  <TableCell className="">
                    {dateFormatterWithTime(a.createdAt)}
                  </TableCell>

                  <TableCell className="text-right">
                    <Link
                      href={`/admin/applicants/${a._id}`}
                      className=" flex w-fit text-blue-600"
                    >
                      <Info size={20} />
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
