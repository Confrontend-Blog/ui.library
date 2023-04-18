import { memo, useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";

import { Chart, LinearScale, CategoryScale, BarElement } from "chart.js";
import React from "react";

// Register the linear scale and category scale
Chart.register(LinearScale, CategoryScale, BarElement);

type ChartData = {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    backgroundColor?: string[];
  }>;
};

type ChartProps = {
  data: ChartData;
  options?: object;
};

const BarChart = ({ data, options }: ChartProps) => {
    console.log('render');
    
  return (
    <>
      <div className="header">
        <h1 className="title">Monthly Sales</h1>
      </div>
      <Bar data={data} options={options} />
    </>
  );
};
export default memo(BarChart);
