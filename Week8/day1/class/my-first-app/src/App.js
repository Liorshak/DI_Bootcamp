import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
// import Card from "./components/Card";

import CardList from "./components/CardList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      arr: [],
      searchTxt: "",
    };
    console.log("constructor");
  }

  filterRobot = (e) => {
    return this.setState({ searchTxt: e.target.value });
  };

  render() {
    console.log("render");
    const { arr, searchTxt } = this.state;
    const filterArr = arr.filter((item) =>
      item.name.toLowerCase().includes(searchTxt.toLowerCase())
    );
    console.log("arr", arr);
    return (
      <div>
        <h1 className="tc">Robots</h1>
        <SearchBar onSearch={this.filterRobot} />
        <CardList arr_robots={filterArr} />
      </div>
    );
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        console.log(users);
        this.setState({ arr: users });
      })
      .catch((e) => {
        console.log(e);
      });
  }
}

export default App;

////////////////////////////////////////////////////////////////////

// const App = () => {
//   const robots = [
//     { id: 1, name: "Jhon", email: "jhon@gmail.com", username: "jhon" },
//     { id: 2, name: "Jhon", email: "jhon@gmail.com", username: "jhon" },
//     { id: 3, name: "Jhon", email: "jhon@gmail.com", username: "jhon" },
//     { id: 4, name: "Jhon", email: "jhon@gmail.com", username: "jhon" },
//     { id: 5, name: "Jhon", email: "jhon@gmail.com", username: "jhon" },
//     { id: 6, name: "Jhon", email: "jhon@gmail.com", username: "jhon" },
//     { id: 7, name: "Jhon", email: "jhon@gmail.com", username: "jhon" },
//     { id: 8, name: "Jhon", email: "jhon@gmail.com", username: "jhon" },
//     { id: 9, name: "Jhon", email: "jhon@gmail.com", username: "jhon" },
//   ];
//   return (
//     <div>
//       <CardList arr_robots={robots} />
//     </div>
//   );
// };

{
  /* 
       <Card id={1} name={"Jhon"} email={"jhon@gmail.com"} username={`jhon`} />
      <Card id={2} name={"Jhon"} email={"jhon@gmail.com"} username={`jhon`} /> 
       */
}

{
  /* {robots.map((item) => {
        return <Card robot={item} />;
      })} */
}
