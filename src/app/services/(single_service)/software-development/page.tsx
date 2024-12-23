import { Metadata } from "next";
import React from "react";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";
import TechWeUse from "../(sections)/TechWeUse";
import {
  technologies,
  softwareDevFaqs,
} from "@/data/services/software_development/data";
import Methodology from "../(sections)/Methodology";
import ReliabilityInPartnership from "../(sections)/ReliabilityInPartnership";
import CraftingSolution from "../(sections)/CraftingSolution";
import BannerBottom from "../(sections)/BannerBottom";
import Benifits from "./(sections)/Benifits";
import Expertise from "./(sections)/Expertise";
import FAQs from "./(sections)/Faq";

export const metadata: Metadata = {
  title: "Custom Software Development Services by Metalogic",
  description:
    "Unlock unparalleled solutions with Metalogic's Custom Software Development Services. Tailored to your unique needs, our expert team crafts innovative and scalable software to drive your business forward.",
  keywords:
    "custom software development, bespoke software solutions, tailored applications, software engineering, business innovation, scalable software, technology solutions",
  creator: "Metalogic - Your Partner in Innovation",
  category: "Software Development Services",
  alternates: {
    canonical: "https://metalogic.com.np/services",
  },
};

const page = () => {
  return (
    <div className="container">
      <div className="grid items-center py-16 md:min-h-screen md:grid-cols-2 md:py-0">
        <div>
          <div className="flex flex-col gap-9 lg:pl-16">
            <FadeIn className="text-md font-bold uppercase text-reddish-1">
              Software Development
            </FadeIn>

            <FadeIn className="text-3xl font-bold text-blue-950 md:text-6xl">
              Building Through success{" "}
              <span className="text-accent-teal">Custom Software</span>{" "}
              Solutions
            </FadeIn>

            <FadeIn className="text-md text-ui-600">
              Experience the Future of Your Business with Our Custom Software
              Development Services. We Design Solutions as Unique as Your
              Vision, Amplifying Efficiency, and Catapulting Your Success. No
              Limits, No Compromises – Just Software Crafted Specifically for
              You.
            </FadeIn>
          </div>
        </div>

        <FadeIn className="mx-auto hidden w-[80%] items-center justify-center md:flex">
          <Image
            src="/services/computer.svg"
            alt="Mobile"
            width={500}
            height={500}
          />
        </FadeIn>
      </div>

      <Benifits />
      <Expertise />

      {/* <TechWeUse
        technologies={technologies}
        title="Technology we behold"
        subTitle="Discover how we personalize your experience with customized features and effortlessly scale your system to match your growing needs."
      /> */}
      <Methodology />
      <CraftingSolution />
      <ReliabilityInPartnership />
      <FAQs faqs={softwareDevFaqs} />
      <BannerBottom />
    </div>
  );
};

export default page;
