import React from "react";
import Alert from "react-bootstrap/Alert";

const AlertMsg = (props) => {
  console.log(props);
  const { info } = props; // for last part

  return (
    // <div>
    //   <Alert className={props.color} show={props.show} role="alert">
    //     <Alert.Heading>{props.text}</Alert.Heading>
    //   </Alert>
    // </div>

    <div>
      <Alert className={info.color} role="alert">
        <Alert.Heading>{info.text}</Alert.Heading>
      </Alert>
    </div>
  );
};

export default AlertMsg;
