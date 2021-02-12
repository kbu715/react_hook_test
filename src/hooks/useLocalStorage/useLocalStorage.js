import { useState, useEffect } from 'react'
export const useLocalStorage = (name, initialValue) => {

    const [value, setValue] = useState(initialValue);

    useEffect(() => {

            localStorage.setItem(name, value);
 
    }, [name, value])



    return [value, setValue];

}


/* //SOLUTION

import { useState } from "react";

export function useLocalStorage(name, initialValue) {
  const [currentValue, changeValue] = useState(() => {
    try {
      const item = localStorage.getItem(name);
      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });
  const updateValue = newValue => {
    try {
      changeValue(newValue);
      localStorage.setItem(name, JSON.stringify(newValue));
    } catch (e) {
      console.log(e);
    }
  };
  return [currentValue, updateValue];
}
 */