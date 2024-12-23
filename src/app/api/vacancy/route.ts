import { NextRequest, NextResponse } from "next/server";
import { formDataToObject } from "@/lib/form";
import { getCloudflareUrl, getAuthKeySecret } from "@/constants";
import { nanoid } from "nanoid";
import connectDB from "@/utils/connectDB";
import { revalidatePath } from "next/cache";
import Applicant from "@/models/Applicant";

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();
  const data = formDataToObject(formData);
  console.log("DATA:", data);

  const {
    resume,
    firstName,
    lastName,
    email,
    contact,
    linkedIn,
    coverLetter,
    jobId,
    district,
    province,
    local,
    citizenship_back,
    citizenship_front,
    image,
    fileType,
  } = data;

  const baseUrl = getCloudflareUrl();
  const generateUrl = (filename: string) =>
    `${baseUrl}/metalogic/documents/${filename}-${nanoid()}`;

  const resume_url = generateUrl(`${firstName}-${lastName}-resume`);
  const image_url = generateUrl(`${firstName}-${lastName}-image`);
  const citizenship_front_url = generateUrl(
    `${firstName}-${lastName}-citizenship-front`,
  );
  const citizenship_back_url = generateUrl(
    `${firstName}-${lastName}-citizenship-back`,
  );

  await connectDB();

  try {
    const previousApplicant = await Applicant.findOne({
      email: data.email,
      vacancy: data.jobId,
    });

    if (previousApplicant) {
      return NextResponse.json(
        {
          message:
            "Your application is currently under review. We'll carefully assess your qualifications and get back to you shortly",
        },
        { status: 200 },
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Internal Server Error !",
      },
      { status: 500 },
    );
  }

  const uploadFile = async (url: string, file: any) => {
    if (file) {
      try {
        await fetch(url, {
          body: file,
          method: "PUT",
          headers: { "X-Custom-Auth-Key": getAuthKeySecret() },
        });
      } catch (err) {
        console.log(err);
        throw new Error(`Couldn't upload file to ${url}`);
      }
    }
  };

  try {
    await uploadFile(resume_url, resume);

    if (fileType !== "resume") {
      await uploadFile(image_url, image);
      await uploadFile(citizenship_front_url, citizenship_front);
      await uploadFile(citizenship_back_url, citizenship_back);
    }

    const applicant = {
      firstName,
      lastName,
      email,
      contact,
      linkedIn,
      coverLetter,
      vacancy: jobId,
      province,
      district,
      local,
      resume: fileType === "resume" ? resume_url : undefined,
      image: fileType !== "resume" ? image_url : undefined,
      citizenship_front:
        fileType !== "resume" ? citizenship_front_url : undefined,
      citizenship_back:
        fileType !== "resume" ? citizenship_back_url : undefined,
    };

    const newDoc = new Applicant(applicant);
    const savedDoc = await newDoc.save();
    revalidatePath("/admin/jobs");
    revalidatePath("/admin/applicants");
    console.log("SAVED:", savedDoc);
    return NextResponse.json(
      {
        message:
          "You're all set! Your application has been submitted. We're excited to consider you for the position.",
      },
      { status: 200 },
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        message: "Couldn't submit the form. Please try again later.",
      },
      { status: 500 },
    );
  }
};
