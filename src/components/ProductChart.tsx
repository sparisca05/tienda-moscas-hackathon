// src/components/ProductChart.tsx
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

interface ProductData {
  nombre: string;
  cantidad: number;
}

const ProductChart: React.FC<{ data: ProductData[] }> = ({ data }) => {
  return (
    <BarChart width={600} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="nombre" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="cantidad" fill="#82ca9d" />
    </BarChart>
  );
};

export default ProductChart;
