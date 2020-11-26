import React from "react";
import { Line } from "react-chartjs-2";

const state = {
  labels: ["10am", "12pm", "2pm", "4pm", "6pm", "8pm"],
  datasets: [
    {
      label: "dataset1",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(255, 99, 132,1)",
      borderColor: "rgba(255, 99, 132,1)",
      borderWidth: 2,
      data: [65, 5, 45, 33, 45, 30],
    },
    {
      label: "dataset2",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 2,
      data: [82, 74, 55, 5, 70, 63],
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: "No.s of View of Platform",
            fontSize: 20,
          },
          responsive: true,
          title: {
            display: true,
            text: "No.s of View of Platform",
          },
          tooltips: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },

          scales: {
            xAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "Duration=2hrs",
                },
              },
            ],
            yAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "No.s of Views",
                },
                ticks: {
                  min: 0,
                  max: 100,
                  stepSize: 5,
                  display: true,
                },
              },
            ],
          },

          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};
export default LineChart;
