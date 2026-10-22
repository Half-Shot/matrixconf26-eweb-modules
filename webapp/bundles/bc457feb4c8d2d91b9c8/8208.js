"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[8208],{

/***/ "./src/async-components/views/dialogs/eventindex/ConfirmTokenizerChangeDialog.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConfirmTokenizerChangeDialog)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.29.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@19.3.0/node_modules/react/index.js");
/* harmony import */ var _components_views_dialogs_BaseDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/views/dialogs/BaseDialog.tsx");
/* harmony import */ var _components_views_elements_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/views/elements/Spinner.tsx");
/* harmony import */ var _components_views_elements_DialogButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/views/elements/DialogButtons.tsx");
/* harmony import */ var _languageHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/languageHandler.ts");
/* harmony import */ var _indexing_EventIndexPeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/indexing/EventIndexPeg.ts");

/*
Copyright 2026 Hiroshi Shinaoka

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/







/*
 * Confirmation dialog for deleting the database when tokenizer mode is changed.
 */
class ConfirmTokenizerChangeDialog extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onConfirm", async () => {
      this.setState({
        deleting: true
      });
      await _indexing_EventIndexPeg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.deleteEventIndex();
      this.props.onFinished(true);
    });
    this.state = {
      deleting: false
    };
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_views_dialogs_BaseDialog__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      onFinished: this.props.onFinished,
      title: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_5__._t)("common|are_you_sure")
    }, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_5__._t)("settings|security|tokenizer_mode_change_warning"), this.state.deleting ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_views_elements_Spinner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_views_elements_DialogButtons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      primaryButton: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_5__._t)("action|ok"),
      onPrimaryButtonClick: this.onConfirm,
      primaryButtonClass: "danger",
      cancelButtonClass: "warning",
      onCancel: this.props.onFinished,
      disabled: this.state.deleting
    }));
  }
}

/***/ }

}]);
//# sourceMappingURL=8208.js.map