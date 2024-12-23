import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import React from "react";
import { services } from "@/data/footer/services";
import Image from "next/image";

const ServicesList = dynamic(
  () => import("@/app/services/(sections)/ServicesList"),
  {
    ssr: false,
  },
);

const navbarVariants = {
  hidden: {
    y: -10,
    opacity: 0.02,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  exit: {
    y: -10,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
const ServicesCard = ({
  servicePresent,
  handleServiceClick,
}: {
  servicePresent: boolean;
  handleServiceClick: () => void;
}) => {
  const pathname = usePathname();

  if (servicePresent) {
    return (
      <motion.div
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className={`absolute left-0 top-16 z-20 hidden w-full rounded-b-3xl border border-translucent-light-100  bg-primary px-8  py-3 pb-4 text-white  md:block`}
      >
        <div className="w-full gap-8 2xl:container md:grid md:grid-cols-3">
          {services.map((s, idx) => (
            <Link
              href={s.link}
              key={idx}
              className="group flex items-center gap-2 rounded-xl px-2 py-4 transition-all duration-300 hover:bg-white hover:text-black hover:shadow"
              onClick={handleServiceClick}
            >
              <div className="w-fit rounded-xl bg-blue-200 p-4 transition-all duration-200 ">
                <Image
                  height={100}
                  width={100}
                  src={s.icon}
                  alt=""
                  className="w-10"
                />
              </div>
              <div className="flex flex-col items-start">
                <h1 className="text-xl font-medium">{s.title}</h1>
                <p className="text-neutral-200 transition-all duration-200 group-hover:text-neutral-800">
                  {s.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    );
  }
};

export default ServicesCard;
