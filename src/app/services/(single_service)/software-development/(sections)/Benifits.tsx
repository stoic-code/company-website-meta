import React from "react";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";

const Benifits = () => {
  return (
    <FadeIn className="2xl:container lg:py-24 lg:pl-12">
      <h2 className="px-4 py-8 text-3xl font-bold text-primary md:text-5xl lg:w-[50%]">
        Major Benefits of custom software development
      </h2>
      <p className="px-4 pb-8 text-ui-500 lg:w-[50%]">
        Stay ahead of industry trends and compliance requirements with software
        that adapts to evolving standards.
      </p>
      <div className="mx-auto grid w-[70%] gap-8 text-sm sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center gap-4 rounded-xl bg-neutral-100 p-4 text-center text-ui-600 shadow-lg">
          <Image src="/services/star.svg" alt="star" height={50} width={50} />
          <p>
            Functionality is <strong>fully tailored </strong> to your
            requirements.
          </p>
        </div>
        <div className="flex  flex-col items-center gap-4 rounded-xl bg-neutral-100 p-4 text-center text-ui-600 shadow-lg">
          <Image src="/services/star.svg" alt="star" height={50} width={50} />
          <p>
            <strong>Flexibility</strong> to evolve the solution when needed.
          </p>
        </div>
        <div className="flex  flex-col items-center gap-4 rounded-xl bg-neutral-100 p-4 text-center text-ui-600 shadow-lg">
          <Image src="/services/star.svg" alt="star" height={50} width={50} />
          <p>
            <strong>Short learning curve</strong> due to tailored UX and UI.
          </p>
        </div>
        <div className="flex  flex-col items-center gap-4 rounded-xl bg-neutral-100 p-4 text-center text-ui-600 shadow-lg">
          <Image src="/services/star.svg" alt="star" height={50} width={50} />
          <p>
            Powerful <strong>security</strong> of data and digital assets.
          </p>
        </div>
        <div className="flex  flex-col items-center gap-4 rounded-xl bg-neutral-100 p-4 text-center text-ui-600 shadow-lg">
          <Image src="/services/star.svg" alt="star" height={50} width={50} />
          <p>
            <strong>Functionality</strong> is fully tailored to your
            requirements.
          </p>
        </div>

        <div className="flex  flex-col items-center gap-4 rounded-xl bg-neutral-100 p-4 text-center text-ui-600 shadow-lg">
          <Image src="/services/star.svg" alt="star" height={50} width={50} />
          <p>
            The ability to use <strong>advanced techs</strong> (AI/ML,
            blockchain, IoT, etc.)
          </p>
        </div>
      </div>
    </FadeIn>
  );
};

export default Benifits;
