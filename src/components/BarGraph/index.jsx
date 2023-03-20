import { Stack } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  Sector,
} from "recharts";
import React, { useCallback, useState } from "react";

export function BarGraph(props) {
  const dataManipulado = props.content.map((dado, index) => {
    if (index % 2 == 0) {
      return { ...dado, color: "var(--blue-200)" };
    }
    return { ...dado, color: "var(--blue-500)" };
  });
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        className="barChart"
        width={500}
        height={300}
        data={props.content}
      >
        <XAxis dataKey="name" stroke="var(--white)" fontSize={10} />
        <YAxis stroke="var(--white)" />
        <Tooltip
          wrapperStyle={{
            width: 100,
            backgroundColor: "var(--background-gray)",
          }}
        />
        <Bar dataKey="value" barSize={25}>
          {dataManipulado.map((entry, index) => (
            <Cell fill={entry.color} key={`cell-${index}`} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
