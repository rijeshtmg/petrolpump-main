import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarGraph = () => {
  // Define your chart data
  const data = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [
      {
        label: 'Stock',
        data: [50, 30, 20, 45],
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Bar color
        borderColor: 'rgba(75, 192, 192, 1)', // Bar border color
        borderWidth: 1,
      },
    ],
  };

  // Define chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarGraph;
