import React from "react";
import Image from "next/image";

import { FadeIn } from "@/components/FadeIn";

import ContiniousLearning from "./(svgs)/continious_learning.svg";
import TeamWork from "./(svgs)/team_work.svg";
import Innovation from "./(svgs)/innovation.svg";
import Mentorship from "./(svgs)/mentorship.svg";
import Impact from "./(svgs)/impact.svg";
import adaptability from "./(svgs)/adaptability.svg"
const beliefs = [
  {
    title: "Continious Learning",
    desc: "We invest in our team's growth through ongoing training, mentorship, and opportunities to expand your skill set. We're dedicated to your professional development journey.",
    image: ContiniousLearning,
  },
  {
    title: "Team Work",
    desc: "We believe that best solutions comes from diverse perspective and collaborative efforts.",
    image: TeamWork,
  },
  {
    title: "Innovation",
    desc: "Whether it's the quality of our work, the impact we make, or the relationships we build, we consistently strive for the highest standards.",
    image: Innovation,
  },
  {
    title: "Mentorship",
    desc: "We embrace change, learn from challenges, and remain resilient in the face of obstacles, always seeking opportunities for improvement.",
    image: Mentorship,
  },
  {
    title: "Tangible Impact Impact",
    desc: "We're committed to delivering solutions that not only meet but exceed their expectations.",
    image: Impact,
  },
  {
    title: "Adaptability",
    desc: "Thrive in a fast-paced world with resilience as your ally, valuing and cultivating adaptability in your career journey",
    image: adaptability,
  },
];

const Beliefs = () => {
  return (
    <section className="bg-[#f6f8ff]">
      <div className="2xl:container">
        <FadeIn className="justify-center py-24 text-center">
          <div className="flex flex-col gap-4">
            <h5 className="text-xl font-semibold text-secondary-300">Values</h5>
            <h2 className="text-4xl font-bold text-blue-950">We Believe in</h2>
            <p className="mx-auto px-2 pb-8 text-ui-500 md:w-[50%]">
              We believe in creating an environment where individuals can thrive
              and make a meaningful impact.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 px-2 text-left md:gap-y-12">
            {beliefs.map((d, idx) => (
              <FadeIn
                key={idx}
                className="group flex w-[360px] flex-col items-start gap-3 rounded-2xl bg-white p-8 shadow-lg"
              >
                <div className="w-16 rounded-2xl bg-gray-100 p-4">
                  <Image
                    src={d.image}
                    alt={d.title}
                    className="transition-all duration-300 group-hover:-rotate-12"
                  />
                </div>
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

export default Beliefs;
