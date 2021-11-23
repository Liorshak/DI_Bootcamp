import React from "react";
import RoboCard from "./RoboCard";

class RoboList extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ robots: data }))
      .catch((err) => console.log(err));
  }

  render() {
    const { robots } = this.state;
    return (
      <div>
        {robots.map((v, i) => {
          return <RoboCard key={i} info={v} />;
        })}
      </div>
    );
  }
}

export default RoboList;
