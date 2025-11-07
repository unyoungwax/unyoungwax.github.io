import { useEffect, useState } from "react";

export function useWindowSize() {
  const [dimension, setDimension] = useState({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  });

  useEffect(() => {
    const callback = () => {
      setDimension({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
        outerHeight: window.outerHeight,
        outerWidth: window.outerWidth,
      });
    };

    window.addEventListener("resize", callback, { passive: true });

    return () => {
      window.removeEventListener("resize", callback);
    };
  }, []);

  return dimension;
}
