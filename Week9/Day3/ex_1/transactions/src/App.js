import logo from "./logo.svg";
import "./App.css";
import Finance_form from "./components/Finance_form";
import Finance_list from "./components/Finance_list";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Finance_form />
        <Finance_list />
      </header>
    </div>
  );
}

export default App;
