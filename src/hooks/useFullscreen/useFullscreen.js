import { useRef } from 'react';

export const useFullscreen = () => {
  const element = useRef();

  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullScreen(); //Deprecated?
    }
  };

  const exitFull = () => {
    document.exitFullscreen();
  };

  return { element, triggerFull, exitFull };
};
