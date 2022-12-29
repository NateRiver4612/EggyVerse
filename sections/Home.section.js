import React from "react";
import { planetVariants, staggerContainer, navVariants } from "../utils/motion";
import { motion } from "framer-motion";
import { TypingText } from "../components/CustomTexts";

const Home = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full  flex flex-col items-center justify-center h-full"
    >
      <img src="/home_bg.jpg" className="absolute" />
      <div className=" flex absolute flex-col items-center top-[25%]">
        <TypingText title="December • 30 • 2022" />
        <motion.div variants={navVariants} initial="hidden" whileInView="show">
          <span className="text-[8rem] font-pacifico z-20 leading-[117%] text-center text-[#100D0D]/80  capitalize">
            happy birthday eggy
          </span>
        </motion.div>

        <motion.div
          variants={planetVariants("left")}
          className="absolute top-[50%] right-[10%]"
        >
          <img
            src="/cartoon-egg.png"
            className="w-[250px] h-[250px] opacity-90 "
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
