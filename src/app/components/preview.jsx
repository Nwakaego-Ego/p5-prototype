"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const p5 = typeof window !== "undefined" ? require("p5") : null;

const Preview = ({ code, setHasError }) => {
  const sketchRef = useRef(null);

  useEffect(() => {
    if (!code.trim()) return;

    console.log("Preview received code:", code);

    const sketch = (p) => {
      try {
        new Function("p", code)(p);
      } catch (error) {
        console.error("Sketch Error:", error);
        setHasError(true);
      }
    };

    const p5Instance = new p5(sketch, sketchRef.current);
    return () => p5Instance.remove();
  }, [code]);

  return (
    <div
      ref={sketchRef}
      style={{ width: "100%", height: "300px", border: "1px solid black" }}
      className="mb-5 mt-5 w-full h-48 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
    ></div>
  );
};

export default Preview;
