import { useEffect, useRef } from "react";

/**
 * Hook để debounce một function.
 * @param callback Hàm cần debounce.
 * @param delay Thời gian trì hoãn (milliseconds).
 * @returns Hàm đã debounce.
 */
const useDebounce = (callback, delay) => {
  const timerRef = useRef(null);

  const debouncedFunction = (...args) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current); // Dọn dẹp timer khi component unmount
    };
  }, []);

  return debouncedFunction;
};

export default useDebounce;
