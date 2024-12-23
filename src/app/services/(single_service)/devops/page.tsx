import { Metadata } from "next";
import React from "react";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";
import TechWeUse from "../(sections)/TechWeUse";
import { technologies } from "@/data/services/cloud/data";
import Methodology from "../(sections)/Methodology";
import CraftingSolution from "../(sections)/CraftingSolution";
import ReliabilityInPartnership from "../(sections)/ReliabilityInPartnership";
import BannerBottom from "../(sections)/BannerBottom";
import FAQs from "../software-development/(sections)/Faq";
import { devOpsFaqs } from "@/data/devops/data";

export const metadata: Metadata = {
  title:
    "DevOps Services by Metalogic: Streamlining Software Delivery and Operations",
  description:
    "Metalogic offers comprehensive DevOps Services to enhance your software delivery and operations. Our expert DevOps team integrates development and operations seamlessly, fostering collaboration and efficiency to accelerate your product's time-to-market and ensure continuous innovation.",
  keywords:
    "DevOps services, software delivery, operations optimization, collaboration, continuous integration, continuous delivery, automation, infrastructure as code",
  creator:
    "Metalogic - Transforming Development and Operations for Peak Efficiency",
  category: "DevOps Services",
  alternates: {
    canonical: "https://metalogic.com.np/services",
  },
};

const page = () => {
  return (
    <div className="container">
      <div className="grid min-h-screen grid-cols-2 items-center">
        <div>
          <div className="flex flex-col gap-9 lg:pl-16">
            <FadeIn className="text-md font-bold uppercase text-reddish-1">
              Devops Solution
            </FadeIn>

            <FadeIn className="text-4xl font-bold text-blue-950  md:text-6xl">
              Agile Development with DevOps{" "}
              <span className="text-accent-green">Profit</span> Paradise
            </FadeIn>

            <FadeIn className="text-md text-ui-600">
              Achieve agility in your software development lifecycle through our
              DevOps services, ensuring rapid, high-quality releases and
              adapting to the evolving needs of your business.
            </FadeIn>
          </div>
        </div>

        <FadeIn className="mx-auto flex items-center justify-center">
          <Image
            src="/services/devops/hero.svg"
            alt="Mobile"
            width={500}
            height={500}
          />
        </FadeIn>
      </div>

      <TechWeUse
        technologies={technologies}
        title="Technology we behold"
        subTitle="Discover how we personalize your experience with customized features and effortlessly scale your system to match your growing needs."
      />

      <Methodology />
      <CraftingSolution />
      <ReliabilityInPartnership />
      <FAQs faqs={devOpsFaqs} />
      <BannerBottom />
    </div>
  );
};

export default page;
