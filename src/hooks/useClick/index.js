import React from 'react';
import { useClick } from './useClick';

const ClickApp = () => {
  const sayHello = () => {
    console.log('helloooo');
  };

  const title = useClick(sayHello);

  return (
    <div>
      <h1 ref={title}>hi</h1>
    </div>
  );
};

export default ClickApp;
