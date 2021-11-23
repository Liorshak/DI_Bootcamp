import logo from "./logo.svg";
import "./App.css";
import DemoCarousel from "./components/DemoCarousel";

function App() {
  return (
    <div className="App">
      <h1>hello</h1>

      <div style={{ height: "400px", width: "400px", margin: "auto" }}>
        <DemoCarousel />
      </div>
    </div>
  );
}

export default App;
