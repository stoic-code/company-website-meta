import React from "react";
import { Button } from "@/components/ui/button";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import Link from "next/link";
import Rocket from "./(sections)/Rocket";

const Main = () => {
  return (
    <FadeInStagger className="rocket-container relative grid min-h-screen items-center overflow-hidden bg-cover bg-no-repeat text-center">
      <FadeIn className="absolute z-50 flex h-full w-full items-center justify-center bg-[rgba(255,255,255,0.2)] lg:px-32">
        <div className="">
          <h4 className="py-12 text-xl font-semibold">Careers</h4>

          <h1 className="text-4xl font-bold capitalize md:text-6xl">
            navigate your next <br />{" "}
            <span className="text-accent-green">career</span> move
          </h1>

          <FadeIn className="mx-auto px-4 py-10 md:w-[50%]">
            We're continiously searching for the right talent. Check if you're a
            good match.
          </FadeIn>

          <FadeIn>
            <Button size="lg" asChild>
              <Link href="#vacancies">Explore Opportunities</Link>
            </Button>
          </FadeIn>
        </div>
      </FadeIn>

      <Rocket />
    </FadeInStagger>
  );
};

export default Main;
