// src/screens/InventoryList.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface ProductInventory {
  inventario_id: number;
  producto_id: number;
  nombre: string;
  precio: number;
  cantidad: number;
  fecha_actualizacion: string;
}

const InventoryList: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [inventory, setInventory] = useState<ProductInventory[]>([
    {
      inventario_id: 1,
      producto_id: 1,
      nombre: "Producto A",
      precio: 100,
      cantidad: 20,
      fecha_actualizacion: "2024-10-31",
    },
    {
      inventario_id: 2,
      producto_id: 2,
      nombre: "Producto B",
      precio: 200,
      cantidad: 5,
      fecha_actualizacion: "2024-10-30",
    },
    {
      inventario_id: 3,
      producto_id: 3,
      nombre: "Producto C",
      precio: 150,
      cantidad: 10,
      fecha_actualizacion: "2024-10-29",
    },
    {
      inventario_id: 4,
      producto_id: 4,
      nombre: "Producto D",
      precio: 300,
      cantidad: 15,
      fecha_actualizacion: "2024-10-28",
    },
  ]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredInventory = inventory.filter(item =>
    item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">Inventario</h1>
        <div className="flex justify-end mb-4">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-500"
          >
            Volver al Home
          </button>
        </div>

        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="Buscar producto..."
            value={searchTerm}
            onChange={handleSearch}
            className="border border-gray-300 rounded-lg p-2 w-full max-w-md"
          />
        </div>

        <div className="w-full overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Nombre</th>
                <th className="py-2 px-4 border-b text-left">Precio</th>
                <th className="py-2 px-4 border-b text-left">Cantidad</th>
                <th className="py-2 px-4 border-b text-left">Fecha Actualización</th>
                <th className="py-2 px-4 border-b text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredInventory.map((item, index) => (
                <motion.tr
                  key={item.inventario_id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-left hover:bg-gray-50"
                >
                  <td className="py-2 px-4 border-b">{item.nombre}</td>
                  <td className="py-2 px-4 border-b">${item.precio}</td>
                  <td className="py-2 px-4 border-b">{item.cantidad}</td>
                  <td className="py-2 px-4 border-b">{item.fecha_actualizacion}</td>
                  <td className="py-2 px-4 border-b flex space-x-2">
                    <button
                      onClick={() => navigate("/producto", { state: item })}
                      className="text-blue-500 hover:underline"
                    >
                      Editar
                    </button>
                    <button className="text-red-500 hover:underline">Eliminar</button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default InventoryList;
