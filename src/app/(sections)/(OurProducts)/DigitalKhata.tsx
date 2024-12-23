"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import ImageSlider from "./Carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const images = [
  "imageslider/digitalkhata/dashboard.svg",
  "imageslider/digitalkhata/task.svg",
  "imageslider/digitalkhata/cashout.svg",
];
export const motionVariant = {
  initial: {
    opacity: 0,
    x: "100", // Initially positioned outside the viewport on the right
    transition: { duration: 0.5 },
  },
  animate: {
    opacity: 1,
    x: 0, // Moves to the center of the viewport
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    x: "-100", // Moves outside the viewport on the left
    transition: { duration: 0.5 },
  },
};

const DigitalKhata = () => {
  return (
    <motion.div
      variants={motionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      key="digitalkhata"
    >
      <Card className="my-4 grid md:grid-cols-2">
        <div className="relative flex items-center justify-center rounded-xl bg-gradient-to-r from-green-400 to-green-100 pb-10 lg:rounded-r-none">
          {/* <Image
              src={DigitalKhataImg}
              alt="Banshwali Image"
              className="p-10"
            /> */}
          <ImageSlider images={images} />
          <h1 className="absolute bottom-0 hidden p-4 text-ui-500 md:block">
            Where Finances unify for business and personal success
          </h1>
        </div>
        <div className="flex h-full flex-col px-4 pt-4">
          <div>
            <h2 className="text-3xl font-bold">Features</h2>
            <p className="py-4 font-semibold">Powerful POS system</p>
            <hr />
          </div>
          <ul className="flex list-disc flex-col gap-4 py-4 pl-4">
            <li>Efficient personal finance management</li>
            <li>Accurate interest calculator</li>
            <li>Timely reminders and alerts</li>
            <li>Streamlined record-keeping</li>
            <li>Robust data security and many more</li>
          </ul>

          <div className="flex self-center px-8 pb-3 pt-10 md:self-end">
            <Button
              variant="outline"
              className="border-secondary-300 text-secondary-300 transition-all duration-500 hover:bg-secondary-300 hover:text-white"
            >
              <Link href="/digitalkhata" className="flex items-center gap-2">
                Learn more
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default DigitalKhata;
