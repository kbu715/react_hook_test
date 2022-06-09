import React, { useState, useEffect } from 'react';

import useDidMountEffect from './useDidMountEffect';

const DidMountEffect = (props) => {    
    const [state, setState] = useState(false);    
  
  const handleState = () => {
    setState(prevState => !prevState);
  }

    useEffect(() => {
        // you know what is this, don't you?
      console.log("first render !!!");
    }, []);

    useDidMountEffect(() => {
        // react please run me if 'key' changes, but not on initial render
        console.log("It is called when state changes only")
    }, [state]);    

    return (
        <div>
             <button onClick={handleState}>handle state</button>
        </div>
    );
}

export default DidMountEffect; 