import React from "react";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

type TProps = {
  image: string;
  heading: string;
  children: React.ReactNode;
};

const FeatureImageRight: React.FC<TProps> = ({ image, heading, children }) => {
  return (
    <section className="lg:pl-10">
      <div className="relative py-12 backdrop-blur">
        <div className="grid 2xl:container lg:grid-cols-2">
          <FadeIn className="flex items-center justify-center lg:order-2">
            <Image
              className="mx-auto w-full md:w-[80%]"
              src={image}
              alt="ajile"
              width={500}
              height={200}
            />
          </FadeIn>
          <div className="flex flex-col justify-center gap-9">
            <FadeIn className="md:text-5l text-4xl font-bold text-blue-950  lg:text-6xl">
              {heading}
            </FadeIn>

            <FadeIn className="text-md text-ui-600">
              <ul className="flex list-disc flex-col gap-4 pl-8">{children}</ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureImageRight;
