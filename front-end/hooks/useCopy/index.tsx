import { useCallback } from "react";

/**
 * A custom hook for copying text to the clipboard.
 *
 * @returns {Object} An object containing the copyToClipboard function.
 * @example
 * const { copyToClipboard } = useCopy();
 * copyToClipboard('Hello, World!');
 */
const useCopy = () => {
  const copyToClipboard = useCallback((value: string): void => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        console.log(`Copied to clipboard: ${value}`);
      })
      .catch(() => {
        console.error("Failed to copy");
      });
  }, []);

  return { copyToClipboard };
};

export default useCopy;
