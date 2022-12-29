import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgCloseO } from "react-icons/cg";

const wrapperVariants = {
  initial: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    transition: { duration: 0.4 },
  },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: { duration: 0.4, staggerChildren: 0.1 },
  },
  exit: {
    clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    transition: { duration: 0.4 },
  },
};
const squareVariants = {
  initial: {
    opacity: 0,
    scale: 0.3,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
};

const eggyForms = {
  angry: {
    box: "./hello-eggy-03.png",
    title: "Boiled Egg",
    avatar: "",
    description:
      "In this form, you always make a grumbling face, and your eyes roll oppositely with  my direction to express your attitude😏😏. The initial skills of yours are always blasting to my face with something like 'GIẬN', 'HỨ', angry stickers, angry emojis, 😡😡 etc... and remain with deadly silence foever after 💀💀💀. Anyway, i just wanna say, i still love you with your goofy face and I wish you a happier birthday than anyone else has wished you.",
  },
  happy: {
    box: "./hello-eggy-02.png",
    title: "Happy Egg",
    avatar: "",
    description:
      "The best form of you so far, giggling all day and sometimes laughing your ass off over my jokes 😎🤙. I love those moments  so much because I always gotta chance to treat you like a little idiot brute 🥴🤡.This year is happy enough for me and i hope we will strike for more happiness, Happy birthday, little champ 🏆🥂.",
  },
  sad: {
    box: "./hello-eggy-04.png",
    title: "Gloomy Egg",
    avatar: "",
    description:
      "In life, we always have such moments that feel like absolute dog shit 🐕💩 . But we are both warriors despite the fact that you don't have the sword🍆, anyway just remember to be strong and unbreakable, just like when some dickhead tries to break the egg vertically, the only thing that got end up broken is them, not the egg. Be the egg that cannot be broken. Happy level-up day.",
  },
  smart: {
    box: "./hello-eggy-06.png",
    title: "Brain-using Egg",
    avatar: "",
    description:
      "This is the most important form because intelligence is everything, life is good but it can always be better. I'm always impressed by the hours and work you put into your objectives whenever you have one, keep learning, and don't stop, try to be more determined with your time then you are so damn near Perfect. Of all the people I know, you are the one whose birthday is today. Wishing you many more candles to blow or just my 'candle'.",
  },
};

const Flashcards = () => {
  const [selectedSquare, setSelectedSquare] = useState(null);
  const renderSquares = () => {
    // const squares = ["yellow", "green", "blue", "violet"];
    const squares = ["angry", "happy", "sad", "smart"];
    return squares.map((color, i) => (
      <motion.div
        key={i}
        className={`square square--${color}`}
        onClick={() => setSelectedSquare(color)}
        variants={squareVariants}
        transition={{ duration: 0.2, type: "spring" }}
      >
        <img src={eggyForms[color].box} className="rounded-lg"></img>
      </motion.div>
    ));
  };
  return (
    <div
      className={`cp-transition cp-transition__container cp-transition__container--${selectedSquare}`}
    >
      <AnimatePresence exitBeforeEnter initial={false}>
        {selectedSquare ? (
          <motion.div
            className={`card card__wrapper card__wrapper--${selectedSquare}`}
            key="card"
            variants={wrapperVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="card__header">
              <span>{eggyForms[selectedSquare].title}</span>
              <button onClick={() => setSelectedSquare(null)}>
                <CgCloseO size={35} color="white" />
              </button>
            </div>
            <div className="card__content">
              <div className="card__text-placeholder font-sevillana">
                {eggyForms[selectedSquare].description}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="cp-transition__squares-wrapper"
            key="squares"
            variants={wrapperVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {renderSquares()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Flashcards;
