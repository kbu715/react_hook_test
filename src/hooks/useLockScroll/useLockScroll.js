import { useState, useEffect } from 'react';

export const useLockScroll = () => {

    const body = document.querySelector('body');

    const [isLocked, setIsLocked] = useState(false);
    const lockScroll = () => {
        setIsLocked(true);
    }
    const unlockScroll = () => {
        setIsLocked(false);  
    }

    useEffect(() => {
        
        body.style.overflow = isLocked ? 'hidden' : 'scroll';

    }, [isLocked]);


  return [isLocked, { lockScroll, unlockScroll }];
};


/* //SOLUTION

import { useState } from "react";

export function useLockScroll() {
  const [initialScroll] = useState(document.body.style.overflow);
  const [isLocked, setIsLocked] = useState(false);
  const lockScroll = () => {
    document.body.style.overflow = "hidden";
    setIsLocked(true);
  };
  const unlockScroll = () => {
    document.body.style.overflow = initialScroll;
    setIsLocked(false);
  };
  return [isLocked, { lockScroll, unlockScroll }];
}
 */