"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[4743],{

/***/ "./src/components/views/location/LocationButton.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ location_LocationButton)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.3.0/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@19.3.0/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.3.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@19.3.0/node_modules/react/jsx-runtime.js");
;// ../../node_modules/.pnpm/@vector-im+compound-design-tokens@11.2.0_@types+react@19.3.0_react@19.3.0/node_modules/@vector-im/compound-design-tokens/assets/web/icons/location-pin.js


function LocationPinIcon(props, ref) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: ref,
    ...props,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M12 19.35q3.05-2.8 4.525-5.088Q18 11.976 18 10.2q0-2.725-1.738-4.462Q14.526 4 12 4T7.738 5.737Q6 7.476 6 10.2q0 1.775 1.475 4.063Q8.95 16.549 12 19.35m0 1.975a2.1 2.1 0 0 1-.7-.125 1.8 1.8 0 0 1-.625-.375A39 39 0 0 1 7.8 17.9q-1.25-1.425-2.087-2.762-.838-1.338-1.275-2.575Q4 11.325 4 10.2q0-3.75 2.412-5.975T12 2t5.587 2.225T20 10.2q0 1.125-.437 2.363-.438 1.237-1.275 2.574A22 22 0 0 1 16.2 17.9a39 39 0 0 1-2.875 2.925 1.8 1.8 0 0 1-.625.375 2.1 2.1 0 0 1-.7.125M12 12q.825 0 1.412-.588Q14 10.826 14 10t-.588-1.412A1.93 1.93 0 0 0 12 8q-.825 0-1.412.588A1.93 1.93 0 0 0 10 10q0 .825.588 1.412Q11.175 12 12 12"
    })
  });
}
;
LocationPinIcon.displayName = "LocationPinIcon";
/* harmony default export */ const location_pin = ((0,react.forwardRef)(LocationPinIcon));
// EXTERNAL MODULE: ./src/languageHandler.ts
var languageHandler = __webpack_require__("./src/languageHandler.ts");
// EXTERNAL MODULE: ./src/components/views/rooms/CollapsibleButton.tsx
var CollapsibleButton = __webpack_require__("./src/components/views/rooms/CollapsibleButton.tsx");
// EXTERNAL MODULE: ./src/components/structures/ContextMenu.tsx + 2 modules
var ContextMenu = __webpack_require__("./src/components/structures/ContextMenu.tsx");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.29.10/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.29.10/node_modules/@babel/runtime/helpers/esm/extends.js");
// EXTERNAL MODULE: ./src/contexts/MatrixClientContext.tsx
var MatrixClientContext = __webpack_require__("./src/contexts/MatrixClientContext.tsx");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.29.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.29.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/maplibre-gl@6.10.0/node_modules/maplibre-gl/dist/maplibre-gl.mjs
var maplibre_gl = __webpack_require__("../../node_modules/.pnpm/maplibre-gl@6.10.0/node_modules/maplibre-gl/dist/maplibre-gl.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/maplibre-gl@6.10.0/node_modules/maplibre-gl/dist/maplibre-gl-shared.mjs
var maplibre_gl_shared = __webpack_require__("../../node_modules/.pnpm/maplibre-gl@6.10.0/node_modules/maplibre-gl/dist/maplibre-gl-shared.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts
var logger = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrix.ts + 9 modules
var matrix = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrix.ts");
// EXTERNAL MODULE: ./src/Modal.tsx + 1 modules
var Modal = __webpack_require__("./src/Modal.tsx");
// EXTERNAL MODULE: ./src/utils/WellKnownUtils.ts
var WellKnownUtils = __webpack_require__("./src/utils/WellKnownUtils.ts");
// EXTERNAL MODULE: ./src/utils/beacon/index.ts + 4 modules
var beacon = __webpack_require__("./src/utils/beacon/index.ts");
// EXTERNAL MODULE: ./src/utils/location/index.ts + 5 modules
var utils_location = __webpack_require__("./src/utils/location/index.ts");
// EXTERNAL MODULE: ./src/components/views/dialogs/ErrorDialog.tsx
var ErrorDialog = __webpack_require__("./src/components/views/dialogs/ErrorDialog.tsx");
// EXTERNAL MODULE: ./src/components/views/elements/AccessibleButton.tsx
var AccessibleButton = __webpack_require__("./src/components/views/elements/AccessibleButton.tsx");
// EXTERNAL MODULE: ./src/components/views/location/MapError.tsx
var MapError = __webpack_require__("./src/components/views/location/MapError.tsx");
// EXTERNAL MODULE: ./src/DateUtils.ts
var DateUtils = __webpack_require__("./src/DateUtils.ts");
// EXTERNAL MODULE: ./src/components/views/elements/Dropdown.tsx
var Dropdown = __webpack_require__("./src/components/views/elements/Dropdown.tsx");
;// ./src/components/views/location/LiveDurationDropdown.tsx
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/





const DURATION_MS = {
  fifteenMins: 900000,
  oneHour: 3600000,
  eightHours: 28800000
};
const DEFAULT_DURATION_MS = DURATION_MS.fifteenMins;
const getLabel = durationMs => {
  return (0,languageHandler._t)("location_sharing|live_share_button", {
    duration: (0,DateUtils/* formatDuration */.a3)(durationMs)
  });
};
const LiveDurationDropdown = ({
  timeout,
  onChange
}) => {
  const options = Object.values(DURATION_MS).map(duration => ({
    key: duration.toString(),
    duration,
    label: getLabel(duration)
  }));

  // timeout is not one of our default values
  // eg it was set by another client
  if (!Object.values(DURATION_MS).includes(timeout)) {
    options.push({
      key: timeout.toString(),
      duration: timeout,
      label: getLabel(timeout)
    });
  }
  const onOptionChange = key => {
    // stringified value back to number
    onChange(+key);
  };
  return /*#__PURE__*/react.createElement(Dropdown/* default */.A, {
    id: "live-duration",
    "data-testid": "live-duration-dropdown",
    label: getLabel(timeout),
    value: timeout.toString(),
    onOptionChange: onOptionChange,
    className: "mx_LiveDurationDropdown"
  }, options.map(({
    key,
    label
  }) => /*#__PURE__*/react.createElement("div", {
    "data-testid": `live-duration-option-${key}`,
    key: key
  }, label)));
};
/* harmony default export */ const location_LiveDurationDropdown = (LiveDurationDropdown);
// EXTERNAL MODULE: ./src/components/views/dialogs/QuestionDialog.tsx
var QuestionDialog = __webpack_require__("./src/components/views/dialogs/QuestionDialog.tsx");
// EXTERNAL MODULE: ./src/SdkConfig.ts
var SdkConfig = __webpack_require__("./src/SdkConfig.ts");
// EXTERNAL MODULE: ./src/stores/OwnBeaconStore.ts
var OwnBeaconStore = __webpack_require__("./src/stores/OwnBeaconStore.ts");
// EXTERNAL MODULE: ./src/utils/local-room.ts + 1 modules
var local_room = __webpack_require__("./src/utils/local-room.ts");
;// ./src/components/views/location/shareLocation.ts
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/









let LocationShareType = /*#__PURE__*/function (LocationShareType) {
  LocationShareType["Own"] = "Own";
  LocationShareType["Pin"] = "Pin";
  LocationShareType["Live"] = "Live";
  return LocationShareType;
}({});
// default duration to 5min for now
const DEFAULT_LIVE_DURATION = 300000;
const getPermissionsErrorParams = shareType => {
  const errorMessage = shareType === LocationShareType.Live ? "Insufficient permissions to start sharing your live location" : "Insufficient permissions to send your location";
  const modalParams = {
    title: (0,languageHandler._t)("location_sharing|error_no_perms_title"),
    description: (0,languageHandler._t)("location_sharing|error_no_perms_description"),
    button: (0,languageHandler._t)("action|ok"),
    hasCancelButton: false,
    onFinished: () => {} // NOOP
  };
  return {
    modalParams,
    errorMessage
  };
};
const getDefaultErrorParams = (shareType, openMenu) => {
  const errorMessage = shareType === LocationShareType.Live ? "We couldn't start sharing your live location" : "We couldn't send your location";
  const modalParams = {
    title: (0,languageHandler._t)("location_sharing|error_send_title"),
    description: (0,languageHandler._t)("location_sharing|error_send_description", {
      brand: SdkConfig/* default */.A.get().brand
    }),
    button: (0,languageHandler._t)("action|try_again"),
    cancelButton: (0,languageHandler._t)("action|cancel"),
    onFinished: tryAgain => {
      if (tryAgain) {
        openMenu();
      }
    }
  };
  return {
    modalParams,
    errorMessage
  };
};
const handleShareError = (error, openMenu, shareType) => {
  const {
    modalParams,
    errorMessage
  } = error.errcode === "M_FORBIDDEN" ? getPermissionsErrorParams(shareType) : getDefaultErrorParams(shareType, openMenu);
  logger/* logger */.vF.error(errorMessage, error);
  Modal/* default */.Ay.createDialog(QuestionDialog/* default */.A, modalParams);
};
const shareLiveLocation = (client, roomId, displayName, openMenu) => async ({
  timeout
}) => {
  const description = (0,languageHandler._t)("location_sharing|live_description", {
    displayName
  });
  try {
    await OwnBeaconStore/* OwnBeaconStore */.g.instance.createLiveBeacon(roomId, matrix/* ContentHelpers.makeBeaconInfoContent */.Xcy.makeBeaconInfoContent(timeout !== null && timeout !== void 0 ? timeout : DEFAULT_LIVE_DURATION, true /* isLive */, description, matrix/* LocationAssetType */.Ygn.Self));
  } catch (error) {
    handleShareError(error, openMenu, LocationShareType.Live);
  }
};
const shareLocation = (client, roomId, shareType, relation, openMenu) => async ({
  uri,
  timestamp
}) => {
  if (!uri) return;
  try {
    const threadId = (relation === null || relation === void 0 ? void 0 : relation.rel_type) === matrix/* THREAD_RELATION_TYPE */.RNJ.name && (relation === null || relation === void 0 ? void 0 : relation.event_id) || null;
    const assetType = shareType === LocationShareType.Pin ? matrix/* LocationAssetType */.Ygn.Pin : matrix/* LocationAssetType */.Ygn.Self;
    const content = matrix/* ContentHelpers.makeLocationContent */.Xcy.makeLocationContent(undefined, uri, timestamp, undefined, assetType);
    await (0,local_room/* doMaybeLocalRoomAction */.Y)(roomId, actualRoomId => client.sendMessage(actualRoomId, threadId, content), client);
  } catch (error) {
    handleShareError(error, openMenu, shareType);
  }
};
// EXTERNAL MODULE: ./src/components/views/location/Marker.tsx
var Marker = __webpack_require__("./src/components/views/location/Marker.tsx");
;// ./src/components/views/location/LocationPicker.tsx

/*
Copyright 2024 New Vector Ltd.
Copyright 2021 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

















const isSharingOwnLocation = shareType => shareType === LocationShareType.Own || shareType === LocationShareType.Live;
class LocationPicker extends react.Component {
  constructor(props) {
    super(props);
    (0,defineProperty/* default */.A)(this, "map", void 0);
    (0,defineProperty/* default */.A)(this, "geolocate", void 0);
    (0,defineProperty/* default */.A)(this, "marker", void 0);
    (0,defineProperty/* default */.A)(this, "getMarkerId", () => {
      return "mx_MLocationPicker_marker";
    });
    (0,defineProperty/* default */.A)(this, "addMarkerToMap", () => {
      var _document$getElementB;
      this.marker = new maplibre_gl/* Marker */.pH({
        element: (_document$getElementB = document.getElementById(this.getMarkerId())) !== null && _document$getElementB !== void 0 ? _document$getElementB : undefined,
        anchor: "bottom",
        offset: [0, -1]
      }).setLngLat(new maplibre_gl_shared.lt(0, 0)).addTo(this.map);
    });
    (0,defineProperty/* default */.A)(this, "updateStyleUrl", clientWellKnown => {
      var _tileServerFromWellKn;
      const style = (_tileServerFromWellKn = (0,WellKnownUtils/* tileServerFromWellKnown */.XP)(clientWellKnown)) === null || _tileServerFromWellKn === void 0 ? void 0 : _tileServerFromWellKn["map_style_url"];
      if (style) {
        var _this$map;
        (_this$map = this.map) === null || _this$map === void 0 || _this$map.setStyle(style);
      }
    });
    (0,defineProperty/* default */.A)(this, "onGeolocate", position => {
      var _this$marker;
      if (!this.marker) {
        this.addMarkerToMap();
      }
      this.setState({
        position: (0,beacon/* genericPositionFromGeolocation */.v9)(position)
      });
      (_this$marker = this.marker) === null || _this$marker === void 0 || _this$marker.setLngLat(new maplibre_gl_shared.lt(position.coords.longitude, position.coords.latitude));
    });
    (0,defineProperty/* default */.A)(this, "onClick", event => {
      var _this$marker2;
      if (!this.marker) {
        this.addMarkerToMap();
      }
      (_this$marker2 = this.marker) === null || _this$marker2 === void 0 || _this$marker2.setLngLat(event.lngLat);
      this.setState({
        position: {
          timestamp: Date.now(),
          latitude: event.lngLat.lat,
          longitude: event.lngLat.lng
        }
      });
    });
    (0,defineProperty/* default */.A)(this, "onGeolocateError", e => {
      logger/* logger */.vF.error("Could not fetch location", e);
      // close the dialog and show an error when trying to share own location
      // pin drop location without permissions is ok
      if (isSharingOwnLocation(this.props.shareType)) {
        this.props.onFinished();
        Modal/* default */.Ay.createDialog(ErrorDialog/* default */.A, {
          title: (0,languageHandler._t)("location_sharing|error_fetch_location"),
          description: (0,utils_location/* positionFailureMessage */.Ff)(e.code)
        });
      }
      if (this.geolocate) {
        var _this$map2;
        (_this$map2 = this.map) === null || _this$map2 === void 0 || _this$map2.removeControl(this.geolocate);
      }
    });
    (0,defineProperty/* default */.A)(this, "onTimeoutChange", timeout => {
      this.setState({
        timeout
      });
    });
    (0,defineProperty/* default */.A)(this, "onOk", () => {
      const {
        timeout,
        position
      } = this.state;
      void this.props.onChoose(position ? {
        uri: (0,beacon/* getGeoUri */.mt)(position),
        timestamp: position.timestamp,
        timeout
      } : {
        timeout
      });
      this.props.onFinished();
    });
    this.state = {
      position: undefined,
      timeout: DEFAULT_DURATION_MS,
      error: undefined
    };
  }
  componentDidMount() {
    this.context.on(matrix/* ClientEvent */.AUM.ClientWellKnown, this.updateStyleUrl);
    try {
      this.map = new maplibre_gl/* Map */.T5({
        container: "mx_LocationPicker_map",
        style: (0,utils_location/* findMapStyleUrl */.M0)(this.context),
        center: [0, 0],
        zoom: 1
      });

      // Add geolocate control to the map.
      this.geolocate = new maplibre_gl/* GeolocateControl */.tG({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: false
      });
      this.map.addControl(this.geolocate);

      // The map is destroyed with remove() on unmount, which also removes these listeners
      // oxlint-disable-next-line element-web/no-leaked-emitter-listener
      this.map.on("error", e => {
        logger/* logger */.vF.error("Failed to load map: check map_style_url in config.json has a valid URL and API key", e.error);
        this.setState({
          error: utils_location/* LocationShareError */.$X.MapStyleUrlNotReachable
        });
      });

      // oxlint-disable-next-line element-web/no-leaked-emitter-listener
      this.map.on("load", () => {
        var _this$geolocate;
        (_this$geolocate = this.geolocate) === null || _this$geolocate === void 0 || _this$geolocate.trigger();
      });
      this.geolocate.on("error", this.onGeolocateError);
      if (isSharingOwnLocation(this.props.shareType)) {
        this.geolocate.on("geolocate", this.onGeolocate);
      }
      if (this.props.shareType === LocationShareType.Pin) {
        const navigationControl = new maplibre_gl/* NavigationControl */.ov({
          showCompass: false,
          showZoom: true
        });
        this.map.addControl(navigationControl, "bottom-right");
        this.map.on("click", this.onClick);
      }
    } catch (e) {
      logger/* logger */.vF.error("Failed to render map", e);
      const errorMessage = e === null || e === void 0 ? void 0 : e.message;
      let errorType;
      if (errorMessage === utils_location/* LocationShareError */.$X.MapStyleUrlNotConfigured) errorType = utils_location/* LocationShareError */.$X.MapStyleUrlNotConfigured;else if (errorMessage.includes("Failed to initialize WebGL")) errorType = utils_location/* LocationShareError */.$X.WebGLNotEnabled;else errorType = utils_location/* LocationShareError */.$X.Default;
      this.setState({
        error: errorType
      });
    }
  }
  componentWillUnmount() {
    var _this$geolocate2, _this$geolocate3, _this$map3, _this$map4;
    (_this$geolocate2 = this.geolocate) === null || _this$geolocate2 === void 0 || _this$geolocate2.off("error", this.onGeolocateError);
    (_this$geolocate3 = this.geolocate) === null || _this$geolocate3 === void 0 || _this$geolocate3.off("geolocate", this.onGeolocate);
    (_this$map3 = this.map) === null || _this$map3 === void 0 || _this$map3.off("click", this.onClick);
    this.context.off(matrix/* ClientEvent */.AUM.ClientWellKnown, this.updateStyleUrl);
    // Destroy the map instance so its internal listeners (including the "error"/"load"
    // handlers registered in componentDidMount) don't fire after this component has unmounted.
    (_this$map4 = this.map) === null || _this$map4 === void 0 || _this$map4.remove();
  }
  render() {
    if (this.state.error) {
      return /*#__PURE__*/react.createElement("div", {
        className: "mx_LocationPicker mx_LocationPicker_hasError"
      }, /*#__PURE__*/react.createElement(MapError/* MapError */.p, {
        error: this.state.error,
        onFinished: this.props.onFinished
      }));
    }
    return /*#__PURE__*/react.createElement("div", {
      className: "mx_LocationPicker"
    }, /*#__PURE__*/react.createElement("div", {
      id: "mx_LocationPicker_map"
    }), this.props.shareType === LocationShareType.Pin && /*#__PURE__*/react.createElement("div", {
      className: "mx_LocationPicker_pinText"
    }, /*#__PURE__*/react.createElement("span", null, this.state.position ? (0,languageHandler._t)("location_sharing|click_move_pin") : (0,languageHandler._t)("location_sharing|click_drop_pin"))), /*#__PURE__*/react.createElement("div", {
      className: "mx_LocationPicker_footer"
    }, /*#__PURE__*/react.createElement("form", {
      onSubmit: this.onOk
    }, this.props.shareType === LocationShareType.Live && /*#__PURE__*/react.createElement(location_LiveDurationDropdown, {
      onChange: this.onTimeoutChange,
      timeout: this.state.timeout
    }), /*#__PURE__*/react.createElement(AccessibleButton/* default */.A, {
      "data-testid": "location-picker-submit-button",
      type: "submit",
      element: "button",
      kind: "primary",
      className: "mx_LocationPicker_submitButton",
      disabled: !this.state.position,
      onClick: this.onOk
    }, (0,languageHandler._t)("location_sharing|share_button")))), /*#__PURE__*/react.createElement("div", {
      id: this.getMarkerId()
    }, !!this.marker && /*#__PURE__*/react.createElement(Marker/* default */.A, {
      roomMember: isSharingOwnLocation(this.props.shareType) ? this.props.sender : undefined,
      useMemberColor: this.props.shareType === LocationShareType.Live
    })));
  }
}
;(0,defineProperty/* default */.A)(LocationPicker, "contextType", MatrixClientContext/* default */.Ay);
/* harmony default export */ const location_LocationPicker = (LocationPicker);
// EXTERNAL MODULE: ./src/settings/SettingsStore.ts + 10 modules
var SettingsStore = __webpack_require__("./src/settings/SettingsStore.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vector-im+compound-design-tokens@11.2.0_@types+react@19.3.0_react@19.3.0/node_modules/@vector-im/compound-design-tokens/assets/web/icons/close.js
var icons_close = __webpack_require__("../../node_modules/.pnpm/@vector-im+compound-design-tokens@11.2.0_@types+react@19.3.0_react@19.3.0/node_modules/@vector-im/compound-design-tokens/assets/web/icons/close.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vector-im+compound-design-tokens@11.2.0_@types+react@19.3.0_react@19.3.0/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-left.js
var chevron_left = __webpack_require__("../../node_modules/.pnpm/@vector-im+compound-design-tokens@11.2.0_@types+react@19.3.0_react@19.3.0/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-left.js");
;// ./src/components/views/location/ShareDialogButtons.tsx
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/






const ShareDialogButtons = ({
  onBack,
  onCancel,
  displayBack
}) => {
  return /*#__PURE__*/react.createElement("div", {
    className: "mx_ShareDialogButtons"
  }, displayBack && /*#__PURE__*/react.createElement(AccessibleButton/* default */.A, {
    className: "mx_ShareDialogButtons_button left",
    "data-testid": "share-dialog-buttons-back",
    "aria-label": (0,languageHandler._t)("action|back"),
    onClick: onBack,
    element: "button"
  }, /*#__PURE__*/react.createElement(chevron_left/* default */.A, {
    className: "mx_ShareDialogButtons_button-icon"
  })), /*#__PURE__*/react.createElement(AccessibleButton/* default */.A, {
    className: "mx_ShareDialogButtons_button right",
    "data-testid": "share-dialog-buttons-cancel",
    "aria-label": (0,languageHandler._t)("action|close"),
    onClick: onCancel,
    element: "button"
  }, /*#__PURE__*/react.createElement(icons_close/* default */.A, {
    className: "mx_ShareDialogButtons_button-icon"
  })));
};
/* harmony default export */ const location_ShareDialogButtons = (ShareDialogButtons);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.29.10/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.29.10/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vector-im+compound-design-tokens@11.2.0_@types+react@19.3.0_react@19.3.0/node_modules/@vector-im/compound-design-tokens/assets/web/icons/location-pin-solid.js
var location_pin_solid = __webpack_require__("../../node_modules/.pnpm/@vector-im+compound-design-tokens@11.2.0_@types+react@19.3.0_react@19.3.0/node_modules/@vector-im/compound-design-tokens/assets/web/icons/location-pin-solid.js");
// EXTERNAL MODULE: ./src/stores/OwnProfileStore.ts
var OwnProfileStore = __webpack_require__("./src/stores/OwnProfileStore.ts");
// EXTERNAL MODULE: ./src/components/views/avatars/BaseAvatar.tsx
var BaseAvatar = __webpack_require__("./src/components/views/avatars/BaseAvatar.tsx");
// EXTERNAL MODULE: ./src/components/views/typography/Heading.ts
var Heading = __webpack_require__("./src/components/views/typography/Heading.ts");
// EXTERNAL MODULE: ./src/components/views/beacon/StyledLiveBeaconIcon.tsx
var StyledLiveBeaconIcon = __webpack_require__("./src/components/views/beacon/StyledLiveBeaconIcon.tsx");
;// ./src/components/views/location/ShareType.tsx


const _excluded = ["onClick", "label", "shareType"];
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/











const UserAvatar = () => {
  var _OwnProfileStore$inst, _OwnProfileStore$inst2;
  const matrixClient = (0,react.useContext)(MatrixClientContext/* default */.Ay);
  const userId = matrixClient.getSafeUserId();
  const displayName = (_OwnProfileStore$inst = OwnProfileStore/* OwnProfileStore */.V.instance.displayName) !== null && _OwnProfileStore$inst !== void 0 ? _OwnProfileStore$inst : undefined;
  // 40 - 2px border
  const avatarSize = "36px";
  const avatarUrl = (_OwnProfileStore$inst2 = OwnProfileStore/* OwnProfileStore */.V.instance.getHttpAvatarUrl(parseInt(avatarSize, 10))) !== null && _OwnProfileStore$inst2 !== void 0 ? _OwnProfileStore$inst2 : undefined;
  return /*#__PURE__*/react.createElement("div", {
    className: `mx_ShareType_option-icon ${LocationShareType.Own}`
  }, /*#__PURE__*/react.createElement(BaseAvatar/* default */.A, {
    idName: userId,
    name: displayName,
    url: avatarUrl,
    size: avatarSize
  }));
};
const ShareTypeOption = _ref => {
  let {
      onClick,
      label,
      shareType
    } = _ref,
    rest = (0,objectWithoutProperties/* default */.A)(_ref, _excluded);
  return /*#__PURE__*/react.createElement(AccessibleButton/* default */.A, (0,esm_extends/* default */.A)({
    element: "button",
    className: "mx_ShareType_option",
    onClick: onClick !== null && onClick !== void 0 ? onClick : null
  }, rest), shareType === LocationShareType.Own && /*#__PURE__*/react.createElement(UserAvatar, null), shareType === LocationShareType.Pin && /*#__PURE__*/react.createElement(location_pin_solid/* default */.A, {
    className: `mx_ShareType_option-icon ${LocationShareType.Pin}`
  }), shareType === LocationShareType.Live && /*#__PURE__*/react.createElement(StyledLiveBeaconIcon/* default */.A, {
    className: `mx_ShareType_option-icon ${LocationShareType.Live}`
  }), label);
};
const ShareType = ({
  setShareType,
  enabledShareTypes
}) => {
  const labels = {
    [LocationShareType.Own]: (0,languageHandler._t)("location_sharing|share_type_own"),
    [LocationShareType.Live]: (0,languageHandler._t)("location_sharing|share_type_live"),
    [LocationShareType.Pin]: (0,languageHandler._t)("location_sharing|share_type_pin")
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "mx_ShareType"
  }, /*#__PURE__*/react.createElement(location_pin_solid/* default */.A, {
    className: "mx_ShareType_badge"
  }), /*#__PURE__*/react.createElement(Heading/* default */.A, {
    className: "mx_ShareType_heading",
    size: "3"
  }, (0,languageHandler._t)("location_sharing|share_type_prompt")), /*#__PURE__*/react.createElement("div", {
    className: "mx_ShareType_wrapper_options"
  }, enabledShareTypes.map(type => /*#__PURE__*/react.createElement(ShareTypeOption, {
    key: type,
    onClick: () => setShareType(type),
    label: labels[type],
    shareType: type,
    "data-testid": `share-location-option-${type}`
  }))));
};
/* harmony default export */ const location_ShareType = (ShareType);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vector-im+compound-web@10.3.1_@fontsource+inconsolata@5.3.0_@fontsource+inter@5.3.0_@t_e2e4ca95964afd075e3070c5b7edd5f3/node_modules/@vector-im/compound-web/dist/components/Form/index.js + 1 modules
var Form = __webpack_require__("../../node_modules/.pnpm/@vector-im+compound-web@10.3.1_@fontsource+inconsolata@5.3.0_@fontsource+inter@5.3.0_@t_e2e4ca95964afd075e3070c5b7edd5f3/node_modules/@vector-im/compound-web/dist/components/Form/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vector-im+compound-web@10.3.1_@fontsource+inconsolata@5.3.0_@fontsource+inter@5.3.0_@t_e2e4ca95964afd075e3070c5b7edd5f3/node_modules/@vector-im/compound-web/dist/components/Form/Controls/SettingsToggle/SettingsToggle.js
var SettingsToggle = __webpack_require__("../../node_modules/.pnpm/@vector-im+compound-web@10.3.1_@fontsource+inconsolata@5.3.0_@fontsource+inter@5.3.0_@t_e2e4ca95964afd075e3070c5b7edd5f3/node_modules/@vector-im/compound-web/dist/components/Form/Controls/SettingsToggle/SettingsToggle.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vector-im+compound-web@10.3.1_@fontsource+inconsolata@5.3.0_@fontsource+inter@5.3.0_@t_e2e4ca95964afd075e3070c5b7edd5f3/node_modules/@vector-im/compound-web/dist/components/Button/Button.js + 1 modules
var Button = __webpack_require__("../../node_modules/.pnpm/@vector-im+compound-web@10.3.1_@fontsource+inconsolata@5.3.0_@fontsource+inter@5.3.0_@t_e2e4ca95964afd075e3070c5b7edd5f3/node_modules/@vector-im/compound-web/dist/components/Button/Button.js");
;// ./src/components/views/location/EnableLiveShare.tsx
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/






const EnableLiveShare = ({
  onSubmit
}) => {
  const [isEnabled, setEnabled] = (0,react.useState)(false);
  const onEnabledChanged = (0,react.useCallback)(e => setEnabled(e.target.checked), [setEnabled]);
  const onSubmitForm = (0,react.useCallback)(evt => {
    evt.preventDefault();
    evt.stopPropagation();
    if (isEnabled) {
      onSubmit();
    }
  }, [isEnabled, onSubmit]);
  return /*#__PURE__*/react.createElement("div", {
    "data-testid": "location-picker-enable-live-share",
    className: "mx_EnableLiveShare"
  }, /*#__PURE__*/react.createElement(StyledLiveBeaconIcon/* default */.A, {
    className: "mx_EnableLiveShare_icon"
  }), /*#__PURE__*/react.createElement(Heading/* default */.A, {
    className: "mx_EnableLiveShare_heading",
    size: "3"
  }, (0,languageHandler._t)("location_sharing|live_enable_heading")), /*#__PURE__*/react.createElement("p", {
    className: "mx_EnableLiveShare_description"
  }, (0,languageHandler._t)("location_sharing|live_enable_description")), /*#__PURE__*/react.createElement(Form/* Form_exports */.lV.Root, {
    onSubmit: onSubmitForm
  }, /*#__PURE__*/react.createElement(SettingsToggle/* SettingsToggleInput */.I, {
    name: "enable-live-share-toggle",
    checked: isEnabled,
    onChange: onEnabledChanged,
    label: (0,languageHandler._t)("location_sharing|live_toggle_label")
  }), /*#__PURE__*/react.createElement(Button/* Button */.$, {
    className: "mx_EnableLiveShare_button",
    kind: "primary",
    disabled: !isEnabled
  }, (0,languageHandler._t)("action|ok"))));
};
// EXTERNAL MODULE: ./src/hooks/useSettings.ts
var useSettings = __webpack_require__("./src/hooks/useSettings.ts");
// EXTERNAL MODULE: ./src/settings/SettingLevel.ts
var SettingLevel = __webpack_require__("./src/settings/SettingLevel.ts");
;// ./src/components/views/location/LocationShareMenu.tsx

/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/













const getEnabledShareTypes = relation => {
  const enabledShareTypes = [LocationShareType.Own];

  // live locations cannot have a relation
  // hide the option when composer has a relation
  if (!relation) {
    enabledShareTypes.push(LocationShareType.Live);
  }
  enabledShareTypes.push(LocationShareType.Pin);
  return enabledShareTypes;
};
const LocationShareMenu = ({
  menuPosition,
  onFinished,
  sender,
  roomId,
  openMenu,
  relation
}) => {
  const matrixClient = (0,react.useContext)(MatrixClientContext/* default */.Ay);
  const enabledShareTypes = getEnabledShareTypes(relation);
  const isLiveShareEnabled = (0,useSettings/* useFeatureEnabled */.ny)("feature_location_share_live");
  const multipleShareTypesEnabled = enabledShareTypes.length > 1;
  const [shareType, setShareType] = (0,react.useState)(multipleShareTypesEnabled ? undefined : LocationShareType.Own);
  const displayName = OwnProfileStore/* OwnProfileStore */.V.instance.displayName;
  const userId = matrixClient.getSafeUserId();
  const onLocationSubmit = shareType === LocationShareType.Live ? shareLiveLocation(matrixClient, roomId, displayName || userId, openMenu) : shareLocation(matrixClient, roomId, shareType !== null && shareType !== void 0 ? shareType : LocationShareType.Own, relation, openMenu);
  const onLiveShareEnableSubmit = () => {
    void SettingsStore/* default */.A.setValue("feature_location_share_live", null, SettingLevel/* SettingLevel */.p.DEVICE, true);
  };
  const shouldAdvertiseLiveLabsFlag = shareType === LocationShareType.Live && !isLiveShareEnabled;
  return /*#__PURE__*/react.createElement(ContextMenu/* default */.Ay, (0,esm_extends/* default */.A)({}, menuPosition, {
    onFinished: onFinished,
    managed: false
  }), /*#__PURE__*/react.createElement("div", {
    className: "mx_LocationShareMenu"
  }, shouldAdvertiseLiveLabsFlag && /*#__PURE__*/react.createElement(EnableLiveShare, {
    onSubmit: onLiveShareEnableSubmit
  }), !shouldAdvertiseLiveLabsFlag && !!shareType && /*#__PURE__*/react.createElement(location_LocationPicker, {
    sender: sender,
    shareType: shareType,
    onChoose: onLocationSubmit,
    onFinished: onFinished
  }), !shareType && /*#__PURE__*/react.createElement(location_ShareType, {
    setShareType: setShareType,
    enabledShareTypes: enabledShareTypes
  }), /*#__PURE__*/react.createElement(location_ShareDialogButtons, {
    displayBack: !!shareType && multipleShareTypesEnabled,
    onBack: () => setShareType(undefined),
    onCancel: onFinished
  })));
};
/* harmony default export */ const location_LocationShareMenu = (LocationShareMenu);
;// ./src/components/views/location/LocationButton.tsx
/*
Copyright 2024 New Vector Ltd.
Copyright 2021 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/








const LocationButton = ({
  roomId,
  sender,
  menuPosition,
  relation
}) => {
  const overflowMenuCloser = (0,react.useContext)(CollapsibleButton/* OverflowMenuContext */.Z);
  const [menuDisplayed, button, openMenu, closeMenu] = (0,ContextMenu/* useContextMenu */.EF)();
  const _onFinished = ev => {
    closeMenu(ev);
    overflowMenuCloser === null || overflowMenuCloser === void 0 || overflowMenuCloser();
  };
  let contextMenu = null;
  if (menuDisplayed) {
    var _ref;
    const position = (_ref = menuPosition !== null && menuPosition !== void 0 ? menuPosition : button.current && (0,ContextMenu/* aboveLeftOf */.qv)(button.current.getBoundingClientRect())) !== null && _ref !== void 0 ? _ref : {};
    contextMenu = /*#__PURE__*/react.createElement(location_LocationShareMenu, {
      menuPosition: position,
      onFinished: _onFinished,
      sender: sender,
      roomId: roomId,
      openMenu: openMenu,
      relation: relation
    });
  }
  const className = classnames_default()("mx_MessageComposer_button", {
    mx_MessageComposer_button_highlight: menuDisplayed
  });
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(CollapsibleButton/* CollapsibleButton */.J, {
    className: className,
    onClick: openMenu,
    title: (0,languageHandler._t)("common|location"),
    inputRef: button
  }, /*#__PURE__*/react.createElement(location_pin, null)), contextMenu);
};
/* harmony default export */ const location_LocationButton = (LocationButton);

/***/ },

/***/ "./src/components/views/location/Marker.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@19.3.0/node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vector_im_compound_design_tokens_assets_web_icons_location_pin_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@vector-im+compound-design-tokens@11.2.0_@types+react@19.3.0_react@19.3.0/node_modules/@vector-im/compound-design-tokens/assets/web/icons/location-pin-solid.js");
/* harmony import */ var _utils_FormattingUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/utils/FormattingUtils.ts");
/* harmony import */ var _avatars_MemberAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/views/avatars/MemberAvatar.tsx");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/i18n/index.ts");
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/







/**
 * Wrap with tooltip handlers when
 * tooltip is truthy
 */
const OptionalTooltip = ({
  tooltip,
  children
}) => {
  const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  if (!tooltip) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children);
  }
  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);
  const toggleVisibility = e => {
    // stop map from zooming in on click
    e.stopPropagation();
    setIsVisible(!isVisible);
  };
  return (
    /*#__PURE__*/
    // We break the rule here as this is a mouse-only interaction
    // oxlint-disable-next-line jsx-a11y/click-events-have-key-events
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      onMouseEnter: show,
      onClick: toggleVisibility,
      onMouseLeave: hide
    }, children, isVisible && tooltip)
  );
};

/**
 * Generic location marker
 */
const Marker = ({
  id,
  roomMember,
  useMemberColor,
  tooltip,
  ref
}) => {
  const memberColorClass = useMemberColor && roomMember ? (0,_utils_FormattingUtils__WEBPACK_IMPORTED_MODULE_3__/* .getUserNameColorClass */ .yJ)(roomMember.userId) : "";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: ref,
    id: id,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("mx_Marker", memberColorClass, {
      mx_Marker_defaultColor: !memberColorClass
    }),
    "aria-label": (0,_i18n__WEBPACK_IMPORTED_MODULE_5__._t)("location_sharing|map_marker")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(OptionalTooltip, {
    tooltip: tooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mx_Marker_border"
  }, roomMember ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_avatars_MemberAvatar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    member: roomMember,
    size: "36px",
    viewUserOnClick: false
    // no mxid on hover when marker has tooltip
    ,
    hideTitle: !!tooltip
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_vector_im_compound_design_tokens_assets_web_icons_location_pin_solid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    className: "mx_Marker_icon"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Marker);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ "./src/components/views/rooms/CollapsibleButton.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.29.10/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.29.10/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/react@19.3.0/node_modules/react/index.js");
/* harmony import */ var _elements_AccessibleButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/views/elements/AccessibleButton.tsx");
/* harmony import */ var _context_menus_IconizedContextMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/views/context_menus/IconizedContextMenu.tsx");


const _excluded = ["title", "children", "className", "inputRef"];
/*
Copyright 2024 New Vector Ltd.
Copyright 2021 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/




const OverflowMenuContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null);
const CollapsibleButton = _ref => {
  let {
      title,
      children,
      className,
      inputRef
    } = _ref,
    props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_ref, _excluded);
  const inOverflowMenu = !!(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(OverflowMenuContext);
  if (inOverflowMenu) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_context_menus_IconizedContextMenu__WEBPACK_IMPORTED_MODULE_4__/* .IconizedContextMenuOption */ .R$, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({}, props, {
      icon: children,
      label: title,
      inputRef: inputRef
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_elements_AccessibleButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({}, props, {
    title: title,
    className: className,
    ref: inputRef
  }), children);
};
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "J", 0, /* binding */ CollapsibleButton,
/* harmony export */   "Z", 0, /* binding */ OverflowMenuContext
/* harmony export */ ]);


/***/ }

}]);
//# sourceMappingURL=4743.js.map