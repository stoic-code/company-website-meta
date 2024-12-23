import React from "react";
import Image from "next/image";

import { FadeIn, FadeInStagger } from "@/components/FadeIn";

const services = [
  {
    icon: "services/how_it_works/form.svg",
    title: "Fill Out a Form",
    desc: "Give us a sense of your business and marketing needs",
  },

  {
    icon: "services/how_it_works/consult.svg",
    title: "Get a free consultantion",
    desc: "Give us a sense of your business and marketing needs",
  },

  {
    icon: "services/how_it_works/quote.svg",
    title: "Get a quote",
    desc: "See a transparent development and marketing plan based on your unique needs",
  },
];

const HowItWorks = () => {
  return (
    <div className="py-24 text-center">
      <FadeInStagger className="flex flex-col items-center pb-16">
        <h2 className="text-4xl font-bold text-blue-950">How It Works</h2>
        <p className="mx-auto px-3 text-ui-500 md:w-[50%]">
          Elevate your business to unprecedented success through the synergistic
          collaboration and expertise offered by our agency, propelling your
          brand to new heights.
        </p>
      </FadeInStagger>
      <div className="flex flex-wrap items-center justify-center gap-y-12 py-8">
        {services.map((s, idx) => (
          <div key={idx} className="flex w-[300px] flex-col items-center gap-3">
            <div className="w-16 rounded-full bg-gray-100 p-4">
              <Image
                width={500}
                height={500}
                src={s.icon}
                alt="quote"
                className=""
              />
            </div>
            <h5 className="font-bold text-blue-800">Step {idx + 1}</h5>
            <h3 className="text-xl font-bold text-blue-950">{s.title}</h3>
            <p className="text-sm text-ui-500">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
