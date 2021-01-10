import React from 'react';
import { useNetwork } from './useNetwork';
const NetworkApp = () => {
  const handleNetworkChange = (online) => {
    const onoff = online ? 'we just went online' : 'we are offline';
    console.log(onoff);
  };

  const online = useNetwork(handleNetworkChange);

  return (
    <div>
      <h1>{online ? 'Online' : 'Offline'}</h1>
    </div>
  );
};

export default NetworkApp;
