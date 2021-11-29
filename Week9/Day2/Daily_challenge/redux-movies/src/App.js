import logo from "./logo.svg";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Movies</h1>
        <div id="mainRoot">
          <MovieList />
          <MovieDetails />
        </div>
      </header>
    </div>
  );
}

export default App;
