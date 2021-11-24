import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      languages: [
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaScript", votes: 0 },
        { name: "Java", votes: 0 },
      ],
    };
  }

  incrementOne = (i) => {
    this.setState({ votes: this.state.languages[i].votes++ });
  };

  render() {
    const { languages } = this.state;
    return (
      <div>
        {languages.map((lan, i) => {
          return (
            <Alert
              className="alert-warning mb-3 "
              style={{
                width: "40%",
                margin: "auto",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>{lan.votes}</div>
              <div>{lan.name}</div>

              <button
                key={i}
                style={{
                  color: "green",
                  background: "none",
                  border: "none",
                }}
                onClick={() => this.incrementOne(i)}
              >
                Click Here
              </button>
            </Alert>
          );
        })}
      </div>
    );
  }
}

export default App;
