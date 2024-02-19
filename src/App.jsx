import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Banner from "./components/banner/Banner";
import { Router, Routes, Route, useLocation} from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { AnimatePresence } from "framer-motion";
import transition from "./components/Transition";
import { useEffect } from "react";

function App() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0); // Déplace la fenêtre vers le haut lors du chargement initial de l'application
  }, []);
  return (
    <AnimatePresence mode="wait" >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
