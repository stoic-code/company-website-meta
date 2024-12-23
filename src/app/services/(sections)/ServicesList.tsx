"use client";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { services } from "@/data/footer/services";
import { cn } from "@/lib/utils";

const ServicesList = ({ onNav }: { onNav?: boolean }) => {
  const beep = new Audio("/beep.wav");
  return (
    <div
      className={cn(
        "container mx-auto grid gap-8 md:grid-cols-2 lg:max-w-[80%] lg:grid-cols-3",
        onNav ? "lg:max-w-full" : "",
      )}
    >
      {services.map((s, idx) => (
        <Link
          key={idx}
          onMouseEnter={() => beep.play()}
          href={s.link}
          className="group relative flex items-center gap-8 rounded-xl border bg-white px-4 py-6 transition-all duration-500 hover:-translate-y-2"
          style={{ boxShadow: onNav ? "" : "0px 0px 20px rgba(0,0,0,0.2)" }}
        >
          <div className="rounded-2xl bg-blue-200 p-3">
            <Image src={s.icon} alt={s.title} width={30} height={30} />
          </div>
          <div className="font-semibold">{s.title}</div>
          <ArrowUpRightIcon className="absolute right-2 top-2 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-500" />
        </Link>
      ))}
    </div>
  );
};

export default ServicesList;
