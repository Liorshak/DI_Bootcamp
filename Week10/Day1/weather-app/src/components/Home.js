import SearchBar from "./Searchbar";
import Mainforcast from "./Mainforcast";

const Home = ({
  filteredCities,
  searchText,
  searchHandle,
  chosenCity,
  setChosenCity,
  setFilteredCities,
  getCityId,
  getCity5dayForcast,
  getCityCurrentForcast,
  weatherFlag,
  setWeatherFlag,
  forcast5dayArr,
  currentWeather,
  addToFavorite,
  removeFromFavorites,
}) => {
  return (
    <div
      className="mainPage"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SearchBar
        filteredCities={filteredCities}
        searchText={searchText}
        searchHandle={searchHandle}
        chosenCity={chosenCity}
        setChosenCity={setChosenCity}
        setFilteredCities={setFilteredCities}
        setWeatherFlag={setWeatherFlag}
        forcast5dayArr={forcast5dayArr}
        currentWeather={currentWeather}
        getCity5dayForcast={getCity5dayForcast}
        getCityCurrentForcast={getCityCurrentForcast}
        getCityId={getCityId}
      />

      <Mainforcast
        chosenCity={chosenCity}
        weatherFlag={weatherFlag}
        forcast5dayArr={forcast5dayArr}
        currentWeather={currentWeather}
        addToFavorite={addToFavorite}
        removeFromFavorites={removeFromFavorites}
      />
    </div>
  );
};

export default Home;
