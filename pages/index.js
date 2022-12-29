import Home from "../sections/Home.section";
import LetterSection from "../sections/Letter/Letter.section";
import Flashcards from "../sections/Flashcards/Flashcards.section";
import VideoCard from "../sections/Video.section";
import Goodbye from "../sections/Goodbye.section";

import {
  planetVariants,
  staggerContainer,
  navVariants,
  textContainer,
  textVariant2,
  fadeIn,
} from "../utils/motion";
import { motion } from "framer-motion";
import { TypingText } from "../components/CustomTexts";
export default function Page() {
  return (
    <div className="h-[100vh] relative bg-[#f9f6ed] overflow-x-hidden">
      <div className="h-full w-full">
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
            <motion.div
              variants={navVariants}
              initial="hidden"
              whileInView="show"
            >
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
      </div>
      <div className="h-full w-full pt-[5%] p-0 text-[3rem] font-bold ">
        <img src="/section_2_bg.png" className="absolute" />
        <LetterSection></LetterSection>

        <div className="mt-[5%] w-full flex flex-col items-center h-full">
          <div class="logo is-animetion text-[#e7e0d0]">
            <span>E</span>
            <span>G</span>
            <span>G</span>
            <span>Y</span>
            <span className="px-4"> </span>
            <span>F</span>
            <span>O</span>
            <span>R</span>
            <span>M</span>
            <span>S</span>
          </div>
          <Flashcards></Flashcards>
        </div>
      </div>

      <div className="h-full mt-[25%] pb-[20px] w-full ">
        <img src="/section_3_bg.png" className="absolute" />
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
      </div>
      <div className="h-full mt-[20%] w-full absolute">
        <img src="/section_4_bg.png" className="absolute " />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={staggerContainer}
          className="flex h-full justify-center"
        >
          <div className="flex mt">
            <motion.div
              variants={fadeIn("right", "spring", 0.1, 1)}
              className="relative flex-1 mt-[20%] flex  items-center"
            >
              <img
                src="/demo3.png"
                alt="planet-09"
                height={1400}
                width={1200}
              />
              <motion.div
                variants={navVariants}
                className="flex flex-col font-bold text-[3rem] font-playfair"
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
              className="relative flex-1 mt-[20%] p-0 flex  items-center"
            >
              <img
                src="/demo4.png"
                alt="planet-09"
                height={1400}
                width={1200}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
