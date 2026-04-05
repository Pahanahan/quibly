import { useState, useEffect } from "react";

const baseWidth = 1280;
const baseHeight = 720;

export function useScale() {
  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
    const getScale = () => {
      const scaleX = window.innerWidth / baseWidth;
      const scaleY = window.innerHeight / baseHeight;
      return Math.min(scaleX, scaleY);
    };

    const handleResize = () => {
      setScale(getScale());
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return scale;
}
