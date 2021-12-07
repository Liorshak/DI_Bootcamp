import { Card, ListGroup } from "react-bootstrap";
import React, { useState, useEffect } from "react";

const SearchBar = ({
  filteredCountry,
  searchText,
  searchHandle,
  chosenCountry,
  setChosenCountry,
  setFilteredCountry,
}) => {
  useEffect(() => setChosenCountry(searchText), [searchText]);
  if (
    searchText === "" ||
    (filteredCountry.length === 1 && filteredCountry[0] === searchText)
  ) {
    return (
      <Card style={{ width: "35rem", margin: "5px", opacity: "0.7" }}>
        <Card.Header>
          <input
            type="text"
            style={{ width: "30rem" }}
            placeholder="Search a country"
            onChange={searchHandle}
          />
        </Card.Header>
        <Card.Footer className="suggestion">Suggestions:0</Card.Footer>
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
            value={chosenCountry}
          />
        </Card.Header>
        <ListGroup
          style={{ maxHeight: "35vh", overflow: "auto" }}
          variant="flush"
        >
          {filteredCountry.map((country, i) => {
            return (
              <ListGroup.Item
                key={i}
                onClick={() => {
                  setFilteredCountry([]);
                  setChosenCountry(country);
                }}
              >
                {country}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
        <Card.Footer className="suggestion">
          Suggestions:{filteredCountry.length}
        </Card.Footer>
      </Card>
    );
  }
};

export default SearchBar;
