"use client";
import { useState } from "react";
import Editor from "./components/editor";
import Preview from "./components/preview";
import Controls from "./components/controls";
import ErrorBoundary from "./components/ErrorBoundary";

const Page = () => {
  const [code, setCode] = useState("");
  const [autoplay, setAutoplay] = useState(true);
  const [autosave, setAutosave] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <ErrorBoundary>
      <div>
        <h1 className="text-red-600 p-2">p5.js Sketch Embedder</h1>
        <Editor code={code} setCode={setCode} />
        <Controls
          autoplay={autoplay}
          setAutoplay={setAutoplay}
          autosave={autosave}
          setAutosave={setAutosave}
          code={code}
          setCode={setCode}
        />
        <Preview code={autoplay ? code : ""} setHasError={setHasError} />
      </div>
    </ErrorBoundary>
  );
};

export default Page;
