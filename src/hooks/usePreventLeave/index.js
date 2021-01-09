import React from 'react';
import { usePreventLeave } from './usePreventLeave';

const PreventLeaveApp = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <div>
      <button onClick={enablePrevent}>EnablePreventLeave</button>
      <button onClick={disablePrevent}>DisablePreventLeave</button>
    </div>
  );
};

export default PreventLeaveApp;
