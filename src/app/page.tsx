"use client";
import { useState, useEffect } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Controls from "./components/controls/Controls";
import EmbedOptions from "./components/EmbedOptions";
import ErrorBoundary from "./components/ErrorBoundary";
import { generateEmbedCode } from "./utils/generateEmbedCode";
import EmbedGenerator from "./components/EmbedGenerator";
import SketchTypeSelector from "./components/SketchTypeSelector";

// import SoundPlayer from "./components/SoundPlayer";

import dynamic from "next/dynamic";

const SoundPlayer = dynamic(() => import("./components/SoundPlayer"), {
  ssr: false,
});

const Page = () => {
  const [code, setCode] = useState("");
  const [playMode, setPlayMode] = useState("Stop");
  const [shouldRun, setShouldRun] = useState(false);
  const [mode, setMode] = useState("iframe");
  const [sketchType, setSketchType] = useState("2D");
  const [editable, setEditable] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCode = localStorage.getItem("savedCode") || "";
      setCode(storedCode);
    }
  }, []);

  const handlePlayMode = (userMode: "Play" | "Stop" | "Autoplay") => {
    setPlayMode(userMode);
    setShouldRun(userMode === "Play" || userMode === "Autoplay");
  };

  return (
    <ErrorBoundary>
      <div className="p-4">
        <h1 className="text-red-600 text-2xl mb-4">p5.js Sketch Embedder</h1>
        {/* <SketchTypeSelector
          sketchType={sketchType}
          setSketchType={setSketchType}
        /> */}
        <SoundPlayer audioFile="your-audio-file.mp3" />
        <Editor code={code} setCode={setCode} editable={editable} />
        <Controls playMode={playMode} setPlayMode={handlePlayMode} />
        <EmbedOptions mode={mode} setMode={setMode} />
        <Preview code={shouldRun ? code : ""} mode={mode} />
        <EmbedGenerator code={code} editable={editable} />
        <div className="mt-4">
          <label className="block mb-2 font-semibold">Editable Code:</label>
          <input
            type="checkbox"
            checked={editable}
            onChange={() => setEditable(!editable)}
            className="mr-2"
          />
          Enable Editing
        </div>
        <textarea
          readOnly
          value={generateEmbedCode(code, mode)}
          className="w-full mt-4 p-2 border"
        />
      </div>
    </ErrorBoundary>
  );
};

export default Page;
