import React from "react";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

type TImageLeft = {
  image: string;
  heading: string;
  children: React.ReactNode;
};

const FeatureImageLeft: React.FC<TImageLeft> = ({
  image,
  heading,
  children,
}) => {
  return (
    <div>
      <section className="lg:py-24">
        <div className="relative py-12 backdrop-blur">
          <div className="grid 2xl:container lg:grid-cols-2">
            <FadeIn className="flex items-center justify-center">
              <Image
                className="mx-auto w-full md:w-[80%]"
                src={image}
                alt="ajile"
                width={500}
                height={200}
              />
            </FadeIn>
            <div className="order-2 flex flex-col justify-center gap-9">
              <FadeIn className="md:text-5l text-4xl font-bold text-blue-950  lg:text-6xl">
                {heading}
              </FadeIn>

              <FadeIn className="text-md text-ui-600">
                <ul className="flex list-disc flex-col gap-4 pl-8">
                  {children}
                </ul>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureImageLeft;
