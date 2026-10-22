"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[7406],{

/***/ "./src/components/views/right_panel/PdfViewer.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  PdfViewer: () => (/* binding */ PdfViewer)
});

// UNUSED EXPORTS: PDF_IFRAME_PERMISSIONS, PDF_USERCONTENT_URL

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.3.0/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@19.3.0/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts
var logger = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts");
// EXTERNAL MODULE: ../../packages/shared-components/dist/element-web-shared-components.js + 1 modules
var element_web_shared_components = __webpack_require__("../../packages/shared-components/dist/element-web-shared-components.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.29.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.29.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/debounce.js
var debounce = __webpack_require__("../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/debounce.js");
// EXTERNAL MODULE: ./src/settings/SettingsStore.ts + 10 modules
var SettingsStore = __webpack_require__("./src/settings/SettingsStore.ts");
// EXTERNAL MODULE: ./src/settings/SettingLevel.ts
var SettingLevel = __webpack_require__("./src/settings/SettingLevel.ts");
;// ./src/utils/pdfViewerState.ts

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

;



const loggerPdfState = logger/* logger */.vF.getChild("pdfViewerState");

/**
 * How many files we remember a position for. Reading positions are cheap to lose and expensive to
 * accumulate — the setting is serialised in full on every write — so the least recently updated
 * entries are dropped once the map grows past this.
 */
const PDF_VIEWER_STATE_LIMIT = 100;

/**
 * Scrolling reports a new position on every frame. Coalesce them so that a scroll through a long
 * document is a couple of writes rather than hundreds, while `maxWait` keeps a continuous scroll from
 * deferring the write indefinitely.
 */
const SAVE_DEBOUNCE_MS = 1000;
const SAVE_MAX_WAIT_MS = 5000;

/** Positions recorded since the last write, keyed by MXC URI. */
const pendingStates = new Map();

/**
 * Drop the least recently updated entries until the map is within {@link PDF_VIEWER_STATE_LIMIT}.
 */
function evictOldest(states) {
  const entries = Object.entries(states);
  if (entries.length <= PDF_VIEWER_STATE_LIMIT) return states;
  entries.sort(([, a], [, b]) => b.updatedAt - a.updatedAt);
  return Object.fromEntries(entries.slice(0, PDF_VIEWER_STATE_LIMIT));
}
async function writePendingStates() {
  if (pendingStates.size === 0) return;
  const states = Object.fromEntries(pendingStates);
  pendingStates.clear();

  // Re-read rather than close over an earlier value: another viewer may have written in the
  // meantime, and a whole-map setting would otherwise lose their entry.
  const stored = SettingsStore/* default */.A.getValue("pdfViewerState");
  await SettingsStore/* default */.A.setValue("pdfViewerState", null, SettingLevel/* SettingLevel */.p.DEVICE, evictOldest(_objectSpread(_objectSpread({}, stored), states)));
}
const flushPending = () => {
  void writePendingStates().catch(error => {
    loggerPdfState.warn("Unable to persist PDF viewer state", error);
  });
};
const debouncedFlush = (0,debounce/* default */.A)(flushPending, SAVE_DEBOUNCE_MS, {
  maxWait: SAVE_MAX_WAIT_MS
});

/**
 * The position last recorded for a file, if there is one.
 *
 * @param uri - MXC URI of the PDF.
 */
function getPdfViewerState(uri) {
  const pending = pendingStates.get(uri);
  if (pending) return pending;
  return SettingsStore/* default */.A.getValue("pdfViewerState")[uri];
}

/**
 * Record where the reader has got to in a file. The write itself is debounced, so this is cheap
 * enough to call for every scroll event.
 *
 * @param uri - MXC URI of the PDF.
 * @param state - Position to remember, without the timestamp used for eviction.
 */
function setPdfViewerState(uri, state) {
  pendingStates.set(uri, _objectSpread(_objectSpread({}, state), {}, {
    updatedAt: Date.now()
  }));
  debouncedFlush();
}

/**
 * Write any pending positions out now. Call this when a viewer closes, so that the last position
 * before it went away is not lost with the outstanding debounce.
 */
function flushPdfViewerState() {
  debouncedFlush.cancel();
  flushPending();
}
;// ./src/usercontent/pdf/protocol.ts
/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

/**
 * The protocol between the app and the PDF usercontent iframe. The iframe posts `ready` to its parent
 * with one end of a MessageChannel; everything else travels over that channel. Neither side trusts the
 * other: each message is parsed before use.
 */

/**
 * Where the reader is in the document, as pdf.js reports it on `updateviewarea` and accepts it back as
 * an `XYZ` destination. `left` and `top` are in PDF user-space units on `page`.
 */

const PDF_NAMED_SCALES = new Set(["auto", "page-actual", "page-fit", "page-width", "page-height"]);

/** Which way a zoom step goes. */

/**
 * Messages the app sends to the iframe: the document (transferred) and where to open it, a page to go
 * to, or a zoom step.
 */

/** Messages the iframe sends to the app. */

/** Cap on an error message from the iframe. */
const MAX_ERROR_MESSAGE_LENGTH = 500;
function isRecord(value) {
  return typeof value === "object" && value !== null;
}
function isPositiveInteger(value) {
  return Number.isInteger(value) && value >= 1;
}
function isFiniteNumber(value) {
  return typeof value === "number" && Number.isFinite(value);
}
function isPdfPosition(value) {
  if (!isRecord(value)) return false;
  const scaleIsValid = isFiniteNumber(value.scale) && value.scale > 0 || typeof value.scale === "string" && PDF_NAMED_SCALES.has(value.scale);
  return isPositiveInteger(value.page) && scaleIsValid && isFiniteNumber(value.left) && isFiniteNumber(value.top);
}

/** Parse a message received by the iframe; `undefined` if malformed. */
function parsePdfHostMessage(data) {
  if (!isRecord(data)) return;
  switch (data.type) {
    case "load":
      {
        if (!(data.data instanceof ArrayBuffer)) return;
        if (data.position !== undefined && !isPdfPosition(data.position)) return;
        return {
          type: "load",
          data: data.data,
          position: data.position
        };
      }
    case "go_to_page":
      if (!isPositiveInteger(data.page)) return;
      return {
        type: "go_to_page",
        page: data.page
      };
    case "zoom":
      if (data.direction !== "in" && data.direction !== "out") return;
      return {
        type: "zoom",
        direction: data.direction
      };
  }
}

/** Parse a message received by the app; `undefined` if malformed. Only known fields are copied out. */
function parsePdfUsercontentMessage(data) {
  if (!isRecord(data)) return;
  switch (data.type) {
    case "ready":
      return {
        type: "ready"
      };
    case "loaded":
      if (!isPositiveInteger(data.pageCount) || !isPositiveInteger(data.page) || data.page > data.pageCount) return;
      return {
        type: "loaded",
        pageCount: data.pageCount,
        page: data.page
      };
    case "page":
      if (!isPositiveInteger(data.page)) return;
      return {
        type: "page",
        page: data.page
      };
    case "scale":
      if (!isFiniteNumber(data.scale) || data.scale <= 0) return;
      return {
        type: "scale",
        scale: data.scale
      };
    case "position":
      {
        if (!isPdfPosition(data.position)) return;
        const {
          page,
          scale,
          left,
          top
        } = data.position;
        return {
          type: "position",
          position: {
            page,
            scale,
            left,
            top
          }
        };
      }
    case "error":
      if (typeof data.message !== "string") return;
      return {
        type: "error",
        message: data.message.slice(0, MAX_ERROR_MESSAGE_LENGTH)
      };
  }
}
// EXTERNAL MODULE: ./src/languageHandler.ts
var languageHandler = __webpack_require__("./src/languageHandler.ts");
;// ./src/components/views/right_panel/PdfViewer.tsx
/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/







const loggerPdf = logger/* logger */.vF.getChild("PdfViewer");

/** Served relative to the app; see the webpack config. */
const PDF_USERCONTENT_URL = "usercontent/pdf/";

/** No `allow-same-origin`: the iframe gets an opaque origin. Popups let document links open new tabs. */
const PDF_IFRAME_PERMISSIONS = "allow-scripts allow-popups allow-popups-to-escape-sandbox";

/** `%PDF-`, the signature every PDF carries. */
const PDF_HEADER = [0x25, 0x50, 0x44, 0x46, 0x2d];
/** How far in to look for the signature; the same distance pdf.js scans. */
const PDF_HEADER_SEARCH_LIMIT = 1024;

/** The whole file is held in memory while open. */
const MAX_PDF_BYTES = 256 * 1024 * 1024;

/** Whether the bytes carry a PDF signature. Not a security control; it just fails non-PDFs cleanly. */
function hasPdfHeader(data) {
  const lastStart = Math.min(data.length - PDF_HEADER.length, PDF_HEADER_SEARCH_LIMIT);
  for (let start = 0; start <= lastStart; start++) {
    if (PDF_HEADER.every((byte, offset) => data[start + offset] === byte)) return true;
  }
  return false;
}

/**
 * Shows a PDF attachment in the right panel. pdf.js runs in a usercontent iframe with an opaque origin
 * (see `src/usercontent/pdf/` and `docs/usercontent.md`); this side fetches and checks the attachment,
 * owns the toolbar, and remembers the reading position per MXC URI. Messages from the iframe are
 * validated before use.
 */
function PdfViewer({
  media
}) {
  var _media$name;
  const iframeRef = (0,react.useRef)(null);
  /** The app's end of the channel the iframe hands over with `ready`. */
  const portRef = (0,react.useRef)(null);
  const [status, setStatus] = (0,react.useState)("loading");
  const [currentPage, setCurrentPage] = (0,react.useState)(1);
  const [pageCount, setPageCount] = (0,react.useState)(0);
  const [pageInput, setPageInput] = (0,react.useState)("1");
  const [zoomPercent, setZoomPercent] = (0,react.useState)();
  // Don't overwrite the page box while it is being typed in.
  const isEditingPageRef = (0,react.useRef)(false);
  // Escape blurs the box, and blur commits, so the cancellation must survive into the blur.
  const isPageEditCancelledRef = (0,react.useRef)(false);
  (0,react.useEffect)(() => {
    if (isEditingPageRef.current) return;
    setPageInput(String(currentPage));
  }, [currentPage]);
  (0,react.useEffect)(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    setStatus("loading");
    setCurrentPage(1);
    setPageCount(0);
    setZoomPercent(undefined);
    let disposed = false;
    let isLoaded = false;
    let port;
    const send = (message, transfer = []) => {
      var _port;
      (_port = port) === null || _port === void 0 || _port.postMessage(message, transfer);
    };
    const fail = error => {
      if (disposed) return;
      loggerPdf.error("Unable to load PDF", error);
      setStatus("error");
    };
    const loadDocument = async () => {
      // The declared size is a claim, but a large one saves the download.
      if (media.size !== undefined && media.size > MAX_PDF_BYTES) {
        throw new Error("PDF attachment is too large");
      }
      const blob = await media.blob();
      if (blob.size === 0) {
        throw new Error("PDF attachment is empty");
      }
      if (blob.size > MAX_PDF_BYTES) {
        throw new Error("PDF attachment is too large");
      }
      const data = new Uint8Array(await blob.arrayBuffer());
      if (!hasPdfHeader(data)) {
        throw new Error("Attachment is not a PDF");
      }
      if (disposed) return;
      const saved = getPdfViewerState(media.uri);
      const position = saved && {
        page: saved.page,
        scale: saved.scale,
        left: saved.left,
        top: saved.top
      };

      // Transferred, not copied.
      send({
        type: "load",
        data: data.buffer,
        position
      }, [data.buffer]);
    };
    const onPortMessage = event => {
      if (disposed) return;
      const message = parsePdfUsercontentMessage(event.data);
      if (!message) return;
      switch (message.type) {
        case "ready":
          break;
        case "loaded":
          isLoaded = true;
          setPageCount(message.pageCount);
          setCurrentPage(message.page);
          setStatus("ready");
          break;
        case "page":
          setCurrentPage(message.page);
          break;
        case "scale":
          setZoomPercent(message.scale);
          break;
        case "position":
          // Positions before `loaded` predate the restore.
          if (!isLoaded) return;
          setPdfViewerState(media.uri, message.position);
          break;
        case "error":
          fail(new Error(message.message));
          break;
      }
    };

    // The iframe posts `ready` to this window with its end of a MessageChannel; nothing else arrives here.
    const onWindowMessage = event => {
      var _parsePdfUsercontentM;
      // Only our iframe, and only with the "null" origin a sandboxed iframe has.
      if (disposed || event.source !== iframe.contentWindow || event.origin !== "null") return;
      const received = event.ports[0];
      if (((_parsePdfUsercontentM = parsePdfUsercontentMessage(event.data)) === null || _parsePdfUsercontentM === void 0 ? void 0 : _parsePdfUsercontentM.type) !== "ready" || !received) return;

      // A second `ready` means the iframe reloaded itself; it does not get the document again.
      if (port) return;
      port = received;
      portRef.current = received;
      received.onmessage = onPortMessage;
      void loadDocument().catch(fail);
    };

    // Listen before setting `src` so `ready` cannot be missed.
    window.addEventListener("message", onWindowMessage);
    iframe.src = PDF_USERCONTENT_URL;
    return () => {
      var _port2;
      disposed = true;
      window.removeEventListener("message", onWindowMessage);
      (_port2 = port) === null || _port2 === void 0 || _port2.close();
      portRef.current = null;

      // Don't leave the last position sitting in the debounce.
      flushPdfViewerState();
    };
  }, [media]);
  const commitPageInput = (0,react.useCallback)(() => {
    const requestedPage = Number.parseInt(pageInput, 10);
    if (Number.isInteger(requestedPage) && requestedPage >= 1 && requestedPage <= pageCount) {
      var _portRef$current;
      // The iframe reports the new page back via `page`.
      const message = {
        type: "go_to_page",
        page: requestedPage
      };
      (_portRef$current = portRef.current) === null || _portRef$current === void 0 || _portRef$current.postMessage(message);
    } else {
      setPageInput(String(currentPage));
    }
  }, [currentPage, pageCount, pageInput]);
  const zoom = (0,react.useCallback)(direction => {
    var _portRef$current2;
    const message = {
      type: "zoom",
      direction
    };
    (_portRef$current2 = portRef.current) === null || _portRef$current2 === void 0 || _portRef$current2.postMessage(message);
  }, []);
  const zoomIn = (0,react.useCallback)(() => zoom("in"), [zoom]);
  const zoomOut = (0,react.useCallback)(() => zoom("out"), [zoom]);
  const onPageInputChange = (0,react.useCallback)(value => {
    setPageInput(value);
  }, []);
  const onPageInputFocus = (0,react.useCallback)(() => {
    isEditingPageRef.current = true;
    isPageEditCancelledRef.current = false;
  }, []);
  const onPageInputBlur = (0,react.useCallback)(() => {
    isEditingPageRef.current = false;
    if (isPageEditCancelledRef.current) {
      isPageEditCancelledRef.current = false;
      setPageInput(String(currentPage));
      return;
    }
    commitPageInput();
  }, [commitPageInput, currentPage]);
  const onPageInputCancel = (0,react.useCallback)(() => {
    // The View blurs the input next, which runs the guarded blur handler above.
    isPageEditCancelledRef.current = true;
    setPageInput(String(currentPage));
  }, [currentPage]);
  return /*#__PURE__*/react.createElement(element_web_shared_components/* PdfViewerView */.weH, {
    status: status,
    currentPage: currentPage,
    pageCount: pageCount,
    pageInput: pageInput,
    onPageInputChange: onPageInputChange,
    onPageInputFocus: onPageInputFocus,
    onPageInputBlur: onPageInputBlur,
    onPageInputCancel: onPageInputCancel,
    onPageSubmit: commitPageInput,
    onZoomIn: zoomIn,
    onZoomOut: zoomOut,
    zoomPercent: zoomPercent
  }, /*#__PURE__*/react.createElement("iframe", {
    key: media.uri,
    ref: iframeRef,
    className: "mx_PdfViewer_iframe",
    "data-testid": "pdf-iframe",
    sandbox: PDF_IFRAME_PERMISSIONS,
    title: (_media$name = media.name) !== null && _media$name !== void 0 ? _media$name : (0,languageHandler._t)("pdf_viewer|title")
  }));
}

/***/ }

}]);
//# sourceMappingURL=7406.js.map