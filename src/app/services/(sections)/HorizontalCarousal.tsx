"use client";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const HorizontalCarousel = () => {
  const section = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: section });
  const x = useTransform(scrollYProgress, [0, 1], ["8%", "-100%"]);

  return (
    <section className="h-[200vh] md:h-[300vh]" ref={section}>
      <div className="scrollbar-none sticky  top-0 overflow-scroll transition-all duration-300">
        <motion.div
          style={{ x }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="grid h-[100vh] grid-flow-col items-center gap-4"
        >
          {Array.from({ length: 10 }).map((_, idx) => (
            <div className="flex h-[300px] w-[800px] items-center justify-center bg-black text-center text-7xl font-bold text-white md:h-[80%]">
              {idx}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalCarousel;
