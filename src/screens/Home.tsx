// src/screens/Home.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpg";
import FlyingFly from "../components/FlyingFly";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-b from-gray-100 to-gray-300 h-screen w-screen flex justify-center items-center p-4 overflow-hidden">
      {/* Moscas Animadas en el Fondo */}
      <FlyingFly delay={0} size={40} />
      <FlyingFly delay={2} size={30} />
      <FlyingFly delay={4} size={35} />
      <FlyingFly delay={6} size={25} />
      <FlyingFly delay={8} size={30} />

      <motion.div
        className="bg-white p-10 rounded-lg shadow-xl flex flex-col items-center text-center max-w-lg z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Logo con animación */}
        <motion.img
          src={logo}
          alt="Logo"
          className="w-32 h-32 mb-4 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Título y Descripción */}
        <motion.h1
          className="text-4xl font-bold text-green-600 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Bienvenido a Tienda Moscas
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-8 max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          Gestiona tu inventario en tiempo real con predicciones inteligentes y una interfaz amigable. ¡Optimiza tu negocio hoy!
        </motion.p>

        {/* Botones */}
        <div className="flex flex-col md:flex-row gap-4">
          <motion.button
            onClick={() => navigate("/inventario")}
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-500 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Inventario
          </motion.button>
          <motion.button
            onClick={() => navigate("/agregar-producto")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Productos Nuevos
          </motion.button>

          <motion.button
            onClick={() => navigate("/reportes")}
            className="px-6 py-3 bg-orange-600 text-white rounded-lg shadow-lg hover:bg-orange-500 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reportes
          </motion.button>

        </div>
      </motion.div>
    </div>
  );
};

export default Home;
