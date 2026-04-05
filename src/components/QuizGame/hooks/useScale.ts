import { useState, useEffect } from "react";

const baseWidth = 1280;
const baseHeight = 720;

export function useScale() {
  const getScale = () => {
    const scaleX = window.innerWidth / baseWidth;
    const scaleY = window.innerHeight / baseHeight;
    return Math.min(scaleX, scaleY);
  };

  const [scale, setScale] = useState<number>(getScale());

  useEffect(() => {
    const handleResize = () => {
      const scaleX = window.innerWidth / baseWidth;
      const scaleY = window.innerHeight / baseHeight;

      setScale(Math.min(scaleX, scaleY));
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return scale;
}
