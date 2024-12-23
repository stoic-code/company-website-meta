import React from "react";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

const CraftingSolution = () => {
  return (
    <section className="">
      <div className="relative py-12 backdrop-blur">
        <div className="grid 2xl:container lg:grid-cols-2">
          <FadeIn className="flex items-center justify-center lg:order-2">
            <Image
              src="/services/customization.svg"
              alt="ajile"
              width={500}
              height={500}
            />
          </FadeIn>
          <div className="flex flex-col gap-9">
            <FadeIn className="font-bold uppercase text-reddish-1">
              customization and scalability
            </FadeIn>

            <FadeIn className="md:text-5l text-4xl font-bold text-blue-950  lg:text-6xl">
              Crafting Solutions Just for You
            </FadeIn>

            <FadeIn className="text-md text-ui-600">
              Discover how we personalize your experience with customized
              features and effortlessly scale your system to match your growing
              needs. Our approach ensures that your software is uniquely
              tailored to fit your business, allowing you to adapt easily and
              efficiently. Explore simplicity and adaptability in our
              Customization and Scalability.
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftingSolution;
