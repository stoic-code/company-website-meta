import { ArrowRight } from "lucide-react";
import React from "react";
import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";

export const services = [
  {
    title: "Custom Software Developmen",
    desc: "Creating bespoke software tailored to meet the specific needs and requirements of a client.",
    link: "/services/software-development",
  },

  {
    title: "Web Development",
    desc: "Designing and developing websites, web applications, and e-commerce platforms.",
    link: "/services/web-development",
  },
  {
    title: "Mobile App Development",
    desc: "Building applications for mobile devices, such as iOS and Android, to meet user needs on the go.",
    link: "/services/mobile-app",
  },
  {
    title: "Cloud Computing Services",
    desc: "Providing solutions that leverage cloud technologies, including storage, computing power, and scalable infrastructure.",
    link: "/services/cloud-computing",
  },
  {
    title: "Quality Assurance and Testing",
    desc: "Ensuring the reliability and functionality of software through rigorous testing and quality assurance processes.",
    link: "/services/qa",
  },

  {
    title: "UI/UX Designing",
    desc: "Designing user interfaces and experiences to enhance the usability and accessibility of software applications.",
    link: "/services/ui-ux",
  },

  {
    title: "Maintenance and Support",
    desc: "Providing ongoing support, updates, and maintenance services for existing software applications.",
    link: "/services/support",
  },
];

const OurMainServices = () => {
  return (
    <FadeIn className="px-2 text-ui-500 2xl:container md:mx-auto md:w-[70%] 2xl:w-full">
      <FadeIn className="py-8 text-3xl font-bold md:text-4xl">
        Our Main Services
      </FadeIn>
      <div className="flex flex-col">
        {services.map((s, idx) => (
          <Link
            key={idx}
            href={s.link}
            className="group flex h-48 w-full flex-col items-center gap-2 border-b px-2  py-8 transition-all hover:bg-ui-200 md:h-40 md:flex-row lg:h-32"
          >
            <span className="flex-1 py-2 text-xl font-bold">{s.title}</span>
            <p className="text-sm md:w-[50%]">{s.desc}</p>
            <ArrowRight className="hidden flex-1 transition duration-500 group-hover:translate-x-2 md:block" />
          </Link>
        ))}
      </div>
      <div className="flex justify-end py-8">
        <Link
          href="#"
          className="self-end text-blue-600 underline underline-offset-4"
        >
          See More
        </Link>
      </div>
    </FadeIn>
  );
};

export default OurMainServices;
