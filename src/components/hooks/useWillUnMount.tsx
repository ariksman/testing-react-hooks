import { useEffect, useRef } from "react";

// This hook will ensure given function is fired before component is unmounted
// for example usefull if there is need to save before navigating away from the component
export const useWillUnmount = (fn: () => void) => {
  const fnRef = useRef(fn);
  fnRef.current = fn; // this ensures we are referencing to the latest function used to call this hook
  useEffect(() => {
    return () => {
      fnRef.current();
    };
  }, []);
};
