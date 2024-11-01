// src/components/FlyingFly.tsx
import React from "react";
import { motion } from "framer-motion";
import Caja from "../assets/MoscaBg/Caja.png";
import Mosca from "../assets/MoscaBg/Mosca.png";

interface FlyingFlyProps {
  delay: number;
  size?: number;
}

const FlyingFly: React.FC<FlyingFlyProps> = ({ delay, size = 40 }) => {
  return (
    <motion.div
      className="absolute"
      style={{
        width: size,
        height: size,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      initial={{ x: 0, y: 0 }}
      animate={{
        x: ["10vw", "-10vw", "20vw", "-20vw", "10vw"],
        y: ["10vh", "-10vh", "20vh", "-20vh", "10vh"],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      {/* Contenedor de la mosca y la caja */}
      <div className="w-full h-full flex flex-col items-center">
        <img src={Mosca} alt="Mosca" className="w-2/3 mb-1" />
        <img src={Caja} alt="Caja" className="w-1/2" />
      </div>
    </motion.div>
  );
};

export default FlyingFly;
