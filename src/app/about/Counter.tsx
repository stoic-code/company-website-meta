"use client";
import OdometerCounter from "@/components/Odometer";

import { useInView } from "react-intersection-observer";

// comment
const Counter = () => {
  const { inView, ref } = useInView({ threshold: 0.1 });

  return (
    <div ref={ref}>
      <div className="z-50 mx-auto flex w-[95%] justify-around rounded-xl bg-white py-6 text-center shadow-lg shadow-translucent-dark-100 2xl:container sm:w-[60%]">
        <div>
          <p className="text-5xl font-bold"></p>
          {inView && (
            <p className="text-xl font-bold text-accent-teal md:text-5xl">
              <OdometerCounter num={32} />+
            </p>
          )}
          <p className="text-xs md:text-base">Projects Completed</p>
        </div>
        <div>
          <p className="text-5xl font-bold"></p>
          {inView && (
            <p className="text-xl font-bold text-accent-teal md:text-5xl">
              <OdometerCounter num={50} />+
            </p>
          )}
          <p className="text-xs md:text-base">Satisfied Clients</p>
        </div>
        <div>
          <p className="text-5xl font-bold"></p>
          {inView && (
            <p className="text-xl font-bold text-accent-teal md:text-5xl">
              <OdometerCounter num={18} />+
            </p>
          )}
          <p className="text-xs md:text-base">Experts</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
