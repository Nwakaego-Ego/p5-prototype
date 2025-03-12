"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
const p5 = dynamic(() => import("p5"), { ssr: false });

const Preview = ({ code, setHasError }) => {
  const sketchRef = useRef();

  useEffect(() => {
    if (!code.trim()) {
      console.warn("Empty code, skipping sketch update.");
      return;
    }

    console.log("Preview received code:", code);

    if (!sketchRef.current) {
      console.error("SketchRef is not available.");
      return;
    }

    sketchRef.current.innerHTML = "";

    const sketch = (p) => {
      try {
        new Function("p", code)(p);
        setHasError(false); // Reset error state if code executes successfully
      } catch (error) {
        console.error("Sketch Error:", error);
        setHasError(true);
      }
    };

    const p5Instance = new p5(sketch, sketchRef.current);

    return () => {
      console.log("Cleaning up previous sketch");
      p5Instance.remove();
    };
  }, [code, setHasError]);

  return (
    <div
      ref={sketchRef}
      style={{ width: "100%", height: "300px", border: "1px solid black" }}
      className="mb-5 mt-5 w-full h-48 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
    ></div>
  );
};

export default Preview;

// "use client";

// import { useEffect, useRef } from "react";

// import dynamic from "next/dynamic";
// const p5 = dynamic(() => import("p5"), { ssr: false });

// // const p5 = typeof window !== "undefined" ? require("p5") : null;

// const Preview = ({ code, setHasError }) => {
//   const sketchRef = useRef();

//   useEffect(() => {
//     if (!code.trim()) {
//       console.warn("Empty code, skipping sketch update.");
//       return;
//     }

//     console.log("Preview received code:", code);

//     if (!sketchRef.current) {
//       console.error("SketchRef is not available.");
//       return;
//     }

//     sketchRef.current.innerHTML = "";

//     const sketch = (p) => {
//       try {
//         new Function("p", code)(p);
//       } catch (error) {
//         console.error("Sketch Error:", error);
//         setHasError(true);
//       }
//     };

//     const p5Instance = new p5(sketch, sketchRef.current);

//     return () => {
//       console.log("Cleaning up previous sketch");
//       p5Instance.remove();
//     };
//   }, [code]);

//   return (
//     <div
//       ref={sketchRef}
//       style={{ width: "100%", height: "300px", border: "1px solid black" }}
//       className="mb-5 mt-5 w-full h-48 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//     ></div>
//   );
// };

// export default Preview;
