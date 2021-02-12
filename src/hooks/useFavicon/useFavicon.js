import { useState, useEffect } from "react";

export const useFavicon = (initialUrl) => {

    const [href, setHref] = useState(initialUrl);

    useEffect(()=>{
        const link = document.querySelector("link[rel*='icon']");
        link.rel = 'icon';
        link.href = href;
        document.getElementsByTagName('head')[0].appendChild(link);
    }, [href])

    return setHref;
};


/* // SOLUTION

import { useEffect } from "react";

export function useFavicon(initialFavicon) {
  const setFavicon = href => {
    const link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.rel = "shortcut icon";
    link.href = href;
    const [head] = document.getElementsByTagName("head");
    head.appendChild(link);
  };
  useEffect(() => {
    setFavicon(initialFavicon);
  }, [initialFavicon]);
  return setFavicon;
} 

*/