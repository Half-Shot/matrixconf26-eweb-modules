"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[8416],{

/***/ "../../node_modules/.pnpm/@element-hq+element-call-component@https+++codeload.github.com+element-hq+element-call+_1332b967a6678d1d4d7ea56611e7f85c/node_modules/@element-hq/element-call-component/dist/spa-CMAqweUG.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initSPA: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _matrix_C_sMRXGh_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@element-hq+element-call-component@https+++codeload.github.com+element-hq+element-call+_1332b967a6678d1d4d7ea56611e7f85c/node_modules/@element-hq/element-call-component/dist/matrix-C_sMRXGh.js");
/* harmony import */ var matrix_js_sdk_lib_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts");
/* harmony import */ var matrix_js_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrix.ts");



//#region src/utils/spa.ts
async function i(i, a) {
	try {
		let o = i();
		if (!o) return matrix_js_sdk_lib_logger__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .vF.log("No session stored; continuing without a client"), null;
		matrix_js_sdk_lib_logger__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .vF.log("Using a standalone client");
		let { user_id: s, device_id: c, access_token: l, passwordlessUser: u } = o, d = {
			baseUrl: _matrix_C_sMRXGh_js__WEBPACK_IMPORTED_MODULE_0__.Lt.defaultHomeserverUrl(),
			accessToken: l,
			userId: s,
			deviceId: c,
			fallbackICEServerAllowed: !1,
			livekitServiceURL: _matrix_C_sMRXGh_js__WEBPACK_IMPORTED_MODULE_0__.Lt.get().livekit?.livekit_service_url
		};
		try {
			return {
				client: await (0,_matrix_C_sMRXGh_js__WEBPACK_IMPORTED_MODULE_0__.r)(d, !0),
				passwordlessUser: u
			};
		} catch (e) {
			if (e instanceof matrix_js_sdk__WEBPACK_IMPORTED_MODULE_2__/* .MatrixError */ .upv && e.errcode === "M_UNKNOWN_TOKEN") return matrix_js_sdk_lib_logger__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .vF.log("The session from local store is invalid; continuing without a client"), a(), null;
			throw e;
		}
	} catch (e) {
		throw a(), e;
	}
}
//#endregion




/***/ }

}]);
//# sourceMappingURL=8416.js.map