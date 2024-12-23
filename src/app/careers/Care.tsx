import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";

const data = [
  {
    title: "Performance Bonus",
    image: "careers/bonus_1.svg",
  },

  {
    title: "Health Benefits",
    image: "careers/health.svg",
  },

  {
    title: "Paid Leave Policy",
    image: "careers/paidleave.svg",
  },
  {
    title: "Learning And Development",
    image: "careers/learning.svg",
  },
  {
    title: "Food Credit",
    image: "careers/food_1.svg",
  },
  {
    title: "Team Activities",
    image: "careers/teambuilding.svg",
  },
];

import React from "react";

const Care = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-[#ffffe1]">
      <div className="2xl:container">
        <FadeIn className="grid py-16 md:grid-cols-3">
          <div className="flex flex-col gap-4 px-6 pb-10 md:mx-auto lg:pl-20">
            <h2 className="text-3xl font-bold text-blue-950">
              Metalogic Cares For You
            </h2>
            <p className="text-sm text-ui-500">
              We're less about valuing perks and more about valuing people. Our
              employee benefits are built around enhancing your wellbeing - at
              work and at home
            </p>
          </div>
          <div className="col-span-2 ml-[12%] grid w-[80%] gap-y-8 px-2 text-left md:grid-cols-3 md:gap-y-6 md:px-4 lg:px-12">
            {data.map((d, idx) => (
              <FadeIn
                key={idx}
                className="group flex h-[200px] w-[200px] flex-col items-start gap-3 rounded-2xl bg-[#fffff6] px-6 py-12 shadow-md"
              >
                <Image
                  className="w-10 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110"
                  src={`${d.image}`}
                  alt={d.title}
                  width={100}
                  height={100}
                />
                <h3 className="font-semibold text-blue-950">{d.title}</h3>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Care;
