import React from "react";
import connectDB from "@/utils/connectDB";
import Partnership from "@/models/Partner";
import { notFound } from "next/navigation";
import { setPartnershipRead } from "@/actions/partnership.action";
import { dateFormatterWithTime } from "@/lib/dateConverter";

const page = async ({ params }: { params: { id: string } }) => {
  await connectDB();
  const { id } = params;
  const partner = await Partnership.findById(id);
  setPartnershipRead(id);

  if (!partner) return notFound();

  return (
    <div className="min-h-screen pb-10 pt-20">
      <ul className="list-inside list-disc">
        <li>Full Name : {partner.fullName}</li>
        <li>Email : {partner.email}</li>
        <li>Contact : {partner.contact}</li>
        <li>Province : {partner.province}</li>
        <li>District : {partner.district}</li>
        <li>Local Address : {partner.local}</li>
      </ul>

      <h1 className="my-3 text-3xl">Experiences and skills</h1>

      <ul className="space-y-3">
        <li>
          <p>
            <span className="font-semibold">
              Briefly describe your professional background and experience :
            </span>{" "}
            {partner.experiences.experience}
          </p>
          {partner.experiences.other && <p> {partner.experiences.other}</p>}
        </li>

        <li>
          <span className="font-semibold">
            Business Development Experience :
          </span>{" "}
          {partner.salesExperience}
        </li>

        <li>
          <p className="font-semibold">
            What specific skills or expertise do you bring to this partnership?{" "}
          </p>
          <ul className="list-inside list-decimal">
            {partner.skills.skill.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          {partner.skills.other && <p>{partner.skills.other}</p>}
        </li>
      </ul>

      <h1 className="my-3 text-3xl">Partnership Details</h1>

      <div className="space-y-4">
        <div>
          <p className="font-semibold">
            Why are you interested in becoming a partner with MetaLogic?
          </p>
          <ul className="list-inside list-decimal">
            {partner.interests.interest.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          {partner.interests.other && <p>{partner.interests.other}</p>}
        </div>

        <div>
          <p className="font-semibold">
            How do you plan to source and bring projects to MetaLogic?
          </p>
          <ul className="list-inside list-decimal">
            {partner.sourcings.sourcing.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          {partner.sourcings.other && <p>{partner.sourcings.other}</p>}
        </div>

        <div>
          <p className="font-semibold">
            What industries or sectors do you have connections or experience in?
          </p>
          <ul className="list-inside list-decimal">
            {partner.industries.industry.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          {partner.industries.other && <p>{partner.industries.other}</p>}
        </div>

        <div>
          <p className="font-semibold">
            In what ways do you envision contributing to MetaLogic's growth and
            success as a partner?
          </p>
          <ul className="list-inside list-decimal">
            {partner.industries.industry.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          {partner.industries.other && <p>{partner.industries.other}</p>}
        </div>

        <div>
          <p className="font-semibold">Additional Information : </p>
          {partner.additionalInformation && (
            <p>{partner.additionalInformation}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
