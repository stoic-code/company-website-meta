"use client";
import styles from "./coffee_code.module.css";

import OdometerCounter from "@/components/Odometer";
import { useInView } from "react-intersection-observer";

const CoffeeCode = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <section
      ref={ref}
      className="w-full translate-y-28 transform 2xl:container md:translate-y-14"
    >
      <div className="mx-4 flex flex-col justify-between gap-4 rounded-xl border bg-white p-4 font-semibold text-accent-teal shadow-lg shadow-translucent-dark-200 sm:flex-row md:mx-auto md:w-[80%] md:px-16 xl:w-[50%]">
        <div className="flex flex-col gap-4">
          <span className={`${styles.outline_text} text-7xl md:h-[80px]`}>
            {inView && <OdometerCounter className="font-bold" num={313} />}
          </span>
          <span>Kilometers of code written</span>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex">
            <span
              className={`${styles.outline_text} text-7xl transition-all md:h-[80px]`}
            >
              {inView && <OdometerCounter className="font-bold" num={210} />}
            </span>
          </div>

          <span>Liters of Coffee Drank</span>
        </div>
      </div>
    </section>
  );
};

export default CoffeeCode;
