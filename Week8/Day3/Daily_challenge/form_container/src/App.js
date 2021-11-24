import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fName: "",
      lName: "",
      age: "",
      gender: "",
      destination: "",
      nuts: false,
      Lactose: false,
      Vegan: false,
    };
  }
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div>
        <form
          id="mainform"
          className="bg-warning p-3"
          onSubmit={this.handleChange}
        >
          <input
            type="text"
            name="fName"
            placeholder="Whats your name"
            onChange={this.handleInputChange}
          />
          <br />
          <input
            type="text"
            name="lName"
            placeholder="Whats your name"
            onChange={this.handleInputChange}
          />
          <br />
          <input
            type="number"
            name="age"
            placeholder="Whats your age"
            onChange={this.handleInputChange}
          />
          <br />
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={this.handleInputChange}
          />
          Male
          <br />
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={this.handleInputChange}
          />
          Female
          <br />
          <select name="destination" onChange={this.handleInputChange}>
            <strong>Select your destination</strong>
            <br />
            <option value="">Please Choose Destination</option>
            <option value="Japan">Japan</option>
            <option value="Thailand">Thailand</option>
            <option value="Brazil">Brazil</option>
          </select>
          <br />
          <strong>Dietary restrictions:</strong>
          <br />
          <input
            type="checkbox"
            name="nuts"
            value="nuts"
            onChange={this.handleInputChange}
          />
          nuts <br />
          <input
            type="checkbox"
            name="Lactose"
            value="Lactose"
            onChange={this.handleInputChange}
          />
          Lactose
          <br />
          <input
            type="checkbox"
            name="Vegan"
            value="Vegan"
            onChange={this.handleInputChange}
          />
          Vegan
          <br />
          <button>Submit</button>
        </form>

        <hr />

        <section className="bg-success p-3" style={{ color: "white" }}>
          <h3>Entered information:</h3>
          <p>
            Your name: {this.state.fName} {this.state.lName}
            <br />
            Your age: {this.state.age}
            <br />
            Your gender: {this.state.gender}
            <br />
            Your destination: {this.state.destination}
            <br />
            Your dietary restrictions:
            <br />
            <br />
            **Nuts free : {this.state.nuts ? "yes" : "no"}
            <br />
            **Lactose free : {this.state.Lactose ? "yes" : "no"}
            <br />
            **Vegan meal : {this.state.Vegan ? "yes" : "no"}
            <br />
          </p>
        </section>
      </div>
    );
  }
}

export default App;
