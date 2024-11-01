// src/App.tsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import InventoryList from "./screens/InventoryList";
import NewProduct from "./screens/NewProduct";
import ProductDetails from "./screens/ProductDetails"; // Importar el componente ProductDetails
import Reportes from "./screens/Reportes"; // Importar el componente Reportes
import LoadingScreen from "./screens/LoadingScreen";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen onFinish={() => setIsLoading(false)} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventario" element={<InventoryList />} />
        <Route path="/agregar-producto" element={<NewProduct />} />
        <Route path="/producto" element={<ProductDetails />} /> {/* Ruta para editar producto */}
        <Route path="/reportes" element={<Reportes />} /> {/* Nueva ruta para Reportes */}
      </Routes>
    </Router>
  );
};

export default App;
