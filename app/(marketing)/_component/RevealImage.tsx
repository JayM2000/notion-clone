"use client";

import React, { useState, MouseEvent, useEffect } from "react";

interface RevealImageProps {
  revealSize: number;
  children: React.ReactNode;
}

const RevealImage: React.FC<RevealImageProps> = ({ revealSize, children }) => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <div
      style={{ position: "relative", overflow: "hidden" }}
      onMouseMove={handleMouseMove}
    >
      <div
        style={{
          position: "fixed",
          backdropFilter: "blur(10px)",
          height: `${revealSize}px`,
          width: `${revealSize}px`,
          borderRadius: "50%",
          top: `${mousePosition.y}px`,
          left: `${mousePosition.x}px`,
          transform: "translate(-50%,-50%)",
          transition: "0.145s",
          zIndex: 1,
        }}
      ></div>
      {children}
    </div>
  );
};

export default RevealImage;
