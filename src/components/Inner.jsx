import React from "react";
import { motion } from "framer-motion";

export default function Inner({ children }) {
  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const slide = {
    initial: {
      scaleY: 1
    },
    enter: {
      scaleY: 0,
      transition: {
        duration: 0.6,
        delay: 1,
        ease: [0.7, 0, 0.84, 0],
      },
      exit:{
        scaleY:0
      }
    },
  };

  return (
    <motion.div className="inner">
      <motion.div className="slide" {...anim(slide)} />
      {children}
    </motion.div>
  );
}
