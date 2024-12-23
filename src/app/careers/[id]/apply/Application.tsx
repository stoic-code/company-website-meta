"use client";
import React, { useState, useEffect } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { applicationSchema } from "@/schemas/applicationSchema";
import { useToast } from "@/components/ui/use-toast";
import Editor from "@/components/editor/Editor";
import FormErr from "@/components/form/FormErr";
import Locations from "@/app/locations.json";

type TApplicationSchema = z.infer<typeof applicationSchema>;

import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import LabelWithAsterik from "@/components/LabelWithAsterik";
import { ImageUploadBtn } from "./ImageUploadBtn";
import { CitizenShipUploadBtn } from "./CitizenShipUploadBtn";

const Application = ({ jobId }: { jobId: string }) => {
  const router = useRouter();
  const [coverLetter, setCoverLetter] = useState("");

  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [municipality, setMunicipality] = useState("");

  const { toast } = useToast();
  const {
    register,
    setValue,
    handleSubmit,
    trigger,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<TApplicationSchema>({
    resolver: zodResolver(applicationSchema),
    defaultValues: { fileType: "resume" },
  });

  useEffect(() => {
    setValue("jobId", jobId);
  }, []);

  useEffect(() => {
    setValue("coverLetter", coverLetter);
    if (coverLetter !== "") {
      trigger("coverLetter");
    }
  }, [coverLetter]);

  useEffect(() => {
    if (province?.length !== 0) {
      setValue(
        "province",
        Locations.provinceList.find((p) => p.name === province)?.name || "",
      );
      trigger("province");
    }
  }, [province]);

  useEffect(() => {
    if (province?.length !== 0) {
      setValue(
        "district",
        Locations.provinceList
          .find((p) => p.name === province)
          ?.districtList.find((d) => d.name === district)?.name || "",
      );
      trigger("district");
    }
  }, [district]);

  useEffect(() => {
    if (district?.length !== 0) {
      setValue(
        "local",
        Locations.provinceList
          .find((p) => p.name === province)
          ?.districtList.find((d) => d.name === district)
          ?.municipalityList.find((m) => m.name === municipality)?.name!,
      );
      trigger("local");
    }
  }, [municipality]);

  const onSubmit: SubmitHandler<TApplicationSchema> = async (data) => {
    console.log(data);
    try {
      const {
        firstName,
        lastName,
        email,
        contact,
        coverLetter,
        linkedIn,
        resume,
        citizenship_front,
        citizenship_back,
        image,
      } = data;
      const formData = new FormData();
      formData.append("jobId", jobId);
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("contact", contact);
      formData.append("coverLetter", coverLetter);
      formData.append("linkedIn", linkedIn as string);
      formData.append("resume", resume);
      formData.append("province", province);
      formData.append("district", district);
      formData.append("local", municipality);

      formData.append("image", image);
      formData.append("citizenship_front", citizenship_front);
      formData.append("citizenship_back", citizenship_back);

      const res = await fetch("/api/vacancy", {
        method: "POST",
        body: formData,
      });

      const res_data = await res.json();

      toast({
        title:
          res.status === 200
            ? "Submitted successfully !!"
            : "Oh no ! something went wrong.",
        description: res_data.message,
        variant: res.status === 200 ? "success" : "destructive",
      });
      if (res.status === 200) router.push("/careers");
    } catch (err) {
      toast({
        title: "Sonething went wrong",
        description:
          "Couldn't reach out to the server. Please try again later.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex flex-col gap-y-4 px-2 md:w-[60%]"
    >
      <h3 className="py-2 text-xl font-bold">Fill the form to apply</h3>
      <div className="flex gap-3">
        <div className="flex-1">
          <LabelWithAsterik>First Name</LabelWithAsterik>
          <Input {...register("firstName")} placeholder="Eg: John" />
          <p className="px-2 text-xs text-red-500">
            {errors.firstName ? errors.firstName.message : ""}
          </p>
        </div>
        <div className="flex-1">
          <LabelWithAsterik>Last Name</LabelWithAsterik>
          <Input {...register("lastName")} placeholder="Eg: Doe" />
          <p className="px-2 text-xs text-red-500">
            {errors.lastName ? errors.lastName.message : ""}
          </p>
        </div>
      </div>

      <div className="flex-1">
        <LabelWithAsterik>Email</LabelWithAsterik>
        <Input {...register("email")} placeholder="Eg: JohnDoe@gmail.com" />
        <p className="px-2 text-xs text-red-500">
          {errors.email ? errors.email.message : ""}
        </p>
      </div>

      <div className="py-4">
        <LabelWithAsterik className="block pb-2 text-lg">
          Current Address
        </LabelWithAsterik>

        <div className="flex flex-col flex-nowrap gap-4 md:flex-row ">
          <div className="flex-1">
            <LabelWithAsterik>Province</LabelWithAsterik>
            <select
              className="select w-full"
              name=""
              id=""
              onChange={(e) => {
                setProvince(e.target.value);
              }}
              defaultValue={province}
            >
              <option value="" disabled>
                Select a Province
              </option>
              {Locations.provinceList.map((province) => (
                <option key={province.id} value={province.name}>
                  {province.name}
                </option>
              ))}
            </select>
            <FormErr>{errors.province?.message}</FormErr>
          </div>
          <div className="flex-1">
            <LabelWithAsterik>District</LabelWithAsterik>
            <select
              className="select w-full"
              name=""
              id=""
              onChange={(e) => {
                setDistrict(e.target.value);
              }}
              defaultValue={district}
            >
              <option value="" disabled>
                Select District
              </option>
              {province
                ? Locations.provinceList
                    .find((p) => p.name === province)
                    ?.districtList.map((district) => (
                      <option key={district.id} value={district.name}>
                        {district.name}
                      </option>
                    ))
                : null}
            </select>
            <FormErr>{errors.district?.message}</FormErr>
          </div>
          <div className="flex-1">
            <LabelWithAsterik>Local Address</LabelWithAsterik>
            <select
              className="select w-full"
              name=""
              id=""
              onChange={(e) => {
                setMunicipality(e.target.value);
              }}
              defaultValue={municipality}
            >
              <option value="" disabled>
                Select Local Address
              </option>
              {province && district
                ? Locations.provinceList
                    .find((p) => p.name === province)
                    ?.districtList.find((d) => d.name === district)
                    ?.municipalityList.map((mun) => (
                      <option key={mun.id} value={mun.name}>
                        {mun.name}
                      </option>
                    ))
                : null}
            </select>
            <FormErr>{errors.local?.message}</FormErr>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <div className="flex-1">
          <LabelWithAsterik>Contact</LabelWithAsterik>
          <Input
            type="string"
            {...register("contact")}
            placeholder="Eg: 98xxxxxxxx"
          />
          <p className="px-2 text-xs text-red-500">
            {errors.contact ? errors.contact.message : ""}
          </p>
        </div>
        <div className="flex-1">
          <Label>LinkedIn Profile</Label>
          <Input
            {...register("linkedIn")}
            placeholder="Eg: https://linkedin.com/user"
          />
          <p className="px-2 text-xs text-red-500">
            {errors.linkedIn ? errors.linkedIn.message : ""}
          </p>
        </div>
      </div>

      <div className="flex gap-8 py-5">
        <div className="flex items-center gap-1">
          <input
            id="resume"
            type="radio"
            value="resume"
            {...register("fileType")}
          />
          <Label htmlFor="resume">Resume</Label>
        </div>
        <div className="flex items-center gap-1">
          <input
            id="documents"
            type="radio"
            value="document"
            {...register("fileType")}
          />
          <Label htmlFor="documents">Documents</Label>
        </div>
      </div>

      {watch("fileType") === "resume" ? (
        <div>
          <LabelWithAsterik>Upload CV </LabelWithAsterik>
          <Input
            onChange={(e) => {
              if (e.target.files) {
                const file = e.target.files[0];
                setValue("resume", file);
                trigger("resume");
              }
            }}
            accept=".pdf, .doc, .docx, .txt"
            type="file"
          />
          <p className="px-2 text-xs text-red-500">
            {errors.resume?.message
              ? (errors.resume.message as React.ReactNode)
              : ""}
          </p>
        </div>
      ) : (
        <div className="space-y-4 py-3">
          <div>
            <p className="font-medium">
              Photo <span className="text-destructive">*</span>
            </p>
            <div>
              <ImageUploadBtn setValue={setValue} trigger={trigger} />
            </div>
            <FormErr>{errors.image?.message as string}</FormErr>
          </div>
          <div>
            <p className="font-medium">
              Citizenship <span className="text-destructive">*</span>
            </p>
            <div className="flex gap-2">
              <div>
                <CitizenShipUploadBtn
                  setValue={setValue}
                  trigger={trigger}
                  name="citizenship_front"
                />
                <FormErr>{errors.citizenship_front?.message as string}</FormErr>
              </div>
              <div>
                <CitizenShipUploadBtn
                  setValue={setValue}
                  trigger={trigger}
                  name="citizenship_back"
                />
                <FormErr>{errors.citizenship_back?.message as string}</FormErr>
              </div>
            </div>
          </div>
        </div>
      )}

      <div>
        <LabelWithAsterik>Cover Letter</LabelWithAsterik>
        <p className="pb-2 text-xs font-normal text-ui-400">
          You can select text and format as you wish.
        </p>
        <Editor setValue={setCoverLetter} value={coverLetter} />
        <p className="px-2 text-xs text-red-500">
          {errors.coverLetter ? errors.coverLetter.message : ""}
        </p>
      </div>
      <Button disabled={isSubmitting} size="lg" className="w-fit self-center">
        {isSubmitting ? (
          <span className="flex gap-2">
            <Loader2 className="animate-spin" />
            Submitting
          </span>
        ) : (
          "Submit Application"
        )}
      </Button>
    </form>
  );
};

export default Application;
