// src/screens/NewProduct.tsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NewProduct: React.FC = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [cantidad, setCantidad] = useState("");
  const product = {
    nombre: nombre,
    precio: parseFloat(precio),
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();

    axios
      .post("https://tienda-moscas-hackathon.onrender.com/inventario", {
        product,
        cantidad: parseInt(cantidad),
      })
      .then(() => {
        alert("Producto agregado correctamente");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-center mb-6">Agregar Nuevo Producto</h1>
        <form onSubmit={handleAddProduct} className="flex flex-col gap-4">
          <div>
            <label htmlFor="nombre" className="block text-lg font-medium text-gray-700">Nombre del Producto</label>
            <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required className="mt-1 p-2 border border-gray-300 rounded-lg w-full" />
          </div>

          <div>
            <label htmlFor="precio" className="block text-lg font-medium text-gray-700">Precio</label>
            <input type="number" id="precio" value={precio} onChange={(e) => setPrecio(e.target.value)} required className="mt-1 p-2 border border-gray-300 rounded-lg w-full" />
          </div>

          <div>
            <label htmlFor="cantidad" className="block text-lg font-medium text-gray-700">Cantidad Inicial</label>
            <input type="number" id="cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)} required className="mt-1 p-2 border border-gray-300 rounded-lg w-full" />
          </div>

          <button type="submit" className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-500 transition">Agregar Producto</button>
        </form>

        <button onClick={() => navigate("/")} className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-500 transition w-full">Volver al Home</button>
      </motion.div>
    </div>
  );
};

export default NewProduct;
