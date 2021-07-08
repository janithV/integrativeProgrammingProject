import React from "react";

const Alert = (props) => ( 
    <tr>
      <td>{props.alert.date}</td>
      <td>{props.alert.time}</td>
      <td>{props.alert.value}</td>
      <td>{props.alert.message}</td>
    </tr>
);

export default Alert;