import React from 'react';
import { useTitle } from './useTitle';

const TitleApp = () => {
  const titleUpdator = useTitle('Loading....');

  setTimeout(() => titleUpdator('My Homepage'), 5000);

  return (
    <div>
      <h1>5초 후 웹 title을 보시오</h1>
    </div>
  );
};

export default TitleApp;
