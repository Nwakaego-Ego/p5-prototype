"use client";

import { useEffect, useRef } from "react";

export default function SketchPreview({ code }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    // Step 1: Clear previous content
    ref.current.innerHTML = "";

    // Step 2: Create the p5.js script tag
    const p5Script = document.createElement("script");
    p5Script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js";
    p5Script.async = true;

    // Step 3: When p5.js has loaded, then load the sketch code
    p5Script.onload = () => {
      const sketchScript = document.createElement("script");
      sketchScript.type = "text/javascript";
      sketchScript.text = code;

      ref.current.appendChild(sketchScript);
    };

    // Step 4: Append the p5 script to the preview area
    ref.current.appendChild(p5Script);

    // Step 5: Cleanup on unmount
    return () => {
      ref.current.innerHTML = "";
    };
  }, [code]);

  return (
    <div className="border rounded p-4 mt-2 bg-white">
      <div ref={ref} className="w-full h-64 bg-gray-50" />
    </div>
  );
}

// "use client";

// import dynamic from "next/dynamic";
// import { useEffect, useRef } from "react";

// export default function SketchPreview({ code }) {
//   const ref = useRef(null);

//   useEffect(() => {
//     if (!ref.current) return;

//     ref.current.innerHTML = ""; // clear previous sketch

//     const sketchScript = document.createElement("script");
//     sketchScript.type = "text/javascript";
//     sketchScript.text = code;
//     ref.current.appendChild(sketchScript);

//     const canvasScript = document.createElement("script");
//     canvasScript.src =
//       "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js";
//     canvasScript.async = true;
//     ref.current.appendChild(canvasScript);

//     return () => {
//       ref.current.innerHTML = "";
//     };
//   }, [code]);

//   return (
//     <div className="border rounded p-4 mt-2 bg-white">
//       <div ref={ref} className="w-full h-64 bg-gray-50" />
//     </div>
//   );
// }
