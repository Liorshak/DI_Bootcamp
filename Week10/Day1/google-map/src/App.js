import logo from "./logo.svg";
import "./App.css";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

function App(props) {
  let lat;
  let lng;

  (() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  })();

  function showPosition(position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
  }

  return (
    <div className="App">
      <h1>Google Maps</h1>
      <div>
        <Map
          google={props.google}
          zoom={8}
          style={{ width: "100%", height: "80%" }}
          initialCenter={{
            lat: lat || 33.1989037,
            lng: lng || 35.5543398,
          }}
        >
          <Marker onClick={props.onMarkerClick} name={"Current location"} />
        </Map>
      </div>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC0x6Fv1_lsXfGbCyUCRlZA4GM4bF860EA",
})(App);
