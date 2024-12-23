"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { createNewVacancy } from "@/actions/jobs.actions";
import { useToast } from "@/components/ui/use-toast";
import AdminEditor from "@/components/editor/AdminEditor";
import dynamic from "next/dynamic";

const RichContentPreview = dynamic(
  () =>
    import("@/components/editor/Editor").then((mod) => mod.RichContentPreview),
  { ssr: false },
);

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const page = () => {
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [noOfVacancy, setNoOfVacancy] = useState("");
  const [loading, setLoading] = useState(false);
  const [jobDescription, setJobDescription] = useState("");
  const [qualification, setQualification] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [location, setLocation] = useState("");
  const [level, setLevel] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    const res = await createNewVacancy({
      title,
      category,
      jobDescription,
      qualification,
      responsibilities,
      expiresIn: expiryDate,
      noOfVacancy,
      location,
      level,
    });
    toast({
      title: res.message,
      description: res.desc ? res.desc : "",
      variant: res.success ? "success" : "destructive",
    });
    setLoading(false);
    setTitle("");
    setCategory("");
    setJobDescription("");
    setQualification("");
    setResponsibilities("");
    setExpiryDate("");
    setNoOfVacancy("");
    setLocation("");
    setLevel("");
  };

  return (
    <div className="container my-12 grid w-full grid-cols-2 gap-8">
      <div>
        <div className="">
          <Label>Job Title</Label>
          <Input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            placeholder="Eg: Product Designer"
          />
        </div>

        <div className="">
          <Label>Category</Label>
          <Input
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            placeholder="Eg: Designing/IT"
            value={category}
          />
        </div>

        <div className="w-fit">
          <Label>No of Vacancy</Label>
          <Input
            onChange={(e) => {
              setNoOfVacancy(e.target.value);
            }}
            value={noOfVacancy}
            type="number"
            placeholder="Eg: 10"
          />
        </div>

        <div className="w-fit">
          <Label>Select Level of the Vacancy</Label>
          <Select
            onValueChange={(e) => {
              setLevel(e);
            }}
            value={level}
          >
            <SelectTrigger>
              <SelectValue placeholder="Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="internship">Internship</SelectItem>
              <SelectItem value="junior">Junior Level</SelectItem>
              <SelectItem value="mid">Mid Level</SelectItem>
              <SelectItem value="senior">Senior Level</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Location</Label>
          <Input
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            value={location}
            placeholder="Eg: Kathmandu"
          />
        </div>
        <div className="w-fit">
          <Label>Expires In</Label>
          <Input
            onChange={(e) => {
              setExpiryDate(e.target.value);
            }}
            value={expiryDate}
            type="date"
            placeholder="Eg: Product Designer"
          />
        </div>

        <div className="flex flex-col gap-8 py-8">
          <div>
            <Label>Job Description</Label>
            <AdminEditor value={jobDescription} setValue={setJobDescription} />
          </div>

          <div>
            <Label>Responsibilities</Label>
            <AdminEditor
              value={responsibilities}
              setValue={setResponsibilities}
            />
          </div>

          <div>
            <Label>Qualifications</Label>
            <AdminEditor value={qualification} setValue={setQualification} />
          </div>
        </div>
        <Button className="my-4" disabled={loading} onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      <div className="border">
        <p className="font-semibold text-ui-700">Preview</p>

        <div className="py-4">
          <div className="flex flex-col gap-4 bg-all-blogs bg-cover bg-no-repeat py-12 text-center text-white">
            <h5 className="text-xl font-semibold text-red-300">
              Level :{" "}
              {level == "junior"
                ? "Junior Level"
                : level == "senior"
                  ? "Senior Level"
                  : level == "internship"
                    ? "Internship"
                    : level == "mid"
                      ? "Mid Level"
                      : ""}
            </h5>
            <h5 className="text-xl font-semibold text-yellow-300">
              Location : {location}
            </h5>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p>
              <span className="font-bold">No of Vacancies:</span> {noOfVacancy}
            </p>
            <p>{category}</p>
          </div>

          <div className="px-2">
            <div className="py-4">
              <span className="font-semibold">Application Deadline :</span>{" "}
              <span>{expiryDate}</span>
            </div>

            <div className="flex flex-col gap-4 px-4">
              <div>
                <h5 className="py-4 text-xl font-bold text-primary">
                  Job Description
                </h5>
                <div>
                  <RichContentPreview html={jobDescription} />
                </div>
              </div>
              <div>
                <h5 className="py-8 text-xl font-bold text-primary">
                  Responsibilities
                </h5>
                <div>
                  <RichContentPreview html={responsibilities} />
                </div>
              </div>

              <div>
                <h5 className="py-8 text-xl font-bold text-primary">
                  Qualifications
                </h5>
                <div>
                  <RichContentPreview html={qualification} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
