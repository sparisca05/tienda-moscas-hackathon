// src/screens/Reportes.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ProductChart from "../components/ProductChart"; 
import DateChart from "../components/DateChart"; 

const Reportes: React.FC = () => {
  const navigate = useNavigate();

  const lowStockProducts = [
    { nombre: "Producto A", precio: 100, cantidad: 2 },
    { nombre: "Producto B", precio: 200, cantidad: 3 },
    { nombre: "Producto E", precio: 80, cantidad: 1 },
    { nombre: "Producto F", precio: 150, cantidad: 4 },
    { nombre: "Producto G", precio: 90, cantidad: 5 },
    { nombre: "Producto H", precio: 120, cantidad: 6 },
    { nombre: "Producto I", precio: 250, cantidad: 2 },
    { nombre: "Producto J", precio: 180, cantidad: 2 },
    { nombre: "Producto K", precio: 60, cantidad: 3 },
    { nombre: "Producto L", precio: 300, cantidad: 1 },
  ];

  const topSellingProducts = [
    { nombre: "Producto C", precio: 150, cantidad: 50 },
    { nombre: "Producto D", precio: 300, cantidad: 40 },
    { nombre: "Producto M", precio: 120, cantidad: 60 },
    { nombre: "Producto N", precio: 250, cantidad: 30 },
    { nombre: "Producto O", precio: 180, cantidad: 25 },
  ];

  const totalInventoryValue = 5000;

  const dateChanges = [
    { fecha: "2024-10-01", cantidad: 10 },
    { fecha: "2024-10-15", cantidad: 20 },
    { fecha: "2024-10-31", cantidad: 5 },
    { fecha: "2024-11-01", cantidad: 15 },
    { fecha: "2024-11-10", cantidad: 30 },
  ];

  return (
    <div className="flex justify-center items-start h-screen bg-gray-100 p-4">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl mr-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-center mb-6">Reportes de Inventario</h1>

        {/* Productos con Bajo Stock */}
        <motion.div className="mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold mb-4">Productos con Bajo Stock</h2>
          <div className="max-h-40 overflow-y-auto"> {/* Contenedor con scroll */}
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left">Nombre</th>
                  <th className="py-2 px-4 border-b text-left">Precio</th>
                  <th className="py-2 px-4 border-b text-left">Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {lowStockProducts.map((product, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-left hover:bg-gray-50"
                  >
                    <td className="py-2 px-4 border-b">{product.nombre}</td>
                    <td className="py-2 px-4 border-b">${product.precio}</td>
                    <td className="py-2 px-4 border-b">{product.cantidad}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Productos Más Vendidos */}
        <motion.div className="mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold mb-4">Productos Más Vendidos</h2>
          <div className="max-h-40 overflow-y-auto"> {/* Contenedor con scroll */}
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left">Nombre</th>
                  <th className="py-2 px-4 border-b text-left">Precio</th>
                  <th className="py-2 px-4 border-b text-left">Cantidad Vendida</th>
                </tr>
              </thead>
              <tbody>
                {topSellingProducts.map((product, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-left hover:bg-gray-50"
                  >
                    <td className="py-2 px-4 border-b">{product.nombre}</td>
                    <td className="py-2 px-4 border-b">${product.precio}</td>
                    <td className="py-2 px-4 border-b">{product.cantidad}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Valor Total de Inventario */}
        <motion.div className="mb-6 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold mb-4">Valor Total de Inventario</h2>
          <p className="text-lg font-bold">${totalInventoryValue}</p>
        </motion.div>

        {/* Botón para volver al Home */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-500 transition"
          >
            Volver al Home
          </button>
        </div>
      </motion.div>

      {/* Gráficos a la derecha */}
      <div className="flex flex-col w-full max-w-md">
        <motion.div className="mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold mb-4">Cantidad de Productos por Nombre</h2>
          <ProductChart data={topSellingProducts} />
        </motion.div>

        <motion.div className="mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold mb-4">Cambios con las Fechas</h2>
          <DateChart data={dateChanges} />
        </motion.div>
      </div>
    </div>
  );
};

export default Reportes;
