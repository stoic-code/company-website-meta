import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const BannerBottom = () => {
  return (
    <FadeIn className="mx-auto mb-12 grid grid-cols-3 rounded-xl border bg-green-100 bg-none bg-no-repeat px-8 py-4 md:bg-service-banner lg:w-[80%]">
      <div></div>
      <div className="col-span-3 flex flex-col items-end gap-4 py-4 md:col-span-2">
        <h4 className="text-right text-3xl font-bold text-primary md:text-6xl">
          Have a Project in Mind?
        </h4>
        <p className="text-ui-600">Let's Connect and Ignite Success!</p>
        <Link
          href="/contact"
          className="flex  w-fit gap-2 rounded-lg bg-primary px-3 py-2 text-white transition-all duration-500 hover:bg-blue-900"
        >
          Get Your Quote
          <ArrowRight size={22} className="" />
        </Link>
      </div>
    </FadeIn>
  );
};

export default BannerBottom;
