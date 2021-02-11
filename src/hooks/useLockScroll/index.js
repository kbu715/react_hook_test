import React from 'react';
import { useLockScroll } from './useLockScroll';
const LockScrollApp = () => {

    const [isLocked, { lockScroll, unlockScroll }] = useLockScroll();

  return (
    <>
        <div>
            <h1>is locked? {isLocked ? 'Yes' : 'No'}</h1>
            <button onClick={lockScroll}>Lock Scroll</button>
            <button onClick={unlockScroll}>Unlock Scroll</button>
        </div>
        <div style={{height: 2000}}>

        </div>
    </>
  );
};

export default LockScrollApp;
