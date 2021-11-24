import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.shootRegular = this.shootRegular.bind(this);

    this.state = {
      favoriteColor: "red",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "Yellow" });
    }, 5000);
  }

  changeColor = () => {
    this.setState({ favoriteColor: "Blue" });
  };

  shoot = () => {
    alert("Great Shot!");
  };

  shootRegular() {
    alert(this);
  }

  shootRegularWithParameter(par) {
    console.log(par.argument); // to check with amichai
    alert(par);
  }

  shootWithArgument(par) {
    alert(par);
  }

  shootTwo = () => {
    alert(this);
  };

  render() {
    return (
      <div>
        <h1> My Favorite Color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change Color</button>
        <br />
        <br />
        <button onClick={this.shoot}>Take the shot!</button>
        <br />
        <br />
        <button onClick={this.shootRegular}>Keep Shooting!</button>
        <br />
        <br />
        <button onClick={this.shootRegularWithParameter.bind("goal")}>
          Shooting!
        </button>
        <br />
        <br />

        <button onClick={() => this.shootWithArgument("Goal")}>
          Shooting!
        </button>
        <br />
        <br />

        <button onClick={this.shootTwo}>Keep Shooting!</button>
      </div>
    );
  }
}

export default App;
