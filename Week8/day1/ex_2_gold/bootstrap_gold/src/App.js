import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const data = {
  image:
    "https://images-na.ssl-images-amazon.com/images/I/910y3OPZItL._AC_SL1500_.jpg",
  cardTitle: "Bob Dylan",
  cardDescription:
    "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
  button: {
    url: "https://en.wikipedia.org/wiki/Bob_Dylan",
    label: "Go to wikipedia",
  },
};

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

function App() {
  return (
    <div className="App">
      <div style={{ margin: "auto", display: "inline-block" }}>
        <div className="card m-5" style={{ width: "30rem" }}>
          <img className="card-img-top" src={data.image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{data.cardTitle}</h5>
            <p className="card-text">{data.cardDescription}</p>
            <a href={data.button.url} class="btn btn-primary">
              {data.button.label}
            </a>
          </div>
        </div>
      </div>

      <div>
        <ListGroup as="ul" style={{ width: "18rem", margin: "auto" }}>
          {planets.map((item, i) => {
            return (
              <ListGroup.Item as="li" key={i}>
                {item}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
    </div>
  );
}

export default App;
