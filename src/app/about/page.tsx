"use client";
import React from "react";
import Image from "next/image";

import Counter from "./Counter";
// import ApproachLeftSVG from "./(svgs)/ApproachLeftSVG";
// import ApproachBottom from "./(svgs)/ApproachBottom";

import Dedication from "./(svgs)/DedicationLeft.svg";
import NepalMap from "./(svgs)/Nepal-2020districtmap.svg";

import { FadeIn, FadeInStagger } from "@/components/FadeIn";
// import MissionBottom from "./(svgs)/MissonBottom";
// import Teams from "./(sections)/Teams";
import Journey from "./(svgs)/Journey";
// import GlobeComponent from "./(sections)/Globe";
// import Globe from "@/components/Globe";
import SunRise from "./(sections)/Sunrise";
import dynamic from "next/dynamic";

const Globe = dynamic(() => import("./Cobe"), { ssr: false });
// import Globe from "./Cobe";

const page = () => {
  return (
    <>
      <div className="relative">
        <section className="relative bg-herobg bg-cover py-20 md:py-40">
          <FadeInStagger className="mx-auto flex flex-col gap-20 pb-28 pt-8 text-center text-white 2xl:container md:w-[60%]">
            <FadeIn className="text-4xl font-bold capitalize md:text-5xl lg:text-6xl">
              driving innovations <br /> and{" "}
              <span className="">empowering</span> business
            </FadeIn>

            <FadeIn className="font-semibold md:mx-auto md:w-[90%]">
              Metalogic envisions a future where technology serves as a catalyst
              for limitless human potential, fostering innovation and empowering
              organizations to thrive in a transformative digital era.
            </FadeIn>
          </FadeInStagger>

          <div className="absolute bottom-[-7%] z-50 w-full">
            <Counter />
          </div>
        </section>

        <div className="relative overflow-hidden">
          <SunRise />
          <div className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-translucent-light-200">
            <div className="order-2 flex flex-col gap-9 text-center md:w-[50%]">
              <FadeIn className="font-bold uppercase text-reddish-1">
                OUR APPROACH
              </FadeIn>
              <FadeIn className="md:text-5l text-4xl font-bold text-primary lg:text-6xl">
                Where Vison Meets Execution
              </FadeIn>

              <FadeIn className="text-md ">
                At Metalogic, we navigate the digital landscape with innovation,
                collaboration, and a dedicated focus on client success. Rooted
                in a commitment to pioneering solutions and anticipating future
                needs, our client relationships go beyond transactions.
                Understanding unique challenges, we craft solutions that align
                effortlessly with business objectives. With a user-centric
                design philosophy, agile methodologies, and a commitment to
                continuous learning, we promise transformative success at
                Metalogic Software Pvt. Ltd.
              </FadeIn>
            </div>
          </div>
        </div>

        {/* <div className="bg-red absolute bottom-[-4rem] right-[15rem] h-32 w-32">
          <ApproachBottom />
        </div> */}
      </div>

      <Journey />

      <section className="bg-gradient-to-br from-red-50 lg:py-24">
        <div className="relative bg-translucent-light-300 py-12 backdrop-blur">
          <div className="container grid lg:grid-cols-2">
            <FadeIn className="hidden items-center justify-center lg:flex">
              <Image src={Dedication} alt="dedication" className="w-[50%]" />
            </FadeIn>
            <div className="order-2 flex flex-col gap-9">
              <FadeIn className="font-bold uppercase text-reddish-1">
                Our Mission
              </FadeIn>
              <FadeIn className="md:text-5l text-4xl font-bold text-primary lg:text-6xl">
                Dedication to <br />
                innovation{" "}
              </FadeIn>

              <FadeIn className="text-md text-justify">
                We believe that every project is an opportunity to create
                something remarkable – a chance to push boundaries, challenge
                norms, and exceed expectations. We approach each endeavor with
                curiosity and creativity, striving to craft solutions that not
                only meet your needs but also propel you ahead of the curve.
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center py-10 md:py-20">
        <FadeIn className="md:text-5l text-4xl font-bold text-blue-950 lg:text-6xl">
          We Are a Distributed Team
        </FadeIn>
        {/* 
        <div className="flex flex-col gap-9 text-center">
          <FadeIn className="font-semibold uppercase text-reddish-1">
            Our Locations
          </FadeIn>

          <FadeIn className="md:text-5l text-4xl font-bold text-blue-950 lg:text-6xl">
            We Are a Distributed Team
          </FadeIn>

          <FadeIn className="text-md pb-8 font-semibold text-ui-600">
            Our teams are from all over Nepal.
          </FadeIn>
        </div> */}
        <div className="flex w-full items-center justify-center overflow-hidden">
          <Globe />
        </div>
      </div>

      {/*<Teams /> */}
    </>
  );
};

export default page;
