import { useState, useEffect } from 'react'
export const useMousePosition = () => {

    const [xPosition, setXPosition] = useState(0)
    const [yPosition, setYPosition] = useState(0)

    const mouseMove = (e) => {
        
        console.log('x:',e.clientX, "y:", e.clientY)
        setXPosition(e.clientX);
        setYPosition(e.clientY);

    }

    useEffect(() => {
        window.addEventListener('mousemove', mouseMove)
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])


    return {xPosition, yPosition};

}

/* //SOLUTION
import { useEffect, useState } from "react";

export function useMousePosition() {
  const [mouseCoords, setMouseCoords] = useState({ x: null, y: null });
  const onMove = event => {
    const { clientX, clientY } = event;
    setMouseCoords({ x: clientX, y: clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return mouseCoords;
}
 */