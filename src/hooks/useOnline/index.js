import React from 'react';
import { useOnline } from './useOnline';

const OnlineApp = () => {


  const online = useOnline();

  return (
    <div>
        <h1>Are we online? {online ? 'Yes' : 'No'}</h1>
    </div>
  );
};

export default OnlineApp;
