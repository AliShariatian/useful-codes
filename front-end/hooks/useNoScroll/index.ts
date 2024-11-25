import { useEffect } from "react";

const useNoScroll = (): void => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
};

export default useNoScroll;
