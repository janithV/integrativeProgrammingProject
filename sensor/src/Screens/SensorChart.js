import React, { useState, useEffect } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import "../index.css";

function SensorChart(props) {
  const { displayTitle, displayLegend, legendPosition, TempType, chartData } = props;

  return (
    <div className="chart">
        <div className="chart-box">
            <Bar
                data={chartData}
                options={{
                title: {
                    display: displayTitle,
                    text: "Past Sensor Data - " + TempType,
                    fontSize: 25,
                },
                legend: {
                    display: displayLegend,
                    position: legendPosition,
                },
                }}
            />
    </div>

    <div className="chart-box">
        <Line
            data={chartData}
            options={{
            title: {
                display: displayTitle,
                text: "Past Sensor Data - " + TempType,
                fontSize: 25,
            },
            legend: {
                display: displayLegend,
                position: legendPosition,
            },
            }}
        />
    </div>
    </div>
  );
}

export default SensorChart;
