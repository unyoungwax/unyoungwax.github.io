import { DateTime } from "luxon";
import { useEffect, useState } from "react";

export function useClock(intervalMilliseconds = 1000) {
  const [now, setNow] = useState(DateTime.now());

  useEffect(() => {
    const id = window.setInterval(() => {
      setNow(DateTime.now());
    }, intervalMilliseconds);

    return () => {
      window.clearInterval(id);
    };
  }, [intervalMilliseconds]);

  return { now };
}
