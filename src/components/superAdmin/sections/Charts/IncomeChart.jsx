import React from 'react'
import { Pie } from "react-chartjs-2";

const data = {
        labels: ['Books And Uniform Sales', 'Rent', 'Miscelianous', 'Donation'],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5],
      backgroundColor: [
        "rgba(255, 99, 132)",
        "rgba(54, 162, 235)",
        "rgba(255, 206, 86)",
        "rgba(75, 192, 192)",
        "rgba(153, 102, 255 )",
        "rgba(255, 159, 64)",
      ],
      borderColor: [
        "rgba(255, 99, 132)",
        "rgba(54, 162, 235)",
        "rgba(255, 206, 86)",
        "rgba(75, 192, 192)",
        "rgba(153, 102, 255)",
        "rgba(255, 159, 64)",
      ],
      borderWidth: 2,
    },
  ],
};

const IncomeChart = () => {
  return (
    <div>
      <h1 className="text-green-400 text-2xl underline  text-center">Income Chart</h1>
      <Pie data={data} />
    </div>
  );
}

export default IncomeChart
