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
