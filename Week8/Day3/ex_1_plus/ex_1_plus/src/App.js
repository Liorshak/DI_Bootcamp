import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Form from "./components/Form";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isToggleOn: true,
      btnTxt: "ON",
      username: "",
      age: null,
      errorMessage: "",
      txtArea: "Please add your comment bellow",
    };
  }

  handleKeyPress = (e) => {
    if (e.which == 13) {
      alert(`The enter key was pressed, your input is: ${e.target.value}`);
    }
  };

  toggleBtn = () => {
    this.state.isToggleOn
      ? this.setState({ btnTxt: "OFF", isToggleOn: false })
      : this.setState({ btnTxt: "ON", isToggleOn: true });
  };

  // usernameChange = (e) => {
  //   this.setState({ username: e.target.value });
  //   console.log(this.state.username);
  // };

  usernameChange = (e) => {
    // e.target.preventDefault(); // .children[2]
    if (e.which == 13) {
      this.setState({ username: e.target.value });
      console.log(this.state.username);
    }
  };

  usernameSubmit = (e) => {
    e.preventDefault();

    if (e.target.children[5].value == parseInt(e.target.children[5].value)) {
      this.setState({
        username: e.target.children[2].value,
        age: e.target.children[5].value,
        errorMessage: "",
      });
      console.log("hey", this.state.username);
      // alert(`You are submitting ${e.target.children[2].value}`);
    } else {
      // alert("Your age must be numbers");
      this.setState({ errorMessage: "Your age must be numbers" });
    }
  };

  render() {
    const clickHandler = () => {
      alert("I was clicked");
    };

    return (
      <>
        <button onClick={clickHandler}>Click Me!</button> <br />
        <input
          type="text"
          onKeyPress={this.handleKeyPress}
          placeholder="Press the ENTER key"
        />
        <br />
        <button onClick={this.toggleBtn} type="toggle">
          {this.state.btnTxt}{" "}
        </button>
        <br />
        <Form
          errMsg={this.state.errorMessage}
          age={this.state.age}
          submitIt={this.usernameSubmit}
          func={this.usernameChange}
          username={this.state.username}
          alertIt={this.mySubmitHandler}
          txtArea={this.state.txtArea}
        />
      </>
    );
  }
}
export default App;
