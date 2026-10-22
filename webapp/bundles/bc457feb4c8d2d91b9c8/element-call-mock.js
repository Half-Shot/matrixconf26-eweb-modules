"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[9209],{

/***/ "./src/components/views/voip/ElementCallMock.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ElementCall: () => (/* binding */ ElementCall),
  initializeElementCall: () => (/* binding */ initializeElementCall)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.29.10/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.29.10/node_modules/@babel/runtime/helpers/esm/extends.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.3.0/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@19.3.0/node_modules/react/index.js");
// EXTERNAL MODULE: ../../packages/shared-components/dist/element-web-shared-components.js + 1 modules
var element_web_shared_components = __webpack_require__("../../packages/shared-components/dist/element-web-shared-components.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.29.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.29.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrix.ts + 9 modules
var matrix = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrix.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts
var logger = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/index.ts
var matrixrtc = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/index.ts");
// EXTERNAL MODULE: ./src/stores/CallStore.ts
var CallStore = __webpack_require__("./src/stores/CallStore.ts");
// EXTERNAL MODULE: ./src/languageHandler.ts
var languageHandler = __webpack_require__("./src/languageHandler.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@element-hq+element-call-component@https+++codeload.github.com+element-hq+element-call+_1332b967a6678d1d4d7ea56611e7f85c/node_modules/@element-hq/element-call-component/dist/api-BhQx_VCr.js
var api_BhQx_VCr = __webpack_require__("../../node_modules/.pnpm/@element-hq+element-call-component@https+++codeload.github.com+element-hq+element-call+_1332b967a6678d1d4d7ea56611e7f85c/node_modules/@element-hq/element-call-component/dist/api-BhQx_VCr.js");
;// ./src/viewmodels/voip/ElementCallMockViewModel.ts

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

;







/**
 * How long the mock's membership stays valid. Short on purpose: a membership left behind (reload, flag
 * flipped, crash) is picked up by anyone else joining — including the real component on this very
 * device — as "the oldest member's focus", so it must age out quickly. Long enough for a Playwright test.
 */
const MOCK_MEMBERSHIP_EXPIRY_MS = 10 * 60 * 1000;

/**
 * The MatrixRTC membership the mock publishes when it "joins", so that Element Web sees a running call
 * (room list indicator, join button, and — crucially — the `ElementCall` model does not destroy the
 * call as memberless when the user navigates away). The real component's `MatrixRTCSession` does this
 * for real.
 *
 * The preferred focus is the deployment's real one when Element Web knows it (well-known / RTC
 * transports), so that a stale mock membership never sends a real Element Call to a bogus LiveKit
 * service; only without any configured transport does it fall back to a placeholder (as
 * `playwright/sample-files/fake-element-call.html` does).
 */
const mockMembership = deviceId => {
  const configured = CallStore/* CallStore */.e.instance.getConfiguredRTCTransports().filter(matrixrtc/* isUnstableLivekitTransport */.W$);
  const fociPreferred = configured.length > 0 ? configured.map(t => _objectSpread(_objectSpread({}, t), {}, {
    livekit_alias: "element-call-mock"
  })) : [{
    livekit_alias: "any-alias",
    livekit_service_url: "https://example.org",
    type: "livekit"
  }];
  return {
    "application": "m.call",
    "call_id": "",
    "device_id": deviceId,
    "expires": MOCK_MEMBERSHIP_EXPIRY_MS,
    "foci_preferred": fociPreferred,
    "focus_active": {
      focus_selection: "oldest_membership",
      type: "livekit"
    },
    "m.call.intent": "video",
    "scope": "m.room"
  };
};

/** The props Element Call takes live: a new one is a reason to re-render, never to restart. */

/** What the header shows of the theme and the language the host asked for. */
const presentationOf = ({
  theme,
  language
}) => ({
  theme,
  themeLabel: theme !== null && theme !== void 0 ? theme : (0,languageHandler._t)("voip|element_call_mock|default"),
  languageLabel: language !== null && language !== void 0 ? language : (0,languageHandler._t)("voip|element_call_mock|default")
});

/** What the host bridge says about itself, with the defaults Element Call reads into it. */
const factsOf = hostBridge => {
  var _hostBridge$supportsR, _hostBridge$allowJoin;
  return {
    canClose: hostBridge.close !== undefined,
    supportsReactions: (_hostBridge$supportsR = hostBridge.supportsReactions) !== null && _hostBridge$supportsR !== void 0 ? _hostBridge$supportsR : true,
    allowJoinUnmutedViaIntent: (_hostBridge$allowJoin = hostBridge.allowJoinUnmutedViaIntent) !== null && _hostBridge$allowJoin !== void 0 ? _hostBridge$allowJoin : false
  };
};

/** Everyone in the room's MatrixRTC session, our own device marked as such. */
const participantsOf = (rtcSession, client) => {
  var _rtcSession$membershi;
  const ownUserId = client.getUserId();
  const ownDeviceId = client.getDeviceId();
  return ((_rtcSession$membershi = rtcSession === null || rtcSession === void 0 ? void 0 : rtcSession.memberships) !== null && _rtcSession$membershi !== void 0 ? _rtcSession$membershi : []).map(membership => {
    const isOwnDevice = membership.sender === ownUserId && membership.deviceId === ownDeviceId;
    const participant = `${membership.sender} (${membership.deviceId})`;
    return {
      id: membership.memberId,
      label: isOwnDevice ? (0,languageHandler._t)("voip|element_call_mock|participant_you", {
        participant
      }) : participant
    };
  });
};

/** The intent, the host's overrides and the configuration they add up to, as the mock displays them. */
const configJsonOf = ({
  intent,
  config
}) => JSON.stringify({
  intent,
  config: config !== null && config !== void 0 ? config : {},
  effective: _objectSpread(_objectSpread({}, (0,api_BhQx_VCr.i)(intent)), config)
}, null, 2);

/**
 * The simulated Element Call behind {@link ElementCallMockView}: the room's MatrixRTC session, the
 * membership the mock publishes while it is "in the call", its mute state, and both halves of the
 * conversation with the host — what the mock tells the host bridge, and what the host asks of it
 * through {@link handle}.
 *
 * Not to be confused with the `ElementCall` widget model in `models/Call.ts`.
 */
class ElementCallMockViewModel extends element_web_shared_components/* BaseViewModel */.oY8 {
  constructor(props) {
    const room = props.client.getRoom(props.roomId);
    const rtcSession = room === null ? null : props.client.matrixRTC.getRoomSession(room);
    super(props, _objectSpread(_objectSpread(_objectSpread({
      unknownRoom: rtcSession === null,
      roomId: props.roomId,
      intent: props.intent,
      joined: false
    }, presentationOf(props)), {}, {
      participants: participantsOf(rtcSession, props.client),
      audioEnabled: true,
      videoEnabled: true,
      alwaysOnScreen: false
    }, factsOf(props.hostBridge)), {}, {
      log: [],
      configJson: configJsonOf(props),
      initializedWith: props.initializedWith ? JSON.stringify(props.initializedWith) : (0,languageHandler._t)("voip|element_call_mock|not_called")
    }));
    (0,defineProperty/* default */.A)(this, "rtcSession", void 0);
    /** The state key our own membership lives under. */
    (0,defineProperty/* default */.A)(this, "membershipStateKey", void 0);
    (0,defineProperty/* default */.A)(this, "nextLogId", 0);
    (0,defineProperty/* default */.A)(this, "started", false);
    /**
     * What the host may ask of the mock, through the component's ref: each request is logged, and
     * answered roughly as the real thing would answer it, resolving once done.
     */
    (0,defineProperty/* default */.A)(this, "handle", {
      join: async devices => {
        this.append(`← join ${JSON.stringify(devices)}`);
        await this.joinCall();
      },
      hangUp: async () => {
        this.append("← hangUp");
        if (!this.snapshot.current.joined) throw new Error("Nothing in Element Call can hang up right now");
        await this.leaveCall();
      },
      setDeviceMute: async request => {
        var _request$audio_enable, _request$video_enable;
        this.append(`← setDeviceMute ${JSON.stringify(request)}`);
        const {
          audioEnabled,
          videoEnabled
        } = this.snapshot.current;
        const next = {
          audio_enabled: (_request$audio_enable = request.audio_enabled) !== null && _request$audio_enable !== void 0 ? _request$audio_enable : audioEnabled,
          video_enabled: (_request$video_enable = request.video_enabled) !== null && _request$video_enable !== void 0 ? _request$video_enable : videoEnabled
        };
        // The host asked for this, so there is nothing to tell it about afterwards.
        this.snapshot.merge({
          audioEnabled: next.audio_enabled,
          videoEnabled: next.video_enabled
        });
        return next;
      }
    });
    (0,defineProperty/* default */.A)(this, "toggleJoined", async () => {
      if (this.snapshot.current.joined) await this.leaveCall();else await this.joinCall();
    });
    (0,defineProperty/* default */.A)(this, "toggleAlwaysOnScreen", () => this.setAlwaysOnScreen(!this.snapshot.current.alwaysOnScreen));
    (0,defineProperty/* default */.A)(this, "toggleAudio", () => this.setMute({
      audioEnabled: !this.snapshot.current.audioEnabled
    }));
    (0,defineProperty/* default */.A)(this, "toggleVideo", () => this.setMute({
      videoEnabled: !this.snapshot.current.videoEnabled
    }));
    /**
     * Like the real thing (and the fake widget the Playwright tests use): closing leaves the call and
     * gives up the screen before asking the host to dismiss us.
     */
    (0,defineProperty/* default */.A)(this, "close", async () => {
      var _this$props$hostBridg, _this$props$hostBridg2;
      if (this.snapshot.current.joined) await this.leaveCall();
      if (this.snapshot.current.alwaysOnScreen) await this.setAlwaysOnScreen(false);
      await ((_this$props$hostBridg = (_this$props$hostBridg2 = this.props.hostBridge).close) === null || _this$props$hostBridg === void 0 ? void 0 : _this$props$hostBridg.call(_this$props$hostBridg2));
      this.append("→ close");
    });
    (0,defineProperty/* default */.A)(this, "onMemberships", () => {
      this.snapshot.merge({
        participants: participantsOf(this.rtcSession, this.props.client)
      });
    });
    this.rtcSession = rtcSession;
    this.membershipStateKey = `_${props.client.getUserId()}_${props.client.getDeviceId()}_m.call`;
    if (rtcSession === null) {
      logger/* logger */.vF.error(`Element Call was asked to call in ${props.roomId}, which its host's client does not know about`);
    } else {
      this.disposables.trackListener(rtcSession, matrixrtc/* MatrixRTCSessionEvent */.X6.MembershipsChanged, this.onMemberships);
    }
  }

  /**
   * Tells the host that Element Call has loaded, as the real component does once it is on screen.
   * Separate from the constructor because React may build a view model and throw it away without
   * ever mounting it, and a host told about that would be told a lie.
   */
  start() {
    var _this$props$hostBridg3, _this$props$hostBridg4, _this$props$hostBridg5;
    // In StrictMode dev, a consumer's useEffect can briefly fire with a stale `vm` reference
    // between the hook disposing the old view model and React re-rendering with the new one.
    if (this.started || this.isDisposed) return;
    this.started = true;
    void ((_this$props$hostBridg3 = (_this$props$hostBridg4 = (_this$props$hostBridg5 = this.props.hostBridge).contentLoaded) === null || _this$props$hostBridg4 === void 0 ? void 0 : _this$props$hostBridg4.call(_this$props$hostBridg5)) !== null && _this$props$hostBridg3 !== void 0 ? _this$props$hostBridg3 : Promise.resolve()).then(() => this.append("→ contentLoaded"));
  }

  /**
   * Never leaves a membership behind when torn down while in the call: the real component (or
   * another participant) would otherwise treat this device as still in the call, on the mock's focus.
   */
  dispose() {
    const {
      joined
    } = this.snapshot.current;
    super.dispose();
    if (joined) void this.clearMembership();
  }

  /**
   * Updates the props Element Call takes live, so that the mock — like the real component — always
   * talks to whichever host bridge it was most recently given, and follows the theme and the
   * language, without restarting anything.
   */
  setProps(props) {
    this.props = _objectSpread(_objectSpread({}, this.props), props);
    this.snapshot.merge(_objectSpread(_objectSpread(_objectSpread({
      intent: props.intent
    }, presentationOf(props)), factsOf(props.hostBridge)), {}, {
      configJson: configJsonOf(props)
    }));
  }
  /** "Joining" publishes an RTC membership for this device and tells the host. */
  async joinCall() {
    var _client$getDeviceId, _this$props$hostBridg6, _this$props$hostBridg7;
    const {
      client,
      roomId
    } = this.props;
    await client.sendStateEvent(roomId, matrix/* EventType */.Bx4.GroupCallMemberPrefix, mockMembership((_client$getDeviceId = client.getDeviceId()) !== null && _client$getDeviceId !== void 0 ? _client$getDeviceId : ""), this.membershipStateKey);
    this.snapshot.merge({
      joined: true
    });
    await ((_this$props$hostBridg6 = (_this$props$hostBridg7 = this.props.hostBridge).notifyJoined) === null || _this$props$hostBridg6 === void 0 ? void 0 : _this$props$hostBridg6.call(_this$props$hostBridg7));
    this.append("→ notifyJoined");
  }

  /** "Leaving" clears that membership again, and tells the host. */
  async leaveCall() {
    var _this$props$hostBridg8, _this$props$hostBridg9;
    await this.clearMembership();
    this.snapshot.merge({
      joined: false
    });
    await ((_this$props$hostBridg8 = (_this$props$hostBridg9 = this.props.hostBridge).notifyHungUp) === null || _this$props$hostBridg8 === void 0 ? void 0 : _this$props$hostBridg8.call(_this$props$hostBridg9));
    this.append("→ notifyHungUp");
  }
  clearMembership() {
    const {
      client,
      roomId
    } = this.props;
    return client.sendStateEvent(roomId, matrix/* EventType */.Bx4.GroupCallMemberPrefix, {}, this.membershipStateKey);
  }
  async setAlwaysOnScreen(alwaysOnScreen) {
    var _this$props$hostBridg0, _this$props$hostBridg1;
    await ((_this$props$hostBridg0 = (_this$props$hostBridg1 = this.props.hostBridge).setAlwaysOnScreen) === null || _this$props$hostBridg0 === void 0 ? void 0 : _this$props$hostBridg0.call(_this$props$hostBridg1, alwaysOnScreen));
    this.snapshot.merge({
      alwaysOnScreen
    });
    this.append(`→ setAlwaysOnScreen(${alwaysOnScreen})`);
  }
  async setMute(change) {
    var _this$props$hostBridg10, _this$props$hostBridg11;
    const {
      audioEnabled,
      videoEnabled
    } = _objectSpread(_objectSpread({}, this.snapshot.current), change);
    this.snapshot.merge({
      audioEnabled,
      videoEnabled
    });
    const state = {
      audio_enabled: audioEnabled,
      video_enabled: videoEnabled
    };
    await ((_this$props$hostBridg10 = (_this$props$hostBridg11 = this.props.hostBridge).notifyDeviceMute) === null || _this$props$hostBridg10 === void 0 ? void 0 : _this$props$hostBridg10.call(_this$props$hostBridg11, state));
    this.append(`→ notifyDeviceMute ${JSON.stringify(state)}`);
  }
  append(text) {
    this.snapshot.merge({
      log: [...this.snapshot.current.log, {
        id: this.nextLogId++,
        text
      }]
    });
  }
}
;// ./src/components/views/voip/ElementCallMock.tsx

/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

/**
 * Mock of Element Call's public React component (`@element-hq/element-call-component`).
 *
 * Same `ElementCall` / `initializeElementCall` exports as the package, typed with the package's own
 * types (from its `api` entry point), so `WrappedElementCallComponent` can load either module
 * interchangeably. This module is only the component the package promises; what it shows in place of
 * a call is `ElementCallMockView`, and the Element Call it simulates is `ElementCallMockViewModel`.
 *
 * Used instead of the real component when `Developer.elementCallMockComponent` is on: in Playwright
 * (Element Web's test backend has no LiveKit) and for offline development. Never loaded otherwise.
 */





let initialisedWith = null;

/**
 * Prepares the things Element Call needs before it can be shown. Await this
 * once, before rendering {@link ElementCall}. The mock only records the config.
 */
async function initializeElementCall(config = {}) {
  initialisedWith = config;
}
const NO_HOST = {};
const ElementCallMock = ({
  client,
  roomId,
  intent = api_BhQx_VCr.r.JoinExistingCall,
  config,
  hostBridge = NO_HOST,
  ref,
  theme,
  language
}) => {
  const vm = (0,element_web_shared_components/* useCreateAutoDisposedViewModel */.s2q)(() => new ElementCallMockViewModel({
    client,
    roomId,
    intent,
    config,
    hostBridge,
    theme,
    language,
    initializedWith: initialisedWith
  }));

  // Only a mock that is really on screen tells the host it has loaded; clearing the membership it
  // may have published is handled by the view model's disposal.
  (0,react.useEffect)(() => vm.start(), [vm]);

  // Like the real component, always talk to whichever bridge the host most recently gave us, and
  // follow the theme and the language, without restarting anything.
  (0,react.useEffect)(() => {
    vm.setProps({
      intent,
      config,
      hostBridge,
      theme,
      language
    });
  }, [vm, intent, config, hostBridge, theme, language]);
  (0,react.useImperativeHandle)(ref, () => vm.handle, [vm]);
  return /*#__PURE__*/react.createElement(element_web_shared_components/* ElementCallMockView */.mC8, {
    vm: vm
  });
};

/**
 * Element Call, mocked: a member list, a dump of the configuration, buttons that exercise every host
 * bridge callback and a log of what was said in both directions.
 *
 * The room is fixed for the life of a view model, so a mock asked to call somewhere else remounts
 * rather than mutating one, exactly as the real component reconnects.
 *
 * Not to be confused with the `ElementCall` widget model in `models/Call.ts`.
 */
const ElementCall = props => /*#__PURE__*/react.createElement(ElementCallMock, (0,esm_extends/* default */.A)({
  key: props.roomId
}, props));

/***/ }

}]);
//# sourceMappingURL=element-call-mock.js.map