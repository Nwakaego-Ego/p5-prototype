"use client";
import { useState, useEffect } from "react";
import { prettify } from "../components/prettify";
import { convertToInstanceMode, generateIframeCode } from "../utils/embedUtils";

const EmbedGenerator = ({ code, editable }) => {
  const [mode, setMode] = useState("iframe");
  const [embedCode, setEmbedCode] = useState("");
  const [soundEnabled, setSoundEnabled] = useState(false);

  const handleGenerate = async () => {
    let output = "";
    if (mode === "iframe") {
      output = generateIframeCode(code, editable);
    } else {
      const scriptCode = await convertToInstanceMode(code, soundEnabled);
      output = `<script>${scriptCode}</script>`;
    }

    const formatted = await prettify(output);
    setEmbedCode(formatted);
  };

  return (
    <div className="border p-4 mt-4">
      <h2 className="text-lg font-semibold mb-2">Embed Options:</h2>

      <div className="flex gap-4 mb-4">
        <label>
          <input
            type="radio"
            name="mode"
            value="iframe"
            checked={mode === "iframe"}
            onChange={() => setMode("iframe")}
          />
          Iframe Mode
        </label>

        <label>
          <input
            type="radio"
            name="mode"
            value="script"
            checked={mode === "script"}
            onChange={() => setMode("script")}
          />
          Script Mode
        </label>

        {mode === "script" && (
          <label>
            <input
              type="checkbox"
              checked={soundEnabled}
              onChange={() => setSoundEnabled(!soundEnabled)}
            />
            Include Sound Library
          </label>
        )}
      </div>

      <button
        onClick={handleGenerate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Generate Embed Code
      </button>

      <div className="mt-4">
        <label className="block mb-1 font-semibold">Embed Code Output:</label>
        <textarea
          value={embedCode}
          readOnly
          className="w-full h-48 p-2 border bg-gray-100 rounded"
        />
      </div>
    </div>
  );
};

export default EmbedGenerator;

// "use client";

// import { useState } from "react";
// import { prettify } from "../components/prettify"; // Assuming you have a prettifier
// import { convertToInstanceMode, generateIframeCode } from "../utils/embedUtils"; // Assuming embedUtils exists

// const EmbedGenerator = ({ code, editable }) => {
//   const [mode, setMode] = useState("iframe"); // 'iframe' or 'script'
//   const [embedCode, setEmbedCode] = useState("");
//   const [soundEnabled, setSoundEnabled] = useState(false);

//   const handleGenerate = async () => {
//     let output = "";

//     // Adjusting the iframe and script generation based on mode and code
//     if (mode === "iframe") {
//       output = generateIframeCode(code, editable); // Pass editable flag here
//     } else {
//       const scriptCode = await convertToInstanceMode(code, soundEnabled);
//       output = `<script>${scriptCode}</script>`;
//     }

//     // Prettifying the code before setting it as the embed code
//     const formatted = await prettify(output);
//     setEmbedCode(formatted);
//   };

//   return (
//     <div className="border p-4 mt-4">
//       <h2 className="text-lg font-semibold mb-2">Embed Options:</h2>

//       <div className="flex gap-4 mb-4">
//         <label>
//           <input
//             type="radio"
//             name="mode"
//             value="iframe"
//             checked={mode === "iframe"}
//             onChange={() => setMode("iframe")}
//           />
//           Iframe Mode
//         </label>

//         <label>
//           <input
//             type="radio"
//             name="mode"
//             value="script"
//             checked={mode === "script"}
//             onChange={() => setMode("script")}
//           />
//           Script Mode
//         </label>

//         {/* Only show this if iframe mode is selected */}
//         {mode === "iframe" && (
//           <label>
//             <input
//               type="checkbox"
//               checked={editable}
//               onChange={() => setEditable(!editable)}
//             />
//             Editable iframe
//           </label>
//         )}

//         {/* Only show this if script mode is selected */}
//         {mode === "script" && (
//           <label>
//             <input
//               type="checkbox"
//               checked={soundEnabled}
//               onChange={() => setSoundEnabled(!soundEnabled)}
//             />
//             Include Sound Library
//           </label>
//         )}
//       </div>

//       <button
//         onClick={handleGenerate}
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//       >
//         Generate Embed Code
//       </button>

//       <div className="mt-4">
//         <label className="block mb-1 font-semibold">Embed Code Output:</label>
//         <textarea
//           value={embedCode}
//           readOnly
//           className="w-full h-48 p-2 border bg-gray-100 rounded"
//         />
//       </div>
//     </div>
//   );
// };

// export default EmbedGenerator;
