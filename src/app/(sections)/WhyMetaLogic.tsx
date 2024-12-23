import React from "react";
import WhyRight from "./(svgs)/WhyRight";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import WhyLeft from "./(svgs)/WhyLeft";
import DotDashed from "./DotDashed";

const WhyMetaLogic = () => {
  return (
    <div className="relative bg-herobg py-32">
      {/* 
      <div className="absolute left-0 bottom-[-4rem]">
        <WhyRight />
      </div>
      <div className="absolute right-0 z-0">
        <WhyLeft />
      </div> */}
      <div className="p-3 md:container">
        <FadeIn className="rounded-xl border border-translucent-light-300 bg-translucent-light-100 p-4 text-white backdrop-blur md:p-8 lg:mx-auto lg:w-[80%]">
          <FadeIn>
            <h1 className="mb-8 text-2xl font-bold md:text-4xl">
              Why MetaLogic <span className="text-red-500">?</span>
            </h1>
            <p className="w-[80%]">
              Innovation is our driving force. We explore the latest tech trends
              to deliver groundbreaking solutions that keep you ahead.
            </p>
          </FadeIn>
          <div className="flex gap-4 pt-4 md:px-[10%] md:pr-[10%]">
            <div className="hidden md:block">
              <DotDashed />
            </div>

            <div>
              <FadeInStagger faster>
                <div className="flex flex-col gap-8">
                  <FadeIn>
                    <div className="flex flex-col">
                      <span className="text-xl font-semibold">
                        Innovation at the Core
                      </span>
                      <span>
                        We thrive on innovation and continuously explore the
                        latest technologies to provide you with groundbreaking
                        solutions that keep you ahead of the curve.
                      </span>
                    </div>
                  </FadeIn>
                  <FadeIn>
                    <div className="flex flex-col">
                      <span className="text-xl font-semibold">
                        Collaboration is the key
                      </span>
                      <span>
                        We work closely with you to understand your goals,
                        challenges, and aspirations, ensuring our solutions
                        align perfectly with your business objectives.
                      </span>
                    </div>
                  </FadeIn>
                  <FadeIn>
                    <div className="flex flex-col">
                      <span className="text-xl font-semibold">
                        Your Success, Our Purpose
                      </span>
                      <span>
                        Our solutions are designed to enhance efficiency, boost
                        productivity, and drive ROI, giving you a competitive
                        edge in your industry.
                      </span>
                    </div>
                  </FadeIn>
                </div>
              </FadeInStagger>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default WhyMetaLogic;
