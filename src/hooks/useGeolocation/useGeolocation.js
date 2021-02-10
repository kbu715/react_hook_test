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
