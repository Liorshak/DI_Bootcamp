import { Card } from "react-bootstrap";
const Favorite = ({ favoriteCitiesCurrentWeather }) => {
  let favoriteListData = favoriteCitiesCurrentWeather;
  console.log(favoriteListData);
  return (
    <div className="mainPage" style={{ height: "88vh" }}>
      <h1>Favorite</h1>

      <div>
        {favoriteListData.length === [] ? (
          <h2>Please add cities to your favoriteList</h2>
        ) : (
          favoriteListData.map((city, i) => {
            return (
              <Card
                key={"favo" + i}
                className="bg-light"
                style={{ opacity: "0.7" }}
              >
                <Card.Body>
                  <Card.Title style={{ fontSize: "15px" }}>
                    {city.name}
                  </Card.Title>
                  <Card.Text>
                    <h6>{city.main.temp}</h6>
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Favorite;
