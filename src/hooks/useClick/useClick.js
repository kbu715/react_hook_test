import { useRef, useEffect } from 'react';

export const useClick = (onClick) => {
  const ref = useRef();
  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener('click', onClick);
    }

    //ComponentWillUnmount
    //Component가 mount 되지 않았을 때 eventListener가 배치되게 하고싶지 않다.
    return () => {
      if (element) {
        element.removeEventListener('click', onClick);
      }
    };
  }, [onClick]);
  return ref;
};
