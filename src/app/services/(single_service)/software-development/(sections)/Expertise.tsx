import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";
import {
  Factory,
  HeartPulse,
  PiggyBank,
  Store,
  Umbrella,
  UserCog,
} from "lucide-react";

const data = [
  {
    title: "Health Industry",
    icon: <HeartPulse size={40} stroke="red" />,
    color: "red",
  },

  {
    title: "Investment",
    icon: <PiggyBank size={40} stroke="green" />,
    color: "green",
  },

  {
    title: "Insurance",
    icon: <Umbrella size={40} stroke="#00d5ff" />,
    color: "green",
  },
  {
    title: "Manufacturing",
    icon: <Factory size={40} stroke="#756331" />,
    color: "blue",
  },
  {
    title: "Retails",
    icon: <Store size={40} stroke="orange" />,
    color: "pink",
  },
  {
    title: "Professional Services",
    icon: <UserCog size={40} stroke="pink" />,
    color: "orange",
  },
];

import React from "react";

const Expertise = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      <div className="2xl:container">
        <FadeIn className="grid py-16 md:grid-cols-3">
          <div className="flex flex-col gap-4 px-6 pb-10 md:mx-auto lg:pl-20">
            <h2 className="text-3xl font-bold text-blue-950 md:text-5xl">
              Proven Industry Experience
            </h2>
            <p className="text-ui-500">
              Experience the advantage of partnering with a team that has honed
              its skills through proven industry expertise, consistently
              delivering excellence in every sector we touch.
            </p>
          </div>
          <div className="col-span-2 ml-[12%] grid w-[80%] gap-8 px-2 text-left md:grid-cols-3 md:gap-y-6 md:px-4 lg:px-12">
            {data.map((d, idx) => (
              <FadeIn
                key={idx}
                className="group flex h-[200px] w-[200px] flex-col items-start gap-3 rounded-2xl bg-[#fffff6] px-6 py-12 shadow-md"
              >
                {/* <Image
                  className="w-10 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110"
                  src={`${d.icon}`}
                  alt={d.title}
                  width={100}
                  height={100}
                /> */}
                {d.icon}
                <h3 className="font-semibold text-blue-950">{d.title}</h3>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Expertise;
