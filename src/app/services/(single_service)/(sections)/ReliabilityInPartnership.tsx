import React from "react";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

const ReliabilityInPartnership = () => {
  return (
    <section className="lg:py-24">
      <div className="py-12 backdrop-blur">
        <div className="relative grid 2xl:container lg:grid-cols-2">
          <FadeIn className="flex items-start justify-end px-10">
            <Image
              className="sticky top-12"
              src="/services/benifits.svg"
              alt="ajile"
              width={500}
              height={500}
            />
          </FadeIn>
          <div className="order-2 flex flex-col gap-9">
            <FadeIn className="font-bold uppercase text-reddish-1">
              Benefits of working with us
            </FadeIn>

            <FadeIn className="md:text-5l text-4xl font-bold text-blue-950  lg:text-6xl">
              Reliability in Partnership
            </FadeIn>

            <FadeIn className="text-md">
              Rely on us for more than just solutions—rely on a steadfast
              partnership. Discover the assurance of reliability, commitment,
              and a shared commitment to your sustained success.
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReliabilityInPartnership;
