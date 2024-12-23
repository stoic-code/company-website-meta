"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import Locations from "@/app/locations.json";

import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  partnershipFormSchema,
  TPartnershipForm,
} from "@/schemas/partnerForm.schema";
import { Loader2 } from "lucide-react";

import LabelWithAsterik from "@/components/LabelWithAsterik";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import FormErr from "@/components/form/FormErr";

import { addPartnership } from "@/actions/partnership.action";

const skills = [
  { id: "22", title: "Business development" },
  { id: "23", title: "Marketing" },
  { id: "24", title: "Technical expertise" },
  { id: "25", title: "Creativity and innovation" },
  { id: "26", title: "Leadership and teamwork" },
  { id: "27", title: "Other" },
];
const contributions = [
  { id: "51", title: "Bringing in new clients and projects" },
  {
    id: "52",
    title: "Providing valuable insights and feedback for product improvement",
  },
  {
    id: "53",
    title: "Collaborating with the MetaLogic team on marketing initiatives",
  },
  {
    id: "54",
    title: "Other",
  },
];

const previousExperience = [
  { id: "11", title: "Fresh graduate looking to kickstart my career" },
  { id: "12", title: "Mid-level professional with some industry experience" },
  { id: "13", title: "Seasoned expert with years of proven success" },
  { id: "14", title: "Other" },
];

const interests = [
  { id: "61", title: "Opportunity for additional income" },
  { id: "62", title: "Access to cutting-edge technology solutions" },
  { id: "63", title: "Enhance service offerings" },
  { id: "64", title: "Other" },
];

const sources = [
  { id: "71", title: "Networking Event" },
  { id: "72", title: "Cold outreach" },
  { id: "73", title: "Existing client base" },
  { id: "74", title: "Other" },
];

const industries = [
  { id: "81", title: "Technology" },
  { id: "82", title: "Healthcare" },
  { id: "83", title: "Finance" },
  { id: "84", title: "Other" },
];

const Form = () => {
  const { toast } = useToast();
  const router = useRouter();

  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [municipality, setMunicipality] = useState("");

  const {
    register,
    watch,
    setValue,
    trigger,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TPartnershipForm>({
    resolver: zodResolver(partnershipFormSchema),
  });

  useEffect(() => {
    if (province.length !== 0) {
      setValue("province", Locations.provinceList[Number(province)].name || "");
      trigger("province");
    }
  }, [province]);

  useEffect(() => {
    if (province.length !== 0) {
      setValue(
        "district",
        Locations.provinceList[Number(province)].districtList[Number(district)]
          .name || "",
      );
      trigger("district");
    }
  }, [district]);

  useEffect(() => {
    if (district.length !== 0) {
      setValue(
        "local",
        Locations.provinceList[Number(province)].districtList[Number(district)]
          .municipalityList[Number(municipality)].name,
      );
      trigger("local");
    }
  }, [municipality]);

  const onSubmit = async (data: TPartnershipForm) => {
    console.log(data);
    const { success, message } = await addPartnership(data);
    toast({
      variant: success ? "success" : "destructive",
      title: success
        ? "Thank You for partnering us. 🎉"
        : "Sorry something went wrong. 🚫",
      description: message,
    });
    if (success) router.push("/");
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <FadeIn
      id="form"
      className="rounded-xl border border-dotted border-primary p-4 md:py-0"
    >
      <form
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="rounded-xl"
      >
        <FadeIn className="my-8">
          <div className="flex flex-col gap-4 p-0">
            <LabelWithAsterik className="block text-xl">
              Basic Information
            </LabelWithAsterik>
            <div className="flex-1">
              <div className="flex flex-col gap-3">
                <LabelWithAsterik>Full Name</LabelWithAsterik>
                <Input
                  {...register("fullName")}
                  className="focus:ring-none  font-normal  text-neutral-800 focus:outline-none"
                  placeholder="Eg: Ram Bahadur Thapa"
                />
              </div>

              <p className="text-xs text-red-500">
                {errors ? errors.fullName?.message : ""}
              </p>
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <div className="flex flex-1 flex-col gap-3">
                  <LabelWithAsterik>Email</LabelWithAsterik>

                  <Input
                    {...register("email")}
                    className="focus:ring-none  font-normal  text-neutral-800 focus:outline-none"
                    placeholder="Eg: ram@mail.com"
                  />
                </div>

                <p className="text-xs text-red-500">
                  {errors ? errors.email?.message : ""}
                </p>
              </div>

              <div className="flex-1">
                <div className="flex flex-1 flex-col gap-3">
                  <LabelWithAsterik>Contact</LabelWithAsterik>

                  <Input
                    {...register("contact")}
                    className="focus:ring-none  font-normal  text-neutral-800 focus:outline-none"
                    placeholder="Eg: 98xxxxxxxx"
                  />
                </div>

                <p className="text-xs text-red-500">
                  {errors ? errors.contact?.message : ""}
                </p>
              </div>
            </div>

            <div>
              <LabelWithAsterik className="my-4 block text-xl">
                Current Address
              </LabelWithAsterik>
              <div className="flex flex-col gap-3 md:flex-row">
                <div className="flex-1">
                  <Label>Province</Label>
                  <select
                    className="select w-full"
                    onChange={(e) => {
                      setProvince(e.target.value);
                    }}
                    defaultValue={province}
                  >
                    <option value="" disabled>
                      Select Province
                    </option>
                    {Locations.provinceList.map((province, index) => (
                      <option key={province.id} value={index}>
                        {province.name}
                      </option>
                    ))}
                  </select>
                  <FormErr>{errors.province?.message}</FormErr>
                </div>
                <div className="flex-1">
                  <Label>District</Label>
                  <select
                    className="select w-full"
                    onChange={(e) => {
                      setDistrict(e.target.value);
                    }}
                    defaultValue={district}
                  >
                    <option value="" disabled>
                      Select District
                    </option>
                    {province
                      ? Locations.provinceList[
                        Number(province)
                      ].districtList.map((district, index) => (
                        <option key={district.id} value={index}>
                          {district.name}
                        </option>
                      ))
                      : null}
                  </select>
                  <FormErr>{errors.district?.message}</FormErr>
                </div>

                <div className="flex-1">
                  <Label>Municipality/Local Level</Label>
                  <select
                    className="select w-full"
                    onChange={(e) => {
                      setMunicipality(e.target.value);
                    }}
                    defaultValue={municipality}
                  >
                    <option value="" disabled>
                      Select Municipality
                    </option>
                    {province && district
                      ? Locations.provinceList[Number(province)].districtList[
                        Number(district)
                      ].municipalityList.map((mun, index) => (
                        <option key={mun.id} value={index}>
                          {mun.name}
                        </option>
                      ))
                      : null}
                  </select>
                  <FormErr>{errors.local?.message}</FormErr>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <LabelWithAsterik className="my-4 block text-xl">
                Experience & Skills
              </LabelWithAsterik>
              <ul className="list-inside list-decimal space-y-3">
                <li>
                  <Label className="font-semibold" htmlFor="experience">
                    Briefly describe your professional background and experience
                  </Label>
                  <ul className="flex flex-col gap-4 pt-3">
                    {previousExperience.map((exp) => (
                      <li key={exp.id} className="flex items-center gap-2">
                        <input
                          {...register("experiences.experience")}
                          id={exp.id}
                          type="radio"
                          value={exp.title}
                        />
                        <Label htmlFor={exp.id}>{exp.title}</Label>
                      </li>
                    ))}
                  </ul>
                  {watch("experiences.experience") === "Other" && (
                    <Textarea
                      {...register("experiences.other")}
                      className="mt-2 md:w-1/2"
                      placeholder="Please specify ..."
                    />
                  )}
                  <FormErr className="pt-4">
                    {errors.experiences?.experience?.message}
                  </FormErr>
                  <br />
                </li>

                <li>
                  <Label className="font-semibold" htmlFor="salesExperience">
                    Do you have previous experience in sales or business
                    development?
                  </Label>
                  <ul className="flex gap-4 pt-3">
                    <li className="flex items-center gap-2">
                      <input
                        {...register("salesExperience")}
                        id="yes"
                        type="radio"
                        value="true"
                      />
                      <Label htmlFor="yes">Yes</Label>
                    </li>
                    <li className="flex items-center gap-2">
                      <input
                        {...register("salesExperience")}
                        id="no"
                        type="radio"
                        value="false"
                      />
                      <Label htmlFor="no">No</Label>
                    </li>
                  </ul>
                  <FormErr className="pt-2">
                    {errors?.salesExperience?.message}
                  </FormErr>
                  <br />
                </li>

                <li>
                  <Label className="font-semibold" htmlFor="skills">
                    What specific skills or expertise do you bring to this
                    partnership? (Select all that apply)
                  </Label>

                  <ul className="mt-2 space-y-2">
                    {skills.map((skill) => (
                      <li key={skill.id} className="space-x-2">
                        <input
                          id={skill.id}
                          type="checkbox"
                          value={skill.title}
                          {...register("skills.skill")}
                        />
                        <Label htmlFor={skill.id}>{skill.title}</Label>
                      </li>
                    ))}
                  </ul>
                  {watch("skills.skill") &&
                    watch("skills.skill").includes("Other") && (
                      <Textarea
                        {...register("skills.other")}
                        className="mt-2 md:w-1/2"
                        placeholder="Please specify ..."
                      />
                    )}
                </li>
                <FormErr>{errors.skills?.skill?.message}</FormErr>
              </ul>
            </div>

            <div>
              <LabelWithAsterik className="my-4 block text-xl">
                Partnership Details
              </LabelWithAsterik>

              <ul className="list-inside list-decimal space-y-3">
                <li>
                  <Label className="font-semibold" htmlFor="interest">
                    Why are you interested in becoming a partner with MetaLogic?
                    (Select all that apply)
                  </Label>
                  <br />
                  <ul className="my-3 space-y-2">
                    {interests.map((item) => (
                      <li key={item.id} className="space-x-2">
                        <input
                          {...register("interests.interest")}
                          id={item.id}
                          type="checkbox"
                          value={item.title}
                        />
                        <Label htmlFor={item.id}>{item.title}</Label>
                      </li>
                    ))}
                  </ul>

                  {watch("interests.interest") &&
                    watch("interests.interest").includes("Other") && (
                      <Textarea
                        {...register("interests.other")}
                        className="md:w-1/2"
                        placeholder="Please specify ..."
                      />
                    )}
                  <FormErr>{errors.interests?.interest?.message}</FormErr>
                  <br />
                </li>

                <li>
                  <Label className="font-semibold" htmlFor="sourcing">
                    How do you plan to source and bring projects to MetaLogic?
                    (Select all that apply)
                  </Label>
                  <ul className="my-3 space-y-2">
                    {sources.map((item) => (
                      <li key={item.id} className="space-x-2">
                        <input
                          {...register("sourcings.sourcing")}
                          id={item.id}
                          type="checkbox"
                          value={item.title}
                        />
                        <Label htmlFor={item.id}>{item.title}</Label>
                      </li>
                    ))}
                  </ul>

                  {watch("sourcings.sourcing") &&
                    watch("sourcings.sourcing").includes("Other") && (
                      <Textarea
                        {...register("sourcings.other")}
                        className="md:w-1/2"
                        placeholder="Please specify ..."
                      />
                    )}
                  <FormErr>{errors.sourcings?.sourcing?.message}</FormErr>
                  <br />
                </li>

                <li>
                  <Label className="font-semibold" htmlFor="industries">
                    What industries or sectors do you have connections or
                    experience in? (Select all that apply)
                  </Label>
                  <ul className="my-3 space-y-2">
                    {industries.map((item) => (
                      <li key={item.id} className="space-x-2">
                        <input
                          id={item.id}
                          type="checkbox"
                          value={item.title}
                          {...register("industries.industry")}
                        />
                        <Label htmlFor={item.id}>{item.title}</Label>
                      </li>
                    ))}
                  </ul>

                  {watch("industries.industry") &&
                    watch("industries.industry").includes("Other") && (
                      <Textarea
                        {...register("industries.other")}
                        className="md:w-1/2"
                        placeholder="Please specify ..."
                      />
                    )}
                  <FormErr>{errors.industries?.industry?.message}</FormErr>
                  <br />
                </li>

                <li>
                  <Label className="font-semibold" htmlFor="contrubution">
                    In what ways do you envision contributing to MetaLogic's
                    growth and success as a partner? (Select all that apply)
                  </Label>

                  <ul className="flex flex-col gap-4 pt-3">
                    {contributions.map((item) => (
                      <li key={item.id} className="flex items-center gap-2">
                        <input
                          {...register("contributions.contribution")}
                          id={item.id}
                          type="checkbox"
                          value={item.title}
                        />
                        <Label htmlFor={item.id}>{item.title}</Label>
                      </li>
                    ))}
                  </ul>

                  {watch("contributions.contribution") &&
                    watch("contributions.contribution").includes("Other") && (
                      <Textarea
                        {...register("contributions.other")}
                        className="mt-4 md:w-1/2"
                        placeholder="Please specify ..."
                      />
                    )}
                  <FormErr className="pt-4">
                    {errors.contributions?.contribution?.message}
                  </FormErr>
                  <br />
                </li>

                <li>
                  <Label className="font-semibold" htmlFor="contrubution">
                    Are you referred by someone to partner with MetaLogic?
                  </Label>

                  <ul className="flex gap-4 pt-3">
                    <li className="flex items-center gap-2">
                      <input
                        {...register("refered")}
                        id="refered-yes"
                        type="radio"
                        value="true"
                      />
                      <Label htmlFor="refered-yes">Yes</Label>
                    </li>
                    <li className="flex items-center gap-2">
                      <input
                        {...register("refered")}
                        id="refered-no"
                        type="radio"
                        value="false"
                      />
                      <Label htmlFor="refered-no">No</Label>
                    </li>
                  </ul>
                  <FormErr className="pt-4">{errors.refered?.message}</FormErr>
                  <br />
                </li>
                {watch("refered") === "true" && (
                  <li>
                    <LabelWithAsterik
                      className="font-semibold"
                      htmlFor="contrubution"
                    >
                      Enter the name of Referer.
                    </LabelWithAsterik>
                    <Input
                      className="mt-2"
                      placeholder="Eg: Bhakta Godar Thapa"
                      {...register("referer")}
                    />
                    <FormErr className="pt-1">
                      {errors.referer?.message}
                    </FormErr>
                    <br />
                  </li>
                )}
              </ul>
            </div>

            <div>
              <div className="flex flex-col gap-3">
                <Label>Additional Information</Label>
                <Textarea
                  rows={5}
                  {...register("additionalInformation")}
                  className="focus:ring-none  font-normal  text-neutral-800 focus:outline-none"
                  placeholder="Anything particular we should know ?"
                />
              </div>
              <p className="text-xs text-red-500">
                {errors ? errors.additionalInformation?.message : ""}
              </p>
            </div>
            <div>
              <div className="flex items-start gap-3">
                <input id="agree" {...register("agree")} type="checkbox" />
                <Label htmlFor="agree">
                  I have read all the terms and contitions of Metalogic Software
                  Pvt Ltd & agree to all the{" "}
                  <Link
                    href="/tos"
                    className="text-blue-800 underline underline-offset-2"
                  >
                    Terms and Conditions
                  </Link>
                  .
                </Label>
              </div>
              <p className="px-6 py-1 text-xs text-red-500">
                {errors ? errors.agree?.message : ""}
              </p>
            </div>
          </div>
          <div className="w-full py-3">
            <Button disabled={isSubmitting} className="">
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 size={20} className="animate-spin" />
                  Submitting
                </span>
              ) : (
                "submit"
              )}
            </Button>
          </div>
        </FadeIn>
      </form>
    </FadeIn>
  );
};

export default Form;
