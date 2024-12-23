import { Metadata } from "next";
import React from "react";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";
import TechWeUse from "../(sections)/TechWeUse";
import { technologies, webFaqs } from "@/data/services/web/data";
import BannerBottom from "../(sections)/BannerBottom";
import FAQs from "../software-development/(sections)/Faq";
import Methodology from "../(sections)/Methodology";
import ReliabilityInPartnership from "../(sections)/ReliabilityInPartnership";
import CraftingSolution from "../(sections)/CraftingSolution";
import EnsureQuality from "./(section)/EnsureQuality";

export const metadata: Metadata = {
  title: "Web Development Services by Metalogic: Crafting Digital Excellence",
  description:
    "Elevate your online presence with Metalogic's Web Development Services. Our expert team designs and develops stunning, user-friendly websites that seamlessly blend creativity with cutting-edge technology for a compelling digital experience.",
  keywords:
    "web development, website design, front-end development, back-end development, responsive websites, user-friendly design, digital experience, online presence",
  creator: "Metalogic - Shaping Digital Landscapes",
  category: "Web Development Services",
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
              Website Development
            </FadeIn>

            <FadeIn className="text-4xl font-bold text-blue-950  md:text-6xl">
              Scalable & Seamless Web Development
            </FadeIn>

            <FadeIn className="text-md text-ui-600">
              Engage users with lightning-fast and reliable Progressive Web
              Apps. We harness the power of modern web technologies to deliver
              app-like experiences directly through browsers.
            </FadeIn>
          </div>
        </div>

        <FadeIn className="mx-auto hidden w-[60%] items-center justify-center md:flex">
          <Image
            src="/services/web/hero.svg"
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

      <EnsureQuality />
      <Methodology />
      <CraftingSolution />
      <ReliabilityInPartnership />
      <FAQs faqs={webFaqs} />
      <BannerBottom />
    </div>
  );
};

export default page;
