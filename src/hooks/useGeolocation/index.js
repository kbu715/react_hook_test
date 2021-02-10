import React from "react";
import { useGeolocation } from "./useGeolocation";


const GeoApp = () => {


    const { coords: {latitude, longitude}, error } = useGeolocation();

  return (
    <div>
      <h1>Super hooks!</h1>
      <h2>useGeolocation</h2>
      <ul>
        <li>{`Latitude : ${latitude}`}</li>
        <li>{`Longitude : ${longitude}`}</li>
        <li>{`Geolocation Error : ${error}`}</li>
      </ul>
    </div>
  );
}

export default GeoApp;