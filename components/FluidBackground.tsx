"use client";

import { useEffect, useRef } from "react";

export default function FluidBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Optional: Add a simple mouse move parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      container.style.transform = `translate(-${x * 5}px, -${y * 5}px)`;
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-900 via-purple-800 to-gray-900 opacity-70"

      style={{
        filter: "blur(60px)",
        animation: "pulse 10s linear infinite",
      }}
      ref={containerRef}
    />
  );
}
