import { Metadata } from "next";
import React from "react";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";
import TechWeUse from "../(sections)/TechWeUse";
import { cloudComputingFaqs, technologies } from "@/data/services/cloud/data";
import BannerBottom from "../(sections)/BannerBottom";
import FAQs from "../software-development/(sections)/Faq";
import CraftingSolution from "../(sections)/CraftingSolution";
import ReliabilityInPartnership from "../(sections)/ReliabilityInPartnership";

export const metadata: Metadata = {
  title:
    "Cloud Computing Services by Metalogic: Empowering Your Digital Transformation",
  description:
    "Metalogic offers cutting-edge Cloud Computing Services to accelerate your digital transformation journey. From scalable infrastructure to secure data management, our expert team leverages the power of the cloud to optimize your business operations and drive innovation.",
  keywords:
    "cloud computing services, cloud solutions, scalable infrastructure, secure data management, digital transformation, cloud optimization, cloud migration, cloud technology",
  creator: "Metalogic - Your Partner in Cloud Innovation",
  category: "Cloud Computing Services",
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
              Cloud Computing Services
            </FadeIn>

            <FadeIn className="text-4xl font-bold text-blue-950  md:text-6xl">
              Cloud Infrastructure Management & Solutions
            </FadeIn>

            <FadeIn className="text-md text-ui-600">
              Leverage the power of the cloud with our expert infrastructure
              management services. We design, deploy, and optimize cloud
              environments tailored to your business needs.
            </FadeIn>
          </div>
        </div>

        <FadeIn className="mx-auto hidden w-[60%] items-center justify-center md:flex">
          <Image
            src="/services/cloud/hero.svg"
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

      <CraftingSolution />
      <ReliabilityInPartnership />
      <FAQs faqs={cloudComputingFaqs} />
      <BannerBottom />
    </div>
  );
};

export default page;
