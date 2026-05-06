import { transformerNotationHighlight } from "@shikijs/transformers";
import { codeToHtml } from "shiki";
import { CopyCodeButton } from "@/components/mdx/copy-code-button";

export async function CodeBlock({
  code,
  lang = "ts",
  filename,
}: {
  code: string;
  lang?: string;
  filename?: string;
}) {
  const html = await codeToHtml(code, {
    lang,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
    transformers: [transformerNotationHighlight()],
  });

  return (
    <div className="mdx-codeblock-shell">
      <div className="mdx-codeblock-header">
        <div className="mdx-codeblock-meta">
          {filename ? <span className="mdx-codeblock-filename">{filename}</span> : null}
          <span className="mdx-codeblock-language">{lang}</span>
        </div>

        <CopyCodeButton code={code} />
      </div>

      <div
        className="mdx-codeblock-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
