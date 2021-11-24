import React from "react";
import Garage from "./Garage";

// const Car = () => {
//   return <h2>Hi, I am a Car!</h2>;
// };

class Car extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "red",
    };
  }

  render() {
    const { info } = this.props;
    console.log(info);
    return (
      <div>
        <header>
          <p>{info.name} </p>
          <p>{info.model}</p>
        </header>
        <Garage />
        <h2 style={{ color: this.state.color }}>Hi, I am a Car!</h2>;
      </div>
    );
  }
}

export default Car;
