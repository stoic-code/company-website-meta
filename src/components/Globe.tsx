import React from "react";
import { motion } from "framer-motion";
import COBE from "@/components/ui/COBE";

const Globe = () => {
  return (
    <>
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.25 }} // Delay the appearance of Globe after button animation is complete
          exit={{ opacity: 0, y: 20 }}
        >
          <COBE />
        </motion.div>
      </div>
    </>
  );
};

export default Globe;
