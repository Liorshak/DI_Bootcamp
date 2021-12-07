import "./App.css";
import NavbarRoutes from "./components/NavbarRoutes";
import Home from "./components/Home";
import Favorite from "./components/Favorite";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(far, fas);

function App() {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [favoriteCityArr, setFavoriteCityArr] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [chosenCity, setChosenCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState({});
  const [forcast5dayArr, setForcast5dayArr] = useState("");
  const [weatherFlag, setWeatherFlag] = useState(false);
  const [cityData, setCityData] = useState([]);
  const [favoriteCitiesCurrentWeather, setFavoriteCitiesCurrentWeather] =
    useState([]);

  const addToFavorite = (city) => {
    let index = cityData.findIndex((v) => v.name === city);
    console.log(favoriteCityArr);
    if (index >= 0) {
      if (favoriteCityArr.findIndex((v) => v.name === city) == -1) {
        if (favoriteCityArr.length > 0) {
          setFavoriteCityArr([
            ...favoriteCityArr,
            { name: city, id: cityData[index].id },
          ]);
        } else {
          setFavoriteCityArr([{ name: city, id: cityData[index].id }]);
        }
        getCitiesforcast(cityData[index].id);

        alert(`i added ${chosenCity} from favorites list`);
      } else {
        alert("This city already in the favorites list");
      }
    } else {
      alert("please choose a valid city");
    }
  };

  const removeFromFavorites = (city) => {
    let index = favoriteCityArr.findIndex((v) => v.name === city);
    if (index != -1) {
      let newList = [...favoriteCityArr];
      newList.splice(index, 1);
      setFavoriteCityArr(newList);
      alert(`i removed ${chosenCity} from favorites list`);
    } else {
      alert("this city is not in the favorites list");
    }
  };

  useEffect(() => {
    let favorites = JSON.parse(localStorage.getItem("favorite"));
    setFavoriteCityArr(favorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favoriteCityArr));
  }, [favoriteCityArr]);

  const getCityId = (city) => {
    let index = cityData.findIndex((v) => v.name === city);
    return cityData[index].id;
  };

  const apiKey = "ad4b71187862a381f12f586f26f3b73a";

  const getCity5dayForcast = (id) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((res) => setForcast5dayArr([...res.list]))
      .catch((err) => console.log(err));
    console.log(forcast5dayArr);
  };

  const getCitiesforcast = (id) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((res) =>
        setFavoriteCitiesCurrentWeather([...favoriteCitiesCurrentWeather, res])
      )
      .catch((error) => console.log(error));
  };

  const getCityCurrentForcast = async (id) => {
    let data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((res) => setCurrentWeather({ ...res }))
      .catch((error) => console.log(error));

    console.log(currentWeather);
  };

  useEffect(async () => {
    let cityDatas = await fetch("/cityList.json").then((res) => res.json());
    setCityData(cityDatas);
    // .then((res) => console.log(res))
    let cityNames = await cityDatas.map((location) => location.name);
    setCities(cityNames);
  }, []);

  const searchHandle = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    let cityTemp = cities.filter((city) =>
      city.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCities(cityTemp);
  }, [searchText]);

  console.log(favoriteCitiesCurrentWeather);
  return (
    <div className="App">
      <NavbarRoutes />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              filteredCities={filteredCities}
              searchText={searchText}
              searchHandle={searchHandle}
              chosenCity={chosenCity}
              setChosenCity={setChosenCity}
              setFilteredCities={setFilteredCities}
              getCityId={getCityId}
              getCity5dayForcast={getCity5dayForcast}
              getCityCurrentForcast={getCityCurrentForcast}
              weatherFlag={weatherFlag}
              setWeatherFlag={setWeatherFlag}
              forcast5dayArr={forcast5dayArr}
              currentWeather={currentWeather}
              addToFavorite={addToFavorite}
              removeFromFavorites={removeFromFavorites}
            />
          }
        />
        <Route
          path="/favorite"
          element={
            <Favorite
              getCitiesforcast={getCitiesforcast}
              favoriteCityArr={favoriteCityArr}
              favoriteCitiesCurrentWeather={[...favoriteCitiesCurrentWeather]}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
