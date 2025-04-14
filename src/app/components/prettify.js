import prettier from "prettier/standalone";
import parserHtml from "prettier/plugins/html";
// import parserHtml from "prettier-plugin-html";

export async function prettify(code) {
  try {
    return prettier.format(code, {
      parser: "html",
      plugins: [parserHtml],
    });
  } catch (err) {
    console.error("Prettify error:", err);
    return code;
  }
}
