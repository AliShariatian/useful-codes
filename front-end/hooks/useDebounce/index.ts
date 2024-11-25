import { useEffect, useState } from "react";

/**
 * Custom hook to debounce a value.
 * Delays updating the value until after a specified delay has passed since the last change.
 *
 * @template T - The type of the value being debounced.
 * @param {T} value - The value to debounce.
 * @param {number} delay - The debounce delay in milliseconds.
 * @returns {T} - The debounced value.
 */
const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler); // Cleanup the timeout on value or delay change
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
