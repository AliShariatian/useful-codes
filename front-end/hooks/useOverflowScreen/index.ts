import { useEffect } from "react";

const useOverflowScreen = (): void => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
};

export default useOverflowScreen;
