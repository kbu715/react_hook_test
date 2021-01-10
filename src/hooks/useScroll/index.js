import React from 'react';
import { useScroll } from './useScroll';

const ScrollApp = () => {
  const { y } = useScroll();

  return (
    <div style={{ height: '100vh' }}>
      <h1
        style={{
          position: 'fixed',
          color: y > 500 ? 'red' : 'blue',
          left: `${y / 2}px`,
        }}
      >
        Scroll!!!
      </h1>
    </div>
  );
};

export default ScrollApp;
