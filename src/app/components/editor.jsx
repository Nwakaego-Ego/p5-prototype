const Editor = ({ code, setCode }) => {
  return (
    <textarea
      value={code}
      onChange={(e) => setCode(e.target.value)}
      placeholder="Write your p5.js code here..."
      className="mb-5 mt-5 w-full h-48 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  );
};

export default Editor;

// const Editor = ({ code, setCode }) => {
//   return (
//     <textarea
//       value={code}
//       onChange={(e) => setCode(e.target.value)}
//       placeholder="Write your p5.js code here..."
//       style={{ width: "100%", height: "200px" }}
//     />
//   );
// };

// export default Editor;
