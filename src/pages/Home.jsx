import React from "react";
import Banner from "../components/banner/Banner";
import Card from "../components/cards/Card";
import data from "../../public/data.js";
import Inner from "../components/Inner.jsx";
import { motion, useScroll } from "framer-motion";
import { useEffect } from "react";
import { useRef } from "react";
import TransitionHome from "../components/TransitionHome.jsx";
import transition from "../components/Transition.jsx";
import Presentation from "../components/sections/Presentation.jsx";

const Home = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);
  return (
    <>
      <TransitionHome />
      <Banner />
      <div className="shop__text">Discover the latest shoes from NOCTA</div>

      <motion.div
        ref={ref}
        className="cards"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1.2 } }}
      >
        <motion.div
          initial={{ y: "100px" }}
          whileInView={{ y: 0, transition: { duration: 0.8, delay: 0.2 } }}
          className="cards__wrapper"
        >
          {data.slice(0, 2).map((data, i) => (
            <Card data={data} key={i} />
          ))}
        </motion.div>
        <motion.div
          className="cards__wrapper"
          initial={{ y: "100px" }}
          whileInView={{ y: 0, transition: { duration: 1, delay: 0.4 } }}
        >
          {data.slice(2, 4).map((data, i) => (
            <Card data={data} key={i} />
          ))}
        </motion.div>
        <motion.div
          className="cards__wrapper"
          initial={{ y: "100px" }}
          whileInView={{ y: 0, transition: { duration: 1, delay: 0.6 } }}
        >
          {data.slice(4, 6).map((data, i) => (
            <Card data={data} key={i} />
          ))}
        </motion.div>
      </motion.div>
      <Presentation />
    </>
  );
};

export default transition(Home);
