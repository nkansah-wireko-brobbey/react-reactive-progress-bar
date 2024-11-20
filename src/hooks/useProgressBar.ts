import { useEffect, useState } from "react";

export const useProgressBar = (initialValue: number, interval: number, incrementby: number) => {
  const [progressValue, setProgressValue] = useState(initialValue);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgressValue((prev) => {
        if (prev >= 100) {
          clearInterval(intervalId);
          return 100;
        }

        return prev + incrementby;
      });
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval]);

  return progressValue;
};
