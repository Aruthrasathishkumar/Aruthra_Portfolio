"use client";

import { useState, useEffect, useCallback } from "react";

export function useMouseParallax(intensity = 0.02) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      // Normalize to -1 to 1 range, then apply intensity
      const x = ((clientX / innerWidth) * 2 - 1) * intensity;
      const y = ((clientY / innerHeight) * 2 - 1) * intensity;

      setPosition({ x, y });
    },
    [intensity]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return position;
}
