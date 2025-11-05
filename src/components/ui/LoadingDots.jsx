import React from "react";
import { motion } from "framer-motion";

const LoadingDots = () => {
  const dotVariants = {
    animate: {
      y: ["0%", "-50%", "0%"],
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div className="flex justify-center items-center space-x-1">
      <motion.span
        className="block w-2 h-2 rounded-full bg-black"
        variants={dotVariants}
        animate="animate"
      />
      <motion.span
        className="block w-2 h-2 rounded-full bg-gray-500"
        variants={dotVariants}
        animate="animate"
        transition={{ ...dotVariants.animate.transition, delay: 0.6 }}
      />
      <motion.span
        className="block w-2 h-2 rounded-full bg-gray-500"
        variants={dotVariants}
        animate="animate"
        transition={{ ...dotVariants.animate.transition, delay: 0.8 }}
      />
    </motion.div>
  );
};

export default LoadingDots;
