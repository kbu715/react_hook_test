import { useEffect, useState } from "react";

export const useDeviceOrientation = () => {
  const [alpha, setAlpha] = useState(null);
  const [beta, setBeta] = useState(null);
  const [gamma, setGamma] = useState(null);

  const handleOrientation = (event) => {
    const alpha = event.alpha;
    const beta = event.beta;
    const gamma = event.gamma;

    setAlpha(alpha);
    setBeta(beta);
    setGamma(gamma);
  };

  useEffect(() => {
    window.addEventListener("deviceorientation", handleOrientation);

    return () =>
      window.removeEventListener("deviceorientation", handleOrientation);
  }, []);

  return {
    alpha,
    beta,
    gamma
  };
};
