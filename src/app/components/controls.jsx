const Controls = ({
  autoplay,
  setAutoplay,
  autosave,
  setAutosave,
  code,
  setCode,
}) => {
  const togglePlay = () => {
    setAutoplay(function (prev) {
      return !prev;
    });
  };

  const toggleSave = () => {
    setAutosave(function (prev) {
      return !prev;
    });
  };

  const [code, setCode] = useState(() => {
    return localStorage.getItem("savedCode") || "";
  });

  useEffect(() => {
    if (autosave) {
      localStorage.setItem("savedCode", code);
    }
    console.log("Autoplay updated:", autoplay);
  }, [autoplay, code]);

  return (
    <div className="flex gap-4 p-4 bg-gray-100 rounded-lg shadow-md mb-5">
      <label className="flex items-center gap-2 text-gray-700">
        <input
          type="checkbox"
          checked={autoplay}
          // onChange={() => setAutoplay((prev) => !prev)}
          onChange={togglePlay}
          className="w-4 h-4 accent-blue-500"
        />
        Autoplay
      </label>
      <label className="flex items-center gap-2 text-gray-700">
        <input
          type="checkbox"
          checked={autosave}
          onChange={toggleSave}
          className="w-4 h-4 accent-blue-500"
        />
        Autosave
      </label>
    </div>
  );
};

export default Controls;

// const Controls = ({ autoplay, setAutoplay, autosave, setAutosave }) => {
//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           checked={autoplay}
//           onChange={() => setAutoplay(!autoplay)}
//         />{" "}
//         Autoplay
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           checked={autosave}
//           onChange={() => setAutosave(!autosave)}
//         />{" "}
//         Autosave
//       </label>
//     </div>
//   );
// };

// export default Controls;
