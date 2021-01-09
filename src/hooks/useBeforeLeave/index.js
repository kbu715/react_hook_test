import React from 'react';
import { useBeforeLeave } from './useBeforeLeave';
const BeforeLeaveApp = () => {
  const begForLife = () => console.log(`plz don't leave`);

  useBeforeLeave(begForLife);

  return <div>Before Leave</div>;
};

export default BeforeLeaveApp;
