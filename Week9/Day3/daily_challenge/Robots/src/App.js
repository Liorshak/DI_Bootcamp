import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import RoboList from "./components/RoboList";
import React from "react";
import { connect } from "react-redux";
import { getUsers } from "./actions";

class App extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   robotArr: [],
    //   text: "",
    // };
  }

  componentDidMount() {
    const { getUsers } = this.props;
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => getUsers(data))
      .catch((err) => console.log(err));
  }

  // filterRobot = (e) => {
  //   console.log(e.target.value);
  //   this.setState({ text: e.target.value });
  // };
  render() {
    // const { robotArr, text } = this.state;
    // console.log("This is the text=>", text);
    // const filter = robotArr.filter((item) =>
    //   item.name.toLowerCase().includes(text.toLowerCase())
    // );
    return (
      <div className="App">
        <SearchBar />

        <RoboList />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: (data) => dispatch(getUsers(data)),
  };
};

export default connect(null, mapDispatchToProps)(App);
