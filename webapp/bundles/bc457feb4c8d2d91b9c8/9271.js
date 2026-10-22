"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[9271],{

/***/ "./src/components/views/auth/LoginWithQR.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  LoginWithQRFailureReason: () => (/* binding */ LoginWithQRFailureReason),
  "default": () => (/* binding */ LoginWithQR)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.29.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.29.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.3.0/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@19.3.0/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/rendezvous/index.ts + 8 modules
var rendezvous = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/rendezvous/index.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts
var logger = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrix.ts + 9 modules
var matrix = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrix.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/utils.ts
var utils = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/utils.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/randomstring.ts
var randomstring = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/randomstring.ts");
// EXTERNAL MODULE: ./src/components/views/auth/LoginWithQR-types.ts
var LoginWithQR_types = __webpack_require__("./src/components/views/auth/LoginWithQR-types.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vector-im+compound-design-tokens@11.2.0_@types+react@19.3.0_react@19.3.0/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-left.js
var chevron_left = __webpack_require__("../../node_modules/.pnpm/@vector-im+compound-design-tokens@11.2.0_@types+react@19.3.0_react@19.3.0/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-left.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vector-im+compound-design-tokens@11.2.0_@types+react@19.3.0_react@19.3.0/node_modules/@vector-im/compound-design-tokens/assets/web/icons/check-circle-solid.js
var check_circle_solid = __webpack_require__("../../node_modules/.pnpm/@vector-im+compound-design-tokens@11.2.0_@types+react@19.3.0_react@19.3.0/node_modules/@vector-im/compound-design-tokens/assets/web/icons/check-circle-solid.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vector-im+compound-design-tokens@11.2.0_@types+react@19.3.0_react@19.3.0/node_modules/@vector-im/compound-design-tokens/assets/web/icons/error-solid.js
var error_solid = __webpack_require__("../../node_modules/.pnpm/@vector-im+compound-design-tokens@11.2.0_@types+react@19.3.0_react@19.3.0/node_modules/@vector-im/compound-design-tokens/assets/web/icons/error-solid.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vector-im+compound-web@10.3.1_@fontsource+inconsolata@5.3.0_@fontsource+inter@5.3.0_@t_e2e4ca95964afd075e3070c5b7edd5f3/node_modules/@vector-im/compound-web/dist/components/Button/Button.js + 1 modules
var Button = __webpack_require__("../../node_modules/.pnpm/@vector-im+compound-web@10.3.1_@fontsource+inconsolata@5.3.0_@fontsource+inter@5.3.0_@t_e2e4ca95964afd075e3070c5b7edd5f3/node_modules/@vector-im/compound-web/dist/components/Button/Button.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vector-im+compound-web@10.3.1_@fontsource+inconsolata@5.3.0_@fontsource+inter@5.3.0_@t_e2e4ca95964afd075e3070c5b7edd5f3/node_modules/@vector-im/compound-web/dist/components/Typography/Text.js
var Text = __webpack_require__("../../node_modules/.pnpm/@vector-im+compound-web@10.3.1_@fontsource+inconsolata@5.3.0_@fontsource+inter@5.3.0_@t_e2e4ca95964afd075e3070c5b7edd5f3/node_modules/@vector-im/compound-web/dist/components/Typography/Text.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vector-im+compound-web@10.3.1_@fontsource+inconsolata@5.3.0_@fontsource+inter@5.3.0_@t_e2e4ca95964afd075e3070c5b7edd5f3/node_modules/@vector-im/compound-web/dist/components/Icon/BigIcon/BigIcon.js + 1 modules
var BigIcon = __webpack_require__("../../node_modules/.pnpm/@vector-im+compound-web@10.3.1_@fontsource+inconsolata@5.3.0_@fontsource+inter@5.3.0_@t_e2e4ca95964afd075e3070c5b7edd5f3/node_modules/@vector-im/compound-web/dist/components/Icon/BigIcon/BigIcon.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vector-im+compound-web@10.3.1_@fontsource+inconsolata@5.3.0_@fontsource+inter@5.3.0_@t_e2e4ca95964afd075e3070c5b7edd5f3/node_modules/@vector-im/compound-web/dist/components/Typography/Heading.js
var Heading = __webpack_require__("../../node_modules/.pnpm/@vector-im+compound-web@10.3.1_@fontsource+inconsolata@5.3.0_@fontsource+inter@5.3.0_@t_e2e4ca95964afd075e3070c5b7edd5f3/node_modules/@vector-im/compound-web/dist/components/Typography/Heading.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vector-im+compound-web@10.3.1_@fontsource+inconsolata@5.3.0_@fontsource+inter@5.3.0_@t_e2e4ca95964afd075e3070c5b7edd5f3/node_modules/@vector-im/compound-web/dist/components/Form/Controls/MFA/MFA.js + 1 modules
var MFA = __webpack_require__("../../node_modules/.pnpm/@vector-im+compound-web@10.3.1_@fontsource+inconsolata@5.3.0_@fontsource+inter@5.3.0_@t_e2e4ca95964afd075e3070c5b7edd5f3/node_modules/@vector-im/compound-web/dist/components/Form/Controls/MFA/MFA.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vector-im+compound-design-tokens@11.2.0_@types+react@19.3.0_react@19.3.0/node_modules/@vector-im/compound-design-tokens/assets/web/icons/qr-code.js
var qr_code = __webpack_require__("../../node_modules/.pnpm/@vector-im+compound-design-tokens@11.2.0_@types+react@19.3.0_react@19.3.0/node_modules/@vector-im/compound-design-tokens/assets/web/icons/qr-code.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vector-im+compound-design-tokens@11.2.0_@types+react@19.3.0_react@19.3.0/node_modules/@vector-im/compound-design-tokens/assets/web/icons/mobile.js
var mobile = __webpack_require__("../../node_modules/.pnpm/@vector-im+compound-design-tokens@11.2.0_@types+react@19.3.0_react@19.3.0/node_modules/@vector-im/compound-design-tokens/assets/web/icons/mobile.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vector-im+compound-design-tokens@11.2.0_@types+react@19.3.0_react@19.3.0/node_modules/@vector-im/compound-design-tokens/assets/web/icons/lock-solid.js
var lock_solid = __webpack_require__("../../node_modules/.pnpm/@vector-im+compound-design-tokens@11.2.0_@types+react@19.3.0_react@19.3.0/node_modules/@vector-im/compound-design-tokens/assets/web/icons/lock-solid.js");
// EXTERNAL MODULE: ./src/languageHandler.ts
var languageHandler = __webpack_require__("./src/languageHandler.ts");
// EXTERNAL MODULE: ./src/components/views/elements/AccessibleButton.tsx
var AccessibleButton = __webpack_require__("./src/components/views/elements/AccessibleButton.tsx");
// EXTERNAL MODULE: ./src/components/views/elements/QRCode.tsx
var QRCode = __webpack_require__("./src/components/views/elements/QRCode.tsx");
// EXTERNAL MODULE: ./src/components/views/elements/Spinner.tsx
var Spinner = __webpack_require__("./src/components/views/elements/Spinner.tsx");
// EXTERNAL MODULE: ./src/SdkConfig.ts
var SdkConfig = __webpack_require__("./src/SdkConfig.ts");
// EXTERNAL MODULE: ./src/components/structures/ErrorMessage.tsx
var ErrorMessage = __webpack_require__("./src/components/structures/ErrorMessage.tsx");
;// ./src/components/views/auth/LoginWithQRFlow.tsx

/*
Copyright 2024 New Vector Ltd.
Copyright 2022-2024 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

















/**
 * A component that implements the UI for sign in and E2EE set up by rendering a QR code in both login & reciprocate directions.
 *
 * Implements the v2024 version of MSC4108: https://github.com/matrix-org/matrix-spec-proposals/pull/4108
 */
class LoginWithQRFlow extends react.Component {
  constructor(...args) {
    super(...args);
    (0,defineProperty/* default */.A)(this, "checkCodeInput", /*#__PURE__*/(0,react.createRef)());
    (0,defineProperty/* default */.A)(this, "handleClick", type => {
      return async e => {
        var _this$checkCodeInput$;
        e.preventDefault();
        await this.props.onClick(type, type === LoginWithQR_types/* Click */.HY.Approve ? (_this$checkCodeInput$ = this.checkCodeInput.current) === null || _this$checkCodeInput$ === void 0 ? void 0 : _this$checkCodeInput$.value : undefined);
      };
    });
    (0,defineProperty/* default */.A)(this, "cancelButton", () => /*#__PURE__*/react.createElement(Button/* Button */.$, {
      "data-testid": "cancel-button",
      kind: "primary",
      size: "lg",
      onClick: this.handleClick(LoginWithQR_types/* Click */.HY.Cancel)
    }, (0,languageHandler._t)("action|cancel")));
    (0,defineProperty/* default */.A)(this, "simpleSpinner", description => {
      return /*#__PURE__*/react.createElement("div", {
        className: "mx_LoginWithQR_spinner"
      }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Spinner/* default */.A, null), description && /*#__PURE__*/react.createElement("p", null, description)));
    });
  }
  render() {
    let main;
    let buttons;
    let backButton = true;
    let className = "";
    switch (this.props.phase) {
      case LoginWithQR_types/* Phase */.a0.Error:
        {
          backButton = false;
          buttons = /*#__PURE__*/react.createElement(Button/* Button */.$, {
            kind: "primary",
            size: "lg",
            onClick: this.handleClick(LoginWithQR_types/* Click */.HY.ShowQr)
          }, this.props.intent === rendezvous/* RendezvousIntent */.E$.LOGIN_ON_NEW_DEVICE ? (0,languageHandler._t)("auth|qr_code_login|start_over") : (0,languageHandler._t)("action|try_again"));
          let Icon = error_solid/* default */.A;
          let iconKind = "critical";
          let title;
          let message;
          switch (this.props.failureReason) {
            case rendezvous/* MSC4108FailureReason */.n$.UnsupportedProtocol:
              title = (0,languageHandler._t)("auth|qr_code_login|error_unsupported_protocol_title");
              message = (0,languageHandler._t)("auth|qr_code_login|error_unsupported_protocol");
              break;
            case rendezvous/* MSC4108FailureReason */.n$.UserCancelled:
              title = (0,languageHandler._t)("auth|qr_code_login|error_user_cancelled_title");
              message = (0,languageHandler._t)("auth|qr_code_login|error_user_cancelled");
              if (this.props.intent === rendezvous/* RendezvousIntent */.E$.LOGIN_ON_NEW_DEVICE) {
                buttons = this.cancelButton();
              }
              break;
            case rendezvous/* MSC4108FailureReason */.n$.AuthorizationExpired:
            case rendezvous/* ClientRendezvousFailureReason */.fF.Expired:
              title = (0,languageHandler._t)("auth|qr_code_login|error_expired_title");
              message = (0,languageHandler._t)("auth|qr_code_login|error_expired");
              break;
            case rendezvous/* ClientRendezvousFailureReason */.fF.InsecureChannelDetected:
              title = (0,languageHandler._t)("auth|qr_code_login|error_insecure_channel_detected_title");
              message = /*#__PURE__*/react.createElement(react.Fragment, null, (0,languageHandler._t)("auth|qr_code_login|error_insecure_channel_detected"), /*#__PURE__*/react.createElement(Text/* Text */.E, {
                as: "h2",
                size: "lg",
                weight: "semibold",
                "data-testid": "cancellation-message"
              }, (0,languageHandler._t)("auth|qr_code_login|error_insecure_channel_detected_instructions")), /*#__PURE__*/react.createElement("ol", null, /*#__PURE__*/react.createElement("li", null, (0,languageHandler._t)("auth|qr_code_login|error_insecure_channel_detected_instructions_1")), /*#__PURE__*/react.createElement("li", null, (0,languageHandler._t)("auth|qr_code_login|error_insecure_channel_detected_instructions_2")), /*#__PURE__*/react.createElement("li", null, (0,languageHandler._t)("auth|qr_code_login|error_insecure_channel_detected_instructions_3"))));
              break;
            case rendezvous/* ClientRendezvousFailureReason */.fF.OtherDeviceAlreadySignedIn:
              iconKind = "success";
              Icon = check_circle_solid/* default */.A;
              title = (0,languageHandler._t)("auth|qr_code_login|error_other_device_already_signed_in_title");
              message = (0,languageHandler._t)("auth|qr_code_login|error_other_device_already_signed_in");
              break;
            case rendezvous/* ClientRendezvousFailureReason */.fF.UserDeclined:
              title = (0,languageHandler._t)("auth|qr_code_login|error_user_declined_title");
              message = (0,languageHandler._t)("auth|qr_code_login|error_user_declined");
              if (this.props.intent === rendezvous/* RendezvousIntent */.E$.LOGIN_ON_NEW_DEVICE) {
                buttons = this.cancelButton();
              }
              break;
            case LoginWithQRFailureReason.RateLimited:
              title = (0,languageHandler._t)("error|something_went_wrong");
              message = (0,languageHandler._t)("auth|qr_code_login|error_rate_limited");
              break;
            case rendezvous/* ClientRendezvousFailureReason */.fF.ETagMissing:
              title = (0,languageHandler._t)("error|something_went_wrong");
              message = (0,languageHandler._t)("auth|qr_code_login|error_etag_missing");
              break;
            case rendezvous/* ClientRendezvousFailureReason */.fF.HomeserverLacksSupport:
              Icon = qr_code/* default */.A;
              backButton = true;
              title = (0,languageHandler._t)("auth|qr_code_login|unsupported_heading");
              message = (0,languageHandler._t)("auth|qr_code_login|unsupported_explainer");
              if (this.props.intent === rendezvous/* RendezvousIntent */.E$.LOGIN_ON_NEW_DEVICE) {
                buttons = this.cancelButton();
              }
              break;
            case rendezvous/* MSC4108FailureReason */.n$.DeviceAlreadyExists:
            case rendezvous/* MSC4108FailureReason */.n$.DeviceNotFound:
            case rendezvous/* MSC4108FailureReason */.n$.UnexpectedMessageReceived:
            case rendezvous/* ClientRendezvousFailureReason */.fF.OtherDeviceNotSignedIn:
            case rendezvous/* ClientRendezvousFailureReason */.fF.Unknown:
            default:
              title = (0,languageHandler._t)("error|something_went_wrong");
              message = (0,languageHandler._t)("auth|qr_code_login|error_unexpected");
              break;
          }
          className = "mx_LoginWithQR_error";
          main = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(BigIcon/* BigIcon */.Y, {
            kind: iconKind
          }, /*#__PURE__*/react.createElement(Icon, null)), /*#__PURE__*/react.createElement(Heading/* Heading */.D, {
            as: "h1",
            size: "sm",
            weight: "semibold"
          }, title), typeof message === "object" ? message : /*#__PURE__*/react.createElement("p", {
            "data-testid": "cancellation-message"
          }, message));
          break;
        }
      case LoginWithQR_types/* Phase */.a0.OutOfBandConfirmation:
        backButton = false;
        main = /*#__PURE__*/react.createElement(react.Fragment, null, this.props.intent === rendezvous/* RendezvousIntent */.E$.LOGIN_ON_NEW_DEVICE && /*#__PURE__*/react.createElement(BigIcon/* BigIcon */.Y, null, /*#__PURE__*/react.createElement(mobile/* default */.A, null)), /*#__PURE__*/react.createElement(Heading/* Heading */.D, {
          as: "h1",
          size: "sm",
          weight: "semibold"
        }, (0,languageHandler._t)("auth|qr_code_login|check_code_heading")), /*#__PURE__*/react.createElement(Text/* Text */.E, {
          size: "md"
        }, (0,languageHandler._t)("auth|qr_code_login|check_code_explainer")), /*#__PURE__*/react.createElement("label", {
          htmlFor: "mx_LoginWithQR_checkCode"
        }, (0,languageHandler._t)("auth|qr_code_login|check_code_input_label")), /*#__PURE__*/react.createElement(MFA/* MFAInput */.f, {
          className: "mx_LoginWithQR_checkCode_input mx_no_textinput",
          ref: this.checkCodeInput,
          length: 2,
          autoFocus: true,
          id: "mx_LoginWithQR_checkCode",
          "data-invalid": this.props.failureReason === LoginWithQRFailureReason.CheckCodeMismatch ? true : undefined
        }), /*#__PURE__*/react.createElement(ErrorMessage/* ErrorMessage */.K, {
          message: this.props.failureReason === LoginWithQRFailureReason.CheckCodeMismatch ? (0,languageHandler._t)("auth|qr_code_login|check_code_mismatch") : null
        }));
        buttons = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Button/* Button */.$, {
          "data-testid": "approve-login-button",
          kind: "primary",
          size: "lg",
          onClick: this.handleClick(LoginWithQR_types/* Click */.HY.Approve)
        }, (0,languageHandler._t)("action|continue")), /*#__PURE__*/react.createElement(Button/* Button */.$, {
          "data-testid": "decline-login-button",
          kind: "tertiary",
          size: "lg",
          onClick: this.handleClick(LoginWithQR_types/* Click */.HY.Decline)
        }, (0,languageHandler._t)("action|cancel")));
        break;
      case LoginWithQR_types/* Phase */.a0.ShowingQR:
        {
          let steps;
          if (this.props.intent === rendezvous/* RendezvousIntent */.E$.LOGIN_ON_NEW_DEVICE) {
            steps = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("li", null, (0,languageHandler._t)("auth|qr_code_login|open_element_mobile_device", {
              brand: SdkConfig/* default */.A.get().brand
            })), /*#__PURE__*/react.createElement("li", null, (0,languageHandler._t)("auth|qr_code_login|tap_avatar_link_new_device", {
              linkNewDevice: /*#__PURE__*/react.createElement("strong", null, (0,languageHandler._t)("settings|sessions|sign_in_with_qr"))
            })), /*#__PURE__*/react.createElement("li", null, (0,languageHandler._t)("auth|qr_code_login|choose_desktop_computer", {
              desktopComputer: /*#__PURE__*/react.createElement("strong", null, (0,languageHandler._t)("auth|qr_code_login|desktop_computer"))
            })), /*#__PURE__*/react.createElement("li", null, (0,languageHandler._t)("auth|qr_code_login|select_ready_to_scan", {
              readyToScan: /*#__PURE__*/react.createElement("strong", null, (0,languageHandler._t)("auth|qr_code_login|ready_to_scan"))
            })), /*#__PURE__*/react.createElement("li", null, (0,languageHandler._t)("auth|qr_code_login|follow_remaining_instructions")));
          } else {
            steps = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("li", null, (0,languageHandler._t)("auth|qr_code_login|open_element_other_device", {
              brand: SdkConfig/* default */.A.get().brand
            })), /*#__PURE__*/react.createElement("li", null, (0,languageHandler._t)("auth|qr_code_login|select_qr_code", {
              scanQRCode: /*#__PURE__*/react.createElement("strong", null, (0,languageHandler._t)("auth|qr_code_login|scan_qr_code"))
            })), /*#__PURE__*/react.createElement("li", null, (0,languageHandler._t)("auth|qr_code_login|point_the_camera")), /*#__PURE__*/react.createElement("li", null, (0,languageHandler._t)("auth|qr_code_login|follow_remaining_instructions")));
          }
          main = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Heading/* Heading */.D, {
            as: "h1",
            size: "sm",
            weight: "semibold"
          }, this.props.intent === rendezvous/* RendezvousIntent */.E$.LOGIN_ON_NEW_DEVICE ? (0,languageHandler._t)("auth|qr_code_login|scan_code_instruction") : (0,languageHandler._t)("auth|qr_code_login|scan_code_instruction_reciprocate")), /*#__PURE__*/react.createElement("div", {
            className: "mx_LoginWithQR_qrWrapper"
          }, this.props.code ? /*#__PURE__*/react.createElement(QRCode/* default */.A, {
            data: [{
              data: this.props.code,
              mode: "byte"
            }],
            width: 200
          }) : /*#__PURE__*/react.createElement(Spinner/* default */.A, null)), /*#__PURE__*/react.createElement("ol", null, steps));
          break;
        }
      case LoginWithQR_types/* Phase */.a0.Loading:
        main = this.simpleSpinner();
        break;
      case LoginWithQR_types/* Phase */.a0.WaitingForDevice:
        main = this.props.intent === rendezvous/* RendezvousIntent */.E$.LOGIN_ON_NEW_DEVICE ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(BigIcon/* BigIcon */.Y, null, /*#__PURE__*/react.createElement(lock_solid/* default */.A, null)), /*#__PURE__*/react.createElement(Heading/* Heading */.D, {
          as: "h1",
          size: "sm",
          weight: "semibold"
        }, (0,languageHandler._t)("auth|qr_code_login|security_code_title")), /*#__PURE__*/react.createElement(Text/* Text */.E, {
          size: "md"
        }, (0,languageHandler._t)("auth|qr_code_login|security_code_prompt")), /*#__PURE__*/react.createElement(MFA/* MFAInput */.f, {
          className: "mx_LoginWithQR_checkCode_input mx_no_textinput",
          length: 6,
          value: this.props.userCode,
          disabled: true
        }), this.simpleSpinner((0,languageHandler._t)("auth|qr_code_login|waiting_for_device"))) : this.simpleSpinner((0,languageHandler._t)("auth|qr_code_login|waiting_for_device"));
        buttons = this.cancelButton();
        break;
      case LoginWithQR_types/* Phase */.a0.Verifying:
        main = this.simpleSpinner((0,languageHandler._t)("auth|qr_code_login|completing_setup"));
        break;
    }
    return /*#__PURE__*/react.createElement("div", {
      "data-testid": "login-with-qr",
      className: classnames_default()("mx_LoginWithQR", className)
    }, this.props.intent === rendezvous/* RendezvousIntent */.E$.RECIPROCATE_LOGIN_ON_EXISTING_DEVICE && backButton ? /*#__PURE__*/react.createElement("div", {
      className: "mx_LoginWithQR_heading"
    }, /*#__PURE__*/react.createElement(AccessibleButton/* default */.A, {
      "data-testid": "back-button",
      className: "mx_LoginWithQR_BackButton",
      onClick: this.handleClick(LoginWithQR_types/* Click */.HY.Cancel),
      title: (0,languageHandler._t)("action|back")
    }, /*#__PURE__*/react.createElement(chevron_left/* default */.A, null)), /*#__PURE__*/react.createElement("div", {
      className: "mx_LoginWithQR_breadcrumbs"
    }, (0,languageHandler._t)("settings|sessions|title"), " / ", (0,languageHandler._t)("settings|sessions|sign_in_with_qr"))) : null, /*#__PURE__*/react.createElement("div", {
      className: "mx_LoginWithQR_main"
    }, main), /*#__PURE__*/react.createElement("div", {
      className: "mx_LoginWithQR_buttons"
    }, buttons));
  }
}
// EXTERNAL MODULE: ./src/utils/oauth/registerClient.ts
var registerClient = __webpack_require__("./src/utils/oauth/registerClient.ts");
;// ./src/components/views/auth/LoginWithQR.tsx

/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/











let LoginWithQRFailureReason = /*#__PURE__*/function (LoginWithQRFailureReason) {
  LoginWithQRFailureReason["RateLimited"] = "rate_limited";
  LoginWithQRFailureReason["CheckCodeMismatch"] = "check_code_mismatch";
  return LoginWithQRFailureReason;
}({});
/**
 * Resolve a server name or baseURL to the homeserver & identity server URLs.
 * @param serverNameOrBaseUrl the name or URL to resolve
 * Whilst the 2024 version of MSC4108 says that we always get a server name, in practise the
 * rust-sdk is currently misbehaving and we may receive a base URL instead. Additionally, the 2025
 * version of MSC4108  will always give the base URL.
 * As such, we should be resilient and support both formats until the spec and implementations have
 * stabilised.
 */
async function resolveServerURLs(serverNameOrBaseUrl) {
  var _clientConfig$mHomes, _clientConfig$mHomes2, _clientConfig$mIdent, _clientConfig$mIdent2;
  if (serverNameOrBaseUrl.startsWith("http://") || serverNameOrBaseUrl.startsWith("https://")) {
    // treat as base URL and skip discovery
    return {
      homeserverUrl: serverNameOrBaseUrl
    };
  }

  // treat as server name and do discovery
  const clientConfig = await matrix/* AutoDiscovery */.MNj.findClientConfig(serverNameOrBaseUrl);
  const homeserverUrl = (_clientConfig$mHomes = clientConfig === null || clientConfig === void 0 || (_clientConfig$mHomes2 = clientConfig["m.homeserver"]) === null || _clientConfig$mHomes2 === void 0 ? void 0 : _clientConfig$mHomes2.base_url) !== null && _clientConfig$mHomes !== void 0 ? _clientConfig$mHomes : undefined;
  const identityServerUrl = (_clientConfig$mIdent = clientConfig === null || clientConfig === void 0 || (_clientConfig$mIdent2 = clientConfig["m.identity_server"]) === null || _clientConfig$mIdent2 === void 0 ? void 0 : _clientConfig$mIdent2.base_url) !== null && _clientConfig$mIdent !== void 0 ? _clientConfig$mIdent : undefined;
  return {
    homeserverUrl,
    identityServerUrl
  };
}

/**
 * A component that allows sign in and E2EE set up with a QR code.
 *
 * It implements `login.reciprocate` & `login.start` capabilities and showing QR codes.
 * It does not implement any flows requiring the scanning of QR codes.
 *
 * Supports the v2024 and v2025 versions of MSC4108: https://github.com/matrix-org/matrix-spec-proposals/pull/4108
 * The version in use is chosen by matrix-js-sdk.
 */
class LoginWithQR extends react.Component {
  constructor(props) {
    var _this$props$onPhaseCh, _this$props;
    super(props);
    (0,defineProperty/* default */.A)(this, "finished", false);
    (0,defineProperty/* default */.A)(this, "abortController", void 0);
    (0,defineProperty/* default */.A)(this, "generateAndShowCode", async abortController => {
      let flow;
      try {
        flow = this.props.intent === rendezvous/* RendezvousIntent */.E$.LOGIN_ON_NEW_DEVICE ? await (0,rendezvous/* signInByGeneratingQR */.tS)(this.props.client, this.onFailure, abortController.signal) : await (0,rendezvous/* linkNewDeviceByGeneratingQR */.lS)(this.props.client, this.onFailure, abortController.signal);
        if (abortController.signal.aborted) return;
        this.setState({
          phase: LoginWithQR_types/* Phase */.a0.ShowingQR,
          flow: flow,
          failureReason: undefined
        });
      } catch (e) {
        if (abortController.signal.aborted) return;
        logger/* logger */.vF.error("Error whilst generating QR code", e);
        this.setState({
          phase: LoginWithQR_types/* Phase */.a0.Error,
          failureReason: rendezvous/* ClientRendezvousFailureReason */.fF.HomeserverLacksSupport
        });
        return;
      }
      try {
        if (this.props.intent === rendezvous/* RendezvousIntent */.E$.RECIPROCATE_LOGIN_ON_EXISTING_DEVICE) {
          // MSC4108-Flow: NewScanned
          await flow.negotiateProtocols();
          const {
            verificationUri
          } = await flow.deviceAuthorizationGrant();
          this.setState({
            phase: LoginWithQR_types/* Phase */.a0.OutOfBandConfirmation,
            verificationUri
          });
        } else {
          // The v2024 flow gives us a server name to resolve, the v2025 flow gives us the base URL directly
          const {
            serverName,
            baseUrl
          } = await flow.negotiateProtocols();
          const serverNameOrBaseUrl = baseUrl !== null && baseUrl !== void 0 ? baseUrl : serverName;
          if (!serverNameOrBaseUrl) {
            this.setState({
              phase: LoginWithQR_types/* Phase */.a0.Error,
              failureReason: rendezvous/* ClientRendezvousFailureReason */.fF.Unknown
            });
            logger/* logger */.vF.error("Failed to discover homeserver URL");
            throw new Error("Failed to discover homeserver URL");
          }
          const {
            homeserverUrl,
            identityServerUrl
          } = await resolveServerURLs(serverNameOrBaseUrl);
          if (!homeserverUrl) {
            this.setState({
              phase: LoginWithQR_types/* Phase */.a0.Error,
              failureReason: rendezvous/* ClientRendezvousFailureReason */.fF.Unknown
            });
            logger/* logger */.vF.error("Failed to discover homeserver URL");
            throw new Error("Failed to discover homeserver URL");
          }
          let metadata;
          let clientId;
          try {
            // Create a new client as the homeserver URL may not be the same as we used for the secure channel
            metadata = await new matrix/* MatrixClient */.pBM({
              baseUrl: homeserverUrl
            }).getAuthMetadata();
            if (!metadata.grant_types_supported.includes(matrix/* OAuthGrantType */.gu8.DeviceAuthorization)) {
              throw new Error("Server does not support Device Authorization Grant");
            }
            clientId = await (0,registerClient/* getOAuthClientId */.A)(metadata, SdkConfig/* default */.A.get().oidc_static_clients);
          } catch (e) {
            this.setState({
              phase: LoginWithQR_types/* Phase */.a0.Error,
              failureReason: rendezvous/* ClientRendezvousFailureReason */.fF.HomeserverLacksSupport
            });
            logger/* logger */.vF.error("Failed to register OIDC Client ID", e);
            throw new Error("Failed to register OIDC Client ID", {
              cause: e
            });
          }
          this.setState({
            phase: LoginWithQR_types/* Phase */.a0.OutOfBandConfirmation,
            loginServerDetails: {
              homeserverUrl,
              identityServerUrl,
              metadata,
              clientId
            }
          });
        }

        // we ask the user to confirm that the channel is secure
      } catch (e) {
        if (abortController.signal.aborted) return;
        logger/* logger */.vF.error("Error whilst approving login", e);
        await flow.cancel(e instanceof rendezvous/* RendezvousError */.Qd ? e.code : rendezvous/* ClientRendezvousFailureReason */.fF.Unknown);
      }
    });
    (0,defineProperty/* default */.A)(this, "approveLogin", async checkCode => {
      var _this$state$flow;
      if (!this.state.flow) {
        this.setState({
          phase: LoginWithQR_types/* Phase */.a0.Error,
          failureReason: rendezvous/* ClientRendezvousFailureReason */.fF.Unknown
        });
        throw new Error("Rendezvous not found");
      }
      if (((_this$state$flow = this.state.flow) === null || _this$state$flow === void 0 ? void 0 : _this$state$flow.checkCode) !== checkCode) {
        this.setState({
          failureReason: LoginWithQRFailureReason.CheckCodeMismatch
        });
        return;
      }
      try {
        if (this.props.intent === rendezvous/* RendezvousIntent */.E$.RECIPROCATE_LOGIN_ON_EXISTING_DEVICE) {
          // MSC4108-Flow: NewScanned
          this.setState({
            phase: LoginWithQR_types/* Phase */.a0.Loading
          });
          if (this.state.verificationUri) {
            window.open(this.state.verificationUri, "_blank");
          }
          this.setState({
            phase: LoginWithQR_types/* Phase */.a0.WaitingForDevice
          });

          // send secrets
          await this.state.flow.shareSecrets();

          // done
          this.onFinished(true);
        } else {
          if (!this.state.loginServerDetails) {
            this.setState({
              phase: LoginWithQR_types/* Phase */.a0.Error,
              failureReason: rendezvous/* ClientRendezvousFailureReason */.fF.Unknown
            });
            throw new Error("Server details not found in state");
          }
          const {
            homeserverUrl,
            identityServerUrl,
            clientId,
            metadata
          } = this.state.loginServerDetails;

          // Generate our new device ID
          const deviceId = (0,randomstring/* secureRandomString */.US)(10);
          const {
            userCode
          } = await this.state.flow.deviceAuthorizationGrant({
            metadata,
            clientId,
            deviceId
          });
          this.setState({
            phase: LoginWithQR_types/* Phase */.a0.WaitingForDevice,
            userCode
          });
          const tokenResponse = await this.state.flow.completeLoginOnNewDevice({
            clientId
          });
          if (tokenResponse) {
            const {
              secrets
            } = await this.state.flow.shareSecrets();
            await this.props.onLoggedIn({
              accessToken: tokenResponse.access_token,
              refreshToken: tokenResponse.refresh_token,
              homeserverUrl,
              clientId,
              identityServerUrl,
              secrets,
              deviceId
            });
            this.onFinished(true);
          }
        }
      } catch (e) {
        logger/* logger */.vF.error("Error whilst approving sign in", e);
        this.setState({
          phase: LoginWithQR_types/* Phase */.a0.Error,
          failureReason: e instanceof rendezvous/* RendezvousError */.Qd ? e.code : rendezvous/* ClientRendezvousFailureReason */.fF.Unknown
        });
      }
    });
    (0,defineProperty/* default */.A)(this, "onFailure", async reason => {
      if (this.state.phase === LoginWithQR_types/* Phase */.a0.Error) return; // Already in failed state
      logger/* logger */.vF.warn(`Rendezvous failed: ${reason}`);

      // Generate a new rendezvous channel & qr code if we hit expiry whilst still showing the QR code
      if (reason === rendezvous/* ClientRendezvousFailureReason */.fF.Expired && this.state.phase === LoginWithQR_types/* Phase */.a0.ShowingQR) {
        try {
          this.reset();
          // Add a sleep to make the UX looks less flickery and more intentional
          await (0,utils/* sleep */.yy)(1000);
          await this.updateMode(LoginWithQR_types/* Mode */.Kt.Show, false);
          return;
        } catch (e) {
          logger/* logger */.vF.warn("Failed to re-roll qr code on expiry", e);
        }
      }
      this.setState({
        phase: LoginWithQR_types/* Phase */.a0.Error,
        failureReason: reason
      });
    });
    (0,defineProperty/* default */.A)(this, "onClick", async (type, checkCode) => {
      var _this$state$flow2;
      switch (type) {
        case LoginWithQR_types/* Click */.HY.Cancel:
          await ((_this$state$flow2 = this.state.flow) === null || _this$state$flow2 === void 0 ? void 0 : _this$state$flow2.cancel(rendezvous/* MSC4108FailureReason */.n$.UserCancelled));
          this.onFinished(false);
          break;
        case LoginWithQR_types/* Click */.HY.Approve:
          await this.approveLogin(checkCode);
          break;
        case LoginWithQR_types/* Click */.HY.Decline:
          if (this.props.intent === rendezvous/* RendezvousIntent */.E$.LOGIN_ON_NEW_DEVICE) {
            var _this$state$flow3;
            await ((_this$state$flow3 = this.state.flow) === null || _this$state$flow3 === void 0 ? void 0 : _this$state$flow3.cancel(rendezvous/* MSC4108FailureReason */.n$.UserCancelled));
          } else {
            var _this$state$flow4;
            await ((_this$state$flow4 = this.state.flow) === null || _this$state$flow4 === void 0 ? void 0 : _this$state$flow4.declineLoginOnExistingDevice());
          }
          this.onFinished(false);
          break;
        case LoginWithQR_types/* Click */.HY.ShowQr:
          await this.updateMode(LoginWithQR_types/* Mode */.Kt.Show);
          break;
      }
    });
    this.state = {
      phase: LoginWithQR_types/* Phase */.a0.Loading
    };
    (_this$props$onPhaseCh = (_this$props = this.props).onPhaseChange) === null || _this$props$onPhaseCh === void 0 || _this$props$onPhaseCh.call(_this$props, this.state.phase);
  }
  componentDidMount() {
    void this.updateMode(this.props.mode);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.phase !== this.state.phase) {
      var _this$props$onPhaseCh2, _this$props2;
      (_this$props$onPhaseCh2 = (_this$props2 = this.props).onPhaseChange) === null || _this$props$onPhaseCh2 === void 0 || _this$props$onPhaseCh2.call(_this$props2, this.state.phase);
    }
    if (prevProps.mode !== this.props.mode) {
      void this.updateMode(this.props.mode);
    }
  }
  async updateMode(mode, showLoading = true) {
    var _this$abortController;
    (_this$abortController = this.abortController) === null || _this$abortController === void 0 || _this$abortController.abort();
    this.abortController = new AbortController();
    this.setState({
      flow: undefined
    });
    if (showLoading) {
      this.setState({
        phase: LoginWithQR_types/* Phase */.a0.Loading
      });
    }
    if (mode === LoginWithQR_types/* Mode */.Kt.Show) {
      await this.generateAndShowCode(this.abortController);
    }
  }
  componentWillUnmount() {
    if (!this.finished) {
      var _this$abortController2;
      (_this$abortController2 = this.abortController) === null || _this$abortController2 === void 0 || _this$abortController2.abort();
    }
  }
  onFinished(success) {
    this.finished = true;
    if (!success) {
      var _this$abortController3;
      (_this$abortController3 = this.abortController) === null || _this$abortController3 === void 0 || _this$abortController3.abort();
    }
    this.props.onFinished(success);
  }
  reset() {
    var _this$abortController4;
    (_this$abortController4 = this.abortController) === null || _this$abortController4 === void 0 || _this$abortController4.abort();
    this.setState({
      flow: undefined,
      verificationUri: undefined,
      failureReason: undefined,
      userCode: undefined
    });
  }
  render() {
    var _this$state$flow5;
    return /*#__PURE__*/react.createElement(LoginWithQRFlow, {
      onClick: this.onClick,
      phase: this.state.phase,
      code: this.state.phase === LoginWithQR_types/* Phase */.a0.ShowingQR ? (_this$state$flow5 = this.state.flow) === null || _this$state$flow5 === void 0 ? void 0 : _this$state$flow5.code : undefined,
      failureReason: this.state.failureReason,
      userCode: this.state.userCode,
      intent: this.props.intent
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=9271.js.map