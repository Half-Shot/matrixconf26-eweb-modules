"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[5932],{

/***/ "./src/components/views/right_panel/MarkdownViewer.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  MarkdownViewer: () => (/* binding */ MarkdownViewer)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.3.0/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@19.3.0/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts
var logger = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts");
// EXTERNAL MODULE: ../../packages/shared-components/dist/element-web-shared-components.js + 1 modules
var element_web_shared_components = __webpack_require__("../../packages/shared-components/dist/element-web-shared-components.js");
// EXTERNAL MODULE: ../../packages/shared-utils/lib/element-web-shared-utils.js
var element_web_shared_utils = __webpack_require__("../../packages/shared-utils/lib/element-web-shared-utils.js");
// EXTERNAL MODULE: ./src/Markdown.ts + 13 modules
var Markdown = __webpack_require__("./src/Markdown.ts");
// EXTERNAL MODULE: ./src/Linkify.ts
var Linkify = __webpack_require__("./src/Linkify.ts");
;// ./src/utils/renderMarkdown.ts
/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE in the repository root for full details.
*/





/**
 * Render a Markdown document to HTML that is safe to put in the DOM.
 *
 * This is the parser messages are composed with, so a document renders the way the same text would
 * in a message: raw HTML in the source is escaped rather than passed through, and links open in a
 * new tab. Soft breaks are kept, since documents are often wrapped at a fixed column. The result then
 * goes through the same sanitizer as message bodies, which limits images to the homeserver's media
 * so a document cannot phone home.
 */
function renderMarkdown(source) {
  const html = new Markdown/* default */.A(source).toHTML({
    externalLinks: true,
    hardSoftBreaks: false
  });
  return (0,element_web_shared_utils/* sanitizeHtml */.pn)(html, Linkify/* sanitizeHtmlParams */.h4);
}
// EXTERNAL MODULE: ./src/utils/permalinks/Permalinks.ts + 2 modules
var Permalinks = __webpack_require__("./src/utils/permalinks/Permalinks.ts");
;// ./src/components/views/right_panel/MarkdownViewer.tsx
/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE in the repository root for full details.
*/






const loggerMarkdown = logger/* logger */.vF.getChild("MarkdownViewer");

/**
 * Cap on the attachment. The whole rendered document sits in the DOM for as long as it is open, and
 * the sender chooses how big it is.
 */
const MAX_MARKDOWN_BYTES = 2 * 1024 * 1024;

/**
 * Renders a Markdown attachment.
 *
 * Loads the file, renders it to sanitized HTML and hands that to the view. Links to rooms, users and
 * messages are followed within the app, as they are in the timeline; the sanitizer already makes every
 * other link open in a new tab.
 */
function MarkdownViewer({
  media
}) {
  const [status, setStatus] = (0,react.useState)("loading");
  const [html, setHtml] = (0,react.useState)("");
  (0,react.useEffect)(() => {
    setStatus("loading");
    setHtml("");
    let disposed = false;
    const loadDocument = async () => {
      // The declared size is the sender's claim, but a claim big enough to refuse saves the download.
      if (media.size !== undefined && media.size > MAX_MARKDOWN_BYTES) {
        throw new Error("Markdown attachment is too large");
      }
      const blob = await media.blob();
      if (blob.size === 0) {
        throw new Error("Markdown attachment is empty");
      }
      if (blob.size > MAX_MARKDOWN_BYTES) {
        throw new Error("Markdown attachment is too large");
      }
      const text = new TextDecoder().decode(await blob.arrayBuffer());
      // Text never contains NUL, so a file that does was never Markdown, whatever it was labelled.
      if (text.includes("\0")) {
        throw new Error("Attachment is not a text file");
      }
      if (disposed) return;
      setHtml(renderMarkdown(text));
      setStatus("ready");
    };
    void loadDocument().catch(error => {
      if (disposed) return;
      loggerMarkdown.error("Unable to load Markdown file", error);
      setStatus("error");
    });
    return () => {
      disposed = true;
    };
  }, [media]);
  const onContentClick = (0,react.useCallback)(event => {
    const link = event.target.closest("a");
    if (!link) return;
    const localHref = (0,Permalinks/* tryTransformPermalinkToLocalHref */.uK)(link.href);
    if (localHref !== link.href) {
      event.preventDefault();
      window.location.hash = localHref;
    }
  }, []);
  return /*#__PURE__*/react.createElement(element_web_shared_components/* MarkdownViewerView */.tRY, {
    status: status,
    html: html,
    onContentClick: onContentClick
  });
}

/***/ }

}]);
//# sourceMappingURL=5932.js.map