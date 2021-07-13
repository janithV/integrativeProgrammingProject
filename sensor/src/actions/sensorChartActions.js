import React, { useState, useEffect } from "react";
import "../index.css";
import SensorChart from "../Screens/SensorChart";
import axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import moment from "moment";
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

function SensorChartActions(props) {
  const [sensorData, setSensorData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Temperature",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
      },
    ],
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/sensor/getallsensors", {
        method: "GET",
      })
      .then((res) => {
        setSensorData(res.data);
      });
  }, []);

  const handleOnSelect = (event, data) => {
    setSelectedOption({label: event.label, value: event.value});
    axios
      .get(
        `http://localhost:8080/sensorreading/getAllReadings/${event.value}`,
        {
          method: "GET",
        }
      )
      .then((res) => {
        const labels = res.data.map((item) => moment(item.date).format('LLL'));
        const values = res.data.map((item) => item.value);
        const datasets = [
          {
            label: "Temperature",
            data: values,
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
            ],
          },
        ];
        setChartData({
          ...chartData,
          datasets,
          labels,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Button className="alert-btn" variant="contained" color="primary"><Link className="alertbtnname" to={"/alert"}>View Alerts</Link></Button>

        <div className="chart-dropdown">
            <label>Select the Sensor: </label>
            <Dropdown
                options={sensorData.map((val) => ({
                label: val.id,
                value: val.id,
                }))}
                onChange={handleOnSelect}
                value={selectedOption}
                placeholder="Select option"
            />
        </div>
      <SensorChart
        chartData={chartData}
        TempType="Outdoor"
        legendPosition="bottom"
      />
    </div>
  );
}

export default SensorChartActions;
