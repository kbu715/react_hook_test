import React from 'react';
import { useFullscreen } from './useFullscreen';

const FullscrennApp = () => {
  const { element, triggerFull, exitFull } = useFullscreen();

  return (
    <div>
      <div ref={element}>
        <img
          src="https://images.unsplash.com/photo-1604237232753-af59d8aab38a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1622&q=80"
          alt="screen"
        />
        <button onClick={exitFull}>EXIT</button>
      </div>
      <button onClick={triggerFull}>Full Screen</button>
    </div>
  );
};

export default FullscrennApp;
