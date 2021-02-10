import { useState, useEffect } from 'react'
export const useLocalStorage = (name, initialValue) => {

    const [value, setValue] = useState(initialValue);

    useEffect(() => {

            localStorage.setItem(name, value);
 
    }, [name, value])



    return [value, setValue];

}