"use client";
import React, { useState } from "react";
import Editor, { RichContentPreview } from "@/components/editor/Editor";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { editVacancy } from "@/actions/jobs.actions";
import { useToast } from "@/components/ui/use-toast";
import { dateFormatter } from "@/lib/dateConverter";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type TDataType = {
  id: any;
  title: string;
  noOfPosition: 1;
  category: string;
  jobDescription: string;
  qualification: string;
  responsibilities: string;
  expiresIn: string;
  level: string;
  location: string;
  vacancyClosed: boolean;
};

const EditClient: React.FC<TDataType> = (data) => {
  const formattedDate = dateFormatter(data.expiresIn);
  const { toast } = useToast();
  const [title, setTitle] = useState(data.title);
  const [vacancyClosed, setVacancyClosed] = useState(data.vacancyClosed);
  const [category, setCategory] = useState(data.category);
  const [expiryDate, setExpiryDate] = useState(formattedDate);
  const [noOfVacancy, setNoOfVacancy] = useState<number>(data.noOfPosition);
  const [jobDescription, setJobDescription] = useState(data.jobDescription);
  const [qualification, setQualification] = useState(data.qualification);
  const [responsibilities, setResponsibilities] = useState(
    data.responsibilities,
  );
  const [level, setLevel] = useState(data.level);
  const [location, setLocation] = useState(data.location);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const res = await editVacancy(data.id, {
      title,
      noOfVacancy: String(noOfVacancy),
      category,
      jobDescription,
      qualification,
      responsibilities,
      expiresIn: expiryDate,
      level,
      location,
      vacancyClosed,
    });
    toast({
      title: res.message,
      description: res.desc ? res.desc : "",
      variant: res.success ? "success" : "destructive",
    });
    setLoading(false);
  };

  return (
    <div className="container my-12 grid w-full grid-cols-2 gap-8">
      <div>
        <div className="flex justify-end gap-2">
          <input
            id="expired"
            type="checkbox"
            checked={vacancyClosed}
            onChange={() => setVacancyClosed(!vacancyClosed)}
          />
          <Label htmlFor="expired">Expired</Label>
        </div>
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
              setNoOfVacancy(Number(e.target.value));
            }}
            value={noOfVacancy}
            type="number"
            placeholder="Eg: 10"
          />
        </div>

        <div className="w-fit">
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
          <Label>Select Level of the Vacancy</Label>
          <Select
            onValueChange={(e) => {
              setLevel(e);
            }}
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
            <Editor value={jobDescription} setValue={setJobDescription} />
          </div>

          <div>
            <Label>Responsibilities</Label>
            <Editor value={responsibilities} setValue={setResponsibilities} />
          </div>

          <div>
            <Label>Qualifications</Label>
            <Editor value={qualification} setValue={setQualification} />
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

export default EditClient;
