import React, { useState, useEffect } from "react";
import axios from "axios";
import Alert from "./Alert";
import {Link} from 'react-router-dom';


const Sensor = (props) => ( 
  <li>
  <a onClick={() => props.alertList(props.sensor.id)}  className="dropdown-item">
    {props.sensor.id}
  </a>
</li>
);

function AlertList(props) {

  const [alerts, setAlerts] = useState([]);
  const [sensors, setSensors] = useState([]);  
  const [values, setValues] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/sensoralert/getallalerts")
      .then((response) => {
        setAlerts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

      axios
      .get("http://localhost:8080/sensor/getallsensors")
      .then((res) => {
        setSensors(res.data);
      });
    console.log(alerts);
    console.log(sensors);
  }, []);

  // const alertList = () => {

  //   return alerts.map((currentalert) => {
  //     return <Alert alert={currentalert} key={currentalert._id} />;
  //   });
  // };

  const alertList = (num) => {
    // console.log(alerts)
    const filteredAlerts = alerts.filter((alert) => alert.sensor.id == num);
    console.log(filteredAlerts);

    setValues(filteredAlerts);

    // return filteredAlerts.map((currentalert) => {
    //   return (
    //     <Alert
    //       alert={currentalert}
    //       key={currentalert._id}
    //     />
    //   );
    // });
  };

  return (
    <div>
      <br/>
      <br/>
      <div className="row">        
        <div className="col-4 ">
          <button className="btn btn-primary" type="submit"><Link className="btn-sensor"  to={"/sensorchart"}> View Sensor Charts</Link> </button>
        </div>         

      </div>

      <div className="row">
        <div className="dropdown mb-4">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            Select Sensor
          </button>
          <ul className="dropdown-menu">

            {sensors.map( (item, index) => {
                    return <Sensor  sensor={item} alertList={alertList} key={index} />;
                  })}
          </ul>
        </div>
      </div>
      
     
    <div className="container1" >     
 

      <br />
      <div className="row">
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
              <tbody>
                {values.map((item, index) => {
                  return <Alert alert={item} key={index} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    
    </div>
  );
}

export default AlertList;
