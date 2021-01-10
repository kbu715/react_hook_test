import { useRef } from 'react';

export const useFullscreen = () => {
  const element = useRef();

  const triggerFull = () => {
    if (element.current.requestFullscreen) {
      element.current.requestFullscreen();
    } else if (element.current.webkitRequestFullscreen) {
      /* Safari */
      element.current.webkitRequestFullscreen();
    } else if (element.current.msRequestFullscreen) {
      /* IE11 */
      element.current.msRequestFullscreen();
    }
  };

  const exitFull = () => {
    document.exitFullscreen();
  };

  return { element, triggerFull, exitFull };
};
