import { useMousePosition } from './useMousePosition';
import React from 'react';

// Usage
const MouseApp = () => {

    const { xPosition, yPosition } = useMousePosition();
  
    return (
        <ul>
            <li>Mouse X: {xPosition}</li>
            <li>Mouse Y: {yPosition}</li>
        </ul>
    );
  }

  export default MouseApp;