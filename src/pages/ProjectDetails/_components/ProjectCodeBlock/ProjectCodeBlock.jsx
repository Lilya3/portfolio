import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-markup";
import "./ProjectCodeBlock.scss";


function ProjectCodeBlock({ title, code }) {
  const isHtmlSnippet = title.toLowerCase().includes("html");

  const highlightedCode = Prism.highlight(
    code,
    isHtmlSnippet ? Prism.languages.markup : Prism.languages.jsx,
    isHtmlSnippet ? "markup" : "jsx"
  );

  return (
    <div className="project-details__code-card">
      <div className="project-details__code-header">
        <span>{title}</span>
      </div>

      <pre>
        <code
          dangerouslySetInnerHTML={{
            __html: highlightedCode,
          }}
        />
      </pre>
    </div>
  );
}

export default ProjectCodeBlock;