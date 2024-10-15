"use client";

import { useEffect } from "react";

const styles = {
  width: "70px",
  height: "70px",
  color: "#22C55E",
  background: `
    conic-gradient(from -45deg at top 20px left 50%, #0000, currentColor 1deg 90deg, #0000 91deg),
    conic-gradient(from 45deg at right 20px top 50%, #0000, currentColor 1deg 90deg, #0000 91deg),
    conic-gradient(from 135deg at bottom 20px left 50%, #0000, currentColor 1deg 90deg, #0000 91deg),
    conic-gradient(from -135deg at left 20px top 50%, #0000, currentColor 1deg 90deg, #0000 91deg)
  `,
  animation: "sh4 1.5s infinite cubic-bezier(0.3, 1, 0, 1)",
};

const keyframes = `
  @keyframes sh4 {
    50% {width: 60px; height: 60px; transform: rotate(180deg);}
    100% {transform: rotate(360deg);}
  }
`;

export default function Loading() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      const styleSheet = document.styleSheets[0];
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }
  }, []);
  return (
    <div className="h-[80vh] w-[100%] flex items-center justify-center">
      <div style={styles}></div>
    </div>
  );
}
