import { useLocalStorage } from './useLocalStorage';
import React from 'react';

// Usage
const LSApp = () => {

    const name = "JWT";
    const initialValue = "12345";

    const [currentLS, setLS] = useLocalStorage(name, initialValue);
  
    return (
        <ul>
            <li>Current Value: {currentLS}</li>
            <button onClick={()=>setLS(initialValue)}>Set value: 12345</button>
            <button onClick={()=>setLS(null)}>Clear LS</button>
        </ul>
    );
  }

  export default LSApp;