import React from "react";
import { motion } from "framer-motion";
import "./index.css";

const logos1 = ["canva.png", "Express JS.png", "typescript.png"];
const logos2 = ["git.png", "github.png", "jQuery.png"];
const logos3 = ["Mongo DB.png", "MySQL.png", "postman.png"];
const logos4 = ["Nextjs.png", "nodejs.png", "ReactJS.png"];

const Animation = () => {
  return (
    <div className="overflow-hidden flex flex-col gap-8 w-full  p-4 space-y-4">
      {/* First row: left to right */}
      <motion.div
        className="flex space-x-24"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        {logos1.map((logo, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg px-10 py-4 rounded-2xl"
          >
            <img src={logo} alt={`logo-${index}`} className="h-20 w-auto" />
          </div>
        ))}
      </motion.div>

      {/* Second row: right to left */}
      <motion.div
        className="flex space-x-24"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        {logos2.map((logo, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg px-10 py-4 rounded-2xl"
          >
            <img src={logo} alt={`logo-${index}`} className="h-20 w-auto" />
          </div>
        ))}
      </motion.div>

      {/* Third row: left to right */}
      <motion.div
        className="flex space-x-24"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        {logos3.map((logo, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg px-10 py-4 rounded-2xl"
          >
            <img src={logo} alt={`logo-${index}`} className="h-20 w-auto" />
          </div>
        ))}
      </motion.div>

      {/* Fourth row: right to left */}
      <motion.div
        className="flex space-x-24"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        {logos4.map((logo, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg px-10 py-4 rounded-2xl"
          >
            <img src={logo} alt={`logo-${index}`} className="h-20 w-auto" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Animation;
