import React from "react";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";
import TechWeUse from "../(sections)/TechWeUse";
import { technologies } from "@/data/services/data";
import BannerBottom from "../(sections)/BannerBottom";
import FAQs from "../software-development/(sections)/Faq";
import { qaTestingFaqs } from "@/data/services/qa/data";
import CraftingSolution from "../(sections)/CraftingSolution";
import ReliabilityInPartnership from "../(sections)/ReliabilityInPartnership";

const page = () => {
  return (
    <div className="container">
      <div className="grid items-center py-16 md:min-h-screen md:grid-cols-2 md:py-0">
        <div>
          <div className="flex flex-col gap-9 lg:pl-16">
            <FadeIn className="text-md font-bold uppercase text-reddish-1">
              Quality Assurance
            </FadeIn>

            <FadeIn className="text-4xl font-bold text-blue-950  md:text-6xl">
              Automated Security and Compliance Testing
            </FadeIn>

            <FadeIn className="text-md text-ui-600">
              Integrate testing seamlessly into your development workflow with
              our continuous integration testing services. We facilitate early
              bug detection and ensure code stability throughout the development
              process.
            </FadeIn>
          </div>
        </div>

        <FadeIn className="mx-auto hidden w-[60%] items-center justify-center md:flex">
          <Image src="/services/qa.svg" alt="Mobile" width={500} height={500} />
        </FadeIn>
      </div>

      <TechWeUse
        technologies={technologies}
        title="Technology we behold"
        subTitle="Discover how we personalize your experience with customized features and effortlessly scale your system to match your growing needs."
      />
      <CraftingSolution />
      <ReliabilityInPartnership />
      <FAQs faqs={qaTestingFaqs} />
      <BannerBottom />
    </div>
  );
};

export default page;
