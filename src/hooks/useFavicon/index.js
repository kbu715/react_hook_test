import React from "react";
import { useFavicon } from './useFavicon';
const FaviconApp = () => {

    const initialFaviconUrl = 'https://www.google.com/favicon.ico';
    const appleFaviconUrl = 'https://www.apple.com/favicon.ico';
    const setFavicon = useFavicon(initialFaviconUrl);



  return (
    <div>
      <h1>Super hooks!</h1>
      <h2>useFavicon</h2>

      <button onClick={()=>setFavicon(appleFaviconUrl)}>Change Favicon</button>

    </div>
  );
}

export default FaviconApp;