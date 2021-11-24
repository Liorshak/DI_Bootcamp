import logo from "./logo.svg";
import "./App.css";
import Car from "./components/Car";
import Phone from "./components/Phone";
const carinfo = { name: "Ford", model: "Mustang" };

function App() {
  return (
    <div className="App">
      {/* <Car info={carinfo} /> */}

      <Phone />
    </div>
  );
}

export default App;
