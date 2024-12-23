import React from "react";
import Image from "next/image";

import { FadeIn } from "@/components/FadeIn";

const beliefs = [
  {
    title: "precise scoping",
    desc: "We took great care to ensure that all software needs were fully specified, without any ambiguities or inconsistencies. This helps us precisely plan the project and avoid scope creep in the future.",
    image: "/services/web/scope.svg",
  },
  {
    title: "Accurate cost projection",
    desc: "In order to provide our clients with accurate estimates, we compute the project cost after carefully reviewing the work breakdown structure and software needs.",
    image: "/services/web/money.svg",
  },
  {
    title: "Management of quality",
    desc: "Every step of the SDLC is integrated with quality assurance (QA) at Metalogic, ensuring that there are no serious flaws in the final product. Our quality management strategy complies with ISO 9001 requirements.",
    image: "/services/web/quality.svg",
  },
  {
    title: "Robust security",
    desc: "We guarantee complete security for the project environment, digital assets and intellectual property belonging to our clients, and online software we develop.",
    image: "/services/web/security.svg",
  },
  {
    title: "Adaptable cooperation",
    desc: "We adjust our rate and manner of our interactions in line with our clients' requests to ensure transparency and steady progress in projects related to web development.",
    image: "/services/web/collab.svg",
  },
  {
    title: "The whole set of project papers",
    desc: "To enable future maintenance and modification of the program with ease, we meticulously record all significant choices made during the development process.",
    image: "/services/web/document.svg",
  },
];

const EnsureQuality = () => {
  return (
    <div className="2xl:container">
      <FadeIn className="justify-center py-24 text-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold text-blue-950">
            How the Web Development Project Quality Is Assured
          </h2>
          <p className="mx-auto px-2 pb-8 text-ui-500 md:w-[50%]">
            Other than technical expertise, a wide range of other factors may
            directly or indirectly affect the quality of the program and the
            project's conclusion. At Metalogic, we value every single one of
            them greatly.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 px-2 text-left md:gap-y-12">
          {beliefs.map((d, idx) => (
            <FadeIn
              key={idx}
              className="group flex w-[360px] flex-col items-start gap-3 rounded-2xl bg-white p-8 shadow-lg"
            >
              <Image
                src={d.image}
                alt={d.title}
                className="w-16 transition-all duration-300 group-hover:-rotate-12"
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
  );
};

export default EnsureQuality;
