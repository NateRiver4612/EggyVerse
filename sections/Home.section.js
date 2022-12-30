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
      className="w-full  flex flex-col items-center justify-center h-fit "
    >
      <div className=" flex flex-col items-center mt-[10%]">
        <TypingText title="December • 30 • 2022" />
        <motion.div variants={navVariants} initial="hidden" whileInView="show">
          <span className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[8rem] font-pacifico z-20 leading-[117%] text-center text-[#100D0D]/80  capitalize">
            happy birthday eggy
          </span>
        </motion.div>

        <motion.div
          variants={planetVariants("left")}
          className="absolute mt-[5%] right-[20%]"
        >
          <img
            src="/cartoon-egg.png"
            className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[170px] md:h-[170px]  xl:w-[250px] xl:h-[250px] opacity-90 "
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
