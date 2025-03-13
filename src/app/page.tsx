"use client";
import { useState, useEffect } from "react";
import Editor from "./components/editor";
import Preview from "./components/preview";
import Controls from "./components/controls/controls";
import ErrorBoundary from "./components/ErrorBoundary";

const Page = () => {
  const [code, setCode] = useState("");
  const [playMode, setPlayMode] = useState("Stop");
  const [shouldRun, setShouldRun] = useState(false);
  const [savedCode, setSavedCode] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCode = localStorage.getItem("savedCode") || "";
      setSavedCode(storedCode);
    }
  }, []);

  const handlePlayMode = (mode) => {
    setPlayMode(mode);
    if (mode === "Play" || mode === "Autoplay") {
      setShouldRun(true);
    } else if (mode === "Stop") {
      setShouldRun(false);
      localStorage.setItem("savedCode", code);
    }
  };

  return (
    <ErrorBoundary>
      <div>
        <h1 className="text-red-600 p-2">p5.js Sketch Embedder</h1>
        <Editor code={code} setCode={setCode} />
        <Controls
          playMode={playMode}
          setPlayMode={handlePlayMode}
          code={code}
        />
        {/* <Preview code={shouldRun ? code : savedCode || ""} /> */}
        <Preview code={shouldRun ? code : ""} />
      </div>
    </ErrorBoundary>
  );
};

export default Page;

// "use client";
// import { useState } from "react";
// import Editor from "./components/editor";
// import Preview from "./components/preview";
// import Controls from "./components/controls/controls";
// import ErrorBoundary from "./components/ErrorBoundary";

// const Page = () => {
//   const [code, setCode] = useState("");
//   const [playMode, setPlayMode] = useState("stop");
//   const [hasError, setHasError] = useState(false);
//   const [shouldRun, setShouldRun] = useState(false);

//   const handlePlayMode = (mode) => {
//     setPlayMode(mode);
//     if (mode === "play" || mode === "autoplay") {
//       setShouldRun(true);
//     } else if (mode === "stop") {
//       setShouldRun(false);
//       localStorage.setItem("savedCode", code);
//     }
//   };
//   return (
//     <ErrorBoundary>
//       <div>
//         <h1 className="text-red-600 p-2">p5.js Sketch Embedder</h1>
//         <Editor code={code} setCode={setCode} />
//         <Controls
//           playMode={playMode}
//           setPlayMode={handlePlayMode}
//           code={code}
//           setCode={setCode}
//         />
//         <Preview code={shouldRun ? code : ""} />
//       </div>
//     </ErrorBoundary>
//   );
// };

// export default Page;
