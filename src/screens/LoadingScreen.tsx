import React, { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpg"; // Importa la imagen aquí

interface LoadingScreenProps {
  onFinish: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2400);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-white">
      <div className="flex flex-col justify-center items-center">
        <motion.img
          src={logo} // Usa la imagen importada
          alt="Logo"
          className="w-48 h-48 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="w-3/4 max-w-md h-2 bg-gray-300 rounded-full overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <motion.div
            className="h-full bg-green-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen;
