import { useEffect } from "react";

const Editor = ({ code, setCode, editable }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("savedCode") || "";
      setCode(saved);
    }
  }, [setCode]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem("savedCode", code);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [code]);

  return (
    <div className="mb-4">
      <label className="block mb-2 font-semibold">Code Editor:</label>
      <textarea
        className="w-full h-60 p-2 border"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        readOnly={!editable}
      />
    </div>
  );
};

export default Editor;

// import { use, useEffect } from "react";

// const Editor = ({ code, setCode, editable }) => {
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const saveEdits = localStorage.getItem("savedCode") || "";
//       setCode(saveEdits);
//     }
//   });

//   useEffect(() => {
//     const saveTimeout = setTimeout(() => {
//       localStorage.setItem("savedCode", code);
//     }, 1000);

//     return () => {
//       clearTimeout(saveTimeout);
//     };
//   });

//   return (
//     <div className="mb-4">
//       <label className="block mb-2 font-semibold">Code Editor:</label>
//       <textarea
//         className="w-full h-60 p-2 border"
//         value={code}
//         onChange={(e) => setCode(e.target.value)}
//         readOnly={!editable}
//       />
//     </div>
//   );
// };

// export default Editor;
