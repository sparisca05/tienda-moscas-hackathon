// src/components/DateChart.tsx
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

interface DateChangeData {
  fecha: string;
  cantidad: number;
}

const DateChart: React.FC<{ data: DateChangeData[] }> = ({ data }) => {
  return (
    <LineChart width={600} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="fecha" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="cantidad" stroke="#82ca9d" />
    </LineChart>
  );
};

export default DateChart;
