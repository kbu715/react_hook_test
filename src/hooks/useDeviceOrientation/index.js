import React from "react";

import { useDeviceOrientation } from "../useDeviceOrientation/useDeviceOrientation";

const DeviceApp = () => {
  const { alpha, beta, gamma } = useDeviceOrientation();
  console.log(alpha, beta, gamma);

  return (
    <div>
      <h1>Super hooks!</h1>
      <h2>useDeviceOrientation</h2>
      <ul>
        <li>{`alpha : ${alpha}`}</li>
        <li>{`beta : ${beta}`}</li>
        <li>{`gamma : ${gamma}`}</li>
      </ul>
    </div>
  );
}

export default DeviceApp;