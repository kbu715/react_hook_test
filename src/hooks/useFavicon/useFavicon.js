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
