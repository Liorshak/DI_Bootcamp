import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { far } from "@fortawesome/free-regular-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";
const Mainforcast = ({
  chosenCity,

  weatherFlag,
  removeFromFavorites,
  forcast5dayArr,
  currentWeather,
  addToFavorite,
}) => {
  let dayTranslate = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let firstDay = 0;
  const consolidateArr = (arr) => {
    firstDay = new Date(arr[0].dt_txt).getDay();
    let dayArr = [];
    dayArr.push(
      arr
        .filter((time) => new Date(time.dt_txt).getDay() == firstDay)
        .map((v) => v.main.temp)
    );
    dayArr.push(
      arr
        .filter(
          (time) =>
            new Date(time.dt_txt).getDay() ==
            (firstDay + 1 > 6 ? firstDay + 1 - 7 : firstDay + 1)
        )
        .map((v) => v.main.temp)
    );
    dayArr.push(
      arr
        .filter(
          (time) =>
            new Date(time.dt_txt).getDay() ==
            (firstDay + 2 > 6 ? firstDay + 1 - 7 : firstDay + 2)
        )
        .map((v) => v.main.temp)
    );
    dayArr.push(
      arr
        .filter(
          (time) =>
            new Date(time.dt_txt).getDay() ==
            (firstDay + 3 > 6 ? firstDay + 1 - 7 : firstDay + 3)
        )
        .map((v) => v.main.temp)
    );
    dayArr.push(
      arr
        .filter(
          (time) =>
            new Date(time.dt_txt).getDay() ==
            (firstDay + 4 > 6 ? firstDay + 1 - 7 : firstDay + 4)
        )
        .map((v) => v.main.temp)
    );

    console.log(dayArr);
    let tempArr = dayArr.map(
      (day) =>
        Math.round((day.reduce((a, b) => a + b, 0) / day.length) * 10) / 10
    );
    console.log(tempArr);

    return tempArr;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "90vw",
        height: "71.8vh",

        justifyContent: "space-between",
        // backgroundColor: "lightgray",
        margin: "10px",
        padding: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={() => removeFromFavorites(chosenCity)}
            style={{
              height: "15px",
              width: "15px",
              borderRadius: "50%",
              lineHeight: "5px",
              padding: "2px",
              color: "white",
              border: "none",
              backgroundColor: "red",
              fontSize: "10px",
              fontWeight: "bold",
            }}
          >
            X
          </button>
          <div style={{ color: "white" }}>
            <h4>{weatherFlag ? chosenCity : "Please choose a city"}</h4>
            <h5>
              {weatherFlag & (Object.keys(currentWeather).length > 0)
                ? currentWeather.main.temp
                : "none"}
              c{" "}
              <FontAwesomeIcon
                icon={["fas", "thermometer-empty"]}
                style={{ fontSize: "20px", color: "orange" }}
              />
            </h5>
          </div>
        </div>
        <div>
          <button
            onClick={() => addToFavorite(chosenCity)}
            style={{ border: "none", background: "none" }}
          >
            <strong style={{ color: "white" }}>Add to favorite</strong>
            <FontAwesomeIcon
              icon={["fas", "heart"]}
              style={{ fontSize: "20px", color: "red" }}
            />
          </button>
        </div>
      </div>
      <h1 style={{ color: "white" }}>
        {weatherFlag & (Object.keys(currentWeather).length > 0)
          ? currentWeather.weather[0].description
          : "none"}
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {weatherFlag & (forcast5dayArr != [])
          ? consolidateArr(forcast5dayArr).map((temp, i) => {
              return (
                <Card className="bg-light" style={{ opacity: "0.7" }}>
                  <Card.Body>
                    <Card.Title style={{ fontSize: "15px" }}>
                      {dayTranslate[firstDay + i]}
                    </Card.Title>
                    <Card.Text>
                      <h6>{temp}c</h6>
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })
          : "none"}
      </div>
    </div>
  );
};

export default Mainforcast;
