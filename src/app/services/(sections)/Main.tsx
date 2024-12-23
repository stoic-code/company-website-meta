import React from "react";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

const Main = () => {
  return (
    <div className="container">
      <div className="grid min-h-screen items-center md:grid-cols-2">
        <div>
          <div className="flex flex-col gap-9 lg:pl-16">
            <FadeIn className="text-md font-bold uppercase text-reddish-1">
              Our Services
            </FadeIn>

            <FadeIn className="text-4xl font-bold text-blue-950  md:text-6xl">
              Your Need Our Expertise
            </FadeIn>

            <FadeIn className="text-md text-ui-600">
              Elevate your business with our comprehensive suite of services.
              From cutting-edge mobile and web development to meticulous QA
              testing and proactive maintenance, we bring innovation, quality,
              and reliability to every project
            </FadeIn>
          </div>
        </div>

        <FadeIn className="mx-auto hidden w-[60%] items-center justify-center md:flex">
          <Image
            src="/services/services.svg"
            alt="Mobile"
            width={500}
            height={500}
          />
        </FadeIn>
      </div>
    </div>
  );
};

export default Main;
