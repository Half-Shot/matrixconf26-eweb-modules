"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[5195],{

/***/ "./src/components/views/location/Map.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Map)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.3.0/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@19.3.0/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/maplibre-gl@6.10.0/node_modules/maplibre-gl/dist/maplibre-gl.mjs
var maplibre_gl = __webpack_require__("../../node_modules/.pnpm/maplibre-gl@6.10.0/node_modules/maplibre-gl/dist/maplibre-gl.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrix.ts + 9 modules
var matrix = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrix.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts
var logger = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts");
// EXTERNAL MODULE: ./src/contexts/MatrixClientContext.tsx
var MatrixClientContext = __webpack_require__("./src/contexts/MatrixClientContext.tsx");
// EXTERNAL MODULE: ./src/hooks/useEventEmitter.ts
var useEventEmitter = __webpack_require__("./src/hooks/useEventEmitter.ts");
// EXTERNAL MODULE: ./src/utils/location/index.ts + 5 modules
var utils_location = __webpack_require__("./src/utils/location/index.ts");
// EXTERNAL MODULE: ./src/utils/WellKnownUtils.ts
var WellKnownUtils = __webpack_require__("./src/utils/WellKnownUtils.ts");
// EXTERNAL MODULE: ./src/utils/location/map.ts
var location_map = __webpack_require__("./src/utils/location/map.ts");
;// ./src/utils/location/useMap.ts
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/




/**
 * Create a map instance
 * Add listeners for errors
 * Make sure `onError` has a stable reference
 * As map is recreated on changes to it
 */
const useMap = ({
  interactive,
  bodyId,
  onError
}) => {
  const cli = (0,MatrixClientContext/* useMatrixClientContext */.nH)();
  const [map, setMap] = (0,react.useState)();
  (0,react.useEffect)(() => {
    let map;
    try {
      map = (0,location_map/* createMap */.p)(cli, !!interactive, bodyId, onError);
      setMap(map);
    } catch (error) {
      console.error("Error encountered in useMap", error);
      if (error instanceof Error) {
        onError === null || onError === void 0 || onError(error);
      }
    }
    return () => {
      if (map) {
        map.remove();
        setMap(undefined);
      }
    };
  },
  // map is excluded as a dependency
  [cli, interactive, bodyId, onError]);
  return map;
};
// EXTERNAL MODULE: ./src/Modal.tsx + 1 modules
var Modal = __webpack_require__("./src/Modal.tsx");
// EXTERNAL MODULE: ./src/components/views/dialogs/ErrorDialog.tsx
var ErrorDialog = __webpack_require__("./src/components/views/dialogs/ErrorDialog.tsx");
// EXTERNAL MODULE: ./src/languageHandler.ts
var languageHandler = __webpack_require__("./src/languageHandler.ts");
;// ./src/components/views/location/Map.tsx
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/














const useMapWithStyle = ({
  id,
  centerGeoUri,
  onError,
  interactive,
  bounds,
  allowGeolocate
}) => {
  const bodyId = `mx_Map_${id}`;

  // style config
  const context = (0,react.useContext)(MatrixClientContext/* default */.Ay);
  const mapStyleUrl = (0,useEventEmitter/* useEventEmitterState */.dF)(context, matrix/* ClientEvent */.AUM.ClientWellKnown, clientWellKnown => {
    var _tileServerFromWellKn;
    return (_tileServerFromWellKn = (0,WellKnownUtils/* tileServerFromWellKnown */.XP)(clientWellKnown)) === null || _tileServerFromWellKn === void 0 ? void 0 : _tileServerFromWellKn["map_style_url"];
  });
  const map = useMap({
    interactive,
    bodyId,
    onError
  });
  (0,react.useEffect)(() => {
    if (mapStyleUrl && map) {
      map.setStyle(mapStyleUrl);
    }
  }, [mapStyleUrl, map]);
  (0,react.useEffect)(() => {
    if (map && centerGeoUri) {
      try {
        const coords = (0,utils_location/* parseGeoUri */.XB)(centerGeoUri);
        if (!coords) {
          throw new Error("Invalid geo URI");
        }
        map.setCenter({
          lon: coords.longitude,
          lat: coords.latitude
        });
      } catch (e) {
        logger/* logger */.vF.error("Could not set map center", e);
      }
    }
  }, [map, centerGeoUri]);
  (0,react.useEffect)(() => {
    if (map && bounds) {
      try {
        const lngLatBounds = new maplibre_gl/* LngLatBounds */.UH([bounds.west, bounds.south], [bounds.east, bounds.north]);
        map.fitBounds(lngLatBounds, {
          padding: 100,
          maxZoom: 15
        });
      } catch (e) {
        logger/* logger */.vF.error("Invalid map bounds", e);
      }
    }
  }, [map, bounds]);
  const [geolocate, setGeolocate] = (0,react.useState)(null);
  (0,react.useEffect)(() => {
    if (!map) {
      return;
    }
    if (allowGeolocate && !geolocate) {
      const geolocate = new maplibre_gl/* GeolocateControl */.tG({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: false
      });
      setGeolocate(geolocate);
      map.addControl(geolocate);
    }
    if (!allowGeolocate && geolocate) {
      map.removeControl(geolocate);
      setGeolocate(null);
    }
  }, [map, geolocate, allowGeolocate]);
  (0,react.useEffect)(() => {
    if (geolocate) {
      geolocate.on("error", onGeolocateError);
      return () => {
        geolocate.off("error", onGeolocateError);
      };
    }
  }, [geolocate]);
  return {
    map,
    bodyId
  };
};
const onGeolocateError = e => {
  var _positionFailureMessa;
  logger/* logger */.vF.error("Could not fetch location", e);
  Modal/* default */.Ay.createDialog(ErrorDialog/* default */.A, {
    title: (0,languageHandler._t)("location_sharing|error_fetch_location"),
    description: (_positionFailureMessa = (0,utils_location/* positionFailureMessage */.Ff)(e.code)) !== null && _positionFailureMessa !== void 0 ? _positionFailureMessa : ""
  });
};
const MapComponent = ({
  bounds,
  centerGeoUri,
  children,
  className,
  allowGeolocate,
  id,
  interactive,
  onError,
  onClick
}) => {
  const {
    map,
    bodyId
  } = useMapWithStyle({
    centerGeoUri,
    onError,
    id,
    interactive,
    bounds,
    allowGeolocate
  });
  const onMapClick = event => {
    // Eat click events when clicking the attribution button
    const target = event.target;
    if (target.classList.contains("maplibregl-ctrl-attrib-button")) {
      return;
    }
    onClick === null || onClick === void 0 || onClick();
  };
  return (
    /*#__PURE__*/
    // We break the rule here as this is a mouse-only interaction
    // oxlint-disable-next-line jsx-a11y/click-events-have-key-events
    react.createElement("div", {
      className: classnames_default()("mx_Map", className),
      id: bodyId,
      onClick: onMapClick
    }, !!children && !!map && children({
      map
    }))
  );
};
/* harmony default export */ const Map = (MapComponent);

/***/ },

/***/ "./src/utils/location/map.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var maplibre_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/maplibre-gl@6.10.0/node_modules/maplibre-gl/dist/maplibre-gl.mjs");
/* harmony import */ var matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts");
/* harmony import */ var _languageHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/languageHandler.ts");
/* harmony import */ var _findMapStyleUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/utils/location/findMapStyleUrl.ts");
/* harmony import */ var _LocationShareErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/utils/location/LocationShareErrors.ts");
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/






// maplibre v6 derives its worker URL from `import.meta.url`, which webpack rewrites to a file:// path that maplibre
// rejects, leaving maps blank. webpack.config.ts builds the worker as its own entry, `maplibre.worker`, in the hashed
// bundle directory; the public path is the webapp root, so ask webpack for the entry's full filename.
// Outside webpack (unit tests) neither global exists, and maplibre is mocked anyway.
if (true) {
  maplibre_gl__WEBPACK_IMPORTED_MODULE_0__/* .setWorkerUrl */ .QE(__webpack_require__.p + __webpack_require__.u("maplibre.worker"));
}
const createMap = (client, interactive, bodyId, onError) => {
  try {
    const styleUrl = (0,_findMapStyleUrl__WEBPACK_IMPORTED_MODULE_3__/* .findMapStyleUrl */ .M)(client);
    const map = new maplibre_gl__WEBPACK_IMPORTED_MODULE_0__/* .Map */ .T5({
      container: bodyId,
      style: styleUrl,
      zoom: 15,
      interactive,
      attributionControl: false,
      locale: {
        "AttributionControl.ToggleAttribution": (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("location_sharing|toggle_attribution"),
        "AttributionControl.MapFeedback": (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("location_sharing|map_feedback"),
        "FullscreenControl.Enter": (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("action|enter_fullscreen"),
        "FullscreenControl.Exit": (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("action|exit_fullscreeen"),
        "GeolocateControl.FindMyLocation": (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("location_sharing|find_my_location"),
        "GeolocateControl.LocationNotAvailable": (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("location_sharing|location_not_available"),
        "LogoControl.Title": (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("location_sharing|mapbox_logo"),
        "NavigationControl.ResetBearing": (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("location_sharing|reset_bearing"),
        "NavigationControl.ZoomIn": (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("action|zoom_in"),
        "NavigationControl.ZoomOut": (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("action|zoom_out")
      }
    });
    map.addControl(new maplibre_gl__WEBPACK_IMPORTED_MODULE_0__/* .AttributionControl */ .z0(), "top-right");
    map.on("error", e => {
      matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .vF.error("Failed to load map: check map_style_url in config.json has a valid URL and API key", e.error);
      onError === null || onError === void 0 || onError(new Error(_LocationShareErrors__WEBPACK_IMPORTED_MODULE_4__/* .LocationShareError */ .$.MapStyleUrlNotReachable));
    });
    return map;
  } catch (e) {
    matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .vF.error("Failed to render map", e);
    const errorMessage = e === null || e === void 0 ? void 0 : e.message;
    if (errorMessage.includes("Failed to initialize WebGL")) throw new Error(_LocationShareErrors__WEBPACK_IMPORTED_MODULE_4__/* .LocationShareError */ .$.WebGLNotEnabled);
    throw e;
  }
};
const createMarker = (coords, element) => {
  const marker = new maplibre_gl__WEBPACK_IMPORTED_MODULE_0__/* .Marker */ .pH({
    element,
    anchor: "bottom",
    offset: [0, -1]
  }).setLngLat({
    lon: coords.longitude,
    lat: coords.latitude
  });
  return marker;
};
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "h", 0, /* binding */ createMarker,
/* harmony export */   "p", 0, /* binding */ createMap
/* harmony export */ ]);


/***/ }

}]);
//# sourceMappingURL=5195.js.map