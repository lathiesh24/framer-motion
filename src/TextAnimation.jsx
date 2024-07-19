import React from "react";
import { motion } from "framer-motion";
import "./index.css";

const text = "Lathiesh Mahendran";

const TextReveal = () => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      className="flex space-x-1"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child} className="text-4xl">
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextReveal;
