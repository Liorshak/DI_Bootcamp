import { Card, ListGroup } from "react-bootstrap";
import React, { useState, useEffect } from "react";

const SearchBar = ({
  filteredCities,
  searchText,
  searchHandle,
  chosenCity,
  setChosenCity,
  setFilteredCities,
  setWeatherFlag,
  getCityId,
  getCity5dayForcast,
  getCityCurrentForcast,
}) => {
  useEffect(() => setChosenCity(searchText), [searchText]);
  if (
    searchText === "" ||
    (filteredCities.length === 1 && filteredCities[0] === searchText)
  ) {
    return (
      <Card style={{ width: "35rem", margin: "5px", opacity: "0.7" }}>
        <Card.Header>
          <input
            type="text"
            style={{ width: "30rem" }}
            placeholder="Search a City"
            onChange={searchHandle}
          />
        </Card.Header>
      </Card>
    );
  } else {
    return (
      <Card style={{ width: "35rem", margin: "5px", opacity: "0.7" }}>
        <Card.Header>
          <input
            type="text"
            onChange={searchHandle}
            style={{ width: "30rem" }}
            value={chosenCity}
          />
        </Card.Header>
        <ListGroup
          style={{ maxHeight: "25vh", overflow: "auto" }}
          variant="flush"
        >
          {filteredCities.map((city, i) => {
            if (i >= 100) {
              return;
            } else {
              return (
                <ListGroup.Item
                  key={i}
                  onClick={() => {
                    setFilteredCities([]);
                    setChosenCity(city);
                    setWeatherFlag(true);
                    getCity5dayForcast(getCityId(city));
                    getCityCurrentForcast(getCityId(city));
                  }}
                >
                  {city}
                </ListGroup.Item>
              );
            }
          })}
        </ListGroup>
      </Card>
    );
  }
};

export default SearchBar;
