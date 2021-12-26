import { useEffect } from "react";

// use together with useCallback in the calling component, to avoid unnecessary clear calls
//
// const fn = useCallback(() => doStuff(data), [data]);
// useDebounce(fn, 1000);
//
// This avoid the creation of new timeout when the function seemingly changed when in reality it didn't
export const useDebounce = (fn: () => void, timeout: number): void => {
  useEffect(() => {
    const handle = setTimeout(() => fn(), timeout); // we call given Fn after timeout

    return () => {
      clearTimeout(handle);
    }; // if deps change we clear the existing timeout
  }, [fn, timeout]);
};
