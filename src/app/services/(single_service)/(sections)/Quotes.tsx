"use client";
import React from "react";
import { FadeIn } from "@/components/FadeIn";
import ServiceCard from "@/components/services/Card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Quotes = () => {
  const scrollLeft = () => {
    const container = document.getElementById("quotes-container");
    if (container) {
      container.scrollLeft += 300;
    }
  };

  const scrollRight = () => {
    const container = document.getElementById("quotes-container");
    if (container) {
      container.scrollLeft -= 300;
    }
  };

  return (
    <section className="pb-10 lg:mx-auto lg:w-[90%]">
      <div className="flex flex-col gap-8 text-center">
        <FadeIn className="font-bold uppercase text-reddish-1">
          Voice of Trust
        </FadeIn>

        <FadeIn className="md:text-5l text-4xl font-bold text-blue-950  lg:text-6xl">
          What People Say About us ?
        </FadeIn>
      </div>

      <div className="relative">
        <button
          onClick={scrollRight}
          className="absolute left-[-5px] top-[50%] rounded-full p-2 transition-all duration-500 hover:bg-ui-300 md:left-[-4rem]"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={scrollLeft}
          className="absolute right-[-5px] top-[50%] rounded-full p-2 transition-all duration-500 hover:bg-ui-300 md:right-[-4rem]"
        >
          <ChevronRight />
        </button>

        <div
          id="quotes-container"
          className="scrollbar-none grid grid-flow-col gap-10 overflow-x-scroll scroll-smooth py-4"
        >
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </section>
  );
};

export default Quotes;
