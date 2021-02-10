import { useKeyPress } from './useKeyPress';
import React from 'react';

// Usage
const KeyPressApp = () => {
    // Call our hook for each key that we'd like to monitor
    // const happyPress = useKeyPress('h');
    // const sadPress = useKeyPress('s');
    // const robotPress = useKeyPress('r');
    // const foxPress = useKeyPress('f');

    const kPressed = useKeyPress('k');
    const iPressed = useKeyPress('i');
    const mPressed = useKeyPress('m');
    const cPressed = useKeyPress('c');
    const hPressed = useKeyPress('h');
  
    return (
    //   <div style={{padding: 20}}>
    //     <div>h, s, r, f</div>
    //     <div>
    //       {happyPress && '😊'}
    //       {sadPress && '😢'}
    //       {robotPress && '🤖'}
    //       {foxPress && '🦊'}
    //     </div>
    //   </div>
    <ul>
        <li>Pressed 'k': {kPressed && "K"}</li>
        <li>Pressed 'i': {iPressed && "I"}</li>
        <li>Pressed 'm': {mPressed && "M"}</li>
        <li>Pressed 'c': {cPressed && "C"}</li>
        <li>Pressed 'h': {hPressed && "H"}</li>
        <li>Pressed 'i': {iPressed && "I"}</li>
    </ul>
    );
  }

  export default KeyPressApp;