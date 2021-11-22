import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//part 1

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <App /> */}

//     {/* <h1>Hello World!</h1> */} /// part 1

//   </React.StrictMode>,
//   document.getElementById("root")
// );

// part 2
// const myelement = React.createElement("h1", {}, "I do not use JSX!");

// ReactDOM.render(
//   myelement,

//   document.getElementById("root")
// );

//part 3

// const myelement = <h1>I Love JSX!</h1>; // par3 .1

// const sum = 5 + 5;

// const myelement = <h1>React is {sum} times better with JSX</h1>;  // part 3.2

// ReactDOM.render(myelement, document.getElementById("root"));

//part 4
// const myelement = ( // part 4.1
//   <div>
//     <h1>I am a Header.</h1>
//     <h1>I am a Header too.</h1>
//   </div>
// );

// const listItems = ( /// part 4.2
//   <ul>
//     <li>Apples</li>
//     <li>Bananas</li>
//     <li>Cherries</li>
//   </ul>
// );

// ReactDOM.render(listItems, document.getElementById("root"));

//part 5

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
