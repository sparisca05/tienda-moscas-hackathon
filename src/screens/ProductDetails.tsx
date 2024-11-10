// src/screens/ProductDetails.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const ProductDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.id;
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);

  useEffect (() => {
    axios
      .get("https://tienda-moscas-hackathon.onrender.com/producto/" + id)
      .then(response => {
        setNombre(response.data.nombre);
        setPrecio(response.data.precio);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para guardar los cambios, como llamar a una API
    console.log("Producto actualizado:", { nombre, precio });
    // Volver a la pantalla de inventario después de editar
    navigate("/inventario");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">Editar Producto</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Nombre:</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Precio:</label>
            <input
              type="number"
              value={precio}
              onChange={(e) => setPrecio(Number(e.target.value))}
              className="border border-gray-300 rounded-lg p-2 w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-500 transition"
          >
            Guardar Cambios
          </button>
          <button
            onClick={() => navigate("/inventario")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-500 transition ml-2"
          >
            Cancelar
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ProductDetails;
