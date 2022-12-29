import React from "react";
import { motion } from "framer-motion";

const Box = ({
  color,
  eggyForms,
  index,
  squareVariants,
  setSelectedSquare,
}) => {
  return (
    <motion.div
      key={index}
      className={`square square--${color}`}
      onClick={() => setSelectedSquare(color)}
      variants={squareVariants}
      transition={{ duration: 0.2, type: "spring" }}
    >
      <img src={eggyForms[color].box} className="rounded-lg"></img>
    </motion.div>
  );
};

export default Box;
