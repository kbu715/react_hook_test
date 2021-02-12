import { useState, useEffect } from 'react';

export const useOnline = () => {
  const [status, setStatus] = useState(navigator.onLine);

  const handleChange = () => {

    setStatus(navigator.onLine);

  };

  useEffect(() => {
    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);

    return () => {
      window.removeEventListener('online', handleChange);
      window.removeEventListener('offline', handleChange);
    };
  }, []);

  return status;
};



/* //SOLUTION

import { useEffect, useState } from "react";

export function useOnline(onChange) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const onNetworkChange = () => {
    setIsOnline(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", onNetworkChange);
    window.addEventListener("offline", onNetworkChange);
    return () => {
      window.removeEventListener("online", onNetworkChange);
      window.removeEventListener("offline", onNetworkChange);
    };
  }, []);
  return isOnline;
}
 */