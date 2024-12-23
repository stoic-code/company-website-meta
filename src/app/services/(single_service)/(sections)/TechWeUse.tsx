"use client";
import React, { useEffect } from "react";
import "./techstack.css";
import TechStack from "./TechStack";
import { FadeIn } from "@/components/FadeIn";

const TechWeUse = ({
  technologies,
  title,
  subTitle,
}: {
  technologies: any[];
  title: string;
  subTitle: string;
}) => {
  useEffect(() => {
    const scroller = document.getElementById("scroller");

    if (scroller) {
      const scrollerInner = scroller.querySelector("#scroller__inner");

      if (scrollerInner) {
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });

        // Return the cleanup function
        return () => {
          // Remove the duplicated items added during the effect
          scrollerContent.forEach((item) => {
            const duplicatedItem = scrollerInner.querySelector(
              '[aria-hidden="true"]',
            );
            if (duplicatedItem) {
              scrollerInner.removeChild(duplicatedItem);
            }
          });
        };
      }
    }
  }, []); // Empty dependency array to run the effect only once
  return (
    <section className="flex flex-col py-12">
      <div className="flex flex-col gap-8 text-center">
        <FadeIn className="font-bold uppercase text-reddish-1">
          Tech stack
        </FadeIn>

        <FadeIn className="md:text-5l text-4xl font-bold text-blue-950 lg:text-5xl">
          {title}
        </FadeIn>

        <FadeIn className="text-md mx-auto text-center text-ui-500 md:w-[70%]">
          {subTitle}
        </FadeIn>
      </div>
      <div id="scroller" className="overflow-hidden scroll-smooth py-10">
        <div id="scroller__inner" className="grid grid-flow-col gap-24 py-4">
          {technologies.map((t, idx) => (
            <TechStack key={idx} icon={t.emoji} name={t.name} color={t.color} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechWeUse;
