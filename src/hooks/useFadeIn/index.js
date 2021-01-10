import { useFadeIn } from './useFadeIn';
import React from 'react';

const FadeInApp = () => {
  const fadeInH1 = useFadeIn(5, 2);
  const fadeInP = useFadeIn(10, 5);
  return (
    <div>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>fade in effect</p>
    </div>
  );
};

export default FadeInApp;
