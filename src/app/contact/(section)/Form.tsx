"use client";
import React, { useRef } from "react";
import { FadeIn } from "@/components/FadeIn";
import { useToast } from "@/components/ui/use-toast";
import LabelWithAsterik from "@/components/LabelWithAsterik";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TContactForm, contactFormSchema } from "@/schemas/contactForm.schema";
import { Loader2 } from "lucide-react";

import emailjs from "@emailjs/browser";
import {
  getPublicKey,
  getServiceID,
  getTemplateId,
} from "../(constants)/getFormCredentials";

import { addMessage } from "@/actions/message.action";

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TContactForm>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: TContactForm) => {
    const res = await addMessage(data);
    if (res.success) {
      reset();
      toast({
        title: "Thank You for contacting us. 🎉",
        description:
          "We've got your inquiry and are on it! Expect a response soon. Your thoughts matter to us! 🤝",
        variant: "success",
      });
    } else {
      toast({
        title: "Sorry something went wrong. 🚫",
        description:
          "Looks like there's a small glitch in the system. Please verify your information and resend your message. We're working to fix this issue! 🛠️",
      });
    }
  };

  return (
    <FadeIn className="px-2">
      <form
        ref={formRef}
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="rounded-xl bg-white md:w-[80%]"
      >
        <FadeIn className="rounded-xl border p-0">
          <CardHeader>
            <CardContent className="flex flex-col gap-4 p-0">
              <div className="flex-1">
                <div className="flex flex-col gap-3">
                  <LabelWithAsterik>Full Name</LabelWithAsterik>
                  <Input
                    {...register("fullName")}
                    className="focus:ring-none bg-gray-50 font-normal  text-neutral-800 focus:outline-none"
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
                      className="focus:ring-none bg-gray-50 font-normal  text-neutral-800 focus:outline-none"
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
                      className="focus:ring-none bg-gray-50 font-normal  text-neutral-800 focus:outline-none"
                      placeholder="Eg: 98xxxxxxxx"
                    />
                  </div>

                  <p className="text-xs text-red-500">
                    {errors ? errors.contact?.message : ""}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <div className="flex-1">
                  <div className="flex flex-1 flex-col gap-3">
                    <Label>Company Name</Label>

                    <Input
                      {...register("companyName")}
                      className="focus:ring-none bg-gray-50 font-normal  text-neutral-800 focus:outline-none"
                      placeholder="Eg : Metalogic Pvt Ltd"
                    />
                  </div>

                  <p className="text-xs text-red-500">
                    {errors ? errors.companyName?.message : ""}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col gap-3">
                    <Label>Company Location</Label>
                    <Input
                      {...register("companyLocation")}
                      className="focus:ring-none bg-gray-50 font-normal  text-neutral-800 focus:outline-none"
                      placeholder="Eg: Lalitpur, Nepal"
                    />
                  </div>
                  <p className="text-xs text-red-500">
                    {errors ? errors.companyLocation?.message : ""}
                  </p>
                </div>
              </div>

              <div>
                <div className="flex flex-col gap-3">
                  <LabelWithAsterik>Description</LabelWithAsterik>
                  <Textarea
                    rows={5}
                    {...register("description")}
                    className="focus:ring-none bg-gray-50 font-normal  text-neutral-800 focus:outline-none"
                    placeholder="Anything particular we should know ?"
                  />
                </div>
                <p className="text-xs text-red-500">
                  {errors ? errors.description?.message : ""}
                </p>
              </div>
              <div>
                <div className="flex items-start gap-3">
                  <input {...register("agree")} type="checkbox" />
                  <Label>
                    I agree to Metalogic sending me marketing communications, as
                    described in the{" "}
                    <span className="text-blue-800 underline underline-offset-2">
                      Website and Cookie Policy
                    </span>
                    .
                  </Label>
                </div>
                <p className="px-6 py-1 text-xs text-red-500">
                  {errors ? errors.agree?.message : ""}
                </p>
              </div>
            </CardContent>
            <div className="w-full py-3">
              <Button disabled={isSubmitting} className="w-full">
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
          </CardHeader>
        </FadeIn>
      </form>
    </FadeIn>
  );
};

export default Form;
