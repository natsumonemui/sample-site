import { defineConfig } from "astro/config"

import { satteri } from "@astrojs/markdown-satteri"
import {
  blockExpressiveCode,
  inlineExpressiveCode,
} from "./src/lib/expressive-code"
import { temmlMath } from "./src/lib/math"
import { calloutDirective } from "./src/lib/callout"
import { externalLinks } from "./src/lib/external-links"
import { headingNamespace } from "./src/lib/heading-namespace"
import { headingAnchors } from "./src/lib/heading-anchors"
import { softLineBreaks } from "./src/lib/soft-line-breaks"

export default defineConfig({
  site: "https://min-width.com",
  compressHTML: true,
  prefetch: { prefetchAll: true },
  markdown: {
    syntaxHighlight: false,
    processor: satteri({
      features: { directive: true, math: true },
      mdastPlugins: [calloutDirective, inlineExpressiveCode, temmlMath, softLineBreaks],
      hastPlugins: [externalLinks, blockExpressiveCode, headingNamespace, headingAnchors],
    }),
  },
})
