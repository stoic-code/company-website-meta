import React from "react";
import Link from "next/link";
import CardsRight from "@/components/our_services/CardsRight";
import CardsLeft from "@/components/our_services/CardsLeft";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";

const OurServices = () => {
  return (
    <section className="grid w-[80%] gap-y-8 pt-20 2xl:container sm:mx-auto lg:w-[90%] lg:grid-cols-2">
      <div className="order-2 grid items-center justify-center gap-y-8 px-4 sm:grid-cols-2">
        <CardsRight />
        <CardsLeft />
      </div>
      <FadeInStagger className="flex flex-col gap-6 px-4 md:px-8 lg:order-2">
        <FadeIn>
          <span className="font-semibold">Our Services</span>
        </FadeIn>
        <FadeIn>
          <h5 className="text-5xl font-bold">
            Empowering <br /> Your Vison
          </h5>
        </FadeIn>
        <FadeIn>
          <p>
            Our range of offerings is carefully curated to cater to your diverse
            needs, ensuring that your digital journey is seamless, captivating,
            and results-driven.
          </p>
        </FadeIn>
        <Link
          href="/services"
          className="flex w-fit gap-2 rounded-lg border border-secondary-300  px-3 py-2 text-secondary-300 transition-all duration-500 hover:bg-secondary-300 hover:text-white"
        >
          Learn More
          <span className="sr-only">
            services that metalogic software provides
          </span>
          <ArrowRight size={22} className="" />
        </Link>
      </FadeInStagger>
    </section>
  );
};

export default OurServices;
