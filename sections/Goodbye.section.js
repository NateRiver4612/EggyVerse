import React from "react";
import { staggerContainer, fadeIn, navVariants } from "../utils/motion";
import { motion } from "framer-motion";

const Goodbye = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      variants={staggerContainer}
      className="flex h-full justify-center relative"
    >
      <div className="flex ">
        <motion.div
          variants={fadeIn("right", "spring", 0.1, 1)}
          className="relative flex-[0.5]  flex  items-center"
        >
          <img src="/demo3.png" alt="planet-09" className="w-[94%]" />
          <motion.div
            variants={navVariants}
            className="flex flex-col font-bold md:text-[2rem] xl:text-[3rem] font-playfair"
          >
            <span>T</span>
            <span>O</span>
            <span>G</span>
            <span>E</span>
            <span>T</span>
            <span>H</span>
            <span>E</span>
            <span>R</span>
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "spring", 0.1, 1)}
          className="relative flex-[0.5] w-[80%] p-0 flex h-fit  items-center"
        >
          <img src="/demo4.png" alt="planet-09" className=" w-[94%]" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Goodbye;
