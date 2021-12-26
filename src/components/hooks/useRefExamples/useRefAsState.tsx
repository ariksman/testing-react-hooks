import { useEffect, useRef } from "react";

export interface LoadOnceOnChangeProps {
  data: any;
  callback: (data: any) => void;
}

const useRefAsState = ({ data, callback }: LoadOnceOnChangeProps) => {
  const loaded = useRef(false);

  useEffect(() => {
    if (!loaded.current) {
      callback(data);
      loaded.current = true;
    }
  }, [data, callback]); // useRef variable is not needed here
};

export default useRefAsState;
