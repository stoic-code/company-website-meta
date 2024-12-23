"use client";
import React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

import { motionVariant } from "./DigitalKhata";
import ImageSlider from "./Carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const images = [
  "imageslider/banshwali/chart.svg",
  "imageslider/banshwali/idcard.svg",
  "imageslider/banshwali/contribution.svg",
];

const Banshwali = () => {
  return (
    <motion.div
      variants={motionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      key="banshwali"
    >
      <Card className="my-4 grid md:grid-cols-2">
        <div className="relative flex items-center justify-center rounded-xl bg-gradient-to-r from-green-400 to-green-100 pb-10 lg:rounded-r-none">
          <ImageSlider images={images} />
          <h1 className="absolute bottom-0 hidden p-4 text-ui-500 md:block">
            Trace the footsteps of your ancestors and discover your family
            tree's story.
          </h1>
        </div>
        <div className="flex h-full flex-col px-4 pt-4">
          <div>
            <h2 className="text-3xl font-bold">Features</h2>
            <p className="py-4 font-semibold">
              View full Banshawali chart digitally.
            </p>
            <hr />
          </div>
          <ul className="flex list-disc flex-col gap-4 py-4 pl-4">
            <li>View your Banshaj information all in one place.</li>
            <li>
              Bring all generations together under one roof creates a unique
              opportunity for shared experiences, mutual learning, and the
              strengthening of family bonds.
            </li>
            <li>Manage and learn about events nearby you.</li>
          </ul>

          <div className="flex self-center px-8 pb-3 pt-10 lg:self-end">
            <Button
              variant="outline"
              className="border-secondary-300 text-secondary-300 transition-all duration-500 hover:bg-secondary-300 hover:text-white"
            >
              <Link href="/banshwali" className="flex items-center gap-2 ">
                Learn more
                <span className="sr-only">
                  Learn more about our digital banshwali
                </span>
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Banshwali;
