// @format
import { readFileSync, writeFileSync } from "fs";
import { env, argv } from "process";
import { basename } from "path";

import MarkdownIt from "markdown-it";
import mk from "@iktakahiro/markdown-it-katex";

const md = new MarkdownIt();
md.use(mk);

const post = argv[2];
const file = readFileSync(post);
const content = file.toString();
const rendered = md.render(content);

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
    <title>Simple Signal Replication Protocol Specification</title>
    <link rel="stylesheet" href="./katex.min.css">
    ${liveReloadInclude}
    <style>
      html {
        overflow-wrap: break-word;
        max-width: 70ch;
        padding: calc(1vmin + .5rem);
        margin-inline: auto;
        font-size: clamp(1em, 0.909em + 0.45vmin, 1.25em);
        font-family: system-ui;
        color: #444;
      }

      body :not(:is(h1,h2,h3,h4,h5,h6)) {
        line-height: 1.75;
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
    </style>
  </head>
  <body>
    ${rendered}
  </body>
</html>

`;
const name = basename(post, ".md");
writeFileSync(`dist/${name}.html`, doc);
