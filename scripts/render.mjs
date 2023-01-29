// @format
import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { env, argv } from "process";
import { parse, resolve } from "path";

import { convert } from "html-to-text";
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

const metaMatcher = new RegExp(
  "site\\/posts\\/(\\d{4}-\\d{2}-\\d{2})\\/([a-zA-Z-]*)\\.md"
);
const metaMatch = postPath.match(metaMatcher);
let url;
let date;
if (metaMatch && metaMatch[1] && metaMatch[2]) {
  const host = "https://proofinprogress.com";
  const slug = metaMatch[2];
  date = metaMatch[1];
  url = `${host}/posts/${date}/${slug}.html`;
}

const imgMatcher = new RegExp('<img[^>]*src="([^"]+)"[^>]*>');
const imgMatch = rendered.match(imgMatcher);
let imgPath;
if (imgMatch) {
  try {
    imgPath = new URL(imgMatch[1], url).href;
  } catch (err) {
    // We ignore cases where this won't work.
  }
}

const matcher = new RegExp("(?:<p>)([\\s\\S]+?)(?:<\\/p>)");
const match = rendered.match(matcher);
let description = "";
if (match) {
  description = match[1].replace(/[\r\n]/gm, " ");
}

const liveReloadInclude =
  env.NODE_ENV !== "test"
    ? ""
    : `<script src="http://localhost:8888"></script>`;
const doc = `
<!doctype html>
<html>
  <head>
    <script defer data-domain="proofinprogress.com" src="https://plausible.io/js/script.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charset="utf-8"/>
    <meta property="og:title" content="${fTitle}" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="article" />
    ${url ? `<meta property="og:url" content="${url}" />` : ""}
    ${imgPath ? `<meta property="og:image" content="${imgPath}" />` : ""}
    <meta property="article:author" content="Tim Daubenschütz">
    ${
      date
        ? `<meta property="article:published_time" content="${new Date(
            date
          ).toISOString()}">`
        : ""
    }
    <meta property="og:site_name" content="Proof In Progress">
    <meta name="description" content="${encode(convert(description))}">
    <meta name="twitter:title" content="${fTitle}">
    <meta name="twitter:description" content="${encode(convert(description))}">
    ${imgPath ? `<meta property="twitter:image" content="${imgPath}" />` : ""}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@timdaub">
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
