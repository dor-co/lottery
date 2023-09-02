import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    widthWindow: undefined,
    heightWindow: undefined,
  });

  const onResize = () => {
    setWindowSize({
      widthWindow: window.innerWidth,
      heightWindow: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);

    onResize();

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
