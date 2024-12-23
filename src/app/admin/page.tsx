import React from "react";
import Applicant from "@/models/Applicant";
import { notFound } from "next/navigation";
import connectDB from "@/utils/connectDB";
import { RichContentPreview } from "@/components/editor/Editor";
import Status from "./Status";
import { changeOpenedStatus } from "@/actions/applicant.action";

const page = async ({ params }: { params: { id: string } }) => {
  await connectDB();
  const applicant = await Applicant.findById(params.id).populate("vacancy");
  console.log(applicant);

  if (!applicant) return notFound();
  try {
    await changeOpenedStatus(params.id);
  } catch (err) {
    return notFound();
  }

  return (
    <div className="py-20">
      <div className="flex justify-between">
        <div className="">
          <h2 className="text-2xl font-bold">{`${applicant.firstName} ${applicant.lastName}`}</h2>
          <p>
            <span className="font-bold">JobTitle :</span>{" "}
            {applicant.vacancy ? (
              applicant.vacancy.title
            ) : (
              <span className="text-red-400">Deleted Job</span>
            )}
          </p>

          <ul className="py-4">
            <li>
              <span className="font-bold">Email :</span> {applicant.email}
            </li>
            <li>
              <span className="font-bold">Contact :</span> {applicant.contact}
            </li>
            <li>
              <span className="font-bold">Province :</span> {applicant.province}
            </li>
            <li>
              <span className="font-bold">District :</span> {applicant.district}
            </li>
            <li>
              <span className="font-bold">Local :</span> {applicant.local}
            </li>
            <li>
              <span className="font-bold">LinkedIn :</span> {applicant.linkedin}
            </li>
          </ul>

          <div>
            <p>{applicant.coverletter}</p>
          </div>
        </div>
        <Status status={applicant.status} applicantId={params.id} />
      </div>
      <h3 className="text-xl font-bold">Cover Letter</h3>
      <RichContentPreview html={applicant.coverLetter} />
      <embed src={applicant.resume} width="100%" height="720px" />
    </div>
  );
};

export default page;
