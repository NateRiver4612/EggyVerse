import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

import { textContainer, textVariant2 } from "../utils/motion";

const VideoCard = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full h-full flex flex-col items-center absolute mt-[5%] 2xl:mt-[20%]"
    >
      <div className="">
        <motion.span
          variants={textContainer}
          className="text-center font-light text-[15px] sm:text-[30px] md:text-[30px] lg:text-[35px] xl:text-[40px] 2xl:text-[4rem] text-[#b6a785] tracking-wide"
        >
          {Array.from("2022 Captured").map((letter, index) => (
            <motion.span variants={textVariant2} key={index}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.span>
      </div>
      <video
        controls
        loop
        className="h-[150px] w-[250px] sm:h-[250px] sm:w-[440px] md:h-[300px] md:w-[530px] lg:h-[360px] lg:w-[640px] xl:h-[450px] xl:w-[800px]"
      >
        <source type="video/mp4" src="./embo_vid.mp4"></source>
      </video>
    </motion.div>
  );
};

export default VideoCard;
