import React from "react";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";

const Methodology = () => {
  return (
    <section className="lg:py-24">
      <div className="relative py-12 backdrop-blur">
        <div className="grid 2xl:container lg:grid-cols-2">
          <FadeIn className="flex items-center justify-center">
            <Image
              src="/services/ajile.svg"
              alt="ajile"
              width={500}
              height={500}
            />
          </FadeIn>
          <div className="order-2 flex flex-col gap-9">
            <FadeIn className="font-bold uppercase text-reddish-1">
              Our Methodology
            </FadeIn>

            <FadeIn className="md:text-5l text-4xl font-bold text-blue-950  lg:text-6xl">
              Agile development methodology
            </FadeIn>

            <FadeIn className="text-md text-ui-600">
              We use the agile development methodology to minimize risk, such as
              bugs, cost overruns, and changing requirements, when adding new
              functionality. In our approach, we develop the software in
              iterations that contain mini-increments of the new functionality.
              We consider different forms of the agile development method,
              including scrum, crystal, extreme programming (XP), and
              feature-driven development (FDD).
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
