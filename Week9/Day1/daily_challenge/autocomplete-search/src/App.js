import logo from "./logo.svg";
import "./App.css";
import Searchbar from "./components/Searchbar";
import Countries from "./components/Countries";
import React, { useState, useEffect } from "react";
function App() {
  const [filteredCountry, setFilteredCountry] = useState([]);
  const [chosenCountry, setChosenCountry] = useState("");
  const [searchText, setSearchText] = useState("");
  const [countryArr, setCountryArr] = useState([]);

  const searchHandle = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    setCountryArr(Countries);
    console.log(countryArr);
  }, []);

  useEffect(() => {
    let newArr = countryArr.filter((v) =>
      v.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCountry(newArr);
  }, [searchText]);

  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Auto Completed</h1>
      <Searchbar
        filteredCountry={filteredCountry}
        searchText={searchText}
        searchHandle={searchHandle}
        chosenCountry={chosenCountry}
        setChosenCountry={setChosenCountry}
        setFilteredCountry={setFilteredCountry}
      />
    </div>
  );
}

export default App;
