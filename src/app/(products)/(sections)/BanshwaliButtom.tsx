import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const BanshwaliBannerBottom = () => {
  return (
    <FadeIn className="mx-auto mb-12 grid grid-cols-3 rounded-xl border bg-green-100 bg-none bg-no-repeat px-8 py-4 md:bg-service-banner lg:w-[80%]">
      <div></div>
      <div className="col-span-3 flex flex-col items-end gap-4 py-4 md:col-span-2">
        <h4 className="text-right text-3xl font-bold text-primary md:text-5xl">
          Get in Touch with Our Digital Banshwali Team
        </h4>
        <p className="text-ui-600">Have Questions or Need Assistance?</p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/contact">
              Get Your Quote
              <ArrowRight size={22} className="" />
            </Link>
          </Button>
          or
          <Button asChild>
            <Link
              className="flex gap-1"
              href="https://wa.me/9851353599"
              target="_blank"
            >
              Whatsapp
              <FaWhatsapp size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </FadeIn>
  );
};

export default BanshwaliBannerBottom;
