import React from "react";
import { motion } from "framer-motion";

const fadevariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const FadingDiv = ({ ...props }) => {
  return (
    <motion.div
      {...props}
      variants={fadevariants}
      initial="initial"
      animate="animate"
    />
  );
};

export default FadingDiv;
