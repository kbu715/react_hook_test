import { useState, useEffect } from "react";

export const useGeolocation = () => {

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords.latitude, position.coords.longitude)
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          }, (error)=>{
              setError(error);
          });
    }, [latitude, longitude])

    return {
        coords: {
            latitude,
            longitude
        },
        error
    }

};

/* //SOLUTION

import { useEffect, useState } from "react";

export function useGeolocation() {
  const [coords, setCoords] = useState({ lat: "null", long: "" });
  const [error, setError] = useState("");
  const onSucces = (event) => {
    const {
      coords: { latitude: lat, longitude: long }
    } = event;
    setCoords({ lat, long });
  };
  const onFailure = (event) => setError("Could not get location.");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSucces, onFailure);
  }, []);
  return { coords, error };
}

 */