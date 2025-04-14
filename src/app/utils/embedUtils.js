export function generateIframeCode(code, editable) {
  const encoded = encodeURIComponent(code);
  const baseUrl = editable
    ? "https://editor.p5js.org/embed?code="
    : "https://editor.p5js.org/embed/sketch?";
  const src = `${baseUrl}${encoded}`;

  return `<iframe src="${src}" width="100%" height="400" frameborder="0" allowfullscreen></iframe>`;
}

export async function convertToInstanceMode(code, sound = false) {
  const instanceWrapper = `
    (function(p) {
      ${code}
    })(new p5());
  `;

  const fullScript = `
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js"></script>
    ${
      sound
        ? '<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/addons/p5.sound.min.js"></script>'
        : ""
    }
    <script>${instanceWrapper}</script>
  `;

  return fullScript;
}
