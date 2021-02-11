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