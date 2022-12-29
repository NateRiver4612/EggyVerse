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
      className="w-full h-full flex flex-col items-center  absolute mt-[20%]"
    >
      <div className="">
        <motion.span
          variants={textContainer}
          className="text-center font-light text-[4rem] text-[#b6a785] tracking-wide"
        >
          {Array.from("2022 Captured").map((letter, index) => (
            <motion.span variants={textVariant2} key={index}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.span>
      </div>
      <video width="900" height="100" controls loop>
        <source type="video/mp4" src="./embo_vid.mp4"></source>
      </video>
    </motion.div>
  );
};

export default VideoCard;
