import logo from "./logo.svg";
import "./App.css";
import React from "react";
import quotes from "./components/quotes";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      quotes,
      usedQuotes: [],
      rNum: null,
    };
  }

  getNewQuote = () => {
    this.setState({ usedQuotes: [() => this.usedQuotes.push(this.rNum)] });
  };

  render() {
    let { rNum, usedQuotes, quotes } = this.state;
    const total = quotes.length - 1;

    do {
      rNum = Math.round(Math.random() * total);
    } while (usedQuotes.indexOf(rNum) > -1);
    console.log(rNum);

    const getDarkColor = () => {
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10);
      }
      return color;
    };

    var newColor = getDarkColor();

    return (
      <div className="App">
        <header className="App-header">
          <Card>
            <Card.Body style={{ color: newColor }}>
              <blockquote className=" f1 blockquote mb-0">
                <p>{quotes[rNum].quote}</p>
                <footer
                  className=" blockquote-footer"
                  style={{ color: newColor }}
                >
                  <cite title="Source Title">{quotes[rNum].author}</cite>
                </footer>
              </blockquote>
            </Card.Body>
            <Button
              variant="secondary"
              style={{
                color: "white",
                backgroundColor: newColor,
                width: "150px",
                marginLeft: "auto",
              }}
              onClick={this.getNewQuote}
            >
              New Quote
            </Button>{" "}
          </Card>
        </header>
      </div>
    );
  }
}
export default App;
