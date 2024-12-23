import React from "react";
import { unstable_noStore as noStore } from "next/cache";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, CircleDot, Search } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { notFound } from "next/navigation";
import Vacancy from "@/models/Vacancy";
import connectDB from "@/utils/connectDB";
import Applicant from "@/models/Applicant";

const AvailableVacencies = async () => {
  noStore();
  await connectDB();

  const data = await Vacancy.find();
  // const applicants = await Applicant.find();
  // console.log(data);

  try {
    return (
      <div className="py-24">
        <FadeIn
          id="vacancies"
          className="flex flex-col gap-4 py-24 text-center"
        >
          <h5 className="text-xl font-semibold text-yellow-500">
            Opportunities
          </h5>
          <h2 className="text-4xl font-bold text-blue-950">
            Available Vacancies
          </h2>

          <FadeIn className="flex flex-wrap gap-4 px-2 md:mx-auto md:w-[50%]">
            <input
              className="flex-1 rounded-lg border p-2 focus:outline-none"
              placeholder="Job Title/Keyword"
            />
            <div className="flex w-full gap-2">
              <Select>
                <SelectTrigger className="h-10 flex-1">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="intern">Internships</SelectItem>
                  <SelectItem value="junior">Junior Level</SelectItem>
                  <SelectItem value="mid">Mid Level</SelectItem>
                  <SelectItem value="senior">Senior</SelectItem>
                </SelectContent>
              </Select>
              <button className="rounded-lg bg-secondary-400 px-6 text-white">
                <Search size="24" />
              </button>
            </div>
          </FadeIn>
        </FadeIn>

        <div className="mx-auto lg:w-[50%]">
          <FadeIn className="px-2 py-4 text-lg font-semibold">
            {data.length} Job Offers
          </FadeIn>

          <FadeIn className="pb-10">
            <Table>
              <TableBody>
                {data
                  ? data.map((d, idx) => (
                      <TableRow key={idx}>
                        <TableCell className="font-semibold">
                          {d.title}
                          <br />
                          {/* <span className="text-sm font-normal text-blue-500">
                            (
                            {
                              applicants.filter(
                                (applicant) =>
                                  applicant.vacancy.toString() ===
                                  d._id.toString(),
                              ).length
                            }{" "}
                            applicants )
                          </span> */}
                        </TableCell>
                        <TableCell>Full Time</TableCell>
                        <TableCell>{d.location}</TableCell>
                        <TableCell className="text-right">
                          {d.vacancyClosed ? (
                            <span className="flex items-center justify-center gap-1 rounded-full bg-red-100 px-2  py-1 font-medium text-red-600">
                              <CircleDot size={16} />
                              Closed
                            </span>
                          ) : (
                            <Button
                              className="border-secondary-400 text-secondary-400"
                              size="lg"
                              variant="outline"
                              asChild
                            >
                              <Link href={`/careers/${d._id}`}>Apply</Link>
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))
                  : null}
              </TableBody>
            </Table>
          </FadeIn>

          <div className="hidden max-w-full justify-center py-10 lg:justify-end">
            <button className="border border-secondary-600 p-2 text-ui-500 ">
              <ChevronLeft />
            </button>

            <button className="border border-secondary-600 bg-secondary-600 px-3 py-2 text-white">
              1
            </button>

            <button className="border border-secondary-600 px-3 py-2 text-ui-500">
              2
            </button>

            <button className="border border-secondary-600 px-3 py-2 text-ui-500">
              3
            </button>

            <button className="border border-secondary-600 px-3 py-2 text-ui-500">
              ...
            </button>
            <button className="border border-secondary-600 px-3 py-2 text-ui-500">
              10
            </button>
            <button className="border border-secondary-600 p-3 text-ui-500">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    );
  } catch (err) {
    return notFound();
  }
};

export default AvailableVacencies;
