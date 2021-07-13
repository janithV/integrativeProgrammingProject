import React from "react";

const Alert = (props) => ( 
    <tr>
      <td>{props.alert.date.substring(0,10)}</td>
      <td>{props.alert.date.substring(11,16)}</td>
      <td>{props.alert.value}</td>
      <td>{props.alert.alertMessage}</td>
    </tr>
);

export default Alert;