import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const TransitionHome = () => {
  return (
    <>
      <motion.div
        className="slide-in__home"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ delay: 1.5, duration: 0.6, ease: [0.84, 0.01, 0.71, 1] }}
      >
        <motion.div
          className="logo__transition"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0}}
          transition={{ duration: 1.5 }}
        >
          NOCTA
        </motion.div>
      </motion.div>
    </>
  );
};

export default TransitionHome;
