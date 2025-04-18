"use client";
import dynamic from "next/dynamic";

// Only load SketchPreview on the client
const SketchPreview = dynamic(() => import("./SketchPreview"), { ssr: false });

const Preview = ({ code, mode }) => {
  return (
    <div className="border p-4 mt-4">
      <h2 className="text-lg font-semibold mb-2">Preview:</h2>

      {mode === "iframe" ? (
        <iframe
          srcDoc={`<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script><script>${code}</script>`}
          width="800"
          height="400"
        />
      ) : (
        <SketchPreview code={code} />
      )}
    </div>
  );
};

export default Preview;

// const Preview = ({ code, mode }) => {
//   return (
//     <div className="border p-4 mt-4">
//       <h2 className="text-lg font-semibold mb-2">Preview:</h2>
//       {mode === "iframe" ? (
//         <iframe
//           srcDoc={`<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script><script>${code}</script>`}
//           width="800"
//           height="400"
//         ></iframe>
//       ) : (
//         <div id="mySketch"></div>
//       )}
//     </div>
//   );
// };

// export default Preview;
