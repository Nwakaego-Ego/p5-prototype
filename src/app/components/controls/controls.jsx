import { useEffect } from "react";
import "./controls.css";

const Controls = ({ playMode, setPlayMode, code }) => {
  useEffect(() => {
    if (playMode === "Autoplay" || playMode === "Play") {
      localStorage.setItem("savedCode", code);
    }
  }, [playMode, code]);

  return (
    <div className="controls-container">
      <button
        onClick={() => setPlayMode("Play")}
        className={playMode === "Play" ? "active" : ""}
      >
        Play
      </button>
      <button
        onClick={() => setPlayMode("Stop")}
        className={playMode === "Stop" ? "active" : ""}
      >
        Stop
      </button>
      <button
        onClick={() => setPlayMode("Autoplay")}
        className={playMode === "Autoplay" ? "active" : ""}
      >
        Autoplay
      </button>
    </div>
  );
};

export default Controls;

// import { useEffect } from "react";
// import "./controls.css";

// const Controls = ({ playMode, setPlayMode, code }) => {
//   useEffect(() => {
//     if (playMode === "Autoplay" || playMode === "play") {
//       localStorage.setItem("savedCode", code);
//     }
//   }, [playMode, code]);

//   return (
//     <div className="controls-container">
//       <button
//         onClick={() => setPlayMode("Play")}
//         className={playMode === "Play" ? "active" : ""}
//       >
//         Play
//       </button>
//       <button
//         onClick={() => setPlayMode("Stop")}
//         className={playMode === "Stop" ? "active" : ""}
//       >
//         Stop
//       </button>
//       <button
//         onClick={() => setPlayMode("Autoplay")}
//         className={playMode === "Autoplay" ? "active" : ""}
//       >
//         Autoplay
//       </button>
//     </div>
//   );
// };

// export default Controls;

// import { useEffect } from "react";

// const Controls = ({
//   autoplay,
//   setAutoplay,
//   autosave,
//   setAutosave,
//   code,
//   setCode,
// }) => {
//   const togglePlay = () => {
//     setAutoplay(function (prev) {
//       return !prev;
//     });
//   };

//   const toggleSave = () => {
//     setAutosave(function (prev) {
//       return !prev;
//     });
//   };

//   useEffect(() => {
//     if (autosave) {
//       localStorage.setItem("savedCode", code);
//     }
//     console.log("Autoplay updated:", autoplay);
//   }, [autoplay, code]);

//   return (
//     <div className="flex gap-4 p-4 bg-gray-100 rounded-lg shadow-md mb-5">
//       <label className="flex items-center gap-2 text-gray-700">
//         <input
//           type="checkbox"
//           checked={autoplay}
//           onChange={togglePlay}
//           className="w-4 h-4 accent-blue-500"
//         />
//         Autoplay
//       </label>
//       <label className="flex items-center gap-2 text-gray-700">
//         <input
//           type="checkbox"
//           checked={autosave}
//           onChange={toggleSave}
//           className="w-4 h-4 accent-blue-500"
//         />
//         Autosave
//       </label>
//     </div>
//   );
// };

// export default Controls;
