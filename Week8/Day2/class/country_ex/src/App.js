import logo from "./logo.svg";
import React from "react";
import "./App.css";
import DropDownSelect from "./components/DropDownSelect";

class App extends React.Component {
  // componentDidMount() {
  //   fetch("http://localhost:5000/country")
  //     .then((res) => res.json())
  //     .then((data) => this.setState({ arrCountry: data }))
  //     .catch((err) => console.log(err));
  // }

  render() {
    return (
      <div>
        <DropDownSelect />
        {/* <DropDownSelect /> */}
      </div>
    );
  }
}
export default App;
