import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import Image from "next/image";

const data = [
  {
    title: "Flexibility at work",
    desc: "Do your best work at a time and place that fits us and your work-life balance.",
    image: "careers/flexible.svg",
  },

  {
    title: "Take Ownership",
    desc: "Take responsibility to solve customer challenges by acting as your own boss.",
    image: "careers/ownership.svg",
  },

  {
    title: "Unlimited Growth",
    desc: "With no inner circle… absolutely everyone has the same opportunity to thrive.",
    image: "careers/growth.svg",
  },
  {
    title: "Make Yourself Heard",
    desc: "We encourage diverse perspectives - making it count in achieving our collective goals.",
    image: "careers/inclusivity.svg",
  },
  {
    title: "Team Spirit",
    desc: "Come together, work as one – this is at the heart of how we work, achieve results and collaborate.",
    image: "careers/teamspirit.svg",
  },
  {
    title: "Inclusivity at Work",
    desc: "We believe that everyone is entitled to equal opportunities to learn, lead, and grow in all directions",
    image: "careers/inclusivity.svg",
  },

  {
    title: "Transparent Environment",
    desc: "Build confidence in a culture of trust and open communication - with each other and our clients.",
    image: "careers/transparent.svg",
  },
  {
    title: "Fuel Your Passion",
    desc: "We encourage you to strive, push the limits and achieve your dreams by being best you can be.",
    image: "careers/fulepassion.svg",
  },
];

import React from "react";

const LifeAtMetalogic = () => {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="2xl:container">
        <FadeIn className="justify-center py-16 text-center">
          <div className="flex flex-col gap-4 pb-10">
            <h5 className="text-xl font-semibold text-secondary-300">
              Benifits
            </h5>
            <h2 className="text-4xl font-bold text-blue-950">
              Life At MetaLogic
            </h2>
          </div>
          <div className="grid gap-x-8 gap-y-8 px-2 text-left md:grid-cols-3 md:gap-y-12 md:px-4 lg:grid-cols-4 lg:px-12">
            {data.map((d, idx) => (
              <FadeIn
                key={idx}
                className="group flex flex-col items-start gap-3 rounded-2xl border border-transparent p-4 transition-all duration-300 hover:border-ui-200 hover:shadow-lg"
              >
                <Image
                  className="w-10 transition-all duration-300 group-hover:scale-110"
                  src={`${d.image}`}
                  alt={d.title}
                  width={100}
                  height={100}
                />
                <h3 className="text-xl font-bold text-blue-950">{d.title}</h3>
                <p className="text-sm text-ui-500">{d.desc}</p>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default LifeAtMetalogic;
