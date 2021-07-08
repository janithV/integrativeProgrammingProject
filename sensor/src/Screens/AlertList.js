import React, { Component } from "react";
import axios from "axios";
import Alert from "./Alert";

export default class AlertList extends Component {
  constructor(props) {
    super(props);

    this.state = { alerts: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/alerts/")
      .then((response) => {
        this.setState({ alerts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  alertList() {
    return this.state.alerts.map((currentalert) => {
      return <Alert alert={currentalert} key={currentalert._id} />;
    });
  }

  render() {
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
              <tbody>{this.alertList()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
