// @format
import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { env, argv } from "process";
import { parse, resolve } from "path";

import { encode } from "html-entities";
import MarkdownIt from "markdown-it";
import mk from "@iktakahiro/markdown-it-katex";

const md = new MarkdownIt({
  html: true,
});
md.use(mk);

const sourceDir = "site";
const outputDir = "dist";
const postPath = argv[2];
const file = readFileSync(postPath);
const content = file.toString();
const title = content.split("\n")[0];
const fTitle = content.substring(2, title.length);
const rendered = md.render(content);
const matcher = new RegExp("(?:<p>)([\\s\\S]+?)(?:<\\/p>)");
const match = rendered.match(matcher);
let description = "";
if (match) {
  description = match[1].replace(/[\r\n]/gm, "");
}

const liveReloadInclude =
  env.NODE_ENV !== "test"
    ? ""
    : `<script src="http://localhost:8888"></script>`;
const doc = `
<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charset="utf-8"/>
    <meta name="description" content="${encode(description)}">
    <title>${fTitle}</title>

    <link rel="stylesheet" href="/katex.min.css">
    ${liveReloadInclude}
    <style>
      html {
        background-color: #FAF9F6;
        overflow-wrap: break-word;
        max-width: 70ch;
        padding: calc(1vmin + .5rem);
        margin-inline: auto;
        font-size: clamp(1em, 0.909em + 0.45vmin, 1.25em);
        font-family: system-ui;
        color: #444;
      }

      body :not(:is(h1,h2,h3,h4,h5,h6)) {
        line-height: 1.5;
      }

      blockquote {
        font-style: italic;
      }

      p {
        text-align: justify;
        hyphens: auto;
      }

      img {
        width: 100%;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      strong {
        color: #222;
      }

      ul {
        list-style-type: square;
      }

      ul, ol {
        padding-left: 30px;
      }

      pre {
        overflow: auto;
        background-color: rgba(0,0,0,0.01);
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <a href="https://proofinprogress.com">proofinprogress.com</a>
		<br>
    <hr>
    ${rendered}
  </body>
</html>

`;
const { dir, name } = parse(postPath);
const outputPath = dir.replace(sourceDir, outputDir);
mkdirSync(outputPath, { recursive: true });
writeFileSync(resolve(outputPath, `${name}.html`), doc);
