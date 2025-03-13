import { useEffect, useRef } from "react";

const Preview = ({ code }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (!code.trim()) {
      if (iframeRef.current) {
        iframeRef.current.srcdoc = "<html><body></body></html>"; // Clears the preview
      }
      return;
    }

    const sketchHTML = `
    <html>
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
      </head>
      <body>
        <script>
          ${code}
        </script>
      </body>
    </html>
  `;

    if (iframeRef.current) {
      iframeRef.current.srcdoc = sketchHTML;
    }
  }, [code]);

  // useEffect(() => {
  //   if (!code.trim()) return;

  //   const sketchHTML = `
  //     <html>
  //       <head>
  //         <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
  //       </head>
  //       <body>
  //         <script>
  //           ${code}
  //         </script>
  //       </body>
  //     </html>
  //   `;

  //   if (iframeRef.current) {
  //     iframeRef.current.srcdoc = sketchHTML;
  //   }
  // }, [code]);

  return (
    <iframe
      ref={iframeRef}
      style={{ width: "100%", height: "300px", border: "1px solid black" }}
    />
  );
};

export default Preview;

// import { useEffect, useRef } from "react";

// const Preview = ({ code }) => {
//   const iframeRef = useRef(null);

//   useEffect(() => {
//     if (!code.trim()) return;

//     const sketchHTML = `
//       <html>
//         <head>
//           <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
//         </head>
//         <body>
//           <script>
//             ${code}
//           </script>
//         </body>
//       </html>
//     `;

//     if (iframeRef.current) {
//       iframeRef.current.srcdoc = sketchHTML;
//     }
//   }, [code]);

//   return (
//     <iframe
//       ref={iframeRef}
//       style={{ width: "100%", height: "300px", border: "1px solid black" }}
//     />
//   );
// };

// export default Preview;
