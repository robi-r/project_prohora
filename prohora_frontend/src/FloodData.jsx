import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const FloodData = () => {
  const mockRainfallData = [
    { date: "2024-09-01", rainfall: 100 },
    { date: "2024-09-02", rainfall: 250 },
    { date: "2024-09-03", rainfall: 80 },
    { date: "2024-09-04", rainfall: 300 },
    { date: "2024-09-05", rainfall: 150 }
  ];

  const chartData = {
    labels: mockRainfallData.map(data => data.date),
    datasets: [
      {
        label: "Rainfall (mm)",
        data: mockRainfallData.map(data => data.rainfall),
        fill: false,
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)"
      }
    ]
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Rainfall (mm)"
        }
      },
      x: {
        title: {
          display: true,
          text: "Date"
        }
      }
    }
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default FloodData;
