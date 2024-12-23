import { Metadata } from "next";
import React from "react";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";
import TechWeUse from "../(sections)/TechWeUse";
import { technologies } from "@/data/services/data";

export const metadata: Metadata = {
  title:
    "Elevate Your Business with Metalogic: World-Class Ecommerce Solutions",
  description:
    "Experience unparalleled success with Metalogic's Ecommerce Services – setting global standards in online retail excellence. Our cutting-edge solutions redefine the shopping experience, combining innovation, reliability, and scalability for a truly best-in-class eCommerce platform.",
  keywords:
    "world-class ecommerce, online retail excellence, cutting-edge ecommerce solutions, innovative shopping experience, reliable ecommerce platform, scalable online retail, global ecommerce standards",
  creator: "Metalogic - Pioneering Ecommerce Excellence Globally",
  category: "Ecommerce Services",
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
              Ecommerce Solution
            </FadeIn>

            <FadeIn className="text-4xl font-bold text-blue-950  md:text-6xl">
              Elevate Your Online Store to{" "}
              <span className="text-accent-green">Profit</span> Paradise
            </FadeIn>

            <FadeIn className="text-md text-ui-600">
              Unlock the full potential of your online business with our
              e-commerce solutions. We specialize in enhancing user experiences,
              streamlining processes, and maximizing sales for unprecedented
              success.
            </FadeIn>
          </div>
        </div>

        <FadeIn className="mx-auto flex w-[60%] items-center justify-center">
          <Image
            src="/services/ecommerce.svg"
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
    </div>
  );
};

export default page;
