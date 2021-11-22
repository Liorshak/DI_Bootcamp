import logo from "./logo.svg";
import "./App.css";

// part 5
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <input type="text" />
//       </header>
//     </div>
//   );
// }

//part 6
// const object = {
//   first_name: "Bob",
//   last_name: "Dylan",
// };

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1> My name is {object.first_name}</h1>
//         <h2> My Last name is {object.last_name}</h2>
//       </header>
//     </div>
//   );
// }

//part 7
const animals = ["Horse", "Turtle", "Elephant", "Monkey"];
const animals2 = [
  { label: "Horse" },
  { label: "Turtle" },
  { label: "Elephant" },
  { label: "Monkey" },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {animals.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>

        <ul>
          {animals2.map((item) => {
            return <li>{item.label}</li>;
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
