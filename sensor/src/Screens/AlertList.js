import React, { useState, useEffect } from "react";
import axios from "axios";
import Alert from "./Alert";

function AlertList(props) {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/alerts/")
      .then((response) => {
        setAlerts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const alertList = () => {
    return alerts.map((currentalert) => {
      return <Alert alert={currentalert} key={currentalert._id} />;
    });
  };

  return (
    <div className="container">
      <div className="dropdown mb-4">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          Select Sensor
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              {" "}
              Temperature
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              {" "}
              Pressure{" "}
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              {" "}
              Humidity{" "}
            </a>
          </li>
        </ul>
      </div>

      <div className="card">
        <div className="card-body">
          <h3> Past Alert Details</h3>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Value</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>{alertList()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AlertList;
