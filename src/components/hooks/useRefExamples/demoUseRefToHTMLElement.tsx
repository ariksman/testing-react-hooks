import React, { ReactElement, useEffect, useRef } from "react";

export function useRefDemo(): ReactElement {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.value = "Unbound input";
    }
  }, []);

  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
}
