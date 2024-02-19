import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

export default function Banner() {
  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const scale = {
    initial: {
      scale: 1.5,
    },
    enter: {
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 1.2,
        ease: [0.84, 0.01, 0.71, 1],
      },
    },
  };
  return (
    <div className="banner__wrapper">
      <motion.img
        {...anim(scale)}
        src="/nocta/nocta-cover.jpeg"
        alt=""
        className="background"
      />
    </div>
  );
}
