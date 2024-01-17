
import React from "react";
import Chart from "chart.js/auto";
import { Bar, Line ,Pie } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: [
        "#007D9C",
        "#244D70",
        "#D123B3",
        "#F7E018",
        "#fff",
        "#FE452A",
      ],
      // borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const LineChart = () => {
  return (
    <div className="">
      <div className="text-red-200">Hello word </div>
      <div className="w-[400px] h-[300px]">
      <Line data={data} />

      </div>
      <div className="w-[400px] h-[300px]">
      <Bar data={data} />

      </div>
      <div className="w-[400px] h-[300px]">
      <Pie data={data} />

      </div>
    </div>
  );
};

export default LineChart;