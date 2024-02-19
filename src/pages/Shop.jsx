import React from "react";
import Inner from "../components/Inner";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import data from "../../public/data.js";
import Card from "../components/cards/Card.jsx";
import transition from "../components/Transition.jsx";

const Shop = () => {
  return (
    <div style={{ color: "#ff3b00" }}>
      <Navbar />
      <div className="shop__text">Discover the latest shoes from NOCTA</div>
      <motion.div
        className="cards"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1.2 } }}
      >
        <motion.div
          initial={{ y: "-100px" }}
          whileInView={{ y: 0, transition: { duration: 0.8, delay: 0.2 } }}
          className="cards__wrapper"
        >
          {data.slice(0, 2).map((data, i) => (
            <Card data={data} key={i} />
          ))}
        </motion.div>
        <motion.div
          className="cards__wrapper"
          initial={{ y: "-100px" }}
          whileInView={{ y: 0, transition: { duration: 1, delay: 0.4 } }}
        >
          {data.slice(2, 4).map((data, i) => (
            <Card data={data} key={i} />
          ))}
        </motion.div>
        <motion.div
          className="cards__wrapper"
          initial={{ y: "-100px" }}
          whileInView={{ y: 0, transition: { duration: 1, delay: 0.6 } }}
        >
          {data.slice(4, 6).map((data, i) => (
            <Card data={data} key={i} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default transition(Shop);
