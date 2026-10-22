(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[945],{

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/membership.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ KnownMembership)
/* harmony export */ });
/*
Copyright 2024 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Well-known values (from the spec or MSCs) that are allowed in the
 * {@link Membership} type.
 */
let KnownMembership = /*#__PURE__*/function (KnownMembership) {
  /**
   * The user has been banned from the room, and is no longer allowed to join
   * it until they are un-banned from the room (by having their membership
   * state set to a value other than ban).
   */
  KnownMembership["Ban"] = "ban";
  /**
   * The user has been invited to join a room, but has not yet joined it.
   * They may not participate in the room until they join.
   * */
  KnownMembership["Invite"] = "invite";
  /**
   * The user has joined the room (possibly after accepting an invite), and
   * may participate in it.
   */
  KnownMembership["Join"] = "join";
  /**
   * The user has knocked on the room, requesting permission to participate.
   * They may not participate in the room until they join.
   */
  KnownMembership["Knock"] = "knock";
  /**
   * The user was once joined to the room, but has since left (possibly by
   * choice, or possibly by being kicked).
   */
  KnownMembership["Leave"] = "leave";
  return KnownMembership;
}({});

/**
 * The membership state for a user in a room [1]. A value from
 * {@link KnownMembership} should be used where available, but all string values
 * are allowed to provide flexibility for upcoming spec changes or proposals.
 *
 * [1] https://spec.matrix.org/latest/client-server-api/#mroommember
 */

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/read_receipts.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ ReceiptType)
/* harmony export */ });
/*
Copyright 2022 Šimon Brandner <simon.bra.ag@gmail.com>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

let ReceiptType = /*#__PURE__*/function (ReceiptType) {
  ReceiptType["Read"] = "m.read";
  ReceiptType["FullyRead"] = "m.fully_read";
  ReceiptType["ReadPrivate"] = "m.read.private";
  return ReceiptType;
}({});
const MAIN_ROOM_TIMELINE = "main";

// We will only hold a synthetic receipt if we do not have a real receipt or the synthetic is newer.
// map: receipt type → user Id → receipt

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/requests.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ isSendDelayedEventRequestOpts),
/* harmony export */   e: () => (/* binding */ UpdateDelayedEventAction)
/* harmony export */ });
/*
Copyright 2021 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/** Options object for {@link MatrixClient.invite}. */

/** @deprecated Scheduling a delayed event with a `parent_delay_id` is no longer supported */

/** @deprecated Scheduling a delayed event with a `parent_delay_id` is no longer supported */
function isSendDelayedEventRequestOpts(opts) {
  if ("parent_delay_id" in opts && typeof opts.parent_delay_id !== "string") {
    // Invalid type, reject
    return false;
  }
  if ("delay" in opts && typeof opts.delay !== "number") {
    // Invalid type, reject.
    return false;
  }
  // At least one of these fields must be specified.
  return "delay" in opts || "parent_delay_id" in opts;
}
let UpdateDelayedEventAction = /*#__PURE__*/function (UpdateDelayedEventAction) {
  UpdateDelayedEventAction["Cancel"] = "cancel";
  UpdateDelayedEventAction["Restart"] = "restart";
  UpdateDelayedEventAction["Send"] = "send";
  return UpdateDelayedEventAction;
}({});

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/search.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ SearchOrderBy)
/* harmony export */ });
/*
Copyright 2021 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
// Types relating to the /search API
var GroupKey = /*#__PURE__*/(/* unused pure expression or super */ null && (function (GroupKey) {
  GroupKey["RoomId"] = "room_id";
  GroupKey["Sender"] = "sender";
  return GroupKey;
}(GroupKey || {})));
let SearchOrderBy = /*#__PURE__*/function (SearchOrderBy) {
  SearchOrderBy["Recent"] = "recent";
  SearchOrderBy["Rank"] = "rank";
  return SearchOrderBy;
}({});

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/type-guards.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _logger_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts");
/*
Copyright 2026 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



/**
 * Type guard to check the given value is a Record type with string keys.
 * @param value - the value to check
 */
const isRecord = value => !!value && typeof value === "object" && !Array.isArray(value);

/**
 * Type guard to check the given record has a key and its value is a string
 * @param metadata - the record to check
 * @param key - the key to check
 */
const hasRequiredStringProperty = (metadata, key) => {
  if (!metadata[key] || !hasOptionalStringProperty(metadata, key)) {
    _logger_ts__WEBPACK_IMPORTED_MODULE_0__/* .logger */ .vF.error(`Missing or invalid property: ${key}`);
    return false;
  }
  return true;
};

/**
 * Type guard to check that if the given record has a key then its value is a string
 * @param metadata - the record to check
 * @param key - the key to check
 */
const hasOptionalStringProperty = (metadata, key) => {
  if (!!metadata[key] && typeof metadata[key] !== "string") {
    _logger_ts__WEBPACK_IMPORTED_MODULE_0__/* .logger */ .vF.error(`Invalid property: ${key}`);
    return false;
  }
  return true;
};

/**
 * Type guard to check the given record has a key and its value is a number
 * @param metadata - the record to check
 * @param key - the key to check
 */
const hasRequiredNumberProperty = (metadata, key) => {
  if (!metadata[key] || !hasOptionalNumberProperty(metadata, key)) {
    _logger_ts__WEBPACK_IMPORTED_MODULE_0__/* .logger */ .vF.error(`Missing or invalid property: ${key}`);
    return false;
  }
  return true;
};

/**
 * Type guard to check that if the given record has a key then its value is a number
 * @param metadata - the record to check
 * @param key - the key to check
 */
const hasOptionalNumberProperty = (metadata, key) => {
  if (!!metadata[key] && typeof metadata[key] !== "number") {
    _logger_ts__WEBPACK_IMPORTED_MODULE_0__/* .logger */ .vF.error(`Invalid property: ${key}`);
    return false;
  }
  return true;
};

/**
 * Type guard to check that if the given record has a key then its value is an array containing only strings
 * @param metadata - the record to check
 * @param key - the key to check
 */
const optionalStringArrayProperty = (metadata, key) => {
  if (!!metadata[key] && (!Array.isArray(metadata[key]) || !metadata[key].every(v => typeof v === "string"))) {
    _logger_ts__WEBPACK_IMPORTED_MODULE_0__/* .logger */ .vF.error(`Invalid property: ${key}`);
    return false;
  }
  return true;
};

/**
 * Type guard to check the given record has a key and its value is an array of strings containing at least the given value
 * @param metadata - the record to check
 * @param key - the key to check
 * @param value - the value to require to be present in the array
 */
const requiredArrayValue = (metadata, key, value) => {
  const array = metadata[key];
  if (!array || !Array.isArray(array) || !array.includes(value)) {
    _logger_ts__WEBPACK_IMPORTED_MODULE_0__/* .logger */ .vF.error(`Invalid property: ${key}. ${value} is required.`);
    return false;
  }
  return true;
};
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "Ch", 0, /* binding */ requiredArrayValue,
/* harmony export */   "W3", 0, /* binding */ hasRequiredStringProperty,
/* harmony export */   "Xu", 0, /* binding */ hasOptionalStringProperty,
/* harmony export */   "lp", 0, /* binding */ hasOptionalNumberProperty,
/* harmony export */   "qY", 0, /* binding */ optionalStringArrayProperty,
/* harmony export */   "u4", 0, /* binding */ isRecord,
/* harmony export */   "wi", 0, /* binding */ hasRequiredNumberProperty
/* harmony export */ ]);


/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/NamespacedValue.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M6: () => (/* binding */ ServerControlledNamespacedValue),
/* harmony export */   qr: () => (/* binding */ UnstableValue),
/* harmony export */   xu: () => (/* binding */ NamespacedValue)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");

/*
Copyright 2021 - 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Represents a simple Matrix namespaced value. This will assume that if a stable prefix
 * is provided that the stable prefix should be used when representing the identifier.
 */
class NamespacedValue {
  // Stable is optional, but one of the two parameters is required, hence the weird-looking types.
  // Goal is to to have developers explicitly say there is no stable value (if applicable).

  constructor(stable, unstable) {
    this.stable = stable;
    this.unstable = unstable;
    if (!this.unstable && !this.stable) {
      throw new Error("One of stable or unstable values must be supplied");
    }
  }
  get name() {
    if (this.stable) {
      return this.stable;
    }
    return this.unstable;
  }
  get altName() {
    if (!this.stable) {
      return null;
    }
    return this.unstable;
  }
  get names() {
    const names = [this.name];
    const altName = this.altName;
    if (altName) names.push(altName);
    return names;
  }
  matches(val) {
    return this.name === val || this.altName === val;
  }

  // this desperately wants https://github.com/microsoft/TypeScript/pull/26349 at the top level of the class
  // so we can instantiate `NamespacedValue<string, _, _>` as a default type for that namespace.
  findIn(obj) {
    let val = undefined;
    if (this.name) {
      val = obj === null || obj === void 0 ? void 0 : obj[this.name];
    }
    if (!val && this.altName) {
      val = obj === null || obj === void 0 ? void 0 : obj[this.altName];
    }
    return val;
  }
  includedIn(arr) {
    let included = false;
    if (this.name) {
      included = arr.includes(this.name);
    }
    if (!included && this.altName) {
      included = arr.includes(this.altName);
    }
    return included;
  }
}
class ServerControlledNamespacedValue extends NamespacedValue {
  constructor(...args) {
    super(...args);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "preferUnstable", false);
  }
  setPreferUnstable(preferUnstable) {
    this.preferUnstable = preferUnstable;
  }
  get name() {
    if (this.stable && !this.preferUnstable) {
      return this.stable;
    }
    return this.unstable;
  }
}

/**
 * Represents a namespaced value which prioritizes the unstable value over the stable
 * value.
 */
class UnstableValue extends NamespacedValue {
  // Note: Constructor difference is that `unstable` is *required*.
  constructor(stable, unstable) {
    super(stable, unstable);
    if (!this.unstable) {
      throw new Error("Unstable value must be supplied");
    }
  }
  get name() {
    return this.unstable;
  }
  get altName() {
    return this.stable;
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/ReEmitter.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ ReEmitter),
/* harmony export */   Q: () => (/* binding */ TypedReEmitter)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");

/*
Copyright 2015, 2016 OpenMarket Ltd
Copyright 2017 Vector Creations Ltd
Copyright 2017 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// eslint-disable-next-line no-restricted-imports

class ReEmitter {
  constructor(target) {
    // Map from emitter to event name to re-emitter
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "reEmitters", new WeakMap());
    this.target = target;
  }
  reEmit(source, eventNames) {
    let reEmittersByEvent = this.reEmitters.get(source);
    if (!reEmittersByEvent) {
      reEmittersByEvent = new Map();
      this.reEmitters.set(source, reEmittersByEvent);
    }
    for (const eventName of eventNames) {
      if (reEmittersByEvent.has(eventName)) continue;

      // We include the source as the last argument for event handlers which may need it,
      // such as read receipt listeners on the client class which won't have the context
      // of the room.
      const forSource = (...args) => {
        // EventEmitter special cases 'error' to make the emit function throw if no
        // handler is attached, which sort of makes sense for making sure that something
        // handles an error, but for re-emitting, there could be a listener on the original
        // source object so the test doesn't really work. We *could* try to replicate the
        // same logic and throw if there is no listener on either the source or the target,
        // but this behaviour is fairly undesireable for us anyway: the main place we throw
        // 'error' events is for calls, where error events are usually emitted some time
        // later by a different part of the code where 'emit' throwing because the app hasn't
        // added an error handler isn't terribly helpful. (A better fix in retrospect may
        // have been to just avoid using the event name 'error', but backwards compat...)
        if (eventName === "error" && this.target.listenerCount("error") === 0) return;
        this.target.emit(eventName, ...args, source);
      };
      source.on(eventName, forSource);
      reEmittersByEvent.set(eventName, forSource);
    }
  }
  stopReEmitting(source, eventNames) {
    const reEmittersByEvent = this.reEmitters.get(source);
    if (!reEmittersByEvent) return; // We were never re-emitting these events in the first place

    for (const eventName of eventNames) {
      source.off(eventName, reEmittersByEvent.get(eventName));
      reEmittersByEvent.delete(eventName);
    }
    if (reEmittersByEvent.size === 0) this.reEmitters.delete(source);
  }
}
class TypedReEmitter extends ReEmitter {
  constructor(target) {
    super(target);
  }
  reEmit(source, eventNames) {
    super.reEmit(source, eventNames);
  }
  stopReEmitting(source, eventNames) {
    super.stopReEmitting(source, eventNames);
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/ToDeviceMessageQueue.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ ToDeviceMessageQueue)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types_event_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/event.ts");
/* harmony import */ var _client_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/client.ts");
/* harmony import */ var _scheduler_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/scheduler.ts");
/* harmony import */ var _sync_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/sync.ts");
/* harmony import */ var _utils_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/utils.ts");

/*
Copyright 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/






const MAX_BATCH_SIZE = 20;

/**
 * Maintains a queue of outgoing to-device messages, sending them
 * as soon as the homeserver is reachable.
 */
class ToDeviceMessageQueue {
  constructor(client, logger) {
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "sending", false);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "running", true);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "retryTimeout", null);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "retryAttempts", 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "sendQueue", async () => {
      if (this.retryTimeout !== null) clearTimeout(this.retryTimeout);
      this.retryTimeout = null;
      if (this.sending || !this.running) return;
      this.logger.debug("Attempting to send queued to-device messages");
      this.sending = true;
      let headBatch;
      try {
        while (this.running) {
          headBatch = await this.client.store.getOldestToDeviceBatch();
          if (headBatch === null) break;
          await this.sendBatch(headBatch);
          await this.client.store.removeToDeviceBatch(headBatch.id);
          this.retryAttempts = 0;
        }

        // Make sure we're still running after the async tasks: if not, stop.
        if (!this.running) return;
        this.logger.debug("All queued to-device messages sent");
      } catch (e) {
        ++this.retryAttempts;
        const retryDelay = _scheduler_ts__WEBPACK_IMPORTED_MODULE_3__/* .MatrixScheduler */ .b.RETRY_BACKOFF_RATELIMIT(null, this.retryAttempts, e);
        if (retryDelay === -1) {
          // the scheduler function doesn't differentiate between fatal errors and just getting
          // bored and giving up for now
          if (Math.floor(e.httpStatus / 100) === 4) {
            this.logger.error("Fatal error when sending to-device message - dropping to-device batch!", e);
            await this.client.store.removeToDeviceBatch(headBatch.id);
          } else {
            this.logger.info("Automatic retry limit reached for to-device messages.");
          }
          return;
        }
        this.logger.info(`Failed to send batch of to-device messages. Will retry in ${retryDelay}ms`, e);
        this.retryTimeout = setTimeout(this.sendQueue, retryDelay);
      } finally {
        this.sending = false;
      }
    });
    /**
     * Listen to sync state changes and automatically resend any pending events
     * once syncing is resumed
     */
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onResumedSync", (state, oldState) => {
      if (state === _sync_ts__WEBPACK_IMPORTED_MODULE_4__/* .SyncState */ .Lm.Syncing && oldState !== _sync_ts__WEBPACK_IMPORTED_MODULE_4__/* .SyncState */ .Lm.Syncing) {
        this.logger.info(`Resuming queue after resumed sync`);
        void this.sendQueue();
      }
    });
    this.client = client;
    this.logger = logger;
  }
  start() {
    this.running = true;
    this.sendQueue();
    this.client.on(_client_ts__WEBPACK_IMPORTED_MODULE_2__/* .ClientEvent */ .AU.Sync, this.onResumedSync);
  }
  stop() {
    this.running = false;
    if (this.retryTimeout !== null) clearTimeout(this.retryTimeout);
    this.retryTimeout = null;
    this.client.removeListener(_client_ts__WEBPACK_IMPORTED_MODULE_2__/* .ClientEvent */ .AU.Sync, this.onResumedSync);
  }
  async queueBatch(batch) {
    const batches = [];
    for (let i = 0; i < batch.batch.length; i += MAX_BATCH_SIZE) {
      const batchWithTxnId = {
        eventType: batch.eventType,
        batch: batch.batch.slice(i, i + MAX_BATCH_SIZE),
        txnId: this.client.makeTxnId()
      };
      batches.push(batchWithTxnId);
      const msgmap = batchWithTxnId.batch.map(msg => `${msg.userId}/${msg.deviceId} (msgid ${msg.payload[_types_event_ts__WEBPACK_IMPORTED_MODULE_1__/* .ToDeviceMessageId */ .wt]})`);
      this.logger.info(`Enqueuing batch of to-device messages. type=${batch.eventType} txnid=${batchWithTxnId.txnId}`, msgmap);
    }
    await this.client.store.saveToDeviceBatches(batches);
    void this.sendQueue();
  }
  /**
   * Attempts to send a batch of to-device messages.
   */
  async sendBatch(batch) {
    const contentMap = new _utils_ts__WEBPACK_IMPORTED_MODULE_5__/* .MapWithDefault */ .kG(() => new Map());
    for (const item of batch.batch) {
      contentMap.getOrCreate(item.userId).set(item.deviceId, item.payload);
    }
    this.logger.info(`Sending batch of ${batch.batch.length} to-device messages with ID ${batch.id} and txnId ${batch.txnId}`);
    await this.client.sendToDevice(batch.eventType, contentMap, batch.txnId);
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/base64.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A4: () => (/* binding */ encodeUnpaddedBase64Url),
/* harmony export */   PP: () => (/* binding */ encodeUnpaddedBase64),
/* harmony export */   WG: () => (/* binding */ encodeBase64),
/* harmony export */   y4: () => (/* binding */ decodeBase64)
/* harmony export */ });
/*
Copyright 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Base64 encoding and decoding utilities
 */

function toBase64(uint8Array, options) {
  if (typeof uint8Array.toBase64 === "function") {
    // Currently this is only supported in Firefox,
    // but we match the options in the hope in the future we can rely on it for all environments.
    // https://tc39.es/proposal-arraybuffer-base64/spec/#sec-uint8array.prototype.tobase64
    return uint8Array.toBase64(options);
  }
  let base64 = btoa(uint8Array.reduce((acc, current) => acc + String.fromCharCode(current), ""));
  if (options.omitPadding) {
    base64 = base64.replace(/={1,2}$/, "");
  }
  if (options.alphabet === "base64url") {
    base64 = base64.replace(/\+/g, "-").replace(/\//g, "_");
  }
  return base64;
}

/**
 * Encode a typed array of uint8 as base64.
 * @param uint8Array - The data to encode.
 * @returns The base64.
 */
function encodeBase64(uint8Array) {
  return toBase64(uint8Array, {
    alphabet: "base64",
    omitPadding: false
  });
}

/**
 * Encode a typed array of uint8 as unpadded base64.
 * @param uint8Array - The data to encode.
 * @returns The unpadded base64.
 */
function encodeUnpaddedBase64(uint8Array) {
  return toBase64(uint8Array, {
    alphabet: "base64",
    omitPadding: true
  });
}

/**
 * Encode a typed array of uint8 as unpadded base64 using the URL-safe encoding.
 * @param uint8Array - The data to encode.
 * @returns The unpadded base64.
 */
function encodeUnpaddedBase64Url(uint8Array) {
  return toBase64(uint8Array, {
    alphabet: "base64url",
    omitPadding: true
  });
}
function fromBase64(base64, options) {
  if (typeof Uint8Array.fromBase64 === "function") {
    // Currently this is only supported in Firefox,
    // but we match the options in the hope in the future we can rely on it for all environments.
    // https://tc39.es/proposal-arraybuffer-base64/spec/#sec-uint8array.frombase64
    return Uint8Array.fromBase64(base64, options);
  }
  return Uint8Array.from(atob(base64), c => c.charCodeAt(0));
}

/**
 * Decode a base64 (or base64url) string to a typed array of uint8.
 * @param base64 - The base64 to decode.
 * @returns The decoded data.
 */
function decodeBase64(base64) {
  // The function requires us to select an alphabet, but we don't know if base64url was used so we convert.
  return fromBase64(base64.replace(/-/g, "+").replace(/_/g, "/"), {
    alphabet: "base64",
    lastChunkHandling: "loose"
  });
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/capabilityPoller.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ CapabilityPoller)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _models_typed_event_emitter_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/typed-event-emitter.ts");
/* harmony import */ var _utils_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/utils.ts");

/*
Copyright 2026 Element Creations Ltd.
Copyright 2024 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




// How often we update the server capabilities.
// 6 hours - an arbitrary value, but they should change very infrequently.
const CAPABILITIES_CACHE_MS = 6 * 60 * 60 * 1000;

// How long we want before retrying if we couldn't fetch
const CAPABILITIES_RETRY_MS = 30 * 1000;

/**
 * Manages storing and periodically refreshing the server capabilities.
 */
class CapabilityPoller extends _models_typed_event_emitter_ts__WEBPACK_IMPORTED_MODULE_1__/* .TypedEventEmitter */ .X {
  constructor(logger, http, name) {
    super();
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "cached", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "retryTimeout", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "refreshTimeout", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "stopped", true);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "poll", async () => {
      if (this.stopped) return;
      this.logger.debug("Checking capabilites");
      try {
        const current = this.cached;
        await this.fetch();
        if (this.stopped) return;
        this.clearTimeouts();
        this.refreshTimeout = globalThis.setTimeout(this.poll, CAPABILITIES_CACHE_MS);
        this.logger.debug(`Fetched new server ${this.name}`);
        if (this.cached && !(0,_utils_ts__WEBPACK_IMPORTED_MODULE_2__/* .deepCompare */ .ky)(current, this.cached)) {
          this.emit("update", this.cached);
        }
      } catch (e) {
        if (this.stopped) return;
        this.clearTimeouts();
        const howLong = Math.floor(CAPABILITIES_RETRY_MS + Math.random() * 5000);
        this.retryTimeout = globalThis.setTimeout(this.poll, howLong);
        this.logger.warn(`Failed to refresh ${this.name}: retrying in ${howLong}ms`, e);
      }
    });
    this.logger = logger;
    this.http = http;
    this.name = name;
  }

  /**
   * Starts periodically fetching the server capabilities.
   */
  start() {
    this.stopped = false;
    this.poll().then();
  }

  /**
   * Stops the service
   */
  stop() {
    this.stopped = true;
    this.clearTimeouts();
  }

  /**
   * Returns the cached capabilities, or undefined if none are cached.
   * @returns the current capabilities, if any.
   */
  getCached() {
    return this.cached;
  }
  clearTimeouts() {
    if (this.refreshTimeout) {
      clearInterval(this.refreshTimeout);
      this.refreshTimeout = undefined;
    }
    if (this.retryTimeout) {
      clearTimeout(this.retryTimeout);
      this.retryTimeout = undefined;
    }
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/common-crypto/CryptoBackend.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ DecryptionError)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");

/*
Copyright 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Common interface for the crypto implementations
 *
 * @internal
 */

/**
 * The parts of a sync response which are relevant to encryption, as passed to
 * {@link SyncCryptoCallbacks.processSyncChanges}.
 *
 * @internal
 */

/** The methods which crypto implementations should expose to the Sync api
 *
 * @internal
 */

/**
 * @internal
 */

/**
 * The result of a (successful) call to {@link CryptoBackend.decryptEvent}
 */

/**
 * Responsible for decrypting megolm session data retrieved from a remote backup.
 * The result of {@link CryptoBackend#getBackupDecryptor}.
 */

/**
 * Exception thrown when decryption fails
 *
 * @param code - Reason code for the failure.
 *
 * @param msg - user-visible message describing the problem
 *
 * @param details - key/value pairs reported in the logs but not shown
 *   to the user.
 */
class DecryptionError extends Error {
  constructor(code, msg, details) {
    super(msg);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "detailedString", void 0);
    this.code = code;
    this.name = "DecryptionError";
    this.detailedString = detailedStringForDecryptionError(this, details);
  }
}
function detailedStringForDecryptionError(err, details) {
  let result = err.name + "[msg: " + err.message;
  if (details) {
    result += ", " + Object.keys(details).map(k => k + ": " + details[k]).join(", ");
  }
  result += "]";
  return result;
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/content-repo.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ getHttpUriForMxc)
/* harmony export */ });
/*
Copyright 2015 - 2024 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// Validation based on https://spec.matrix.org/v1.12/appendices/#server-name
// We do not use the validation described in https://spec.matrix.org/v1.12/client-server-api/#security-considerations-5
// as it'd wrongly make all MXCs invalid due to not allowing `[].:` in server names.
const serverNameRegex = /^(?:(?:\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|(?:\[[\dA-Fa-f:.]{2,45}])|(?:[A-Za-z\d\-.]{1,255}))(?::\d{1,5})?$/;
function validateServerName(serverName) {
  const matches = serverNameRegex.exec(serverName);
  return (matches === null || matches === void 0 ? void 0 : matches[0]) === serverName;
}

// Validation based on https://spec.matrix.org/v1.12/client-server-api/#security-considerations-5
const mediaIdRegex = /^[\w-]+$/;
function validateMediaId(mediaId) {
  const matches = mediaIdRegex.exec(mediaId);
  return (matches === null || matches === void 0 ? void 0 : matches[0]) === mediaId;
}

/**
 * Get the HTTP URL for an MXC URI.
 * @param baseUrl - The base homeserver url which has a content repo.
 * @param mxc - The mxc:// URI.
 * @param width - The desired width of the thumbnail.
 * @param height - The desired height of the thumbnail.
 * @param resizeMethod - The thumbnail resize method to use, either
 * "crop" or "scale".
 * @param allowDirectLinks - If true, return any non-mxc URLs
 * directly. Fetching such URLs will leak information about the user to
 * anyone they share a room with. If false, will return the emptry string
 * for such URLs.
 * @param allowRedirects - If true, the caller supports the URL being 307 or
 * 308 redirected to another resource upon request. If false, redirects
 * are not expected. Implied `true` when `useAuthentication` is `true`.
 * @param useAuthentication - If true, the caller supports authenticated
 * media and wants an authentication-required URL. Note that server support
 * for authenticated media will *not* be checked - it is the caller's responsibility
 * to do so before calling this function. Note also that `useAuthentication`
 * implies `allowRedirects`. Defaults to false (unauthenticated endpoints).
 * @param animated - Whether the desired thumbnail should be animated.
 * @returns The complete URL to the content, may be an empty string if the provided mxc is not valid.
 */
function getHttpUriForMxc(baseUrl, mxc, width, height, resizeMethod, allowDirectLinks = false, allowRedirects, useAuthentication, animated) {
  if (typeof mxc !== "string" || !mxc) {
    return "";
  }
  if (!mxc.startsWith("mxc://")) {
    if (allowDirectLinks) {
      return mxc;
    } else {
      return "";
    }
  }
  const [serverName, mediaId, ...rest] = mxc.slice(6).split("/");
  if (rest.length > 0 || !validateServerName(serverName) || !validateMediaId(mediaId)) {
    return "";
  }
  if (useAuthentication) {
    allowRedirects = true; // per docs (MSC3916 always expects redirects)

    // Dev note: MSC3916 removes `allow_redirect` entirely, but
    // for explicitness we set it here. This makes it slightly more obvious to
    // callers, hopefully.
  }
  let prefix;
  const isThumbnailRequest = !!width || !!height || !!resizeMethod;
  const verb = isThumbnailRequest ? "thumbnail" : "download";
  if (useAuthentication) {
    prefix = `/_matrix/client/v1/media/${verb}`;
  } else {
    prefix = `/_matrix/media/v3/${verb}`;
  }
  const url = new URL(`${prefix}/${serverName}/${mediaId}`, baseUrl);
  if (width) {
    url.searchParams.set("width", Math.round(width).toString());
  }
  if (height) {
    url.searchParams.set("height", Math.round(height).toString());
  }
  if (resizeMethod) {
    url.searchParams.set("method", resizeMethod);
  }
  if (animated !== undefined) {
    url.searchParams.set("animated", String(animated));
  }
  if (typeof allowRedirects === "boolean") {
    // We add this after, so we don't convert everything to a thumbnail request.
    url.searchParams.set("allow_redirect", JSON.stringify(allowRedirects));
  }
  return url.href;
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/crypto-api/CryptoEvent.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ CryptoEvent)
/* harmony export */ });
/*
 * Copyright 2024 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Cryptography-related events emitted by the {@link matrix.MatrixClient}.
 */
let CryptoEvent = /*#__PURE__*/function (CryptoEvent) {
  /**
   * Fires when the trust status of a user changes.
   * The payload is a pair (userId, userTrustLevel). The trust level is one of the values from UserVerificationStatus.
   */
  CryptoEvent["UserTrustStatusChanged"] = "userTrustStatusChanged";
  /**
   * Fires when the key backup status changes.
   * The payload is a boolean indicating whether the key backup is enabled.
   */
  CryptoEvent["KeyBackupStatus"] = "crypto.keyBackupStatus";
  /**
   * Fires when we failed to back up the keys
   * The payload is the error code of the error that occurred.
   */
  CryptoEvent["KeyBackupFailed"] = "crypto.keyBackupFailed";
  /**
   * Fires when the number of sessions that can be backed up changes.
   * The payload is the remaining number of sessions that can be backed up.
   */
  CryptoEvent["KeyBackupSessionsRemaining"] = "crypto.keyBackupSessionsRemaining";
  /**
   * Fires when a new valid backup decryption key is in cache.
   * This will happen when a secret is received from another session, from secret storage,
   * or when a new backup is created from this session.
   *
   * The payload is the version of the backup for which we have the key for.
   *
   * This event is only fired by the rust crypto backend.
   */
  CryptoEvent["KeyBackupDecryptionKeyCached"] = "crypto.keyBackupDecryptionKeyCached";
  /**
   * Fires when a key verification request is received.
   * The payload is a VerificationRequest object representing the request.
   */
  CryptoEvent["VerificationRequestReceived"] = "crypto.verificationRequestReceived";
  /** @deprecated Use {@link DevicesUpdated} instead when using rust crypto */
  CryptoEvent["WillUpdateDevices"] = "crypto.willUpdateDevices";
  /**
   * Fires whenever the stored devices for a user have been updated
   * The payload is a pair (userIds, initialFetch).
   */
  CryptoEvent["DevicesUpdated"] = "crypto.devicesUpdated";
  /**
   * Fires when the user's cross-signing keys have changed or cross-signing
   * has been enabled/disabled. The client can use getStoredCrossSigningForUser
   * with the user ID of the logged in user to check if cross-signing is
   * enabled on the account. If enabled, it can test whether the current key
   * is trusted using with checkUserTrust with the user ID of the logged
   * in user. The checkOwnCrossSigningTrust function may be used to reconcile
   * the trust in the account key.
   *
   * The cross-signing API is currently UNSTABLE and may change without notice.
   * @experimental
   */
  CryptoEvent["KeysChanged"] = "crossSigning.keysChanged";
  /**
   * Fires when data is being migrated from legacy crypto to rust crypto.
   *
   * The payload is a pair `(progress, total)`, where `progress` is the number of steps completed so far, and
   * `total` is the total number of steps. When migration is complete, a final instance of the event is emitted, with
   * `progress === total === -1`.
   */
  CryptoEvent["LegacyCryptoStoreMigrationProgress"] = "crypto.legacyCryptoStoreMigrationProgress";
  /**
   * Fires when a new dehydrated device is created locally.
   *
   * After the client calls {@link CryptoApi.startDehydration}, this event
   * will be fired every time a new dehydrated device is created.  It may fire
   * before `startDehydration` returns.
   */
  CryptoEvent["DehydratedDeviceCreated"] = "dehydration.DehydratedDeviceCreated";
  /**
   * Fires when a new dehydrated device is successfully uploaded to the server.
   *
   * This should fire shortly after {@link DehydratedDeviceCreated} fires. If
   * upload is unsuccessful, this will be reported either by an error thrown
   * by {@link CryptoApi.startDehydration} (for errors that happen before
   * `startDehydration` returns), or by firing {@link DehydratedDeviceRotationError}
   * (for errors that happen during regular rotation of the dehydrated device)
   */
  CryptoEvent["DehydratedDeviceUploaded"] = "dehydration.DehydratedDeviceUploaded";
  /**
   * Fires when rehydration has started.
   *
   * After the client calls {@link CryptoApi.startDehydration}, this event will
   * fire if a dehydrated device is found and we attempt to rehydrate it.
   */
  CryptoEvent["RehydrationStarted"] = "dehydration.RehydrationStarted";
  /**
   * Fires during rehydration, to inform the application of rehydration progress.
   *
   * The payload is a pair `[roomKeyCount: number, toDeviceCount: number]`,
   * where `roomKeyCount` is the number of room keys that have been received
   * so far, and `toDeviceCount` is the number of to-device messages received
   * so far (including the messages containing room keys).
   */
  CryptoEvent["RehydrationProgress"] = "dehydration.RehydrationProgress";
  /** Fires when rehydration has completed successfully. */
  CryptoEvent["RehydrationCompleted"] = "dehydration.RehydrationCompleted";
  /** Fires when there was an error in rehydration.
   *
   * The payload is an error message as a string.
   */
  CryptoEvent["RehydrationError"] = "dehydration.RehydrationError";
  /**
   * Fires when a dehydrated device key has been cached in the local database.
   */
  CryptoEvent["DehydrationKeyCached"] = "dehydration.DehydrationKeyCached";
  /**
   * Fires when an error occurs during periodic rotation of the dehydrated device.
   *
   * The payload is an error message as a string.
   */
  CryptoEvent["DehydratedDeviceRotationError"] = "dehydration.DehydratedDeviceRotationError";
  return CryptoEvent;
}({});

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/crypto-api/key-passphrase.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ deriveRecoveryKeyFromPassphrase)
/* harmony export */ });
/*
 * Copyright 2024 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const DEFAULT_BIT_SIZE = 256;

/**
 * Derive a recovery key from a passphrase and salt using PBKDF2.
 * @see https://spec.matrix.org/v1.11/client-server-api/#deriving-keys-from-passphrases
 *
 * @param passphrase - The passphrase to derive the key from
 * @param salt - The salt to use in the derivation
 * @param iterations - The number of iterations to use in the derivation
 * @param numBits - The number of bits to derive
 */
async function deriveRecoveryKeyFromPassphrase(passphrase, salt, iterations, numBits = DEFAULT_BIT_SIZE) {
  if (!globalThis.crypto.subtle || !TextEncoder) {
    throw new Error("Password-based backup is not available on this platform");
  }
  const key = await globalThis.crypto.subtle.importKey("raw", new TextEncoder().encode(passphrase), {
    name: "PBKDF2"
  }, false, ["deriveBits"]);
  const keybits = await globalThis.crypto.subtle.deriveBits({
    name: "PBKDF2",
    salt: new TextEncoder().encode(salt),
    iterations: iterations,
    hash: "SHA-512"
  }, key, numBits);
  return new Uint8Array(keybits);
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/digest.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ sha256)
/* harmony export */ });
/*
Copyright 2024 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Computes a SHA-256 hash of a string (after utf-8 encoding) and returns it as an ArrayBuffer.
 *
 * @param plaintext The string to hash
 * @returns An Uint8Array containing the SHA-256 hash of the input string
 * @throws If the subtle crypto API is not available, for example if the code is running
 *         in a web page with an insecure context (eg. served over plain HTTP).
 */
async function sha256(plaintext) {
  if (!globalThis.crypto.subtle) {
    throw new Error("Crypto.subtle is not available: insecure context?");
  }
  const utf8 = new TextEncoder().encode(plaintext);
  const digest = await globalThis.crypto.subtle.digest("SHA-256", utf8);
  return new Uint8Array(digest);
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/event-mapper.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ eventMapperFor)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _models_event_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/event.ts");
/* harmony import */ var _types_event_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/event.ts");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/*
Copyright 2021 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

;

function eventMapperFor(client, options) {
  let preventReEmit = Boolean(options.preventReEmit);
  const decrypt = options.decrypt !== false;
  function mapper(plainOldJsObject) {
    const room = client.getRoom(plainOldJsObject.room_id);
    let event;
    // If the event is already known to the room, let's re-use the model rather than duplicating.
    // We avoid doing this to state events as they may be forward or backwards looking which tweaks behaviour.
    if (room && plainOldJsObject.state_key === undefined) {
      event = room.findEventById(plainOldJsObject.event_id);
    }
    if (!event || event.status) {
      event = new _models_event_ts__WEBPACK_IMPORTED_MODULE_1__/* .MatrixEvent */ .kl(plainOldJsObject);
    } else {
      // merge the latest unsigned data from the server
      event.setUnsigned(_objectSpread(_objectSpread({}, event.getUnsigned()), plainOldJsObject.unsigned));
      // prevent doubling up re-emitters
      preventReEmit = true;
    }

    // if there is a complete edit bundled alongside the event, perform the replacement.
    // (prior to MSC3925, events were automatically replaced on the server-side. MSC3925 proposes that that doesn't
    // happen automatically but the server does provide us with the whole content of the edit event.)
    const bundledEdit = event.getServerAggregatedRelation(_types_event_ts__WEBPACK_IMPORTED_MODULE_2__/* .RelationType */ .zZ.Replace);
    if (bundledEdit !== null && bundledEdit !== void 0 && bundledEdit.content) {
      const replacement = mapper(bundledEdit);
      // XXX: it's worth noting that the spec says we should only respect encrypted edits if, once decrypted, the
      //   replacement has a `m.new_content` property. The problem is that we haven't yet decrypted the replacement
      //   (it should be happening in the background), so we can't enforce this. Possibly we should for decryption
      //   to complete, but that sounds a bit racy. For now, we just assume it's ok.
      event.makeReplaced(replacement);
    }
    const thread = room === null || room === void 0 ? void 0 : room.findThreadForEvent(event);
    if (thread) {
      event.setThread(thread);
    }
    if (event.isEncrypted()) {
      if (!preventReEmit) {
        client.reEmitter.reEmit(event, [_models_event_ts__WEBPACK_IMPORTED_MODULE_1__/* .MatrixEventEvent */ .OQ.Decrypted]);
      }
      if (decrypt) {
        client.decryptEventIfNeeded(event);
      }
    }
    if (!preventReEmit) {
      client.reEmitter.reEmit(event, [_models_event_ts__WEBPACK_IMPORTED_MODULE_1__/* .MatrixEventEvent */ .OQ.Replaced, _models_event_ts__WEBPACK_IMPORTED_MODULE_1__/* .MatrixEventEvent */ .OQ.VisibilityChange]);
      room === null || room === void 0 || room.reEmitter.reEmit(event, [_models_event_ts__WEBPACK_IMPORTED_MODULE_1__/* .MatrixEventEvent */ .OQ.BeforeRedaction]);
    }
    return event;
  }
  return mapper;
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/feature.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tj: () => (/* binding */ ServerSupport),
/* harmony export */   Xj: () => (/* binding */ Feature),
/* harmony export */   yk: () => (/* binding */ buildFeatureSupportMap)
/* harmony export */ });
/*
Copyright 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

let ServerSupport = /*#__PURE__*/function (ServerSupport) {
  ServerSupport[ServerSupport["Stable"] = 0] = "Stable";
  ServerSupport[ServerSupport["Unstable"] = 1] = "Unstable";
  ServerSupport[ServerSupport["Unsupported"] = 2] = "Unsupported";
  return ServerSupport;
}({});
let Feature = /*#__PURE__*/function (Feature) {
  Feature["Thread"] = "Thread";
  Feature["ThreadUnreadNotifications"] = "ThreadUnreadNotifications";
  /**
   * @deprecated this is now exposed as a capability not a feature
   */
  Feature["LoginTokenRequest"] = "LoginTokenRequest";
  Feature["RelationBasedRedactions"] = "RelationBasedRedactions";
  Feature["AccountDataDeletion"] = "AccountDataDeletion";
  Feature["RelationsRecursion"] = "RelationsRecursion";
  Feature["IntentionalMentions"] = "IntentionalMentions";
  return Feature;
}({});
const featureSupportResolver = {
  [Feature.Thread]: {
    unstablePrefixes: ["org.matrix.msc3440"],
    matrixVersion: "v1.3"
  },
  [Feature.ThreadUnreadNotifications]: {
    unstablePrefixes: ["org.matrix.msc3771", "org.matrix.msc3773"],
    matrixVersion: "v1.4"
  },
  [Feature.LoginTokenRequest]: {
    unstablePrefixes: ["org.matrix.msc3882"]
  },
  [Feature.RelationBasedRedactions]: {
    unstablePrefixes: ["org.matrix.msc3912"]
  },
  [Feature.RelationsRecursion]: {
    unstablePrefixes: ["org.matrix.msc3981"],
    matrixVersion: "v1.10"
  },
  [Feature.IntentionalMentions]: {
    unstablePrefixes: ["org.matrix.msc3952_intentional_mentions"],
    matrixVersion: "v1.7"
  }
};
async function buildFeatureSupportMap(versions) {
  const supportMap = new Map();
  for (const [feature, supportCondition] of Object.entries(featureSupportResolver)) {
    var _versions$versions$in, _versions$versions, _supportCondition$uns, _supportCondition$uns2;
    const supportMatrixVersion = (_versions$versions$in = (_versions$versions = versions.versions) === null || _versions$versions === void 0 ? void 0 : _versions$versions.includes(supportCondition.matrixVersion || "")) !== null && _versions$versions$in !== void 0 ? _versions$versions$in : false;
    const supportUnstablePrefixes = (_supportCondition$uns = (_supportCondition$uns2 = supportCondition.unstablePrefixes) === null || _supportCondition$uns2 === void 0 ? void 0 : _supportCondition$uns2.every(unstablePrefix => {
      var _versions$unstable_fe;
      return ((_versions$unstable_fe = versions.unstable_features) === null || _versions$unstable_fe === void 0 ? void 0 : _versions$unstable_fe[unstablePrefix]) === true;
    })) !== null && _supportCondition$uns !== void 0 ? _supportCondition$uns : false;
    if (supportMatrixVersion) {
      supportMap.set(feature, ServerSupport.Stable);
    } else if (supportUnstablePrefixes) {
      supportMap.set(feature, ServerSupport.Unstable);
    } else {
      supportMap.set(feature, ServerSupport.Unsupported);
    }
  }
  return supportMap;
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/filter-component.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ FilterComponent)
/* harmony export */ });
/* harmony import */ var _models_thread_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/thread.ts");
/*
Copyright 2016 - 2021 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



/**
 * Checks if a value matches a given field value, which may be a * terminated
 * wildcard pattern.
 * @param actualValue -  The value to be compared
 * @param filterValue -  The filter pattern to be compared
 * @returns true if the actualValue matches the filterValue
 */
function matchesWildcard(actualValue, filterValue) {
  if (filterValue.endsWith("*")) {
    const typePrefix = filterValue.slice(0, -1);
    return actualValue.slice(0, typePrefix.length) === typePrefix;
  } else {
    return actualValue === filterValue;
  }
}
/**
 * FilterComponent is a section of a Filter definition which defines the
 * types, rooms, senders filters etc to be applied to a particular type of resource.
 * This is all ported over from synapse's Filter object.
 *
 * N.B. that synapse refers to these as 'Filters', and what js-sdk refers to as
 * 'Filters' are referred to as 'FilterCollections'.
 */
class FilterComponent {
  constructor(filterJson, userId) {
    this.filterJson = filterJson;
    this.userId = userId;
  }

  /**
   * Checks with the filter component matches the given event
   * @param event - event to be checked against the filter
   * @returns true if the event matches the filter
   */
  check(event) {
    var _event$getUnsigned, _bundledRelationships;
    const bundledRelationships = ((_event$getUnsigned = event.getUnsigned()) === null || _event$getUnsigned === void 0 ? void 0 : _event$getUnsigned["m.relations"]) || {};
    const relations = Object.keys(bundledRelationships);
    // Relation senders allows in theory a look-up of any senders
    // however clients can only know about the current user participation status
    // as sending a whole list of participants could be proven problematic in terms
    // of performance
    // This should be improved when bundled relationships solve that problem
    const relationSenders = [];
    if (this.userId && bundledRelationships !== null && bundledRelationships !== void 0 && (_bundledRelationships = bundledRelationships[_models_thread_ts__WEBPACK_IMPORTED_MODULE_0__/* .THREAD_RELATION_TYPE */ .RN.name]) !== null && _bundledRelationships !== void 0 && _bundledRelationships.current_user_participated) {
      relationSenders.push(this.userId);
    }
    return this.checkFields(event.getRoomId(), event.getSender(), event.getType(), event.getContent() ? event.getContent().url !== undefined : false, relations, relationSenders);
  }

  /**
   * Converts the filter component into the form expected over the wire
   */
  toJSON() {
    return Object.fromEntries(Object.entries({
      types: this.filterJson.types,
      not_types: this.filterJson.not_types,
      rooms: this.filterJson.rooms,
      not_rooms: this.filterJson.not_rooms,
      senders: this.filterJson.senders,
      not_senders: this.filterJson.not_senders,
      contains_url: this.filterJson.contains_url,
      [_models_thread_ts__WEBPACK_IMPORTED_MODULE_0__/* .FILTER_RELATED_BY_SENDERS */ .o1.name]: this.filterJson[_models_thread_ts__WEBPACK_IMPORTED_MODULE_0__/* .FILTER_RELATED_BY_SENDERS */ .o1.name],
      [_models_thread_ts__WEBPACK_IMPORTED_MODULE_0__/* .FILTER_RELATED_BY_REL_TYPES */ .H.name]: this.filterJson[_models_thread_ts__WEBPACK_IMPORTED_MODULE_0__/* .FILTER_RELATED_BY_REL_TYPES */ .H.name]
    }).filter(([_key, value]) => value));
  }

  /**
   * Checks whether the filter component matches the given event fields.
   * @param roomId -        the roomId for the event being checked
   * @param sender -        the sender of the event being checked
   * @param eventType -     the type of the event being checked
   * @param containsUrl -  whether the event contains a content.url field
   * @param relationTypes -  whether has aggregated relation of the given type
   * @param relationSenders - whether one of the relation is sent by the user listed
   * @returns true if the event fields match the filter
   */
  checkFields(roomId, sender, eventType, containsUrl, relationTypes, relationSenders) {
    const literalKeys = {
      rooms: function (v) {
        return roomId === v;
      },
      senders: function (v) {
        return sender === v;
      },
      types: function (v) {
        return matchesWildcard(eventType, v);
      }
    };

    // oxlint-disable-next-line guard-for-in
    for (const name in literalKeys) {
      const matchFunc = literalKeys[name];
      const notName = "not_" + name;
      const disallowedValues = this.filterJson[notName];
      if (disallowedValues !== null && disallowedValues !== void 0 && disallowedValues.some(matchFunc)) {
        return false;
      }
      const allowedValues = this.filterJson[name];
      if (allowedValues && !allowedValues.some(matchFunc)) {
        return false;
      }
    }
    const containsUrlFilter = this.filterJson.contains_url;
    if (containsUrlFilter !== undefined && containsUrlFilter !== containsUrl) {
      return false;
    }
    const relationTypesFilter = this.filterJson[_models_thread_ts__WEBPACK_IMPORTED_MODULE_0__/* .FILTER_RELATED_BY_REL_TYPES */ .H.name];
    if (relationTypesFilter !== undefined) {
      if (!this.arrayMatchesFilter(relationTypesFilter, relationTypes)) {
        return false;
      }
    }
    const relationSendersFilter = this.filterJson[_models_thread_ts__WEBPACK_IMPORTED_MODULE_0__/* .FILTER_RELATED_BY_SENDERS */ .o1.name];
    if (relationSendersFilter !== undefined) {
      if (!this.arrayMatchesFilter(relationSendersFilter, relationSenders)) {
        return false;
      }
    }
    return true;
  }
  arrayMatchesFilter(filter, values) {
    return values.length > 0 && filter.every(value => {
      return values.includes(value);
    });
  }

  /**
   * Filters a list of events down to those which match this filter component
   * @param events -  Events to be checked against the filter component
   * @returns events which matched the filter component
   */
  filter(events) {
    // oxlint-disable-next-line typescript/unbound-method
    return events.filter(this.check, this);
  }

  /**
   * Returns the limit field for a given filter component, providing a default of
   * 10 if none is otherwise specified. Cargo-culted from Synapse.
   * @returns the limit for this filter component.
   */
  limit() {
    return this.filterJson.limit !== undefined ? this.filterJson.limit : 10;
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/errors.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DW: () => (/* binding */ TokenRefreshLogoutError),
/* harmony export */   FS: () => (/* binding */ TokenRefreshError),
/* harmony export */   Hl: () => (/* binding */ HTTPError),
/* harmony export */   PL: () => (/* binding */ isMatrixErrorResponse),
/* harmony export */   Rc: () => (/* binding */ ConnectionError),
/* harmony export */   a_: () => (/* binding */ MatrixSafetyError),
/* harmony export */   eM: () => (/* binding */ safeGetRetryAfterMs),
/* harmony export */   up: () => (/* binding */ MatrixError)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _NamespacedValue_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/NamespacedValue.ts");
/* harmony import */ var _types_type_guards_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/type-guards.ts");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/*
Copyright 2022 - 2024 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

;

/**
 * Construct a generic HTTP error. This is a JavaScript Error with additional information
 * specific to HTTP responses.
 * @param msg - The error message to include.
 * @param httpStatus - The HTTP response status code.
 * @param httpHeaders - The HTTP response headers.
 */
class HTTPError extends Error {
  constructor(msg, httpStatus, httpHeaders) {
    super(msg);
    this.httpStatus = httpStatus;
    this.httpHeaders = httpHeaders;
  }

  /**
   * Check if this error was due to rate-limiting on the server side (and should therefore be retried after a delay).
   *
   * If this returns `true`, {@link getRetryAfterMs} can be called to retrieve the server-side
   * recommendation for the retry period.
   *
   * @returns Whether this error is due to rate-limiting.
   */
  isRateLimitError() {
    return this.httpStatus === 429;
  }

  /**
   * @returns The recommended delay in milliseconds to wait before retrying
   * the request that triggered this error, or null if no delay is recommended.
   * @throws Error if the recommended delay is an invalid value.
   * @see {@link safeGetRetryAfterMs} for a version of this check that doesn't throw.
   */
  getRetryAfterMs() {
    var _this$httpHeaders;
    const retryAfter = (_this$httpHeaders = this.httpHeaders) === null || _this$httpHeaders === void 0 ? void 0 : _this$httpHeaders.get("Retry-After");
    if (retryAfter != null) {
      if (/^\d+$/.test(retryAfter)) {
        const ms = Number.parseInt(retryAfter) * 1000;
        if (!Number.isFinite(ms)) {
          throw new Error("Retry-After header integer value is too large");
        }
        return ms;
      }
      const date = new Date(retryAfter);
      if (date.toUTCString() !== retryAfter) {
        throw new Error("Retry-After header value is not a valid HTTP-date or non-negative decimal integer");
      }
      return date.getTime() - Date.now();
    }
    return null;
  }
}

/**
 * Check if the given (JSON-parsed) response body looks like a Matrix error
 * response as specified in https://spec.matrix.org/v1.19/client-server-api/#standard-error-response
 *
 * @param response - the parsed response body to check
 * @returns whether the response is a valid {@link MatrixError}
 */
function isMatrixErrorResponse(response) {
  return (0,_types_type_guards_ts__WEBPACK_IMPORTED_MODULE_2__/* .isRecord */ .u4)(response) && (0,_types_type_guards_ts__WEBPACK_IMPORTED_MODULE_2__/* .hasRequiredStringProperty */ .W3)(response, "error") && (0,_types_type_guards_ts__WEBPACK_IMPORTED_MODULE_2__/* .hasRequiredStringProperty */ .W3)(response, "errcode");
}
class MatrixError extends HTTPError {
  /**
   * Construct a Matrix error. This is a JavaScript Error with additional
   * information specific to the standard Matrix error response.
   * @param errorJson - The Matrix error JSON returned from the homeserver.
   * @param httpStatus - The numeric HTTP status code given
   * @param httpHeaders - The HTTP response headers given
   */
  constructor(errorJson = {}, httpStatus, url, event, httpHeaders) {
    let message = errorJson.error || "Unknown message";
    if (httpStatus) {
      message = `[${httpStatus}] ${message}`;
    }
    if (url) {
      message = `${message} (${url})`;
    }
    super(`MatrixError: ${message}`, httpStatus, httpHeaders);
    // The Matrix 'errcode' value, e.g. "M_FORBIDDEN".
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "errcode", void 0);
    // The Matrix 'error' value.
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "error", void 0);
    // The raw Matrix error JSON used to construct this object.
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "data", void 0);
    this.url = url;
    this.event = event;
    this.errcode = errorJson.errcode;
    this.error = errorJson.error;
    this.name = errorJson.errcode || "Unknown error code";
    this.data = errorJson;
  }
  isRateLimitError() {
    return this.errcode === "M_LIMIT_EXCEEDED" || (this.errcode === "M_UNKNOWN" || this.errcode === undefined) && super.isRateLimitError();
  }
  getRetryAfterMs() {
    const headerValue = super.getRetryAfterMs();
    if (headerValue !== null) {
      return headerValue;
    }
    // Note: retry_after_ms is deprecated as of spec version v1.10
    if (this.errcode === "M_LIMIT_EXCEEDED" && "retry_after_ms" in this.data) {
      if (!Number.isInteger(this.data.retry_after_ms)) {
        throw new Error("retry_after_ms is not an integer");
      }
      return this.data.retry_after_ms;
    }
    return null;
  }

  /**
   * @returns this error expressed as a JSON payload
   * for use by Widget API error responses.
   */
  asWidgetApiErrorData() {
    var _this$httpStatus, _this$url, _this$errcode, _this$data$error;
    const headers = {};
    if (this.httpHeaders) {
      for (const [name, value] of this.httpHeaders) {
        headers[name] = value;
      }
    }
    return {
      http_status: (_this$httpStatus = this.httpStatus) !== null && _this$httpStatus !== void 0 ? _this$httpStatus : 400,
      http_headers: headers,
      url: (_this$url = this.url) !== null && _this$url !== void 0 ? _this$url : "",
      response: _objectSpread({
        errcode: (_this$errcode = this.errcode) !== null && _this$errcode !== void 0 ? _this$errcode : "M_UNKNOWN",
        error: (_this$data$error = this.data.error) !== null && _this$data$error !== void 0 ? _this$data$error : "Unknown message"
      }, this.data)
    };
  }

  /**
   * @returns a new {@link MatrixError} from a JSON payload
   * received from Widget API error responses.
   */
  static fromWidgetApiErrorData(data) {
    return new MatrixError(data.response, data.http_status, data.url, undefined, new Headers(data.http_headers));
  }
}

/**
 * @returns The recommended delay in milliseconds to wait before retrying the request.
 * @param error - The error to check for a retry delay.
 * @param defaultMs - The delay to use if the error was not due to rate-limiting or if no valid delay is recommended.
 */
function safeGetRetryAfterMs(error, defaultMs) {
  if (!(error instanceof HTTPError) || !error.isRateLimitError()) {
    return defaultMs;
  }
  try {
    var _error$getRetryAfterM;
    return (_error$getRetryAfterM = error.getRetryAfterMs()) !== null && _error$getRetryAfterM !== void 0 ? _error$getRetryAfterM : defaultMs;
  } catch {
    return defaultMs;
  }
}

/**
 * Construct a ConnectionError. This is a JavaScript Error indicating
 * that a request failed because of some error with the connection, either
 * CORS was not correctly configured on the server, the server didn't response,
 * the request timed out, or the internet connection on the client side went down.
 */
class ConnectionError extends Error {
  constructor(message, cause) {
    super(message + (cause ? `: ${cause.message}` : ""));
  }
  get name() {
    return "ConnectionError";
  }
}

/**
 * Construct a TokenRefreshError. This indicates that a request failed due to the token being expired,
 * and attempting to refresh said token also failed but in a way which was not indicative of token invalidation.
 * Assumed to be a temporary failure.
 */
class TokenRefreshError extends Error {
  constructor(cause) {
    var _cause$message;
    super((_cause$message = cause === null || cause === void 0 ? void 0 : cause.message) !== null && _cause$message !== void 0 ? _cause$message : "");
  }
  get name() {
    return "TokenRefreshError";
  }
}

/**
 * Construct a TokenRefreshError. This indicates that a request failed due to the token being expired,
 * and attempting to refresh said token failed in a way indicative of token invalidation.
 */
class TokenRefreshLogoutError extends Error {
  constructor(cause) {
    var _cause$message2;
    super((_cause$message2 = cause === null || cause === void 0 ? void 0 : cause.message) !== null && _cause$message2 !== void 0 ? _cause$message2 : "");
  }
  get name() {
    return "TokenRefreshLogoutError";
  }
}
const MatrixSafetyErrorCode = new _NamespacedValue_ts__WEBPACK_IMPORTED_MODULE_1__/* .NamespacedValue */ .xu(null, "ORG.MATRIX.MSC4387_SAFETY");

/***
 * This error is thrown when the homeserver refuses to handle an action due to a
 * safety concern.
 * @see https://github.com/matrix-org/matrix-spec-proposals/pull/4387
 */
class MatrixSafetyError extends MatrixError {
  constructor(...props) {
    super(...props);
    /**
     * The kinds of harms detected by the server.
     * @see https://github.com/matrix-org/matrix-spec-proposals/pull/4387 for a list of spec defined harms.
     */
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "harms", void 0);
    /**
     * The date at which a request can be reattempted.
     */
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "expiry", void 0);
    const body = props[0];
    this.harms = new Set(body && "harms" in body && Array.isArray(body.harms) ? body.harms : []);
    this.message = `${super.message} (${[...this.harms].join(", ")})`;
    if (body && "expiry" in body && typeof body.expiry === "number") {
      this.expiry = new Date(body.expiry);
    }
  }
}
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "Vc", 0, /* binding */ MatrixSafetyErrorCode
/* harmony export */ ]);


/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/fetch.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H: () => (/* binding */ FetchHttpApi)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/utils.ts
var utils = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/utils.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/method.ts
var http_api_method = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/method.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/errors.ts
var errors = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/errors.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/interface.ts
var http_api_interface = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/interface.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/utils.ts + 1 modules
var http_api_utils = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/utils.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/logging.ts
var logging = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/logging.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/oauth/error.ts
var oauth_error = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/oauth/error.ts");
;// ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/oauth/tokenRefresher.ts

/*
Copyright 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



/**
 * Class responsible for refreshing OAuth2 access tokens
 */
class TokenRefresher {
  constructor(auth, onRefresh) {
    (0,defineProperty/* default */.A)(this, "inflightRefreshRequest", void 0);
    this.auth = auth;
    this.onRefresh = onRefresh;
  }

  /**
   * Attempt token refresh using given refresh token
   * @param refreshToken - refresh token to use in request with token issuer
   * @param opts - optional settings for the request. If a refresh is already in flight, that request's
   *     settings apply and these are ignored.
   * @throws when token refresh fails
   */
  async refreshTokens(refreshToken, opts) {
    if (!this.inflightRefreshRequest) {
      this.inflightRefreshRequest = this.getNewTokens(refreshToken, opts);
    }
    try {
      const tokens = await this.inflightRefreshRequest;
      return tokens;
    } catch (e) {
      // If we encounter a 40x error then signal that it should cause a logout by upgrading it to a TokenRefreshLogoutError
      if (e instanceof errors/* HTTPError */.Hl && this.shouldLogoutOnError(e)) {
        throw new errors/* TokenRefreshLogoutError */.DW(e);
      }
      throw e;
    } finally {
      this.inflightRefreshRequest = undefined;
    }
  }

  /**
   * Revoke a token with the OP, e.g. as part of logging out.
   * @param token - the token to revoke
   * @param type - the type of token, acts as a hint to the OP
   * @param opts - optional settings for the request
   * @throws when revocation fails
   */
  async revokeToken(token, type, opts) {
    await this.auth.revokeToken(token, type, opts);
  }
  shouldLogoutOnError(error) {
    // Treat as logout as per https://spec.matrix.org/v1.18/client-server-api/#refresh-token-grant
    // after making sure it is an RFC 6749 section 5.2 error response
    return error instanceof oauth_error/* OAuth2HTTPError */.w1 && typeof error.httpStatus === "number" && error.httpStatus < 500 && error.httpStatus >= 400;
  }
  async getNewTokens(refreshToken, opts) {
    const requestStart = Date.now();
    const response = await this.auth.performRefreshTokenGrant(refreshToken, opts);
    const tokens = {
      accessToken: response.access_token,
      refreshToken: response.refresh_token,
      // We use the request start time to calculate the expiry time as we don't know when the server received our request
      expiry: response.expires_in ? new Date(requestStart + response.expires_in * 1000) : undefined
    };
    await this.onRefresh(tokens);
    return tokens;
  }
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/oauth/index.ts + 1 modules
var oauth = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/oauth/index.ts");
;// ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/refresh.ts

/*
Copyright 2025 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/






/**
 * This is an internal module. See {@link MatrixHttpApi} for the public class.
 */

let TokenRefreshOutcome = /*#__PURE__*/function (TokenRefreshOutcome) {
  TokenRefreshOutcome["Success"] = "success";
  TokenRefreshOutcome["Failure"] = "failure";
  TokenRefreshOutcome["Logout"] = "logout";
  return TokenRefreshOutcome;
}({});

// If the token expires in less than this time amount of time, we will eagerly refresh it before making the intended request.
const REFRESH_IF_TOKEN_EXPIRES_WITHIN_MS = 500;
// If we get an unknown token error and the token expires in less than this time amount of time, we will refresh it before making the intended request.
// Otherwise, we will error as the token should not have expired yet and we need to avoid retrying indefinitely.
const REFRESH_ON_ERROR_IF_TOKEN_EXPIRES_WITHIN_MS = 60 * 1000;
/**
 * This class is responsible for managing the access token and refresh token for authenticated requests.
 * It will automatically refresh the tokens when the access token is about to expire and can handle
 * Unknown Token errors (via {@link TokenManager.handleUnknownToken})
 *
 * It will update the {@link Opts} object with new tokens as they are refreshed, and also call the {@link IHttpOpts.onTokenRefresh} callback if provided.
 */
class TokenManager {
  /**
   * @param opts - the HTTP options, which are updated in place as tokens are refreshed.
   * @param getAbortSignal - optional callback returning the signal which, when aborted, should abort any
   *     in-flight request. Called at the start of each such request.
   */
  constructor(opts, getAbortSignal) {
    /**
     * Promise used to block authenticated requests during a token refresh to avoid repeated expected errors.
     * @private
     */
    (0,defineProperty/* default */.A)(this, "tokenRefreshPromise", void 0);
    (0,defineProperty/* default */.A)(this, "latestTokenRefreshExpiry", void 0);
    // The object at the OAuth API layer that actually does the refreshing
    // This needs OAuth params to be fetched before it can be constructed so it starts
    // off as undefined and is constructed once we are able to do so.
    (0,defineProperty/* default */.A)(this, "tokenRefresher", void 0);
    // Tracks an in-progress attempt to discover the OAuth2 auth server metadata and construct
    // `tokenRefresher`, so that concurrent callers wait for (and share the result of) the same attempt
    // rather than racing to discover it independently.
    (0,defineProperty/* default */.A)(this, "tokenRefresherPromise", void 0);
    this.opts = opts;
    this.getAbortSignal = getAbortSignal;
  }
  /**
   * This function is called before every request to ensure that the access token is valid.
   * @returns a snapshot containing the access token and other properties which must be passed to the handleUnknownToken
   *     handler if an M_UNKNOWN_TOKEN error is encountered.
   */
  async prepareForRequest() {
    // Ensure our token is refreshed before we build the headers/params
    await this.refreshIfNeeded();
    return {
      accessToken: this.opts.accessToken,
      refreshToken: this.opts.refreshToken,
      expiry: this.latestTokenRefreshExpiry
    };
  }
  async refreshIfNeeded() {
    if (this.tokenRefreshPromise) {
      return this.tokenRefreshPromise;
    }
    // If we don't know the token expiry, we can't eagerly refresh
    if (!this.latestTokenRefreshExpiry) return;
    const expiresIn = this.latestTokenRefreshExpiry.getTime() - Date.now();
    if (expiresIn <= REFRESH_IF_TOKEN_EXPIRES_WITHIN_MS) {
      await this._handleUnknownToken();
    }
  }

  /**
   * This function is called when an M_UNKNOWN_TOKEN error is encountered.
   * It will attempt to refresh the access token if it is unknown, and will return a TokenRefreshOutcome.
   * @param snapshot - the snapshot returned by prepareForRequest
   * @param attempt - the number of attempts made for this request so far
   * @returns a TokenRefreshOutcome indicating the result of the refresh attempt
   */
  async handleUnknownToken(snapshot, attempt) {
    return this._handleUnknownToken(snapshot, attempt);
  }
  async _handleUnknownToken(snapshot, attempt) {
    if (snapshot !== null && snapshot !== void 0 && snapshot.expiry) {
      // If our token is unknown, but it should not have expired yet, then we should not refresh
      const expiresIn = snapshot.expiry.getTime() - Date.now();
      // If it still has plenty of time left on the clock, we assume something else must be wrong and
      // do not refresh. Otherwise if it's expired, or will soon, we try refreshing.
      if (expiresIn >= REFRESH_ON_ERROR_IF_TOKEN_EXPIRES_WITHIN_MS) {
        return TokenRefreshOutcome.Logout;
      }
    }
    if (!snapshot || (snapshot === null || snapshot === void 0 ? void 0 : snapshot.accessToken) === this.opts.accessToken) {
      var _this$tokenRefreshPro;
      // If we have a snapshot, but the access token is the same as the current one then a refresh
      // did not happen behind us but one may be ongoing anyway
      (_this$tokenRefreshPro = this.tokenRefreshPromise) !== null && _this$tokenRefreshPro !== void 0 ? _this$tokenRefreshPro : this.tokenRefreshPromise = this.doTokenRefresh(attempt);
      try {
        return await this.tokenRefreshPromise;
      } finally {
        this.tokenRefreshPromise = undefined;
      }
    }

    // We may end up here if the token was refreshed in the background due to another request
    return TokenRefreshOutcome.Success;
  }

  /**
   * Attempt to refresh access tokens.
   * On success, sets new access and refresh tokens in opts.
   * @returns Promise that resolves to a boolean - true when token was refreshed successfully
   */
  async doTokenRefresh(attempt) {
    if (!this.opts.refreshToken || !this.opts.oauth2ClientConfig) {
      var _this$opts$logger;
      (_this$opts$logger = this.opts.logger) === null || _this$opts$logger === void 0 || _this$opts$logger.error("Unable to refresh token - no refresh token or OAuth2 client config");
      return TokenRefreshOutcome.Logout;
    }
    if (attempt && attempt > 1) {
      // Exponential backoff to ensure we don't trash the server, up to 2^5 seconds
      await (0,utils/* sleep */.yy)(1000 * Math.min(32, 2 ** attempt));
    }
    try {
      var _this$opts$logger2, _this$getAbortSignal, _this$opts$logger3;
      (_this$opts$logger2 = this.opts.logger) === null || _this$opts$logger2 === void 0 || _this$opts$logger2.debug("Attempting to refresh token");
      const tokenRefresher = await this.ensureTokenRefresher();
      if (!tokenRefresher) {
        // We already checked `oauth2ClientConfig` is set above, so this should be unreachable.
        return TokenRefreshOutcome.Logout;
      }
      const {
        accessToken,
        refreshToken,
        expiry
      } = await tokenRefresher.refreshTokens(this.opts.refreshToken, {
        abortSignal: (_this$getAbortSignal = this.getAbortSignal) === null || _this$getAbortSignal === void 0 ? void 0 : _this$getAbortSignal.call(this)
      });
      this.opts.accessToken = accessToken;
      this.opts.refreshToken = refreshToken;
      this.latestTokenRefreshExpiry = expiry;
      (_this$opts$logger3 = this.opts.logger) === null || _this$opts$logger3 === void 0 || _this$opts$logger3.debug("... token refresh complete, new token expiry:", expiry);

      // successfully got new tokens
      return TokenRefreshOutcome.Success;
    } catch (error) {
      var _this$opts$logger5;
      // If we get a TokenError or MatrixError, we should log out, otherwise assume transient
      if (error instanceof errors/* TokenRefreshLogoutError */.DW || error instanceof errors/* MatrixError */.up) {
        var _this$opts$logger4;
        (_this$opts$logger4 = this.opts.logger) === null || _this$opts$logger4 === void 0 || _this$opts$logger4.error("Failed to refresh token", error);
        return TokenRefreshOutcome.Logout;
      }
      (_this$opts$logger5 = this.opts.logger) === null || _this$opts$logger5 === void 0 || _this$opts$logger5.warn("Failed to refresh token", error);
      return TokenRefreshOutcome.Failure;
    }
  }

  /**
   * Attempt to revoke the current access and refresh tokens with the OAuth2 authorization server, e.g. as
   * part of logging out. Does nothing if this is not an OAuth2-native session (ie. no `oauth2ClientConfig`
   * was supplied).
   * @throws when discovery of the auth server metadata, or revocation of either token, fails
   */
  async revokeTokens() {
    var _this$getAbortSignal2;
    const tokenRefresher = await this.ensureTokenRefresher();
    if (!tokenRefresher) return;
    const requestOpts = {
      abortSignal: (_this$getAbortSignal2 = this.getAbortSignal) === null || _this$getAbortSignal2 === void 0 ? void 0 : _this$getAbortSignal2.call(this)
    };
    await Promise.all([this.opts.accessToken ? tokenRefresher.revokeToken(this.opts.accessToken, "access_token", requestOpts) : undefined, this.opts.refreshToken ? tokenRefresher.revokeToken(this.opts.refreshToken, "refresh_token", requestOpts) : undefined].filter(p => p !== undefined));
  }

  /**
   * Lazily constructs (and caches) the {@link TokenRefresher} used to talk to the OAuth2 authorization
   * server, discovering its metadata first if this is the first time it's needed.
   * @returns the token refresher, or undefined if no `oauth2ClientConfig` was supplied
   * @throws when discovery of the auth server metadata fails in a way that isn't worth retrying
   */
  async ensureTokenRefresher() {
    if (this.tokenRefresher) return this.tokenRefresher;
    if (!this.opts.oauth2ClientConfig) return undefined;
    if (!this.opts.authMetadataCallback) return undefined;
    if (!this.tokenRefresherPromise) {
      this.tokenRefresherPromise = this.discoverTokenRefresher(this.opts.oauth2ClientConfig, this.opts.authMetadataCallback);
    }
    try {
      this.tokenRefresher = await this.tokenRefresherPromise;
      return this.tokenRefresher;
    } finally {
      // Either we now have `tokenRefresher` cached and won't need this again, or discovery
      // failed and a future call should be free to retry from scratch.
      this.tokenRefresherPromise = undefined;
    }
  }

  /**
   * Discovers the OAuth2 auth server metadata and constructs the OAuth2 client and token refresher from it.
   * Throws if the request fails.
   */
  async discoverTokenRefresher(config, authMetaDataCallback) {
    const metadata = await authMetaDataCallback();
    const oauth2 = new oauth/* OAuth2 */.sU(metadata, {
      clientId: config.clientId,
      deviceId: config.deviceId
    }, this.opts.logger, {
      fetchFn: this.opts.fetchFn
    });
    return new TokenRefresher(oauth2, tokens => {
      var _this$opts$onTokenRef, _this$opts;
      return (_this$opts$onTokenRef = (_this$opts = this.opts).onTokenRefresh) === null || _this$opts$onTokenRef === void 0 ? void 0 : _this$opts$onTokenRef.call(_this$opts, tokens);
    });
  }
}
;// ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/fetch.ts

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/*
Copyright 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * This is an internal module. See {@link MatrixHttpApi} for the public class.
 */

;






class FetchHttpApi {
  constructor(eventEmitter, opts) {
    var _opts$useAuthorizatio;
    (0,defineProperty/* default */.A)(this, "abortController", new AbortController());
    (0,defineProperty/* default */.A)(this, "tokenManager", void 0);
    this.eventEmitter = eventEmitter;
    this.opts = opts;
    (0,utils/* checkObjectHasKeys */.UB)(opts, ["baseUrl", "prefix"]);
    if (!opts.onlyData) {
      throw new Error("Constructing FetchHttpApi without `onlyData=true` is no longer supported.");
    }
    opts.useAuthorizationHeader = (_opts$useAuthorizatio = opts.useAuthorizationHeader) !== null && _opts$useAuthorizatio !== void 0 ? _opts$useAuthorizatio : true;

    // Token requests share this instance's abort controller, so that `abort()` aborts
    // them along with any in-flight C-S API requests.
    this.tokenManager = new TokenManager(opts, () => this.abortController.signal);
  }
  abort() {
    this.abortController.abort();
    this.abortController = new AbortController();
  }

  /**
   * Attempt to revoke the current access and refresh tokens with the OAuth2 authorization server, e.g. as
   * part of logging out an OAuth2-native session. Does nothing if `opts.oauth2ClientConfig` was not supplied.
   * @throws when discovery of the auth server metadata, or revocation of either token, fails
   */
  async revokeOAuthTokens() {
    return this.tokenManager.revokeTokens();
  }
  fetch(resource, options) {
    if (this.opts.fetchFn) {
      return this.opts.fetchFn(resource, options);
    }
    return globalThis.fetch(resource, options);
  }

  /**
   * Sets the base URL for the identity server
   * @param url - The new base url
   */
  setIdBaseUrl(url) {
    this.opts.idBaseUrl = url;
  }
  idServerRequest(method, path, params, prefix, accessToken) {
    if (!this.opts.idBaseUrl) {
      throw new Error("No identity server base URL set");
    }
    let queryParams = undefined;
    let body = undefined;
    if (method === http_api_method/* Method */.I.Get) {
      queryParams = params;
    } else {
      body = params;
    }
    const fullUri = this.getUrl(path, queryParams, prefix, this.opts.idBaseUrl);
    const opts = {
      json: true,
      headers: {}
    };
    if (accessToken) {
      opts.headers.Authorization = `Bearer ${accessToken}`;
    }
    return this.requestOtherUrl(method, fullUri, body, opts);
  }

  /**
   * Perform an authorised request to the homeserver.
   * @param method - The HTTP method e.g. "GET".
   * @param path - The HTTP path <b>after</b> the supplied prefix e.g.
   * "/createRoom".
   *
   * @param queryParams - A dict of query params (these will NOT be
   * urlencoded). If unspecified, there will be no query params.
   *
   * @param body - The HTTP JSON body.
   *
   * @param paramOpts - additional options.
   * When `paramOpts.doNotAttemptTokenRefresh` is true, token refresh will not be attempted
   * when an expired token is encountered. Used to only attempt token refresh once.
   *
   * @returns The parsed response.
   * @throws Error if a problem occurred. This includes network problems and Matrix-specific error JSON.
   */
  authedRequest(method, path, queryParams = {}, body, paramOpts = {}) {
    return this.doAuthedRequest(1, method, path, queryParams, body, paramOpts);
  }

  // Wrapper around public method authedRequest to allow for tracking retry attempt counts
  async doAuthedRequest(attempt, method, path, queryParams, body, paramOpts = {}) {
    // avoid mutating paramOpts so they can be used on retry
    const opts = (0,utils/* deepCopy */.A4)(paramOpts);
    // we have to manually copy the abortSignal over as it is not a plain object
    opts.abortSignal = paramOpts.abortSignal;

    // Take a snapshot of the current token state before we start the request so we can reference it if we error
    const requestSnapshot = await this.tokenManager.prepareForRequest();
    if (requestSnapshot.accessToken) {
      if (this.opts.useAuthorizationHeader) {
        if (!opts.headers) {
          opts.headers = {};
        }
        if (!opts.headers.Authorization) {
          opts.headers.Authorization = `Bearer ${requestSnapshot.accessToken}`;
        }
        if (queryParams.access_token) {
          delete queryParams.access_token;
        }
      } else if (!queryParams.access_token) {
        queryParams.access_token = requestSnapshot.accessToken;
      }
    }
    try {
      const response = await this.request(method, path, queryParams, body, opts);
      return response;
    } catch (error) {
      if (!(error instanceof errors/* MatrixError */.up)) {
        throw error;
      }
      if (error.errcode === "M_UNKNOWN_TOKEN") {
        const outcome = await this.tokenManager.handleUnknownToken(requestSnapshot, attempt);
        if (outcome === TokenRefreshOutcome.Success) {
          // if we got a new token retry the request
          return this.doAuthedRequest(attempt + 1, method, path, queryParams, body, paramOpts);
        }
        if (outcome === TokenRefreshOutcome.Failure) {
          throw new errors/* TokenRefreshError */.FS(error);
        }
        if (!(opts !== null && opts !== void 0 && opts.inhibitLogoutEmit)) {
          this.eventEmitter.emit(http_api_interface/* HttpApiEvent */.X.SessionLoggedOut, error);
        }
      } else if (error.errcode == "M_CONSENT_NOT_GIVEN") {
        this.eventEmitter.emit(http_api_interface/* HttpApiEvent */.X.NoConsent, error.message, error.data.consent_uri);
      }
      throw error;
    }
  }

  /**
   * Perform a request to the homeserver without any credentials.
   * @param method - The HTTP method e.g. "GET".
   * @param path - The HTTP path <b>after</b> the supplied prefix e.g.
   * "/createRoom".
   *
   * @param queryParams - A dict of query params (these will NOT be
   * urlencoded). If unspecified, there will be no query params.
   *
   * @param body - The HTTP JSON body.
   *
   * @param opts - additional options
   *
   * @returns The parsed response.
   * @throws Error if a problem occurred. This includes network problems and Matrix-specific error JSON.
   */
  request(method, path, queryParams, body, opts) {
    const fullUri = this.getUrl(path, queryParams, opts === null || opts === void 0 ? void 0 : opts.prefix, opts === null || opts === void 0 ? void 0 : opts.baseUrl);
    return this.requestOtherUrl(method, fullUri, body, opts);
  }

  /**
   * Perform a request to an arbitrary URL.
   * @param method - The HTTP method e.g. "GET".
   * @param url - The HTTP URL object.
   *
   * @param body - The HTTP JSON body.
   *
   * @param opts - additional options
   *
   * @returns The parsed response.
   * @throws Error if a problem occurred. This includes network problems and Matrix-specific error JSON.
   */
  async requestOtherUrl(method, url, body, opts = {}) {
    var _this$opts$logger, _opts$localTimeoutMs, _opts$keepAlive, _body$constructor;
    if (opts.json !== undefined && opts.rawResponseBody !== undefined) {
      throw new Error("Invalid call to `FetchHttpApi` sets both `opts.json` and `opts.rawResponseBody`");
    }
    const urlForLogs = (0,logging/* sanitizeUrlForLogs */.N)(url);
    (_this$opts$logger = this.opts.logger) === null || _this$opts$logger === void 0 || _this$opts$logger.debug(`FetchHttpApi: --> ${method} ${urlForLogs}`);
    const headers = Object.assign({}, opts.headers || {});
    const jsonResponse = !opts.rawResponseBody && opts.json !== false;
    if (jsonResponse) {
      if (!headers["Accept"]) {
        headers["Accept"] = "application/json";
      }
    }
    const timeout = (_opts$localTimeoutMs = opts.localTimeoutMs) !== null && _opts$localTimeoutMs !== void 0 ? _opts$localTimeoutMs : this.opts.localTimeoutMs;
    const keepAlive = (_opts$keepAlive = opts.keepAlive) !== null && _opts$keepAlive !== void 0 ? _opts$keepAlive : false;
    const signals = [this.abortController.signal];
    if (timeout !== undefined) {
      signals.push((0,http_api_utils/* timeoutSignal */._)(timeout));
    }
    if (opts.abortSignal) {
      signals.push(opts.abortSignal);
    }

    // If the body is an object, encode it as JSON and set the `Content-Type` header,
    // unless that has been explicitly inhibited by setting `opts.json: false`.
    // We can't use getPrototypeOf here as objects made in other contexts e.g. over postMessage won't have same ref
    let data;
    if (opts.json !== false && (body === null || body === void 0 || (_body$constructor = body.constructor) === null || _body$constructor === void 0 ? void 0 : _body$constructor.name) === Object.name) {
      data = JSON.stringify(body);
      if (!headers["Content-Type"]) {
        headers["Content-Type"] = "application/json";
      }
    } else {
      data = body;
    }
    const {
      signal,
      cleanup
    } = (0,http_api_utils/* anySignal */.JG)(signals);

    // Set cache mode based on presence of Authorization header.
    // Browsers/proxies do not cache responses to requests with Authorization headers.
    // So specifying "no-cache" is redundant, and actually prevents caching
    // of preflight requests in CORS scenarios. As such, we only set "no-cache"
    // when there is no Authorization header.
    const cacheMode = "Authorization" in headers ? undefined : "no-cache";
    let res;
    const start = Date.now();
    try {
      var _this$opts$logger2;
      res = await this.fetch(url, {
        signal,
        method,
        body: data,
        headers,
        mode: "cors",
        redirect: "follow",
        referrer: "",
        referrerPolicy: "no-referrer",
        cache: cacheMode,
        credentials: "omit",
        // we send credentials via headers
        keepalive: keepAlive,
        priority: opts.priority
      });
      (_this$opts$logger2 = this.opts.logger) === null || _this$opts$logger2 === void 0 || _this$opts$logger2.debug(`FetchHttpApi: <-- ${method} ${urlForLogs} [${Date.now() - start}ms ${res.status}]`);
    } catch (e) {
      var _this$opts$logger3;
      (_this$opts$logger3 = this.opts.logger) === null || _this$opts$logger3 === void 0 || _this$opts$logger3.debug(`FetchHttpApi: <-- ${method} ${urlForLogs} [${Date.now() - start}ms ${e}]`);
      if (e.name === "AbortError") {
        throw e;
      }
      throw new errors/* ConnectionError */.Rc("fetch failed", e);
    } finally {
      cleanup();
    }
    if (!res.ok) {
      throw (0,http_api_utils/* parseErrorResponse */.xy)(res, await res.text());
    }
    if (opts.rawResponseBody) {
      return await res.blob();
    } else if (jsonResponse) {
      return await res.json();
    } else {
      return await res.text();
    }
  }

  /**
   * Form and return a homeserver request URL based on the given path params and prefix.
   * @param path - The HTTP path <b>after</b> the supplied prefix e.g. "/createRoom".
   * @param queryParams - A dict of query params (these will NOT be urlencoded).
   * @param prefix - The full prefix to use e.g. "/_matrix/client/v2_alpha", defaulting to this.opts.prefix.
   * @param baseUrl - The baseUrl to use e.g. "https://matrix.org", defaulting to this.opts.baseUrl.
   * @returns URL
   */
  getUrl(path, queryParams, prefix, baseUrl) {
    const baseUrlWithFallback = baseUrl !== null && baseUrl !== void 0 ? baseUrl : this.opts.baseUrl;
    const baseUrlWithoutTrailingSlash = baseUrlWithFallback.endsWith("/") ? baseUrlWithFallback.slice(0, -1) : baseUrlWithFallback;
    const url = new URL(baseUrlWithoutTrailingSlash + (prefix !== null && prefix !== void 0 ? prefix : this.opts.prefix) + path);
    // If there are any params, encode and append them to the URL.
    if (this.opts.extraParams || queryParams) {
      const mergedParams = _objectSpread(_objectSpread({}, this.opts.extraParams), queryParams);
      (0,utils/* encodeParams */.hm)(mergedParams, url.searchParams);
    }
    return url;
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/interface.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ HttpApiEvent)
/* harmony export */ });
/*
Copyright 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Unencrypted access and (optional) refresh token
 */

/**
 * A callback function called when tokens are refreshed such that stored tokens can be updated with
 * the refreshed ones.
 */

/**
 * Configuration required for {@link IHttpOpts} to allow the SDK to manage the full lifecycle of tokens for an
 * OAuth2-native session (as per MSC2965/MSC3861): discovering the delegated auth server's metadata, refreshing
 * access/refresh tokens, and revoking them (e.g. on logout).
 *
 * The SDK constructs the underlying OAuth2 client itself, lazily, the first time it is actually needed (so that,
 * for example, a client started with no network connection does not fail to ever set up token refresh).
 */

/** Options object for `FetchHttpApi` and {@link MatrixHttpApi}. */

/** Options object for `FetchHttpApi.requestOtherUrl`. */

let HttpApiEvent = /*#__PURE__*/function (HttpApiEvent) {
  HttpApiEvent["SessionLoggedOut"] = "Session.logged_out";
  HttpApiEvent["NoConsent"] = "no_consent";
  return HttpApiEvent;
}({});

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/logging.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ sanitizeUrlForLogs)
/* harmony export */ });
/*
Copyright 2026 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Produce a version of the given URL which is safe to write to logs, by redacting the values of any query parameters,
 * as they may contain secrets.
 *
 * @internal
 * @param url - the URL to sanitize.
 * @returns the sanitized URL, or `"??"` if the URL could not be parsed.
 */
function sanitizeUrlForLogs(url) {
  try {
    let asUrl;
    if (typeof url === "string") {
      asUrl = new URL(url);
    } else {
      asUrl = url;
    }
    // Remove the values of any URL params that could contain potential secrets
    const sanitizedQs = new URLSearchParams();
    for (const key of asUrl.searchParams.keys()) {
      sanitizedQs.append(key, "xxx");
    }
    const sanitizedQsString = sanitizedQs.toString();
    const sanitizedQsUrlPiece = sanitizedQsString ? `?${sanitizedQsString}` : "";
    return asUrl.origin + asUrl.pathname + sanitizedQsUrlPiece;
  } catch {
    // defensive coding for malformed url
    return "??";
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/method.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ Method)
/* harmony export */ });
/*
Copyright 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

let Method = /*#__PURE__*/function (Method) {
  Method["Get"] = "GET";
  Method["Put"] = "PUT";
  Method["Post"] = "POST";
  Method["Delete"] = "DELETE";
  Method["Options"] = "OPTIONS";
  Method["Head"] = "HEAD";
  Method["Patch"] = "PATCH";
  return Method;
}({});

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/prefix.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pw: () => (/* binding */ IdentityPrefix),
/* harmony export */   iD: () => (/* binding */ ClientPrefix),
/* harmony export */   zs: () => (/* binding */ MediaPrefix)
/* harmony export */ });
/*
Copyright 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

let ClientPrefix = /*#__PURE__*/function (ClientPrefix) {
  /**
   * A constant representing the URI path for Client-Server API endpoints versioned at v1.
   */
  ClientPrefix["V1"] = "/_matrix/client/v1";
  /**
   * A constant representing the URI path for Client-Server API endpoints versioned at v3.
   */
  ClientPrefix["V3"] = "/_matrix/client/v3";
  /**
   * A constant representing the URI path for as-yet unspecified Client-Server HTTP APIs.
   */
  ClientPrefix["Unstable"] = "/_matrix/client/unstable";
  return ClientPrefix;
}({});
let IdentityPrefix = /*#__PURE__*/function (IdentityPrefix) {
  /**
   * URI path for the v2 identity API
   */
  IdentityPrefix["V2"] = "/_matrix/identity/v2";
  return IdentityPrefix;
}({});
let MediaPrefix = /*#__PURE__*/function (MediaPrefix) {
  /**
   * A constant representing the URI path for Client-Server API Media endpoints versioned at v1.
   */
  MediaPrefix["V1"] = "/_matrix/media/v1";
  /**
   * A constant representing the URI path for Client-Server API Media endpoints versioned at v3.
   */
  MediaPrefix["V3"] = "/_matrix/media/v3";
  return MediaPrefix;
}({});

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/utils.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  JG: () => (/* binding */ anySignal),
  fZ: () => (/* binding */ calculateRetryBackoff),
  xy: () => (/* binding */ parseErrorResponse),
  Y6: () => (/* binding */ retryNetworkOperation),
  _: () => (/* binding */ timeoutSignal)
});

;// ../../node_modules/.pnpm/content-type@3.1.1/node_modules/content-type/dist/index.js
/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
const SP = 32; // " "
const HTAB = 9; // "\t"
const SEMI = 59; // ";"
const EQ = 61; // "="
const DQUOTE = 34; // '"'
const BSLASH = 92; // "\\"
const COMMA = 44; // ","
const LOWER_CASE = 1;
const OWS = 2;
const SEMI_FLAG = 4;
const COMMA_FLAG = 8;
const TOKEN_FLAG = 16;
const NON_ASCII = 0xff00;
const CASE_FLAGS = LOWER_CASE | NON_ASCII;
/**
 * Character flags used to normalize HTTP field values while scanning.
 * Out-of-range reads intentionally coerce to zero in bitwise expressions.
 */
const CHAR_MAP = new Uint8Array(0x100);
CHAR_MAP[HTAB] |= OWS;
CHAR_MAP[SP] |= OWS;
CHAR_MAP[SEMI] |= SEMI_FLAG;
CHAR_MAP[COMMA] |= COMMA_FLAG;
for (let code = 0x80 /* non-ASCII */; code <= 0xff; code++) {
    CHAR_MAP[code] |= LOWER_CASE;
}
for (const char of "!#$%&'*+-.^_`|~") {
    CHAR_MAP[char.charCodeAt(0)] |= TOKEN_FLAG;
}
for (let code = 0x30 /* 0 */; code <= 0x39 /* 9 */; code++) {
    CHAR_MAP[code] |= TOKEN_FLAG;
}
for (let code = 0x41 /* A */; code <= 0x5a /* Z */; code++) {
    CHAR_MAP[code] |= LOWER_CASE | TOKEN_FLAG;
}
for (let code = 0x61 /* a */; code <= 0x7a /* z */; code++) {
    CHAR_MAP[code] |= TOKEN_FLAG;
}
/**
 * Null object perf optimization. Faster than `Object.create(null)` and `{ __proto__: null }`.
 */
const NullObject = /* @__PURE__ */ (() => {
    const C = function () { };
    C.prototype = Object.create(null);
    return C;
})();
/**
 * Validate a type string against RFC 9110.
 */
function isTypeValid(type, start = 0, end = type.length) {
    let hasSlash = false;
    for (let index = start; index < end; index++) {
        const code = type.charCodeAt(index);
        if (code === 47 /* / */) {
            if (hasSlash || index === start || index >= end - 1)
                return false;
            hasSlash = true;
        }
        else if (!isTokenCode(code)) {
            return false;
        }
    }
    return hasSlash;
}
/**
 * Validate a token against RFC 9110.
 */
function isTokenValid(token, start = 0, end = token.length) {
    if (start >= end)
        return false;
    for (let index = start; index < end; index++) {
        if (!isTokenCode(token.charCodeAt(index)))
            return false;
    }
    return true;
}
/**
 * Check whether a character code belongs to the token production in RFC 9110.
 */
function isTokenCode(code) {
    return (CHAR_MAP[code] & TOKEN_FLAG) !== 0;
}
/**
 * Serialize a parameter value.
 */
function parameterValue(str) {
    const len = str.length;
    if (len === 0)
        return '""';
    let index = 0;
    while (index < len && isTokenCode(str.charCodeAt(index)))
        index++;
    if (index === len)
        return str;
    let result = '"';
    let start = 0;
    while (index < len) {
        const code = str.charCodeAt(index);
        if (code !== HTAB && (code < SP || code === 127 || code > 255)) {
            throw new TypeError(`Invalid parameter value: ${str}`);
        }
        if (code === 34 /* " */ || code === 92 /* \\ */) {
            result += `${str.slice(start, index)}\\`;
            start = index;
        }
        index++;
    }
    return `${result}${str.slice(start)}"`;
}
/**
 * Format an object into a `Content-Type` header.
 */
function format(obj) {
    const { type, parameters } = obj;
    if (!type || !isTypeValid(type)) {
        throw new TypeError(`Invalid type: ${type}`);
    }
    let result = type;
    if (parameters) {
        for (const param of Object.keys(parameters)) {
            if (!isTokenValid(param)) {
                throw new TypeError(`Invalid parameter name: ${param}`);
            }
            result += `; ${param}=${parameterValue(parameters[param])}`;
        }
    }
    return result;
}
/**
 * Parse a `Content-Type` header.
 */
function parse(header, options) {
    const stopFlags = SEMI_FLAG | (options?.comma === true ? COMMA_FLAG : 0);
    const len = header.length;
    let valueStart = options?.start ?? 0;
    while ((CHAR_MAP[header.charCodeAt(valueStart)] & OWS) !== 0) {
        valueStart++;
    }
    let index = valueStart;
    let typeFlags = 0;
    let whitespace = -1;
    let stop = options?.parameters === false ? COMMA_FLAG : 0;
    while (index < len) {
        const code = header.charCodeAt(index);
        const flags = CHAR_MAP[code];
        if ((flags & stopFlags) !== 0) {
            stop |= flags & COMMA_FLAG;
            break;
        }
        if ((flags & OWS) !== 0) {
            if (whitespace === -1)
                whitespace = index;
        }
        else {
            whitespace = -1;
        }
        typeFlags |= (code & NON_ASCII) | flags;
        index++;
    }
    const valueEnd = whitespace === -1 ? index : whitespace;
    const value = header.slice(valueStart, valueEnd);
    const type = (typeFlags & CASE_FLAGS) === 0 ? value : value.toLowerCase();
    if (index === len || stop !== 0) {
        return { type, index, parameters: new NullObject() };
    }
    return parseParameters(header, type, index, len, stopFlags);
}
/**
 * Parses the parameters of a `Content-Type` header starting at the given index.
 */
function parseParameters(header, type, index, len, stopFlags) {
    const parameters = new NullObject();
    parameter: while (index < len) {
        index++; // Skip over ;
        while ((CHAR_MAP[header.charCodeAt(index)] & OWS) !== 0) {
            index++;
        }
        const keyStart = index;
        let keyFlags = 0;
        let keyWhitespace = -1;
        while (index < len) {
            const code = header.charCodeAt(index);
            const flags = CHAR_MAP[code];
            if ((flags & stopFlags) !== 0) {
                if ((flags & COMMA_FLAG) !== 0)
                    break parameter;
                continue parameter;
            }
            if (code === EQ) {
                const keyEnd = keyWhitespace === -1 ? index : keyWhitespace;
                const value = header.slice(keyStart, keyEnd);
                const key = (keyFlags & CASE_FLAGS) === 0 ? value : value.toLowerCase();
                index++;
                while ((CHAR_MAP[header.charCodeAt(index)] & OWS) !== 0) {
                    index++;
                }
                if (index < len && header.charCodeAt(index) === DQUOTE) {
                    const quotedStart = ++index;
                    let escaped = false;
                    while (index < len) {
                        const code = header.charCodeAt(index);
                        if (code === DQUOTE) {
                            if (parameters[key] === undefined) {
                                parameters[key] = escaped
                                    ? unescapeQuotedPairs(header, quotedStart, index)
                                    : header.slice(quotedStart, index);
                            }
                            index++;
                            let stop = 0;
                            // Discard characters between quote and delimiter.
                            while (index < len) {
                                const code = header.charCodeAt(index);
                                const flags = CHAR_MAP[code];
                                if ((flags & stopFlags) !== 0) {
                                    stop = flags & COMMA_FLAG;
                                    break;
                                }
                                index++;
                            }
                            if (stop !== 0)
                                break parameter;
                            continue parameter;
                        }
                        if (code === BSLASH && index + 1 < len) {
                            escaped = true;
                            index += 2;
                            continue;
                        }
                        index++;
                    }
                    continue parameter;
                }
                const valueStart = index;
                let stop = 0;
                let valueWhitespace = -1;
                while (index < len) {
                    const code = header.charCodeAt(index);
                    const flags = CHAR_MAP[code];
                    if ((flags & stopFlags) !== 0) {
                        stop = flags & COMMA_FLAG;
                        break;
                    }
                    if ((flags & OWS) !== 0) {
                        if (valueWhitespace === -1)
                            valueWhitespace = index;
                    }
                    else {
                        valueWhitespace = -1;
                    }
                    index++;
                }
                if (parameters[key] === undefined) {
                    const valueEnd = valueWhitespace === -1 ? index : valueWhitespace;
                    parameters[key] = header.slice(valueStart, valueEnd);
                }
                if (stop !== 0)
                    break parameter;
                continue parameter;
            }
            if ((flags & OWS) !== 0) {
                if (keyWhitespace === -1)
                    keyWhitespace = index;
            }
            else {
                keyWhitespace = -1;
            }
            keyFlags |= (code & NON_ASCII) | flags;
            index++;
        }
    }
    return { type, index, parameters };
}
/**
 * Remove backslashes from quoted pairs in a known-terminated quoted string body.
 */
function unescapeQuotedPairs(str, start, end) {
    let result = "";
    for (let index = start; index < end; index++) {
        if (str.charCodeAt(index) === BSLASH) {
            result += str.slice(start, index);
            start = ++index;
        }
    }
    return result + str.slice(start, end);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts
var logger = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/utils.ts
var utils = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/utils.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/errors.ts
var errors = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/errors.ts");
;// ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/utils.ts
/*
Copyright 2022 - 2024 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/






// Ponyfill for https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/timeout
function timeoutSignal(ms) {
  const controller = new AbortController();
  setTimeout(() => {
    controller.abort();
  }, ms);
  return controller.signal;
}
function anySignal(signals) {
  const controller = new AbortController();
  function cleanup() {
    for (const signal of signals) {
      signal.removeEventListener("abort", onAbort);
    }
  }
  function onAbort() {
    controller.abort();
    cleanup();
  }
  for (const signal of signals) {
    if (signal.aborted) {
      onAbort();
      break;
    }
    signal.addEventListener("abort", onAbort);
  }
  return {
    signal: controller.signal,
    cleanup
  };
}

/**
 * Attempt to turn an HTTP error response into a Javascript Error.
 *
 * If it is a JSON response, we will parse it into a MatrixError. Otherwise
 * we return a generic Error.
 *
 * @param response - response object
 * @param body - raw body of the response
 * @returns
 */
function parseErrorResponse(response, body) {
  var _contentType, _contentType2;
  const httpHeaders = isXhr(response) ? new Headers(response.getAllResponseHeaders().trim().split(/[\r\n]+/).map(header => {
    const colonIdx = header.indexOf(":");
    return [header.substring(0, colonIdx), header.substring(colonIdx + 1)];
  })) : response.headers;
  let contentType;
  try {
    contentType = getResponseContentType(httpHeaders);
  } catch (e) {
    return e;
  }
  if (((_contentType = contentType) === null || _contentType === void 0 ? void 0 : _contentType.type) === "application/json" && body) {
    const errorBody = JSON.parse(body);
    if (errorBody.errcode && errors/* MatrixSafetyErrorCode */.Vc.matches(errorBody.errcode)) {
      return new errors/* MatrixSafetyError */.a_(errorBody, response.status, isXhr(response) ? response.responseURL : response.url, undefined, httpHeaders);
    }
    return new errors/* MatrixError */.up(errorBody, response.status, isXhr(response) ? response.responseURL : response.url, undefined, httpHeaders);
  }
  if (((_contentType2 = contentType) === null || _contentType2 === void 0 ? void 0 : _contentType2.type) === "text/plain") {
    return new errors/* HTTPError */.Hl(`Server returned ${response.status} error: ${body}`, response.status, httpHeaders);
  }
  return new errors/* HTTPError */.Hl(`Server returned ${response.status} error`, response.status, httpHeaders);
}
function isXhr(response) {
  return "getResponseHeader" in response;
}

/**
 * extract the Content-Type header from response headers, and
 * parse it to a `{type, parameters}` object.
 *
 * returns null if no content-type header could be found.
 *
 * @param response - response object
 * @returns parsed content-type header, or null if not found
 */
function getResponseContentType(headers) {
  const contentType = headers.get("Content-Type");
  if (contentType === null) return null;
  return parse(contentType);
}

/**
 * Retries a network operation run in a callback.
 * @param maxAttempts - maximum attempts to try
 * @param callback - callback that returns a promise of the network operation. If rejected with ConnectionError, it will be retried by calling the callback again.
 * @returns the result of the network operation
 * @throws {@link ConnectionError} If after maxAttempts the callback still throws ConnectionError
 */
async function retryNetworkOperation(maxAttempts, callback) {
  let attempts = 0;
  let lastConnectionError = null;
  while (attempts < maxAttempts) {
    try {
      if (attempts > 0) {
        const timeout = 1000 * Math.pow(2, attempts);
        logger/* logger */.vF.log(`network operation failed ${attempts} times, retrying in ${timeout}ms...`);
        await (0,utils/* sleep */.yy)(timeout);
      }
      return await callback();
    } catch (err) {
      if (err instanceof errors/* ConnectionError */.Rc) {
        attempts += 1;
        lastConnectionError = err;
      } else {
        throw err;
      }
    }
  }
  throw lastConnectionError;
}

/**
 * Calculate the backoff time for a request retry attempt.
 * This produces wait times of 2, 4, 8, and 16 seconds (30s total) after which we give up. If the
 * failure was due to a rate limited request, the time specified in the error is returned.
 *
 * Returns -1 if the error is not retryable, or if we reach the maximum number of attempts.
 *
 * @param err - The error thrown by the http call
 * @param attempts - The number of attempts made so far, including the one that just failed.
 * @param retryConnectionError - Whether to retry on {@link ConnectionError} (CORS, connection is down, etc.)
 */
function calculateRetryBackoff(err, attempts, retryConnectionError) {
  if (attempts > 4) {
    return -1; // give up
  }
  if (err instanceof errors/* ConnectionError */.Rc && !retryConnectionError) {
    return -1;
  }
  if (err.httpStatus && Math.floor(err.httpStatus / 100) === 4 && err.httpStatus !== 429) {
    // client error; no amount of retrying will save you now (except for rate limiting which is handled below)
    return -1;
  }
  if (err.name === "AbortError") {
    // this is a client timeout, that is already very high 60s/80s
    // we don't want to retry, as it could do it for very long
    return -1;
  }

  // If we are trying to send an event (or similar) that is too large in any way, then retrying won't help
  if (err.name === "M_TOO_LARGE") {
    return -1;
  }
  return (0,errors/* safeGetRetryAfterMs */.eM)(err, 1000 * Math.pow(2, attempts));
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/indexeddb-helpers.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ exists)
/* harmony export */ });
/*
Copyright 2019 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Check if an IndexedDB database exists. The only way to do so is to try opening it, so
 * we do that and then delete it did not exist before.
 *
 * @param indexedDB - The `indexedDB` interface
 * @param dbName - The database name to test for
 * @returns Whether the database exists
 */
function exists(indexedDB, dbName) {
  return new Promise((resolve, reject) => {
    let exists = true;
    const req = indexedDB.open(dbName);
    req.onupgradeneeded = () => {
      // Since we did not provide an explicit version when opening, this event
      // should only fire if the DB did not exist before at any version.
      exists = false;
    };
    req.onblocked = () => reject(req.error);
    req.onsuccess = () => {
      const db = req.result;
      db.close();
      if (!exists) {
        // The DB did not exist before, but has been created as part of this
        // existence check. Delete it now to restore previous state. Delete can
        // actually take a while to complete in some browsers, so don't wait for
        // it. This won't block future open calls that a store might issue next to
        // properly set up the DB.
        indexedDB.deleteDatabase(dbName);
      }
      resolve(exists);
    };
    req.onerror = () => reject(req.error);
  });
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/CallMembership.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ DEFAULT_EXPIRE_DURATION),
/* harmony export */   p: () => (/* binding */ CallMembership)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/utils.ts");
/* harmony import */ var _logger_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts");
/* harmony import */ var _utils_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/utils.ts");
/* harmony import */ var _membershipData_index_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/membershipData/index.ts");
/* harmony import */ var _types_event_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/event.ts");
/* harmony import */ var _LivekitTransport_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/LivekitTransport.ts");


const _excluded = ["application"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/*
Copyright 2023-2026 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

;






/**
 * The default duration in milliseconds that a membership is considered valid for.
 * Ordinarily the client responsible for the session will update the membership before it expires.
 * We use this duration as the fallback case where stale sessions are present for some reason.
 */
const DEFAULT_EXPIRE_DURATION = 1000 * 60 * 60 * 4;

/** The fields of a legacy session membership that belong to the session, not the application */
const sessionFields = ["application", "call_id", "device_id", "focus_active", "foci_preferred", "created_ts", "scope", "expires", "m.call.intent", "membershipID"];

/**
 * Describes the source event type that provided the membership data.
 */
var MembershipKind = /*#__PURE__*/function (MembershipKind) {
  /**
   * The modern MSC4143 format event.
   */
  MembershipKind["RTC"] = "rtc";
  /**
   * The legacy call event type.
   */
  MembershipKind["Session"] = "session";
  return MembershipKind;
}(MembershipKind || {});
function getDeviceId({
  kind,
  data
}) {
  switch (kind) {
    case MembershipKind.RTC:
      return data.member.device_id;
    case MembershipKind.Session:
      return data.device_id;
  }
}
function getMemberId({
  kind,
  data
}, sender) {
  var _data$membershipID;
  // the createdTs behaves equivalent to the membershipID.
  // we only need the field for the legacy member events where we needed to update them
  // synapse ignores sending state events if they have the same content.
  switch (kind) {
    case MembershipKind.RTC:
      return data.member.id;
    case MembershipKind.Session:
      return (// best case we have a client already publishing the right custom membershipId
        (_data$membershipID = data.membershipID) !== null && _data$membershipID !== void 0 ? _data$membershipID :
        // alternatively we use the hardcoded jwt id default value (used until version 0.16.0)
        `${sender}:${data.device_id}`
      );
  }
}
function getTransports({
  kind,
  data
}) {
  switch (kind) {
    case MembershipKind.RTC:
      return data.transports.published;
    case MembershipKind.Session:
      return data.foci_preferred;
  }
}
// TODO: Rename to RtcMembership once we removed the legacy SessionMembership is removed, to avoid confusion.
class CallMembership {
  /**
   * Parse the membershipdata from a call membership event.
   * @param matrixEvent The Matrix event to read.
   * @returns MembershipData in either MembershipKind.RTC or MembershipKind.Session format.
   * @throws If the content is neither format.
   */
  static membershipDataFromMatrixEvent(matrixEvent) {
    const sender = matrixEvent.getSender();
    const evType = matrixEvent.getType();
    const data = matrixEvent.getContent();
    if (sender === undefined) throw new Error("matrixEvent is missing sender field");
    try {
      // Event types are strictly checked here.
      if (evType === _types_event_ts__WEBPACK_IMPORTED_MODULE_6__/* .EventType */ .Bx.RTCMembership && (0,_membershipData_index_ts__WEBPACK_IMPORTED_MODULE_5__/* .checkRtcMembershipData */ .mB)(data, sender)) {
        return {
          kind: MembershipKind.RTC,
          data
        };
      } else if (evType === _types_event_ts__WEBPACK_IMPORTED_MODULE_6__/* .EventType */ .Bx.GroupCallMemberPrefix && (0,_membershipData_index_ts__WEBPACK_IMPORTED_MODULE_5__/* .checkSessionsMembershipData */ .oi)(data)) {
        return {
          kind: MembershipKind.Session,
          data
        };
      } else {
        throw Error(`'${evType} is not a known call membership type`);
      }
    } catch (ex) {
      if (ex instanceof _membershipData_index_ts__WEBPACK_IMPORTED_MODULE_5__/* .MatrixRTCMembershipParseError */ .yK) {
        _logger_ts__WEBPACK_IMPORTED_MODULE_3__/* .logger */ .vF.debug("CallMembership.MatrixRTCMembershipParseError provided invalid data", data);
      }
      throw ex;
    }
  }

  /**
   * Parse the contents of a MatrixEvent and create a CallMembership instance.
   * @param matrixEvent The Matrix event to read.
   */
  static async parseFromEvent(matrixEvent) {
    const sender = matrixEvent.getSender();
    if (sender === undefined) throw new Error("matrixEvent is missing sender field");
    const membershipData = this.membershipDataFromMatrixEvent(matrixEvent);
    const livekitTransports = getTransports(membershipData).filter(_LivekitTransport_ts__WEBPACK_IMPORTED_MODULE_7__/* .isUnstableLivekitTransport */ .W$);
    const legacyIdentity = `${sender}:${getDeviceId(membershipData)}`;
    const backendIdentities = [];
    if (livekitTransports.some(t => "url" in t)) {
      backendIdentities.push(await (0,_membershipData_index_ts__WEBPACK_IMPORTED_MODULE_5__/* .computeRtcIdentityRaw */ .tL)(sender, getMemberId(membershipData, sender)));
    }
    if (livekitTransports.some(t => "livekit_service_url" in t)) {
      backendIdentities.push(legacyIdentity);
    }

    // rtcBackendIdentity is deprecated, so it's fine to always set it to the legacy identity.
    return new CallMembership(matrixEvent, membershipData, backendIdentities, legacyIdentity);
  }
  static equal(a, b) {
    return (0,_utils_ts__WEBPACK_IMPORTED_MODULE_2__/* .deepCompare */ .ky)(a === null || a === void 0 ? void 0 : a.membershipData, b === null || b === void 0 ? void 0 : b.membershipData);
  }
  /**
   * Use `parseFromEvent`.
   * Constructor should only be used by tests.
   * @private
   */
  constructor(/** The Matrix event that this membership is based on */
  matrixEvent, membershipData,
  /**
   * Possible identities which this member may have on the backends of
   * their published transports.
   */
  backendIdentities,
  /**
   * @deprecated Check the backend for the existence of any of
   * {@link backendIdentities} instead.
   */
  rtcBackendIdentity) {
    ;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, "logger", void 0);
    /** The parsed data from the Matrix event.
     * To access checked eventId and sender from the matrixEvent.
     * Class construction will fail if these values cannot get obtained. */
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, "matrixEventData", void 0);
    this.matrixEvent = matrixEvent;
    this.membershipData = membershipData;
    this.backendIdentities = backendIdentities;
    this.rtcBackendIdentity = rtcBackendIdentity;
    const eventId = matrixEvent.getId();
    const sender = matrixEvent.getSender();
    if (eventId === undefined) throw new Error("matrixEvent is missing eventId field");
    if (sender === undefined) throw new Error("matrixEvent is missing sender field");
    this.logger = _logger_ts__WEBPACK_IMPORTED_MODULE_3__/* .logger */ .vF.getChild(`[CallMembership ${sender}:${this.deviceId}]`);
    this.matrixEventData = {
      eventId,
      sender
    };
  }

  /** @deprecated use userId instead */
  get sender() {
    return this.userId;
  }
  get userId() {
    return this.matrixEventData.sender;
  }
  get eventId() {
    return this.matrixEventData.eventId;
  }

  /**
   * The ID of the MatrixRTC slot that this membership belongs to (format `{application}#{id}`).
   * This is computed in case SessionMembershipData is used.
   */
  get slotId() {
    var _this$logger2;
    const {
      kind,
      data
    } = this.membershipData;
    if (data.application === "m.call") {
      switch (kind) {
        case MembershipKind.RTC:
          return data.slot_id;
        case MembershipKind.Session:
        default:
          {
            const [application, id] = [data.application, data.call_id];

            // INFO_SLOT_ID_LEGACY_CASE  (search for all occurances of this INFO to get the full picture)
            // The spec got changed to use `"ROOM"` instead of `""` empyt string for the implicit default call.
            // State events still are sent with `""` however. To find other events that should end up in the same call,
            // we use the slotId.
            // Since the CallMembership is the public representation of a rtc.member event, we just pretend it is a
            // "ROOM" slotId/call_id.
            // This makes all the remote members work with just this simple trick.
            //
            // We of course now need to be careful when sending legacy events (state events)
            // They get a slotDescription containing "ROOM" since this is what we use starting at the time this comment
            // is commited.
            //
            // See the Other INFO_SLOT_ID_LEGACY_CASE comments to see where we revert back to "" just before sending the event.
            let compatibilityAdaptedId;
            if (id === "") {
              var _this$logger;
              compatibilityAdaptedId = "ROOM";
              (_this$logger = this.logger) === null || _this$logger === void 0 || _this$logger.info("use slotId compat hack emptyString -> ROOM");
            } else {
              compatibilityAdaptedId = id;
            }
            return (0,_utils_ts__WEBPACK_IMPORTED_MODULE_4__/* .computeSlotId */ .Ds)({
              application,
              id: compatibilityAdaptedId
            });
          }
      }
    }
    (_this$logger2 = this.logger) === null || _this$logger2 === void 0 || _this$logger2.info("NOT using slotId compat hack emptyString -> ROOM");
    // This is what the function should look like for any other application that did not
    // go through a `""`=> `"ROOM"` rename
    switch (kind) {
      case MembershipKind.RTC:
        return data.slot_id;
      case MembershipKind.Session:
      default:
        return (0,_utils_ts__WEBPACK_IMPORTED_MODULE_4__/* .computeSlotId */ .Ds)({
          application: data.application,
          id: data.call_id
        });
    }
  }
  get deviceId() {
    return getDeviceId(this.membershipData);
  }
  get callIntent() {
    const intent = this.applicationData["m.call.intent"];
    if (typeof intent === "string") {
      return intent;
    }
    this.logger.warn("RTC membership has invalid m.call.intent");
    return undefined;
  }
  get callCapabilities() {
    const capabilities = this.applicationData["capabilities"];
    if (capabilities === undefined) return undefined;
    if (Array.isArray(capabilities) && capabilities.every(c => typeof c === "string")) return capabilities;
    this.logger.warn("RTC membership has invalid capabilities");
    return undefined;
  }

  /**
   * Parsed `slot_id` (format `{application}#{id}`) into its components (application and id).
   */
  get slotDescription() {
    const {
      kind,
      data
    } = this.membershipData;
    if (kind === MembershipKind.RTC) {
      const id = data.slot_id.slice(`${data.application.type}#`.length);
      return {
        application: data.application.type,
        id
      };
    }
    return (0,_utils_ts__WEBPACK_IMPORTED_MODULE_4__/* .slotIdToDescription */ .nr)(this.slotId);
  }

  /**
   * Information about the application being used for the RTC session.
   * May contain extra keys specific to the application.
   */
  get applicationData() {
    const {
      kind,
      data
    } = this.membershipData;
    switch (kind) {
      case MembershipKind.RTC:
        return data.application;
      case MembershipKind.Session:
      default:
        {
          // SessionData has no application object: the application's own
          // data sits at the top level beside the session fields, so
          // everything but those is the application's
          const {
              application
            } = data,
            rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(data, _excluded);
          for (const key of sessionFields) delete rest[key];
          return _objectSpread(_objectSpread({}, rest), {}, {
            "type": application,
            "m.call.intent": data["m.call.intent"]
          });
        }
    }
  }

  /** @deprecated scope is not used and will be removed in future versions. replaced by application specific types.*/
  get scope() {
    const {
      kind,
      data
    } = this.membershipData;
    switch (kind) {
      case MembershipKind.RTC:
        return undefined;
      case MembershipKind.Session:
      default:
        return data.scope;
    }
  }

  /**
   * This computes the membership ID for the membership.
   * For the sticky event based rtcSessionData this is trivial it is `member.id`.
   * This is not supposed to be used to identity on an rtc backend. This is just a nuance for
   * a generated (sha256) anonymised identity. Only send {@link backendIdentities} to any rtc backend service.
   *
   * For the legacy sessionMemberEvents it is a bit more complex. Here we sometimes do not have this data
   * in the event content and we expected the SFU and the client to use `${this.matrixEventData.sender}:${data.device_id}`.
   *
   * So if there is no membershipID we use the hard coded jwt id default (`${this.matrixEventData.sender}:${data.device_id}`)
   * value (used until version 0.16.0)
   *
   * It is also possible for a session event to set a custom membershipID. in that case this will be used.
   */
  get memberId() {
    return getMemberId(this.membershipData, this.matrixEventData.sender);
  }
  createdTs() {
    var _data$created_ts;
    const {
      kind,
      data
    } = this.membershipData;
    switch (kind) {
      case MembershipKind.RTC:
        // TODO Do we need this to represent the TS of the original join?
        return this.matrixEvent.getTs();
      case MembershipKind.Session:
      default:
        return (_data$created_ts = data.created_ts) !== null && _data$created_ts !== void 0 ? _data$created_ts : this.matrixEvent.getTs();
    }
  }

  /**
   * Gets the absolute expiry timestamp of the membership.
   * @returns The absolute expiry time of the membership as a unix timestamp in milliseconds or undefined if not applicable
   */
  getAbsoluteExpiry() {
    var _data$expires;
    const {
      kind,
      data
    } = this.membershipData;
    switch (kind) {
      case MembershipKind.RTC:
        return undefined;
      case MembershipKind.Session:
      default:
        // TODO: calculate this from the MatrixRTCSession join configuration directly
        return this.createdTs() + ((_data$expires = data.expires) !== null && _data$expires !== void 0 ? _data$expires : DEFAULT_EXPIRE_DURATION);
    }
  }

  /**
   * @returns The number of milliseconds until the membership expires or undefined if applicable
   * @deprecated Not used by RTC events.
   */
  getMsUntilExpiry() {
    const {
      kind
    } = this.membershipData;
    if (kind === MembershipKind.Session) {
      const absExpiry = this.getAbsoluteExpiry();
      if (absExpiry) {
        // Assume that local clock is sufficiently in sync with other clocks in the distributed system.
        // We used to try and adjust for the local clock being skewed, but there are cases where this is not accurate.
        // The current implementation allows for the local clock to be -infinity to +MatrixRTCSession.MEMBERSHIP_EXPIRY_TIME/2
        return absExpiry - Date.now();
      }
    }
    return undefined;
  }

  /**
   * @returns true if the membership has expired, otherwise false
   */
  isExpired() {
    const {
      kind
    } = this.membershipData;
    switch (kind) {
      case MembershipKind.RTC:
        return false;
      case MembershipKind.Session:
      default:
        return this.getMsUntilExpiry() <= 0;
    }
  }

  /**
   * ## RTC Membership
   * Gets the primary transport to use for this RTC membership (m.rtc.member).
   * This will return the primary transport that is used by this call membership to publish their media.
   * Directly relates to the `transports.published` field.
   *
   * ## Legacy session membership
   * In case of a legacy session membership (m.call.member) this will return the first transport of the
   * `foci_preferred` list. (`multi_sfu` is equivalent to how `m.rtc.member` `transports.published` work).
   *
   * @param _oldestMembership Deprecated and unused.
   *
   * @returns The transport this membership uses to publish media or undefined if no transport is available.
   */
  getTransport(_oldestMembership) {
    const {
      kind,
      data
    } = this.membershipData;
    switch (kind) {
      case MembershipKind.RTC:
        return data.transports.published[0];
      case MembershipKind.Session:
        return data.foci_preferred[0];
      default:
        return undefined;
    }
  }

  /**
   * The value of the `transports.published` field for RTC memberships (m.rtc.member).
   * Or the value of the `foci_preferred` field for legacy session memberships (m.call.member).
   */
  get transports() {
    return getTransports(this.membershipData);
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/EncryptionManager.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ getEncryptionKeyMapKey)
/* harmony export */ });
/**
 * The string used for the keys in the the encryption key map.
 * `@bob:examle.org:DEVICEID(UUIDRANDOM_MEMBERID_RANDOMUUID)`
 */
function getEncryptionKeyMapKey(membership) {
  return `${membership.userId}:${membership.deviceId}(${membership.memberId})`;
}

/**
 * This interface is for testing and for making it possible to interchange the encryption manager.
 * @internal
 */

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/IKeyTransport.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ KeyTransportEvents)
/* harmony export */ });
/*
Copyright 2025 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

let KeyTransportEvents = /*#__PURE__*/function (KeyTransportEvents) {
  KeyTransportEvents["ReceivedKeys"] = "received_keys";
  KeyTransportEvents["NotSupportedError"] = "not_supported_error";
  return KeyTransportEvents;
}({});

/**
 * Generic interface for the transport used to share room keys.
 * Keys can be shared using different transports, e.g. to-device messages or room messages.
 */

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/IMembershipManager.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ MembershipManagerEvent)
/* harmony export */ });
/*
Copyright 2025 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

let MembershipManagerEvent = /*#__PURE__*/function (MembershipManagerEvent) {
  MembershipManagerEvent["StatusChanged"] = "StatusChanged";
  /**
   * Emitted when the membership manager has not heard back from the server for the duration
   * of the delayed event and hence failed to restart the delayed event.
   * This means that the user is probably not joined anymore and the leave event was distributed to other session members.
   */
  MembershipManagerEvent["ProbablyLeft"] = "ProbablyLeft";
  /**
   * Once the membershipManger has aquired the a delay id (after sending the state event)
   * It will emit and share the delay id.
   */
  MembershipManagerEvent["DelayIdChanged"] = "DelayIdChanged";
  return MembershipManagerEvent;
}({});

/**
 * This interface defines what a MembershipManager uses and exposes.
 * This interface is what we use to write tests and allows changing the actual implementation
 * without breaking tests because of some internal method renaming.
 *
 * @internal
 */

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/MembershipManager.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T6: () => (/* binding */ MembershipActionType),
  Wm: () => (/* binding */ MembershipManager),
  fT: () => (/* binding */ StickyEventMembershipManager)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/p-retry@8.0.1/node_modules/p-retry/index.js + 1 modules
var p_retry = __webpack_require__("../../node_modules/.pnpm/p-retry@8.0.1/node_modules/p-retry/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/event.ts
var _types_event = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/event.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/errors.ts
var errors = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/errors.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts
var logger = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/CallMembership.ts
var CallMembership = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/CallMembership.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/types.ts
var matrixrtc_types = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/types.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/utils.ts
var utils = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/utils.ts");
;// ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/MembershipManagerActionScheduler.ts





/** @internal */

/** @internal */

/**
 * This scheduler tracks the state of the current membership participation
 * and runs one central timer that wakes up a handler callback with the correct action + state
 * whenever necessary.
 *
 * It can also be awakened whenever a new action is added which is
 * earlier then the current "next awake".
 * @internal
 */
class ActionScheduler {
  constructor(/** This is the callback called for each scheduled action (`this.addAction()`) */
  membershipLoopHandler, parentLogger) {
    (0,defineProperty/* default */.A)(this, "logger", void 0);
    /**
     * This is tracking the state of the scheduler loop.
     * Only used to prevent starting the loop twice.
     */
    (0,defineProperty/* default */.A)(this, "running", false);
    // function for the wakeup mechanism (in case we add an action externally and need to leave the current sleep)
    (0,defineProperty/* default */.A)(this, "wakeup", update => {
      this.logger.error("Cannot call wakeup before calling `startWithJoin()`");
    });
    (0,defineProperty/* default */.A)(this, "_actions", []);
    this.membershipLoopHandler = membershipLoopHandler;
    this.logger = (parentLogger !== null && parentLogger !== void 0 ? parentLogger : logger/* logger */.vF).getChild(`[NewMembershipActionScheduler]`);
  }
  get actions() {
    return this._actions;
  }

  /**
   * This starts the main loop of the membership manager that handles event sending, delayed event sending and delayed event restarting.
   * @param initialActions The initial actions the manager will start with. It should be enough to pass: DelayedLeaveActionType.Initial
   * @returns Promise that resolves once all actions have run and no more are scheduled.
   * @throws This throws an error if one of the actions throws.
   * In most other error cases the manager will try to handle any server errors by itself.
   */
  async startWithJoin() {
    if (this.running) {
      this.logger.error("Cannot call startWithJoin() on NewMembershipActionScheduler while already running");
      return;
    }
    this.running = true;
    this._actions = [{
      ts: Date.now(),
      type: MembershipActionType.SendDelayedEvent
    }];
    try {
      while (this._actions.length > 0) {
        // Sort so next (smallest ts) action is at the beginning
        this._actions.sort((a, b) => a.ts - b.ts);
        const nextAction = this._actions[0];
        let wakeupUpdate = undefined;

        // while we await for the next action, wakeup has to resolve the wakeupPromise
        const wakeupPromise = new Promise(resolve => {
          this.wakeup = update => {
            wakeupUpdate = update;
            resolve();
          };
        });
        if (nextAction.ts > Date.now()) await Promise.race([wakeupPromise, (0,utils/* sleep */.yy)(nextAction.ts - Date.now())]);
        let handlerResult = {};
        if (!wakeupUpdate) {
          this.logger.debug(`Current MembershipManager processing: ${nextAction.type}\nQueue:`, this._actions, `\nDate.now: "${Date.now()}`);
          try {
            // `this.wakeup` can also be called and sets the `wakeupUpdate` object while we are in the handler.
            handlerResult = await this.membershipLoopHandler(nextAction.type);
          } catch (e) {
            // Preserve the original error as `cause`.
            throw new Error(`The MembershipManager shut down because of the end condition: ${e}`, {
              cause: e
            });
          }
        }
        // remove the processed action only after we are done processing
        this._actions.splice(0, 1);
        // The wakeupUpdate always wins since that is a direct external update.
        const actionUpdate = wakeupUpdate !== null && wakeupUpdate !== void 0 ? wakeupUpdate : handlerResult;
        if ("replace" in actionUpdate) {
          this._actions = actionUpdate.replace;
        } else if ("insert" in actionUpdate) {
          this._actions.push(...actionUpdate.insert);
        }
      }
    } finally {
      // Set the rtc session running state since we cannot recover from here and the consumer user of the
      // MatrixRTCSession class needs to manually rejoin.
      this.running = false;
    }
    this.logger.debug("Leave MembershipManager ActionScheduler loop (no more actions)");
  }
  initiateJoin() {
    var _this$wakeup;
    (_this$wakeup = this.wakeup) === null || _this$wakeup === void 0 || _this$wakeup.call(this, {
      replace: [{
        ts: Date.now(),
        type: MembershipActionType.SendDelayedEvent
      }]
    });
  }
  initiateLeave() {
    var _this$wakeup2;
    (_this$wakeup2 = this.wakeup) === null || _this$wakeup2 === void 0 || _this$wakeup2.call(this, {
      replace: [{
        ts: Date.now(),
        type: MembershipActionType.SendScheduledDelayedLeaveEvent
      }]
    });
  }
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/typed-event-emitter.ts
var typed_event_emitter = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/typed-event-emitter.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/errors.ts
var src_errors = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/errors.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/IMembershipManager.ts
var IMembershipManager = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/IMembershipManager.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/utils.ts
var matrixrtc_utils = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/utils.ts");
;// ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/MembershipManager.ts

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/*
Copyright 2025-2026 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
;












/* MembershipActionTypes:
On Join:  ───────────────────┐   ┌───────────────(1)───────────┐
                             ▼   ▼                             │
                       ┌────────────────┐                      │
┌───────(6)───────────▶│SendDelayedEvent│ ──────(2)───┐        │
│                      └────────────────┘             │        │
│                              │(3)                   │        │
│                              ▼                      │        │
│                       ┌─────────────┐               │        │
│          ┌──────(4)───│SendJoinEvent│────(4)─────┐  │        │
│          │            └─────────────┘            │  │        │
│          │  ┌─────┐                  ┌──────┐    │  │        │
│          ▼  ▼     │                  │      ▼    ▼  ▼        │
│   ┌────────────┐  │                  │ ┌───────────────────┐ │
└───│UpdateExpiry│ (s)                (s)|RestartDelayedEvent│ │
    └────────────┘  │                  │ └───────────────────┘ │
              │     │                  │      │        │       │
              └─────┘                  └──────┘        └───────┘

On Leave: ─────────  STOP ALL ABOVE
                           ▼
            ┌────────────────────────────────┐
            │ SendScheduledDelayedLeaveEvent │
            └────────────────────────────────┘
                           │(5)
                           ▼
                    ┌──────────────┐
                    │SendLeaveEvent│
                    └──────────────┘
(1) [Not found error] results in resending the delayed event
(2) [hasMemberEvent = true] Sending the delayed event if we
    already have a call member event results jumping to the
    RestartDelayedEvent loop directly
(3) [hasMemberEvent = false] if there is not call member event
    sending it is the next step
(4) Both (UpdateExpiry and RestartDelayedEvent) actions are
    scheduled when successfully sending the state event
(5) Only if delayed event sending failed (fallback)
(6) Before extending `expires` we make sure a delayed leave
    event will outlive the update. If it was only cancelled we
    schedule a new one and retry; if it already fired, or the
    membership expires while we retry, we join again from scratch
(s) Successful restart/resend
*/

/**
 * Call membership should always remain sticky for this amount
 * of time.
 */
const MEMBERSHIP_STICKY_DURATION_MS = 60 * 60 * 1000; // 60 minutes

/**
 * The different types of actions the MembershipManager can take.
 * @internal
 */
let MembershipActionType = /*#__PURE__*/function (MembershipActionType) {
  MembershipActionType["SendDelayedEvent"] = "SendDelayedEvent";
  //  -> MembershipActionType.SendJoinEvent if successful
  //  -> DelayedLeaveActionType.SendDelayedEvent on error, retry sending the first delayed event.
  //  -> DelayedLeaveActionType.RestartDelayedEvent on success start updating the delayed event
  MembershipActionType["SendJoinEvent"] = "SendJoinEvent";
  //  -> MembershipActionType.SendJoinEvent if we run into a rate limit and need to retry
  //  -> MembershipActionType.UpdateExpiry if we successfully send the join event then schedule the expire event update
  //  -> DelayedLeaveActionType.RestartDelayedEvent to recheck the delayed event
  MembershipActionType["RestartDelayedEvent"] = "RestartDelayedEvent";
  //  -> DelayedLeaveActionType.SendMainDelayedEvent on missing delay id but there is a rtc state event
  //  -> DelayedLeaveActionType.SendDelayedEvent on missing delay id and there is no state event
  //  -> DelayedLeaveActionType.RestartDelayedEvent on success we schedule the next restart
  MembershipActionType["UpdateExpiry"] = "UpdateExpiry";
  //  -> MembershipActionType.UpdateExpiry if the timeout has passed so the next update is required, or if we first
  //     have to wait for a delayed leave event that can protect the updated membership.
  //  -> MembershipActionType.SendDelayedEvent if our delayed leave event is gone. Either to schedule a new one for
  //     the membership we still have, or to join again from scratch because the server already removed us.
  MembershipActionType["SendScheduledDelayedLeaveEvent"] = "SendScheduledDelayedLeaveEvent";
  //  -> MembershipActionType.SendLeaveEvent on failure (not found) we need to send the leave manually and cannot use the scheduled delayed event
  //  -> DelayedLeaveActionType.SendScheduledDelayedLeaveEvent on error we try again.
  MembershipActionType["SendLeaveEvent"] = "SendLeaveEvent"; // -> MembershipActionType.SendLeaveEvent
  return MembershipActionType;
}({});

/**
 * @internal
 */

/**
 * The outcome of a delayed leave event restart attempt.
 *
 *  - `"ok"`: the server restarted it, it will fire `delayedLeaveEventDelayMs` from now.
 *  - `"gone"`: the delayed event cannot be restarted anymore (see `isDelayedEventGoneError`). The server either sent
 *    it or lost/cancelled it.
 *  - `"unsupported"`: the server does not support the delayed events endpoint.
 *  - `{ error }`: any other failure, for the caller to turn into a retry or to rethrow.
 */

function createInsertActionUpdate(type, offset) {
  return {
    insert: [{
      ts: Date.now() + (offset !== null && offset !== void 0 ? offset : 0),
      type
    }]
  };
}
function createReplaceActionUpdate(type, offset) {
  return {
    replace: [{
      ts: Date.now() + (offset !== null && offset !== void 0 ? offset : 0),
      type
    }]
  };
}
/**
 * This class is responsible for sending all events relating to the own membership of a matrixRTC call.
 * It has the following tasks:
 *  - Send the users leave delayed event before sending the membership
 *  - Send the users membership if the state machine is started
 *  - Check if the delayed event was canceled due to sending the membership
 *  - update the delayed event (`restart`)
 *  - Update the state event every ~5h = `DEFAULT_EXPIRE_DURATION` (so it does not get treated as expired)
 *  - When the state machine is stopped:
 *   - Disconnect the member
 *   - Stop the timer for the delay refresh
 *   - Stop the timer for updating the state event
 */
class MembershipManager extends typed_event_emitter/* TypedEventEmitter */.X {
  isActivated() {
    return this.activated;
  }
  // DEPRECATED use isActivated
  isJoined() {
    return this.isActivated();
  }

  /**
   * Puts the MembershipManager in a state where it tries to be joined.
   * It will send delayed events and membership events
   * @param publishedTransports the list of transports on which the member is publishing.
   * @param onError This will be called once the membership manager encounters an unrecoverable error.
   * This should bubble up the the frontend to communicate that the call does not work in the current environment.
   * The original underlying error is preserved as `error.cause`, so consumers can `instanceof`-check the typed
   * cause.
   */
  join(publishedTransports, onError) {
    if (this.scheduler.running) {
      this.logger.error("MembershipManager is already running. Ignoring join request.");
      return;
    }
    this.publishedTransports = publishedTransports;
    this.leavePromiseResolvers = undefined;
    this.activated = true;
    this.oldStatus = this.status;
    this.state = MembershipManager.defaultState;
    this.scheduler.startWithJoin().catch(e => {
      this.logger.error("MembershipManager stopped because: ", e);
      onError === null || onError === void 0 || onError(e);
    }).finally(() => {
      // Should already be set to false when calling `leave` in non error cases.
      this.activated = false;
      // Here the scheduler is not running anymore so we the `membershipLoopHandler` is not called to emit.
      if (this.oldStatus && this.oldStatus !== this.status) {
        this.emit(IMembershipManager/* MembershipManagerEvent */.e.StatusChanged, this.oldStatus, this.status);
      }
      if (!this.scheduler.running) {
        var _this$leavePromiseRes;
        (_this$leavePromiseRes = this.leavePromiseResolvers) === null || _this$leavePromiseRes === void 0 || _this$leavePromiseRes.resolve(true);
        this.leavePromiseResolvers = undefined;
      }
    });
  }

  /**
   * Leave from the call (Send an rtc session event with content: `{}`)
   * @param timeout the maximum duration this promise will take to resolve
   * @returns true if it managed to leave and false if the timeout condition happened.
   */
  leave(timeout) {
    if (!this.scheduler.running) {
      this.logger.warn("Called MembershipManager.leave() even though the MembershipManager is not running");
      return Promise.resolve(true);
    }

    // We use the promise to track if we already scheduled a leave event
    // So we do not check scheduler.actions/scheduler.insertions
    if (!this.leavePromiseResolvers) {
      // reset scheduled actions so we will not do any new actions.
      this.leavePromiseResolvers = Promise.withResolvers();
      this.activated = false;
      this.scheduler.initiateLeave();
      if (timeout) setTimeout(() => {
        var _this$leavePromiseRes2;
        return (_this$leavePromiseRes2 = this.leavePromiseResolvers) === null || _this$leavePromiseRes2 === void 0 ? void 0 : _this$leavePromiseRes2.resolve(false);
      }, timeout);
    }
    return this.leavePromiseResolvers.promise;
  }
  onRTCSessionMemberUpdate(memberships) {
    if (!this.isActivated()) {
      return Promise.resolve();
    }
    this._ownMembership = memberships.find(m => (0,matrixrtc_types/* isMyMembership */.t9)(m, this.userId, this.deviceId));
    if (!this._ownMembership) {
      // If one of these actions are scheduled or are getting inserted in the next iteration, we should already
      // take care of our missing membership.
      const sendingMembershipActions = [MembershipActionType.SendDelayedEvent, MembershipActionType.SendJoinEvent];
      this.logger.warn("Missing own membership: force re-join");
      this.state.hasMemberStateEvent = false;
      if (this.scheduler.actions.some(a => sendingMembershipActions.includes(a.type))) {
        this.logger.error("tried adding another `SendDelayedEvent` actions even though we already have one in the Queue\nActionQueueOnMemberUpdate:", this.scheduler.actions);
      } else {
        // Only react to our own membership missing if we have not already scheduled sending a new membership DirectMembershipManagerAction.Join
        this.scheduler.initiateJoin();
      }
    }
    return Promise.resolve();
  }
  async updateCallIntent(callIntent) {
    if (!this.activated || !this.ownMembership) {
      throw Error("You cannot update your intent before joining the call");
    }
    if (this.ownMembership.callIntent === callIntent) {
      return; // No-op
    }
    this.callIntent = callIntent;
    // Kick off a new membership event as a result.
    await this.sendJoinEvent();
  }
  async updateApplicationData(applicationData) {
    var _this$applicationData;
    if (!this.activated || !this.ownMembership) {
      throw Error("You cannot update your application data before joining the call");
    }
    if ((0,utils/* deepCompare */.ky)((_this$applicationData = this.applicationData) !== null && _this$applicationData !== void 0 ? _this$applicationData : {}, applicationData)) {
      return; // No-op
    }
    this.applicationData = applicationData;
    await this.sendJoinEvent();
  }

  /**
   * @throws if the client does not return user or device id.
   * @param joinConfig
   * @param room
   * @param client
   */
  constructor(joinConfig, room, client, slotDescription, parentLogger) {
    super();
    (0,defineProperty/* default */.A)(this, "activated", false);
    (0,defineProperty/* default */.A)(this, "logger", void 0);
    (0,defineProperty/* default */.A)(this, "callIntent", void 0);
    (0,defineProperty/* default */.A)(this, "callCapabilities", void 0);
    (0,defineProperty/* default */.A)(this, "applicationData", void 0);
    (0,defineProperty/* default */.A)(this, "leavePromiseResolvers", void 0);
    (0,defineProperty/* default */.A)(this, "_ownMembership", void 0);
    // scheduler
    (0,defineProperty/* default */.A)(this, "oldStatus", void 0);
    (0,defineProperty/* default */.A)(this, "scheduler", void 0);
    // MembershipManager mutable state.
    (0,defineProperty/* default */.A)(this, "state", void 0);
    // Membership Event static parameters:
    (0,defineProperty/* default */.A)(this, "deviceId", void 0);
    (0,defineProperty/* default */.A)(this, "userId", void 0);
    (0,defineProperty/* default */.A)(this, "stateKey", void 0);
    (0,defineProperty/* default */.A)(this, "publishedTransports", []);
    // Config:
    (0,defineProperty/* default */.A)(this, "delayedLeaveEventDelayMsOverride", void 0);
    // an abstraction to switch between sending state or a sticky event
    (0,defineProperty/* default */.A)(this, "clientSendDelayedDisconnectMembership", () => this.client._unstable_sendDelayedStateEvent(this.room.roomId, this.delayedLeaveEventDelayMs, _types_event/* EventType */.Bx.GroupCallMemberPrefix, {}, this.stateKey));
    (0,defineProperty/* default */.A)(this, "clientSendMembership", myMembership => {
      return this.client.sendStateEvent(this.room.roomId, _types_event/* EventType */.Bx.GroupCallMemberPrefix, myMembership, this.stateKey);
    });
    /** Sends the event that marks our membership as left. */
    (0,defineProperty/* default */.A)(this, "clientSendLeaveMembership", () => this.clientSendMembership({}));
    this.joinConfig = joinConfig;
    this.room = room;
    this.client = client;
    this.slotDescription = slotDescription;
    this.logger = (parentLogger !== null && parentLogger !== void 0 ? parentLogger : logger/* logger */.vF).getChild(`[MembershipManager]`);
    const [userId, deviceId] = [this.client.getUserId(), this.client.getDeviceId()];
    if (userId === null) throw Error("Missing userId in client");
    if (deviceId === null) throw Error("Missing deviceId in client");
    this.deviceId = deviceId;
    this.userId = userId;
    // this needs to become a uuid so that consecutive join/leaves result in a key rotation.
    // we keep it as a string for now for backwards compatibility.
    this.stateKey = this.makeMembershipStateKey(userId, deviceId);
    this.state = MembershipManager.defaultState;
    this.callIntent = joinConfig === null || joinConfig === void 0 ? void 0 : joinConfig.callIntent;
    this.callCapabilities = joinConfig === null || joinConfig === void 0 ? void 0 : joinConfig.callCapabilities;
    this.applicationData = joinConfig === null || joinConfig === void 0 ? void 0 : joinConfig.applicationData;
    this.scheduler = new ActionScheduler(type => {
      if (this.oldStatus) {
        // we put this at the beginning of the actions scheduler loop handle callback since it is a loop this
        // is equivalent to running it at the end of the loop. (just after applying the status/action list changes)
        // This order is required because this method needs to return the action updates.
        this.logger.debug(`MembershipManager applied action changes. Status: ${this.oldStatus} -> ${this.status}`);
        if (this.oldStatus !== this.status) {
          this.emit(IMembershipManager/* MembershipManagerEvent */.e.StatusChanged, this.oldStatus, this.status);
        }
      }
      this.oldStatus = this.status;
      this.logger.debug(`MembershipManager before processing action. status=${this.oldStatus}`);
      return this.membershipLoopHandler(type);
    }, this.logger);
  }
  get ownMembership() {
    return this._ownMembership;
  }
  static get defaultState() {
    return {
      hasMemberStateEvent: false,
      delayId: undefined,
      startTime: 0,
      membershipExpiryTs: 0,
      rateLimitRetries: new Map(),
      networkErrorRetries: new Map(),
      expireUpdateIterations: 1,
      probablyLeft: false
    };
  }
  get networkErrorRetryMs() {
    var _this$joinConfig$netw, _this$joinConfig;
    return (_this$joinConfig$netw = (_this$joinConfig = this.joinConfig) === null || _this$joinConfig === void 0 ? void 0 : _this$joinConfig.networkErrorRetryMs) !== null && _this$joinConfig$netw !== void 0 ? _this$joinConfig$netw : 3000;
  }
  get membershipEventExpiryMs() {
    var _this$joinConfig$memb, _this$joinConfig2;
    return (_this$joinConfig$memb = (_this$joinConfig2 = this.joinConfig) === null || _this$joinConfig2 === void 0 ? void 0 : _this$joinConfig2.membershipEventExpiryMs) !== null && _this$joinConfig$memb !== void 0 ? _this$joinConfig$memb : CallMembership/* DEFAULT_EXPIRE_DURATION */.F;
  }
  get membershipEventExpiryHeadroomMs() {
    var _this$joinConfig$memb2, _this$joinConfig3;
    return (_this$joinConfig$memb2 = (_this$joinConfig3 = this.joinConfig) === null || _this$joinConfig3 === void 0 ? void 0 : _this$joinConfig3.membershipEventExpiryHeadroomMs) !== null && _this$joinConfig$memb2 !== void 0 ? _this$joinConfig$memb2 : 5000;
  }
  computeNextExpiryActionTs(iteration) {
    return this.state.startTime + Math.min(this.membershipEventExpiryMs, MEMBERSHIP_STICKY_DURATION_MS) * iteration - this.membershipEventExpiryHeadroomMs;
  }
  get delayedLeaveEventDelayMs() {
    var _ref, _this$delayedLeaveEve, _this$joinConfig4;
    return (_ref = (_this$delayedLeaveEve = this.delayedLeaveEventDelayMsOverride) !== null && _this$delayedLeaveEve !== void 0 ? _this$delayedLeaveEve : (_this$joinConfig4 = this.joinConfig) === null || _this$joinConfig4 === void 0 ? void 0 : _this$joinConfig4.delayedLeaveEventDelayMs) !== null && _ref !== void 0 ? _ref : 8000;
  }
  get delayedLeaveEventRestartMs() {
    var _this$joinConfig$dela, _this$joinConfig5;
    return (_this$joinConfig$dela = (_this$joinConfig5 = this.joinConfig) === null || _this$joinConfig5 === void 0 ? void 0 : _this$joinConfig5.delayedLeaveEventRestartMs) !== null && _this$joinConfig$dela !== void 0 ? _this$joinConfig$dela : 5000;
  }
  get maximumRateLimitRetryCount() {
    var _this$joinConfig$maxi, _this$joinConfig6;
    return (_this$joinConfig$maxi = (_this$joinConfig6 = this.joinConfig) === null || _this$joinConfig6 === void 0 ? void 0 : _this$joinConfig6.maximumRateLimitRetryCount) !== null && _this$joinConfig$maxi !== void 0 ? _this$joinConfig$maxi : 10;
  }
  get maximumNetworkErrorRetryCount() {
    var _this$joinConfig$maxi2, _this$joinConfig7;
    return (_this$joinConfig$maxi2 = (_this$joinConfig7 = this.joinConfig) === null || _this$joinConfig7 === void 0 ? void 0 : _this$joinConfig7.maximumNetworkErrorRetryCount) !== null && _this$joinConfig$maxi2 !== void 0 ? _this$joinConfig$maxi2 : 10;
  }
  get delayedLeaveEventRestartLocalTimeoutMs() {
    var _this$joinConfig$dela2, _this$joinConfig8;
    return (_this$joinConfig$dela2 = (_this$joinConfig8 = this.joinConfig) === null || _this$joinConfig8 === void 0 ? void 0 : _this$joinConfig8.delayedLeaveEventRestartLocalTimeoutMs) !== null && _this$joinConfig$dela2 !== void 0 ? _this$joinConfig$dela2 : 2000;
  }

  // LOOP HANDLER:
  async membershipLoopHandler(type) {
    switch (type) {
      case MembershipActionType.SendDelayedEvent:
        {
          // Before we start we check if we come from a state where we have a delay id.
          if (!this.state.delayId) {
            return this.sendOrResendDelayedLeaveEvent(); // Normal case without any previous delayed id.
          } else {
            // This can happen if someone else (or another client) removes our own membership event.
            // It will trigger `onRTCSessionMemberUpdate` queue `MembershipActionType.SendDelayedEvent`.
            // We might still have our delayed event from the previous participation and dependent on the server this might not
            // get removed automatically if the state changes. Hence, it would remove our membership unexpectedly shortly after the rejoin.
            //
            // In this block we will try to cancel this delayed event before setting up a new one.

            return this.cancelKnownDelayIdBeforeSendDelayedEvent(this.state.delayId);
          }
        }
      case MembershipActionType.RestartDelayedEvent:
        {
          if (!this.state.delayId) {
            // Delay id got reset. This action was used to check if the hs canceled the delayed event when the join state got sent.
            return createInsertActionUpdate(MembershipActionType.SendDelayedEvent);
          }
          return this.restartDelayedEvent(this.state.delayId);
        }
      case MembershipActionType.SendScheduledDelayedLeaveEvent:
        {
          // We are already good
          if (!this.state.hasMemberStateEvent) {
            return {
              replace: []
            };
          }
          if (this.state.delayId) {
            return this.sendScheduledDelayedLeaveEventOrFallbackToSendLeaveEvent(this.state.delayId);
          } else {
            return createInsertActionUpdate(MembershipActionType.SendLeaveEvent);
          }
        }
      case MembershipActionType.SendJoinEvent:
        {
          return this.sendJoinEvent();
        }
      case MembershipActionType.UpdateExpiry:
        {
          return this.updateExpiryOnJoinedEvent();
        }
      case MembershipActionType.SendLeaveEvent:
        {
          // We are good already
          if (!this.state.hasMemberStateEvent) {
            return {
              replace: []
            };
          }
          // This is only a fallback in case we do not have working delayed events support.
          // first we should try to just send the scheduled leave event
          return this.sendFallbackLeaveEvent();
        }
    }
  }
  // HANDLERS (used in the membershipLoopHandler)
  async sendOrResendDelayedLeaveEvent() {
    // We can reach this at the start of a call (where we do not yet have a membership: state.hasMemberStateEvent=false)
    // or during a call if the state event canceled our delayed event or caused by an unexpected error that removed our delayed event.
    // (Another client could have canceled it, the homeserver might have removed/lost it due to a restart, ...)
    // In the `then` and `catch` block we treat both cases differently. "if (this.state.hasMemberStateEvent) {} else {}"
    return await this.clientSendDelayedDisconnectMembership().then(response => {
      this.state.expectedServerDelayLeaveTs = Date.now() + this.delayedLeaveEventDelayMs;
      this.setAndEmitProbablyLeft(false);
      // On success we reset retries and set delayId.
      this.resetRateLimitCounter(MembershipActionType.SendDelayedEvent);
      this.setAndEmitDelayId(response.delay_id);
      if (this.state.hasMemberStateEvent) {
        // This action was scheduled because the previous delayed event was cancelled
        // due to lack of https://github.com/element-hq/synapse/pull/17810
        return createInsertActionUpdate(MembershipActionType.RestartDelayedEvent, this.delayedLeaveEventRestartMs);
      } else {
        // This action was scheduled because we are in the process of joining
        return createInsertActionUpdate(MembershipActionType.SendJoinEvent);
      }
    }).catch(e => {
      const repeatActionType = MembershipActionType.SendDelayedEvent;
      if (this.manageMaxDelayExceededSituation(e)) {
        return createInsertActionUpdate(repeatActionType);
      }
      const update = this.actionUpdateFromErrors(e, repeatActionType, "_unstable_sendDelayedStateEvent");
      if (update) return update;
      if (this.state.hasMemberStateEvent) {
        // This action was scheduled because the previous delayed event was cancelled
        // due to lack of https://github.com/element-hq/synapse/pull/17810

        // Don't do any other delayed event work if its not supported.
        if (this.isUnsupportedDelayedEndpoint(e)) return {};
        throw Error("Could not send delayed event, even though delayed events are supported. " + e);
      } else {
        // This action was scheduled because we are in the process of joining
        // log and fall through
        if (this.isUnsupportedDelayedEndpoint(e)) {
          this.logger.info("Not using delayed event because the endpoint is not supported");
        } else {
          this.logger.info("Not using delayed event because: " + e);
        }
        // On any other error we fall back to not using delayed events and send the join state event immediately
        return createInsertActionUpdate(MembershipActionType.SendJoinEvent);
      }
    });
  }
  async cancelKnownDelayIdBeforeSendDelayedEvent(delayId) {
    // Remove all running updates and restarts
    return await this.client._unstable_cancelScheduledDelayedEvent(delayId).then(() => {
      this.setAndEmitDelayId(undefined);
      this.resetRateLimitCounter(MembershipActionType.SendDelayedEvent);
      return createReplaceActionUpdate(MembershipActionType.SendDelayedEvent);
    }).catch(e => {
      const repeatActionType = MembershipActionType.SendDelayedEvent;
      const update = this.actionUpdateFromErrors(e, repeatActionType, "cancelScheduledDelayedEvent");
      if (update) return update;
      if (this.isDelayedEventGoneError(e)) {
        // This means we are good and can set it to undefined and run this again.
        this.logger.info("Delayed event to cancel is already gone, scheduling a new one:", e);
        this.setAndEmitDelayId(undefined);
        return createReplaceActionUpdate(repeatActionType);
      }
      if (this.isUnsupportedDelayedEndpoint(e)) {
        return createReplaceActionUpdate(MembershipActionType.SendJoinEvent);
      }
      // We do not just ignore and log this error since we would also need to reset the delayId.

      // This becomes an unrecoverable error case since something is significantly off if we don't hit any of the above cases
      // when state.delayId !== undefined
      // We do not just ignore and log this error since we would also need to reset the delayId.
      // It is cleaner if we, the frontend, rejoins instead of resetting the delayId here and behaving like in the success case.
      throw Error("We failed to cancel a delayed event where we already had a delay id with an error we cannot automatically handle");
    });
  }
  setAndEmitProbablyLeft(probablyLeft) {
    if (this.state.probablyLeft === probablyLeft) {
      return;
    }
    this.state.probablyLeft = probablyLeft;
    this.emit(IMembershipManager/* MembershipManagerEvent */.e.ProbablyLeft, this.state.probablyLeft);
  }
  setAndEmitDelayId(delayId) {
    if (this.state.delayId === delayId) return;
    this.state.delayId = delayId;
    this.emit(IMembershipManager/* MembershipManagerEvent */.e.DelayIdChanged, this.state.delayId);
  }

  /**
   * Attempts to restart the delayed leave event and keeps everything that depends on it in sync.
   *
   * @param delayId the id of the delayed leave event to restart
   * @returns the outcome of the attempt.
   */
  async tryRestartDelayedEvent(delayId) {
    // Compute the duration until we expect the server to send the delayed leave event.
    const durationUntilServerDelayedLeave = this.state.expectedServerDelayLeaveTs ? this.state.expectedServerDelayLeaveTs - Date.now() : undefined;
    const abortPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new p_retry/* AbortError */.lc("Restart delayed event timed out before the HS responded"));
      },
      // We abort immediately at the time where we expect the server to send the delayed leave event.
      // At this point we want the catch block to run and set the `probablyLeft` state.
      //
      // While we are already in probablyLeft state, we use the unaltered delayedLeaveEventRestartLocalTimeoutMs.
      durationUntilServerDelayedLeave !== undefined && !this.state.probablyLeft ? Math.min(this.delayedLeaveEventRestartLocalTimeoutMs, durationUntilServerDelayedLeave) : this.delayedLeaveEventRestartLocalTimeoutMs);
    });
    try {
      // The obvious choice here would be to use the `IRequestOpts` to set the timeout. Since this call might be forwarded
      // to the widget driver this information would get lost. That is why we mimic the AbortError using the race.
      await Promise.race([this.client._unstable_restartScheduledDelayedEvent(delayId), abortPromise]);
    } catch (e) {
      if (this.state.expectedServerDelayLeaveTs && this.state.expectedServerDelayLeaveTs <= Date.now()) {
        // Once we reach this point it's likely that the server is sending the delayed leave event so we emit `probablyLeft = true`.
        // It will emit `probablyLeft = false` once we notice about our leave through sync and successfully setup a new state event.
        this.setAndEmitProbablyLeft(true);
      }
      if (this.isDelayedEventGoneError(e)) {
        // There is nothing left to restart, so we forget the delay id and let the caller decide what to do next.
        this.logger.info("Delayed event to restart is already gone:", e);
        this.setAndEmitDelayId(undefined);
        return "gone";
      }
      if (this.isUnsupportedDelayedEndpoint(e)) {
        // There is nothing left that we could restart, cancel or send with this delay id, so we forget it
        // instead of making every later action try (and fail) to use it.
        this.setAndEmitDelayId(undefined);
        return "unsupported";
      }
      return {
        error: e
      };
    }

    // Whenever we successfully restart the delayed event we update the `state.expectedServerDelayLeaveTs`
    // which stores the predicted timestamp at which the server will send the delayed leave event if there wont be any further
    // successful restart requests.
    this.state.expectedServerDelayLeaveTs = Date.now() + this.delayedLeaveEventDelayMs;
    this.resetRateLimitCounter(MembershipActionType.RestartDelayedEvent);
    this.setAndEmitProbablyLeft(false);
    return "ok";
  }
  async restartDelayedEvent(delayId) {
    const outcome = await this.tryRestartDelayedEvent(delayId);
    if (outcome === "ok") {
      return createInsertActionUpdate(MembershipActionType.RestartDelayedEvent, this.delayedLeaveEventRestartMs);
    }
    if (outcome === "gone") {
      return createInsertActionUpdate(MembershipActionType.SendDelayedEvent);
    }
    // If the HS does not support delayed events we won't reschedule.
    if (outcome === "unsupported") return {};

    // TODO this also needs a test: get rate limit while checking if delayed event is scheduled
    const update = this.actionUpdateFromErrors(outcome.error, MembershipActionType.RestartDelayedEvent, "restartScheduledDelayedEvent");
    if (update) return update;

    // In other error cases we have no idea what is happening
    throw Error("Could not restart delayed event, even though delayed events are supported. " + outcome.error);
  }
  async sendScheduledDelayedLeaveEventOrFallbackToSendLeaveEvent(delayId) {
    return await this.client._unstable_sendScheduledDelayedEvent(delayId).then(() => {
      this.state.hasMemberStateEvent = false;
      this.setAndEmitDelayId(undefined);
      this.resetRateLimitCounter(MembershipActionType.SendScheduledDelayedLeaveEvent);
      return {
        replace: []
      };
    }).catch(e => {
      const repeatActionType = MembershipActionType.SendLeaveEvent;
      if (this.isUnsupportedDelayedEndpoint(e)) return {};
      if (this.isDelayedEventGoneError(e)) {
        // It will never send our leave event, so we send it ourselves.
        this.logger.info("Delayed leave event is already gone, falling back to SendLeaveEvent:", e);
        this.setAndEmitDelayId(undefined);
        return createInsertActionUpdate(repeatActionType);
      }
      const update = this.actionUpdateFromErrors(e, repeatActionType, "sendScheduledDelayedEvent");
      if (update) return update;

      // On any other error we fall back to SendLeaveEvent (this includes hard errors from rate limiting)
      this.logger.warn("Encountered unexpected error during SendScheduledDelayedLeaveEvent. Falling back to SendLeaveEvent", e);
      return createInsertActionUpdate(repeatActionType);
    });
  }
  async sendJoinEvent() {
    const myMembership = this.makeMyMembership(this.membershipEventExpiryMs);
    return await this.clientSendMembership(myMembership).then(() => {
      this.setAndEmitProbablyLeft(false);
      this.state.startTime = Date.now();
      this.state.membershipExpiryTs = this.membershipExpiryTsOf(myMembership);
      // The next update should already use twice the membershipEventExpiryTimeout
      this.state.expireUpdateIterations = 1;
      this.state.hasMemberStateEvent = true;
      this.resetRateLimitCounter(MembershipActionType.SendJoinEvent);
      // A successful (re-)join is a fresh membership: failures accumulated by the previous one
      // (e.g. delayed event restarts that timed out before the server sent our leave) must not carry over.
      this.state.networkErrorRetries.clear();
      // An UpdateExpiry action might be left over from a previous join event.
      // We can reach sendJoinEvent when the delayed leave event gets send by the HS.
      // The branch where we might have a leftover UpdateExpiry action is:
      // RestartDelayedEvent (cannot find it, server removed it)
      // -> SendDelayedEvent (send new delayed event)
      // -> SendJoinEvent (here with a still scheduled UpdateExpiry action)
      const actionsWithoutUpdateExpiry = this.scheduler.actions.filter(a => a.type !== MembershipActionType.UpdateExpiry &&
      // A new UpdateExpiry action with an updated will be scheduled,
      a.type !== MembershipActionType.SendJoinEvent // Manually remove the SendJoinEvent action,
      );
      return {
        replace: [...actionsWithoutUpdateExpiry,
        // To check if the delayed event is still there or got removed by inserting the stateEvent, we need to restart it.
        {
          ts: Date.now(),
          type: MembershipActionType.RestartDelayedEvent
        }, {
          ts: this.computeNextExpiryActionTs(this.state.expireUpdateIterations),
          type: MembershipActionType.UpdateExpiry
        }]
      };
    }).catch(e => {
      const update = this.actionUpdateFromErrors(e, MembershipActionType.SendJoinEvent, "sendStateEvent");
      if (update) return update;
      throw e;
    });
  }

  /**
   * The timestamp at which a membership we send stops being valid for other clients.
   *
   * State events are valid until `created_ts + expires`. `makeMyMembership` inherits `created_ts` from our previous
   * membership when we have one, otherwise the event's own timestamp counts.
   * @param sent the membership as we sent it
   */
  membershipExpiryTsOf(sent) {
    const {
      created_ts: createdTs,
      expires
    } = sent;
    return (createdTs !== null && createdTs !== void 0 ? createdTs : Date.now()) + (expires !== null && expires !== void 0 ? expires : CallMembership/* DEFAULT_EXPIRE_DURATION */.F);
  }

  /**
   * Gives up on our current membership and starts a fresh join.
   *
   * We forget our own membership so that the next state event does not inherit its `created_ts`. That would keep
   * the identity of the membership we are giving up while `expires` starts over from a single iteration, which can
   * put the absolute expiry in the past.
   * @param reason why we are not keeping the current membership. Only used for logging.
   */
  rejoinFromScratch(reason) {
    this.logger.warn(`Rejoining the session from scratch: ${reason}`);
    this.state.hasMemberStateEvent = false;
    this._ownMembership = undefined;
    return createReplaceActionUpdate(MembershipActionType.SendDelayedEvent);
  }

  /**
   * Schedules another attempt at the expiry update. Once our membership has expired we stop trying to keep it alive
   * and rejoin instead, so that we never end up silently expired.
   * @param delayMs how long to wait before trying again. Clamped so that we always get a last attempt at the moment
   * the membership expires, and never schedule one beyond it.
   * @param reason why we cannot update the expiry right now. Only used for logging.
   * @param resendDelayedEvent whether to schedule a replacement delayed leave event first, with the retry running
   * right after it.
   */
  deferExpiryUpdate(delayMs, reason, {
    resendDelayedEvent = false
  } = {}) {
    const remainingMs = this.state.membershipExpiryTs - Date.now();
    if (remainingMs <= 0) {
      return this.rejoinFromScratch(`${reason}, and the membership expired while we were trying`);
    }
    const retry = {
      ts: Date.now() + Math.min(delayMs, remainingMs),
      type: MembershipActionType.UpdateExpiry
    };
    if (!resendDelayedEvent) return {
      insert: [retry]
    };

    // Actions with the same timestamp run in insertion order, so the retry gets its turn after the replacement.
    //
    // The periodic `RestartDelayedEvent` that is still queued has to go, like `sendJoinEvent` does it: sending
    // the delayed event schedules the one restart loop we want, and a leftover one would either start a second
    // loop, or, while the replacement is still pending, queue a second `SendDelayedEvent` that cancels the
    // replacement and `replace`s the retry out of the queue.
    const otherActions = this.scheduler.actions.filter(a => a.type !== MembershipActionType.RestartDelayedEvent && a.type !== MembershipActionType.UpdateExpiry);
    return {
      replace: [...otherActions, {
        ts: Date.now(),
        type: MembershipActionType.SendDelayedEvent
      }, retry]
    };
  }

  /**
   * Makes sure a delayed leave event is scheduled that will outlive the membership update we are about to send.
   *
   * Re-sending our membership is only safe while our delayed leave event is still scheduled: if the server has
   * already sent it (e.g. because the device was asleep and no restarts reached the server), the membership we
   * would send would come back to life without any delayed leave event to clean it up, and stay until `expires`
   * runs out. So we restart the delayed event first. A success guarantees it will outlive the membership update;
   * if it is gone instead, we have to work out why.
   * @returns `undefined` if the membership can be sent, otherwise the action to take instead.
   */
  async ensureDelayedLeaveEventProtectsMembership() {
    if (!this.state.delayId) return this.waitForPendingDelayedLeaveEvent();
    const outcome = await this.tryRestartDelayedEvent(this.state.delayId);
    // `"ok"` and `"unsupported"` both let us go ahead: either the delayed leave event was just restarted, or
    // there is none that could have removed our membership in the first place.
    if (outcome === "ok" || outcome === "unsupported") return undefined;
    if (outcome === "gone") return this.recoverFromGoneDelayedLeaveEvent();
    return this.recoverFromFailedDelayedLeaveEventRestart(outcome.error);
  }

  /**
   * Without a delay id, a `SendDelayedEvent` action may be queued that has not succeeded yet. Then we wait for it
   * rather than put the membership back on the server with nothing to clean it up. The retry gets the same
   * timestamp, and actions with the same timestamp run in insertion order, so it runs right after that attempt:
   * straight away if the delayed event is there, or to wait for the next attempt if it rescheduled.
   *
   * Without such an action queued we are not using delayed events at all, because the homeserver does not support
   * them. Then there is also no delayed leave event that could have removed our membership, and nothing to protect
   * it from.
   * @returns `undefined` if the membership can be sent, otherwise the deferred expiry update.
   */
  waitForPendingDelayedLeaveEvent() {
    const pending = this.scheduler.actions.find(a => a.type === MembershipActionType.SendDelayedEvent);
    if (!pending) return undefined;
    return this.deferExpiryUpdate(Math.max(0, pending.ts - Date.now()), "no delayed leave event is scheduled");
  }

  /**
   * The server does not know our delayed leave event anymore. Whether it sent it or lost it decides whether we
   * still have a membership to extend.
   */
  recoverFromGoneDelayedLeaveEvent() {
    if (this.state.expectedServerDelayLeaveTs !== undefined && this.state.expectedServerDelayLeaveTs > Date.now()) {
      // It is too early for the server to have sent the delayed leave event, so it must have been cancelled or
      // lost instead (e.g. by a homeserver lacking https://github.com/element-hq/synapse/pull/17810 when our
      // last state event landed). Our membership is still there and only needs a new delayed event, so we
      // schedule one and pick the expiry update back up right after it.
      return this.deferExpiryUpdate(0, "the delayed leave event was cancelled or lost", {
        resendDelayedEvent: true
      });
    }
    // The delayed leave event has been sent, which also means our membership is gone.
    return this.rejoinFromScratch("the server already sent our delayed leave event");
  }

  /**
   * Restarting our delayed leave event failed with something other than the delayed event being gone.
   * @param error what the restart failed with
   * @returns `undefined` if the membership can be sent regardless, otherwise the action to take instead.
   * @throws the error if it is not one we retry on.
   */
  recoverFromFailedDelayedLeaveEventRestart(error) {
    var _this$state$expectedS;
    // The retry budget belongs to the restart, but what we need to repeat is the expiry update.
    const update = this.actionUpdateFromErrors(error, MembershipActionType.RestartDelayedEvent, "restartScheduledDelayedEvent");
    if (!update) throw error;

    // A transient failure does not mean the delayed leave event is not there. What we need for the update to be
    // safe is that it is still pending when the update lands, and `expectedServerDelayLeaveTs` tells us that:
    // while it is comfortably in the future, the restart was only a refresh we can do without, and the
    // `RestartDelayedEvent` loop will make up for it. Only a stale timestamp leaves us guessing.
    const durationUntilServerDelayedLeave = ((_this$state$expectedS = this.state.expectedServerDelayLeaveTs) !== null && _this$state$expectedS !== void 0 ? _this$state$expectedS : 0) - Date.now();
    if (durationUntilServerDelayedLeave > this.delayedLeaveEventRestartLocalTimeoutMs) {
      this.logger.warn("Could not restart the delayed leave event before extending `expires`, going ahead since it is still pending", error);
      return undefined;
    }
    const retryTs = "insert" in update ? update.insert[0].ts : Date.now();
    return this.deferExpiryUpdate(Math.max(0, retryTs - Date.now()), "restarting the delayed leave event failed");
  }
  async updateExpiryOnJoinedEvent() {
    const protection = await this.ensureDelayedLeaveEventProtectsMembership();
    if (protection) return protection;
    const nextExpireUpdateIteration = this.state.expireUpdateIterations + 1;
    const myMembership = this.makeMyMembership(this.membershipEventExpiryMs * nextExpireUpdateIteration);
    return await this.clientSendMembership(myMembership).then(() => {
      // Success, we reset retries and schedule update.
      this.resetRateLimitCounter(MembershipActionType.UpdateExpiry);
      this.state.expireUpdateIterations = nextExpireUpdateIteration;
      this.state.membershipExpiryTs = this.membershipExpiryTsOf(myMembership);
      return {
        insert: [{
          ts: this.computeNextExpiryActionTs(nextExpireUpdateIteration),
          type: MembershipActionType.UpdateExpiry
        }]
      };
    }).catch(e => {
      const update = this.actionUpdateFromErrors(e, MembershipActionType.UpdateExpiry, "sendStateEvent");
      if (update) return update;
      throw e;
    });
  }
  async sendFallbackLeaveEvent() {
    return await this.clientSendLeaveMembership().then(() => {
      this.resetRateLimitCounter(MembershipActionType.SendLeaveEvent);
      this.state.hasMemberStateEvent = false;
      return {
        replace: []
      };
    }).catch(e => {
      const update = this.actionUpdateFromErrors(e, MembershipActionType.SendLeaveEvent, "sendStateEvent");
      if (update) return update;
      throw e;
    });
  }

  // HELPERS
  /**
   * this creates `${localUserId}_${localDeviceId}_${this.slotDescription.application}${this.slotDescription.id}`
   * which is not compatible with membershipID of session type member events. They have to be `${localUserId}:${localDeviceId}`
   */
  makeMembershipStateKey(localUserId, localDeviceId) {
    // INFO_SLOT_ID_LEGACY_CASE  (search for all occurances of this INFO to get the full picture)
    // Revert back to "" just for the state key (state keys are always legacy. we use sticky events for non legacy events)
    const application = this.slotDescription.application;
    const needsEmptyStringRoomFix = application === "m.call" && this.slotDescription.id === "ROOM";
    const slotId = needsEmptyStringRoomFix ? "" : this.slotDescription.id;
    const stateKey = `${localUserId}_${localDeviceId}_${application}${slotId}`;
    if (/^org\.matrix\.msc(3757|3779)\b/.exec(this.room.getVersion())) {
      return stateKey;
    } else {
      return `_${stateKey}`;
    }
  }

  /**
   * Constructs our own membership
   * @returns Only returns `SessionMembershipData`
   */
  makeMyMembership(expires) {
    const ownMembership = this.ownMembership;
    const needsEmptyStringRoomFix = this.slotDescription.application === "m.call" && this.slotDescription.id === "ROOM";
    return _objectSpread(_objectSpread(_objectSpread({}, this.applicationData), {}, {
      "application": this.slotDescription.application,
      // INFO_SLOT_ID_LEGACY_CASE  (search for all occurances of this INFO to get the full picture)
      // Revert back to "" just for the sending the event.
      "call_id": needsEmptyStringRoomFix ? "" : this.slotDescription.id,
      "scope": "m.room",
      "device_id": this.deviceId,
      // DO NOT use this.memberId here since that is the state key (using application...)
      // But for session events we use the colon seperated userId and deviceId. The SFU will automatically
      // assign those values to the media participant for those versions.
      "membershipID": `${this.userId}:${this.deviceId}`,
      expires,
      "m.call.intent": this.callIntent
    }, this.callCapabilities !== undefined ? {
      capabilities: this.callCapabilities
    } : {}), {}, {
      "focus_active": {
        type: "livekit",
        focus_selection: "multi_sfu"
      },
      "foci_preferred": this.publishedTransports
    }, ownMembership !== undefined ? {
      created_ts: ownMembership.createdTs()
    } : undefined);
  }

  // Error checks and handlers

  /**
   * Check if its a NOT_FOUND error
   * @param error the error causing this handler check/execution
   * @returns true if its a not found error
   */
  isNotFoundError(error) {
    return error instanceof errors/* MatrixError */.up && error.errcode === "M_NOT_FOUND";
  }

  /**
   * Check if its a 409 (conflict) error.
   * A homeserver answers a delayed event management action (restart, cancel, send) with a 409 if the delayed event
   * is already finalised with an outcome that conflicts with the action
   * (MSC4140 — https://github.com/matrix-org/matrix-spec-proposals/blob/main/proposals/4140-delayed-events-futures.md).
   * The MSC does not mandate an errcode for this case, so we only check the http status.
   * @param error the error causing this handler check/execution
   * @returns true if its a conflict error
   */
  isConflictError(error) {
    return error instanceof errors/* HTTPError */.Hl && error.httpStatus === 409;
  }

  /**
   * Check if the error tells us that the delayed event we tried to manage is gone: either the homeserver does not
   * know about it anymore (404) or it is already finalised with an outcome that conflicts with our action (409).
   * In both cases the delayed event will not do what we asked, so the `delayId` is stale and needs to be replaced.
   * @param error the error causing this handler check/execution
   * @returns true if the delayed event is gone
   */
  isDelayedEventGoneError(error) {
    return this.isNotFoundError(error) || this.isConflictError(error);
  }

  /**
   * Check if this is a DelayExceeded timeout and update the TimeoutOverride for the next try
   * @param error the error causing this handler check/execution
   * @returns true if its a delay exceeded error and we updated the local TimeoutOverride
   */
  manageMaxDelayExceededSituation(error) {
    if (error instanceof errors/* MatrixError */.up && error.errcode === "M_UNKNOWN" && error.data["org.matrix.msc4140.errcode"] === "M_MAX_DELAY_EXCEEDED") {
      const maxDelayAllowed = error.data["org.matrix.msc4140.max_delay"];
      if (typeof maxDelayAllowed === "number" && this.delayedLeaveEventDelayMs > maxDelayAllowed) {
        this.delayedLeaveEventDelayMsOverride = maxDelayAllowed;
      }
      this.logger.warn("Retry sending delayed disconnection event due to server timeout limitations:", error);
      return true;
    }
    return false;
  }
  actionUpdateFromErrors(error, type, method) {
    const updateLimit = this.actionUpdateFromRateLimitError(error, method, type);
    if (updateLimit) return updateLimit;
    const updateNetwork = this.actionUpdateFromNetworkErrorRetry(error, type);
    if (updateNetwork) return updateNetwork;
  }
  /**
   * Check if we have a rate limit error and schedule the same action again if we dont exceed the rate limit retry count yet.
   * @param error the error causing this handler check/execution
   * @param method the method used for the throw message
   * @param type which MembershipActionType we reschedule because of a rate limit.
   * @throws If it is a rate limit error and the retry count got exceeded
   * @returns Returns true if we handled the error by rescheduling the correct next action.
   * Returns false if it is not a network error.
   */
  actionUpdateFromRateLimitError(error, method, type) {
    var _this$state$rateLimit;
    // "Is rate limit"-boundary
    if (!((error instanceof errors/* HTTPError */.Hl || error instanceof errors/* MatrixError */.up) && error.isRateLimitError())) {
      return undefined;
    }

    // retry boundary
    const rateLimitRetries = (_this$state$rateLimit = this.state.rateLimitRetries.get(type)) !== null && _this$state$rateLimit !== void 0 ? _this$state$rateLimit : 0;
    if (rateLimitRetries < this.maximumRateLimitRetryCount) {
      let resendDelay;
      const defaultMs = 5000;
      try {
        var _error$getRetryAfterM;
        resendDelay = (_error$getRetryAfterM = error.getRetryAfterMs()) !== null && _error$getRetryAfterM !== void 0 ? _error$getRetryAfterM : defaultMs;
        this.logger.info(`Rate limited by server, retrying in ${resendDelay}ms`);
      } catch (e) {
        this.logger.warn(`Error while retrieving a rate-limit retry delay, retrying after default delay of ${defaultMs}`, e);
        resendDelay = defaultMs;
      }
      this.state.rateLimitRetries.set(type, rateLimitRetries + 1);
      return createInsertActionUpdate(type, resendDelay);
    }
    throw Error("Exceeded maximum retries for " + type + " attempts (client." + method + ")", {
      cause: error
    });
  }

  /**
   * FIXME Don't Check the error and retry the same MembershipAction again in the configured time and for the configured retry count.
   * @param error the error causing this handler check/execution
   * @param type the action type that we need to repeat because of the error
   * @throws If it is a network error and the retry count got exceeded
   * @returns
   * Returns true if we handled the error by rescheduling the correct next action.
   * Returns false if it is not a network error.
   */
  actionUpdateFromNetworkErrorRetry(error, type) {
    var _this$state$networkEr;
    // "Is a network error"-boundary
    const retries = (_this$state$networkEr = this.state.networkErrorRetries.get(type)) !== null && _this$state$networkEr !== void 0 ? _this$state$networkEr : 0;

    // Strings for error logging
    const retryDurationString = this.networkErrorRetryMs / 1000 + "s";
    const retryCounterString = "(" + retries + "/" + this.maximumNetworkErrorRetryCount + ")";

    // Variables for scheduling the new event
    const retryDuration = this.networkErrorRetryMs;
    if (error instanceof Error && error.name === "AbortError") {
      // A local timeout means the server accepted the request but is slow to answer. Retry immediately and
      // do not count it towards the fatal retry limit: the server's delayed leave already bounds how long a
      // stalled restart can go unnoticed, and the resulting forced re-join recovers the membership. Giving
      // up here would only replace a temporary media pause with a "connection lost" error for the user.
      this.logger.warn("Network local timeout error while sending event, immediate retry", error);
      return createInsertActionUpdate(type, 0);
    } else if (error instanceof Error && error.message.includes("updating delayed event")) {
      // TODO: We do not want error message matching here but instead the error should be a typed HTTPError
      // and be handled below automatically (the same as in the SPA case).
      //
      // The error originates because of https://github.com/matrix-org/matrix-widget-api/blob/5d81d4a26ff69e4bd3ddc79a884c9527999fb2f4/src/ClientWidgetApi.ts#L698-L701
      // uses `e` instance of HttpError (and not MatrixError)
      // The element web widget driver (only checks for MatrixError) is then failing to process (`processError`) it as a typed error: https://github.com/element-hq/element-web/blob/471712cbf06a067e5499bd5d2d7a75f693d9a12d/src/stores/widgets/StopGapWidgetDriver.ts#L711-L715
      // So it will not call: `error.asWidgetApiErrorData()` which is also missing for `HttpError`
      //
      // A proper fix would be to either find a place to convert the `HttpError` into a `MatrixError` and the `processError`
      // method to handle it as expected or to adjust `processError` to also process `HttpError`'s.
      this.logger.warn("delayed event update timeout error, retrying in " + retryDurationString + " " + retryCounterString, error);
    } else if (error instanceof errors/* ConnectionError */.Rc) {
      this.logger.warn("Network connection error while sending event, retrying in " + retryDurationString + " " + retryCounterString, error);
    } else if ((error instanceof errors/* HTTPError */.Hl || error instanceof errors/* MatrixError */.up) && typeof error.httpStatus === "number" && error.httpStatus >= 500 && error.httpStatus < 600) {
      this.logger.warn("Server error while sending event, retrying in " + retryDurationString + " " + retryCounterString, error);
    } else {
      return undefined;
    }

    // retry boundary
    if (retries < this.maximumNetworkErrorRetryCount) {
      this.state.networkErrorRetries.set(type, retries + 1);
      return createInsertActionUpdate(type, retryDuration);
    }

    // Failure
    throw Error("Reached maximum (" + this.maximumNetworkErrorRetryCount + ") retries cause by: " + error);
  }

  /**
   * Check if its an UnsupportedDelayedEventsEndpointError and which implies that we cannot do any delayed event logic
   * @param error The error to check
   * @returns true it its an UnsupportedDelayedEventsEndpointError
   */
  isUnsupportedDelayedEndpoint(error) {
    return error instanceof src_errors/* UnsupportedDelayedEventsEndpointError */.qK;
  }
  resetRateLimitCounter(type) {
    this.state.rateLimitRetries.set(type, 0);
    this.state.networkErrorRetries.set(type, 0);
  }
  get status() {
    const actions = this.scheduler.actions;
    if (actions.length === 1) {
      const {
        type
      } = actions[0];
      switch (type) {
        case MembershipActionType.SendDelayedEvent:
        case MembershipActionType.SendJoinEvent:
          return matrixrtc_types/* Status */.nW.Connecting;
        case MembershipActionType.UpdateExpiry:
          // where no delayed events
          return matrixrtc_types/* Status */.nW.Connected;
        case MembershipActionType.SendScheduledDelayedLeaveEvent:
        case MembershipActionType.SendLeaveEvent:
          return matrixrtc_types/* Status */.nW.Disconnecting;
        default:
        // pass through as not expected
      }
    } else if (actions.length === 2) {
      const types = actions.map(a => a.type);
      // normal state for connected with delayed events
      if ((types.includes(MembershipActionType.RestartDelayedEvent) || types.includes(MembershipActionType.SendDelayedEvent) && this.state.hasMemberStateEvent) && types.includes(MembershipActionType.UpdateExpiry)) {
        return matrixrtc_types/* Status */.nW.Connected;
      }
    } else if (actions.length === 3) {
      const types = actions.map(a => a.type);
      // It is a correct connected state if we already schedule the next Restart but have not yet cleaned up
      // the current restart.
      if (types.filter(t => t === MembershipActionType.RestartDelayedEvent).length === 2 && types.includes(MembershipActionType.UpdateExpiry)) {
        return matrixrtc_types/* Status */.nW.Connected;
      }
    }
    if (!this.scheduler.running) {
      return matrixrtc_types/* Status */.nW.Disconnected;
    }
    this.logger.error("MembershipManager has an unknown state. Actions: ", actions);
    return matrixrtc_types/* Status */.nW.Unknown;
  }
  get probablyLeft() {
    return this.state.probablyLeft;
  }
  get delayId() {
    return this.state.delayId;
  }
}

/**
 * Implementation of the Membership manager that uses sticky events
 * rather than state events.
 */
class StickyEventMembershipManager extends MembershipManager {
  constructor(joinConfig, room, clientWithSticky, sessionDescription,
  // this needs to become a uuid so that consecutive join/leaves result in a key rotation.
  // we keep it as a string for now for backwards compatibility.
  memberId, parentLogger) {
    super(joinConfig, room, clientWithSticky, sessionDescription, parentLogger);
    (0,defineProperty/* default */.A)(this, "clientSendDelayedDisconnectMembership", () => this.clientWithSticky._unstable_sendStickyDelayedEvent(this.room.roomId, MEMBERSHIP_STICKY_DURATION_MS, this.delayedLeaveEventDelayMs, null, _types_event/* EventType */.Bx.RTCMembership, this.makeMyLeftMembership()));
    (0,defineProperty/* default */.A)(this, "clientSendMembership", myMembership => {
      return this.clientWithSticky._unstable_sendStickyEvent(this.room.roomId, MEMBERSHIP_STICKY_DURATION_MS, null, _types_event/* EventType */.Bx.RTCMembership, _objectSpread(_objectSpread({
        slot_id: (0,matrixrtc_utils/* computeSlotId */.Ds)(this.slotDescription)
      }, myMembership), {}, {
        msc4354_sticky_key: this.memberId
      }));
    });
    (0,defineProperty/* default */.A)(this, "clientSendLeaveMembership", () => this.clientWithSticky._unstable_sendStickyEvent(this.room.roomId, MEMBERSHIP_STICKY_DURATION_MS, null, _types_event/* EventType */.Bx.RTCMembership, this.makeMyLeftMembership()));
    this.clientWithSticky = clientWithSticky;
    this.memberId = memberId;
  }
  actionUpdateFromErrors(e, t, m) {
    var _StickyEventMembershi;
    return super.actionUpdateFromErrors(e, t, (_StickyEventMembershi = StickyEventMembershipManager.nameMap.get(m)) !== null && _StickyEventMembershi !== void 0 ? _StickyEventMembershi : "unknown");
  }

  /** A sticky event vanishes `MEMBERSHIP_STICKY_DURATION_MS` after it was sent, whatever its content says. */
  membershipExpiryTsOf() {
    return Date.now() + MEMBERSHIP_STICKY_DURATION_MS;
  }

  /**
   *
   * @returns Only returns `RtcMembershipData`
   */
  makeMyMembership() {
    return {
      application: _objectSpread(_objectSpread(_objectSpread({}, this.applicationData), {}, {
        type: this.slotDescription.application
      }, this.callIntent ? {
        "m.call.intent": this.callIntent
      } : {}), this.callCapabilities !== undefined ? {
        capabilities: this.callCapabilities
      } : {}),
      slot_id: (0,matrixrtc_utils/* computeSlotId */.Ds)(this.slotDescription),
      transports: {
        published: this.publishedTransports,
        can_subscribe: ["livekit"]
      },
      member: {
        device_id: this.deviceId,
        user_id: this.userId,
        id: this.memberId,
        membership: "join"
      }
    };
  }

  /**
   * The content of the `m.rtc.member` event that marks our membership as left.
   */
  makeMyLeftMembership() {
    return {
      slot_id: (0,matrixrtc_utils/* computeSlotId */.Ds)(this.slotDescription),
      member: {
        id: this.memberId,
        membership: "leave"
      },
      msc4354_sticky_key: this.memberId
    };
  }
}
;(0,defineProperty/* default */.A)(StickyEventMembershipManager, "nameMap", new Map([["sendStateEvent", "_unstable_sendStickyEvent"], ["sendDelayedStateEvent", "_unstable_sendStickyDelayedEvent"]]));

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/RTCEncryptionManager.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ RTCEncryptionManager)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _EncryptionManager_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/EncryptionManager.ts");
/* harmony import */ var _base64_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/base64.ts");
/* harmony import */ var _IKeyTransport_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/IKeyTransport.ts");
/* harmony import */ var _utils_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/utils.ts");
/* harmony import */ var _utils_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/utils.ts");
/* harmony import */ var _membershipData_rtc_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/membershipData/rtc.ts");
/* harmony import */ var _LivekitTransport_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/LivekitTransport.ts");

/*
Copyright 2025-2026 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/









/**
 * Default for {@link EncryptionConfig.keyRotationParticipantLimit}.
 *
 * Setting this to undefined implies that we do not have a limit and full rotations are always done.
 * This is the most secure and least performant option.
 * It is highly recommended to set this to < 50 for client deployments that are planned to be used for large calls.
 * But before setting this, make yourself familiar with the exact security implications.
 * Key, rotations will stop when reaching this user limit in a call. The call will still be encrypted.
 */
const DEFAULT_KEY_ROTATION_PARTICIPANT_LIMIT = undefined;

/**
 * RTCEncryptionManager is used to manage the encryption keys for a call.
 *
 * It is responsible for distributing the keys to the other participants and rotating the keys if needed.
 *
 * This manager when used with to-device transport will share the existing key only to new joiners, and rotate
 * if there is a leaver.
 *
 * XXX In the future we want to distribute a ratcheted key not the current one for new joiners.
 */
class RTCEncryptionManager {
  /**
   *
   * @param ownMembership - our own membership info
   * @param getMemberships - function to get current memberships
   * @param transport - key transport (room or to-device)
   * @param statistics - statistics collector
   * @param onEncryptionKeysChanged - callback to notify the media layer of new keys
   * @param parentLogger - optional parent logger
   * @param rtcBackendIdProvider - A function to compute the rtc backend identity, exposed for testing purposes
   */
  constructor(ownMembership, getMemberships, transport,
  // Callback to notify the media layer of new keys
  onEncryptionKeysChanged, parentLogger, rtcBackendIdProvider) {
    // This is a stop-gap solution for now. The preferred way to handle this case would be instead
    // to create a NoOpEncryptionManager that does nothing and use it for the session.
    // This will be done when removing the legacy EncryptionManager.
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "manageMediaKeys", false);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "publishedTransports", []);
    /**
     * Store the key rings for each participant.
     * The encryption manager stores the keys because the application layer might not be ready yet to handle the keys.
     * The keys are stored and can be retrieved later when the application layer is ready {@link RTCEncryptionManager#getEncryptionKeys}.
     */
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "participantKeyRings", new Map());
    // The current per-sender media key for this device
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "outboundSession", null);
    /**
     * Ensures that there is only one distribute operation at a time for that call.
     */
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "currentKeyDistributionPromise", null);
    /**
     * The time to wait before using the outbound session after it has been distributed.
     * This is to ensure that the key is delivered to all participants before it is used.
     * When creating the first key, this is set to 0 so that the key can be used immediately.
     */
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "useKeyDelay", 5000);
    /**
     * We want to avoid rolling out a new outbound key when the previous one was created less than `keyRotationGracePeriodMs` milliseconds ago.
     * This is to avoid expensive key rotations when users quickly join the call in a row.
     *
     * This must be higher than `useKeyDelay` to have an effect.
     * If it is lower, the current key will always be older than the grace period.
     * @private
     */
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "keyRotationGracePeriodMs", 10000);
    /**
     * The number of participants at or above which we stop rotating the key altogether.
     * The current key is still distributed to new joiners, but no new key is generated.
     * @see EncryptionConfig.keyRotationParticipantLimit
     * @private
     */
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "keyRotationParticipantLimit", DEFAULT_KEY_ROTATION_PARTICIPANT_LIMIT);
    /**
     * If a new key distribution is being requested while one is going on, we will set this flag to true.
     * This will ensure that a new round is started after the current one.
     * @private
     */
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "needToEnsureKeyAgain", false);
    /**
     * There is a possibility that keys arrive in the wrong order.
     * For example, after a quick join/leave/join, there will be 2 keys of index 0 distributed, and
     * if they are received in the wrong order, the stream won't be decryptable.
     * For that reason we keep a small buffer of keys for a limited time to disambiguate.
     * @private
     */
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "keyBuffer", new _utils_ts__WEBPACK_IMPORTED_MODULE_5__/* .OutdatedKeyFilter */ .Uo());
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "logger", undefined);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "rtcIdentityProvider", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "ownBackendIdentitiesPromise", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "keysWithoutMatchingRTCMembership", []);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onNewKeyReceived", (membership, keyBase64Encoded, index, timestamp) => {
      var _this$logger2;
      // `manageMediaKeys` is a stop-gap solution for now. The preferred way to handle this case would be instead
      // to create a NoOpEncryptionManager that does nothing and use it for the session.
      // This will be done when removing the legacy EncryptionManager.
      if (!this.manageMediaKeys) {
        var _this$logger;
        (_this$logger = this.logger) === null || _this$logger === void 0 || _this$logger.warn(`Received key over transport ${membership.userId}:${membership.deviceId} at index ${index} but media keys are disabled`);
        return;
      }
      (_this$logger2 = this.logger) === null || _this$logger2 === void 0 || _this$logger2.debug(`Received key over transport ${membership.userId}:${membership.deviceId} at index ${index}`);

      // We received a new key, notify the video layer of this new key so that it can decrypt the frames properly.
      const keyBin = (0,_base64_ts__WEBPACK_IMPORTED_MODULE_2__/* .decodeBase64 */ .y4)(keyBase64Encoded);
      const candidateInboundSession = {
        key: keyBin,
        membership,
        keyIndex: index,
        creationTS: timestamp
      };
      const outdated = this.keyBuffer.isOutdated(membership, candidateInboundSession);
      if (!outdated) {
        this.addKeyToParticipant(candidateInboundSession.key, candidateInboundSession.keyIndex, candidateInboundSession.membership);
      } else {
        var _this$logger3;
        (_this$logger3 = this.logger) === null || _this$logger3 === void 0 || _this$logger3.info(`Received an out of order key for ${membership.userId}:${membership.deviceId}, dropping it`);
      }
    });
    this.ownMembership = ownMembership;
    this.getMemberships = getMemberships;
    this.transport = transport;
    this.onEncryptionKeysChanged = onEncryptionKeysChanged;
    this.logger = parentLogger === null || parentLogger === void 0 ? void 0 : parentLogger.getChild(`[EncryptionManager]`);
    this.rtcIdentityProvider = rtcBackendIdProvider !== null && rtcBackendIdProvider !== void 0 ? rtcBackendIdProvider : _membershipData_rtc_ts__WEBPACK_IMPORTED_MODULE_6__/* .computeRtcIdentityRaw */ .t;
  }

  /**
   * Whether the session currently has too many participants for the key to be rotated.
   *
   * This is computed by checking the participant count. If there are too many participants for efficient rotations,
   * the key rotation will be suppressed.
   * While this is true, the current key is still shared with new joiners and the current call is still fully encrypted,
   * but no new key is generated for joiners or leavers. Changes are signalled by {@link MatrixRTCSessionEvent.KeyRotationSuppressedChanged}.
   * @see EncryptionConfig.keyRotationParticipantLimit
   */
  get isKeyRotationSuppressed() {
    if (!this.manageMediaKeys) return false;
    if (this.keyRotationParticipantLimit === undefined) return false;
    return this.getMemberships().length >= this.keyRotationParticipantLimit;
  }
  getOwnBackendIdentities() {
    var _this$ownBackendIdent;
    (_this$ownBackendIdent = this.ownBackendIdentitiesPromise) !== null && _this$ownBackendIdent !== void 0 ? _this$ownBackendIdent : this.ownBackendIdentitiesPromise = (async () => {
      const {
        userId,
        deviceId,
        memberId
      } = this.ownMembership;
      const livekitTransports = this.publishedTransports.filter(_LivekitTransport_ts__WEBPACK_IMPORTED_MODULE_7__/* .isUnstableLivekitTransport */ .W$);
      const backendIdentities = [];
      if (livekitTransports.some(t => "url" in t)) {
        var _this$logger4;
        (_this$logger4 = this.logger) === null || _this$logger4 === void 0 || _this$logger4.info(`Computing RTC backend identity for ${userId}:${deviceId}:${memberId}`);
        backendIdentities.push(await this.rtcIdentityProvider(userId, memberId));
      }
      if (livekitTransports.some(t => "livekit_service_url" in t)) {
        backendIdentities.push(`${userId}:${deviceId}`);
      }
      return backendIdentities;
    })();
    return this.ownBackendIdentitiesPromise;
  }
  getEncryptionKeys() {
    return new Map(this.participantKeyRings);
  }
  checkKeysWithoutMatchingRTCMembership() {
    const keyInfoTemp = this.keysWithoutMatchingRTCMembership;
    this.keysWithoutMatchingRTCMembership = [];
    keyInfoTemp.forEach(keyInfo => {
      this.addKeyToParticipant(keyInfo.key, keyInfo.keyIndex, keyInfo.membership);
    });
  }
  addKeyToParticipant(key, keyIndex, membership) {
    const fullMembership = this.getMemberships().find(member => member.userId === membership.userId && member.deviceId === membership.deviceId && member.memberId === membership.memberId);
    if (!fullMembership) {
      var _this$logger5;
      (_this$logger5 = this.logger) === null || _this$logger5 === void 0 || _this$logger5.info(`No matching RTC membership for key from ${membership.userId}:${membership.deviceId}, delaying key addition`);
      this.keysWithoutMatchingRTCMembership.push({
        key,
        keyIndex,
        membership
      });
      return;
    }
    for (const backendIdentity of fullMembership.backendIdentities) {
      this.addKeyToParticipantWithBackendIdentity(key, keyIndex, membership, backendIdentity);
    }
  }
  addKeyToParticipantWithBackendIdentity(key, keyIndex, membership, backendIdentity) {
    const mapKey = (0,_EncryptionManager_ts__WEBPACK_IMPORTED_MODULE_1__/* .getEncryptionKeyMapKey */ ._)(membership);
    if (!this.participantKeyRings.has(mapKey)) {
      this.participantKeyRings.set(mapKey, []);
    }
    this.participantKeyRings.get(mapKey).push({
      key,
      keyIndex,
      membership,
      backendIdentity
    });
    this.onEncryptionKeysChanged(key, keyIndex, membership, backendIdentity);
  }
  join(joinConfig, publishedTransports) {
    var _joinConfig$manageMed, _joinConfig$useKeyDel, _joinConfig$keyRotati, _joinConfig$keyRotati2, _this$logger6;
    this.manageMediaKeys = (_joinConfig$manageMed = joinConfig === null || joinConfig === void 0 ? void 0 : joinConfig.manageMediaKeys) !== null && _joinConfig$manageMed !== void 0 ? _joinConfig$manageMed : true; // default to true
    this.publishedTransports = publishedTransports;
    this.ownBackendIdentitiesPromise = undefined;
    this.useKeyDelay = (_joinConfig$useKeyDel = joinConfig === null || joinConfig === void 0 ? void 0 : joinConfig.useKeyDelay) !== null && _joinConfig$useKeyDel !== void 0 ? _joinConfig$useKeyDel : 1000;
    this.keyRotationGracePeriodMs = (_joinConfig$keyRotati = joinConfig === null || joinConfig === void 0 ? void 0 : joinConfig.keyRotationGracePeriodMs) !== null && _joinConfig$keyRotati !== void 0 ? _joinConfig$keyRotati : 10000;
    this.keyRotationParticipantLimit = (_joinConfig$keyRotati2 = joinConfig === null || joinConfig === void 0 ? void 0 : joinConfig.keyRotationParticipantLimit) !== null && _joinConfig$keyRotati2 !== void 0 ? _joinConfig$keyRotati2 : DEFAULT_KEY_ROTATION_PARTICIPANT_LIMIT;
    this.transport.on(_IKeyTransport_ts__WEBPACK_IMPORTED_MODULE_3__/* .KeyTransportEvents */ .u.ReceivedKeys, this.onNewKeyReceived);
    void this.getOwnBackendIdentities(); // precompute own identity

    (_this$logger6 = this.logger) === null || _this$logger6 === void 0 || _this$logger6.info(`Joining room`);
    this.transport.start();
  }
  leave() {
    this.transport.off(_IKeyTransport_ts__WEBPACK_IMPORTED_MODULE_3__/* .KeyTransportEvents */ .u.ReceivedKeys, this.onNewKeyReceived);
    this.transport.stop();
    this.participantKeyRings.clear();
  }

  /**
   * Will ensure that a new key is distributed and used to encrypt our media.
   * If there is already a key distribution in progress, it will schedule a new distribution round just after the current one is completed.
   * If this function is called repeatedly while a distribution is in progress,
   * the calls will be coalesced to a single new distribution (that will start just after the current one has completed).
   */
  ensureKeyDistribution() {
    // `manageMediaKeys` is a stop-gap solution for now. The preferred way to handle this case would be instead
    // to create a NoOpEncryptionManager that does nothing and use it for the session.
    // This will be done when removing the legacy EncryptionManager.
    if (!this.manageMediaKeys) return;
    if (this.currentKeyDistributionPromise == null) {
      var _this$logger7;
      (_this$logger7 = this.logger) === null || _this$logger7 === void 0 || _this$logger7.debug(`No active rollout, start a new one`);
      // start a rollout
      this.currentKeyDistributionPromise = this.rolloutOutboundKey().then(() => {
        var _this$logger8;
        (_this$logger8 = this.logger) === null || _this$logger8 === void 0 || _this$logger8.debug(`Rollout completed`);
        this.currentKeyDistributionPromise = null;
        if (this.needToEnsureKeyAgain) {
          var _this$logger9;
          (_this$logger9 = this.logger) === null || _this$logger9 === void 0 || _this$logger9.debug(`New Rollout needed`);
          this.needToEnsureKeyAgain = false;
          // rollout a new one
          this.ensureKeyDistribution();
        }
      });
    } else {
      var _this$logger0;
      // There is a rollout in progress, but a key rotation is requested (could be caused by a ownMembership change)
      // Remember that a new rotation is needed after the current one.
      (_this$logger0 = this.logger) === null || _this$logger0 === void 0 || _this$logger0.debug(`Rollout in progress, a new rollout will be started after the current one`);
      this.needToEnsureKeyAgain = true;
    }
  }
  /**
   * Called when the ownMembership of the call changes.
   * This encryption manager is very basic, it will rotate the key everytime this is called.
   * @param oldMemberships - This parameter is not used here, but it is kept for compatibility with the interface.
   */
  onMembershipsUpdate(oldMemberships = []) {
    var _this$logger1;
    (_this$logger1 = this.logger) === null || _this$logger1 === void 0 || _this$logger1.trace(`onMembershipsUpdate`);

    // Ensure the key is distributed. This will be no-op if the key is already being distributed to everyone.
    // If there is an ongoing distribution, it will be completed before a new one is started.
    this.ensureKeyDistribution();
    // ensure key emission to the rtc backend
    this.checkKeysWithoutMatchingRTCMembership();
  }
  async rolloutOutboundKey() {
    var _this$outboundSession, _this$outboundSession2;
    const isFirstKey = this.outboundSession == null;
    if (isFirstKey) {
      // create the first key
      const firstKey = {
        key: this.generateRandomKey(),
        creationTS: Date.now(),
        sharedWith: [],
        keyId: 0
      };
      this.outboundSession = firstKey;
      const ids = await this.getOwnBackendIdentities();
      for (const backendIdentity of ids) this.addKeyToParticipantWithBackendIdentity(firstKey.key, firstKey.keyId, this.ownMembership, backendIdentity);
    }
    // get current memberships
    const toShareWith = this.getMemberships().filter(membership => {
      return membership.sender != undefined;
    }).map(membership => {
      return {
        userId: membership.sender,
        deviceId: membership.deviceId,
        membershipTs: membership.createdTs()
      };
    });
    let alreadySharedWith = (_this$outboundSession = (_this$outboundSession2 = this.outboundSession) === null || _this$outboundSession2 === void 0 ? void 0 : _this$outboundSession2.sharedWith) !== null && _this$outboundSession !== void 0 ? _this$outboundSession : [];

    // Some users might have rotate their ownMembership event (formally called fingerprint) meaning they might have
    // clear their key. Reset the `alreadySharedWith` flag for them.
    alreadySharedWith = alreadySharedWith.filter(x =>
    // If there was a member with same userId and deviceId but different membershipTs, we need to clear it
    !toShareWith.some(o => x.userId == o.userId && x.deviceId == o.deviceId && x.membershipTs != o.membershipTs));
    const anyLeft = alreadySharedWith.filter(x => !toShareWith.some(o => x.userId == o.userId && x.deviceId == o.deviceId && x.membershipTs == o.membershipTs));
    const anyJoined = toShareWith.filter(x => !alreadySharedWith.some(o => x.userId == o.userId && x.deviceId == o.deviceId && x.membershipTs == o.membershipTs));
    let toDistributeTo = [];
    //default to current session
    let newOutboundEncryptionSession = this.outboundSession;
    let hasKeyChanged = false;

    // Rotating means sending the new key to every participant, this is expensive in large session.
    if (this.isKeyRotationSuppressed) {
      if (anyJoined.length > 0) {
        var _this$logger10;
        (_this$logger10 = this.logger) === null || _this$logger10 === void 0 || _this$logger10.debug(`New joiners detected, but the session has ${toShareWith.length} participants (limit:${this.keyRotationParticipantLimit}), keeping the key`);
      }
      toDistributeTo = anyJoined;
    } else {
      if (anyLeft.length > 0) {
        // We need to rotate the key
        newOutboundEncryptionSession = this.createNewOutboundSession();
        hasKeyChanged = true;
        toDistributeTo = toShareWith;
      } else if (anyJoined.length > 0) {
        const keyAge = Date.now() - this.outboundSession.creationTS;
        if (keyAge < this.keyRotationGracePeriodMs) {
          var _this$logger11;
          (_this$logger11 = this.logger) === null || _this$logger11 === void 0 || _this$logger11.debug(`New joiners detected, but the key is recent enough (age:${keyAge}), keeping it`);
          toDistributeTo = anyJoined;
        } else {
          var _this$logger12;
          (_this$logger12 = this.logger) === null || _this$logger12 === void 0 || _this$logger12.debug(`New joiners detected, rotating the key`);
          // We need to rotate the key
          newOutboundEncryptionSession = this.createNewOutboundSession();
          hasKeyChanged = true;
          toDistributeTo = toShareWith;
        }
      }
    }
    // return early if we dont have anything to distribute.
    if (toDistributeTo.length === 0) {
      return;
    }
    try {
      var _this$logger13, _this$logger14;
      (_this$logger13 = this.logger) === null || _this$logger13 === void 0 || _this$logger13.trace(`Sending key...`);
      await this.transport.sendKey((0,_base64_ts__WEBPACK_IMPORTED_MODULE_2__/* .encodeBase64 */ .WG)(newOutboundEncryptionSession.key), newOutboundEncryptionSession.keyId, toDistributeTo);
      newOutboundEncryptionSession.sharedWith.push(...toDistributeTo);
      const outboundSessionList = newOutboundEncryptionSession.sharedWith.map(m => `${m.userId}:${m.deviceId}`).join(",");
      (_this$logger14 = this.logger) === null || _this$logger14 === void 0 || _this$logger14.trace(`key index:${newOutboundEncryptionSession.keyId} sent to ${outboundSessionList}`);
      if (hasKeyChanged) {
        var _this$logger15, _this$logger16;
        // Delay a bit before using this key
        // It is recommended not to start using a key immediately but instead wait for a short time to make sure it is delivered.
        (_this$logger15 = this.logger) === null || _this$logger15 === void 0 || _this$logger15.trace(`Delay Rollout for key:${newOutboundEncryptionSession.keyId}...`);
        await (0,_utils_ts__WEBPACK_IMPORTED_MODULE_4__/* .sleep */ .yy)(this.useKeyDelay);
        (_this$logger16 = this.logger) === null || _this$logger16 === void 0 || _this$logger16.trace(`...Delayed rollout of index:${newOutboundEncryptionSession.keyId} `);
        for (const backendIdentity of await this.getOwnBackendIdentities()) this.addKeyToParticipantWithBackendIdentity(newOutboundEncryptionSession.key, newOutboundEncryptionSession.keyId, this.ownMembership, backendIdentity);
      }
    } catch (err) {
      var _this$logger17;
      (_this$logger17 = this.logger) === null || _this$logger17 === void 0 || _this$logger17.error(`Failed to rollout key`, err);
    }
  }
  createNewOutboundSession() {
    var _this$logger18;
    const newOutboundKey = {
      key: this.generateRandomKey(),
      creationTS: Date.now(),
      sharedWith: [],
      keyId: this.nextKeyIndex()
    };
    (_this$logger18 = this.logger) === null || _this$logger18 === void 0 || _this$logger18.info(`creating new outbound key index:${newOutboundKey.keyId}`);
    // Set this new key as the current one
    this.outboundSession = newOutboundKey;
    return newOutboundKey;
  }
  nextKeyIndex() {
    if (this.outboundSession) {
      return (this.outboundSession.keyId + 1) % 256;
    }
    return 0;
  }
  generateRandomKey() {
    const key = new Uint8Array(16);
    globalThis.crypto.getRandomValues(key);
    return key;
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/ToDeviceKeyTransport.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ ToDeviceKeyTransport)
/* harmony export */ });
/* unused harmony export NotSupportedError */
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _models_typed_event_emitter_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/typed-event-emitter.ts");
/* harmony import */ var _IKeyTransport_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/IKeyTransport.ts");
/* harmony import */ var _logger_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts");
/* harmony import */ var _client_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/client.ts");
/* harmony import */ var _types_event_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/event.ts");

/*
Copyright 2025 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/







/**
 * The information extracted from a validated key event.
 */

/** Returns the given value as a media key if it is a valid one, otherwise `undefined`. */
function parseMediaKey(mediaKey) {
  if (typeof mediaKey !== "object" || mediaKey === null) return undefined;
  const {
    key,
    index
  } = mediaKey;
  if (typeof key !== "string" || key === "" || typeof index !== "number") return undefined;
  return mediaKey;
}
class NotSupportedError extends Error {
  constructor(message) {
    super(message);
  }
  get name() {
    return "NotSupportedError";
  }
}
/**
 * ToDeviceKeyTransport is used to send MatrixRTC keys to other devices using the
 * to-device CS-API.
 */
class ToDeviceKeyTransport extends _models_typed_event_emitter_ts__WEBPACK_IMPORTED_MODULE_1__/* .TypedEventEmitter */ .X {
  setParentLogger(parentLogger) {
    this.logger = parentLogger.getChild(`[ToDeviceKeyTransport]`);
  }
  constructor(membership, roomId, client, statistics, parentLogger) {
    super();
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "logger", _logger_ts__WEBPACK_IMPORTED_MODULE_3__/* .logger */ .vF);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onToDeviceEvent", event => {
      if (event.getType() !== _types_event_ts__WEBPACK_IMPORTED_MODULE_5__/* .EventType */ .Bx.CallEncryptionKeysPrefix) {
        // Ignore this is not a call encryption event
        return;
      }

      // NB: When received via the widget driver, the to-device events
      // are properly reconstructed as if they are encrypted (see MatrixEvent#makeEncrypted).
      if (event.getWireType() != _types_event_ts__WEBPACK_IMPORTED_MODULE_5__/* .EventType */ .Bx.RoomMessageEncrypted) {
        // WARN: The call keys were sent in clear. Ignore them
        this.logger.warn(`Call encryption keys sent in clear from: ${event.getSender()}`);
        return;
      }
      const receivedKey = this.getValidEventContent(event);
      if (!receivedKey) return;
      if (!event.getSender()) return;
      this.receiveCallKeyEvent(event.getSender(), receivedKey);
    });
    this.membership = membership;
    this.roomId = roomId;
    this.client = client;
    this.statistics = statistics;
    this.setParentLogger(parentLogger !== null && parentLogger !== void 0 ? parentLogger : _logger_ts__WEBPACK_IMPORTED_MODULE_3__/* .logger */ .vF);
  }
  start() {
    this.client.on(_client_ts__WEBPACK_IMPORTED_MODULE_4__/* .ClientEvent */ .AU.ToDeviceEvent, this.onToDeviceEvent);
  }
  stop() {
    this.client.off(_client_ts__WEBPACK_IMPORTED_MODULE_4__/* .ClientEvent */ .AU.ToDeviceEvent, this.onToDeviceEvent);
  }
  async sendKey(keyBase64Encoded, index, members) {
    const mediaKey = {
      index: index,
      key: keyBase64Encoded
    };
    const content = {
      room_id: this.roomId,
      member_id: this.membership.memberId,
      media_key: mediaKey,
      // Deprecated but still sent for backwards compatibility.
      keys: mediaKey,
      member: {
        claimed_device_id: this.membership.deviceId,
        // Deprecated but still sent for backwards compatibility.
        id: this.membership.memberId
      }
    };
    const targets = members.map(member => {
      return {
        userId: member.userId,
        deviceId: member.deviceId
      };
    })
    // filter out me
    .filter(member => !(member.userId == this.membership.userId && member.deviceId == this.membership.deviceId));
    if (targets.length > 0) {
      await this.client.encryptAndSendToDevice(_types_event_ts__WEBPACK_IMPORTED_MODULE_5__/* .EventType */ .Bx.CallEncryptionKeysPrefix, targets, content).catch(error => {
        const msg = error.message;
        // This is not ideal. We would want to have a custom error type for unsupported actions.
        // This is not part of the widget API spec. Since as of now there are only two implementations:
        // Rust SDK + JS-SDK, and the JS-SDK does support to-device sending, we can assume that
        // this is a widget driver issue error message.
        if (msg.includes("unknown variant") && msg.includes("send_to_device") || msg.includes("not supported")) {
          throw new NotSupportedError("The widget driver does not support to-device encryption");
        }
      });
      this.statistics.counters.roomEventEncryptionKeysSent += 1;
    } else {
      this.logger.warn("No targets found for sending key");
    }
  }
  receiveCallKeyEvent(fromUser, {
    mediaKey,
    memberId,
    deviceId
  }) {
    // The event has already been validated at this point.

    this.statistics.counters.roomEventEncryptionKeysReceived += 1;
    this.emit(_IKeyTransport_ts__WEBPACK_IMPORTED_MODULE_2__/* .KeyTransportEvents */ .u.ReceivedKeys,
    // TODO userId this is claimed information, deviceId is claimed information
    {
      userId: fromUser,
      deviceId,
      memberId: memberId !== null && memberId !== void 0 ? memberId : `${fromUser}:${deviceId}`
    }, mediaKey.key, mediaKey.index, Date.now());
  }
  /** Validates a received key event and extracts the key information from it. */
  getValidEventContent(event) {
    var _parseMediaKey, _content$member_id, _content$member, _content$member2;
    const content = event.getContent();
    const roomId = content.room_id;
    if (!roomId) {
      // Invalid event
      this.logger.warn("Malformed Event: invalid call encryption keys event, no roomId");
      return;
    }
    if (roomId !== this.roomId) {
      this.logger.warn("Malformed Event: Mismatch roomId");
      return;
    }

    // Prefer `media_key` and fall back to the deprecated `keys` property for backwards compatibility.
    const mediaKey = (_parseMediaKey = parseMediaKey(content.media_key)) !== null && _parseMediaKey !== void 0 ? _parseMediaKey : parseMediaKey(content.keys);
    if (!mediaKey) {
      this.logger.warn("Malformed Event: Missing media key");
      return;
    }

    // Prefer `member_id` and fall back to the deprecated `member.id` property for backwards compatibility.
    const memberId = (_content$member_id = content.member_id) !== null && _content$member_id !== void 0 ? _content$member_id : (_content$member = content.member) === null || _content$member === void 0 ? void 0 : _content$member.id;
    if (memberId !== undefined && typeof memberId !== "string") {
      this.logger.warn("Malformed Event: Invalid member id");
      return;
    }
    const deviceId = (_content$member2 = content.member) === null || _content$member2 === void 0 ? void 0 : _content$member2.claimed_device_id;
    if (!deviceId || typeof deviceId !== "string") {
      this.logger.warn("Malformed Event: Missing claimed_device_id");
      return;
    }
    return {
      mediaKey,
      memberId,
      deviceId
    };
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/membershipData/common.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ isLeftMembershipContent),
/* harmony export */   y: () => (/* binding */ MatrixRTCMembershipParseError)
/* harmony export */ });
/*
Copyright 2026 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Whether the content of an `m.rtc.member` or `m.call.member` event represents a left membership.
 *
 * @experimental Part of [MSC4143](https://github.com/matrix-org/matrix-spec-proposals/pull/4143).
 */
function isLeftMembershipContent(content) {
  var _content$member;
  // Leaving a slot is expressed through setting membership to leave.
  if (((_content$member = content.member) === null || _content$member === void 0 ? void 0 : _content$member.membership) === "leave") return true;
  // Events predating the membership property instead emptied the content except for
  // the slot ID and the sticky key.
  return Object.keys(content).every(key => key === "slot_id" || key === "msc4354_sticky_key");
}

/**
 * Thrown when an event is not valid for use with MatrixRTC.
 */
class MatrixRTCMembershipParseError extends AggregateError {
  constructor(type, errors) {
    super(errors, `Does not match ${type}:\n${errors.join("\n")}`);
    this.type = type;
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/membershipData/index.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  yK: () => (/* reexport */ common/* MatrixRTCMembershipParseError */.y),
  mB: () => (/* reexport */ rtc/* checkRtcMembershipData */.m),
  oi: () => (/* reexport */ checkSessionsMembershipData),
  tL: () => (/* reexport */ rtc/* computeRtcIdentityRaw */.t),
  nV: () => (/* reexport */ common/* isLeftMembershipContent */.n)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/membershipData/common.ts
var common = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/membershipData/common.ts");
;// ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/membershipData/session.ts
/*
Copyright 2026 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



/**
 * (MatrixRTC) session membership data.
 * This represents the *OLD* form of MSC4143, which uses state events to store membership.
 * Represents the `session` in the memberships section of an m.call.member event as it is on the wire.
 **/

/**
 * Validates that `data` matches the format expected by the legacy form of MSC4143.
 * @param data The event content.
 * @returns true if `data` is valid SessionMembershipData
 * @throws {MatrixRTCMembershipParseError} if the content is not valid
 */
const checkSessionsMembershipData = data => {
  var _data$focus_active;
  const prefix = " - ";
  const errors = [];
  if (typeof data.device_id !== "string") errors.push(prefix + "device_id must be string");
  if (typeof data.call_id !== "string") errors.push(prefix + "call_id must be string");
  if (typeof data.application !== "string") errors.push(prefix + "application must be a string");
  if (data.focus_active === undefined) {
    errors.push(prefix + "focus_active has an invalid type");
  }
  if (typeof ((_data$focus_active = data.focus_active) === null || _data$focus_active === void 0 ? void 0 : _data$focus_active.type) !== "string") {
    errors.push(prefix + "focus_active.type must be a string");
  }
  if (data.foci_preferred !== undefined && !(Array.isArray(data.foci_preferred) && data.foci_preferred.every(f => typeof f === "object" && f !== null && typeof f.type === "string"))) {
    errors.push(prefix + "foci_preferred must be an array of transport objects");
  }
  // optional parameters
  if (data.created_ts !== undefined && typeof data.created_ts !== "number") {
    errors.push(prefix + "created_ts must be number");
  }

  // application specific data (we first need to check if they exist)
  if (data.scope !== undefined && typeof data.scope !== "string") errors.push(prefix + "scope must be string");
  if (data["m.call.intent"] !== undefined && typeof data["m.call.intent"] !== "string") {
    errors.push(prefix + "m.call.intent must be a string");
  }
  if (data.capabilities !== undefined && !(Array.isArray(data.capabilities) && data.capabilities.every(c => typeof c === "string"))) {
    errors.push(prefix + "capabilities must be an array of strings");
  }
  if (errors.length) {
    throw new common/* MatrixRTCMembershipParseError */.y("SessionMembership", errors);
  }
  return true;
};
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/membershipData/rtc.ts
var rtc = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/membershipData/rtc.ts");
;// ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/membershipData/index.ts
/*
Copyright 2026 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/





/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/membershipData/rtc.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ checkRtcMembershipData),
/* harmony export */   t: () => (/* binding */ computeRtcIdentityRaw)
/* harmony export */ });
/* harmony import */ var _models_room_member_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/room-member.ts");
/* harmony import */ var _common_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/membershipData/common.ts");
/* harmony import */ var _digest_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/digest.ts");
/* harmony import */ var _base64_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/base64.ts");
/* harmony import */ var _utils_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/utils.ts");
/*
Copyright 2026 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/







/**
 * The membership status of an RTC member event.
 *
 * @experimental Part of [MSC4143](https://github.com/matrix-org/matrix-spec-proposals/pull/4143).
 */

/**
 * The membership data of a joined RTC member event.
 *
 * @experimental Part of [MSC4143](https://github.com/matrix-org/matrix-spec-proposals/pull/4143).
 */

/**
 * The membership data of a left RTC member event.
 *
 * @experimental Part of [MSC4143](https://github.com/matrix-org/matrix-spec-proposals/pull/4143).
 */

/**
 * Validates that `data` matches the format expected by MSC4143 for a joined membership.
 *
 * @param data The event content.
 * @param sender The sender of the event.
 * @returns true if `data` is valid RtcMembershipData
 * @throws {MatrixRTCMembershipParseError} if the content is not valid
 *
 * @experimental Part of [MSC4143](https://github.com/matrix-org/matrix-spec-proposals/pull/4143).
 */
const checkRtcMembershipData = (data, sender) => {
  var _data$application, _data$sticky_key;
  const errors = [];
  const prefix = " - ";
  const expectedSlotPrefix = `${data === null || data === void 0 || (_data$application = data.application) === null || _data$application === void 0 ? void 0 : _data$application.type}#`;

  // required fields
  if (typeof data.slot_id !== "string") {
    errors.push(prefix + "slot_id must be string");
  } else if (!data.slot_id.startsWith(expectedSlotPrefix)) {
    errors.push(prefix + `slot_id must start with ${expectedSlotPrefix}`);
  } else {
    try {
      (0,_utils_ts__WEBPACK_IMPORTED_MODULE_4__/* .slotIdToDescription */ .nr)(data.slot_id);
    } catch (ex) {
      errors.push(prefix + `slot_id was badly formed${ex instanceof Error ? `: ${ex.message}` : ""}`);
    }
  }
  if (typeof data.member !== "object" || data.member === null) {
    errors.push(prefix + "member must be an object");
  } else {
    if (typeof data.member.user_id !== "string") {
      errors.push(prefix + "member.user_id must be string");
    } else if (!_models_room_member_ts__WEBPACK_IMPORTED_MODULE_0__/* .MXID_PATTERN */ .sh.test(data.member.user_id)) {
      errors.push(prefix + "member.user_id must be a valid mxid");
    }
    // This is not what the spec enforces but there currently are no rules what power levels are required to
    // send a m.rtc.member event for a other user. So we add this check for simplicity and to avoid possible attacks until there
    // is a proper definition when this is allowed.
    else if (data.member.user_id !== sender) {
      errors.push(prefix + "member.user_id must match the sender");
    }
    if (typeof data.member.device_id !== "string") {
      errors.push(prefix + "member.device_id must be string");
    }
    if (typeof data.member.id !== "string") errors.push(prefix + "member.id must be string");
    // Events predating `member.membership` omit it and are treated as joined. Anything other than `join`
    // (including `leave`) does not describe a joined membership and is rejected.
    if (data.member.membership !== undefined && data.member.membership !== "join") {
      errors.push(prefix + "member.membership must be join");
    }
  }
  if (typeof data.application !== "object" || data.application === null) {
    errors.push(prefix + "application must be an object");
  } else {
    if (typeof data.application.type !== "string") {
      errors.push(prefix + "application.type must be a string");
    } else {
      if (data.application.type.includes("#")) errors.push(prefix + 'application.type must not include "#"');
    }
  }
  if (typeof data.transports !== "object" || data.transports === null || !Array.isArray(data.transports.published)) {
    errors.push(prefix + "transports.published must be an array");
  } else {
    // validate that each transport has at least a string 'type'
    for (const t of data.transports.published) {
      if (typeof t !== "object" || t === null || typeof t.type !== "string") {
        errors.push(prefix + "transports.published entries must be objects with a string type");
        break;
      }
    }
  }
  if (typeof data.transports !== "object" || data.transports === null || !Array.isArray(data.transports.can_subscribe) || !data.transports.can_subscribe.every(t => typeof t === "string")) {
    errors.push(prefix + "transports.can_subscribe must be an array of strings");
  }
  // optional fields
  if (((_data$sticky_key = data.sticky_key) !== null && _data$sticky_key !== void 0 ? _data$sticky_key : data.msc4354_sticky_key) === undefined) {
    errors.push(prefix + "sticky_key or msc4354_sticky_key must be a defined");
  }
  if (data.sticky_key !== undefined && typeof data.sticky_key !== "string") {
    errors.push(prefix + "sticky_key must be a string");
  }
  if (data.msc4354_sticky_key !== undefined && typeof data.msc4354_sticky_key !== "string") {
    errors.push(prefix + "msc4354_sticky_key must be a string");
  }
  if (data.sticky_key !== undefined && data.msc4354_sticky_key !== undefined && data.sticky_key !== data.msc4354_sticky_key) {
    errors.push(prefix + "sticky_key and msc4354_sticky_key must be equal if both are defined");
  }
  if (errors.length) {
    throw new _common_ts__WEBPACK_IMPORTED_MODULE_1__/* .MatrixRTCMembershipParseError */ .y("RtcMembership", errors);
  }
  return true;
};
async function computeRtcIdentityRaw(userId, memberId) {
  // canonical JSON serialization (Matrix canonical JSON for arrays)
  const jsonStr = JSON.stringify([userId, memberId]);
  const hashBuffer = await (0,_digest_ts__WEBPACK_IMPORTED_MODULE_2__/* .sha256 */ .s)(jsonStr);
  const hashedString = (0,_base64_ts__WEBPACK_IMPORTED_MODULE_3__/* .encodeUnpaddedBase64 */ .PP)(hashBuffer);
  return hashedString;
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/utils.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ds: () => (/* binding */ computeSlotId),
/* harmony export */   Hz: () => (/* binding */ isSlotOpen),
/* harmony export */   Ot: () => (/* binding */ getSlotEventContent),
/* harmony export */   Uo: () => (/* binding */ OutdatedKeyFilter),
/* harmony export */   Zq: () => (/* binding */ isSlotClosed),
/* harmony export */   nr: () => (/* binding */ slotIdToDescription)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _EncryptionManager_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrixrtc/EncryptionManager.ts");
/* harmony import */ var _models_event_timeline_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/event-timeline.ts");
/* harmony import */ var _types_event_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/event.ts");

/*
Copyright 2025-2026 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/





/**
 * Detects when a key for a given index is outdated.
 */
class OutdatedKeyFilter {
  constructor() {
    // Map of participantId -> keyIndex -> timestamp
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "tsBuffer", new Map());
  }
  /**
   * Check if there is a recent key with the same keyId (index) and then use the creationTS to decide what to
   * do with the key. If the key received is older than the one already in the buffer, it is ignored.
   * @param participantId
   * @param item
   */
  isOutdated(membership, item) {
    var _this$tsBuffer$get;
    const mapKey = (0,_EncryptionManager_ts__WEBPACK_IMPORTED_MODULE_1__/* .getEncryptionKeyMapKey */ ._)(membership);
    if (!this.tsBuffer.has(mapKey)) {
      this.tsBuffer.set(mapKey, new Map());
    }
    const latestTimestamp = (_this$tsBuffer$get = this.tsBuffer.get(mapKey)) === null || _this$tsBuffer$get === void 0 ? void 0 : _this$tsBuffer$get.get(item.keyIndex);
    if (latestTimestamp && latestTimestamp > item.creationTS) {
      // The existing key is more recent, ignore this one
      return true;
    }
    this.tsBuffer.get(mapKey).set(item.keyIndex, item.creationTS);
    return false;
  }
}

/**
 * Converts a slot ID into it's component application and ID portions.
 * @param slotId e.g. `m.call#call_id`
 * @throws If the format of `slotId` is invalid.
 */
function slotIdToDescription(slotId) {
  const [application, id, ...unexpectedAdditionalValues] = slotId.split("#");
  if (unexpectedAdditionalValues.length) {
    throw Error("MatrixRTC Slot IDs *must* only contain two components seperated by one '#'. Additional '#' characters detected.");
  }
  return {
    application,
    id
  };
}

/**
 * Converts a SlotDescription into it's slot ID format.
 */
function computeSlotId(slotDescription) {
  return `${slotDescription.application}#${slotDescription.id}`;
}

/**
 * Reads the slot state event's content for the given slot description.
 *
 * @returns The slot event's content, or `undefined` if no slot event exists for the given description.
 */
function getSlotEventContent(room, slotDescription) {
  var _room$getLiveTimeline;
  const slotId = computeSlotId(slotDescription);
  const slotEvent = (_room$getLiveTimeline = room.getLiveTimeline().getState(_models_event_timeline_ts__WEBPACK_IMPORTED_MODULE_2__/* .EventTimeline */ .q.FORWARDS)) === null || _room$getLiveTimeline === void 0 ? void 0 : _room$getLiveTimeline.getStateEvents(_types_event_ts__WEBPACK_IMPORTED_MODULE_3__/* .EventType */ .Bx.RTCSlot, slotId);
  if (!slotEvent) return undefined;
  return slotEvent.getContent();
}

/**
 * Whether the given slot is closed.
 *
 * @returns `true` if the slot is closed, `false` if the slot is open or `undefined`
 * if no slot exists.
 */
function isSlotClosed(room, slotDescription) {
  var _content$application;
  const content = getSlotEventContent(room, slotDescription);
  if (content === undefined) return undefined;
  return content.status !== "open" || typeof content.application !== "object" || ((_content$application = content.application) === null || _content$application === void 0 ? void 0 : _content$application.type) !== slotDescription.application;
}

/**
 * Whether the given slot is open.
 *
 * @returns `true` if the slot is open, `false` if the slot is closed or `undefined`
 * if no slot exists.
 */
function isSlotOpen(room, slotDescription) {
  const closed = isSlotClosed(room, slotDescription);
  return closed === undefined ? undefined : !closed;
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/MSC3089TreeSpace.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  mG: () => (/* binding */ DEFAULT_TREE_POWER_LEVELS_TEMPLATE),
  wZ: () => (/* binding */ MSC3089TreeSpace)
});

// UNUSED EXPORTS: TreePermissions

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/event.ts
var _types_event = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/event.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts
var logger = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/utils.ts
var utils = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/utils.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/event-timeline.ts
var event_timeline = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/event-timeline.ts");
;// ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/MSC3089Branch.ts

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/*
Copyright 2021 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

;

/**
 * Represents a [MSC3089](https://github.com/matrix-org/matrix-doc/pull/3089) branch - a reference
 * to a file (leaf) in the tree. Note that this is UNSTABLE and subject to breaking changes
 * without notice.
 */
class MSC3089Branch {
  constructor(client, indexEvent, directory) {
    this.client = client;
    this.indexEvent = indexEvent;
    this.directory = directory;
  } // Nothing to do

  /**
   * The file ID.
   */
  get id() {
    const stateKey = this.indexEvent.getStateKey();
    if (!stateKey) {
      throw new Error("State key not found for branch");
    }
    return stateKey;
  }

  /**
   * Whether this branch is active/valid.
   */
  get isActive() {
    return this.indexEvent.getContent()["active"] === true;
  }

  /**
   * Version for the file, one-indexed.
   */
  get version() {
    var _this$indexEvent$getC;
    return (_this$indexEvent$getC = this.indexEvent.getContent()["version"]) !== null && _this$indexEvent$getC !== void 0 ? _this$indexEvent$getC : 1;
  }
  get roomId() {
    return this.indexEvent.getRoomId();
  }

  /**
   * Deletes the file from the tree, including all prior edits/versions.
   * @returns Promise which resolves when complete.
   */
  async delete() {
    await this.client.sendStateEvent(this.roomId, _types_event/* UNSTABLE_MSC3089_BRANCH */.iK.name, {}, this.id);
    await this.client.redactEvent(this.roomId, this.id);
    const nextVersion = (await this.getVersionHistory())[1]; // [0] will be us
    if (nextVersion) await nextVersion.delete(); // implicit recursion
  }

  /**
   * Gets the name for this file.
   * @returns The name, or "Unnamed File" if unknown.
   */
  getName() {
    return this.indexEvent.getContent()["name"] || "Unnamed File";
  }

  /**
   * Sets the name for this file.
   * @param name - The new name for this file.
   * @returns Promise which resolves when complete.
   */
  async setName(name) {
    await this.client.sendStateEvent(this.roomId, _types_event/* UNSTABLE_MSC3089_BRANCH */.iK.name, _objectSpread(_objectSpread({}, this.indexEvent.getContent()), {}, {
      name: name
    }), this.id);
  }

  /**
   * Gets whether or not a file is locked.
   * @returns True if locked, false otherwise.
   */
  isLocked() {
    return this.indexEvent.getContent()["locked"] || false;
  }

  /**
   * Sets a file as locked or unlocked.
   * @param locked - True to lock the file, false otherwise.
   * @returns Promise which resolves when complete.
   */
  async setLocked(locked) {
    await this.client.sendStateEvent(this.roomId, _types_event/* UNSTABLE_MSC3089_BRANCH */.iK.name, _objectSpread(_objectSpread({}, this.indexEvent.getContent()), {}, {
      locked: locked
    }), this.id);
  }

  /**
   * Gets information about the file needed to download it.
   * @returns Information about the file.
   */
  async getFileInfo() {
    const event = await this.getFileEvent();
    const file = event.getOriginalContent()["file"];
    const httpUrl = this.client.mxcUrlToHttp(file["url"]);
    if (!httpUrl) {
      throw new Error(`No HTTP URL available for ${file["url"]}`);
    }
    return {
      info: file,
      httpUrl: httpUrl
    };
  }

  /**
   * Gets the event the file points to.
   * @returns Promise which resolves to the file's event.
   */
  async getFileEvent() {
    const room = this.client.getRoom(this.roomId);
    if (!room) throw new Error("Unknown room");
    let event = room.getUnfilteredTimelineSet().findEventById(this.id);

    // keep scrolling back if needed until we find the event or reach the start of the room:
    while (!event && room.getLiveTimeline().getState(event_timeline/* EventTimeline */.q.BACKWARDS).paginationToken) {
      await this.client.scrollback(room, 100);
      event = room.getUnfilteredTimelineSet().findEventById(this.id);
    }
    if (!event) throw new Error("Failed to find event");

    // Sometimes the event isn't decrypted for us, so do that.
    await this.client.decryptEventIfNeeded(event);
    return event;
  }

  /**
   * Creates a new version of this file with contents in a type that is compatible with MatrixClient.uploadContent().
   * @param name - The name of the file.
   * @param encryptedContents - The encrypted contents.
   * @param info - The encrypted file information.
   * @param additionalContent - Optional event content fields to include in the message.
   * @returns Promise which resolves to the file event's sent response.
   */
  async createNewVersion(name, encryptedContents, info, additionalContent) {
    const fileEventResponse = await this.directory.createFile(name, encryptedContents, info, _objectSpread(_objectSpread({}, additionalContent), {}, {
      "m.new_content": true,
      "m.relates_to": {
        rel_type: _types_event/* RelationType */.zZ.Replace,
        event_id: this.id
      }
    }));

    // Update the version of the new event
    await this.client.sendStateEvent(this.roomId, _types_event/* UNSTABLE_MSC3089_BRANCH */.iK.name, {
      active: true,
      name: name,
      version: this.version + 1
    }, fileEventResponse["event_id"]);

    // Deprecate ourselves
    await this.client.sendStateEvent(this.roomId, _types_event/* UNSTABLE_MSC3089_BRANCH */.iK.name, _objectSpread(_objectSpread({}, this.indexEvent.getContent()), {}, {
      active: false
    }), this.id);
    return fileEventResponse;
  }

  /**
   * Gets the file's version history, starting at this file.
   * @returns Promise which resolves to the file's version history, with the
   * first element being the current version and the last element being the first version.
   */
  async getVersionHistory() {
    const fileHistory = [];
    fileHistory.push(this); // start with ourselves

    const room = this.client.getRoom(this.roomId);
    if (!room) throw new Error("Invalid or unknown room");

    // Clone the timeline to reverse it, getting most-recent-first ordering, hopefully
    // shortening the awful loop below. Without the clone, we can unintentionally mutate
    // the timeline.
    const timelineEvents = [...room.getLiveTimeline().getEvents()].reverse();

    // XXX: This is a very inefficient search, but it's the best we can do with the
    // relations structure we have in the SDK. As of writing, it is not worth the
    // investment in improving the structure.
    let childEvent;
    let parentEvent = await this.getFileEvent();
    do {
      childEvent = timelineEvents.find(e => e.replacingEventId() === parentEvent.getId());
      if (childEvent) {
        const branch = this.directory.getFile(childEvent.getId());
        if (branch) {
          fileHistory.push(branch);
          parentEvent = childEvent;
        } else {
          break; // prevent infinite loop
        }
      }
    } while (childEvent);
    return fileHistory;
  }
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/index.ts
var http_api = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/index.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/membership.ts
var membership = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/membership.ts");
;// ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/MSC3089TreeSpace.ts

function MSC3089TreeSpace_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function MSC3089TreeSpace_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? MSC3089TreeSpace_ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : MSC3089TreeSpace_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/*
Copyright 2021 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

;





/**
 * The recommended defaults for a tree space's power levels. Note that this
 * is UNSTABLE and subject to breaking changes without notice.
 */
const DEFAULT_TREE_POWER_LEVELS_TEMPLATE = {
  // Owner
  invite: 100,
  kick: 100,
  ban: 100,
  // Editor
  redact: 50,
  state_default: 50,
  events_default: 50,
  // Viewer
  users_default: 0,
  // Mixed
  events: {
    [_types_event/* EventType */.Bx.RoomPowerLevels]: 100,
    [_types_event/* EventType */.Bx.RoomHistoryVisibility]: 100,
    [_types_event/* EventType */.Bx.RoomTombstone]: 100,
    [_types_event/* EventType */.Bx.RoomEncryption]: 100,
    [_types_event/* EventType */.Bx.RoomName]: 50,
    [_types_event/* EventType */.Bx.RoomMessage]: 50,
    [_types_event/* EventType */.Bx.RoomMessageEncrypted]: 50,
    [_types_event/* EventType */.Bx.Sticker]: 50
  },
  users: {} // defined by calling code
};

/**
 * Ease-of-use representation for power levels represented as simple roles.
 * Note that this is UNSTABLE and subject to breaking changes without notice.
 */
let TreePermissions = /*#__PURE__*/function (TreePermissions) {
  TreePermissions["Viewer"] = "viewer";
  // Default
  TreePermissions["Editor"] = "editor";
  // "Moderator" or ~PL50
  TreePermissions["Owner"] = "owner"; // "Admin" or PL100
  return TreePermissions;
}({});
/**
 * Represents a [MSC3089](https://github.com/matrix-org/matrix-doc/pull/3089)
 * file tree Space. Note that this is UNSTABLE and subject to breaking changes
 * without notice.
 */
class MSC3089TreeSpace {
  constructor(client, roomId) {
    (0,defineProperty/* default */.A)(this, "room", void 0);
    this.client = client;
    this.roomId = roomId;
    this.room = this.client.getRoom(this.roomId);
    if (!this.room) throw new Error("Unknown room");
  }

  /**
   * Syntactic sugar for room ID of the Space.
   */
  get id() {
    return this.roomId;
  }

  /**
   * Whether or not this is a top level space.
   */
  get isTopLevel() {
    // XXX: This is absolutely not how you find out if the space is top level
    // but is safe for a managed usecase like we offer in the SDK.
    const parentEvents = this.room.currentState.getStateEvents(_types_event/* EventType */.Bx.SpaceParent);
    if (!(parentEvents !== null && parentEvents !== void 0 && parentEvents.length)) return true;
    return parentEvents.every(e => {
      var _e$getContent;
      return !((_e$getContent = e.getContent()) !== null && _e$getContent !== void 0 && _e$getContent["via"]);
    });
  }

  /**
   * Sets the name of the tree space.
   * @param name - The new name for the space.
   * @returns Promise which resolves when complete.
   */
  async setName(name) {
    await this.client.sendStateEvent(this.roomId, _types_event/* EventType */.Bx.RoomName, {
      name
    }, "");
  }

  /**
   * Invites a user to the tree space. They will be given the default Viewer
   * permission level unless specified elsewhere.
   * @param userId - The user ID to invite.
   * @param andSubspaces - True (default) to invite the user to all
   * directories/subspaces too, recursively.
   * @returns Promise which resolves when complete.
   */
  async invite(userId, andSubspaces = true) {
    const promises = [this.retryInvite(userId)];
    if (andSubspaces) {
      promises.push(...this.getDirectories().map(d => d.invite(userId, andSubspaces)));
    }
    await Promise.all(promises);
  }
  async retryInvite(userId) {
    await (0,utils/* simpleRetryOperation */.CC)(() => this.client.invite(this.roomId, userId), e => {
      // We don't want to retry permission errors forever...
      if (e instanceof http_api/* MatrixError */.up && e.errcode === "M_FORBIDDEN") {
        return false;
      }
      return true;
    });
  }

  /**
   * Sets the permissions of a user to the given role. Note that if setting a user
   * to Owner then they will NOT be able to be demoted. If the user does not have
   * permission to change the power level of the target, an error will be thrown.
   * @param userId - The user ID to change the role of.
   * @param role - The role to assign.
   * @returns Promise which resolves when complete.
   */
  async setPermissions(userId, role) {
    var _pls$events;
    const currentPls = this.room.currentState.getStateEvents(_types_event/* EventType */.Bx.RoomPowerLevels, "");
    if (Array.isArray(currentPls)) throw new Error("Unexpected return type for power levels");
    const pls = (currentPls === null || currentPls === void 0 ? void 0 : currentPls.getContent()) || {};
    const viewLevel = pls["users_default"] || 0;
    const editLevel = pls["events_default"] || 50;
    const adminLevel = ((_pls$events = pls["events"]) === null || _pls$events === void 0 ? void 0 : _pls$events[_types_event/* EventType */.Bx.RoomPowerLevels]) || 100;
    const users = pls["users"] || {};
    switch (role) {
      case TreePermissions.Viewer:
        users[userId] = viewLevel;
        break;
      case TreePermissions.Editor:
        users[userId] = editLevel;
        break;
      case TreePermissions.Owner:
        users[userId] = adminLevel;
        break;
      default:
        throw new Error("Invalid role: " + role);
    }
    pls["users"] = users;
    await this.client.sendStateEvent(this.roomId, _types_event/* EventType */.Bx.RoomPowerLevels, pls, "");
  }

  /**
   * Gets the current permissions of a user. Note that any users missing explicit permissions (or not
   * in the space) will be considered Viewers. Appropriate membership checks need to be performed
   * elsewhere.
   * @param userId - The user ID to check permissions of.
   * @returns The permissions for the user, defaulting to Viewer.
   */
  getPermissions(userId) {
    var _pls$events2, _pls$users;
    const currentPls = this.room.currentState.getStateEvents(_types_event/* EventType */.Bx.RoomPowerLevels, "");
    if (Array.isArray(currentPls)) throw new Error("Unexpected return type for power levels");
    const pls = (currentPls === null || currentPls === void 0 ? void 0 : currentPls.getContent()) || {};
    const viewLevel = pls["users_default"] || 0;
    const editLevel = pls["events_default"] || 50;
    const adminLevel = ((_pls$events2 = pls["events"]) === null || _pls$events2 === void 0 ? void 0 : _pls$events2[_types_event/* EventType */.Bx.RoomPowerLevels]) || 100;
    const userLevel = ((_pls$users = pls["users"]) === null || _pls$users === void 0 ? void 0 : _pls$users[userId]) || viewLevel;
    if (userLevel >= adminLevel) return TreePermissions.Owner;
    if (userLevel >= editLevel) return TreePermissions.Editor;
    return TreePermissions.Viewer;
  }

  /**
   * Creates a directory under this tree space, represented as another tree space.
   * @param name - The name for the directory.
   * @returns Promise which resolves to the created directory.
   */
  async createDirectory(name) {
    const directory = await this.client.unstableCreateFileTree(name);
    await this.client.sendStateEvent(this.roomId, _types_event/* EventType */.Bx.SpaceChild, {
      via: [this.client.getDomain()]
    }, directory.roomId);
    await this.client.sendStateEvent(directory.roomId, _types_event/* EventType */.Bx.SpaceParent, {
      via: [this.client.getDomain()]
    }, this.roomId);
    return directory;
  }

  /**
   * Gets a list of all known immediate subdirectories to this tree space.
   * @returns The tree spaces (directories). May be empty, but not null.
   */
  getDirectories() {
    const trees = [];
    const children = this.room.currentState.getStateEvents(_types_event/* EventType */.Bx.SpaceChild);
    for (const child of children) {
      try {
        const stateKey = child.getStateKey();
        if (stateKey) {
          const tree = this.client.unstableGetFileTreeSpace(stateKey);
          if (tree) trees.push(tree);
        }
      } catch (e) {
        logger/* logger */.vF.warn("Unable to create tree space instance for listing. Are we joined?", e);
      }
    }
    return trees;
  }

  /**
   * Gets a subdirectory of a given ID under this tree space. Note that this will not recurse
   * into children and instead only look one level deep.
   * @param roomId - The room ID (directory ID) to find.
   * @returns The directory, or undefined if not found.
   */
  getDirectory(roomId) {
    return this.getDirectories().find(r => r.roomId === roomId);
  }

  /**
   * Deletes the tree, kicking all members and deleting **all subdirectories**.
   * @returns Promise which resolves when complete.
   */
  async delete() {
    const subdirectories = this.getDirectories();
    for (const dir of subdirectories) {
      await dir.delete();
    }
    const kickMemberships = [membership/* KnownMembership */.O.Invite, membership/* KnownMembership */.O.Knock, membership/* KnownMembership */.O.Join];
    const members = this.room.currentState.getStateEvents(_types_event/* EventType */.Bx.RoomMember);
    for (const member of members) {
      const isNotUs = member.getStateKey() !== this.client.getUserId();
      if (isNotUs && kickMemberships.includes(member.getContent().membership)) {
        const stateKey = member.getStateKey();
        if (!stateKey) {
          throw new Error("State key not found for branch");
        }
        await this.client.kick(this.roomId, stateKey, "Room deleted");
      }
    }
    await this.client.leave(this.roomId);
  }
  getOrderedChildren(children) {
    const ordered = children.map(c => ({
      roomId: c.getStateKey(),
      order: c.getContent()["order"]
    })).filter(c => c.roomId);
    ordered.sort((a, b) => {
      if (a.order && !b.order) {
        return -1;
      } else if (!a.order && b.order) {
        return 1;
      } else if (!a.order && !b.order) {
        var _roomA$currentState$g, _roomA$currentState$g2, _roomB$currentState$g, _roomB$currentState$g2;
        const roomA = this.client.getRoom(a.roomId);
        const roomB = this.client.getRoom(b.roomId);
        if (!roomA || !roomB) {
          // just don't bother trying to do more partial sorting
          return (0,utils/* lexicographicCompare */.aw)(a.roomId, b.roomId);
        }
        const createTsA = (_roomA$currentState$g = (_roomA$currentState$g2 = roomA.currentState.getStateEvents(_types_event/* EventType */.Bx.RoomCreate, "")) === null || _roomA$currentState$g2 === void 0 ? void 0 : _roomA$currentState$g2.getTs()) !== null && _roomA$currentState$g !== void 0 ? _roomA$currentState$g : 0;
        const createTsB = (_roomB$currentState$g = (_roomB$currentState$g2 = roomB.currentState.getStateEvents(_types_event/* EventType */.Bx.RoomCreate, "")) === null || _roomB$currentState$g2 === void 0 ? void 0 : _roomB$currentState$g2.getTs()) !== null && _roomB$currentState$g !== void 0 ? _roomB$currentState$g : 0;
        if (createTsA === createTsB) {
          return (0,utils/* lexicographicCompare */.aw)(a.roomId, b.roomId);
        }
        return createTsA - createTsB;
      } else {
        // both not-null orders
        return (0,utils/* lexicographicCompare */.aw)(a.order, b.order);
      }
    });
    return ordered;
  }
  getParentRoom() {
    const parents = this.room.currentState.getStateEvents(_types_event/* EventType */.Bx.SpaceParent);
    const parent = parents[0]; // XXX: Wild assumption
    if (!parent) throw new Error("Expected to have a parent in a non-top level space");

    // XXX: We are assuming the parent is a valid tree space.
    // We probably don't need to validate the parent room state for this usecase though.
    const stateKey = parent.getStateKey();
    if (!stateKey) throw new Error("No state key found for parent");
    const parentRoom = this.client.getRoom(stateKey);
    if (!parentRoom) throw new Error("Unable to locate room for parent");
    return parentRoom;
  }

  /**
   * Gets the current order index for this directory. Note that if this is the top level space
   * then -1 will be returned.
   * @returns The order index of this space.
   */
  getOrder() {
    if (this.isTopLevel) return -1;
    const parentRoom = this.getParentRoom();
    const children = parentRoom.currentState.getStateEvents(_types_event/* EventType */.Bx.SpaceChild);
    const ordered = this.getOrderedChildren(children);
    return ordered.findIndex(c => c.roomId === this.roomId);
  }

  /**
   * Sets the order index for this directory within its parent. Note that if this is a top level
   * space then an error will be thrown. -1 can be used to move the child to the start, and numbers
   * larger than the number of children can be used to move the child to the end.
   * @param index - The new order index for this space.
   * @returns Promise which resolves when complete.
   * @throws Throws if this is a top level space.
   */
  async setOrder(index) {
    var _currentChild$getCont2;
    if (this.isTopLevel) throw new Error("Cannot set order of top level spaces currently");
    const parentRoom = this.getParentRoom();
    const children = parentRoom.currentState.getStateEvents(_types_event/* EventType */.Bx.SpaceChild);
    const ordered = this.getOrderedChildren(children);
    index = Math.max(Math.min(index, ordered.length - 1), 0);
    const currentIndex = this.getOrder();
    const movingUp = currentIndex < index;
    if (movingUp && index === ordered.length - 1) {
      index--;
    } else if (!movingUp && index === 0) {
      index++;
    }
    const prev = ordered[movingUp ? index : index - 1];
    const next = ordered[movingUp ? index + 1 : index];
    let newOrder = utils/* DEFAULT_ALPHABET */.Mf[0];
    let ensureBeforeIsSane = false;
    if (!prev) {
      // Move to front
      if (next !== null && next !== void 0 && next.order) {
        newOrder = (0,utils/* prevString */.zR)(next.order);
      }
    } else if (index === ordered.length - 1) {
      // Move to back
      if (next !== null && next !== void 0 && next.order) {
        newOrder = (0,utils/* nextString */.$9)(next.order);
      }
    } else {
      // Move somewhere in the middle
      const startOrder = prev === null || prev === void 0 ? void 0 : prev.order;
      const endOrder = next === null || next === void 0 ? void 0 : next.order;
      if (startOrder && endOrder) {
        if (startOrder === endOrder) {
          // Error case: just move +1 to break out of awful math
          newOrder = (0,utils/* nextString */.$9)(startOrder);
        } else {
          newOrder = (0,utils/* averageBetweenStrings */.sy)(startOrder, endOrder);
        }
      } else {
        if (startOrder) {
          // We're at the end (endOrder is null, so no explicit order)
          newOrder = (0,utils/* nextString */.$9)(startOrder);
        } else if (endOrder) {
          // We're at the start (startOrder is null, so nothing before us)
          newOrder = (0,utils/* prevString */.zR)(endOrder);
        } else {
          // Both points are unknown. We're likely in a range where all the children
          // don't have particular order values, so we may need to update them too.
          // The other possibility is there's only us as a child, but we should have
          // shown up in the other states.
          ensureBeforeIsSane = true;
        }
      }
    }
    if (ensureBeforeIsSane) {
      // We were asked by the order algorithm to prepare the moving space for a landing
      // in the undefined order part of the order array, which means we need to update the
      // spaces that come before it with a stable order value.
      let lastOrder;
      for (let i = 0; i <= index; i++) {
        const target = ordered[i];
        if (i === 0) {
          lastOrder = target.order;
        }
        if (!target.order) {
          var _currentChild$getCont;
          // XXX: We should be creating gaps to avoid conflicts
          lastOrder = lastOrder ? (0,utils/* nextString */.$9)(lastOrder) : utils/* DEFAULT_ALPHABET */.Mf[0];
          const currentChild = parentRoom.currentState.getStateEvents(_types_event/* EventType */.Bx.SpaceChild, target.roomId);
          const content = (_currentChild$getCont = currentChild === null || currentChild === void 0 ? void 0 : currentChild.getContent()) !== null && _currentChild$getCont !== void 0 ? _currentChild$getCont : {
            via: [this.client.getDomain()]
          };
          await this.client.sendStateEvent(parentRoom.roomId, _types_event/* EventType */.Bx.SpaceChild, MSC3089TreeSpace_objectSpread(MSC3089TreeSpace_objectSpread({}, content), {}, {
            order: lastOrder
          }), target.roomId);
        } else {
          lastOrder = target.order;
        }
      }
      if (lastOrder) {
        newOrder = (0,utils/* nextString */.$9)(lastOrder);
      }
    }

    // TODO: Deal with order conflicts by reordering

    // Now we can finally update our own order state
    const currentChild = parentRoom.currentState.getStateEvents(_types_event/* EventType */.Bx.SpaceChild, this.roomId);
    const content = (_currentChild$getCont2 = currentChild === null || currentChild === void 0 ? void 0 : currentChild.getContent()) !== null && _currentChild$getCont2 !== void 0 ? _currentChild$getCont2 : {
      via: [this.client.getDomain()]
    };
    await this.client.sendStateEvent(parentRoom.roomId, _types_event/* EventType */.Bx.SpaceChild, MSC3089TreeSpace_objectSpread(MSC3089TreeSpace_objectSpread({}, content), {}, {
      // TODO: Safely constrain to 50 character limit required by spaces.
      order: newOrder
    }), this.roomId);
  }

  /**
   * Creates (uploads) a new file to this tree. The file must have already been encrypted for the room.
   * The file contents are in a type that is compatible with MatrixClient.uploadContent().
   * @param name - The name of the file.
   * @param encryptedContents - The encrypted contents.
   * @param info - The encrypted file information.
   * @param additionalContent - Optional event content fields to include in the message.
   * @returns Promise which resolves to the file event's sent response.
   */
  async createFile(name, encryptedContents, info, additionalContent) {
    const {
      content_uri: mxc
    } = await this.client.uploadContent(encryptedContents, {
      includeFilename: false
    });
    info.url = mxc;
    const fileContent = {
      msgtype: _types_event/* MsgType */.Wr.File,
      body: name,
      url: mxc,
      file: info
    };
    additionalContent = additionalContent !== null && additionalContent !== void 0 ? additionalContent : {};
    if (additionalContent["m.new_content"]) {
      // We do the right thing according to the spec, but due to how relations are
      // handled we also end up duplicating this information to the regular `content`
      // as well.
      additionalContent["m.new_content"] = fileContent;
    }
    const res = await this.client.sendMessage(this.roomId, MSC3089TreeSpace_objectSpread(MSC3089TreeSpace_objectSpread(MSC3089TreeSpace_objectSpread({}, additionalContent), fileContent), {}, {
      [_types_event/* UNSTABLE_MSC3089_LEAF */.ID.name]: {}
    }));
    await this.client.sendStateEvent(this.roomId, _types_event/* UNSTABLE_MSC3089_BRANCH */.iK.name, {
      active: true,
      name: name
    }, res["event_id"]);
    return res;
  }

  /**
   * Retrieves a file from the tree.
   * @param fileEventId - The event ID of the file.
   * @returns The file, or null if not found.
   */
  getFile(fileEventId) {
    const branch = this.room.currentState.getStateEvents(_types_event/* UNSTABLE_MSC3089_BRANCH */.iK.name, fileEventId);
    return branch ? new MSC3089Branch(this.client, branch, this) : null;
  }

  /**
   * Gets an array of all known files for the tree.
   * @returns The known files. May be empty, but not null.
   */
  listFiles() {
    return this.listAllFiles().filter(b => b.isActive);
  }

  /**
   * Gets an array of all known files for the tree, including inactive/invalid ones.
   * @returns The known files. May be empty, but not null.
   */
  listAllFiles() {
    var _this$room$currentSta;
    const branches = (_this$room$currentSta = this.room.currentState.getStateEvents(_types_event/* UNSTABLE_MSC3089_BRANCH */.iK.name)) !== null && _this$room$currentSta !== void 0 ? _this$room$currentSta : [];
    return branches.map(e => new MSC3089Branch(this.client, e, this));
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/compare-event-ordering.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ compareEventOrdering)
/* harmony export */ });
/* harmony import */ var _client_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/client.ts");
/*
Copyright 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



/**
 * Determine the order of two events in a room.
 *
 * In principle this should use the same order as the server, but in practice
 * this is difficult for events that were not received over the Sync API. See
 * MSC4033 for details.
 *
 * This implementation leans on the order of events within their timelines, and
 * falls back to comparing event timestamps when they are in different
 * timelines.
 *
 * See https://github.com/matrix-org/matrix-js-sdk/issues/3325 for where we are
 * tracking the work to fix this.
 *
 * @param room - the room we are looking in
 * @param leftEventId - the id of the first event
 * @param rightEventId - the id of the second event

 * @returns -1 if left \< right, 1 if left \> right, 0 if left == right, null if
 *          we can't tell (because we can't find the events).
 */
function compareEventOrdering(room, leftEventId, rightEventId) {
  const leftEvent = room.findEventById(leftEventId);
  const rightEvent = room.findEventById(rightEventId);
  if (!leftEvent || !rightEvent) {
    // Without the events themselves, we can't find their thread or
    // timeline, or guess based on timestamp, so we just don't know.
    return null;
  }

  // Check whether the events are in the main timeline
  const isLeftEventInMainTimeline = (0,_client_ts__WEBPACK_IMPORTED_MODULE_0__/* .inMainTimelineForReceipt */ .fN)(leftEvent);
  const isRightEventInMainTimeline = (0,_client_ts__WEBPACK_IMPORTED_MODULE_0__/* .inMainTimelineForReceipt */ .fN)(rightEvent);
  if (isLeftEventInMainTimeline && isRightEventInMainTimeline) {
    return compareEventsInMainTimeline(room, leftEventId, rightEventId, leftEvent, rightEvent);
  } else {
    // At least one event is not in the timeline, so we can't use the room's
    // unfiltered timeline set.
    return compareEventsInThreads(leftEventId, rightEventId, leftEvent, rightEvent);
  }
}
function compareEventsInMainTimeline(room, leftEventId, rightEventId, leftEvent, rightEvent) {
  // Get the timeline set that contains all the events.
  const timelineSet = room.getUnfilteredTimelineSet();

  // If they are in the same timeline, compareEventOrdering does what we need
  const compareSameTimeline = timelineSet.compareEventOrdering(leftEventId, rightEventId);
  if (compareSameTimeline !== null) {
    return compareSameTimeline;
  }

  // Find which timeline each event is in. Refuse to provide an ordering if we
  // can't find either of the events.

  const leftTimeline = timelineSet.getTimelineForEvent(leftEventId);
  if (leftTimeline === timelineSet.getLiveTimeline()) {
    // The left event is part of the live timeline, so it must be after the
    // right event (since they are not in the same timeline or we would have
    // returned after compareEventOrdering.
    return 1;
  }
  const rightTimeline = timelineSet.getTimelineForEvent(rightEventId);
  if (rightTimeline === timelineSet.getLiveTimeline()) {
    // The right event is part of the live timeline, so it must be after the
    // left event.
    return -1;
  }

  // They are in older timeline sets (because they were fetched by paging up).
  return guessOrderBasedOnTimestamp(leftEvent, rightEvent);
}
function compareEventsInThreads(leftEventId, rightEventId, leftEvent, rightEvent) {
  const leftEventThreadId = (0,_client_ts__WEBPACK_IMPORTED_MODULE_0__/* .threadIdForReceipt */ .Xb)(leftEvent);
  const rightEventThreadId = (0,_client_ts__WEBPACK_IMPORTED_MODULE_0__/* .threadIdForReceipt */ .Xb)(rightEvent);
  const leftThread = leftEvent.getThread();
  if (leftThread && leftEventThreadId === rightEventThreadId) {
    // They are in the same thread, so we can ask the thread's timeline to
    // figure it out for us
    return leftThread.timelineSet.compareEventOrdering(leftEventId, rightEventId);
  } else {
    return guessOrderBasedOnTimestamp(leftEvent, rightEvent);
  }
}

/**
 * Guess the order of events based on server timestamp. This is not good, but
 * difficult to avoid without MSC4033.
 *
 * See https://github.com/matrix-org/matrix-js-sdk/issues/3325
 */
function guessOrderBasedOnTimestamp(leftEvent, rightEvent) {
  const leftTs = leftEvent.getTs();
  const rightTs = rightEvent.getTs();
  if (leftTs < rightTs) {
    return -1;
  } else if (leftTs > rightTs) {
    return 1;
  } else {
    return 0;
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/event-context.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ EventContext)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _event_timeline_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/event-timeline.ts");

/*
Copyright 2015 - 2021 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


class EventContext {
  /**
   * Construct a new EventContext
   *
   * An eventcontext is used for circumstances such as search results, when we
   * have a particular event of interest, and a bunch of events before and after
   * it.
   *
   * It also stores pagination tokens for going backwards and forwards in the
   * timeline.
   *
   * @param ourEvent - the event at the centre of this context
   */
  constructor(ourEvent) {
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "timeline", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "ourEventIndex", 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "paginateTokens", {
      [_event_timeline_ts__WEBPACK_IMPORTED_MODULE_1__/* .Direction */ .O.Backward]: null,
      [_event_timeline_ts__WEBPACK_IMPORTED_MODULE_1__/* .Direction */ .O.Forward]: null
    });
    this.ourEvent = ourEvent;
    this.timeline = [ourEvent];
  }

  /**
   * Get the main event of interest
   *
   * This is a convenience function for getTimeline()[getOurEventIndex()].
   *
   * @returns The event at the centre of this context.
   */
  getEvent() {
    return this.timeline[this.ourEventIndex];
  }

  /**
   * Get the list of events in this context
   *
   * @returns An array of MatrixEvents
   */
  getTimeline() {
    return this.timeline;
  }

  /**
   * Get the index in the timeline of our event
   */
  getOurEventIndex() {
    return this.ourEventIndex;
  }

  /**
   * Get a pagination token.
   *
   * @param backwards -   true to get the pagination token for going
   */
  getPaginateToken(backwards = false) {
    return this.paginateTokens[backwards ? _event_timeline_ts__WEBPACK_IMPORTED_MODULE_1__/* .Direction */ .O.Backward : _event_timeline_ts__WEBPACK_IMPORTED_MODULE_1__/* .Direction */ .O.Forward];
  }

  /**
   * Set a pagination token.
   *
   * Generally this will be used only by the matrix js sdk.
   *
   * @param token -        pagination token
   * @param backwards -   true to set the pagination token for going
   *                                   backwards in time
   */
  setPaginateToken(token, backwards = false) {
    this.paginateTokens[backwards ? _event_timeline_ts__WEBPACK_IMPORTED_MODULE_1__/* .Direction */ .O.Backward : _event_timeline_ts__WEBPACK_IMPORTED_MODULE_1__/* .Direction */ .O.Forward] = token !== null && token !== void 0 ? token : null;
  }

  /**
   * Add more events to the timeline
   *
   * @param events -      new events, in timeline order
   * @param atStart -   true to insert new events at the start
   */
  addEvents(events, atStart = false) {
    // TODO: should we share logic with Room.addEventsToTimeline?
    // Should Room even use EventContext?

    if (atStart) {
      this.timeline = events.concat(this.timeline);
      this.ourEventIndex += events.length;
    } else {
      this.timeline = this.timeline.concat(events);
    }
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/event-status.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ EventStatus)
/* harmony export */ });
/*
Copyright 2015 - 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Enum for event statuses.
 * @readonly
 */
let EventStatus = /*#__PURE__*/function (EventStatus) {
  /** The event was not sent and will no longer be retried. */
  EventStatus["NOT_SENT"] = "not_sent";
  /** The message is being encrypted */
  EventStatus["ENCRYPTING"] = "encrypting";
  /** The event is in the process of being sent. */
  EventStatus["SENDING"] = "sending";
  /** The event is in a queue waiting to be sent. */
  EventStatus["QUEUED"] = "queued";
  /** The event has been sent to the server, but we have not yet received the echo. */
  EventStatus["SENT"] = "sent";
  /** The event was cancelled before it was successfully sent. */
  EventStatus["CANCELLED"] = "cancelled";
  return EventStatus;
}({});

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/event-timeline.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ Direction),
/* harmony export */   q: () => (/* binding */ EventTimeline)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _room_state_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/room-state.ts");
/* harmony import */ var _types_event_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/event.ts");

/*
Copyright 2016 - 2021 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



let Direction = /*#__PURE__*/function (Direction) {
  Direction["Backward"] = "b";
  Direction["Forward"] = "f";
  return Direction;
}({});
class EventTimeline {
  /**
   * Static helper method to set sender and target properties
   *
   * @param event -   the event whose metadata is to be set
   * @param stateContext -  the room state to be queried
   * @param toStartOfTimeline -  if true the event's forwardLooking flag is set false
   */
  static setEventMetadata(event, stateContext, toStartOfTimeline) {
    event.setMetadata(stateContext, toStartOfTimeline);
  }
  /**
   * Construct a new EventTimeline
   *
   * <p>An EventTimeline represents a contiguous sequence of events in a room.
   *
   * <p>As well as keeping track of the events themselves, it stores the state of
   * the room at the beginning and end of the timeline, and pagination tokens for
   * going backwards and forwards in the timeline.
   *
   * <p>In order that clients can meaningfully maintain an index into a timeline,
   * the EventTimeline object tracks a 'baseIndex'. This starts at zero, but is
   * incremented when events are prepended to the timeline. The index of an event
   * relative to baseIndex therefore remains constant.
   *
   * <p>Once a timeline joins up with its neighbour, they are linked together into a
   * doubly-linked list.
   *
   * @param eventTimelineSet - the set of timelines this is part of
   */
  constructor(eventTimelineSet) {
    var _eventTimelineSet$roo, _eventTimelineSet$roo2;
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "roomId", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "name", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "events", []);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "baseIndex", 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "startState", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "endState", void 0);
    // If we have a roomId then we delegate pagination token storage to the room state objects `startState` and
    // `endState`, but for things like the notification timeline which mix multiple rooms we store the tokens ourselves.
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "startToken", null);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "endToken", null);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "prevTimeline", null);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "nextTimeline", null);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "paginationRequests", {
      [Direction.Backward]: null,
      [Direction.Forward]: null
    });
    this.eventTimelineSet = eventTimelineSet;
    this.roomId = (_eventTimelineSet$roo = (_eventTimelineSet$roo2 = eventTimelineSet.room) === null || _eventTimelineSet$roo2 === void 0 ? void 0 : _eventTimelineSet$roo2.roomId) !== null && _eventTimelineSet$roo !== void 0 ? _eventTimelineSet$roo : null;
    if (this.roomId) {
      this.startState = new _room_state_ts__WEBPACK_IMPORTED_MODULE_1__/* .RoomState */ .H(this.roomId);
      this.endState = new _room_state_ts__WEBPACK_IMPORTED_MODULE_1__/* .RoomState */ .H(this.roomId);
    }

    // this is used by client.js
    this.paginationRequests = {
      b: null,
      f: null
    };
    this.name = this.roomId + ":" + new Date().toISOString();
  }

  /**
   * Initialise the start and end state with the given events
   *
   * <p>This can only be called before any events are added.
   *
   * @param stateEvents - list of state events to initialise the
   * state with.
   * @throws Error if an attempt is made to call this after addEvent is called.
   */
  initialiseState(stateEvents, {
    timelineWasEmpty
  } = {}) {
    var _this$startState, _this$endState;
    if (this.events.length > 0) {
      throw new Error("Cannot initialise state after events are added");
    }
    (_this$startState = this.startState) === null || _this$startState === void 0 || _this$startState.setStateEvents(stateEvents, {
      timelineWasEmpty
    });
    (_this$endState = this.endState) === null || _this$endState === void 0 || _this$endState.setStateEvents(stateEvents, {
      timelineWasEmpty
    });
  }

  /**
   * Forks the (live) timeline, taking ownership of the existing directional state of this timeline.
   * All attached listeners will keep receiving state updates from the new live timeline state.
   * The end state of this timeline gets replaced with an independent copy of the current RoomState,
   * and will need a new pagination token if it ever needs to paginate forwards.
    * @param direction -   EventTimeline.BACKWARDS to get the state at the
   *   start of the timeline; EventTimeline.FORWARDS to get the state at the end
   *   of the timeline.
   *
   * @returns the new timeline
   */
  forkLive(direction) {
    const forkState = this.getState(direction);
    const timeline = new EventTimeline(this.eventTimelineSet);
    timeline.startState = forkState === null || forkState === void 0 ? void 0 : forkState.clone();
    // Now clobber the end state of the new live timeline with that from the
    // previous live timeline. It will be identical except that we'll keep
    // using the same RoomMember objects for the 'live' set of members with any
    // listeners still attached
    timeline.endState = forkState;
    // Firstly, we just stole the current timeline's end state, so it needs a new one.
    // Make an immutable copy of the state so back pagination will get the correct sentinels.
    this.endState = forkState === null || forkState === void 0 ? void 0 : forkState.clone();
    return timeline;
  }

  /**
   * Creates an independent timeline, inheriting the directional state from this timeline.
   *
   * @param direction -   EventTimeline.BACKWARDS to get the state at the
   *   start of the timeline; EventTimeline.FORWARDS to get the state at the end
   *   of the timeline.
   *
   * @returns the new timeline
   */
  fork(direction) {
    const forkState = this.getState(direction);
    const timeline = new EventTimeline(this.eventTimelineSet);
    timeline.startState = forkState === null || forkState === void 0 ? void 0 : forkState.clone();
    timeline.endState = forkState === null || forkState === void 0 ? void 0 : forkState.clone();
    return timeline;
  }

  /**
   * Get the ID of the room for this timeline
   * @returns room ID
   */
  getRoomId() {
    return this.roomId;
  }

  /**
   * Get the filter for this timeline's timelineSet (if any)
   * @returns filter
   */
  getFilter() {
    return this.eventTimelineSet.getFilter();
  }

  /**
   * Get the timelineSet for this timeline
   * @returns timelineSet
   */
  getTimelineSet() {
    return this.eventTimelineSet;
  }

  /**
   * Get the base index.
   *
   * <p>This is an index which is incremented when events are prepended to the
   * timeline. An individual event therefore stays at the same index in the array
   * relative to the base index (although note that a given event's index may
   * well be less than the base index, thus giving that event a negative relative
   * index).
   */
  getBaseIndex() {
    return this.baseIndex;
  }

  /**
   * Get the list of events in this context
   *
   * @returns An array of MatrixEvents
   */
  getEvents() {
    return this.events;
  }

  /**
   * Get the room state at the start/end of the timeline
   *
   * @param direction -   EventTimeline.BACKWARDS to get the state at the
   *   start of the timeline; EventTimeline.FORWARDS to get the state at the end
   *   of the timeline.
   *
   * @returns state at the start/end of the timeline
   */
  getState(direction) {
    if (direction == EventTimeline.BACKWARDS) {
      return this.startState;
    } else if (direction == EventTimeline.FORWARDS) {
      return this.endState;
    } else {
      throw new Error("Invalid direction '" + direction + "'");
    }
  }

  /**
   * Get a pagination token
   *
   * @param direction - EventTimeline.BACKWARDS to get the pagination
   *   token for going backwards in time; EventTimeline.FORWARDS to get the
   *   pagination token for going forwards in time.
   *
   * @returns pagination token
   */
  getPaginationToken(direction) {
    if (this.roomId) {
      return this.getState(direction).paginationToken;
    } else if (direction === Direction.Backward) {
      return this.startToken;
    } else {
      return this.endToken;
    }
  }

  /**
   * Set a pagination token
   *
   * @param token -       pagination token
   *
   * @param direction -    EventTimeline.BACKWARDS to set the pagination
   *   token for going backwards in time; EventTimeline.FORWARDS to set the
   *   pagination token for going forwards in time.
   */
  setPaginationToken(token, direction) {
    if (this.roomId) {
      this.getState(direction).paginationToken = token;
    } else if (direction === Direction.Backward) {
      this.startToken = token;
    } else {
      this.endToken = token;
    }
  }

  /**
   * Get the next timeline in the series
   *
   * @param direction - EventTimeline.BACKWARDS to get the previous
   *   timeline; EventTimeline.FORWARDS to get the next timeline.
   *
   * @returns previous or following timeline, if they have been
   * joined up.
   */
  getNeighbouringTimeline(direction) {
    if (direction == EventTimeline.BACKWARDS) {
      return this.prevTimeline;
    } else if (direction == EventTimeline.FORWARDS) {
      return this.nextTimeline;
    } else {
      throw new Error("Invalid direction '" + direction + "'");
    }
  }

  /**
   * Set the next timeline in the series
   *
   * @param neighbour - previous/following timeline
   *
   * @param direction - EventTimeline.BACKWARDS to set the previous
   *   timeline; EventTimeline.FORWARDS to set the next timeline.
   *
   * @throws Error if an attempt is made to set the neighbouring timeline when
   * it is already set.
   */
  setNeighbouringTimeline(neighbour, direction) {
    if (this.getNeighbouringTimeline(direction)) {
      throw new Error("timeline already has a neighbouring timeline - " + "cannot reset neighbour (direction: " + direction + ")");
    }
    if (direction == EventTimeline.BACKWARDS) {
      this.prevTimeline = neighbour;
    } else if (direction == EventTimeline.FORWARDS) {
      this.nextTimeline = neighbour;
    } else {
      throw new Error("Invalid direction '" + direction + "'");
    }

    // make sure we don't try to paginate this timeline
    this.setPaginationToken(null, direction);
  }

  /**
   * Add a new event to the timeline, and update the state
   *
   * @param event - new event
   * @param options - addEvent options
   */
  addEvent(event, {
    toStartOfTimeline,
    roomState,
    timelineWasEmpty,
    addToState
  }) {
    if (!roomState) {
      roomState = toStartOfTimeline ? this.startState : this.endState;
    }
    const timelineSet = this.getTimelineSet();
    if (timelineSet.room) {
      EventTimeline.setEventMetadata(event, roomState, toStartOfTimeline);

      // modify state but only on unfiltered timelineSets
      if (addToState && event.isState() && timelineSet.room.getUnfilteredTimelineSet() === timelineSet) {
        var _roomState;
        (_roomState = roomState) === null || _roomState === void 0 || _roomState.setStateEvents([event], {
          timelineWasEmpty
        });
        // it is possible that the act of setting the state event means we
        // can set more metadata (specifically sender/target props), so try
        // it again if the prop wasn't previously set. It may also mean that
        // the sender/target is updated (if the event set was a room member event)
        // so we want to use the *updated* member (new avatar/name) instead.
        //
        // However, we do NOT want to do this on member events if we're going
        // back in time, else we'll set the .sender value for BEFORE the given
        // member event, whereas we want to set the .sender value for the ACTUAL
        // member event itself.
        if (!event.sender || event.getType() === _types_event_ts__WEBPACK_IMPORTED_MODULE_2__/* .EventType */ .Bx.RoomMember && !toStartOfTimeline) {
          EventTimeline.setEventMetadata(event, roomState, toStartOfTimeline);
        }
      }
    }
    let insertIndex;
    if (toStartOfTimeline) {
      insertIndex = 0;
    } else {
      insertIndex = this.events.length;
    }
    this.events.splice(insertIndex, 0, event); // insert element
    if (toStartOfTimeline) {
      this.baseIndex++;
    }
  }

  /**
   * Insert a new event into the timeline, and update the state.
   *
   * TEMPORARY: until we have recursive relations, we need this function
   * to exist to allow us to insert events in timeline order, which is our
   * best guess for Sync Order.
   * This is a copy of addEvent above, modified to allow inserting an event at
   * a specific index.
   *
   * @internal
   */
  insertEvent(event, insertIndex, roomState, addToState) {
    const timelineSet = this.getTimelineSet();
    if (timelineSet.room) {
      EventTimeline.setEventMetadata(event, roomState, false);

      // modify state but only on unfiltered timelineSets
      if (addToState && event.isState() && timelineSet.room.getUnfilteredTimelineSet() === timelineSet) {
        roomState.setStateEvents([event], {});
        // it is possible that the act of setting the state event means we
        // can set more metadata (specifically sender/target props), so try
        // it again if the prop wasn't previously set. It may also mean that
        // the sender/target is updated (if the event set was a room member event)
        // so we want to use the *updated* member (new avatar/name) instead.
        //
        // However, we do NOT want to do this on member events if we're going
        // back in time, else we'll set the .sender value for BEFORE the given
        // member event, whereas we want to set the .sender value for the ACTUAL
        // member event itself.
        if (!event.sender || event.getType() === _types_event_ts__WEBPACK_IMPORTED_MODULE_2__/* .EventType */ .Bx.RoomMember) {
          EventTimeline.setEventMetadata(event, roomState, false);
        }
      }
    }
    this.events.splice(insertIndex, 0, event); // insert element
  }

  /**
   * Remove an event from the timeline
   *
   * @param eventId -  ID of event to be removed
   * @returns removed event, or null if not found
   */
  removeEvent(eventId) {
    for (let i = this.events.length - 1; i >= 0; i--) {
      const ev = this.events[i];
      if (ev.getId() == eventId) {
        this.events.splice(i, 1);
        if (i < this.baseIndex) {
          this.baseIndex--;
        }
        return ev;
      }
    }
    return null;
  }

  /**
   * Return a string to identify this timeline, for debugging
   *
   * @returns name for this timeline
   */
  toString() {
    return this.name;
  }
}
/**
 * Symbolic constant for methods which take a 'direction' argument:
 * refers to the start of the timeline, or backwards in time.
 */
;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(EventTimeline, "BACKWARDS", Direction.Backward);
/**
 * Symbolic constant for methods which take a 'direction' argument:
 * refers to the end of the timeline, or forwards in time.
 */
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(EventTimeline, "FORWARDS", Direction.Forward);

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/invites-ignorer-types.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jo: () => (/* binding */ PolicyScope),
/* harmony export */   Q5: () => (/* binding */ PolicyRecommendation)
/* harmony export */ });
/* harmony import */ var matrix_events_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/index.js");
/* harmony import */ var matrix_events_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(matrix_events_sdk__WEBPACK_IMPORTED_MODULE_0__);
/*
Copyright 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



/// The event type storing the user's individual policies.
///
/// Exported for testing purposes.
const POLICIES_ACCOUNT_EVENT_TYPE = new matrix_events_sdk__WEBPACK_IMPORTED_MODULE_0__.UnstableValue("m.policies", "org.matrix.msc3847.policies");

/// The key within the user's individual policies storing the user's ignored invites.
///
/// Exported for testing purposes.
const IGNORE_INVITES_ACCOUNT_EVENT_KEY = new matrix_events_sdk__WEBPACK_IMPORTED_MODULE_0__.UnstableValue("m.ignore.invites", "org.matrix.msc3847.ignore.invites");

/// The types of recommendations understood.
let PolicyRecommendation = /*#__PURE__*/function (PolicyRecommendation) {
  PolicyRecommendation["Ban"] = "m.ban";
  return PolicyRecommendation;
}({});

/**
 * The various scopes for policies.
 */
let PolicyScope = /*#__PURE__*/function (PolicyScope) {
  /**
   * The policy deals with an individual user, e.g. reject invites
   * from this user.
   */
  PolicyScope["User"] = "m.policy.user";
  /**
   * The policy deals with a room, e.g. reject invites towards
   * a specific room.
   */
  PolicyScope["Room"] = "m.policy.room";
  /**
   * The policy deals with a server, e.g. reject invites from
   * this server.
   */
  PolicyScope["Server"] = "m.policy.server";
  return PolicyScope;
}({});
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "NG", 0, /* binding */ IGNORE_INVITES_ACCOUNT_EVENT_KEY,
/* harmony export */   "fx", 0, /* binding */ POLICIES_ACCOUNT_EVENT_TYPE
/* harmony export */ ]);


/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/read-receipt.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ synthesizeReceipt),
/* harmony export */   h: () => (/* binding */ ReadReceipt)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types_read_receipts_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/read_receipts.ts");
/* harmony import */ var _typed_event_emitter_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/typed-event-emitter.ts");
/* harmony import */ var _utils_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/utils.ts");
/* harmony import */ var _event_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/event.ts");
/* harmony import */ var _types_event_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/event.ts");
/* harmony import */ var _room_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/room.ts");
/* harmony import */ var _logger_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts");
/* harmony import */ var _client_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/client.ts");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/*
Copyright 2022 The Matrix.org Foundation C.I.C.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

;









/**
 * Create a synthetic receipt for the given event
 * @param userId - The user ID if the receipt sender
 * @param event - The event that is to be acknowledged
 * @param receiptType - The type of receipt
 * @param unthreaded - the receipt is unthreaded
 * @returns a new event with the synthetic receipt in it
 */
function synthesizeReceipt(userId, event, receiptType, unthreaded = false) {
  return new _event_ts__WEBPACK_IMPORTED_MODULE_4__/* .MatrixEvent */ .kl({
    content: {
      [event.getId()]: {
        [receiptType]: {
          [userId]: _objectSpread({
            ts: event.getTs()
          }, !unthreaded && {
            thread_id: (0,_client_ts__WEBPACK_IMPORTED_MODULE_8__/* .threadIdForReceipt */ .Xb)(event)
          })
        }
      }
    },
    type: _types_event_ts__WEBPACK_IMPORTED_MODULE_5__/* .EventType */ .Bx.Receipt,
    room_id: event.getRoomId()
  });
}
const ReceiptPairRealIndex = 0;
const ReceiptPairSyntheticIndex = 1;
class ReadReceipt extends _typed_event_emitter_ts__WEBPACK_IMPORTED_MODULE_2__/* .TypedEventEmitter */ .X {
  constructor(...args) {
    super(...args);
    // receipts should clobber based on receipt_type and user_id pairs hence
    // the form of this structure. This is sub-optimal for the exposed APIs
    // which pass in an event ID and get back some receipts, so we also store
    // a pre-cached list for this purpose.
    // Map: receipt type → user Id → receipt
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "receipts", new _utils_ts__WEBPACK_IMPORTED_MODULE_3__/* .MapWithDefault */ .kG(() => new Map()));
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "receiptCacheByEventId", new Map());
  }
  /**
   * Gets the latest receipt for a given user in the room
   * @param userId - The id of the user for which we want the receipt
   * @param ignoreSynthesized - Whether to ignore synthesized receipts or not
   * @param receiptType - Optional. The type of the receipt we want to get
   * @returns the latest receipts of the chosen type for the chosen user
   */
  getReadReceiptForUserId(userId, ignoreSynthesized = false, receiptType = _types_read_receipts_ts__WEBPACK_IMPORTED_MODULE_1__/* .ReceiptType */ .L.Read) {
    var _this$receipts$get$ge, _this$receipts$get;
    const [realReceipt, syntheticReceipt] = (_this$receipts$get$ge = (_this$receipts$get = this.receipts.get(receiptType)) === null || _this$receipts$get === void 0 ? void 0 : _this$receipts$get.get(userId)) !== null && _this$receipts$get$ge !== void 0 ? _this$receipts$get$ge : [null, null];
    if (ignoreSynthesized) {
      return realReceipt;
    }
    return syntheticReceipt !== null && syntheticReceipt !== void 0 ? syntheticReceipt : realReceipt;
  }
  compareReceipts(a, b) {
    var _this$getUnfilteredTi;
    // Try compare them in our unfiltered timeline set order, falling back to receipt timestamp which should be
    // relatively sane as receipts are set only by the originating homeserver so as long as its clock doesn't
    // jump around then it should be valid.
    return (_this$getUnfilteredTi = this.getUnfilteredTimelineSet().compareEventOrdering(a.eventId, b.eventId)) !== null && _this$getUnfilteredTi !== void 0 ? _this$getUnfilteredTi : a.data.ts - b.data.ts;
  }

  /**
   * Get the ID of the event that a given user has read up to, or null if:
   * - we have received no read receipts for them, or
   * - the receipt we have points at an event we don't have, or
   * - the thread ID in the receipt does not match the thread root of the
   *   referenced event.
   *
   * (The event might not exist if it is not loaded, and the thread ID might
   * not match if the event has moved thread because it was redacted.)
   *
   * @param userId - The user ID to get read receipt event ID for
   * @param ignoreSynthesized - If true, return only receipts that have been
   *                            sent by the server, not implicit ones generated
   *                            by the JS SDK.
   * @returns ID of the latest existing event that the given user has read, or null.
   */
  getEventReadUpTo(userId, ignoreSynthesized = false) {
    // Find what the latest receipt says is the latest event we have read
    const latestReceipt = this.getLatestReceipt(userId, ignoreSynthesized);
    if (!latestReceipt) {
      return null;
    }
    return this.receiptPointsAtConsistentEvent(latestReceipt) ? latestReceipt.eventId : null;
  }

  /**
   * Returns true if the event pointed at by this receipt exists, and its
   * threadRootId is consistent with the thread information in the receipt.
   */
  receiptPointsAtConsistentEvent(receipt) {
    var _receipt$data;
    const event = this.findEventById(receipt.eventId);
    if (!event) {
      // If the receipt points at a non-existent event, we have multiple
      // possibilities:
      //
      // 1. We don't have the event because it's not loaded yet - probably
      //    it's old and we're best off ignoring the receipt - we can just
      //    send a new one when we read a new event.
      //
      // 2. We have a bug e.g. we misclassified this event into the wrong
      //    thread.
      //
      // 3. The referenced event moved out of this thread (e.g. because it
      //    was deleted.)
      //
      // 4. The receipt had the incorrect thread ID (due to a bug in a
      // client, or malicious behaviour).

      // This receipt is not "valid" because it doesn't point at an event
      // we have. We want to pretend it doesn't exist.
      return false;
    }
    if (!((_receipt$data = receipt.data) !== null && _receipt$data !== void 0 && _receipt$data.thread_id)) {
      // If this is an unthreaded receipt, it could point at any event, so
      // there is no need to validate further - this receipt is valid.
      return true;
    }
    // Otherwise it is a threaded receipt...

    if (receipt.data.thread_id === (/* inlined export .MAIN_ROOM_TIMELINE */"main")) {
      // The receipt is for the main timeline: we check that the event is
      // in the main timeline.

      // Check if the event is in the main timeline
      const eventIsInMainTimeline = (0,_client_ts__WEBPACK_IMPORTED_MODULE_8__/* .inMainTimelineForReceipt */ .fN)(event);
      if (eventIsInMainTimeline) {
        // The receipt is for the main timeline, and so is the event, so
        // the receipt is valid.
        return true;
      }
    } else {
      // The receipt is for a different thread (not the main timeline)

      if (event.threadRootId === receipt.data.thread_id) {
        // If the receipt and event agree on the thread ID, the receipt
        // is valid.
        return true;
      }
    }

    // The receipt thread ID disagrees with the event thread ID. There are 2
    // possibilities:
    //
    // 1. The event moved to a different thread after the receipt was
    //    created. This can happen if the event was redacted because that
    //    moves it to the main timeline.
    //
    // 2. There is a bug somewhere - either we put the event into the wrong
    //    thread, or someone sent an incorrect receipt.
    //
    // In many cases, we won't get here because the call to findEventById
    // would have already returned null. We include this check to cover
    // cases when `this` is a  room, meaning findEventById will find events
    // in any thread, and to be defensive against unforeseen code paths.
    _logger_ts__WEBPACK_IMPORTED_MODULE_7__/* .logger */ .vF.warn(`Ignoring receipt because its thread_id (${receipt.data.thread_id}) disagrees ` + `with the thread root (${event.threadRootId}) of the referenced event ` + `(event ID = ${receipt.eventId})`);

    // This receipt is not "valid" because it disagrees with us about what
    // thread the event is in. We want to pretend it doesn't exist.
    return false;
  }
  getLatestReceipt(userId, ignoreSynthesized) {
    var _ref, _ref2;
    // XXX: This is very very ugly and I hope I won't have to ever add a new
    // receipt type here again. IMHO this should be done by the server in
    // some more intelligent manner or the client should just use timestamps

    const publicReadReceipt = this.getReadReceiptForUserId(userId, ignoreSynthesized, _types_read_receipts_ts__WEBPACK_IMPORTED_MODULE_1__/* .ReceiptType */ .L.Read);
    const privateReadReceipt = this.getReadReceiptForUserId(userId, ignoreSynthesized, _types_read_receipts_ts__WEBPACK_IMPORTED_MODULE_1__/* .ReceiptType */ .L.ReadPrivate);

    // If we have both, compare them
    let comparison;
    if (publicReadReceipt !== null && publicReadReceipt !== void 0 && publicReadReceipt.eventId && privateReadReceipt !== null && privateReadReceipt !== void 0 && privateReadReceipt.eventId) {
      comparison = this.compareReceipts(publicReadReceipt, privateReadReceipt);
    }

    // The public receipt is more likely to drift out of date so the private
    // one has precedence
    if (!comparison) return (_ref = privateReadReceipt !== null && privateReadReceipt !== void 0 ? privateReadReceipt : publicReadReceipt) !== null && _ref !== void 0 ? _ref : null;

    // If public read receipt is older, return the private one
    return (_ref2 = comparison < 0 ? privateReadReceipt : publicReadReceipt) !== null && _ref2 !== void 0 ? _ref2 : null;
  }
  addReceiptToStructure(eventId, receiptType, userId, receipt, synthetic) {
    var _pair$ReceiptPairSynt2, _pair$ReceiptPairSynt3;
    const receiptTypesMap = this.receipts.getOrCreate(receiptType);
    let pair = receiptTypesMap.get(userId);
    if (!pair) {
      pair = [null, null];
      receiptTypesMap.set(userId, pair);
    }
    let existingReceipt = pair[ReceiptPairRealIndex];
    if (synthetic) {
      var _pair$ReceiptPairSynt;
      existingReceipt = (_pair$ReceiptPairSynt = pair[ReceiptPairSyntheticIndex]) !== null && _pair$ReceiptPairSynt !== void 0 ? _pair$ReceiptPairSynt : pair[ReceiptPairRealIndex];
    }
    const wrappedReceipt = {
      eventId,
      data: receipt
    };
    if (existingReceipt) {
      // We only want to add this receipt if we think it is later than the one we already have.
      // This is managed server-side, but because we synthesize RRs locally we have to do it here too.
      const ordering = this.compareReceipts(existingReceipt, wrappedReceipt);
      if (ordering >= 0) {
        return;
      }
    }
    const realReceipt = synthetic ? pair[ReceiptPairRealIndex] : wrappedReceipt;
    const syntheticReceipt = synthetic ? wrappedReceipt : pair[ReceiptPairSyntheticIndex];
    let ordering = null;
    if (realReceipt && syntheticReceipt) {
      ordering = this.getUnfilteredTimelineSet().compareEventOrdering(realReceipt.eventId, syntheticReceipt.eventId);
    }
    const preferSynthetic = ordering === null || ordering < 0;

    // we don't bother caching just real receipts by event ID as there's nothing that would read it.
    // Take the current cached receipt before we overwrite the pair elements.
    const cachedReceipt = (_pair$ReceiptPairSynt2 = pair[ReceiptPairSyntheticIndex]) !== null && _pair$ReceiptPairSynt2 !== void 0 ? _pair$ReceiptPairSynt2 : pair[ReceiptPairRealIndex];
    if (synthetic && preferSynthetic) {
      pair[ReceiptPairSyntheticIndex] = wrappedReceipt;
    } else if (!synthetic) {
      pair[ReceiptPairRealIndex] = wrappedReceipt;
      if (!preferSynthetic) {
        pair[ReceiptPairSyntheticIndex] = null;
      }
    }
    const newCachedReceipt = (_pair$ReceiptPairSynt3 = pair[ReceiptPairSyntheticIndex]) !== null && _pair$ReceiptPairSynt3 !== void 0 ? _pair$ReceiptPairSynt3 : pair[ReceiptPairRealIndex];
    if (cachedReceipt === newCachedReceipt) return;

    // clean up any previous cache entry
    if (cachedReceipt && this.receiptCacheByEventId.get(cachedReceipt.eventId)) {
      const previousEventId = cachedReceipt.eventId;
      // Remove the receipt we're about to clobber out of existence from the cache
      this.receiptCacheByEventId.set(previousEventId, this.receiptCacheByEventId.get(previousEventId).filter(r => {
        return r.type !== receiptType || r.userId !== userId;
      }));
      if (this.receiptCacheByEventId.get(previousEventId).length < 1) {
        this.receiptCacheByEventId.delete(previousEventId); // clean up the cache keys
      }
    }

    // cache the new one
    if (!this.receiptCacheByEventId.get(eventId)) {
      this.receiptCacheByEventId.set(eventId, []);
    }
    this.receiptCacheByEventId.get(eventId).push({
      userId: userId,
      type: receiptType,
      data: receipt
    });
  }

  /**
   * Get a list of receipts for the given event.
   * @param event - the event to get receipts for
   * @returns A list of receipts with a userId, type and data keys or
   * an empty list.
   */
  getReceiptsForEvent(event) {
    return this.receiptCacheByEventId.get(event.getId()) || [];
  }

  /**
   * Look in this room/thread's timeline to find an event. If `this` is a
   * room, we look in all threads, but if `this` is a thread, we look only
   * inside this thread.
   */

  /**
   * This issue should also be addressed on synapse's side and is tracked as part
   * of https://github.com/matrix-org/synapse/issues/14837
   *
   * Retrieves the read receipt for the logged in user and checks if it matches
   * the last event in the room and whether that event originated from the logged
   * in user.
   * Under those conditions we can consider the context as read. This is useful
   * because we never send read receipts against our own events
   * @param userId - the logged in user
   */
  fixupNotifications(userId) {
    const receipt = this.getReadReceiptForUserId(userId, false);
    const lastEvent = this.timeline[this.timeline.length - 1];
    if (lastEvent && (receipt === null || receipt === void 0 ? void 0 : receipt.eventId) === lastEvent.getId() && userId === lastEvent.getSender()) {
      this.setUnread(_room_ts__WEBPACK_IMPORTED_MODULE_6__/* .NotificationCountType */ .X5.Total, 0);
      this.setUnread(_room_ts__WEBPACK_IMPORTED_MODULE_6__/* .NotificationCountType */ .X5.Highlight, 0);
    }
  }

  /**
   * Add a temporary local-echo receipt to the room to reflect in the
   * client the fact that we've sent one.
   * @param userId - The user ID if the receipt sender
   * @param e - The event that is to be acknowledged
   * @param receiptType - The type of receipt
   * @param unthreaded - the receipt is unthreaded
   */
  addLocalEchoReceipt(userId, e, receiptType, unthreaded = false) {
    this.addReceipt(synthesizeReceipt(userId, e, receiptType, unthreaded), true);
  }

  /**
   * Get a list of user IDs who have <b>read up to</b> the given event.
   * @param event - the event to get read receipts for.
   * @returns A list of user IDs.
   */
  getUsersReadUpTo(event) {
    return this.getReceiptsForEvent(event).filter(function (receipt) {
      return (0,_utils_ts__WEBPACK_IMPORTED_MODULE_3__/* .isSupportedReceiptType */ .ll)(receipt.type);
    }).map(function (receipt) {
      return receipt.userId;
    });
  }

  /**
   * Determines if the given user has read a particular event ID with the known
   * history of the room. This is not a definitive check as it relies only on
   * what is available to the room at the time of execution.
   * @param userId - The user ID to check the read state of.
   * @param eventId - The event ID to check if the user read.
   * @returns True if the user has read the event, false otherwise.
   */

  /**
   * Returns the most recent unthreaded receipt for a given user
   * @param userId - the MxID of the User
   * @returns an unthreaded Receipt. Can be undefined if receipts have been disabled
   * or a user chooses to use private read receipts (or we have simply not received
   * a receipt from this user yet).
   *
   * @deprecated use `hasUserReadEvent` or `getEventReadUpTo` instead
   */
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/relations-container.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ RelationsContainer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _relations_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/relations.ts");
/* harmony import */ var _event_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/event.ts");
/* harmony import */ var _logger_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts");

/*
Copyright 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




class RelationsContainer {
  constructor(client, room) {
    // A tree of objects to access a set of related children for an event, as in:
    // this.relations.get(parentEventId).get(relationType).get(relationEventType)
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "relations", new Map());
    this.client = client;
    this.room = room;
  }

  /**
   * Get a collection of child events to a given event in this timeline set.
   *
   * @param eventId - The ID of the event that you'd like to access child events for.
   * For example, with annotations, this would be the ID of the event being annotated.
   * @param relationType - The type of relationship involved, such as "m.annotation", "m.reference", "m.replace", etc.
   * @param eventType - The relation event's type, such as "m.reaction", etc.
   * @throws If `eventId</code>, <code>relationType</code> or <code>eventType`
   * are not valid.
   *
   * @returns
   * A container for relation events or undefined if there are no relation events for
   * the relationType.
   */
  getChildEventsForEvent(eventId, relationType, eventType) {
    var _this$relations$get;
    return (_this$relations$get = this.relations.get(eventId)) === null || _this$relations$get === void 0 || (_this$relations$get = _this$relations$get.get(relationType)) === null || _this$relations$get === void 0 ? void 0 : _this$relations$get.get(eventType);
  }
  getAllChildEventsForEvent(parentEventId) {
    var _this$relations$get2;
    const relationsForEvent = (_this$relations$get2 = this.relations.get(parentEventId)) !== null && _this$relations$get2 !== void 0 ? _this$relations$get2 : new Map();
    const events = [];
    for (const relationsRecord of relationsForEvent.values()) {
      for (const relations of relationsRecord.values()) {
        events.push(...relations.getRelations());
      }
    }
    return events;
  }

  /**
   * Set an event as the target event if any Relations exist for it already.
   * Child events can point to other child events as their parent, so this method may be
   * called for events which are also logically child events.
   *
   * @param event - The event to check as relation target.
   */
  aggregateParentEvent(event) {
    const relationsForEvent = this.relations.get(event.getId());
    if (!relationsForEvent) return;
    for (const relationsWithRelType of relationsForEvent.values()) {
      for (const relationsWithEventType of relationsWithRelType.values()) {
        relationsWithEventType.setTargetEvent(event);
      }
    }
  }

  /**
   * Add relation events to the relevant relation collection.
   *
   * @param event - The new child event to be aggregated.
   * @param timelineSet - The event timeline set within which to search for the related event if any.
   */

  /**
   * Add a relation event using a known target that is not in the timeline yet.
   *
   * @param event - The new child event to be aggregated.
   * @param timelineSet - The event timeline set within which to search for the related event.
   * @param targetEvent - The known relation target.
   * @returns A promise which resolves after aggregation.
   */

  aggregateChildEvent(event, timelineSet, targetEvent) {
    const aggregation = this.aggregateChildEventInternal(event, timelineSet, targetEvent);
    if (targetEvent) return aggregation;
    void aggregation.catch(error => _logger_ts__WEBPACK_IMPORTED_MODULE_3__/* .logger */ .vF.error("Failed to aggregate child event: ", error));
  }
  aggregateChildEventInternal(event, timelineSet, targetEvent) {
    if (event.isRedacted() || event.status === _event_ts__WEBPACK_IMPORTED_MODULE_2__/* .EventStatus */ .fb.CANCELLED) {
      return Promise.resolve();
    }
    const relation = event.getRelation();
    if (!relation) return Promise.resolve();

    // If the event is currently encrypted, wait until it has been decrypted.
    if (event.isBeingDecrypted() || event.shouldAttemptDecryption()) {
      return new Promise((resolve, reject) => {
        const onEventDecrypted = () => {
          if (event.isDecryptionFailure()) {
            // This could for example happen if the encryption keys are not yet available.
            // The event may still be decrypted later. Register the listener again.
            event.once(_event_ts__WEBPACK_IMPORTED_MODULE_2__/* .MatrixEventEvent */ .OQ.Decrypted, onEventDecrypted);
            return;
          }
          void this.aggregateChildEventInternal(event, timelineSet, targetEvent).then(resolve, reject);
        };
        event.once(_event_ts__WEBPACK_IMPORTED_MODULE_2__/* .MatrixEventEvent */ .OQ.Decrypted, onEventDecrypted);
      });
    }
    const {
      event_id: relatesToEventId,
      rel_type: relationType
    } = relation;
    const eventType = event.getType();
    let relationsForEvent = this.relations.get(relatesToEventId);
    if (!relationsForEvent) {
      relationsForEvent = new Map();
      this.relations.set(relatesToEventId, relationsForEvent);
    }
    let relationsWithRelType = relationsForEvent.get(relationType);
    if (!relationsWithRelType) {
      relationsWithRelType = new Map();
      relationsForEvent.set(relationType, relationsWithRelType);
    }
    let relationsWithEventType = relationsWithRelType.get(eventType);
    const isNewRelationCollection = !relationsWithEventType;
    let targetEventUpdate = Promise.resolve();
    if (!relationsWithEventType) {
      relationsWithEventType = new _relations_ts__WEBPACK_IMPORTED_MODULE_1__/* .Relations */ .s(relationType, eventType, this.client);
      relationsWithRelType.set(eventType, relationsWithEventType);
    }
    if (isNewRelationCollection || targetEvent) {
      var _this$room, _ref, _ref2, _timelineSet$findEven;
      const room = (_this$room = this.room) !== null && _this$room !== void 0 ? _this$room : timelineSet === null || timelineSet === void 0 ? void 0 : timelineSet.room;
      const relatesToEvent = (_ref = (_ref2 = (_timelineSet$findEven = timelineSet === null || timelineSet === void 0 ? void 0 : timelineSet.findEventById(relatesToEventId)) !== null && _timelineSet$findEven !== void 0 ? _timelineSet$findEven : room === null || room === void 0 ? void 0 : room.findEventById(relatesToEventId)) !== null && _ref2 !== void 0 ? _ref2 : room === null || room === void 0 ? void 0 : room.getPendingEvent(relatesToEventId)) !== null && _ref !== void 0 ? _ref : targetEvent;
      if (relatesToEvent) {
        targetEventUpdate = relationsWithEventType.setTargetEvent(relatesToEvent);
      }
    }
    const addEventUpdate = relationsWithEventType.addEvent(event);
    return Promise.all([targetEventUpdate, addEventUpdate]).then(() => undefined);
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/room-receipts.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ RoomReceipts)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _client_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/client.ts");
/* harmony import */ var _room_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/room.ts");
/* harmony import */ var _logger_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts");

/*
Copyright 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/






/**
 * The latest receipts we have for a room.
 */
class RoomReceipts {
  constructor(room) {
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "room", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "threadedReceipts", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "unthreadedReceipts", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "danglingReceipts", void 0);
    /**
     * Look for dangling receipts for the given event ID,
     * and add them to the thread of unthread receipts if found.
     * @param event - the event to look for
     */
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onTimelineEvent", event => {
      const eventId = event.getId();
      if (!eventId) return;
      const danglingReceipts = this.danglingReceipts.remove(eventId);
      danglingReceipts === null || danglingReceipts === void 0 || danglingReceipts.forEach(danglingReceipt => {
        // The receipt is a thread receipt
        if (danglingReceipt.receipt.thread_id) {
          this.threadedReceipts.set(danglingReceipt.receipt.thread_id, danglingReceipt.eventId, danglingReceipt.receiptType, danglingReceipt.userId, danglingReceipt.receipt.ts, danglingReceipt.synthetic);
        } else {
          this.unthreadedReceipts.set(eventId, danglingReceipt.receiptType, danglingReceipt.userId, danglingReceipt.receipt.ts, danglingReceipt.synthetic);
        }
      });
    });
    this.room = room;
    this.threadedReceipts = new ThreadedReceipts(room);
    this.unthreadedReceipts = new ReceiptsByUser(room);
    this.danglingReceipts = new DanglingReceipts();
    // We listen for timeline events so we can process dangling receipts
    room.on(_room_ts__WEBPACK_IMPORTED_MODULE_3__/* .RoomEvent */ .u9.Timeline, this.onTimelineEvent);
  }

  /**
   * Remember the receipt information supplied. For each receipt:
   *
   * If we don't have the event for this receipt, store it as "dangling" so we
   * can process it later.
   *
   * Otherwise store it per-user in either the threaded store for its
   * thread_id, or the unthreaded store if there is no thread_id.
   *
   * Ignores any receipt that is before an existing receipt for the same user
   * (in the same thread, if applicable). "Before" is defined by the
   * unfilteredTimelineSet of the room.
   */
  add(receiptContent, synthetic) {
    /*
        Transform this structure:
        {
          "$EVENTID": {
            "m.read|m.read.private": {
              "@user:example.org": {
                "ts": 1661,
                "thread_id": "main|$THREAD_ROOT_ID" // or missing/undefined for an unthreaded receipt
              }
            }
          },
          ...
        }
        into maps of:
        threaded :: threadid :: userId :: ReceiptInfo
        unthreaded :: userId :: ReceiptInfo
        dangling :: eventId :: DanglingReceipt
    */
    for (const [eventId, eventReceipt] of Object.entries(receiptContent)) {
      for (const [receiptType, receiptsByUser] of Object.entries(eventReceipt)) {
        for (const [userId, receipt] of Object.entries(receiptsByUser)) {
          const referencedEvent = this.room.findEventById(eventId);
          if (!referencedEvent) {
            this.danglingReceipts.add(new DanglingReceipt(eventId, receiptType, userId, receipt, synthetic));
          } else if (receipt.thread_id) {
            this.threadedReceipts.set(receipt.thread_id, eventId, receiptType, userId, receipt.ts, synthetic);
          } else {
            this.unthreadedReceipts.set(eventId, receiptType, userId, receipt.ts, synthetic);
          }
        }
      }
    }
  }
  hasUserReadEvent(userId, eventId) {
    const unthreaded = this.unthreadedReceipts.get(userId);
    if (unthreaded) {
      if (isAfterOrSame(unthreaded.eventId, eventId, this.room)) {
        // The unthreaded receipt is after this event, so we have read it.
        return true;
      }
    }
    const event = this.room.findEventById(eventId);
    if (!event) {
      // We don't know whether the user has read it - default to caution and say no.
      // This shouldn't really happen and feels like it ought to be an exception: let's
      // log a warn for now.
      _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.warn(`hasUserReadEvent event ID ${eventId} not found in room ${this.room.roomId}: this shouldn't happen!`);
      return false;
    }
    const threadId = (0,_client_ts__WEBPACK_IMPORTED_MODULE_2__/* .threadIdForReceipt */ .Xb)(event);
    const threaded = this.threadedReceipts.get(threadId, userId);
    if (threaded) {
      if (isAfterOrSame(threaded.eventId, eventId, this.room)) {
        // The threaded receipt is after this event, so we have read it.
        return true;
      }
    }
    if (this.userSentEventAfterOrSame(threadId, userId, eventId)) {
      // The user sent an event at or after this one, so they must have
      // seen this one: we consider it read.
      //
      // Note: the synthetic receipts we create when we see an event
      // usually do this job for us, but not always - e.g. we don't create
      // them for events we paginated in.
      return true;
    }
    if (event.isThreadRoot && this.userRepliedInThread(eventId, userId)) {
      // The user replied in the thread rooted at this event, and you
      // can't reply to a thread without seeing its root. We have to check
      // this separately because their reply is in the thread's timeline
      // whereas the root is in the main one, so no receipt of theirs can
      // cover the root.
      return true;
    }

    // Neither of the receipts were after the event, so it's unread.
    return false;
  }

  /**
   * @returns true if the timeline for this thread ID can be found, and the
   *          supplied user sent an event in it that is the same as, or after,
   *          the event with the supplied ID.
   */
  userSentEventAfterOrSame(threadId, userId, eventId) {
    var _this$room$getThread;
    const timeline = threadId === (/* inlined export .MAIN_ROOM_TIMELINE */"main") ? this.room.getLiveTimeline().getEvents() : (_this$room$getThread = this.room.getThread(threadId)) === null || _this$room$getThread === void 0 ? void 0 : _this$room$getThread.timeline;
    const latestEventId = latestEventIdSentByUser(timeline, userId);
    return !!latestEventId && isAfterOrSame(latestEventId, eventId, this.room);
  }

  /**
   * @returns true if the thread rooted at the event with the supplied ID can
   *          be found, and the supplied user sent a reply in it.
   */
  userRepliedInThread(rootEventId, userId) {
    var _this$room$getThread2;
    // The root is part of the thread's timeline, but it is not a reply to
    // the thread, so leave it out.
    const replies = (_this$room$getThread2 = this.room.getThread(rootEventId)) === null || _this$room$getThread2 === void 0 ? void 0 : _this$room$getThread2.timeline.filter(event => event.getId() !== rootEventId);
    return !!latestEventIdSentByUser(replies, userId);
  }
}

/**
 * Find the last event in the supplied timeline that was sent by this user.
 *
 * Events that are still on their way to the server (or failed to get there) are
 * ignored: they have no place in the timeline yet, and a failed send tells us
 * nothing about what the user has seen.
 *
 * @returns the ID of the found event, or undefined if there is no such event.
 */
function latestEventIdSentByUser(timeline, userId) {
  if (!timeline) return undefined;
  for (let index = timeline.length - 1; index >= 0; index--) {
    const event = timeline[index];
    if (event.getSender() === userId && !event.status) {
      return event.getId();
    }
  }
  return undefined;
}

// --- implementation details ---

/**
 * The information "inside" a receipt once it has been stored inside
 * RoomReceipts - what eventId it refers to, its type, and its ts.
 *
 * Does not contain userId or threadId since these are stored as keys of the
 * maps in RoomReceipts.
 */
class ReceiptInfo {
  constructor(eventId, receiptType, ts) {
    this.eventId = eventId;
    this.receiptType = receiptType;
    this.ts = ts;
  }
}

/**
 * Everything we know about a receipt that is "dangling" because we can't find
 * the event to which it refers.
 */
class DanglingReceipt {
  constructor(eventId, receiptType, userId, receipt, synthetic) {
    this.eventId = eventId;
    this.receiptType = receiptType;
    this.userId = userId;
    this.receipt = receipt;
    this.synthetic = synthetic;
  }
}
class UserReceipts {
  constructor(room) {
    ;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "room", void 0);
    /**
     * The real receipt for this user.
     */
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "real", void 0);
    /**
     * The synthetic receipt for this user. If this is defined, it is later than real.
     */
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "synthetic", void 0);
    this.room = room;
    this.real = undefined;
    this.synthetic = undefined;
  }
  set(synthetic, receiptInfo) {
    if (synthetic) {
      this.synthetic = receiptInfo;
    } else {
      this.real = receiptInfo;
    }

    // Preserve the invariant: synthetic is only defined if it's later than real
    if (this.synthetic && this.real) {
      if (isAfterOrSame(this.real.eventId, this.synthetic.eventId, this.room)) {
        this.synthetic = undefined;
      }
    }
  }

  /**
   * Return the latest receipt we have - synthetic if we have one (and it's
   * later), otherwise real.
   */
  get() {
    var _this$synthetic;
    // Relies on the invariant that synthetic is only defined if it's later than real.
    return (_this$synthetic = this.synthetic) !== null && _this$synthetic !== void 0 ? _this$synthetic : this.real;
  }

  /**
   * Return the latest receipt we have of the specified type (synthetic or not).
   */
  getByType(synthetic) {
    return synthetic ? this.synthetic : this.real;
  }
}

/**
 * The latest receipt info we have, either for a single thread, or all the
 * unthreaded receipts for a room.
 *
 * userId: ReceiptInfo
 */
class ReceiptsByUser {
  constructor(room) {
    ;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "room", void 0);
    /** map of userId: UserReceipts */
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "data", void 0);
    this.room = room;
    this.data = new Map();
  }

  /**
   * Add the supplied receipt to our structure, if it is not earlier than the
   * one we already hold for this user.
   */
  set(eventId, receiptType, userId, ts, synthetic) {
    const userReceipts = getOrCreate(this.data, userId, () => new UserReceipts(this.room));
    const existingReceipt = userReceipts.getByType(synthetic);
    if (existingReceipt && isAfter(existingReceipt.eventId, eventId, this.room)) {
      // The new receipt is before the existing one - don't store it.
      return;
    }

    // Possibilities:
    //
    // 1. there was no existing receipt, or
    // 2. the existing receipt was before this one, or
    // 3. we were unable to compare the receipts.
    //
    // In the case of 3 it's difficult to decide what to do, so the
    // most-recently-received receipt wins.
    //
    // Case 3 can only happen if the events for these receipts have
    // disappeared, which is quite unlikely since the new one has just been
    // checked, and the old one was checked before it was inserted here.
    //
    // We go ahead and store this receipt (replacing the other if it exists)
    userReceipts.set(synthetic, new ReceiptInfo(eventId, receiptType, ts));
  }

  /**
   * Find the latest receipt we have for this user. (Note - there is only one
   * receipt per user, because we are already inside a specific thread or
   * unthreaded list.)
   *
   * If there is a later synthetic receipt for this user, return that.
   * Otherwise, return the real receipt.
   *
   * @returns the found receipt info, or undefined if we have no receipt for this user.
   */
  get(userId) {
    var _this$data$get;
    return (_this$data$get = this.data.get(userId)) === null || _this$data$get === void 0 ? void 0 : _this$data$get.get();
  }
}

/**
 * The latest threaded receipts we have for a room.
 */
class ThreadedReceipts {
  constructor(room) {
    ;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "room", void 0);
    /** map of threadId: ReceiptsByUser */
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "data", void 0);
    this.room = room;
    this.data = new Map();
  }

  /**
   * Add the supplied receipt to our structure, if it is not earlier than one
   * we already hold for this user in this thread.
   */
  set(threadId, eventId, receiptType, userId, ts, synthetic) {
    const receiptsByUser = getOrCreate(this.data, threadId, () => new ReceiptsByUser(this.room));
    receiptsByUser.set(eventId, receiptType, userId, ts, synthetic);
  }

  /**
   * Find the latest threaded receipt for the supplied user in the supplied thread.
   *
   * @returns the found receipt info or undefined if we don't have one.
   */
  get(threadId, userId) {
    var _this$data$get2;
    return (_this$data$get2 = this.data.get(threadId)) === null || _this$data$get2 === void 0 ? void 0 : _this$data$get2.get(userId);
  }
}

/**
 * All the receipts that we have received but can't process because we can't
 * find the event they refer to.
 *
 * We hold on to them so we can process them if their event arrives later.
 */
class DanglingReceipts {
  constructor() {
    /**
     * eventId: DanglingReceipt[]
     */
    ;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "data", new Map());
  }
  /**
   * Remember the supplied dangling receipt.
   */
  add(danglingReceipt) {
    const danglingReceipts = getOrCreate(this.data, danglingReceipt.eventId, () => []);
    danglingReceipts.push(danglingReceipt);
  }

  /**
   * Remove and return the dangling receipts for the given event ID.
   * @param eventId - the event ID to look for
   * @returns the found dangling receipts, or undefined if we don't have one.
   */
  remove(eventId) {
    const danglingReceipts = this.data.get(eventId);
    this.data.delete(eventId);
    return danglingReceipts;
  }
}
function getOrCreate(m, key, createFn) {
  const found = m.get(key);
  if (found) {
    return found;
  } else {
    const created = createFn();
    m.set(key, created);
    return created;
  }
}

/**
 * Is left after right (or the same)?
 *
 * Only returns true if both events can be found, and left is after or the same
 * as right.
 *
 * @returns left \>= right
 */
function isAfterOrSame(leftEventId, rightEventId, room) {
  const comparison = room.compareEventOrdering(leftEventId, rightEventId);
  return comparison !== null && comparison >= 0;
}

/**
 * Is left strictly after right?
 *
 * Only returns true if both events can be found, and left is strictly after right.
 *
 * @returns left \> right
 */
function isAfter(leftEventId, rightEventId, room) {
  const comparison = room.compareEventOrdering(leftEventId, rightEventId);
  return comparison !== null && comparison > 0;
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/room-retention.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ RoomRetentionPolicy)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _models_event_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/event.ts");
/* harmony import */ var _room_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/room.ts");
/* harmony import */ var _room_state_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/room-state.ts");
/* harmony import */ var _logger_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts");
/* harmony import */ var _types_event_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/event.ts");
/* harmony import */ var _types_retention_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/retention.ts");

/*
Copyright 2026 Element Creations Ltd.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/








/**
 * Applies https://github.com/matrix-org/matrix-spec-proposals/pull/1763 by checking the current
 * state of the room and applying the *latest* retention policy to all preceeding events.
 * Currently does not:
 *   - Apply global server policies (requires Synapse work)
 *   - React at all to `min_retention` configs.
 *   - Loop
 */
class RoomRetentionPolicy {
  constructor(room, retentionService, store) {
    // minRetention is not implemented.
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "maxRetention", null);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "retentionTimeout", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "logger", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "handleRetentionUpdate", async () => {
      // First store if we currently have a retention period.
      const hadRetentionPeriod = this.maxRetention !== null;
      try {
        await this.recalculateRetention(this.room.currentState);
      } catch (err) {
        this.logger.warn("Failed to recalculate retention policy", err);
        return;
      }

      // Bind/unbind the Timeline event handler based on whether we should be running retention.
      if (hadRetentionPeriod !== (this.maxRetention !== null)) {
        this.logger.info("retention recalculated to be", this.maxRetention);
        // We've changed
        if (this.maxRetention) {
          this.room.on(_room_ts__WEBPACK_IMPORTED_MODULE_2__/* .RoomEvent */ .u9.Timeline, this.timelineUpdated);
        } else {
          this.room.off(_room_ts__WEBPACK_IMPORTED_MODULE_2__/* .RoomEvent */ .u9.Timeline, this.timelineUpdated);
        }
      }
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "recalculateRetention", async roomState => {
      var _serverPolicy$policie, _unstableEvent$getCon, _ref, _serverPolicy$policie2, _serverPolicy$limits2;
      const unstableEvent = roomState.getStateEvents(_types_retention_ts__WEBPACK_IMPORTED_MODULE_6__/* .ROOM_RETENTION_TYPE */ .S.name).find(e => e.getStateKey() === "");
      const stableEvent = roomState.getStateEvents(_types_retention_ts__WEBPACK_IMPORTED_MODULE_6__/* .ROOM_RETENTION_TYPE */ .S.altName).find(e => e.getStateKey() === "");
      const serverPolicy = this.retentionService.getCached();
      const serverRoomPolicy = serverPolicy === null || serverPolicy === void 0 || (_serverPolicy$policie = serverPolicy.policies) === null || _serverPolicy$policie === void 0 ? void 0 : _serverPolicy$policie[this.room.roomId];
      const roomStatePolicy = (_unstableEvent$getCon = unstableEvent === null || unstableEvent === void 0 ? void 0 : unstableEvent.getContent()) !== null && _unstableEvent$getCon !== void 0 ? _unstableEvent$getCon : stableEvent === null || stableEvent === void 0 ? void 0 : stableEvent.getContent();
      const content = // * if the homeserver defines a specific retention policy for this room, then use this policy as the effective retention policy of the room.
      (_ref = serverRoomPolicy !== null && serverRoomPolicy !== void 0 ? serverRoomPolicy :
      // * otherwise, if the state of the room includes a `m.room.retention` event with an empty state key:
      roomStatePolicy) !== null && _ref !== void 0 ? _ref : // * otherwise, if the state of the room does not include a m.room.retention event with an empty state key:
      serverPolicy === null || serverPolicy === void 0 || (_serverPolicy$policie2 = serverPolicy.policies) === null || _serverPolicy$policie2 === void 0 ? void 0 : _serverPolicy$policie2["*"];
      if (!content) {
        // * otherwise, don't apply a retention policy in this room.
        this.maxRetention = null;
        return;
      }
      const validatePolicy = !serverRoomPolicy && roomStatePolicy;

      // Parse it
      let {
        max_lifetime: maxLifetime
      } = content;
      if (!maxLifetime && validatePolicy) {
        var _serverPolicy$limits;
        // if there is no value specified in the room's state, use the limit's min value for the effective retention policy of the room (which can be null or absent).
        maxLifetime = serverPolicy === null || serverPolicy === void 0 || (_serverPolicy$limits = serverPolicy.limits) === null || _serverPolicy$limits === void 0 || (_serverPolicy$limits = _serverPolicy$limits.max_lifetime) === null || _serverPolicy$limits === void 0 ? void 0 : _serverPolicy$limits.min;
        if (!maxLifetime) {
          this.maxRetention = null;
          return;
        }
      }
      if (typeof maxLifetime !== "number") {
        throw Error(`max_lifetime must be a number, got "${maxLifetime}"`);
      }
      if (maxLifetime < 0 || !Number.isInteger(maxLifetime)) {
        throw Error(`max_lifetime must be >= 0, got ${maxLifetime}`);
      }
      this.maxRetention = maxLifetime;
      if (validatePolicy && serverPolicy !== null && serverPolicy !== void 0 && (_serverPolicy$limits2 = serverPolicy.limits) !== null && _serverPolicy$limits2 !== void 0 && _serverPolicy$limits2.max_lifetime) {
        var _serverPolicy$limits$, _serverPolicy$limits$2;
        // We're using room state so we need to validate this policy matches the server.
        /**
        if the value specified in the room's state complies with the limit, use this value for the effective retention policy of the room.
        if the value specified in the room's state is lower than the limit's min value, use the min value for the effective retention policy of the room.
        if the value specified in the room's state is greater than the limit's max value, use the max value for the effective retention policy of the room.
        */
        this.maxRetention = Math.max(this.maxRetention, (_serverPolicy$limits$ = serverPolicy.limits.max_lifetime.min) !== null && _serverPolicy$limits$ !== void 0 ? _serverPolicy$limits$ : 0);
        this.maxRetention = Math.min(this.maxRetention, (_serverPolicy$limits$2 = serverPolicy.limits.max_lifetime.max) !== null && _serverPolicy$limits$2 !== void 0 ? _serverPolicy$limits$2 : Number.MAX_SAFE_INTEGER);
      }
      this.processTimeline();
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "timelineUpdated", () => {
      this.logger.info("timelineUpdated");
      this.scheduleTimelineCheck(200);
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "scheduleTimelineCheck", nextTs => {
      if (this.retentionTimeout) {
        clearTimeout(this.retentionTimeout);
      }
      this.retentionTimeout = setTimeout(() => {
        this.processTimeline();
        this.retentionTimeout = undefined;
      }, nextTs);
    });
    this.room = room;
    this.retentionService = retentionService;
    this.store = store;
    this.logger = _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.getChild(`RetentionPolicy ${room.roomId}`);

    // Recalculate on room state update.
    room.on(_room_state_ts__WEBPACK_IMPORTED_MODULE_3__/* .RoomStateEvent */ .f.Events, event => {
      if (event.getStateKey() !== "" || event.getType() !== "org.matrix.msc1763.retention" && event.getType() !== "m.room.retention") {
        return;
      }
      void this.handleRetentionUpdate();
    });

    // Recalculate our retention whenever the global policy changes.
    this.retentionService.on("update", () => {
      this.logger.info("Got global retention policy update!");
      void this.handleRetentionUpdate();
    });
    // Do an initial check on construction.
    void this.handleRetentionUpdate();

    // Only bind RoomEvent.Timeline once we know we have a retention policy.
  }
  shouldEventBeRetained(ev) {
    if (!this.maxRetention) {
      return true;
    }
    const expireBefore = Date.now() - this.maxRetention;
    return ev.getTs() > expireBefore;
  }
  processTimeline() {
    if (!this.maxRetention) {
      return; // No policy, skip.
    }
    this.logger.info(`Running processTimeline`);
    const expireBefore = Date.now() - this.maxRetention;
    const events = this.room.getLiveTimeline().getEvents().filter(ev => ev.getStateKey() === undefined && !ev.isRedacted() && ev.getType() !== "m.room.redaction");
    const expiredEvents = events.filter(ev => ev.getTs() < expireBefore);
    const [earliestExpiringEvent] = events.filter(ev => ev.getTs() >= expireBefore).sort((a, b) => a.getTs() - b.getTs());
    if (earliestExpiringEvent) {
      const nextTs = earliestExpiringEvent.getTs() + this.maxRetention - Date.now();
      this.logger.info(`Next expiry scheduled for ${nextTs}`);
      this.scheduleTimelineCheck(nextTs);
    }
    if (expiredEvents.length === 0) {
      this.logger.info("Found no expired events");
      return;
    }
    this.logger.info(`Found ${expiredEvents.length} expired events`);
    for (const event of expiredEvents) {
      this.room.tryApplyRedaction(new _models_event_ts__WEBPACK_IMPORTED_MODULE_1__/* .MatrixEvent */ .kl({
        type: _types_event_ts__WEBPACK_IMPORTED_MODULE_5__/* .EventType */ .Bx.RoomRedaction,
        sender: event.getSender(),
        event_id: "$synthetic_redaction",
        room_id: this.room.roomId,
        redacts: event.getId(),
        content: {
          reason: "Retention policy"
        },
        origin_server_ts: Date.now(),
        unsigned: {}
      }));
    }
    void this.store.removeEventsFromRoom(this.room.roomId, expiredEvents.map(e => e.getId())).catch(ex => {
      this.logger.warn(`Failed to remove events from store`, ex);
    });
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/room-summary.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ RoomSummary)
/* harmony export */ });
/*
Copyright 2015 - 2021 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * A stripped m.room.member event which contains the key renderable fields from the event,
 * sent only in simplified sliding sync (not `/v3/sync`).
 * This is very similar to MSC4186Hero from sliding-sync.ts but an internal format with
 * camelCase rather than underscores.
 */

/**
 * High level summary information for a room, as returned by `/v3/sync`.
 */

/**
 * Construct a new Room Summary. A summary can be used for display on a recent
 * list, without having to load the entire room list into memory.
 * @param roomId - Required. The ID of this room.
 * @param info - Optional. The summary info. Additional keys are supported.
 */
class RoomSummary {
  constructor(roomId, info) {
    this.roomId = roomId;
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/oauth/discover.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ isValidAuthMetadata)
/* harmony export */ });
/* harmony import */ var _types_type_guards_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/type-guards.ts");
/* harmony import */ var _index_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/oauth/index.ts");
/*
Copyright 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




/**
 * Metadata from OAuth 2.0 client authentication API as per
 * https://spec.matrix.org/v1.18/client-server-api/#get_matrixclientv1auth_metadata
 * With validated properties required in type
 */

/**
 * Validates OAuth 2.0 auth metadata as defined by
 * https://spec.matrix.org/v1.18/client-server-api/#get_matrixclientv1auth_metadata
 * @param authMetadata - json object
 * @returns boolean of whether the input is valid
 */
const isValidAuthMetadata = authMetadata => {
  return (0,_types_type_guards_ts__WEBPACK_IMPORTED_MODULE_0__/* .isRecord */ .u4)(authMetadata) && (0,_types_type_guards_ts__WEBPACK_IMPORTED_MODULE_0__/* .hasRequiredStringProperty */ .W3)(authMetadata, "issuer") && (0,_types_type_guards_ts__WEBPACK_IMPORTED_MODULE_0__/* .hasRequiredStringProperty */ .W3)(authMetadata, "authorization_endpoint") && (0,_types_type_guards_ts__WEBPACK_IMPORTED_MODULE_0__/* .hasRequiredStringProperty */ .W3)(authMetadata, "token_endpoint") && (0,_types_type_guards_ts__WEBPACK_IMPORTED_MODULE_0__/* .hasRequiredStringProperty */ .W3)(authMetadata, "revocation_endpoint") && (0,_types_type_guards_ts__WEBPACK_IMPORTED_MODULE_0__/* .hasRequiredStringProperty */ .W3)(authMetadata, "registration_endpoint") && (0,_types_type_guards_ts__WEBPACK_IMPORTED_MODULE_0__/* .hasOptionalStringProperty */ .Xu)(authMetadata, "account_management_uri") && (0,_types_type_guards_ts__WEBPACK_IMPORTED_MODULE_0__/* .hasOptionalStringProperty */ .Xu)(authMetadata, "device_authorization_endpoint") && (0,_types_type_guards_ts__WEBPACK_IMPORTED_MODULE_0__/* .optionalStringArrayProperty */ .qY)(authMetadata, "account_management_actions_supported") && (0,_types_type_guards_ts__WEBPACK_IMPORTED_MODULE_0__/* .optionalStringArrayProperty */ .qY)(authMetadata, "prompt_values_supported") && (0,_types_type_guards_ts__WEBPACK_IMPORTED_MODULE_0__/* .requiredArrayValue */ .Ch)(authMetadata, "response_modes_supported", "query") && (0,_types_type_guards_ts__WEBPACK_IMPORTED_MODULE_0__/* .requiredArrayValue */ .Ch)(authMetadata, "response_modes_supported", "fragment") && (0,_types_type_guards_ts__WEBPACK_IMPORTED_MODULE_0__/* .requiredArrayValue */ .Ch)(authMetadata, "response_types_supported", "code") && (0,_types_type_guards_ts__WEBPACK_IMPORTED_MODULE_0__/* .requiredArrayValue */ .Ch)(authMetadata, "grant_types_supported", _index_ts__WEBPACK_IMPORTED_MODULE_1__/* .OAuthGrantType */ .gu.AuthorizationCode) && (0,_types_type_guards_ts__WEBPACK_IMPORTED_MODULE_0__/* .requiredArrayValue */ .Ch)(authMetadata, "grant_types_supported", _index_ts__WEBPACK_IMPORTED_MODULE_1__/* .OAuthGrantType */ .gu.RefreshToken) && (0,_types_type_guards_ts__WEBPACK_IMPORTED_MODULE_0__/* .requiredArrayValue */ .Ch)(authMetadata, "code_challenge_methods_supported", "S256");
};

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/oauth/error.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dz: () => (/* binding */ isOAuth2ErrorResponse),
/* harmony export */   gz: () => (/* binding */ OAuth2Error),
/* harmony export */   w1: () => (/* binding */ OAuth2HTTPError)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types_type_guards_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/type-guards.ts");
/* harmony import */ var _http_api_errors_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/errors.ts");

/*
Copyright 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




/**
 * Errors expected to be encountered during OAuth2 discovery, client registration, and authentication.
 * Not intended to be displayed directly to the user.
 */
let OAuth2Error = /*#__PURE__*/function (OAuth2Error) {
  OAuth2Error["General"] = "Something went wrong with OAuth2 discovery";
  OAuth2Error["OpSupport"] = "Configured OAuth2 OP does not support required functions";
  OAuth2Error["DynamicRegistrationNotSupported"] = "Dynamic registration not supported";
  OAuth2Error["DynamicRegistrationFailed"] = "Dynamic registration failed";
  OAuth2Error["DynamicRegistrationInvalid"] = "Dynamic registration invalid response";
  OAuth2Error["CodeExchangeFailed"] = "Failed to exchange code for token";
  OAuth2Error["InvalidBearerTokenResponse"] = "Invalid bearer token response";
  OAuth2Error["InvalidDeviceAuthorizationResponse"] = "Invalid device authorization response";
  OAuth2Error["MissingOrInvalidStoredState"] = "State required to finish logging in is not found in storage.";
  OAuth2Error["RefreshTokenFailed"] = "Failed to refresh token";
  OAuth2Error["RevokeTokenFailed"] = "Failed to revoke token";
  OAuth2Error["DeviceAuthorizationGrantFailed"] = "Failed to perform device authorization grant";
  return OAuth2Error;
}({});

/**
 * An error response from an OAuth 2.0 endpoint,
 * as specified in https://datatracker.ietf.org/doc/html/rfc6749#section-5.2
 */

/**
 * Check whether the given (JSON-parsed) response body is an OAuth 2.0 error response
 * as specified in https://datatracker.ietf.org/doc/html/rfc6749#section-5.2
 * @param response - the parsed response body to check
 * @returns whether the response is a valid {@link OAuth2ErrorResponse}
 */
function isOAuth2ErrorResponse(response) {
  return (0,_types_type_guards_ts__WEBPACK_IMPORTED_MODULE_1__/* .isRecord */ .u4)(response) && (0,_types_type_guards_ts__WEBPACK_IMPORTED_MODULE_1__/* .hasRequiredStringProperty */ .W3)(response, "error") && (0,_types_type_guards_ts__WEBPACK_IMPORTED_MODULE_1__/* .hasOptionalStringProperty */ .Xu)(response, "error_description") && (0,_types_type_guards_ts__WEBPACK_IMPORTED_MODULE_1__/* .hasOptionalStringProperty */ .Xu)(response, "error_uri");
}

/**
 * An error thrown when a request to an OAuth 2.0 endpoint fails with a body matching the error
 * response format specified in [RFC 6749 section 5.2](https://datatracker.ietf.org/doc/html/rfc6749#section-5.2).
 */
class OAuth2HTTPError extends _http_api_errors_ts__WEBPACK_IMPORTED_MODULE_2__/* .HTTPError */ .Hl {
  constructor(msg, httpStatus, httpHeaders, {
    error,
    error_description,
    error_uri
  }) {
    super(msg, httpStatus, httpHeaders);
    /**
     * RFC 6749 section 5.2 error code, e.g. `invalid_grant`
     *
     * IANA matains a registry of valid values at
     * https://www.iana.org/assignments/oauth-parameters/oauth-parameters.xhtml#extensions-error
     */
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "error", void 0);
    /**
     * RFC 6749 section 5.2 human-readable ASCII text providing additional information about the error.
     * This field is optional and may be omitted by the endpoint.
     */
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "error_description", void 0);
    /**
     * RFC 6749 section 5.2 URI identifying a human-readable web page with information about the error.
     * This field is optional and may be omitted by the endpoint.
     */
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "error_uri", void 0);
    this.error = error;
    this.error_description = error_description;
    this.error_uri = error_uri;
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/oauth/fetch.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ fetchWithLogging)
/* harmony export */ });
/* harmony import */ var _http_api_logging_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/logging.ts");
/* harmony import */ var _http_api_method_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/method.ts");
/*
Copyright 2026 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



/**
 * Perform a `fetch` request, logging the request and response in the same manner as
 * `FetchHttpApi` does for Client-Server API requests.
 *
 * Neither the request nor the response body is logged, as they routinely contain credentials.
 * Query parameter values are redacted for the same reason.
 *
 * @internal
 * @param logger - the logger to write the request and response lines to.
 * @param resource - the URL to request.
 * @param options - the options to pass to `fetch`.
 * @param fetchFn - the `fetch` implementation to use, defaults to the global `fetch`.
 * @returns the `Response`, whatever its status code.
 * @throws rethrows whatever `fetch` threw, having logged it.
 */
async function fetchWithLogging(logger, resource, options = {}, fetchFn = globalThis.fetch) {
  var _options$method;
  const method = (_options$method = options.method) !== null && _options$method !== void 0 ? _options$method : _http_api_method_ts__WEBPACK_IMPORTED_MODULE_1__/* .Method */ .I.Get;
  const urlForLogs = (0,_http_api_logging_ts__WEBPACK_IMPORTED_MODULE_0__/* .sanitizeUrlForLogs */ .N)(resource);
  logger.debug(`OAuth2: --> ${method} ${urlForLogs}`);
  const start = Date.now();
  try {
    const res = await fetchFn(resource, options);
    logger.debug(`OAuth2: <-- ${method} ${urlForLogs} [${Date.now() - start}ms ${res.status}]`);
    return res;
  } catch (e) {
    logger.debug(`OAuth2: <-- ${method} ${urlForLogs} [${Date.now() - start}ms ${e}]`);
    throw e;
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/oauth/register.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _d: () => (/* binding */ urlHasCommonBase),
/* harmony export */   fr: () => (/* binding */ validateRegistrationResponse),
/* harmony export */   gu: () => (/* binding */ OAuthGrantType)
/* harmony export */ });
/* harmony import */ var _types_type_guards_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/type-guards.ts");
/*
Copyright 2023-2026 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



/**
 * Request body for dynamic registration as defined by https://spec.matrix.org/v1.18/client-server-api/#client-registration
 */

/**
 * The OAuth 2.0 grant types that are defined for Matrix in https://spec.matrix.org/v1.17/client-server-api/#grant-types
 */
let OAuthGrantType = /*#__PURE__*/function (OAuthGrantType) {
  /**
   * As per RFC 6749 section 4.1, the authorization code grant lets the client obtain an access token through a browser redirect.
   *
   * See https://spec.matrix.org/v1.18/client-server-api/#authorization-code-grant
   */
  OAuthGrantType["AuthorizationCode"] = "authorization_code";
  /**
   * As per RFC 6749 section 6, the refresh token grant lets the client exchange a refresh token for an access token.
   *
   * https://spec.matrix.org/v1.18/client-server-api/#refresh-token-grant
   */
  OAuthGrantType["RefreshToken"] = "refresh_token";
  /**
   * As per RFC 8628, the device authorization grant lets clients on devices with limited input capabilities obtain
   * an access token by having the user complete authorization on a separate device with a web browser.
   *
   * See https://spec.matrix.org/v1.18/client-server-api/#device-authorization-grant
   */
  OAuthGrantType["DeviceAuthorization"] = "urn:ietf:params:oauth:grant-type:device_code";
  return OAuthGrantType;
}({});

/**
 * Check that URIs have a common base,
 * as per https://spec.matrix.org/v1.18/client-server-api/#redirect-uri-validation
 */
function urlHasCommonBase(base, urlStr) {
  if (!urlStr) return false;
  const url = new URL(urlStr);
  if (url.protocol !== base.protocol) return false;
  if (url.hostname !== base.hostname && !url.hostname.endsWith(`.${base.hostname}`)) return false;
  return true;
}

/**
 * Response from dynamic registration
 */

/**
 * Validate the given response matches the format expected for a {@link RegistrationResponse}
 * @param response - the response to validate
 * @throws if the response does not match the expected format
 */
function validateRegistrationResponse(response) {
  return (0,_types_type_guards_ts__WEBPACK_IMPORTED_MODULE_0__/* .isRecord */ .u4)(response) && (0,_types_type_guards_ts__WEBPACK_IMPORTED_MODULE_0__/* .hasRequiredStringProperty */ .W3)(response, "client_id");
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/pollingCachedValue.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ PollingCachedValue)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _http_api_index_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/index.ts");
/* harmony import */ var _utils_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/utils.ts");

/*
Copyright 2026 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




/**
 * How to fetch and cache a given value, as passed to {@link PollingCachedValue}.
 */

/**
 * Defines a generic mechanism to fetch and cache a value, refreshing it periodically.
 */
class PollingCachedValue {
  /**
   * Build a generic mechanism allowing to fetch and cache a given value.
   * @param opts - Describes what to fetch and how to cache it, see {@link PollingCachedValueOptions}.
   */
  constructor(opts) {
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "cached", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "fetchPromise", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "ttlTimeoutHandle", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "isStopped", false);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "ttlMillis", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "logger", void 0);
    this.opts = opts;
    this.ttlMillis = opts.ttlMillis;
    this.logger = opts.logger.getChild(`PollingCachedValue<${opts.name}>`);
  }

  /**
   * Gets the cached value if any.
   */
  get() {
    return this.cached;
  }

  /**
   * Ensures that the value was fetched once before getting the actual cached value.
   */
  async wait() {
    await this.doFetch();
    return this.cached;
  }

  /**
   * Call this as early as possible and when the value can already be fetched.
   * @param ttlMillis - The time-to-live before the value gets refreshed, overriding the one
   *     given at construction. If omitted the configured default is kept.
   */
  start(ttlMillis) {
    if (ttlMillis !== undefined) {
      this.ttlMillis = ttlMillis;
    }
    this.isStopped = false;
    // Request a fetch as soon as possible
    this.doFetch().catch(err => {
      this.logger.debug("Cached value fetch on start did fail", err);
    });
  }
  /**
   * Call when the client is stopped, or when the cached value is no longer needed.
   */
  stop() {
    if (this.ttlTimeoutHandle) {
      clearTimeout(this.ttlTimeoutHandle);
    }
    this.isStopped = true;
  }

  /**
   * Force to refresh.
   * @throws
   */
  async refresh() {
    await this.doFetch(true);
    return this.cached;
  }

  /**
   * Internal fetch method
   * @param force - if set to true will force a fetch of the value even if a fetch is already in progress.
   * @private
   */
  async doFetch(force = false) {
    if (this.fetchPromise && !force) {
      await this.fetchPromise;
      return;
    }
    this.fetchPromise = this.fetchWithRetryPolicy();
    try {
      var _this$opts$onValueCac, _this$opts;
      this.cached = await this.fetchPromise;
      if (this.isStopped) {
        this.fetchPromise = undefined;
        return;
      }
      this.logger.trace(`New cachedValue: ${this.cached}`);
      (_this$opts$onValueCac = (_this$opts = this.opts).onValueCached) === null || _this$opts$onValueCac === void 0 || _this$opts$onValueCac.call(_this$opts, this.cached);
      // The value is cached only for a given time.
      if (this.ttlMillis) {
        this.ttlTimeoutHandle = setTimeout(() => {
          this.fetchPromise = undefined;
          void this.doFetch();
        }, this.ttlMillis);
      }
    } catch (error) {
      var _this$opts$shouldCach, _this$opts2;
      this.logger.debug(`Error fetching server value for ${error}`);
      if (this.isStopped) {
        this.fetchPromise = undefined;
        return;
      }
      if (!((_this$opts$shouldCach = (_this$opts2 = this.opts).shouldCacheError) !== null && _this$opts$shouldCach !== void 0 && _this$opts$shouldCach.call(_this$opts2, error))) {
        // clear the promise, i.e next tentative will retry to fetch
        this.fetchPromise = undefined;
      }
      throw error;
    }
  }

  /**
   * Gracefully handle transient error retries, respect retry_after_millis for rate limits.
   * @private
   */
  async fetchWithRetryPolicy() {
    let currentRetryCount = 0;
    while (true) {
      try {
        return await this.opts.fetch();
      } catch (e) {
        this.logger.trace(`Failed to fetch retry: ${e}`);
        if (this.isStopped) {
          throw e;
        }
        currentRetryCount++;
        const backoff = (0,_http_api_index_ts__WEBPACK_IMPORTED_MODULE_1__/* .calculateRetryBackoff */ .fZ)(e, currentRetryCount, true);
        if (backoff < 0) {
          // Max number of retries reached, or error is not retryable. rethrow the error
          throw e;
        }
        // wait for the specified time and then retry the request
        await (0,_utils_ts__WEBPACK_IMPORTED_MODULE_2__/* .sleep */ .yy)(backoff);
      }
    }
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/pushprocessor.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ PushProcessor)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/utils.ts");
/* harmony import */ var _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/PushRules.ts");
/* harmony import */ var _types_event_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/event.ts");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/*
Copyright 2015 - 2021 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

;


const RULEKINDS_IN_ORDER = [_types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .PushRuleKind */ .Ji.Override, _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .PushRuleKind */ .Ji.ContentSpecific, _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .PushRuleKind */ .Ji.RoomSpecific, _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .PushRuleKind */ .Ji.SenderSpecific, _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .PushRuleKind */ .Ji.Underride];

// The default override rules to apply to the push rules that arrive from the server.
// We do this for two reasons:
//   1. Synapse is unlikely to send us the push rule in an incremental sync - see
//      https://github.com/matrix-org/synapse/pull/4867#issuecomment-481446072 for
//      more details.
//   2. We often want to start using push rules ahead of the server supporting them,
//      and so we can put them here.
const DEFAULT_OVERRIDE_RULES = {
  ".m.rule.is_room_mention": {
    // Matrix v1.7
    rule_id: ".m.rule.is_room_mention",
    default: true,
    enabled: true,
    conditions: [{
      kind: _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .ConditionKind */ .wp.EventPropertyIs,
      key: "content.m\\.mentions.room",
      value: true
    }, {
      kind: _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .ConditionKind */ .wp.SenderNotificationPermission,
      key: "room"
    }],
    actions: [_types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .PushRuleActionName */ .YU.Notify, {
      set_tweak: _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .TweakName */ .QN.Highlight
    }]
  },
  ".m.rule.reaction": {
    // For homeservers which don't support MSC2153 yet
    rule_id: ".m.rule.reaction",
    default: true,
    enabled: true,
    conditions: [{
      kind: _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .ConditionKind */ .wp.EventMatch,
      key: "type",
      pattern: "m.reaction"
    }],
    actions: [_types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .PushRuleActionName */ .YU.DontNotify]
  },
  ".org.matrix.msc3786.rule.room.server_acl": {
    // For homeservers which don't support MSC3786 yet
    rule_id: ".org.matrix.msc3786.rule.room.server_acl",
    default: true,
    enabled: true,
    conditions: [{
      kind: _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .ConditionKind */ .wp.EventMatch,
      key: "type",
      pattern: _types_event_ts__WEBPACK_IMPORTED_MODULE_3__/* .EventType */ .Bx.RoomServerAcl
    }, {
      kind: _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .ConditionKind */ .wp.EventMatch,
      key: "state_key",
      pattern: ""
    }],
    actions: []
  }
};

// A special rule id for `EXPECTED_DEFAULT_OVERRIDE_RULE_IDS` and friends which denotes where user-defined rules live in the order.
const UserDefinedRules = Symbol("UserDefinedRules");
const EXPECTED_DEFAULT_OVERRIDE_RULE_IDS = [_types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .RuleId */ .kq.Master, UserDefinedRules, _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .RuleId */ .kq.SuppressNotices, _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .RuleId */ .kq.InviteToSelf, _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .RuleId */ .kq.MemberEvent, _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .RuleId */ .kq.IsUserMention, _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .RuleId */ .kq.ContainsDisplayName, _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .RuleId */ .kq.IsRoomMention, _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .RuleId */ .kq.AtRoomNotification, _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .RuleId */ .kq.Tombstone, ".m.rule.reaction", ".m.rule.room.server_acl", ".org.matrix.msc3786.rule.room.server_acl", ".m.rule.suppress_edits"];
const DEFAULT_UNDERRIDE_RULES = {
  ".org.matrix.msc3914.rule.room.call": {
    // For homeservers which don't support MSC3914 yet
    rule_id: ".org.matrix.msc3914.rule.room.call",
    default: true,
    enabled: true,
    conditions: [{
      kind: _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .ConditionKind */ .wp.EventMatch,
      key: "type",
      pattern: "org.matrix.msc3401.call"
    }, {
      kind: _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .ConditionKind */ .wp.CallStarted
    }],
    actions: [_types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .PushRuleActionName */ .YU.Notify, {
      set_tweak: _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .TweakName */ .QN.Sound,
      value: "default"
    }]
  }
};
const EXPECTED_DEFAULT_UNDERRIDE_RULE_IDS = [UserDefinedRules, _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .RuleId */ .kq.IncomingCall, ".org.matrix.msc3914.rule.room.call", _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .RuleId */ .kq.EncryptedDM, _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .RuleId */ .kq.DM, _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .RuleId */ .kq.Message, _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .RuleId */ .kq.EncryptedMessage];

/**
 * Make sure that each of the rules listed in `defaultRuleIds` is listed in the given set of push rules.
 *
 * @param logger - A `Logger` to write log messages to.
 * @param kind - the kind of push rule set being merged.
 * @param incomingRules - the existing set of known push rules for the user.
 * @param defaultRules - a lookup table for the default definitions of push rules.
 * @param orderedRuleIds - the IDs of the expected push rules, in order.
 *
 * @returns A copy of `incomingRules`, with any missing default rules inserted in the right place.
 */
function mergeRulesWithDefaults(logger, kind, incomingRules, defaultRules, orderedRuleIds) {
  // Split the incomingRules into defaults and custom
  const incomingDefaultRules = incomingRules.filter(rule => rule.default);
  const incomingCustomRules = incomingRules.filter(rule => !rule.default);
  function insertDefaultPushRule(ruleId) {
    if (ruleId === UserDefinedRules) {
      // Re-insert any user-defined rules that were in `incomingRules`
      newRules.push(...incomingCustomRules);
    } else if (ruleId in defaultRules) {
      logger.warn(`Adding default global ${kind} push rule ${ruleId}`);
      newRules.push(defaultRules[ruleId]);
    } else {
      logger.warn(`Missing default global ${kind} push rule ${ruleId}`);
    }
  }
  let nextExpectedRuleIdIndex = 0;
  const newRules = [];
  // Merge our expected rules (including the incoming custom rules) into the incoming default rules.
  for (const rule of incomingDefaultRules) {
    const ruleIndex = orderedRuleIds.indexOf(rule.rule_id);
    if (ruleIndex === -1) {
      // an unrecognised rule; copy it over
      newRules.push(rule);
      continue;
    }
    while (ruleIndex > nextExpectedRuleIdIndex) {
      // insert new rules
      const defaultRuleId = orderedRuleIds[nextExpectedRuleIdIndex];
      insertDefaultPushRule(defaultRuleId);
      nextExpectedRuleIdIndex += 1;
    }
    // copy over the existing rule
    newRules.push(rule);
    nextExpectedRuleIdIndex += 1;
  }

  // Now copy over any remaining default rules
  for (const ruleId of orderedRuleIds.slice(nextExpectedRuleIdIndex)) {
    insertDefaultPushRule(ruleId);
  }
  return newRules;
}
class PushProcessor {
  /**
   * Construct a Push Processor.
   * @param client - The Matrix client object to use
   */
  constructor(client) {
    /**
     * Maps the original key from the push rules to a list of property names
     * after unescaping.
     */
    ;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "parsedKeys", new Map());
    this.client = client;
  }
  /**
   * Convert a list of actions into a object with the actions as keys and their values
   * @example
   * eg. `[ 'notify', { set_tweak: 'sound', value: 'default' } ]`
   *     becomes `{ notify: true, tweaks: { sound: 'default' } }`
   * @param actionList - The actions list
   *
   * @returns A object with key 'notify' (true or false) and an object of actions
   */
  static actionListToActionsObject(actionList) {
    const actionObj = {
      notify: false,
      tweaks: {}
    };
    for (const action of actionList) {
      if (action === _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .PushRuleActionName */ .YU.Notify) {
        actionObj.notify = true;
      } else if (typeof action === "object") {
        if (action.value === undefined) {
          action.value = true;
        }
        actionObj.tweaks[action.set_tweak] = action.value;
      }
    }
    return actionObj;
  }

  /**
   * Rewrites conditions on a client's push rules to match the defaults
   * where applicable. Useful for upgrading push rules to more strict
   * conditions when the server is falling behind on defaults.
   *
   * @param logger - A `Logger` to write log messages to.
   * @param incomingRules - The client's existing push rules
   * @param userId - The Matrix ID of the client.
   * @returns The rewritten rules
   */
  static rewriteDefaultRules(logger, incomingRules, userId = undefined) {
    let newRules = JSON.parse(JSON.stringify(incomingRules)); // deep clone

    // These lines are mostly to make the tests happy. We shouldn't run into these
    // properties missing in practice.
    if (!newRules) newRules = {};
    if (!newRules.global) newRules.global = {};
    if (!newRules.global.override) newRules.global.override = [];
    if (!newRules.global.underride) newRules.global.underride = [];

    // Merge the client-level defaults with the ones from the server
    newRules.global.override = mergeRulesWithDefaults(logger, _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .PushRuleKind */ .Ji.Override, newRules.global.override, DEFAULT_OVERRIDE_RULES, EXPECTED_DEFAULT_OVERRIDE_RULE_IDS);
    newRules.global.underride = mergeRulesWithDefaults(logger, _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .PushRuleKind */ .Ji.Underride, newRules.global.underride, DEFAULT_UNDERRIDE_RULES, EXPECTED_DEFAULT_UNDERRIDE_RULE_IDS);
    return newRules;
  }

  /**
   * Create a RegExp object for the given glob pattern with a single capture group around the pattern itself, caching the result.
   * No cache invalidation is present currently,
   * as this will be inherently bounded to the size of the user's own push rules.
   * @param pattern - the glob pattern to convert to a RegExp
   * @param alignToWordBoundary - whether to align the pattern to word boundaries,
   *     as specified for `content.body` matches, will use lookaround assertions to ensure the match only includes the pattern
   * @param flags - the flags to pass to the RegExp constructor, defaults to case-insensitive
   */
  static getPushRuleGlobRegex(pattern, alignToWordBoundary = false, flags = "i") {
    const [prefix, suffix] = alignToWordBoundary ? ["(?<=^|\\W)", "(?=\\W|$)"] : ["^", "$"];
    const cacheKey = `${alignToWordBoundary}-${flags}-${pattern}`;
    if (!PushProcessor.cachedGlobToRegex[cacheKey]) {
      PushProcessor.cachedGlobToRegex[cacheKey] = new RegExp(prefix + "(" + (0,_utils_ts__WEBPACK_IMPORTED_MODULE_1__/* .globToRegexp */ .dn)(pattern) + ")" + suffix, flags);
    }
    return PushProcessor.cachedGlobToRegex[cacheKey];
  }

  /**
   * Pre-caches the parsed keys for push rules and cleans out any obsolete cache
   * entries. Should be called after push rules are updated.
   * @param newRules - The new push rules.
   */
  updateCachedPushRuleKeys(newRules) {
    // These lines are mostly to make the tests happy. We shouldn't run into these
    // properties missing in practice.
    if (!newRules) newRules = {};
    if (!newRules.global) newRules.global = {};
    if (!newRules.global.override) newRules.global.override = [];
    if (!newRules.global.room) newRules.global.room = [];
    if (!newRules.global.sender) newRules.global.sender = [];
    if (!newRules.global.underride) newRules.global.underride = [];

    // Process the 'key' property on event_match conditions pre-cache the
    // values and clean-out any unused values.
    const toRemoveKeys = new Set(this.parsedKeys.keys());
    for (const ruleset of [newRules.global.override, newRules.global.room, newRules.global.sender, newRules.global.underride]) {
      for (const rule of ruleset) {
        if (!rule.conditions) {
          continue;
        }
        for (const condition of rule.conditions) {
          if (condition.kind !== _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .ConditionKind */ .wp.EventMatch) {
            continue;
          }

          // Ensure we keep this key.
          toRemoveKeys.delete(condition.key);

          // Pre-process the key.
          this.parsedKeys.set(condition.key, PushProcessor.partsForDottedKey(condition.key));
        }
      }
    }
    // Any keys that were previously cached, but are no longer needed should
    // be removed.
    toRemoveKeys.forEach(k => this.parsedKeys.delete(k));
  }
  // $glob: RegExp

  matchingRuleFromKindSet(ev, kindset) {
    for (const kind of RULEKINDS_IN_ORDER) {
      const ruleset = kindset[kind];
      if (!ruleset) {
        continue;
      }
      for (const rule of ruleset) {
        if (!rule.enabled) {
          continue;
        }
        const rawrule = this.templateRuleToRaw(kind, rule);
        if (!rawrule) {
          continue;
        }
        if (this.ruleMatchesEvent(rawrule, ev)) {
          return _objectSpread(_objectSpread({}, rule), {}, {
            kind
          });
        }
      }
    }
    return null;
  }
  templateRuleToRaw(kind, tprule) {
    const rawrule = {
      rule_id: tprule.rule_id,
      actions: tprule.actions,
      conditions: []
    };
    switch (kind) {
      case _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .PushRuleKind */ .Ji.Underride:
      case _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .PushRuleKind */ .Ji.Override:
        rawrule.conditions = tprule.conditions;
        break;
      case _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .PushRuleKind */ .Ji.RoomSpecific:
        if (!tprule.rule_id) {
          return null;
        }
        rawrule.conditions.push({
          kind: _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .ConditionKind */ .wp.EventMatch,
          key: "room_id",
          value: tprule.rule_id
        });
        break;
      case _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .PushRuleKind */ .Ji.SenderSpecific:
        if (!tprule.rule_id) {
          return null;
        }
        rawrule.conditions.push({
          kind: _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .ConditionKind */ .wp.EventMatch,
          key: "user_id",
          value: tprule.rule_id
        });
        break;
      case _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .PushRuleKind */ .Ji.ContentSpecific:
        if (!tprule.pattern) {
          return null;
        }
        rawrule.conditions.push({
          kind: _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .ConditionKind */ .wp.EventMatch,
          key: "content.body",
          pattern: tprule.pattern
        });
        break;
    }
    return rawrule;
  }
  eventFulfillsCondition(cond, ev) {
    switch (cond.kind) {
      case _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .ConditionKind */ .wp.EventMatch:
        return this.eventFulfillsEventMatchCondition(cond, ev);
      case _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .ConditionKind */ .wp.EventPropertyIs:
        return this.eventFulfillsEventPropertyIsCondition(cond, ev);
      case _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .ConditionKind */ .wp.EventPropertyContains:
        return this.eventFulfillsEventPropertyContains(cond, ev);
      case _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .ConditionKind */ .wp.ContainsDisplayName:
        return this.eventFulfillsDisplayNameCondition(cond, ev);
      case _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .ConditionKind */ .wp.RoomMemberCount:
        return this.eventFulfillsRoomMemberCountCondition(cond, ev);
      case _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .ConditionKind */ .wp.SenderNotificationPermission:
        return this.eventFulfillsSenderNotifPermCondition(cond, ev);
      case _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .ConditionKind */ .wp.CallStarted:
      case _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .ConditionKind */ .wp.CallStartedPrefix:
        return this.eventFulfillsCallStartedCondition(cond, ev);
    }

    // unknown conditions: we previously matched all unknown conditions,
    // but given that rules can be added to the base rules on a server,
    // it's probably better to not match unknown conditions.
    return false;
  }
  eventFulfillsSenderNotifPermCondition(cond, ev) {
    const notifLevelKey = cond["key"];
    if (!notifLevelKey) {
      return false;
    }
    const room = this.client.getRoom(ev.getRoomId());
    if (!(room !== null && room !== void 0 && room.currentState)) {
      return false;
    }

    // Note that this should not be the current state of the room but the state at
    // the point the event is in the DAG. Unfortunately the js-sdk does not store
    // this.
    return room.currentState.mayTriggerNotifOfType(notifLevelKey, ev.getSender());
  }
  eventFulfillsRoomMemberCountCondition(cond, ev) {
    if (!cond.is) {
      return false;
    }
    const room = this.client.getRoom(ev.getRoomId());
    if (!room || !room.currentState || !room.currentState.members) {
      return false;
    }
    const memberCount = room.currentState.getJoinedMemberCount();
    const m = cond.is.match(/^([=<>]*)(\d*)$/);
    if (!m) {
      return false;
    }
    const ineq = m[1];
    const rhs = parseInt(m[2]);
    if (isNaN(rhs)) {
      return false;
    }
    switch (ineq) {
      case "":
      case "==":
        return memberCount == rhs;
      case "<":
        return memberCount < rhs;
      case ">":
        return memberCount > rhs;
      case "<=":
        return memberCount <= rhs;
      case ">=":
        return memberCount >= rhs;
      default:
        return false;
    }
  }
  eventFulfillsDisplayNameCondition(cond, ev) {
    var _room$currentState;
    let content = ev.getContent();
    if (ev.isEncrypted() && ev.getClearContent()) {
      content = ev.getClearContent();
    }
    if (!content || !content.body || typeof content.body != "string") {
      return false;
    }
    const room = this.client.getRoom(ev.getRoomId());
    const member = room === null || room === void 0 || (_room$currentState = room.currentState) === null || _room$currentState === void 0 ? void 0 : _room$currentState.getMember(this.client.credentials.userId);
    if (!member) {
      return false;
    }
    const displayName = member.name;

    // N.B. we can't use \b as it chokes on unicode. however \W seems to be okay
    // as shorthand for [^0-9A-Za-z_].
    const pat = new RegExp("(^|\\W)" + (0,_utils_ts__WEBPACK_IMPORTED_MODULE_1__/* .escapeRegExp */ .Nt)(displayName) + "(\\W|$)", "i");
    return content.body.search(pat) > -1;
  }

  /**
   * Check whether the given event matches the push rule condition by fetching
   * the property from the event and comparing against the condition's glob-based
   * pattern.
   * @param cond - The push rule condition to check for a match.
   * @param ev - The event to check for a match.
   */
  eventFulfillsEventMatchCondition(cond, ev) {
    if (!cond.key) {
      return false;
    }
    const val = this.valueForDottedKey(cond.key, ev);
    if (typeof val !== "string") {
      return false;
    }

    // XXX This does not match in a case-insensitive manner.
    //
    // See https://spec.matrix.org/v1.5/client-server-api/#conditions-1
    if (cond.value) {
      return cond.value === val;
    }
    if (typeof cond.pattern !== "string") {
      return false;
    }

    // Align to word boundary on `content.body` matches, whole string otherwise
    // https://spec.matrix.org/v1.13/client-server-api/#conditions-1
    const regex = PushProcessor.getPushRuleGlobRegex(cond.pattern, cond.key === "content.body");
    return !!val.match(regex);
  }

  /**
   * Check whether the given event matches the push rule condition by fetching
   * the property from the event and comparing exactly against the condition's
   * value.
   * @param cond - The push rule condition to check for a match.
   * @param ev - The event to check for a match.
   */
  eventFulfillsEventPropertyIsCondition(cond, ev) {
    if (!cond.key || cond.value === undefined) {
      return false;
    }
    return cond.value === this.valueForDottedKey(cond.key, ev);
  }

  /**
   * Check whether the given event matches the push rule condition by fetching
   * the property from the event and comparing exactly against the condition's
   * value.
   * @param cond - The push rule condition to check for a match.
   * @param ev - The event to check for a match.
   */
  eventFulfillsEventPropertyContains(cond, ev) {
    if (!cond.key || cond.value === undefined) {
      return false;
    }
    const val = this.valueForDottedKey(cond.key, ev);
    if (!Array.isArray(val)) {
      return false;
    }
    return val.includes(cond.value);
  }
  eventFulfillsCallStartedCondition(_cond, ev) {
    // Since servers don't support properly sending push notification
    // about MSC3401 call events, we do the handling ourselves
    return ["m.ring", "m.prompt"].includes(ev.getContent()["m.intent"]) && !("m.terminated" in ev.getContent()) && (ev.getPrevContent()["m.terminated"] !== ev.getContent()["m.terminated"] || (0,_utils_ts__WEBPACK_IMPORTED_MODULE_1__/* .deepCompare */ .ky)(ev.getPrevContent(), {}));
  }

  /**
   * Parse the key into the separate fields to search by splitting on
   * unescaped ".", and then removing any escape characters.
   *
   * @param str - The key of the push rule condition: a dotted field.
   * @returns The unescaped parts to fetch.
   * @internal
   */
  static partsForDottedKey(str) {
    const result = [];

    // The current field and whether the previous character was the escape
    // character (a backslash).
    let part = "";
    let escaped = false;

    // Iterate over each character, and decide whether to append to the current
    // part (following the escape rules) or to start a new part (based on the
    // field separator).
    for (const c of str) {
      // If the previous character was the escape character (a backslash)
      // then decide what to append to the current part.
      if (escaped) {
        if (c === "\\" || c === ".") {
          // An escaped backslash or dot just gets added.
          part += c;
        } else {
          // A character that shouldn't be escaped gets the backslash prepended.
          part += "\\" + c;
        }
        // This always resets being escaped.
        escaped = false;
        continue;
      }
      if (c == ".") {
        // The field separator creates a new part.
        result.push(part);
        part = "";
      } else if (c == "\\") {
        // A backslash adds no characters, but starts an escape sequence.
        escaped = true;
      } else {
        // Otherwise, just add the current character.
        part += c;
      }
    }

    // Ensure the final part is included. If there's an open escape sequence
    // it should be included.
    if (escaped) {
      part += "\\";
    }
    result.push(part);
    return result;
  }

  /**
   * For a dotted field and event, fetch the value at that position, if one
   * exists.
   *
   * @param key - The key of the push rule condition: a dotted field to fetch.
   * @param ev - The matrix event to fetch the field from.
   * @returns The value at the dotted path given by key.
   */
  valueForDottedKey(key, ev) {
    // The key should already have been parsed via updateCachedPushRuleKeys,
    // but if it hasn't (maybe via an old consumer of the SDK which hasn't
    // been updated?) then lazily calculate it here.
    let parts = this.parsedKeys.get(key);
    if (parts === undefined) {
      parts = PushProcessor.partsForDottedKey(key);
      this.parsedKeys.set(key, parts);
    }
    let val;

    // special-case the first component to deal with encrypted messages
    const firstPart = parts[0];
    let currentIndex = 0;
    if (firstPart === "content") {
      val = ev.getContent();
      ++currentIndex;
    } else if (firstPart === "type") {
      val = ev.getType();
      ++currentIndex;
    } else {
      // use the raw event for any other fields
      val = ev.event;
    }
    for (; currentIndex < parts.length; ++currentIndex) {
      // The previous iteration resulted in null or undefined, bail (and
      // avoid the type error of attempting to retrieve a property).
      if ((0,_utils_ts__WEBPACK_IMPORTED_MODULE_1__/* .isNullOrUndefined */ .hX)(val)) {
        return undefined;
      }
      const thisPart = parts[currentIndex];
      val = val[thisPart];
    }
    return val;
  }
  matchingRuleForEventWithRulesets(ev, rulesets) {
    if (!rulesets) {
      return null;
    }
    if (ev.getSender() === this.client.getSafeUserId()) {
      return null;
    }
    return this.matchingRuleFromKindSet(ev, rulesets.global);
  }
  pushActionsForEventAndRulesets(ev, rulesets) {
    const rule = this.matchingRuleForEventWithRulesets(ev, rulesets);
    if (!rule) {
      return {};
    }
    const actionObj = PushProcessor.actionListToActionsObject(rule.actions);

    // Some actions are implicit in some situations: we add those here
    if (actionObj.tweaks.highlight === undefined) {
      // if it isn't specified, highlight if it's a content
      // rule but otherwise not
      actionObj.tweaks.highlight = rule.kind == _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .PushRuleKind */ .Ji.ContentSpecific;
    }
    return {
      actions: actionObj,
      rule
    };
  }
  ruleMatchesEvent(rule, ev) {
    var _rule$conditions;
    // Disable the deprecated mentions push rules if the new mentions property exists.
    if (this.client.supportsIntentionalMentions() && ev.getContent()["m.mentions"] !== undefined && (rule.rule_id === _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .RuleId */ .kq.ContainsUserName || rule.rule_id === _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .RuleId */ .kq.ContainsDisplayName || rule.rule_id === _types_PushRules_ts__WEBPACK_IMPORTED_MODULE_2__/* .RuleId */ .kq.AtRoomNotification)) {
      return false;
    }
    return !((_rule$conditions = rule.conditions) !== null && _rule$conditions !== void 0 && _rule$conditions.some(cond => !this.eventFulfillsCondition(cond, ev)));
  }

  /**
   * Get the user's push actions for the given event
   */
  actionsForEvent(ev) {
    const {
      actions
    } = this.pushActionsForEventAndRulesets(ev, this.client.pushRules);
    return actions || {};
  }
  actionsAndRuleForEvent(ev) {
    return this.pushActionsForEventAndRulesets(ev, this.client.pushRules);
  }

  /**
   * Get one of the users push rules by its ID
   *
   * @param ruleId - The ID of the rule to search for
   * @returns The push rule, or null if no such rule was found
   */
  getPushRuleById(ruleId) {
    var _result$rule;
    const result = this.getPushRuleAndKindById(ruleId);
    return (_result$rule = result === null || result === void 0 ? void 0 : result.rule) !== null && _result$rule !== void 0 ? _result$rule : null;
  }

  /**
   * Get one of the users push rules by its ID
   *
   * @param ruleId - The ID of the rule to search for
   * @returns rule The push rule, or null if no such rule was found
   * @returns kind - The PushRuleKind of the rule to search for
   */
  getPushRuleAndKindById(ruleId) {
    for (const scope of ["global"]) {
      var _this$client$pushRule;
      if (((_this$client$pushRule = this.client.pushRules) === null || _this$client$pushRule === void 0 ? void 0 : _this$client$pushRule[scope]) === undefined) continue;
      for (const kind of RULEKINDS_IN_ORDER) {
        if (this.client.pushRules[scope][kind] === undefined) continue;
        for (const rule of this.client.pushRules[scope][kind]) {
          if (rule.rule_id === ruleId) return {
            rule,
            kind
          };
        }
      }
    }
    return null;
  }
}
;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(PushProcessor, "cachedGlobToRegex", {});

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/realtime-callbacks.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ clearTimeout),
/* harmony export */   w: () => (/* binding */ setTimeout)
/* harmony export */ });
/* harmony import */ var _logger_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts");
/*
Copyright 2016 OpenMarket Ltd
Copyright 2019 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* A re-implementation of the javascript callback functions (setTimeout,
 * clearTimeout; setInterval and clearInterval are not yet implemented) which
 * try to improve handling of large clock jumps (as seen when
 * suspending/resuming the system).
 *
 * In particular, if a timeout would have fired while the system was suspended,
 * it will instead fire as soon as possible after resume.
 */



// we schedule a callback at least this often, to check if we've missed out on
// some wall-clock time due to being suspended.
const TIMER_CHECK_PERIOD_MS = 1000;

// counter, for making up ids to return from setTimeout
let count = 0;

// the key for our callback with the real globalThis.setTimeout
let realCallbackKey;
// a sorted list of the callbacks to be run.
// each is an object with keys [runAt, func, params, key].
const callbackList = [];

// var debuglog = logger.log.bind(logger);
/* istanbul ignore next */
const debuglog = function (...params) {};

/**
 * reimplementation of window.setTimeout, which will call the callback if
 * the wallclock time goes past the deadline.
 *
 * @param func -   callback to be called after a delay
 * @param delayMs -  number of milliseconds to delay by
 *
 * @returns an identifier for this callback, which may be passed into
 *                   clearTimeout later.
 */
function setTimeout(func, delayMs, ...params) {
  delayMs = delayMs || 0;
  if (delayMs < 0) {
    delayMs = 0;
  }
  const runAt = Date.now() + delayMs;
  const key = count++;
  debuglog("setTimeout: scheduling cb", key, "at", runAt, "(delay", delayMs, ")");
  const data = {
    runAt: runAt,
    func: func,
    params: params,
    key: key
  };

  // figure out where it goes in the list
  const idx = binarySearch(callbackList, function (el) {
    return el.runAt - runAt;
  });
  callbackList.splice(idx, 0, data);
  scheduleRealCallback();
  return key;
}

/**
 * reimplementation of window.clearTimeout, which mirrors setTimeout
 *
 * @param key -   result from an earlier setTimeout call
 */
function clearTimeout(key) {
  if (callbackList.length === 0) {
    return;
  }

  // remove the element from the list
  let i;
  for (i = 0; i < callbackList.length; i++) {
    const cb = callbackList[i];
    if (cb.key == key) {
      callbackList.splice(i, 1);
      break;
    }
  }

  // iff it was the first one in the list, reschedule our callback.
  if (i === 0) {
    scheduleRealCallback();
  }
}

// use the real globalThis.setTimeout to schedule a callback to runCallbacks.
function scheduleRealCallback() {
  if (realCallbackKey) {
    globalThis.clearTimeout(realCallbackKey);
  }
  const first = callbackList[0];
  if (!first) {
    debuglog("scheduleRealCallback: no more callbacks, not rescheduling");
    return;
  }
  const timestamp = Date.now();
  const delayMs = Math.min(first.runAt - timestamp, TIMER_CHECK_PERIOD_MS);
  debuglog("scheduleRealCallback: now:", timestamp, "delay:", delayMs);
  realCallbackKey = globalThis.setTimeout(runCallbacks, delayMs);
}
function runCallbacks() {
  const timestamp = Date.now();
  debuglog("runCallbacks: now:", timestamp);

  // get the list of things to call
  const callbacksToRun = [];
  while (true) {
    const first = callbackList[0];
    if (!first || first.runAt > timestamp) {
      break;
    }
    const cb = callbackList.shift();
    debuglog("runCallbacks: popping", cb.key);
    callbacksToRun.push(cb);
  }

  // reschedule the real callback before running our functions, to
  // keep the codepaths the same whether or not our functions
  // register their own setTimeouts.
  scheduleRealCallback();
  for (const cb of callbacksToRun) {
    try {
      cb.func.apply(globalThis, cb.params);
    } catch (e) {
      _logger_ts__WEBPACK_IMPORTED_MODULE_0__/* .logger */ .vF.error("Uncaught exception in callback function", e);
    }
  }
}

/* search in a sorted array.
 *
 * returns the index of the last element for which func returns
 * greater than zero, or array.length if no such element exists.
 */
function binarySearch(array, func) {
  // min is inclusive, max exclusive.
  let min = 0;
  let max = array.length;
  while (min < max) {
    const mid = min + max >> 1;
    const res = func(array[mid]);
    if (res > 0) {
      // the element at 'mid' is too big; set it as the new max.
      max = mid;
    } else {
      // the element at 'mid' is too small. 'min' is inclusive, so +1.
      min = mid + 1;
    }
  }
  // presumably, min==max now.
  return min;
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/retentionPolicy.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ RetentionPolicyService)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _capabilityPoller_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/capabilityPoller.ts");
/* harmony import */ var _http_api_index_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/index.ts");

/*
Copyright 2024 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



/**
 * Manages storing and periodically refreshing the server capabilities.
 */
class RetentionPolicyService extends _capabilityPoller_ts__WEBPACK_IMPORTED_MODULE_1__/* .CapabilityPoller */ .N {
  constructor(logger, http) {
    super(logger, http, "retention policy");
    /**
     * Fetches the latest server capabilities from the homeserver and returns them, or rejects
     * on failure.
     */
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "fetch", async () => {
      const resp = await this.http.authedRequest(_http_api_index_ts__WEBPACK_IMPORTED_MODULE_2__/* .Method */ .IT.Get, "/retention/configuration", undefined, undefined, {
        prefix: `${_http_api_index_ts__WEBPACK_IMPORTED_MODULE_2__/* .ClientPrefix */ .iD.Unstable}/org.matrix.msc1763`
      });
      this.cached = resp;
      return this.cached;
    });
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/room-summary-api.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ fetchRoomSummary)
/* harmony export */ });
/* harmony import */ var _http_api_index_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/index.ts");
/* harmony import */ var _utils_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/utils.ts");
/*
Copyright 2026 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * The room summary endpoint, which describes a room the user may not be in.
 * https://spec.matrix.org/latest/client-server-api/#room-summaries
 *
 * Not to be confused with {@link RoomSummary} in `./models/room-summary.ts`, which holds the
 * heroes and member counts that `/sync` sends for rooms we are in.
 */




/**
 * The summary of a room, as returned by the room summary endpoint.
 * https://spec.matrix.org/latest/client-server-api/#get_matrixclientv1room_summaryroomidoralias
 *
 * Also covers the initial version of MSC3266 implemented in older versions of Synapse, which
 * prefixed some of the fields. See {@link MatrixClient.getRoomSummary}.
 */

/** The endpoint stabilised in Matrix 1.15. */
const STABLE_ENDPOINT = {
  path: "/room_summary/$roomid",
  prefix: _http_api_index_ts__WEBPACK_IMPORTED_MODULE_0__/* .ClientPrefix */ .iD.V1
};

/** The endpoint used by the initial version of MSC3266, as implemented in older versions of Synapse. */
const UNSTABLE_ENDPOINT = {
  path: "/summary/$roomid",
  prefix: "/_matrix/client/unstable/im.nheko.summary"
};

/** The spec version which stabilised MSC3266 as `/_matrix/client/v1/room_summary/{roomIdOrAlias}`. */
const STABLE_VERSION = "v1.15";

/** The unstable feature flag advertised for MSC3266. */
const UNSTABLE_FEATURE = "org.matrix.msc3266";

/** Whether the server advertises the stable room summary endpoint in its `/versions` response. */
function supportsStableEndpoint(versions) {
  var _versions$versions, _versions$unstable_fe;
  return ((_versions$versions = versions.versions) === null || _versions$versions === void 0 ? void 0 : _versions$versions.includes(STABLE_VERSION)) || !!((_versions$unstable_fe = versions.unstable_features) !== null && _versions$unstable_fe !== void 0 && _versions$unstable_fe[UNSTABLE_FEATURE]);
}

/**
 * Fetch the summary of a room.
 *
 * Uses the path from the initial version of MSC3266, as implemented in older versions of Synapse,
 * unless the server advertises support for the spec version which stabilised it.
 *
 * @param http - The HTTP API to make the request with.
 * @param versions - The server's `/versions` response, used to pick the endpoint.
 * @param roomIdOrAlias - The ID or alias of the room to get the summary of.
 * @param via - The servers to attempt to request the summary from, when the local server cannot
 *              generate it (for instance, because it has no local user in the room).
 */
function fetchRoomSummary(http, versions, roomIdOrAlias, via) {
  const endpoint = supportsStableEndpoint(versions) ? STABLE_ENDPOINT : UNSTABLE_ENDPOINT;
  const path = _utils_ts__WEBPACK_IMPORTED_MODULE_1__/* .encodeUri */ .RR(endpoint.path, {
    $roomid: roomIdOrAlias
  });
  return http.authedRequest(_http_api_index_ts__WEBPACK_IMPORTED_MODULE_0__/* .Method */ .IT.Get, path, {
    via
  }, undefined, {
    prefix: endpoint.prefix
  });
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/rtcTransportsCachedValue.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ createRtcTransportsCachedValue)
/* harmony export */ });
/* harmony import */ var _pollingCachedValue_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/pollingCachedValue.ts");
/* harmony import */ var _client_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/client.ts");
/* harmony import */ var _http_api_index_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/index.ts");
/*
Copyright 2026 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




const TRANSPORT_CACHE_TTL_MILLISECONDS = 1000 * 60 * 60 * 24; // 1 day

/**
 * Builds a cache for the rtc/transport discovery end-point of the given client.
 */
function createRtcTransportsCachedValue(client, logger) {
  return new _pollingCachedValue_ts__WEBPACK_IMPORTED_MODULE_0__/* .PollingCachedValue */ .P({
    name: "RTCTransports",
    logger,
    ttlMillis: TRANSPORT_CACHE_TTL_MILLISECONDS,
    fetch: () => client._unstable_getRTCTransports(),
    onValueCached: transports => client.emit(_client_ts__WEBPACK_IMPORTED_MODULE_1__/* .ClientEvent */ .AU.RtcTransportsUpdated, transports),
    // If the end point is not supported by the homeserver it will be a 404 error.
    // This is a final error, it can be cached, no need to retry everytime.
    // It will retry when ttl has expired.
    shouldCacheError: error => error instanceof _http_api_index_ts__WEBPACK_IMPORTED_MODULE_2__/* .MatrixError */ .up && error.httpStatus === 404
  });
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/rust-crypto/constants.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
Copyright 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/** The prefix used on indexeddbs created by rust-crypto */
const RUST_SDK_STORE_PREFIX = "matrix-js-sdk";
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "J", 0, /* binding */ RUST_SDK_STORE_PREFIX
/* harmony export */ ]);


/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/service-types.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ SERVICE_TYPES)
/* harmony export */ });
/*
Copyright 2019 - 2021 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

let SERVICE_TYPES = /*#__PURE__*/function (SERVICE_TYPES) {
  SERVICE_TYPES["IS"] = "SERVICE_TYPE_IS";
  // An identity server
  SERVICE_TYPES["IM"] = "SERVICE_TYPE_IM"; // An integration manager
  return SERVICE_TYPES;
}({});

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/sliding-sync-sdk.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ SlidingSyncSdk)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _models_room_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/room.ts");
/* harmony import */ var _logger_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts");
/* harmony import */ var _utils_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/utils.ts");
/* harmony import */ var _models_event_timeline_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/event-timeline.ts");
/* harmony import */ var _client_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/client.ts");
/* harmony import */ var _sync_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/sync.ts");
/* harmony import */ var _http_api_index_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/http-api/index.ts");
/* harmony import */ var _sliding_sync_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/sliding-sync.ts");
/* harmony import */ var _types_event_ts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/event.ts");
/* harmony import */ var _models_room_state_ts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/room-state.ts");
/* harmony import */ var _models_room_member_ts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/room-member.ts");
/* harmony import */ var _types_membership_ts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/membership.ts");

/*
Copyright 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/














// Number of consecutive failed syncs that will lead to a syncState of ERROR as opposed
// to RECONNECTING. This is needed to inform the client of server issues when the
// keepAlive is successful but the server /sync fails.
const FAILED_SYNC_ERROR_THRESHOLD = 3;
/**
 * Collects the encryption-relevant parts of a sliding sync response, which arrive via two separate extensions
 * (`e2ee` and `to_device`), so that they can be passed to the crypto layer in a single call once the whole response
 * has been processed. See {@link SyncCryptoCallbacks.processSyncChanges} for why this matters.
 */
class E2EESyncChangesCollector {
  constructor(client, cryptoCallbacks) {
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "toDeviceEvents", []);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "e2ee", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "hasChanges", false);
    this.client = client;
    this.cryptoCallbacks = cryptoCallbacks;
  }
  onToDeviceEvents(events) {
    this.toDeviceEvents = events;
    this.hasChanges = true;
  }
  onE2EEChanges(data) {
    this.e2ee = data;
    this.hasChanges = true;
  }

  /**
   * Pass the collected changes to the crypto layer, and emit the resulting to-device messages on the client.
   *
   * A no-op if nothing has been collected since the last flush, so it is safe to call once per extension.
   */
  async flush() {
    var _e2ee$device_unused_f, _this$cryptoCallbacks;
    if (!this.hasChanges) return;
    const toDeviceEvents = this.toDeviceEvents;
    const e2ee = this.e2ee;
    this.toDeviceEvents = [];
    this.e2ee = undefined;
    this.hasChanges = false;

    // Fields omitted from the `e2ee` extension are unchanged since the last response; the crypto layer knows to
    // interpret them that way given `useMsc4186`.
    await (0,_sync_ts__WEBPACK_IMPORTED_MODULE_6__/* .processSyncCryptoChanges */ .Vu)(this.client, this.cryptoCallbacks, {
      toDeviceEvents,
      deviceLists: e2ee === null || e2ee === void 0 ? void 0 : e2ee.device_lists,
      oneTimeKeysCounts: e2ee === null || e2ee === void 0 ? void 0 : e2ee.device_one_time_keys_count,
      unusedFallbackKeys: (_e2ee$device_unused_f = e2ee === null || e2ee === void 0 ? void 0 : e2ee.device_unused_fallback_key_types) !== null && _e2ee$device_unused_f !== void 0 ? _e2ee$device_unused_f : e2ee === null || e2ee === void 0 ? void 0 : e2ee["org.matrix.msc2732.device_unused_fallback_key_types"],
      useMsc4186: true
    });
    (_this$cryptoCallbacks = this.cryptoCallbacks) === null || _this$cryptoCallbacks === void 0 || _this$cryptoCallbacks.onSyncCompleted({});
  }
}
class ExtensionE2EE {
  constructor(crypto, collector) {
    this.crypto = crypto;
    this.collector = collector;
  }
  name() {
    return "e2ee";
  }
  when() {
    return _sliding_sync_ts__WEBPACK_IMPORTED_MODULE_8__/* .ExtensionState */ .HY.PreProcess;
  }
  async onRequest(isInitial) {
    if (isInitial) {
      // In SSS, the `?pos=` contains the stream position for device list updates.
      // If we do not have a `?pos=` (e.g because we forgot it, or because the server
      // invalidated our connection) then we MUST invlaidate all device lists because
      // the server will not tell us the delta. This will then cause UTDs as we will fail
      // to encrypt for new devices. This is an expensive call, so we should
      // really really remember `?pos=` wherever possible.
      _logger_ts__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .vF.log("ExtensionE2EE: invalidating all device lists due to missing 'pos'");
      await this.crypto.markAllTrackedUsersAsDirty();
    }
    return {
      enabled: true // this is sticky so only send it on the initial request
    };
  }
  async onResponse(data) {
    this.collector.onE2EEChanges(data);
  }
  async onResponseComplete() {
    await this.collector.flush();
  }
}
class ExtensionToDevice {
  constructor(collector) {
    ;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "nextBatch", null);
    this.collector = collector;
  }
  name() {
    return "to_device";
  }
  when() {
    return _sliding_sync_ts__WEBPACK_IMPORTED_MODULE_8__/* .ExtensionState */ .HY.PreProcess;
  }
  async onRequest(isInitial) {
    return {
      since: this.nextBatch !== null ? this.nextBatch : undefined,
      limit: 100,
      enabled: true
    };
  }
  async onResponse(data) {
    this.collector.onToDeviceEvents(data["events"] || []);
    this.nextBatch = data.next_batch;
  }
  async onResponseComplete() {
    await this.collector.flush();
  }
}
class ExtensionAccountData {
  constructor(client) {
    this.client = client;
  }
  name() {
    return "account_data";
  }
  when() {
    return _sliding_sync_ts__WEBPACK_IMPORTED_MODULE_8__/* .ExtensionState */ .HY.PostProcess;
  }
  async onRequest(isInitial) {
    return {
      enabled: true
    };
  }
  async onResponse(data) {
    if (data.global && data.global.length > 0) {
      this.processGlobalAccountData(data.global);
    }

    // oxlint-disable-next-line guard-for-in
    for (const roomId in data.rooms) {
      const accountDataEvents = mapEvents(this.client, roomId, data.rooms[roomId]);
      const room = this.client.getRoom(roomId);
      if (!room) {
        _logger_ts__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .vF.warn("got account data for room but room doesn't exist on client:", roomId);
        continue;
      }
      room.addAccountData(accountDataEvents);
      accountDataEvents.forEach(e => {
        this.client.emit(_client_ts__WEBPACK_IMPORTED_MODULE_5__/* .ClientEvent */ .AU.Event, e);
      });
    }
  }
  processGlobalAccountData(globalAccountData) {
    const events = mapEvents(this.client, undefined, globalAccountData);
    const prevEventsMap = events.reduce((m, c) => {
      m[c.getType()] = this.client.store.getAccountData(c.getType());
      return m;
    }, {});
    this.client.store.storeAccountDataEvents(events);
    events.forEach(accountDataEvent => {
      // Honour push rules that come down the sync stream but also
      // honour push rules that were previously cached. Base rules
      // will be updated when we receive push rules via getPushRules
      // (see sync) before syncing over the network.
      if (accountDataEvent.getType() === _types_event_ts__WEBPACK_IMPORTED_MODULE_9__/* .EventType */ .Bx.PushRules) {
        const rules = accountDataEvent.getContent();
        this.client.setPushRules(rules);
      }
      const prevEvent = prevEventsMap[accountDataEvent.getType()];
      this.client.emit(_client_ts__WEBPACK_IMPORTED_MODULE_5__/* .ClientEvent */ .AU.AccountData, accountDataEvent, prevEvent);
      return accountDataEvent;
    });
  }
}
class ExtensionTyping {
  constructor(client) {
    this.client = client;
  }
  name() {
    return "typing";
  }
  when() {
    return _sliding_sync_ts__WEBPACK_IMPORTED_MODULE_8__/* .ExtensionState */ .HY.PostProcess;
  }
  async onRequest(isInitial) {
    return {
      enabled: true
    };
  }
  async onResponse(data) {
    if (!(data !== null && data !== void 0 && data.rooms)) {
      return;
    }

    // oxlint-disable-next-line guard-for-in
    for (const roomId in data.rooms) {
      processEphemeralEvents(this.client, roomId, [data.rooms[roomId]]);
    }
  }
}
class ExtensionReceipts {
  constructor(client) {
    this.client = client;
  }
  name() {
    return "receipts";
  }
  when() {
    return _sliding_sync_ts__WEBPACK_IMPORTED_MODULE_8__/* .ExtensionState */ .HY.PostProcess;
  }
  async onRequest(isInitial) {
    return {
      enabled: true
    };
  }
  async onResponse(data) {
    if (!(data !== null && data !== void 0 && data.rooms)) {
      return;
    }

    // oxlint-disable-next-line guard-for-in
    for (const roomId in data.rooms) {
      processEphemeralEvents(this.client, roomId, [data.rooms[roomId]]);
    }
  }
}
/**
 * Delivers sticky events (MSC4354) over sliding sync.
 * https://github.com/matrix-org/matrix-spec-proposals/pull/4480
 *
 * Sticky events expire after a duration instead of living in the timeline forever, and the server
 * re-sends the unexpired ones (e.g. on join) so late joiners still see them.
 *
 * The server sends them for every room matched by a list or subscription, even rooms currently
 * outside the list window. Sticky events already in a room's timeline are excluded here, so
 * `processRoomData` picks those up separately.
 */
class ExtensionStickyEvents {
  constructor(client) {
    ;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "nextBatch", void 0);
    this.client = client;
  }
  name() {
    // Keeps MSC4354's number, as the extension was originally specified there.
    return "org.matrix.msc4354.sticky_events";
  }
  when() {
    // Sticky events are stored on a Room, so the room has to exist first.
    return _sliding_sync_ts__WEBPACK_IMPORTED_MODULE_8__/* .ExtensionState */ .HY.PostProcess;
  }
  async onRequest(isInitial) {
    return {
      enabled: true,
      limit: 100,
      // Undefined until the first response, which asks for all unexpired sticky events.
      since: this.nextBatch
    };
  }
  async onResponse(data) {
    for (const [roomId, roomData] of Object.entries((_data$rooms = data === null || data === void 0 ? void 0 : data.rooms) !== null && _data$rooms !== void 0 ? _data$rooms : {})) {
      var _data$rooms, _roomData$events;
      const room = this.client.getRoom(roomId);
      if (!room) {
        // Dropping is safe: unexpired sticky events are re-sent once we know the room.
        _logger_ts__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .vF.debug(`Ignoring sticky events for unknown room ${roomId}`);
        continue;
      }
      room._unstable_addStickyEvents(mapEvents(this.client, roomId, (_roomData$events = roomData.events) !== null && _roomData$events !== void 0 ? _roomData$events : []));
    }

    // next_batch is only returned when there were changes, and must be echoed back as `since`.
    if (data !== null && data !== void 0 && data.next_batch) {
      this.nextBatch = data.next_batch;
    }
  }
}

/**
 * A copy of SyncApi such that it can be used as a drop-in replacement for sync v2. For the actual
 * sliding sync API, see sliding-sync.ts or the class SlidingSync.
 */
class SlidingSyncSdk {
  // accumulator of sync events in the current sync response

  constructor(slidingSync, client, opts, syncOpts) {
    ;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "opts", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "syncOpts", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "syncState", null);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "syncStateData", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "lastPos", null);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "failCount", 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "notifEvents", []);
    this.slidingSync = slidingSync;
    this.client = client;
    this.opts = (0,_sync_ts__WEBPACK_IMPORTED_MODULE_6__/* .defaultClientOpts */ .Bn)(opts);
    this.syncOpts = (0,_sync_ts__WEBPACK_IMPORTED_MODULE_6__/* .defaultSyncApiOpts */ .Fe)(syncOpts);
    if (client.getNotifTimelineSet()) {
      client.reEmitter.reEmit(client.getNotifTimelineSet(), [_models_room_ts__WEBPACK_IMPORTED_MODULE_1__/* .RoomEvent */ .u9.Timeline, _models_room_ts__WEBPACK_IMPORTED_MODULE_1__/* .RoomEvent */ .u9.TimelineReset]);
    }
    this.slidingSync.on(_sliding_sync_ts__WEBPACK_IMPORTED_MODULE_8__/* .SlidingSyncEvent */ .cQ.Lifecycle, this.onLifecycle.bind(this));
    this.slidingSync.on(_sliding_sync_ts__WEBPACK_IMPORTED_MODULE_8__/* .SlidingSyncEvent */ .cQ.RoomData, this.onRoomData.bind(this));
    // The `e2ee` and `to_device` extensions feed a shared collector, so that the crypto layer sees all the
    // encryption-relevant data from a response in a single call.
    const e2eeCollector = new E2EESyncChangesCollector(this.client, this.syncOpts.cryptoCallbacks);
    const extensions = [new ExtensionToDevice(e2eeCollector), new ExtensionAccountData(this.client), new ExtensionTyping(this.client), new ExtensionReceipts(this.client), new ExtensionStickyEvents(this.client)];
    if (this.syncOpts.cryptoCallbacks) {
      extensions.push(new ExtensionE2EE(this.syncOpts.cryptoCallbacks, e2eeCollector));
    }
    extensions.forEach(ext => {
      this.slidingSync.registerExtension(ext);
    });
  }
  async onRoomData(roomId, roomData) {
    let room = this.client.store.getRoom(roomId);
    if (!room) {
      if (!roomData.initial) {
        this.syncOpts.logger.debug("initial flag not set but no stored room exists for room ", roomId, roomData);
        return;
      }
      room = (0,_sync_ts__WEBPACK_IMPORTED_MODULE_6__/* ._createAndReEmitRoom */ .M)(this.client, roomId, this.opts);
    }
    await this.processRoomData(this.client, room, roomData);
  }
  onLifecycle(state, resp, err) {
    if (err) {
      this.syncOpts.logger.debug("onLifecycle", state, err);
    }
    switch (state) {
      case _sliding_sync_ts__WEBPACK_IMPORTED_MODULE_8__/* .SlidingSyncState */ .ns.Complete:
        this.purgeNotifications();
        if (!resp) {
          break;
        }
        // Element won't stop showing the initial loading spinner unless we fire SyncState.Prepared
        if (!this.lastPos) {
          this.updateSyncState(_sync_ts__WEBPACK_IMPORTED_MODULE_6__/* .SyncState */ .Lm.Prepared, {
            oldSyncToken: undefined,
            nextSyncToken: resp.pos,
            catchingUp: false,
            fromCache: false
          });
        }
        // Conversely, Element won't show the room list unless there is at least 1x SyncState.Syncing
        // so hence for the very first sync we will fire prepared then immediately syncing.
        this.updateSyncState(_sync_ts__WEBPACK_IMPORTED_MODULE_6__/* .SyncState */ .Lm.Syncing, {
          oldSyncToken: this.lastPos,
          nextSyncToken: resp.pos,
          catchingUp: false,
          fromCache: false
        });
        this.lastPos = resp.pos;
        break;
      case _sliding_sync_ts__WEBPACK_IMPORTED_MODULE_8__/* .SlidingSyncState */ .ns.RequestFinished:
        if (err) {
          this.failCount += 1;
          this.updateSyncState(this.failCount > FAILED_SYNC_ERROR_THRESHOLD ? _sync_ts__WEBPACK_IMPORTED_MODULE_6__/* .SyncState */ .Lm.Error : _sync_ts__WEBPACK_IMPORTED_MODULE_6__/* .SyncState */ .Lm.Reconnecting, {
            error: new _http_api_index_ts__WEBPACK_IMPORTED_MODULE_7__/* .MatrixError */ .up(err)
          });
          if (this.shouldAbortSync(new _http_api_index_ts__WEBPACK_IMPORTED_MODULE_7__/* .MatrixError */ .up(err))) {
            return; // shouldAbortSync actually stops syncing too so we don't need to do anything.
          }
        } else {
          this.failCount = 0;
          this.syncOpts.logger.debug(`SlidingSyncState.RequestFinished with ${Object.keys((resp === null || resp === void 0 ? void 0 : resp.rooms) || []).length} rooms`);
        }
        break;
    }
  }

  /**
   * Sync rooms the user has left.
   * @returns Resolved when they've been added to the store.
   */
  async syncLeftRooms() {
    return []; // TODO
  }

  /**
   * Peek into a room. This will result in the room in question being synced so it
   * is accessible via getRooms(). Live updates for the room will be provided.
   * @param roomId - The room ID to peek into.
   * @returns A promise which resolves once the room has been added to the
   * store.
   */
  async peek(roomId) {
    return null; // TODO
  }

  /**
   * Stop polling for updates in the peeked room. NOPs if there is no room being
   * peeked.
   */
  stopPeeking() {
    // TODO
  }

  /**
   * Specify the set_presence value to be used for subsequent calls to the Sync API.
   * @param presence - the presence to specify to set_presence of sync calls
   */
  setPresence(presence) {
    // TODO not possible in sliding sync yet
  }

  /**
   * Returns the current state of this sync object
   * @see MatrixClient#event:"sync"
   */
  getSyncState() {
    return this.syncState;
  }

  /**
   * Returns the additional data object associated with
   * the current sync state, or null if there is no
   * such data.
   * Sync errors, if available, are put in the 'error' key of
   * this object.
   */
  getSyncStateData() {
    var _this$syncStateData;
    return (_this$syncStateData = this.syncStateData) !== null && _this$syncStateData !== void 0 ? _this$syncStateData : null;
  }

  // Helper functions which set up JS SDK structs are below and are identical to the sync v2 counterparts

  createRoom(roomId) {
    // XXX cargoculted from sync.ts
    const {
      timelineSupport
    } = this.client;
    const room = new _models_room_ts__WEBPACK_IMPORTED_MODULE_1__/* .Room */ .Wv(roomId, this.client, this.client.getUserId(), {
      lazyLoadMembers: this.opts.lazyLoadMembers,
      pendingEventOrdering: this.opts.pendingEventOrdering,
      timelineSupport
    });
    this.client.reEmitter.reEmit(room, [_models_room_ts__WEBPACK_IMPORTED_MODULE_1__/* .RoomEvent */ .u9.Name, _models_room_ts__WEBPACK_IMPORTED_MODULE_1__/* .RoomEvent */ .u9.Redaction, _models_room_ts__WEBPACK_IMPORTED_MODULE_1__/* .RoomEvent */ .u9.RedactionCancelled, _models_room_ts__WEBPACK_IMPORTED_MODULE_1__/* .RoomEvent */ .u9.Receipt, _models_room_ts__WEBPACK_IMPORTED_MODULE_1__/* .RoomEvent */ .u9.Tags, _models_room_ts__WEBPACK_IMPORTED_MODULE_1__/* .RoomEvent */ .u9.LocalEchoUpdated, _models_room_ts__WEBPACK_IMPORTED_MODULE_1__/* .RoomEvent */ .u9.AccountData, _models_room_ts__WEBPACK_IMPORTED_MODULE_1__/* .RoomEvent */ .u9.MyMembership, _models_room_ts__WEBPACK_IMPORTED_MODULE_1__/* .RoomEvent */ .u9.Timeline, _models_room_ts__WEBPACK_IMPORTED_MODULE_1__/* .RoomEvent */ .u9.TimelineReset]);
    this.registerStateListeners(room);
    return room;
  }
  registerStateListeners(room) {
    // XXX cargoculted from sync.ts
    // we need to also re-emit room state and room member events, so hook it up
    // to the client now. We need to add a listener for RoomState.members in
    // order to hook them correctly.
    this.client.reEmitter.reEmit(room.currentState, [_models_room_state_ts__WEBPACK_IMPORTED_MODULE_10__/* .RoomStateEvent */ .f.Events, _models_room_state_ts__WEBPACK_IMPORTED_MODULE_10__/* .RoomStateEvent */ .f.Members, _models_room_state_ts__WEBPACK_IMPORTED_MODULE_10__/* .RoomStateEvent */ .f.NewMember, _models_room_state_ts__WEBPACK_IMPORTED_MODULE_10__/* .RoomStateEvent */ .f.Update]);
    room.currentState.on(_models_room_state_ts__WEBPACK_IMPORTED_MODULE_10__/* .RoomStateEvent */ .f.NewMember, (event, state, member) => {
      var _this$client$getUser;
      member.user = (_this$client$getUser = this.client.getUser(member.userId)) !== null && _this$client$getUser !== void 0 ? _this$client$getUser : undefined;
      this.client.reEmitter.reEmit(member, [_models_room_member_ts__WEBPACK_IMPORTED_MODULE_11__/* .RoomMemberEvent */ .o5.Name, _models_room_member_ts__WEBPACK_IMPORTED_MODULE_11__/* .RoomMemberEvent */ .o5.Typing, _models_room_member_ts__WEBPACK_IMPORTED_MODULE_11__/* .RoomMemberEvent */ .o5.PowerLevel, _models_room_member_ts__WEBPACK_IMPORTED_MODULE_11__/* .RoomMemberEvent */ .o5.Membership]);
    });
  }

  /*
  private deregisterStateListeners(room: Room): void { // XXX cargoculted from sync.ts
      // could do with a better way of achieving this.
      room.currentState.removeAllListeners(RoomStateEvent.Events);
      room.currentState.removeAllListeners(RoomStateEvent.Members);
      room.currentState.removeAllListeners(RoomStateEvent.NewMember);
  } */

  shouldAbortSync(error) {
    if (error.errcode === "M_UNKNOWN_TOKEN") {
      // The logout already happened, we just need to stop.
      this.syncOpts.logger.warn("Token no longer valid - assuming logout");
      this.stop();
      this.updateSyncState(_sync_ts__WEBPACK_IMPORTED_MODULE_6__/* .SyncState */ .Lm.Error, {
        error
      });
      return true;
    }
    return false;
  }
  async processRoomData(client, room, roomData) {
    roomData = ensureNameEvent(client, room.roomId, roomData);
    const stateEvents = mapEvents(this.client, room.roomId, roomData.required_state);
    // Prevent events from being decrypted ahead of time
    // this helps large account to speed up faster
    // room::decryptCriticalEvent is in charge of decrypting all the events
    // required for a client to function properly
    let timelineEvents = mapEvents(this.client, room.roomId, roomData.timeline, false);
    const ephemeralEvents = []; // TODO this.mapSyncEventsFormat(joinObj.ephemeral);

    // TODO: handle threaded / beacon events

    // The timeline may contain events which predate ones we already have: when it is `limited`, when the server
    // is resending the room as `initial`, or when it is `expanded_timeline` because the `timeline_limit` for the
    // room increased (e.g. requesting timeline_limit: 1 for this room, then timeline_limit: 50). Servers do not
    // necessarily set `initial` in the latter case, so without checking `expanded_timeline` the older events would
    // be appended after the newer ones we already have.
    const expandedTimeline = roomData.expanded_timeline || roomData.unstable_expanded_timeline;
    if (roomData.limited || roomData.initial || expandedTimeline) {
      // we should not know about any of these timeline entries if this is a genuinely new room.
      // If we do, then we've effectively done scrollback.
      const knownEvents = new Set();
      room.getLiveTimeline().getEvents().forEach(e => {
        knownEvents.add(e.getId());
      });
      // all unknown events BEFORE a known event must be scrollback e.g:
      //       D E   <-- what we know
      // A B C D E F <-- what we just received
      // means:
      // A B C       <-- scrollback
      //       D E   <-- dupes
      //           F <-- new event
      // We bucket events based on if we have seen a known event yet.
      const oldEvents = [];
      const newEvents = [];
      let seenKnownEvent = false;
      for (let i = timelineEvents.length - 1; i >= 0; i--) {
        const recvEvent = timelineEvents[i];
        if (knownEvents.has(recvEvent.getId())) {
          seenKnownEvent = true;
          continue; // don't include this event, it's a dupe
        }
        if (seenKnownEvent) {
          // old -> new
          oldEvents.push(recvEvent);
        } else {
          // old -> new
          newEvents.unshift(recvEvent);
        }
      }
      timelineEvents = newEvents;
      if (oldEvents.length > 0) {
        // old events are scrollback, insert them now
        room.addEventsToTimeline(oldEvents, true, false, room.getLiveTimeline(), roomData.prev_batch);
      }
    }
    const encrypted = room.hasEncryptionStateEvent();
    // we do this first so it's correct when any of the events fire
    if (roomData.notification_count != null) {
      room.setUnreadNotificationCount(_models_room_ts__WEBPACK_IMPORTED_MODULE_1__/* .NotificationCountType */ .X5.Total, roomData.notification_count);
    }
    if (roomData.highlight_count != null) {
      // We track unread notifications ourselves in encrypted rooms, so don't
      // bother setting it here. We trust our calculations better than the
      // server's for this case, and therefore will assume that our non-zero
      // count is accurate.
      if (!encrypted || encrypted && room.getUnreadNotificationCount(_models_room_ts__WEBPACK_IMPORTED_MODULE_1__/* .NotificationCountType */ .X5.Highlight) <= 0) {
        room.setUnreadNotificationCount(_models_room_ts__WEBPACK_IMPORTED_MODULE_1__/* .NotificationCountType */ .X5.Highlight, roomData.highlight_count);
      }
    }
    if (roomData.bump_stamp) {
      room.setBumpStamp(roomData.bump_stamp);
    }
    if (Number.isInteger(roomData.invited_count)) {
      room.currentState.setInvitedMemberCount(roomData.invited_count);
    }
    if (Number.isInteger(roomData.joined_count)) {
      room.currentState.setJoinedMemberCount(roomData.joined_count);
    }
    if (roomData.invite_state) {
      const inviteStateEvents = mapEvents(this.client, room.roomId, roomData.invite_state);
      await this.injectRoomEvents(room, inviteStateEvents);
      if (roomData.initial) {
        room.recalculate();
        this.client.store.storeRoom(room);
        this.client.emit(_client_ts__WEBPACK_IMPORTED_MODULE_5__/* .ClientEvent */ .AU.Room, room);
      }
      inviteStateEvents.forEach(e => {
        this.client.emit(_client_ts__WEBPACK_IMPORTED_MODULE_5__/* .ClientEvent */ .AU.Event, e);
      });
      return;
    }
    if (roomData.limited) {
      var _roomData$prev_batch;
      // set the back-pagination token. Do this *before* adding any
      // events so that clients can start back-paginating.
      room.getLiveTimeline().setPaginationToken((_roomData$prev_batch = roomData.prev_batch) !== null && _roomData$prev_batch !== void 0 ? _roomData$prev_batch : null, _models_event_timeline_ts__WEBPACK_IMPORTED_MODULE_4__/* .EventTimeline */ .q.BACKWARDS);
    }

    /* TODO
    else if (roomData.limited) {
         let limited = true;
         // we've got a limited sync, so we *probably* have a gap in the
        // timeline, so should reset. But we might have been peeking or
        // paginating and already have some of the events, in which
        // case we just want to append any subsequent events to the end
        // of the existing timeline.
        //
        // This is particularly important in the case that we already have
        // *all* of the events in the timeline - in that case, if we reset
        // the timeline, we'll end up with an entirely empty timeline,
        // which we'll try to paginate but not get any new events (which
        // will stop us linking the empty timeline into the chain).
        //
        for (let i = timelineEvents.length - 1; i >= 0; i--) {
            const eventId = timelineEvents[i].getId();
            if (room.getTimelineForEvent(eventId)) {
                this.syncOpts.logger.debug("Already have event " + eventId + " in limited " +
                    "sync - not resetting");
                limited = false;
                 // we might still be missing some of the events before i;
                // we don't want to be adding them to the end of the
                // timeline because that would put them out of order.
                timelineEvents.splice(0, i);
                 // XXX: there's a problem here if the skipped part of the
                // timeline modifies the state set in stateEvents, because
                // we'll end up using the state from stateEvents rather
                // than the later state from timelineEvents. We probably
                // need to wind stateEvents forward over the events we're
                // skipping.
                break;
            }
        }
         if (limited) {
            room.resetLiveTimeline(
                roomData.prev_batch,
                null, // TODO this.syncOpts.canResetEntireTimeline(room.roomId) ? null : syncEventData.oldSyncToken,
            );
             // We have to assume any gap in any timeline is
            // reason to stop incrementally tracking notifications and
            // reset the timeline.
            this.client.resetNotifTimelineSet();
            this.registerStateListeners(room);
        }
    } */

    await this.injectRoomEvents(room, stateEvents, timelineEvents, roomData.num_live);

    // we deliberately don't add ephemeral events to the timeline
    room.addEphemeralEvents(ephemeralEvents);

    // local fields must be set before any async calls because call site assumes
    // synchronous execution prior to emitting SlidingSyncState.Complete
    room.updateMyMembership(_types_membership_ts__WEBPACK_IMPORTED_MODULE_12__/* .KnownMembership */ .O.Join);
    room.setMSC4186SummaryData(roomData.heroes, roomData.joined_count, roomData.invited_count);

    // The MSC4480 extension excludes sticky events already present in the timeline, so we have
    // to pick those up here. See ExtensionStickyEvents for the rest.
    room._unstable_addStickyEvents(timelineEvents.filter(e => e.unstableStickyInfo !== undefined));
    room.recalculate();
    if (roomData.initial) {
      client.store.storeRoom(room);
      client.emit(_client_ts__WEBPACK_IMPORTED_MODULE_5__/* .ClientEvent */ .AU.Room, room);
    }

    // check if any timeline events should bing and add them to the notifEvents array:
    // we'll purge this once we've fully processed the sync response
    this.addNotifications(timelineEvents);
    const processRoomEvent = async e => {
      client.emit(_client_ts__WEBPACK_IMPORTED_MODULE_5__/* .ClientEvent */ .AU.Event, e);
      if (e.isState() && e.getType() == _types_event_ts__WEBPACK_IMPORTED_MODULE_9__/* .EventType */ .Bx.RoomEncryption && this.syncOpts.cryptoCallbacks) {
        await this.syncOpts.cryptoCallbacks.onCryptoEvent(room, e);
      }
    };
    await (0,_utils_ts__WEBPACK_IMPORTED_MODULE_3__/* .promiseMapSeries */ .d8)(stateEvents, processRoomEvent);
    await (0,_utils_ts__WEBPACK_IMPORTED_MODULE_3__/* .promiseMapSeries */ .d8)(timelineEvents, processRoomEvent);
    ephemeralEvents.forEach(function (e) {
      client.emit(_client_ts__WEBPACK_IMPORTED_MODULE_5__/* .ClientEvent */ .AU.Event, e);
    });

    // Decrypt only the last message in all rooms to make sure we can generate a preview
    // And decrypt all events after the recorded read receipt to ensure an accurate
    // notification count
    room.decryptCriticalEvents();
  }

  /**
   * Injects events into a room's model.
   * @param stateEventList - A list of state events. This is the state
   * at the *END* of the timeline list if it is supplied.
   * @param timelineEventList - A list of timeline events. Lower index
   * is earlier in time. Higher index is later.
   * @param numLive - the number of events in timelineEventList which just happened,
   * supplied from the server.
   */
  async injectRoomEvents(room, stateEventList, timelineEventList = [], numLive = 0) {
    // If there are no events in the timeline yet, initialise it with
    // the given state events
    const liveTimeline = room.getLiveTimeline();
    const timelineWasEmpty = liveTimeline.getEvents().length == 0;
    if (timelineWasEmpty) {
      // Passing these events into initialiseState will freeze them, so we need
      // to compute and cache the push actions for them now, otherwise sync dies
      // with an attempt to assign to read only property.
      // XXX: This is pretty horrible and is assuming all sorts of behaviour from
      // these functions that it shouldn't be. We should probably either store the
      // push actions cache elsewhere so we can freeze MatrixEvents, or otherwise
      // find some solution where MatrixEvents are immutable but allow for a cache
      // field.
      for (const ev of stateEventList) {
        this.client.getPushActionsForEvent(ev);
      }
      liveTimeline.initialiseState(stateEventList);
    }

    // If the timeline wasn't empty, we process the state events here: they're
    // defined as updates to the state before the start of the timeline, so this
    // starts to roll the state forward.
    // XXX: That's what we *should* do, but this can happen if we were previously
    // peeking in a room, in which case we obviously do *not* want to add the
    // state events here onto the end of the timeline. Historically, the js-sdk
    // has just set these new state events on the old and new state. This seems
    // very wrong because there could be events in the timeline that diverge the
    // state, in which case this is going to leave things out of sync. However,
    // for now I think it;s best to behave the same as the code has done previously.
    if (!timelineWasEmpty) {
      // XXX: As above, don't do this...
      //room.addLiveEvents(stateEventList || []);
      // Do this instead...
      room.oldState.setStateEvents(stateEventList);
      room.currentState.setStateEvents(stateEventList);
    }

    // the timeline is broken into 'live' events which just happened and normal timeline events
    // which are still to be appended to the end of the live timeline but happened a while ago.
    // The live events are marked as fromCache=false to ensure that downstream components know
    // this is a live event, not historical (from a remote server cache).

    let liveTimelineEvents = [];
    if (numLive > 0) {
      // last numLive events are live
      liveTimelineEvents = timelineEventList.slice(-1 * numLive);
      // everything else is not live
      timelineEventList = timelineEventList.slice(0, -1 * liveTimelineEvents.length);
    }

    // Execute the timeline events.
    // This also needs to be done before running push rules on the events as they need
    // to be decorated with sender etc.
    await room.addLiveEvents(timelineEventList, {
      fromCache: true,
      addToState: false
    });
    if (liveTimelineEvents.length > 0) {
      await room.addLiveEvents(liveTimelineEvents, {
        fromCache: false,
        addToState: false
      });
    }
    room.recalculate();

    // resolve invites now we have set the latest state
    this.resolveInvites(room);
  }
  resolveInvites(room) {
    if (!room || !this.opts.resolveInvitesToProfiles) {
      return;
    }
    const client = this.client;
    // For each invited room member we want to give them a displayname/avatar url
    // if they have one (the m.room.member invites don't contain this).
    room.getMembersWithMembership(_types_membership_ts__WEBPACK_IMPORTED_MODULE_12__/* .KnownMembership */ .O.Invite).forEach(function (member) {
      if (member.requestedProfileInfo) return;
      member.requestedProfileInfo = true;
      // try to get a cached copy first.
      const user = client.getUser(member.userId);
      let promise;
      if (user) {
        promise = Promise.resolve({
          avatar_url: user.avatarUrl,
          displayname: user.displayName
        });
      } else {
        promise = client.getProfileInfo(member.userId);
      }
      promise.then(function (info) {
        // slightly naughty by doctoring the invite event but this means all
        // the code paths remain the same between invite/join display name stuff
        // which is a worthy trade-off for some minor pollution.
        const inviteEvent = member.events.member;
        if (inviteEvent.getContent().membership !== _types_membership_ts__WEBPACK_IMPORTED_MODULE_12__/* .KnownMembership */ .O.Invite) {
          // between resolving and now they have since joined, so don't clobber
          return;
        }
        inviteEvent.getContent().avatar_url = info.avatar_url;
        inviteEvent.getContent().displayname = info.displayname;
        // fire listeners
        member.setMembershipEvent(inviteEvent, room.currentState);
      }, function (_err) {
        // OH WELL.
      });
    });
  }
  retryImmediately() {
    return true;
  }

  /**
   * Main entry point. Blocks until stop() is called.
   */
  async sync() {
    this.syncOpts.logger.debug("Sliding sync init loop");

    //   1) We need to get push rules so we can check if events should bing as we get
    //      them from /sync.
    while (!this.client.isGuest()) {
      try {
        this.syncOpts.logger.debug("Getting push rules...");
        const result = await this.client.getPushRules();
        this.syncOpts.logger.debug("Got push rules");
        this.client.pushRules = result;
        break;
      } catch (err) {
        this.syncOpts.logger.error("Getting push rules failed", err);
        if (this.shouldAbortSync(err)) {
          return;
        }
      }
    }

    // start syncing
    await this.slidingSync.start();
  }

  /**
   * Stops the sync object from syncing.
   */
  stop() {
    this.syncOpts.logger.debug("SyncApi.stop");
    this.slidingSync.stop();
  }

  /**
   * Sets the sync state and emits an event to say so
   * @param newState - The new state string
   * @param data - Object of additional data to emit in the event
   */
  updateSyncState(newState, data) {
    const old = this.syncState;
    this.syncState = newState;
    this.syncStateData = data;
    this.client.emit(_client_ts__WEBPACK_IMPORTED_MODULE_5__/* .ClientEvent */ .AU.Sync, this.syncState, old, data);
  }

  /**
   * Takes a list of timelineEvents and adds and adds to notifEvents
   * as appropriate.
   * This must be called after the room the events belong to has been stored.
   *
   * @param timelineEventList - A list of timeline events. Lower index
   * is earlier in time. Higher index is later.
   */
  addNotifications(timelineEventList) {
    // gather our notifications into this.notifEvents
    if (!this.client.getNotifTimelineSet()) {
      return;
    }
    for (const timelineEvent of timelineEventList) {
      const pushActions = this.client.getPushActionsForEvent(timelineEvent);
      if (pushActions && pushActions.notify && pushActions.tweaks && pushActions.tweaks.highlight) {
        this.notifEvents.push(timelineEvent);
      }
    }
  }

  /**
   * Purge any events in the notifEvents array. Used after a /sync has been complete.
   * This should not be called at a per-room scope (e.g in onRoomData) because otherwise the ordering
   * will be messed up e.g room A gets a bing, room B gets a newer bing, but both in the same /sync
   * response. If we purge at a per-room scope then we could process room B before room A leading to
   * room B appearing earlier in the notifications timeline, even though it has the higher origin_server_ts.
   */
  purgeNotifications() {
    this.notifEvents.sort(function (a, b) {
      return a.getTs() - b.getTs();
    });
    this.notifEvents.forEach(event => {
      var _this$client$getNotif;
      (_this$client$getNotif = this.client.getNotifTimelineSet()) === null || _this$client$getNotif === void 0 || _this$client$getNotif.addLiveEvent(event, {
        addToState: false
      });
    });
    this.notifEvents = [];
  }
}
function ensureNameEvent(client, roomId, roomData) {
  // make sure m.room.name is in required_state if there is a name, replacing anything previously
  // there if need be. This ensures clients transparently 'calculate' the right room name. Native
  // sliding sync clients should just read the "name" field.
  if (!roomData.name) {
    return roomData;
  }
  for (const stateEvent of roomData.required_state) {
    if (stateEvent.type === _types_event_ts__WEBPACK_IMPORTED_MODULE_9__/* .EventType */ .Bx.RoomName && stateEvent.state_key === "") {
      stateEvent.content = {
        name: roomData.name
      };
      return roomData;
    }
  }
  roomData.required_state.push({
    event_id: "$fake-sliding-sync-name-event-" + roomId,
    state_key: "",
    type: _types_event_ts__WEBPACK_IMPORTED_MODULE_9__/* .EventType */ .Bx.RoomName,
    content: {
      name: roomData.name
    },
    sender: client.getUserId(),
    origin_server_ts: new Date().getTime()
  });
  return roomData;
}
// Helper functions which set up JS SDK structs are below and are identical to the sync v2 counterparts,
// just outside the class.
function mapEvents(client, roomId, events, decrypt = true) {
  const mapper = client.getEventMapper({
    decrypt
  });
  return events.map(function (e) {
    e.room_id = roomId;
    return mapper(e);
  });
}
function processEphemeralEvents(client, roomId, ephEvents) {
  const ephemeralEvents = mapEvents(client, roomId, ephEvents);
  const room = client.getRoom(roomId);
  if (!room) {
    _logger_ts__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .vF.warn("got ephemeral events for room but room doesn't exist on client:", roomId);
    return;
  }
  room.addEphemeralEvents(ephemeralEvents);
  ephemeralEvents.forEach(e => {
    client.emit(_client_ts__WEBPACK_IMPORTED_MODULE_5__/* .ClientEvent */ .AU.Event, e);
  });
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/store/indexeddb-local-backend.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ LocalIndexedDBStoreBackend)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _sync_accumulator_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/sync-accumulator.ts");
/* harmony import */ var _utils_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/utils.ts");
/* harmony import */ var _indexeddb_helpers_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/indexeddb-helpers.ts");
/* harmony import */ var _logger_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts");

/*
Copyright 2017 - 2021 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/





const DB_MIGRATIONS = [db => {
  // Make user store, clobber based on user ID. (userId property of User objects)
  db.createObjectStore("users", {
    keyPath: ["userId"]
  });

  // Make account data store, clobber based on event type.
  // (event.type property of MatrixEvent objects)
  db.createObjectStore("accountData", {
    keyPath: ["type"]
  });

  // Make /sync store (sync tokens, room data, etc), always clobber (const key).
  db.createObjectStore("sync", {
    keyPath: ["clobber"]
  });
}, db => {
  const oobMembersStore = db.createObjectStore("oob_membership_events", {
    keyPath: ["room_id", "state_key"]
  });
  oobMembersStore.createIndex("room", "room_id");
}, db => {
  db.createObjectStore("client_options", {
    keyPath: ["clobber"]
  });
}, db => {
  db.createObjectStore("to_device_queue", {
    autoIncrement: true
  });
}, db => {
  db.createObjectStore("user_profile", {
    keyPath: ["userId"]
  });
}
// Expand as needed.
];
const VERSION = DB_MIGRATIONS.length;

/**
 * Helper method to collect results from a Cursor and promiseify it.
 * @param store - The store to perform openCursor on.
 * @param keyRange - Optional key range to apply on the cursor.
 * @param resultMapper - A function which is repeatedly called with a
 * Cursor.
 * Return the data you want to keep.
 * @returns Promise which resolves to an array of whatever you returned from
 * resultMapper.
 * @throws If there was an error completing the query.
 */
function selectQuery(store, keyRange, resultMapper) {
  const query = store.openCursor(keyRange);
  return new Promise((resolve, reject) => {
    const results = [];
    query.onerror = () => {
      reject(new Error(`selectQuery failed for ${store.name}`, {
        cause: query.error
      }));
    };
    // collect results
    query.onsuccess = () => {
      const cursor = query.result;
      if (!cursor) {
        resolve(results);
        return; // end of results
      }
      results.push(resultMapper(cursor));
      cursor.continue();
    };
  });
}
function txnAsPromise(txn) {
  return new Promise((resolve, reject) => {
    txn.oncomplete = function (event) {
      resolve(event);
    };
    txn.onerror = function () {
      reject(txn.error);
    };
  });
}
function reqAsEventPromise(req) {
  return new Promise((resolve, reject) => {
    req.onsuccess = function (event) {
      resolve(event);
    };
    req.onerror = function () {
      reject(req.error);
    };
  });
}
function reqAsPromise(req) {
  return new Promise((resolve, reject) => {
    req.onsuccess = () => resolve(req);
    req.onerror = err => reject(err);
  });
}
function reqAsCursorPromise(req) {
  return reqAsEventPromise(req).then(event => req.result);
}
class LocalIndexedDBStoreBackend {
  static exists(indexedDB, dbName) {
    dbName = "matrix-js-sdk:" + (dbName || "default");
    return (0,_indexeddb_helpers_ts__WEBPACK_IMPORTED_MODULE_3__/* .exists */ .t)(indexedDB, dbName);
  }
  /**
   * Does the actual reading from and writing to the indexeddb
   *
   * Construct a new Indexed Database store backend. This requires a call to
   * `connect()` before this store can be used.
   * @param indexedDB - The Indexed DB interface e.g
   * `window.indexedDB`
   * @param dbName - Optional database name. The same name must be used
   * to open the same database.
   */
  constructor(indexedDB, dbName = "default") {
    ;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "dbName", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "syncAccumulator", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "db", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "disconnected", true);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "_isNewlyCreated", false);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "syncToDatabasePromise", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "pendingUserPresenceData", []);
    this.indexedDB = indexedDB;
    this.dbName = "matrix-js-sdk:" + dbName;
    this.syncAccumulator = new _sync_accumulator_ts__WEBPACK_IMPORTED_MODULE_1__/* .SyncAccumulator */ .w();
  }

  /**
   * Attempt to connect to the database. This can fail if the user does not
   * grant permission.
   * @returns Promise which resolves if successfully connected.
   */
  connect(onClose) {
    if (!this.disconnected) {
      _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.log(`LocalIndexedDBStoreBackend.connect: already connected or connecting`);
      return Promise.resolve();
    }
    this.disconnected = false;
    _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.log(`LocalIndexedDBStoreBackend.connect: connecting...`);
    const req = this.indexedDB.open(this.dbName, VERSION);
    req.onupgradeneeded = ev => {
      const db = req.result;
      const oldVersion = ev.oldVersion;
      _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.log(`LocalIndexedDBStoreBackend.connect: upgrading from ${oldVersion}`);
      if (oldVersion < 1) {
        // The database did not previously exist
        this._isNewlyCreated = true;
      }
      DB_MIGRATIONS.forEach((migration, index) => {
        if (oldVersion <= index) migration(db);
      });
    };
    req.onblocked = () => {
      _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.log(`can't yet open LocalIndexedDBStoreBackend because it is open elsewhere`);
    };
    _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.log(`LocalIndexedDBStoreBackend.connect: awaiting connection...`);
    return reqAsEventPromise(req).then(async () => {
      _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.log(`LocalIndexedDBStoreBackend.connect: connected`);
      this.db = req.result;

      // add a poorly-named listener for when deleteDatabase is called
      // so we can close our db connections.
      this.db.onversionchange = () => {
        var _this$db;
        (_this$db = this.db) === null || _this$db === void 0 || _this$db.close(); // this does not call onclose
        this.disconnected = true;
        this.db = undefined;
      };
      this.db.onclose = () => {
        this.disconnected = true;
        this.db = undefined;
        onClose === null || onClose === void 0 || onClose();
      };
      await this.init();
    });
  }

  /** @returns whether or not the database was newly created in this session. */
  isNewlyCreated() {
    return Promise.resolve(this._isNewlyCreated);
  }

  /**
   * Having connected, load initial data from the database and prepare for use
   * @returns Promise which resolves on success
   */
  init() {
    return Promise.all([this.loadAccountData(), this.loadSyncData()]).then(([accountData, syncData]) => {
      _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.log(`LocalIndexedDBStoreBackend: loaded initial data`);
      this.syncAccumulator.accumulate({
        next_batch: syncData.nextBatch,
        rooms: syncData.roomsData,
        account_data: {
          events: accountData
        }
      }, true);
    });
  }

  /**
   * Returns the out-of-band membership events for this room that
   * were previously loaded.
   * @returns the events, potentially an empty array if OOB loading didn't yield any new members
   * @returns in case the members for this room haven't been stored yet
   */
  getOutOfBandMembers(roomId) {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(["oob_membership_events"], "readonly");
      const store = tx.objectStore("oob_membership_events");
      const roomIndex = store.index("room");
      const range = IDBKeyRange.only(roomId);
      const request = roomIndex.openCursor(range);
      const membershipEvents = [];
      // did we encounter the oob_written marker object
      // amongst the results? That means OOB member
      // loading already happened for this room
      // but there were no members to persist as they
      // were all known already
      let oobWritten = false;
      request.onsuccess = () => {
        const cursor = request.result;
        if (!cursor) {
          // Unknown room
          if (!membershipEvents.length && !oobWritten) {
            return resolve(null);
          }
          return resolve(membershipEvents);
        }
        const record = cursor.value;
        if (record.oob_written) {
          oobWritten = true;
        } else {
          membershipEvents.push(record);
        }
        cursor.continue();
      };
      request.onerror = err => {
        reject(err);
      };
    }).then(events => {
      _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.log(`LL: got ${events === null || events === void 0 ? void 0 : events.length} membershipEvents from storage for room ${roomId} ...`);
      return events;
    });
  }

  /**
   * Stores the out-of-band membership events for this room. Note that
   * it still makes sense to store an empty array as the OOB status for the room is
   * marked as fetched, and getOutOfBandMembers will return an empty array instead of null
   * @param membershipEvents - the membership events to store
   */
  async setOutOfBandMembers(roomId, membershipEvents) {
    _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.log(`LL: backend about to store ${membershipEvents.length} members for ${roomId}`);
    const tx = this.db.transaction(["oob_membership_events"], "readwrite");
    const store = tx.objectStore("oob_membership_events");
    membershipEvents.forEach(e => {
      store.put(e);
    });
    // aside from all the events, we also write a marker object to the store
    // to mark the fact that OOB members have been written for this room.
    // It's possible that 0 members need to be written as all where previously know
    // but we still need to know whether to return null or [] from getOutOfBandMembers
    // where null means out of band members haven't been stored yet for this room
    const markerObject = {
      room_id: roomId,
      oob_written: true,
      state_key: 0
    };
    store.put(markerObject);
    await txnAsPromise(tx);
    _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.log(`LL: backend done storing for ${roomId}!`);
  }
  async clearOutOfBandMembers(roomId) {
    // the approach to delete all members for a room
    // is to get the min and max state key from the index
    // for that room, and then delete between those
    // keys in the store.
    // this should be way faster than deleting every member
    // individually for a large room.
    const readTx = this.db.transaction(["oob_membership_events"], "readonly");
    const store = readTx.objectStore("oob_membership_events");
    const roomIndex = store.index("room");
    const roomRange = IDBKeyRange.only(roomId);
    const minStateKeyProm = reqAsCursorPromise(roomIndex.openKeyCursor(roomRange, "next")).then(cursor => {
      var _cursor$primaryKey;
      return cursor === null || cursor === void 0 || (_cursor$primaryKey = cursor.primaryKey) === null || _cursor$primaryKey === void 0 ? void 0 : _cursor$primaryKey[1];
    });
    const maxStateKeyProm = reqAsCursorPromise(roomIndex.openKeyCursor(roomRange, "prev")).then(cursor => {
      var _cursor$primaryKey2;
      return cursor === null || cursor === void 0 || (_cursor$primaryKey2 = cursor.primaryKey) === null || _cursor$primaryKey2 === void 0 ? void 0 : _cursor$primaryKey2[1];
    });
    const [minStateKey, maxStateKey] = await Promise.all([minStateKeyProm, maxStateKeyProm]);
    const writeTx = this.db.transaction(["oob_membership_events"], "readwrite");
    const writeStore = writeTx.objectStore("oob_membership_events");
    const membersKeyRange = IDBKeyRange.bound([roomId, minStateKey], [roomId, maxStateKey]);
    _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.log(`LL: Deleting all users + marker in storage for room ${roomId}, with key range:`, [roomId, minStateKey], [roomId, maxStateKey]);
    await reqAsPromise(writeStore.delete(membersKeyRange));
  }

  /**
   * Clear the entire database. This should be used when logging out of a client
   * to prevent mixing data between accounts. Closes the database.
   * @returns Resolved when the database is cleared.
   */
  clearDatabase() {
    return new Promise(resolve => {
      var _this$db2;
      _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.log(`Removing indexeddb instance: ${this.dbName}`);

      // Close the database first to avoid firing unexpected close events
      (_this$db2 = this.db) === null || _this$db2 === void 0 || _this$db2.close();
      const req = this.indexedDB.deleteDatabase(this.dbName);
      req.onblocked = () => {
        _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.log(`can't yet delete indexeddb ${this.dbName} because it is open elsewhere`);
      };
      req.onerror = () => {
        var _req$error;
        // in firefox, with indexedDB disabled, this fails with a
        // DOMError. We treat this as non-fatal, so that we can still
        // use the app.
        _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.warn(`unable to delete js-sdk store indexeddb: ${(_req$error = req.error) === null || _req$error === void 0 ? void 0 : _req$error.name}`);
        resolve();
      };
      req.onsuccess = () => {
        _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.log(`Removed indexeddb instance: ${this.dbName}`);
        resolve();
      };
    });
  }

  /**
   * @param copy - If false, the data returned is from internal
   * buffers and must not be mutated. Otherwise, a copy is made before
   * returning such that the data can be safely mutated. Default: true.
   *
   * @returns Promise which resolves with a sync response to restore the
   * client state to where it was at the last save, or null if there
   * is no saved sync data.
   */
  getSavedSync(copy = true) {
    const data = this.syncAccumulator.getJSON();
    if (!data.nextBatch) return Promise.resolve(null);
    if (copy) {
      // We must deep copy the stored data so that the /sync processing code doesn't
      // corrupt the internal state of the sync accumulator (it adds non-clonable keys)
      return Promise.resolve((0,_utils_ts__WEBPACK_IMPORTED_MODULE_2__/* .deepCopy */ .A4)(data));
    } else {
      return Promise.resolve(data);
    }
  }
  getNextBatchToken() {
    return Promise.resolve(this.syncAccumulator.getNextBatchToken());
  }
  setSyncData(syncData) {
    return Promise.resolve().then(() => {
      this.syncAccumulator.accumulate(syncData);
    });
  }

  /**
   * Sync users and all accumulated sync data to the database.
   * If a previous sync is in flight, the new data will be added to the
   * next sync and the current sync's promise will be returned.
   * @param userTuples - The user tuples
   * @returns Promise which resolves if the data was persisted.
   */
  async syncToDatabase(userTuples) {
    if (this.syncToDatabasePromise) {
      _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.warn("Skipping syncToDatabase() as persist already in flight");
      this.pendingUserPresenceData.push(...userTuples);
      return this.syncToDatabasePromise;
    }
    userTuples.unshift(...this.pendingUserPresenceData);
    this.syncToDatabasePromise = this.doSyncToDatabase(userTuples);
    return this.syncToDatabasePromise;
  }
  async doSyncToDatabase(userTuples) {
    try {
      const syncData = this.syncAccumulator.getJSON(true);
      await Promise.all([this.persistUserPresenceEvents(userTuples), this.persistAccountData(syncData.accountData), this.persistSyncData(syncData.nextBatch, syncData.roomsData)]);
    } finally {
      this.syncToDatabasePromise = undefined;
    }
  }

  /**
   * Persist rooms /sync data along with the next batch token.
   * @param nextBatch - The next_batch /sync value.
   * @param roomsData - The 'rooms' /sync data from a SyncAccumulator
   * @returns Promise which resolves if the data was persisted.
   */
  persistSyncData(nextBatch, roomsData) {
    _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.log("Persisting sync data up to", nextBatch);
    return (0,_utils_ts__WEBPACK_IMPORTED_MODULE_2__/* .promiseTry */ .j0)(() => {
      const txn = this.db.transaction(["sync"], "readwrite");
      const store = txn.objectStore("sync");
      store.put({
        clobber: "-",
        // constant key so will always clobber
        nextBatch,
        roomsData
      }); // put == UPSERT
      return txnAsPromise(txn).then(() => {
        _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.log("Persisted sync data up to", nextBatch);
      });
    });
  }

  /**
   * Persist a list of account data events. Events with the same 'type' will
   * be replaced.
   * @param accountData - An array of raw user-scoped account data events
   * @returns Promise which resolves if the events were persisted.
   */
  persistAccountData(accountData) {
    return (0,_utils_ts__WEBPACK_IMPORTED_MODULE_2__/* .promiseTry */ .j0)(() => {
      const txn = this.db.transaction(["accountData"], "readwrite");
      const store = txn.objectStore("accountData");
      for (const event of accountData) {
        store.put(event); // put == UPSERT
      }
      return txnAsPromise(txn).then();
    });
  }

  /**
   * Persist a list of [user id, presence event] they are for.
   * Users with the same 'userId' will be replaced.
   * Presence events should be the event in its raw form (not the Event
   * object)
   * @param tuples - An array of [userid, event] tuples
   * @returns Promise which resolves if the users were persisted.
   */
  persistUserPresenceEvents(tuples) {
    return (0,_utils_ts__WEBPACK_IMPORTED_MODULE_2__/* .promiseTry */ .j0)(() => {
      const txn = this.db.transaction(["users"], "readwrite");
      const store = txn.objectStore("users");
      for (const tuple of tuples) {
        store.put({
          userId: tuple[0],
          event: tuple[1]
        }); // put == UPSERT
      }
      return txnAsPromise(txn).then();
    });
  }

  /**
   * Load all user presence events from the database. This is not cached.
   * FIXME: It would probably be more sensible to store the events in the
   * sync.
   * @returns A list of presence events in their raw form.
   */
  getUserPresenceEvents() {
    return (0,_utils_ts__WEBPACK_IMPORTED_MODULE_2__/* .promiseTry */ .j0)(() => {
      const txn = this.db.transaction(["users"], "readonly");
      const store = txn.objectStore("users");
      return selectQuery(store, undefined, cursor => {
        return [cursor.value.userId, cursor.value.event];
      });
    });
  }

  /**
   * Load all the account data events from the database. This is not cached.
   * @returns A list of raw global account events.
   */
  loadAccountData() {
    _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.log(`LocalIndexedDBStoreBackend: loading account data...`);
    return (0,_utils_ts__WEBPACK_IMPORTED_MODULE_2__/* .promiseTry */ .j0)(() => {
      const txn = this.db.transaction(["accountData"], "readonly");
      const store = txn.objectStore("accountData");
      return selectQuery(store, undefined, cursor => {
        return cursor.value;
      }).then(result => {
        _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.log(`LocalIndexedDBStoreBackend: loaded account data`);
        return result;
      });
    });
  }

  /**
   * Load the sync data from the database.
   * @returns An object with "roomsData" and "nextBatch" keys.
   */
  loadSyncData() {
    _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.log(`LocalIndexedDBStoreBackend: loading sync data...`);
    return (0,_utils_ts__WEBPACK_IMPORTED_MODULE_2__/* .promiseTry */ .j0)(() => {
      const txn = this.db.transaction(["sync"], "readonly");
      const store = txn.objectStore("sync");
      return selectQuery(store, undefined, cursor => {
        return cursor.value;
      }).then(results => {
        _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.log(`LocalIndexedDBStoreBackend: loaded sync data`);
        if (results.length > 1) {
          _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.warn("loadSyncData: More than 1 sync row found.");
        }
        return results.length > 0 ? results[0] : {};
      });
    });
  }
  getClientOptions() {
    return Promise.resolve().then(() => {
      const txn = this.db.transaction(["client_options"], "readonly");
      const store = txn.objectStore("client_options");
      return selectQuery(store, undefined, cursor => {
        var _cursor$value;
        return (_cursor$value = cursor.value) === null || _cursor$value === void 0 ? void 0 : _cursor$value.options;
      }).then(results => results[0]);
    });
  }
  async storeClientOptions(options) {
    const txn = this.db.transaction(["client_options"], "readwrite");
    const store = txn.objectStore("client_options");
    store.put({
      clobber: "-",
      // constant key so will always clobber
      options: options
    }); // put == UPSERT
    await txnAsPromise(txn);
  }
  async saveToDeviceBatches(batches) {
    const txn = this.db.transaction(["to_device_queue"], "readwrite");
    const store = txn.objectStore("to_device_queue");
    for (const batch of batches) {
      store.add(batch);
    }
    await txnAsPromise(txn);
  }
  async getOldestToDeviceBatch() {
    const txn = this.db.transaction(["to_device_queue"], "readonly");
    const store = txn.objectStore("to_device_queue");
    const cursor = await reqAsCursorPromise(store.openCursor());
    if (!cursor) return null;
    const resultBatch = cursor.value;
    return {
      id: cursor.key,
      txnId: resultBatch.txnId,
      eventType: resultBatch.eventType,
      batch: resultBatch.batch
    };
  }
  async removeToDeviceBatch(id) {
    const txn = this.db.transaction(["to_device_queue"], "readwrite");
    const store = txn.objectStore("to_device_queue");
    store.delete(id);
    await txnAsPromise(txn);
  }
  async getUserProfile(userId) {
    return Promise.resolve().then(() => {
      const txn = this.db.transaction(["user_profile"], "readonly");
      const store = txn.objectStore("user_profile");
      return selectQuery(store, [userId], cursor => {
        var _cursor$value2;
        return (_cursor$value2 = cursor.value) === null || _cursor$value2 === void 0 ? void 0 : _cursor$value2.profile;
      }).then(results => results[0]);
    });
  }
  async storeUserProfiles(userProfiles) {
    const txn = this.db.transaction(["user_profile"], "readwrite");
    const store = txn.objectStore("user_profile");
    for (const [userId, profile] of userProfiles.entries()) {
      store.put({
        profile,
        userId
      });
    }
    await txnAsPromise(txn);
  }
  async removeUserProfiles(userIds) {
    const txn = this.db.transaction(["user_profile"], "readwrite");
    const store = txn.objectStore("user_profile");
    for (const userId of userIds) {
      store.delete([userId]);
    }
    await txnAsPromise(txn);
  }
  async removeEventsFromRoom(roomId, eventIds) {
    try {
      this.syncAccumulator.removeEventsFromRoom(roomId, eventIds);
      const syncData = this.syncAccumulator.getJSON(true);
      await this.persistSyncData(syncData.nextBatch, syncData.roomsData);
    } finally {
      this.syncToDatabasePromise = undefined;
    }
  }

  /*
   * Close the database
   */
  async destroy() {
    var _this$db3;
    (_this$db3 = this.db) === null || _this$db3 === void 0 || _this$db3.close();
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/store/stub.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ StubStore)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");

/*
Copyright 2015 - 2021 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * This is an internal module.
 */

/**
 * Construct a stub store. This does no-ops on most store methods.
 */
class StubStore {
  constructor() {
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "accountData", new Map());
    // stub
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "fromToken", null);
  }
  /** @returns whether or not the database was newly created in this session. */
  isNewlyCreated() {
    return Promise.resolve(true);
  }

  /**
   * Get the sync token.
   */
  getSyncToken() {
    return this.fromToken;
  }

  /**
   * Set the sync token.
   */
  setSyncToken(token) {
    this.fromToken = token;
  }

  /**
   * No-op.
   */
  storeRoom(room) {}

  /**
   * No-op.
   */
  getRoom(roomId) {
    return null;
  }

  /**
   * No-op.
   * @returns An empty array.
   */
  getRooms() {
    return [];
  }

  /**
   * Permanently delete a room.
   */
  removeRoom(roomId) {
    return;
  }

  /**
   * No-op.
   * @returns An empty array.
   */
  getRoomSummaries() {
    return [];
  }

  /**
   * No-op.
   */
  storeUser(user) {}

  /**
   * No-op.
   */
  getUser(userId) {
    return null;
  }

  /**
   * No-op.
   */
  getUsers() {
    return [];
  }

  /**
   * No-op.
   */
  scrollback(room, limit) {
    return [];
  }

  /**
   * No-op.
   */
  setUserCreator(creator) {
    return;
  }

  /**
   * Store events for a room.
   * @param room - The room to store events for.
   * @param events - The events to store.
   * @param token - The token associated with these events.
   * @param toStart - True if these are paginated results.
   */
  storeEvents(room, events, token, toStart) {}

  /**
   * Store a filter.
   */
  storeFilter(filter) {}

  /**
   * Retrieve a filter.
   * @returns A filter or null.
   */
  getFilter(userId, filterId) {
    return null;
  }

  /**
   * Retrieve a filter ID with the given name.
   * @param filterName - The filter name.
   * @returns The filter ID or null.
   */
  getFilterIdByName(filterName) {
    return null;
  }

  /**
   * Set a filter name to ID mapping.
   */
  setFilterIdByName(filterName, filterId) {}

  /**
   * Store user-scoped account data events
   * @param events - The events to store.
   */
  storeAccountDataEvents(events) {}

  /**
   * Get account data event by event type
   * @param eventType - The event type being queried
   */
  getAccountData(eventType) {
    return undefined;
  }

  /**
   * setSyncData does nothing as there is no backing data store.
   *
   * @param syncData - The sync data
   * @returns An immediately resolved promise.
   */
  setSyncData(syncData) {
    return Promise.resolve();
  }

  /**
   * We never want to save because we have nothing to save to.
   *
   * @returns If the store wants to save
   */
  wantsSave() {
    return false;
  }

  /**
   * Save does nothing as there is no backing data store.
   */
  save() {
    return Promise.resolve();
  }

  /**
   * Startup does nothing.
   * @returns An immediately resolved promise.
   */
  startup() {
    return Promise.resolve();
  }

  /**
   * @returns Promise which resolves with a sync response to restore the
   * client state to where it was at the last save, or null if there
   * is no saved sync data.
   */
  getSavedSync() {
    return Promise.resolve(null);
  }

  /**
   * @returns If there is a saved sync, the nextBatch token
   * for this sync, otherwise null.
   */
  getSavedSyncToken() {
    return Promise.resolve(null);
  }

  /**
   * Delete all data from this store. Does nothing since this store
   * doesn't store anything.
   * @returns An immediately resolved promise.
   */
  deleteAllData() {
    return Promise.resolve();
  }
  getOutOfBandMembers() {
    return Promise.resolve(null);
  }
  setOutOfBandMembers(roomId, membershipEvents) {
    return Promise.resolve();
  }
  clearOutOfBandMembers() {
    return Promise.resolve();
  }
  getClientOptions() {
    return Promise.resolve(undefined);
  }
  storeClientOptions(options) {
    return Promise.resolve();
  }
  async getPendingEvents(roomId) {
    return [];
  }
  setPendingEvents(roomId, events) {
    return Promise.resolve();
  }
  async saveToDeviceBatches(batch) {
    return Promise.resolve();
  }
  getOldestToDeviceBatch() {
    return Promise.resolve(null);
  }
  async removeToDeviceBatch(id) {
    return Promise.resolve();
  }
  async getUserProfile() {
    return undefined;
  }
  async storeUserProfiles() {
    return;
  }
  async removeUserProfiles() {
    return;
  }
  async destroy() {
    // Nothing to do
  }
  async removeEventsFromRoom(roomId, eventIds) {
    // Nothing to do
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/thread-utils.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ getRelationsThreadFilter)
/* harmony export */ });
/* harmony import */ var _models_thread_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/thread.ts");
/*
Copyright 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


/**
 * Returns a filter function for the /relations endpoint to filter out relations directly
 * to the thread root event that should not live in the thread timeline
 *
 * @param threadId - the thread ID (ie. the event ID of the root event of the thread)
 * @returns the filtered list of events
 */
function getRelationsThreadFilter(threadId) {
  return e => {
    var _e$content, _e$content2;
    return ((_e$content = e.content) === null || _e$content === void 0 || (_e$content = _e$content["m.relates_to"]) === null || _e$content === void 0 ? void 0 : _e$content.event_id) !== threadId || ((_e$content2 = e.content) === null || _e$content2 === void 0 || (_e$content2 = _e$content2["m.relates_to"]) === null || _e$content2 === void 0 ? void 0 : _e$content2.rel_type) === _models_thread_ts__WEBPACK_IMPORTED_MODULE_0__/* .THREAD_RELATION_TYPE */ .RN.name;
  };
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/utils/encryptAESSecretStorageItem.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ encryptAESSecretStorageItem)
/* harmony export */ });
/* harmony import */ var _base64_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/base64.ts");
/* harmony import */ var _internal_deriveKeys_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/utils/internal/deriveKeys.ts");
/*
 * Copyright 2024 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * Encrypt a string as a secret storage item, using AES-CTR.
 *
 * @param data - the plaintext to encrypt
 * @param key - the encryption key to use as an input to the HKDF function which is used to derive the AES key for
 *    encryption. Obviously, the same key must be provided when decrypting.
 * @param name - the name of the secret. Used as an input to the HKDF operation which is used to derive the AES key,
 *    so again the same value must be provided when decrypting.
 * @param ivStr - the base64-encoded initialization vector to use. If not supplied, a random one will be generated.
 *
 * @returns The encrypted result, including the ciphertext itself, the initialization vector (as supplied in `ivStr`,
 *   or generated), and an HMAC on the ciphertext — all base64-encoded.
 */
async function encryptAESSecretStorageItem(data, key, name, ivStr) {
  let iv;
  if (ivStr) {
    iv = (0,_base64_ts__WEBPACK_IMPORTED_MODULE_0__/* .decodeBase64 */ .y4)(ivStr);
  } else {
    iv = new Uint8Array(16);
    globalThis.crypto.getRandomValues(iv);

    // clear bit 63 of the IV to stop us hitting the 64-bit counter boundary
    // (which would mean we wouldn't be able to decrypt on Android). The loss
    // of a single bit of iv is a price we have to pay.
    iv[8] &= 0x7f;
  }
  const [aesKey, hmacKey] = await (0,_internal_deriveKeys_ts__WEBPACK_IMPORTED_MODULE_1__/* .deriveKeys */ .C)(key, name);
  const encodedData = new TextEncoder().encode(data);
  const ciphertext = await globalThis.crypto.subtle.encrypt({
    name: "AES-CTR",
    counter: iv,
    length: 64
  }, aesKey, encodedData);
  const hmac = await globalThis.crypto.subtle.sign({
    name: "HMAC"
  }, hmacKey, ciphertext);
  return {
    iv: (0,_base64_ts__WEBPACK_IMPORTED_MODULE_0__/* .encodeBase64 */ .WG)(iv),
    ciphertext: (0,_base64_ts__WEBPACK_IMPORTED_MODULE_0__/* .encodeBase64 */ .WG)(new Uint8Array(ciphertext)),
    mac: (0,_base64_ts__WEBPACK_IMPORTED_MODULE_0__/* .encodeBase64 */ .WG)(new Uint8Array(hmac))
  };
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/utils/internal/deriveKeys.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ deriveKeys)
/* harmony export */ });
/*
 * Copyright 2024 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// salt for HKDF, with 8 bytes of zeros
const zeroSalt = new Uint8Array(8);

/**
 * Derive AES and HMAC keys from a master key.
 *
 * This is used for deriving secret storage keys: see https://spec.matrix.org/v1.11/client-server-api/#msecret_storagev1aes-hmac-sha2 (step 1).
 *
 * @param key
 * @param name
 */
async function deriveKeys(key, name) {
  const hkdfkey = await globalThis.crypto.subtle.importKey("raw", key, {
    name: "HKDF"
  }, false, ["deriveBits"]);
  const keybits = await globalThis.crypto.subtle.deriveBits({
    name: "HKDF",
    salt: zeroSalt,
    // @ts-ignore: https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/879
    info: new TextEncoder().encode(name),
    hash: "SHA-256"
  }, hkdfkey, 512);
  const aesKey = keybits.slice(0, 32);
  const hmacKey = keybits.slice(32);
  const aesProm = globalThis.crypto.subtle.importKey("raw", aesKey, {
    name: "AES-CTR"
  }, false, ["encrypt", "decrypt"]);
  const hmacProm = globalThis.crypto.subtle.importKey("raw", hmacKey, {
    name: "HMAC",
    hash: {
      name: "SHA-256"
    }
  }, false, ["sign", "verify"]);
  return Promise.all([aesProm, hmacProm]);
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/utils/roomVersion.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ shouldUseHydraForRoomVersion)
/* harmony export */ });
/*
Copyright 2025 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Room versions strings that we know about and do not use hydra semantics.
 */
const PRE_HYDRA_ROOM_VERSIONS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

/**
 * Checks if the given room version is one where new "hydra" power level
 * semantics (ie. room version 12 or later) should be used
 * (see https://github.com/matrix-org/matrix-spec-proposals/pull/4289).
 * This will return `false` for versions that are known to the js-sdk and
 * do not use hydra: any room versions unknown to the js-sdk (experimental or
 * otherwise) will cause the function to return true.
 *
 * @param roomVersion - The version of the room to check.
 * @returns `true` if hydra semantics should be used for the room version, `false` otherwise.
 */
function shouldUseHydraForRoomVersion(roomVersion) {
  return !PRE_HYDRA_ROOM_VERSIONS.includes(roomVersion);
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/audioContext.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
Copyright 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

let audioContext = null;
let refCount = 0;

/**
 * Acquires a reference to the shared AudioContext.
 * It's highly recommended to reuse this AudioContext rather than creating your
 * own, because multiple AudioContexts can be problematic in some browsers.
 * Make sure to call releaseContext when you're done using it.
 * @returns The shared AudioContext
 */
const acquireContext = () => {
  if (audioContext === null) audioContext = new AudioContext();
  refCount++;
  return audioContext;
};

/**
 * Signals that one of the references to the shared AudioContext has been
 * released, allowing the context and associated hardware resources to be
 * cleaned up if nothing else is using it.
 */
const releaseContext = () => {
  refCount--;
  if (refCount === 0) {
    var _audioContext;
    (_audioContext = audioContext) === null || _audioContext === void 0 || _audioContext.close();
    audioContext = null;
  }
};
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "N", 0, /* binding */ releaseContext,
/* harmony export */   "o", 0, /* binding */ acquireContext
/* harmony export */ ]);


/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/callEventHandler.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ CallEventHandlerEvent),
/* harmony export */   N: () => (/* binding */ CallEventHandler)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _logger_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts");
/* harmony import */ var _call_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/call.ts");
/* harmony import */ var _types_event_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/event.ts");
/* harmony import */ var _client_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/client.ts");
/* harmony import */ var _groupCall_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/groupCall.ts");
/* harmony import */ var _models_room_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/room.ts");

/*
Copyright 2020 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/








// Don't ring unless we'd be ringing for at least 3 seconds: the user needs some
// time to press the 'accept' button
const RING_GRACE_PERIOD = 3000;
let CallEventHandlerEvent = /*#__PURE__*/function (CallEventHandlerEvent) {
  CallEventHandlerEvent["Incoming"] = "Call.incoming";
  return CallEventHandlerEvent;
}({});
class CallEventHandler {
  constructor(client) {
    // XXX: Most of these are only public because of the tests
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "calls", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "callEventBuffer", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "nextSeqByCall", new Map());
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "toDeviceEventBuffers", new Map());
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "client", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "candidateEventsByCall", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "eventBufferPromiseChain", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onSync", () => {
      // Process the current event buffer and start queuing into a new one.
      const currentEventBuffer = this.callEventBuffer;
      this.callEventBuffer = [];

      // Ensure correct ordering by only processing this queue after the previous one has finished processing
      if (this.eventBufferPromiseChain) {
        this.eventBufferPromiseChain = this.eventBufferPromiseChain.then(() => this.evaluateEventBuffer(currentEventBuffer));
      } else {
        this.eventBufferPromiseChain = this.evaluateEventBuffer(currentEventBuffer);
      }
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onRoomTimeline", event => {
      this.callEventBuffer.push(event);
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onToDeviceEvent", event => {
      const content = event.getContent();
      if (!content.call_id) {
        this.callEventBuffer.push(event);
        return;
      }
      if (!this.nextSeqByCall.has(content.call_id)) {
        this.nextSeqByCall.set(content.call_id, 0);
      }
      if (content.seq === undefined) {
        this.callEventBuffer.push(event);
        return;
      }
      const nextSeq = this.nextSeqByCall.get(content.call_id) || 0;
      if (content.seq !== nextSeq) {
        if (!this.toDeviceEventBuffers.has(content.call_id)) {
          this.toDeviceEventBuffers.set(content.call_id, []);
        }
        const buffer = this.toDeviceEventBuffers.get(content.call_id);
        const index = buffer.findIndex(e => e.getContent().seq > content.seq);
        if (index === -1) {
          buffer.push(event);
        } else {
          buffer.splice(index, 0, event);
        }
      } else {
        const callId = content.call_id;
        this.callEventBuffer.push(event);
        this.nextSeqByCall.set(callId, content.seq + 1);
        const buffer = this.toDeviceEventBuffers.get(callId);
        let nextEvent = buffer && buffer.shift();
        while (nextEvent && nextEvent.getContent().seq === this.nextSeqByCall.get(callId)) {
          this.callEventBuffer.push(nextEvent);
          this.nextSeqByCall.set(callId, nextEvent.getContent().seq + 1);
          nextEvent = buffer.shift();
        }
      }
    });
    this.client = client;
    this.calls = new Map();
    // The sync code always emits one event at a time, so it will patiently
    // wait for us to finish processing a call invite before delivering the
    // next event, even if that next event is a hangup. We therefore accumulate
    // all our call events and then process them on the 'sync' event, ie.
    // each time a sync has completed. This way, we can avoid emitting incoming
    // call events if we get both the invite and answer/hangup in the same sync.
    // This happens quite often, eg. replaying sync from storage, catchup sync
    // after loading and after we've been offline for a bit.
    this.callEventBuffer = [];
    this.candidateEventsByCall = new Map();
  }
  start() {
    this.client.on(_client_ts__WEBPACK_IMPORTED_MODULE_4__/* .ClientEvent */ .AU.Sync, this.onSync);
    this.client.on(_models_room_ts__WEBPACK_IMPORTED_MODULE_6__/* .RoomEvent */ .u9.Timeline, this.onRoomTimeline);
    this.client.on(_client_ts__WEBPACK_IMPORTED_MODULE_4__/* .ClientEvent */ .AU.ToDeviceEvent, this.onToDeviceEvent);
  }
  stop() {
    this.client.removeListener(_client_ts__WEBPACK_IMPORTED_MODULE_4__/* .ClientEvent */ .AU.Sync, this.onSync);
    this.client.removeListener(_models_room_ts__WEBPACK_IMPORTED_MODULE_6__/* .RoomEvent */ .u9.Timeline, this.onRoomTimeline);
    this.client.removeListener(_client_ts__WEBPACK_IMPORTED_MODULE_4__/* .ClientEvent */ .AU.ToDeviceEvent, this.onToDeviceEvent);
  }
  async evaluateEventBuffer(eventBuffer) {
    await Promise.all(eventBuffer.map(event => this.client.decryptEventIfNeeded(event)));
    const callEvents = eventBuffer.filter(event => {
      const eventType = event.getType();
      return eventType.startsWith("m.call.") || eventType.startsWith("org.matrix.call.");
    });
    const ignoreCallIds = new Set();

    // inspect the buffer and mark all calls which have been answered
    // or hung up before passing them to the call event handler.
    for (const event of callEvents) {
      const eventType = event.getType();
      if (eventType === _types_event_ts__WEBPACK_IMPORTED_MODULE_3__/* .EventType */ .Bx.CallAnswer || eventType === _types_event_ts__WEBPACK_IMPORTED_MODULE_3__/* .EventType */ .Bx.CallHangup) {
        ignoreCallIds.add(event.getContent().call_id);
      }
    }

    // Process call events in the order that they were received
    for (const event of callEvents) {
      const eventType = event.getType();
      const callId = event.getContent().call_id;
      if (eventType === _types_event_ts__WEBPACK_IMPORTED_MODULE_3__/* .EventType */ .Bx.CallInvite && ignoreCallIds.has(callId)) {
        // This call has previously been answered or hung up: ignore it
        continue;
      }
      try {
        await this.handleCallEvent(event);
      } catch (e) {
        _logger_ts__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .vF.error("CallEventHandler evaluateEventBuffer() caught exception handling call event", e);
      }
    }
  }
  async handleCallEvent(event) {
    var _getGroupCallById;
    this.client.emit(_client_ts__WEBPACK_IMPORTED_MODULE_4__/* .ClientEvent */ .AU.ReceivedVoipEvent, event);
    const content = event.getContent();
    const callRoomId = event.getRoomId() || ((_getGroupCallById = this.client.groupCallEventHandler.getGroupCallById(content.conf_id)) === null || _getGroupCallById === void 0 || (_getGroupCallById = _getGroupCallById.room) === null || _getGroupCallById === void 0 ? void 0 : _getGroupCallById.roomId);
    const groupCallId = content.conf_id;
    const type = event.getType();
    const senderId = event.getSender();
    let call = content.call_id ? this.calls.get(content.call_id) : undefined;
    let opponentDeviceId;
    let groupCall;
    if (groupCallId) {
      groupCall = this.client.groupCallEventHandler.getGroupCallById(groupCallId);
      if (!groupCall) {
        _logger_ts__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .vF.warn(`CallEventHandler handleCallEvent() could not find a group call - ignoring event (groupCallId=${groupCallId}, type=${type})`);
        return;
      }
      opponentDeviceId = content.device_id;
      if (!opponentDeviceId) {
        _logger_ts__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .vF.warn(`CallEventHandler handleCallEvent() could not find a device id - ignoring event (senderId=${senderId})`);
        groupCall.emit(_groupCall_ts__WEBPACK_IMPORTED_MODULE_5__/* .GroupCallEvent */ .AZ.Error, new _groupCall_ts__WEBPACK_IMPORTED_MODULE_5__/* .GroupCallUnknownDeviceError */ .Iy(senderId));
        return;
      }
      if (content.dest_session_id !== this.client.getSessionId()) {
        _logger_ts__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .vF.warn("CallEventHandler handleCallEvent() call event does not match current session id - ignoring");
        return;
      }
    }
    const weSentTheEvent = senderId === this.client.credentials.userId && (opponentDeviceId === undefined || opponentDeviceId === this.client.getDeviceId());
    if (!callRoomId) return;
    if (type === _types_event_ts__WEBPACK_IMPORTED_MODULE_3__/* .EventType */ .Bx.CallInvite) {
      var _this$client$getTurnS, _createNewMatrixCall, _groupCall;
      // ignore invites you send
      if (weSentTheEvent) return;
      // expired call
      if (event.getLocalAge() > content.lifetime - RING_GRACE_PERIOD) return;
      // stale/old invite event
      if (call && call.state === _call_ts__WEBPACK_IMPORTED_MODULE_2__/* .CallState */ .iP.Ended) return;
      if (call) {
        _logger_ts__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .vF.warn(`CallEventHandler handleCallEvent() already has a call but got an invite - clobbering (callId=${content.call_id})`);
      }
      if (content.invitee && content.invitee !== this.client.getUserId()) {
        return; // This invite was meant for another user in the room
      }
      const timeUntilTurnCresExpire = ((_this$client$getTurnS = this.client.getTurnServersExpiry()) !== null && _this$client$getTurnS !== void 0 ? _this$client$getTurnS : 0) - Date.now();
      _logger_ts__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .vF.info("CallEventHandler handleCallEvent() current turn creds expire in " + timeUntilTurnCresExpire + " ms");
      call = (_createNewMatrixCall = (0,_call_ts__WEBPACK_IMPORTED_MODULE_2__/* .createNewMatrixCall */ .sv)(this.client, callRoomId, {
        forceTURN: this.client.forceTURN,
        opponentDeviceId,
        groupCallId,
        opponentSessionId: content.sender_session_id
      })) !== null && _createNewMatrixCall !== void 0 ? _createNewMatrixCall : undefined;
      if (!call) {
        _logger_ts__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .vF.log(`CallEventHandler handleCallEvent() this client does not support WebRTC (callId=${content.call_id})`);
        // don't hang up the call: there could be other clients
        // connected that do support WebRTC and declining the
        // the call on their behalf would be really annoying.
        return;
      }
      call.callId = content.call_id;
      const stats = (_groupCall = groupCall) === null || _groupCall === void 0 ? void 0 : _groupCall.getGroupCallStats();
      if (stats) {
        call.initStats(stats);
      }
      try {
        await call.initWithInvite(event);
      } catch (e) {
        if (e instanceof _call_ts__WEBPACK_IMPORTED_MODULE_2__/* .CallError */ .RA) {
          if (e.code === _groupCall_ts__WEBPACK_IMPORTED_MODULE_5__/* .GroupCallErrorCode */ .BF.UnknownDevice) {
            var _groupCall2;
            (_groupCall2 = groupCall) === null || _groupCall2 === void 0 || _groupCall2.emit(_groupCall_ts__WEBPACK_IMPORTED_MODULE_5__/* .GroupCallEvent */ .AZ.Error, e);
          } else {
            _logger_ts__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .vF.error(e);
          }
        }
      }
      this.calls.set(call.callId, call);

      // if we stashed candidate events for that call ID, play them back now
      if (this.candidateEventsByCall.get(call.callId)) {
        for (const ev of this.candidateEventsByCall.get(call.callId)) {
          call.onRemoteIceCandidatesReceived(ev);
        }
      }

      // Were we trying to call that user (room)?
      let existingCall;
      for (const thisCall of this.calls.values()) {
        var _call$getOpponentMemb;
        const isCalling = [_call_ts__WEBPACK_IMPORTED_MODULE_2__/* .CallState */ .iP.WaitLocalMedia, _call_ts__WEBPACK_IMPORTED_MODULE_2__/* .CallState */ .iP.CreateOffer, _call_ts__WEBPACK_IMPORTED_MODULE_2__/* .CallState */ .iP.InviteSent].includes(thisCall.state);
        if (call.roomId === thisCall.roomId && thisCall.direction === _call_ts__WEBPACK_IMPORTED_MODULE_2__/* .CallDirection */ .QO.Outbound && ((_call$getOpponentMemb = call.getOpponentMember()) === null || _call$getOpponentMemb === void 0 ? void 0 : _call$getOpponentMemb.userId) === thisCall.invitee && isCalling) {
          existingCall = thisCall;
          break;
        }
      }
      if (existingCall) {
        if (existingCall.callId > call.callId) {
          _logger_ts__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .vF.log(`CallEventHandler handleCallEvent() detected glare - answering incoming call and canceling outgoing call (incomingId=${call.callId}, outgoingId=${existingCall.callId})`);
          existingCall.replacedBy(call);
        } else {
          _logger_ts__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .vF.log(`CallEventHandler handleCallEvent() detected glare - hanging up incoming call (incomingId=${call.callId}, outgoingId=${existingCall.callId})`);
          call.hangup(_call_ts__WEBPACK_IMPORTED_MODULE_2__/* .CallErrorCode */ .Il.Replaced, true);
        }
      } else {
        this.client.emit(CallEventHandlerEvent.Incoming, call);
      }
      return;
    } else if (type === _types_event_ts__WEBPACK_IMPORTED_MODULE_3__/* .EventType */ .Bx.CallCandidates) {
      if (weSentTheEvent) return;
      if (!call) {
        // store the candidates; we may get a call eventually.
        if (!this.candidateEventsByCall.has(content.call_id)) {
          this.candidateEventsByCall.set(content.call_id, []);
        }
        this.candidateEventsByCall.get(content.call_id).push(event);
      } else {
        call.onRemoteIceCandidatesReceived(event);
      }
      return;
    } else if ([_types_event_ts__WEBPACK_IMPORTED_MODULE_3__/* .EventType */ .Bx.CallHangup, _types_event_ts__WEBPACK_IMPORTED_MODULE_3__/* .EventType */ .Bx.CallReject].includes(type)) {
      // Note that we also observe our own hangups here so we can see
      // if we've already rejected a call that would otherwise be valid
      if (!call) {
        var _createNewMatrixCall2;
        // if not live, store the fact that the call has ended because
        // we're probably getting events backwards so
        // the hangup will come before the invite
        call = (_createNewMatrixCall2 = (0,_call_ts__WEBPACK_IMPORTED_MODULE_2__/* .createNewMatrixCall */ .sv)(this.client, callRoomId, {
          opponentDeviceId,
          opponentSessionId: content.sender_session_id
        })) !== null && _createNewMatrixCall2 !== void 0 ? _createNewMatrixCall2 : undefined;
        if (call) {
          call.callId = content.call_id;
          call.initWithHangup(event);
          this.calls.set(content.call_id, call);
        }
      } else {
        if (call.state !== _call_ts__WEBPACK_IMPORTED_MODULE_2__/* .CallState */ .iP.Ended) {
          if (type === _types_event_ts__WEBPACK_IMPORTED_MODULE_3__/* .EventType */ .Bx.CallHangup) {
            call.onHangupReceived(content);
          } else {
            call.onRejectReceived(content);
          }

          // @ts-expect-error typescript thinks the state can't be 'ended' because we're
          // inside the if block where it wasn't, but it could have changed because
          // on[Hangup|Reject]Received are side-effecty.
          if (call.state === _call_ts__WEBPACK_IMPORTED_MODULE_2__/* .CallState */ .iP.Ended) this.calls.delete(content.call_id);
        }
      }
      return;
    }

    // The following events need a call and a peer connection
    if (!call || !call.hasPeerConnection) {
      _logger_ts__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .vF.info(`CallEventHandler handleCallEvent() discarding possible call event as we don't have a call (type=${type})`);
      return;
    }
    // Ignore remote echo
    if (event.getContent().party_id === call.ourPartyId) return;
    switch (type) {
      case _types_event_ts__WEBPACK_IMPORTED_MODULE_3__/* .EventType */ .Bx.CallAnswer:
        if (weSentTheEvent) {
          if (call.state === _call_ts__WEBPACK_IMPORTED_MODULE_2__/* .CallState */ .iP.Ringing) {
            call.onAnsweredElsewhere(content);
          }
        } else {
          call.onAnswerReceived(event);
        }
        break;
      case _types_event_ts__WEBPACK_IMPORTED_MODULE_3__/* .EventType */ .Bx.CallSelectAnswer:
        call.onSelectAnswerReceived(event);
        break;
      case _types_event_ts__WEBPACK_IMPORTED_MODULE_3__/* .EventType */ .Bx.CallNegotiate:
        call.onNegotiateReceived(event);
        break;
      case _types_event_ts__WEBPACK_IMPORTED_MODULE_3__/* .EventType */ .Bx.CallAssertedIdentity:
      case _types_event_ts__WEBPACK_IMPORTED_MODULE_3__/* .EventType */ .Bx.CallAssertedIdentityPrefix:
        call.onAssertedIdentityReceived(event);
        break;
      case _types_event_ts__WEBPACK_IMPORTED_MODULE_3__/* .EventType */ .Bx.CallSDPStreamMetadataChanged:
      case _types_event_ts__WEBPACK_IMPORTED_MODULE_3__/* .EventType */ .Bx.CallSDPStreamMetadataChangedPrefix:
        call.onSDPStreamMetadataChangedReceived(event);
        break;
    }
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/callEventTypes.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ SDPStreamMetadataPurpose)
/* harmony export */ });
/* harmony import */ var _NamespacedValue_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/NamespacedValue.ts");

const SDPStreamMetadataKey = new _NamespacedValue_ts__WEBPACK_IMPORTED_MODULE_0__/* .NamespacedValue */ .xu("sdp_stream_metadata", "org.matrix.msc3077.sdp_stream_metadata");
let SDPStreamMetadataPurpose = /*#__PURE__*/function (SDPStreamMetadataPurpose) {
  SDPStreamMetadataPurpose["Usermedia"] = "m.usermedia";
  SDPStreamMetadataPurpose["Screenshare"] = "m.screenshare";
  return SDPStreamMetadataPurpose;
}({});
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* binding */ SDPStreamMetadataKey
/* harmony export */ ]);


/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/groupCallEventHandler.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ GroupCallEventHandler),
/* harmony export */   o: () => (/* binding */ GroupCallEventHandlerEvent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _client_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/client.ts");
/* harmony import */ var _groupCall_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/groupCall.ts");
/* harmony import */ var _models_room_state_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/room-state.ts");
/* harmony import */ var _logger_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts");
/* harmony import */ var _types_event_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/@types/event.ts");
/* harmony import */ var _sync_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/sync.ts");

/*
Copyright 2021 Šimon Brandner <simon.bra.ag@gmail.com>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/







let GroupCallEventHandlerEvent = /*#__PURE__*/function (GroupCallEventHandlerEvent) {
  GroupCallEventHandlerEvent["Incoming"] = "GroupCall.incoming";
  GroupCallEventHandlerEvent["Outgoing"] = "GroupCall.outgoing";
  GroupCallEventHandlerEvent["Ended"] = "GroupCall.ended";
  GroupCallEventHandlerEvent["Participants"] = "GroupCall.participants";
  return GroupCallEventHandlerEvent;
}({});
class GroupCallEventHandler {
  constructor(client) {
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "groupCalls", new Map());
    // roomId -> GroupCall
    // All rooms we know about and whether we've seen a 'Room' event
    // for them. The promise will be fulfilled once we've processed that
    // event which means we're "up to date" on what calls are in a room
    // and get
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "roomDeferreds", new Map());
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onRoomsChanged", room => {
      this.createGroupCallForRoom(room);
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onRoomStateChanged", (event, state) => {
      const eventType = event.getType();
      if (eventType === _types_event_ts__WEBPACK_IMPORTED_MODULE_5__/* .EventType */ .Bx.GroupCallPrefix) {
        const groupCallId = event.getStateKey();
        const content = event.getContent();
        const currentGroupCall = this.groupCalls.get(state.roomId);
        if (!currentGroupCall && !content["m.terminated"] && !event.isRedacted()) {
          this.createGroupCallFromRoomStateEvent(event);
        } else if (currentGroupCall && currentGroupCall.groupCallId === groupCallId) {
          if (content["m.terminated"] || event.isRedacted()) {
            currentGroupCall.terminate(false);
          } else if (content["m.type"] !== currentGroupCall.type) {
            // TODO: Handle the callType changing when the room state changes
            _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.warn(`GroupCallEventHandler onRoomStateChanged() currently does not support changing type (roomId=${state.roomId})`);
          }
        } else if (currentGroupCall && currentGroupCall.groupCallId !== groupCallId) {
          // TODO: Handle new group calls and multiple group calls
          _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.warn(`GroupCallEventHandler onRoomStateChanged() currently does not support multiple calls (roomId=${state.roomId})`);
        }
      }
    });
    this.client = client;
  }
  async start() {
    // We wait until the client has started syncing for real.
    // This is because we only support one call at a time, and want
    // the latest. We therefore want the latest state of the room before
    // we create a group call for the room so we can be fairly sure that
    // the group call we create is really the latest one.
    if (this.client.getSyncState() !== _sync_ts__WEBPACK_IMPORTED_MODULE_6__/* .SyncState */ .Lm.Syncing) {
      _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.debug("GroupCallEventHandler start() waiting for client to start syncing");
      await new Promise(resolve => {
        const onSync = () => {
          if (this.client.getSyncState() === _sync_ts__WEBPACK_IMPORTED_MODULE_6__/* .SyncState */ .Lm.Syncing) {
            this.client.off(_client_ts__WEBPACK_IMPORTED_MODULE_1__/* .ClientEvent */ .AU.Sync, onSync);
            return resolve();
          }
        };
        this.client.on(_client_ts__WEBPACK_IMPORTED_MODULE_1__/* .ClientEvent */ .AU.Sync, onSync);
      });
    }
    const rooms = this.client.getRooms();
    for (const room of rooms) {
      this.createGroupCallForRoom(room);
    }
    this.client.on(_client_ts__WEBPACK_IMPORTED_MODULE_1__/* .ClientEvent */ .AU.Room, this.onRoomsChanged);
    this.client.on(_models_room_state_ts__WEBPACK_IMPORTED_MODULE_3__/* .RoomStateEvent */ .f.Events, this.onRoomStateChanged);
  }
  stop() {
    this.client.removeListener(_client_ts__WEBPACK_IMPORTED_MODULE_1__/* .ClientEvent */ .AU.Room, this.onRoomsChanged);
    this.client.removeListener(_models_room_state_ts__WEBPACK_IMPORTED_MODULE_3__/* .RoomStateEvent */ .f.Events, this.onRoomStateChanged);
  }
  getRoomDeferred(roomId) {
    let deferred = this.roomDeferreds.get(roomId);
    if (deferred === undefined) {
      let resolveFunc;
      deferred = {
        prom: new Promise(resolve => {
          resolveFunc = resolve;
        })
      };
      deferred.resolve = resolveFunc;
      this.roomDeferreds.set(roomId, deferred);
    }
    return deferred;
  }
  waitUntilRoomReadyForGroupCalls(roomId) {
    return this.getRoomDeferred(roomId).prom;
  }
  getGroupCallById(groupCallId) {
    return [...this.groupCalls.values()].find(groupCall => groupCall.groupCallId === groupCallId);
  }
  createGroupCallForRoom(room) {
    const callEvents = room.currentState.getStateEvents(_types_event_ts__WEBPACK_IMPORTED_MODULE_5__/* .EventType */ .Bx.GroupCallPrefix);
    const sortedCallEvents = callEvents.sort((a, b) => b.getTs() - a.getTs());
    for (const callEvent of sortedCallEvents) {
      const content = callEvent.getContent();
      if (content["m.terminated"] || callEvent.isRedacted()) {
        continue;
      }
      _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.debug(`GroupCallEventHandler createGroupCallForRoom() choosing group call from possible calls (stateKey=${callEvent.getStateKey()}, ts=${callEvent.getTs()}, roomId=${room.roomId}, numOfPossibleCalls=${callEvents.length})`);
      this.createGroupCallFromRoomStateEvent(callEvent);
      break;
    }
    this.getRoomDeferred(room.roomId).resolve();
  }
  createGroupCallFromRoomStateEvent(event) {
    const roomId = event.getRoomId();
    const content = event.getContent();
    const room = this.client.getRoom(roomId);
    if (!room) {
      _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.warn(`GroupCallEventHandler createGroupCallFromRoomStateEvent() couldn't find room for call (roomId=${roomId})`);
      return;
    }
    const groupCallId = event.getStateKey();
    const callType = content["m.type"];
    if (!Object.values(_groupCall_ts__WEBPACK_IMPORTED_MODULE_2__/* .GroupCallType */ .Ad).includes(callType)) {
      _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.warn(`GroupCallEventHandler createGroupCallFromRoomStateEvent() received invalid call type (type=${callType}, roomId=${roomId})`);
      return;
    }
    const callIntent = content["m.intent"];
    if (!Object.values(_groupCall_ts__WEBPACK_IMPORTED_MODULE_2__/* .GroupCallIntent */ .MC).includes(callIntent)) {
      _logger_ts__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.warn(`Received invalid group call intent (type=${callType}, roomId=${roomId})`);
      return;
    }
    const isPtt = Boolean(content["io.element.ptt"]);
    let dataChannelOptions;
    if (content !== null && content !== void 0 && content.dataChannelsEnabled && content !== null && content !== void 0 && content.dataChannelOptions) {
      // Pull out just the dataChannelOptions we want to support.
      const {
        ordered,
        maxPacketLifeTime,
        maxRetransmits,
        protocol
      } = content.dataChannelOptions;
      dataChannelOptions = {
        ordered,
        maxPacketLifeTime,
        maxRetransmits,
        protocol
      };
    }
    const groupCall = new _groupCall_ts__WEBPACK_IMPORTED_MODULE_2__/* .GroupCall */ .eO(this.client, room, callType, isPtt, callIntent, groupCallId,
    // Because without Media section a WebRTC connection is not possible, so need a RTCDataChannel to set up a
    // no media WebRTC connection anyway.
    (content === null || content === void 0 ? void 0 : content.dataChannelsEnabled) || this.client.isVoipWithNoMediaAllowed, dataChannelOptions, this.client.isVoipWithNoMediaAllowed, this.client.useLivekitForGroupCalls, content["io.element.livekit_service_url"]);
    this.groupCalls.set(room.roomId, groupCall);
    this.client.emit(GroupCallEventHandlerEvent.Incoming, groupCall);
    return groupCall;
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/stats/callFeedStatsReporter.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ CallFeedStatsReporter)
/* harmony export */ });
/*
Copyright 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

class CallFeedStatsReporter {
  static buildCallFeedReport(callId, opponentMemberId, pc) {
    const rtpTransceivers = pc.getTransceivers();
    const transceiver = [];
    const callFeeds = [];
    rtpTransceivers.forEach(t => {
      var _t$sender;
      const sender = (_t$sender = t.sender) !== null && _t$sender !== void 0 && _t$sender.track ? CallFeedStatsReporter.buildTrackStats(t.sender.track, "sender") : null;
      const receiver = CallFeedStatsReporter.buildTrackStats(t.receiver.track, "receiver");
      transceiver.push({
        mid: t.mid == null ? "null" : t.mid,
        direction: t.direction,
        currentDirection: t.currentDirection == null ? "null" : t.currentDirection,
        sender,
        receiver
      });
    });
    return {
      callId,
      opponentMemberId,
      transceiver,
      callFeeds
    };
  }
  static buildTrackStats(track, label = "--") {
    var _track$getSettings, _track$getConstraints;
    const settingDeviceId = (_track$getSettings = track.getSettings()) === null || _track$getSettings === void 0 ? void 0 : _track$getSettings.deviceId;
    const constrainDeviceId = (_track$getConstraints = track.getConstraints()) === null || _track$getConstraints === void 0 ? void 0 : _track$getConstraints.deviceId;
    return {
      id: track.id,
      kind: track.kind,
      settingDeviceId: settingDeviceId !== null && settingDeviceId !== void 0 ? settingDeviceId : "unknown",
      constrainDeviceId: constrainDeviceId !== null && constrainDeviceId !== void 0 ? constrainDeviceId : "unknown",
      muted: track.muted,
      enabled: track.enabled,
      readyState: track.readyState,
      label
    };
  }
  static expandCallFeedReport(report, callFeeds, prefix = "unknown") {
    callFeeds.forEach(feed => {
      const audioTracks = feed.stream.getAudioTracks();
      const videoTracks = feed.stream.getVideoTracks();
      const audio = audioTracks.length > 0 ? CallFeedStatsReporter.buildTrackStats(feed.stream.getAudioTracks()[0], feed.purpose) : null;
      const video = videoTracks.length > 0 ? CallFeedStatsReporter.buildTrackStats(feed.stream.getVideoTracks()[0], feed.purpose) : null;
      const feedStats = {
        stream: feed.stream.id,
        type: feed.isLocal() ? "local" : "remote",
        audio,
        video,
        purpose: feed.purpose,
        prefix,
        isVideoMuted: feed.isVideoMuted(),
        isAudioMuted: feed.isAudioMuted()
      };
      report.callFeeds.push(feedStats);
    });
    return report;
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/stats/groupCallStats.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r: () => (/* binding */ GroupCallStats)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
;// ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/stats/connectionStats.ts

/*
Copyright 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

class ConnectionStats {
  constructor() {
    (0,defineProperty/* default */.A)(this, "bandwidth", {});
    (0,defineProperty/* default */.A)(this, "bitrate", {});
    (0,defineProperty/* default */.A)(this, "packetLoss", {});
    (0,defineProperty/* default */.A)(this, "transport", []);
  }
}
;// ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/stats/connectionStatsBuilder.ts
/*
Copyright 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

class ConnectionStatsBuilder {
  static buildBandwidthReport(now) {
    const availableIncomingBitrate = now.availableIncomingBitrate;
    const availableOutgoingBitrate = now.availableOutgoingBitrate;
    return {
      download: availableIncomingBitrate ? Math.round(availableIncomingBitrate / 1000) : 0,
      upload: availableOutgoingBitrate ? Math.round(availableOutgoingBitrate / 1000) : 0
    };
  }
}
;// ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/stats/transportStatsBuilder.ts
class TransportStatsBuilder {
  static buildReport(report, now, conferenceStatsTransport, isFocus) {
    const localUsedCandidate = report === null || report === void 0 ? void 0 : report.get(now.localCandidateId);
    const remoteUsedCandidate = report === null || report === void 0 ? void 0 : report.get(now.remoteCandidateId);

    // RTCIceCandidateStats
    // https://w3c.github.io/webrtc-stats/#icecandidate-dict*
    if (remoteUsedCandidate && localUsedCandidate) {
      const remoteIpAddress = remoteUsedCandidate.ip !== undefined ? remoteUsedCandidate.ip : remoteUsedCandidate.address;
      const remotePort = remoteUsedCandidate.port;
      const ip = `${remoteIpAddress}:${remotePort}`;
      const localIpAddress = localUsedCandidate.ip !== undefined ? localUsedCandidate.ip : localUsedCandidate.address;
      const localPort = localUsedCandidate.port;
      const localIp = `${localIpAddress}:${localPort}`;
      const type = remoteUsedCandidate.protocol;

      // Save the address unless it has been saved already.
      if (!conferenceStatsTransport.some(t => t.ip === ip && t.type === type && t.localIp === localIp)) {
        conferenceStatsTransport.push({
          ip,
          type,
          localIp,
          isFocus,
          localCandidateType: localUsedCandidate.candidateType,
          remoteCandidateType: remoteUsedCandidate.candidateType,
          networkType: localUsedCandidate.networkType,
          rtt: now.currentRoundTripTime ? now.currentRoundTripTime * 1000 : NaN
        });
      }
    }
    return conferenceStatsTransport;
  }
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/sdp-transform@3.0.0/node_modules/sdp-transform/lib/index.js
var lib = __webpack_require__("../../node_modules/.pnpm/sdp-transform@3.0.0/node_modules/sdp-transform/lib/index.js");
;// ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/stats/media/mediaSsrcHandler.ts

/*
Copyright 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


class MediaSsrcHandler {
  constructor() {
    (0,defineProperty/* default */.A)(this, "ssrcToMid", {
      local: new Map(),
      remote: new Map()
    });
  }
  findMidBySsrc(ssrc, type) {
    let mid;
    this.ssrcToMid[type].forEach((ssrcs, m) => {
      if (ssrcs.find(s => s == ssrc)) {
        mid = m;
        return;
      }
    });
    return mid;
  }
  parse(description, type) {
    const sdp = (0,lib/* parse */.qg)(description);
    const ssrcToMid = new Map();
    sdp.media.forEach(m => {
      if (!!m.mid && m.type === "video" || m.type === "audio") {
        var _m$ssrcs;
        const ssrcs = [];
        (_m$ssrcs = m.ssrcs) === null || _m$ssrcs === void 0 || _m$ssrcs.forEach(ssrc => {
          if (ssrc.attribute === "cname") {
            ssrcs.push(`${ssrc.id}`);
          }
        });
        ssrcToMid.set(`${m.mid}`, ssrcs);
      }
    });
    this.ssrcToMid[type] = ssrcToMid;
  }
  getSsrcToMidMap(type) {
    return this.ssrcToMid[type];
  }
}
;// ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/stats/media/mediaTrackHandler.ts
/*
Copyright 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

class MediaTrackHandler {
  constructor(pc) {
    this.pc = pc;
  }
  getLocalTracks(kind) {
    const isNotNullAndKind = track => {
      return track !== null && track.kind === kind;
    };
    return this.pc.getTransceivers().filter(t => t.currentDirection === "sendonly" || t.currentDirection === "sendrecv").filter(t => t.sender !== null).map(t => t.sender).map(s => s.track).filter(isNotNullAndKind);
  }
  getTackById(trackId) {
    return this.pc.getTransceivers().map(t => {
      if ((t === null || t === void 0 ? void 0 : t.sender.track) !== null && t.sender.track.id === trackId) {
        return t.sender.track;
      }
      if ((t === null || t === void 0 ? void 0 : t.receiver.track) !== null && t.receiver.track.id === trackId) {
        return t.receiver.track;
      }
      return undefined;
    }).find(t => t !== undefined);
  }
  getLocalTrackIdByMid(mid) {
    var _transceiver$sender;
    const transceiver = this.pc.getTransceivers().find(t => t.mid === mid);
    return transceiver === null || transceiver === void 0 || (_transceiver$sender = transceiver.sender) === null || _transceiver$sender === void 0 || (_transceiver$sender = _transceiver$sender.track) === null || _transceiver$sender === void 0 ? void 0 : _transceiver$sender.id;
  }
  getRemoteTrackIdByMid(mid) {
    var _transceiver$receiver;
    const transceiver = this.pc.getTransceivers().find(t => t.mid === mid);
    return transceiver === null || transceiver === void 0 || (_transceiver$receiver = transceiver.receiver) === null || _transceiver$receiver === void 0 || (_transceiver$receiver = _transceiver$receiver.track) === null || _transceiver$receiver === void 0 ? void 0 : _transceiver$receiver.id;
  }
  getActiveSimulcastStreams() {
    //@TODO implement this right.. Check how many layer configured
    return 3;
  }
  getTransceiverByTrackId(trackId) {
    return this.pc.getTransceivers().find(t => {
      return t.receiver.track.id === trackId || t.sender.track !== null && t.sender.track.id === trackId;
    });
  }
}
;// ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/stats/media/mediaTrackStats.ts

/*
Copyright 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

class MediaTrackStats {
  constructor(trackId, type, kind) {
    (0,defineProperty/* default */.A)(this, "loss", {
      packetsTotal: 0,
      packetsLost: 0,
      isDownloadStream: false
    });
    (0,defineProperty/* default */.A)(this, "bitrate", {
      download: 0,
      upload: 0
    });
    (0,defineProperty/* default */.A)(this, "resolution", {
      width: -1,
      height: -1
    });
    (0,defineProperty/* default */.A)(this, "audioConcealment", {
      concealedAudio: 0,
      totalAudioDuration: 0
    });
    (0,defineProperty/* default */.A)(this, "framerate", 0);
    (0,defineProperty/* default */.A)(this, "jitter", 0);
    (0,defineProperty/* default */.A)(this, "codec", "");
    (0,defineProperty/* default */.A)(this, "isAlive", true);
    (0,defineProperty/* default */.A)(this, "isMuted", false);
    (0,defineProperty/* default */.A)(this, "isEnabled", true);
    this.trackId = trackId;
    this.type = type;
    this.kind = kind;
  }
  getType() {
    return this.type;
  }
  setLoss(loss) {
    this.loss = loss;
  }
  getLoss() {
    return this.loss;
  }
  setResolution(resolution) {
    this.resolution = resolution;
  }
  getResolution() {
    return this.resolution;
  }
  setFramerate(framerate) {
    this.framerate = framerate;
  }
  getFramerate() {
    return this.framerate;
  }
  setBitrate(bitrate) {
    this.bitrate = bitrate;
  }
  getBitrate() {
    return this.bitrate;
  }
  setCodec(codecShortType) {
    this.codec = codecShortType;
    return true;
  }
  getCodec() {
    return this.codec;
  }
  resetBitrate() {
    this.bitrate = {
      download: 0,
      upload: 0
    };
  }
  set alive(isAlive) {
    this.isAlive = isAlive;
  }

  /**
   * A MediaTrackState is alive if the corresponding MediaStreamTrack track bound to a transceiver and the
   * MediaStreamTrack is in state MediaStreamTrack.readyState === live
   */
  get alive() {
    return this.isAlive;
  }
  set muted(isMuted) {
    this.isMuted = isMuted;
  }

  /**
   * A MediaTrackState.isMuted corresponding to MediaStreamTrack.muted.
   * But these values only match if MediaTrackState.isAlive.
   */
  get muted() {
    return this.isMuted;
  }
  set enabled(isEnabled) {
    this.isEnabled = isEnabled;
  }

  /**
   * A MediaTrackState.isEnabled corresponding to MediaStreamTrack.enabled.
   * But these values only match if MediaTrackState.isAlive.
   */
  get enabled() {
    return this.isEnabled;
  }
  setJitter(jitter) {
    this.jitter = jitter;
  }

  /**
   * Jitter in milliseconds
   */
  getJitter() {
    return this.jitter;
  }

  /**
   * Audio concealment ration (conceled duration / total duration)
   */
  setAudioConcealment(concealedAudioDuration, totalAudioDuration) {
    this.audioConcealment.concealedAudio = concealedAudioDuration;
    this.audioConcealment.totalAudioDuration = totalAudioDuration;
  }
  getAudioConcealment() {
    return this.audioConcealment;
  }
}
;// ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/stats/media/mediaTrackStatsHandler.ts

/*
Copyright 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


class MediaTrackStatsHandler {
  constructor(mediaSsrcHandler, mediaTrackHandler) {
    (0,defineProperty/* default */.A)(this, "track2stats", new Map());
    this.mediaSsrcHandler = mediaSsrcHandler;
    this.mediaTrackHandler = mediaTrackHandler;
  }

  /**
   * Find tracks by rtc stats
   * Argument report is any because the stats api is not consistent:
   * For example `trackIdentifier`, `mid` not existing in every implementations
   * https://www.w3.org/TR/webrtc-stats/#dom-rtcinboundrtpstreamstats
   * https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats
   */
  findTrack2Stats(report, type) {
    let trackID;
    if (report.trackIdentifier) {
      trackID = report.trackIdentifier;
    } else if (report.mid) {
      trackID = type === "remote" ? this.mediaTrackHandler.getRemoteTrackIdByMid(report.mid) : this.mediaTrackHandler.getLocalTrackIdByMid(report.mid);
    } else if (report.ssrc) {
      const mid = this.mediaSsrcHandler.findMidBySsrc(report.ssrc, type);
      if (!mid) {
        return undefined;
      }
      trackID = type === "remote" ? this.mediaTrackHandler.getRemoteTrackIdByMid(report.mid) : this.mediaTrackHandler.getLocalTrackIdByMid(report.mid);
    }
    if (!trackID) {
      return undefined;
    }
    let trackStats = this.track2stats.get(trackID);
    if (!trackStats) {
      const track = this.mediaTrackHandler.getTackById(trackID);
      if (track !== undefined) {
        const kind = track.kind === "audio" ? track.kind : "video";
        trackStats = new MediaTrackStats(trackID, type, kind);
        this.track2stats.set(trackID, trackStats);
      } else {
        return undefined;
      }
    }
    return trackStats;
  }
  findLocalVideoTrackStats(report) {
    const localVideoTracks = this.mediaTrackHandler.getLocalTracks("video");
    if (localVideoTracks.length === 0) {
      return undefined;
    }
    return this.findTrack2Stats(report, "local");
  }
  getTrack2stats() {
    return this.track2stats;
  }
  findTransceiverByTrackId(trackID) {
    return this.mediaTrackHandler.getTransceiverByTrackId(trackID);
  }
}
;// ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/stats/valueFormatter.ts
/*
Copyright 2023 The Matrix.org Foundation C.I.C.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class ValueFormatter {
  static getNonNegativeValue(imput) {
    let value = imput;
    if (typeof value !== "number") {
      value = Number(value);
    }
    if (isNaN(value)) {
      return 0;
    }
    return Math.max(0, value);
  }
}
;// ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/stats/trackStatsBuilder.ts

class TrackStatsBuilder {
  static buildFramerateResolution(trackStats, now) {
    const resolution = {
      height: now.frameHeight,
      width: now.frameWidth
    };
    const frameRate = now.framesPerSecond;
    if (resolution.height && resolution.width) {
      trackStats.setResolution(resolution);
    }
    trackStats.setFramerate(Math.round(frameRate || 0));
  }
  static calculateSimulcastFramerate(trackStats, now, before, layer) {
    let frameRate = trackStats.getFramerate();
    if (!frameRate) {
      if (before) {
        const timeMs = now.timestamp - before.timestamp;
        if (timeMs > 0 && now.framesSent) {
          const numberOfFramesSinceBefore = now.framesSent - before.framesSent;
          frameRate = numberOfFramesSinceBefore / timeMs * 1000;
        }
      }
      if (!frameRate) {
        return;
      }
    }

    // Reset frame rate to 0 when video is suspended as a result of endpoint falling out of last-n.
    frameRate = layer ? Math.round(frameRate / layer) : 0;
    trackStats.setFramerate(frameRate);
  }
  static buildCodec(report, trackStats, now) {
    const codec = report === null || report === void 0 ? void 0 : report.get(now.codecId);
    if (codec) {
      /**
       * The mime type has the following form: video/VP8 or audio/ISAC,
       * so we what to keep just the type after the '/', audio and video
       * keys will be added on the processing side.
       */
      const codecShortType = codec.mimeType.split("/")[1];
      if (codecShortType) trackStats.setCodec(codecShortType);
    }
  }
  static buildBitrateReceived(trackStats, now, before) {
    trackStats.setBitrate({
      download: TrackStatsBuilder.calculateBitrate(now.bytesReceived, before.bytesReceived, now.timestamp, before.timestamp),
      upload: 0
    });
  }
  static buildBitrateSend(trackStats, now, before) {
    trackStats.setBitrate({
      download: 0,
      upload: this.calculateBitrate(now.bytesSent, before.bytesSent, now.timestamp, before.timestamp)
    });
  }
  static buildPacketsLost(trackStats, now, before) {
    const key = now.type === "outbound-rtp" ? "packetsSent" : "packetsReceived";
    let packetsNow = now[key];
    if (!packetsNow || packetsNow < 0) {
      packetsNow = 0;
    }
    const packetsBefore = ValueFormatter.getNonNegativeValue(before[key]);
    const packetsDiff = Math.max(0, packetsNow - packetsBefore);
    const packetsLostNow = ValueFormatter.getNonNegativeValue(now.packetsLost);
    const packetsLostBefore = ValueFormatter.getNonNegativeValue(before.packetsLost);
    const packetsLostDiff = Math.max(0, packetsLostNow - packetsLostBefore);
    trackStats.setLoss({
      packetsTotal: packetsDiff + packetsLostDiff,
      packetsLost: packetsLostDiff,
      isDownloadStream: now.type !== "outbound-rtp"
    });
  }
  static calculateBitrate(bytesNowAny, bytesBeforeAny, nowTimestamp, beforeTimestamp) {
    const bytesNow = ValueFormatter.getNonNegativeValue(bytesNowAny);
    const bytesBefore = ValueFormatter.getNonNegativeValue(bytesBeforeAny);
    const bytesProcessed = Math.max(0, bytesNow - bytesBefore);
    const timeMs = nowTimestamp - beforeTimestamp;
    let bitrateKbps = 0;
    if (timeMs > 0) {
      bitrateKbps = Math.round(bytesProcessed * 8 / timeMs);
    }
    return bitrateKbps;
  }
  static setTrackStatsState(trackStats, transceiver) {
    var _transceiver$sender;
    if (transceiver === undefined) {
      trackStats.alive = false;
      return;
    }
    const track = trackStats.getType() === "remote" ? transceiver.receiver.track : transceiver === null || transceiver === void 0 || (_transceiver$sender = transceiver.sender) === null || _transceiver$sender === void 0 ? void 0 : _transceiver$sender.track;
    if (track === undefined || track === null) {
      trackStats.alive = false;
      return;
    }
    if (track.readyState === "ended") {
      trackStats.alive = false;
      return;
    }
    trackStats.muted = track.muted;
    trackStats.enabled = track.enabled;
    trackStats.alive = true;
  }
  static buildTrackSummary(trackStatsList) {
    const videoTrackSummary = {
      count: 0,
      muted: 0,
      maxJitter: 0,
      maxPacketLoss: 0,
      concealedAudio: 0,
      totalAudio: 0
    };
    const audioTrackSummary = {
      count: 0,
      muted: 0,
      maxJitter: 0,
      maxPacketLoss: 0,
      concealedAudio: 0,
      totalAudio: 0
    };
    const remoteTrackList = trackStatsList.filter(t => t.getType() === "remote");
    const audioTrackList = remoteTrackList.filter(t => t.kind === "audio");
    remoteTrackList.forEach(stats => {
      const trackSummary = stats.kind === "video" ? videoTrackSummary : audioTrackSummary;
      trackSummary.count++;
      if (stats.alive && stats.muted) {
        trackSummary.muted++;
      }
      if (trackSummary.maxJitter < stats.getJitter()) {
        trackSummary.maxJitter = stats.getJitter();
      }
      if (trackSummary.maxPacketLoss < stats.getLoss().packetsLost) {
        trackSummary.maxPacketLoss = stats.getLoss().packetsLost;
      }
      if (audioTrackList.length > 0) {
        var _stats$getAudioConcea, _stats$getAudioConcea2;
        trackSummary.concealedAudio += (_stats$getAudioConcea = stats.getAudioConcealment()) === null || _stats$getAudioConcea === void 0 ? void 0 : _stats$getAudioConcea.concealedAudio;
        trackSummary.totalAudio += (_stats$getAudioConcea2 = stats.getAudioConcealment()) === null || _stats$getAudioConcea2 === void 0 ? void 0 : _stats$getAudioConcea2.totalAudioDuration;
      }
    });
    return {
      audioTrackSummary,
      videoTrackSummary
    };
  }
  static buildJitter(trackStats, statsReport) {
    if (statsReport.type !== "inbound-rtp") {
      return;
    }
    const jitterStr = statsReport === null || statsReport === void 0 ? void 0 : statsReport.jitter;
    if (jitterStr !== undefined) {
      const jitter = ValueFormatter.getNonNegativeValue(jitterStr);
      trackStats.setJitter(Math.round(jitter * 1000));
    } else {
      trackStats.setJitter(-1);
    }
  }
  static buildAudioConcealment(trackStats, statsReport) {
    if (statsReport.type !== "inbound-rtp") {
      return;
    }
    const msPerSample = 1000 * (statsReport === null || statsReport === void 0 ? void 0 : statsReport.totalSamplesDuration) / (statsReport === null || statsReport === void 0 ? void 0 : statsReport.totalSamplesReceived);
    const concealedAudioDuration = msPerSample * (statsReport === null || statsReport === void 0 ? void 0 : statsReport.concealedSamples);
    const totalAudioDuration = 1000 * (statsReport === null || statsReport === void 0 ? void 0 : statsReport.totalSamplesDuration);
    trackStats.setAudioConcealment(concealedAudioDuration, totalAudioDuration);
  }
}
;// ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/stats/connectionStatsReportBuilder.ts
/*
Copyright 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

class ConnectionStatsReportBuilder {
  static build(stats) {
    const report = {};

    // process stats
    const totalPackets = {
      download: 0,
      upload: 0
    };
    const lostPackets = {
      download: 0,
      upload: 0
    };
    let bitrateDownload = 0;
    let bitrateUpload = 0;
    const resolutions = {
      local: new Map(),
      remote: new Map()
    };
    const framerates = {
      local: new Map(),
      remote: new Map()
    };
    const codecs = {
      local: new Map(),
      remote: new Map()
    };
    const jitter = new Map();
    const audioConcealment = new Map();
    let audioBitrateDownload = 0;
    let audioBitrateUpload = 0;
    let videoBitrateDownload = 0;
    let videoBitrateUpload = 0;
    let totalConcealedAudio = 0;
    let totalAudioDuration = 0;
    for (const [trackId, trackStats] of stats) {
      // process packet loss stats
      const loss = trackStats.getLoss();
      const type = loss.isDownloadStream ? "download" : "upload";
      totalPackets[type] += loss.packetsTotal;
      lostPackets[type] += loss.packetsLost;

      // process bitrate stats
      bitrateDownload += trackStats.getBitrate().download;
      bitrateUpload += trackStats.getBitrate().upload;

      // collect resolutions and framerates
      if (trackStats.kind === "audio") {
        // process audio quality stats
        const audioConcealmentForTrack = trackStats.getAudioConcealment();
        totalConcealedAudio += audioConcealmentForTrack.concealedAudio;
        totalAudioDuration += audioConcealmentForTrack.totalAudioDuration;
        audioBitrateDownload += trackStats.getBitrate().download;
        audioBitrateUpload += trackStats.getBitrate().upload;
      } else {
        videoBitrateDownload += trackStats.getBitrate().download;
        videoBitrateUpload += trackStats.getBitrate().upload;
      }
      resolutions[trackStats.getType()].set(trackId, trackStats.getResolution());
      framerates[trackStats.getType()].set(trackId, trackStats.getFramerate());
      codecs[trackStats.getType()].set(trackId, trackStats.getCodec());
      if (trackStats.getType() === "remote") {
        jitter.set(trackId, trackStats.getJitter());
        if (trackStats.kind === "audio") {
          audioConcealment.set(trackId, trackStats.getAudioConcealment());
        }
      }
      trackStats.resetBitrate();
    }
    report.bitrate = {
      upload: bitrateUpload,
      download: bitrateDownload
    };
    report.bitrate.audio = {
      upload: audioBitrateUpload,
      download: audioBitrateDownload
    };
    report.bitrate.video = {
      upload: videoBitrateUpload,
      download: videoBitrateDownload
    };
    report.packetLoss = {
      total: ConnectionStatsReportBuilder.calculatePacketLoss(lostPackets.download + lostPackets.upload, totalPackets.download + totalPackets.upload),
      download: ConnectionStatsReportBuilder.calculatePacketLoss(lostPackets.download, totalPackets.download),
      upload: ConnectionStatsReportBuilder.calculatePacketLoss(lostPackets.upload, totalPackets.upload)
    };
    report.audioConcealment = audioConcealment;
    report.totalAudioConcealment = {
      concealedAudio: totalConcealedAudio,
      totalAudioDuration
    };
    report.framerate = framerates;
    report.resolution = resolutions;
    report.codec = codecs;
    report.jitter = jitter;
    return report;
  }
  static calculatePacketLoss(lostPackets, totalPackets) {
    if (!totalPackets || totalPackets <= 0 || !lostPackets || lostPackets <= 0) {
      return 0;
    }
    return Math.round(lostPackets / totalPackets * 100);
  }
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts
var logger = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/logger.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/stats/callFeedStatsReporter.ts
var callFeedStatsReporter = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/stats/callFeedStatsReporter.ts");
;// ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/stats/callStatsReportGatherer.ts

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/*
Copyright 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

;










class CallStatsReportGatherer {
  constructor(callId, opponentMemberId, pc, emitter, isFocus = true) {
    (0,defineProperty/* default */.A)(this, "isActive", true);
    (0,defineProperty/* default */.A)(this, "previousStatsReport", void 0);
    (0,defineProperty/* default */.A)(this, "currentStatsReport", void 0);
    (0,defineProperty/* default */.A)(this, "connectionStats", new ConnectionStats());
    (0,defineProperty/* default */.A)(this, "trackStats", void 0);
    this.callId = callId;
    this.opponentMemberId = opponentMemberId;
    this.pc = pc;
    this.emitter = emitter;
    this.isFocus = isFocus;
    pc.addEventListener("signalingstatechange", this.onSignalStateChange.bind(this));
    this.trackStats = new MediaTrackStatsHandler(new MediaSsrcHandler(), new MediaTrackHandler(pc));
  }
  async processStats(groupCallId, localUserId) {
    const summary = {
      isFirstCollection: this.previousStatsReport === undefined,
      receivedMedia: 0,
      receivedAudioMedia: 0,
      receivedVideoMedia: 0,
      audioTrackSummary: {
        count: 0,
        muted: 0,
        maxPacketLoss: 0,
        maxJitter: 0,
        concealedAudio: 0,
        totalAudio: 0
      },
      videoTrackSummary: {
        count: 0,
        muted: 0,
        maxPacketLoss: 0,
        maxJitter: 0,
        concealedAudio: 0,
        totalAudio: 0
      }
    };
    if (this.isActive) {
      const statsPromise = this.pc.getStats();
      if (typeof (statsPromise === null || statsPromise === void 0 ? void 0 : statsPromise.then) === "function") {
        return statsPromise.then(report => {
          var _this$connectionStats, _this$connectionStats2;
          // @ts-ignore
          this.currentStatsReport = typeof (report === null || report === void 0 ? void 0 : report.result) === "function" ? report.result() : report;
          try {
            this.processStatsReport(groupCallId, localUserId);
          } catch (error) {
            this.handleError(error);
            return summary;
          }
          this.previousStatsReport = this.currentStatsReport;
          summary.receivedMedia = this.connectionStats.bitrate.download;
          summary.receivedAudioMedia = ((_this$connectionStats = this.connectionStats.bitrate.audio) === null || _this$connectionStats === void 0 ? void 0 : _this$connectionStats.download) || 0;
          summary.receivedVideoMedia = ((_this$connectionStats2 = this.connectionStats.bitrate.video) === null || _this$connectionStats2 === void 0 ? void 0 : _this$connectionStats2.download) || 0;
          const trackSummary = TrackStatsBuilder.buildTrackSummary(Array.from(this.trackStats.getTrack2stats().values()));
          return _objectSpread(_objectSpread({}, summary), {}, {
            audioTrackSummary: trackSummary.audioTrackSummary,
            videoTrackSummary: trackSummary.videoTrackSummary
          });
        }).catch(error => {
          this.handleError(error);
          return summary;
        });
      }
      this.isActive = false;
    }
    return Promise.resolve(summary);
  }
  processStatsReport(groupCallId, localUserId) {
    var _this$currentStatsRep;
    const byteSentStatsReport = new Map();
    byteSentStatsReport.callId = this.callId;
    byteSentStatsReport.opponentMemberId = this.opponentMemberId;
    (_this$currentStatsRep = this.currentStatsReport) === null || _this$currentStatsRep === void 0 || _this$currentStatsRep.forEach(now => {
      const before = this.previousStatsReport ? this.previousStatsReport.get(now.id) : null;
      // RTCIceCandidatePairStats - https://w3c.github.io/webrtc-stats/#candidatepair-dict*
      if (now.type === "candidate-pair" && now.nominated && now.state === "succeeded") {
        this.connectionStats.bandwidth = ConnectionStatsBuilder.buildBandwidthReport(now);
        this.connectionStats.transport = TransportStatsBuilder.buildReport(this.currentStatsReport, now, this.connectionStats.transport, this.isFocus);

        // RTCReceivedRtpStreamStats
        // https://w3c.github.io/webrtc-stats/#receivedrtpstats-dict*
        // RTCSentRtpStreamStats
        // https://w3c.github.io/webrtc-stats/#sentrtpstats-dict*
      } else if (now.type === "inbound-rtp" || now.type === "outbound-rtp") {
        const trackStats = this.trackStats.findTrack2Stats(now, now.type === "inbound-rtp" ? "remote" : "local");
        if (!trackStats) {
          return;
        }
        if (before) {
          TrackStatsBuilder.buildPacketsLost(trackStats, now, before);
        }

        // Get the resolution and framerate for only remote video sources here. For the local video sources,
        // 'track' stats will be used since they have the updated resolution based on the simulcast streams
        // currently being sent. Promise based getStats reports three 'outbound-rtp' streams and there will be
        // more calculations needed to determine what is the highest resolution stream sent by the client if the
        // 'outbound-rtp' stats are used.
        if (now.type === "inbound-rtp") {
          TrackStatsBuilder.buildFramerateResolution(trackStats, now);
          if (before) {
            TrackStatsBuilder.buildBitrateReceived(trackStats, now, before);
          }
          const ts = this.trackStats.findTransceiverByTrackId(trackStats.trackId);
          TrackStatsBuilder.setTrackStatsState(trackStats, ts);
          TrackStatsBuilder.buildJitter(trackStats, now);
          TrackStatsBuilder.buildAudioConcealment(trackStats, now);
        } else if (before) {
          byteSentStatsReport.set(trackStats.trackId, ValueFormatter.getNonNegativeValue(now.bytesSent));
          TrackStatsBuilder.buildBitrateSend(trackStats, now, before);
        }
        TrackStatsBuilder.buildCodec(this.currentStatsReport, trackStats, now);
      } else if (now.type === "track" && now.kind === "video" && !now.remoteSource) {
        const trackStats = this.trackStats.findLocalVideoTrackStats(now);
        if (!trackStats) {
          return;
        }
        TrackStatsBuilder.buildFramerateResolution(trackStats, now);
        TrackStatsBuilder.calculateSimulcastFramerate(trackStats, now, before, this.trackStats.mediaTrackHandler.getActiveSimulcastStreams());
      }
    });
    this.emitter.emitByteSendReport(byteSentStatsReport);
    this.emitter.emitCallFeedReport(callFeedStatsReporter/* CallFeedStatsReporter */.F.buildCallFeedReport(this.callId, this.opponentMemberId, this.pc));
    this.processAndEmitConnectionStatsReport();
  }
  setActive(isActive) {
    this.isActive = isActive;
  }
  getActive() {
    return this.isActive;
  }
  handleError(error) {
    this.isActive = false;
    logger/* logger */.vF.warn(`CallStatsReportGatherer ${this.callId} processStatsReport fails and set to inactive ${error}`);
  }
  processAndEmitConnectionStatsReport() {
    const report = ConnectionStatsReportBuilder.build(this.trackStats.getTrack2stats());
    report.callId = this.callId;
    report.opponentMemberId = this.opponentMemberId;
    this.connectionStats.bandwidth = report.bandwidth;
    this.connectionStats.bitrate = report.bitrate;
    this.connectionStats.packetLoss = report.packetLoss;
    this.emitter.emitConnectionStatsReport(_objectSpread(_objectSpread({}, report), {}, {
      transport: this.connectionStats.transport
    }));
    this.connectionStats.transport = [];
  }
  stopProcessingStats() {}
  onSignalStateChange() {
    if (this.pc.signalingState === "stable") {
      if (this.pc.currentRemoteDescription) {
        this.trackStats.mediaSsrcHandler.parse(this.pc.currentRemoteDescription.sdp, "remote");
      }
      if (this.pc.currentLocalDescription) {
        this.trackStats.mediaSsrcHandler.parse(this.pc.currentLocalDescription.sdp, "local");
      }
    }
  }
  setOpponentMemberId(id) {
    this.opponentMemberId = id;
  }
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/typed-event-emitter.ts
var typed_event_emitter = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/models/typed-event-emitter.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/stats/statsReport.ts
var statsReport = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/stats/statsReport.ts");
;// ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/stats/statsReportEmitter.ts
/*
Copyright 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



class StatsReportEmitter extends typed_event_emitter/* TypedEventEmitter */.X {
  emitByteSendReport(byteSentStats) {
    this.emit(statsReport/* StatsReport */.I.BYTE_SENT_STATS, byteSentStats);
  }
  emitConnectionStatsReport(report) {
    this.emit(statsReport/* StatsReport */.I.CONNECTION_STATS, report);
  }
  emitCallFeedReport(report) {
    this.emit(statsReport/* StatsReport */.I.CALL_FEED_REPORT, report);
  }
  emitSummaryStatsReport(report) {
    this.emit(statsReport/* StatsReport */.I.SUMMARY_STATS, report);
  }
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/stats/summaryStatsReportGatherer.ts
var summaryStatsReportGatherer = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/stats/summaryStatsReportGatherer.ts");
;// ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/stats/groupCallStats.ts

/*
Copyright 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




class GroupCallStats {
  constructor(groupCallId, userId, interval = 10000) {
    (0,defineProperty/* default */.A)(this, "timer", void 0);
    (0,defineProperty/* default */.A)(this, "gatherers", new Map());
    (0,defineProperty/* default */.A)(this, "reports", new StatsReportEmitter());
    (0,defineProperty/* default */.A)(this, "summaryStatsReportGatherer", new summaryStatsReportGatherer/* SummaryStatsReportGatherer */.Q(this.reports));
    this.groupCallId = groupCallId;
    this.userId = userId;
    this.interval = interval;
  }
  start() {
    if (this.timer === undefined && this.interval > 0) {
      this.timer = setInterval(() => {
        this.processStats();
      }, this.interval);
    }
  }
  stop() {
    if (this.timer !== undefined) {
      clearInterval(this.timer);
      this.gatherers.forEach(c => c.stopProcessingStats());
    }
  }
  hasStatsReportGatherer(callId) {
    return this.gatherers.has(callId);
  }
  addStatsReportGatherer(callId, opponentMemberId, peerConnection) {
    if (this.hasStatsReportGatherer(callId)) {
      return false;
    }
    this.gatherers.set(callId, new CallStatsReportGatherer(callId, opponentMemberId, peerConnection, this.reports));
    return true;
  }
  removeStatsReportGatherer(callId) {
    return this.gatherers.delete(callId);
  }
  getStatsReportGatherer(callId) {
    return this.hasStatsReportGatherer(callId) ? this.gatherers.get(callId) : undefined;
  }
  updateOpponentMember(callId, opponentMember) {
    var _this$getStatsReportG;
    (_this$getStatsReportG = this.getStatsReportGatherer(callId)) === null || _this$getStatsReportG === void 0 || _this$getStatsReportG.setOpponentMemberId(opponentMember);
  }
  processStats() {
    const summary = [];
    this.gatherers.forEach(c => {
      summary.push(c.processStats(this.groupCallId, this.userId));
    });
    Promise.all(summary).then(s => this.summaryStatsReportGatherer.build(s)).catch(err => {
      logger/* logger */.vF.error("Could not build summary stats report", err);
    });
  }
  setInterval(interval) {
    this.interval = interval;
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/stats/statsReport.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ StatsReport)
/* harmony export */ });
/*
Copyright 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

let StatsReport = /*#__PURE__*/function (StatsReport) {
  StatsReport["CONNECTION_STATS"] = "StatsReport.connection_stats";
  StatsReport["CALL_FEED_REPORT"] = "StatsReport.call_feed_report";
  StatsReport["BYTE_SENT_STATS"] = "StatsReport.byte_sent_stats";
  StatsReport["SUMMARY_STATS"] = "StatsReport.summary_stats";
  return StatsReport;
}({});

/// ByteSentStatsReport ################################################################################################

/// ConnectionStatsReport ##############################################################################################

/// SummaryStatsReport #################################################################################################

/// CallFeedReport #####################################################################################################

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/webrtc/stats/summaryStatsReportGatherer.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ SummaryStatsReportGatherer)
/* harmony export */ });
/*
Copyright 2023 The Matrix.org Foundation C.I.C.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

class SummaryStatsReportGatherer {
  constructor(emitter) {
    this.emitter = emitter;
  }
  build(allSummary) {
    // Filter all stats which collect the first time webrtc stats.
    // Because stats based on time interval and the first collection of a summery stats has no previous
    // webrtcStats as basement all the calculation are 0. We don't want track the 0 stats.
    const summary = allSummary.filter(s => !s.isFirstCollection);
    const summaryTotalCount = summary.length;
    // For counting the peer connections we also want to consider the ignored summaries
    const peerConnectionsCount = allSummary.length;
    if (summaryTotalCount === 0) {
      return;
    }
    const summaryCounter = {
      receivedAudio: 0,
      receivedVideo: 0,
      receivedMedia: 0,
      concealedAudio: 0,
      totalAudio: 0
    };
    let maxJitter = 0;
    let maxPacketLoss = 0;
    summary.forEach(stats => {
      this.countTrackListReceivedMedia(summaryCounter, stats);
      this.countConcealedAudio(summaryCounter, stats);
      maxJitter = this.buildMaxJitter(maxJitter, stats);
      maxPacketLoss = this.buildMaxPacketLoss(maxPacketLoss, stats);
    });
    const decimalPlaces = 5;
    const report = {
      percentageReceivedMedia: Number((summaryCounter.receivedMedia / summaryTotalCount).toFixed(decimalPlaces)),
      percentageReceivedVideoMedia: Number((summaryCounter.receivedVideo / summaryTotalCount).toFixed(decimalPlaces)),
      percentageReceivedAudioMedia: Number((summaryCounter.receivedAudio / summaryTotalCount).toFixed(decimalPlaces)),
      maxJitter,
      maxPacketLoss,
      percentageConcealedAudio: Number(summaryCounter.totalAudio > 0 ? (summaryCounter.concealedAudio / summaryCounter.totalAudio).toFixed(decimalPlaces) : 0),
      peerConnections: peerConnectionsCount
    };
    this.emitter.emitSummaryStatsReport(report);
  }
  static extendSummaryReport(report, callParticipants) {
    // Calculate the actual number of devices based on the participants state event
    // (this is used, to compare the expected participant count from the room state with the acutal peer connections)
    // const devices = callParticipants.()
    const devices = [];
    const users = [];
    for (const userEntry of callParticipants) {
      users.push(userEntry);
      for (const device of userEntry[1]) {
        devices.push(device);
      }
    }
    report.opponentDevicesInCall = Math.max(0, devices.length - 1);
    report.opponentUsersInCall = Math.max(0, users.length - 1);
    report.diffDevicesToPeerConnections = Math.max(0, devices.length - 1) - report.peerConnections;
    report.ratioPeerConnectionToDevices = Math.max(0, devices.length - 1) == 0 ? 0 : report.peerConnections / (devices.length - 1);
  }
  countTrackListReceivedMedia(counter, stats) {
    let hasReceivedAudio = false;
    let hasReceivedVideo = false;
    if (stats.receivedAudioMedia > 0 || stats.audioTrackSummary.count === 0) {
      counter.receivedAudio++;
      hasReceivedAudio = true;
    }
    if (stats.receivedVideoMedia > 0 || stats.videoTrackSummary.count === 0) {
      counter.receivedVideo++;
      hasReceivedVideo = true;
    } else {
      if (stats.videoTrackSummary.muted > 0 && stats.videoTrackSummary.muted === stats.videoTrackSummary.count) {
        counter.receivedVideo++;
        hasReceivedVideo = true;
      }
    }
    if (hasReceivedVideo && hasReceivedAudio) {
      counter.receivedMedia++;
    }
  }
  buildMaxJitter(maxJitter, stats) {
    if (maxJitter < stats.videoTrackSummary.maxJitter) {
      maxJitter = stats.videoTrackSummary.maxJitter;
    }
    if (maxJitter < stats.audioTrackSummary.maxJitter) {
      maxJitter = stats.audioTrackSummary.maxJitter;
    }
    return maxJitter;
  }
  buildMaxPacketLoss(maxPacketLoss, stats) {
    if (maxPacketLoss < stats.videoTrackSummary.maxPacketLoss) {
      maxPacketLoss = stats.videoTrackSummary.maxPacketLoss;
    }
    if (maxPacketLoss < stats.audioTrackSummary.maxPacketLoss) {
      maxPacketLoss = stats.audioTrackSummary.maxPacketLoss;
    }
    return maxPacketLoss;
  }
  countConcealedAudio(summaryCounter, stats) {
    summaryCounter.concealedAudio += stats.audioTrackSummary.concealedAudio;
    summaryCounter.totalAudio += stats.audioTrackSummary.totalAudio;
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/wellKnownCachedValue.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ createWellKnownCachedValue)
/* harmony export */ });
/* harmony import */ var _pollingCachedValue_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/pollingCachedValue.ts");
/* harmony import */ var _client_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/client.ts");
/* harmony import */ var _autodiscovery_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/autodiscovery.ts");
/*
Copyright 2026 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/





/**
 * Builds a cache for the well-known configuration of the given client.
 */
function createWellKnownCachedValue(client, logger) {
  return new _pollingCachedValue_ts__WEBPACK_IMPORTED_MODULE_0__/* .PollingCachedValue */ .P({
    name: "WellKnown",
    logger,
    // No expiration by default
    ttlMillis: undefined,
    fetch: () => {
      var _client$getDomain;
      return _autodiscovery_ts__WEBPACK_IMPORTED_MODULE_2__/* .AutoDiscovery */ .MN.getRawClientConfig((_client$getDomain = client.getDomain()) !== null && _client$getDomain !== void 0 ? _client$getDomain : undefined);
    },
    onValueCached: wellKnown => client.emit(_client_ts__WEBPACK_IMPORTED_MODULE_1__/* .ClientEvent */ .AU.ClientWellKnown, wellKnown)
  });
}

/***/ },

/***/ "../../node_modules/.pnpm/events@3.3.0/node_modules/events/events.js"
(module) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ },

/***/ "../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/ExtensibleEvents.js"
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ExtensibleEvents = void 0;

var _NamespacedMap = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/NamespacedMap.js");

var _InvalidEventError = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/InvalidEventError.js");

var _MRoomMessage = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/interpreters/legacy/MRoomMessage.js");

var _MMessage = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/interpreters/modern/MMessage.js");

var _message_types = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/message_types.js");

var _poll_types = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/poll_types.js");

var _MPoll = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/interpreters/modern/MPoll.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Utility class for parsing and identifying event types in a renderable form. An
 * instance of this class can be created to change rendering preference depending
 * on use-case.
 */
var ExtensibleEvents = /*#__PURE__*/function () {
  function ExtensibleEvents() {
    _classCallCheck(this, ExtensibleEvents);

    _defineProperty(this, "interpreters", new _NamespacedMap.NamespacedMap([// Remember to add your unit test when adding to this! ("known events" test description)
    [_MRoomMessage.LEGACY_M_ROOM_MESSAGE, _MRoomMessage.parseMRoomMessage], [_message_types.M_MESSAGE, _MMessage.parseMMessage], [_message_types.M_EMOTE, _MMessage.parseMMessage], [_message_types.M_NOTICE, _MMessage.parseMMessage], [_poll_types.M_POLL_START, _MPoll.parseMPoll], [_poll_types.M_POLL_RESPONSE, _MPoll.parseMPoll], [_poll_types.M_POLL_END, _MPoll.parseMPoll]]));

    _defineProperty(this, "_unknownInterpretOrder", [_message_types.M_MESSAGE]);
  }
  /**
   * Gets the default instance for all extensible event parsing.
   */


  _createClass(ExtensibleEvents, [{
    key: "unknownInterpretOrder",
    get:
    /**
     * Gets the order the internal processor will use for unknown primary
     * event types.
     */
    function get() {
      var _this$_unknownInterpr;

      return (_this$_unknownInterpr = this._unknownInterpretOrder) !== null && _this$_unknownInterpr !== void 0 ? _this$_unknownInterpr : [];
    }
    /**
     * Sets the order the internal processor will use for unknown primary
     * event types.
     * @param {NamespacedValue<string, string>[]} val The parsing order.
     */
    ,
    set: function set(val) {
      this._unknownInterpretOrder = val;
    }
    /**
     * Gets the order the internal processor will use for unknown primary
     * event types.
     */

  }, {
    key: "registerInterpreter",
    value:
    /**
     * Registers a primary event type interpreter. Note that the interpreter might be
     * called with non-primary events if the event is being parsed as a fallback.
     * @param {NamespacedValue<string, string>} wireEventType The event type.
     * @param {EventInterpreter} interpreter The interpreter.
     */
    function registerInterpreter(wireEventType, interpreter) {
      this.interpreters.set(wireEventType, interpreter);
    }
    /**
     * Registers a primary event type interpreter. Note that the interpreter might be
     * called with non-primary events if the event is being parsed as a fallback.
     * @param {NamespacedValue<string, string>} wireEventType The event type.
     * @param {EventInterpreter} interpreter The interpreter.
     */

  }, {
    key: "parse",
    value:
    /**
     * Parses an event, trying the primary event type first. If the primary type is not known
     * then the content will be inspected to find the most suitable fallback.
     *
     * If the parsing failed or was a completely unknown type, this will return falsy.
     * @param {IPartialEvent<object>} wireFormat The event to parse.
     * @returns {Optional<ExtensibleEvent>} The parsed extensible event.
     */
    function parse(wireFormat) {
      try {
        if (this.interpreters.hasNamespaced(wireFormat.type)) {
          return this.interpreters.getNamespaced(wireFormat.type)(wireFormat);
        }

        var _iterator = _createForOfIteratorHelper(this.unknownInterpretOrder),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var tryType = _step.value;

            if (this.interpreters.has(tryType)) {
              var val = this.interpreters.get(tryType)(wireFormat);
              if (val) return val;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return null; // cannot be parsed
      } catch (e) {
        if (e instanceof _InvalidEventError.InvalidEventError) {
          return null; // fail parsing and move on
        }

        throw e; // re-throw everything else
      }
    }
    /**
     * Parses an event, trying the primary event type first. If the primary type is not known
     * then the content will be inspected to find the most suitable fallback.
     *
     * If the parsing failed or was a completely unknown type, this will return falsy.
     * @param {IPartialEvent<object>} wireFormat The event to parse.
     * @returns {Optional<ExtensibleEvent>} The parsed extensible event.
     */

  }], [{
    key: "defaultInstance",
    get: function get() {
      return ExtensibleEvents._defaultInstance;
    }
  }, {
    key: "unknownInterpretOrder",
    get: function get() {
      return ExtensibleEvents.defaultInstance.unknownInterpretOrder;
    }
    /**
     * Sets the order the internal processor will use for unknown primary
     * event types.
     * @param {NamespacedValue<string, string>[]} val The parsing order.
     */
    ,
    set: function set(val) {
      ExtensibleEvents.defaultInstance.unknownInterpretOrder = val;
    }
  }, {
    key: "registerInterpreter",
    value: function registerInterpreter(wireEventType, interpreter) {
      ExtensibleEvents.defaultInstance.registerInterpreter(wireEventType, interpreter);
    }
  }, {
    key: "parse",
    value: function parse(wireFormat) {
      return ExtensibleEvents.defaultInstance.parse(wireFormat);
    }
  }]);

  return ExtensibleEvents;
}();

exports.ExtensibleEvents = ExtensibleEvents;

_defineProperty(ExtensibleEvents, "_defaultInstance", new ExtensibleEvents());

/***/ },

/***/ "../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/IPartialEvent.js"
(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ },

/***/ "../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/InvalidEventError.js"
(__unused_webpack_module, exports) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.InvalidEventError = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
Copyright 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Thrown when an event is unforgivably unparsable.
 */
var InvalidEventError = /*#__PURE__*/function (_Error) {
  _inherits(InvalidEventError, _Error);

  var _super = _createSuper(InvalidEventError);

  function InvalidEventError(message) {
    _classCallCheck(this, InvalidEventError);

    return _super.call(this, message);
  }

  return _createClass(InvalidEventError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

exports.InvalidEventError = InvalidEventError;

/***/ },

/***/ "../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/NamespacedMap.js"
(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.NamespacedMap = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A `Map` implementation which accepts a NamespacedValue as a key, and arbitrary value. The
 * namespaced value must be a string type.
 */
var NamespacedMap = /*#__PURE__*/function () {
  // protected to make tests happy for access

  /**
   * Creates a new map with optional seed data.
   * @param {Array<[NS, V]>} initial The seed data.
   */
  function NamespacedMap(initial) {
    _classCallCheck(this, NamespacedMap);

    _defineProperty(this, "internalMap", new Map());

    if (initial) {
      var _iterator = _createForOfIteratorHelper(initial),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var val = _step.value;
          this.set(val[0], val[1]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }
  /**
   * Gets a value from the map. If the value does not exist under
   * either namespace option, falsy is returned.
   * @param {NS} key The key.
   * @returns {Optional<V>} The value, or falsy.
   */


  _createClass(NamespacedMap, [{
    key: "get",
    value: function get(key) {
      if (key.name && this.internalMap.has(key.name)) {
        return this.internalMap.get(key.name);
      }

      if (key.altName && this.internalMap.has(key.altName)) {
        return this.internalMap.get(key.altName);
      }

      return null;
    }
    /**
     * Sets a value in the map.
     * @param {NS} key The key.
     * @param {V} val The value.
     */

  }, {
    key: "set",
    value: function set(key, val) {
      if (key.name) {
        this.internalMap.set(key.name, val);
      }

      if (key.altName) {
        this.internalMap.set(key.altName, val);
      }
    }
    /**
     * Determines if any of the valid namespaced values are present
     * in the map.
     * @param {NS} key The key.
     * @returns {boolean} True if present.
     */

  }, {
    key: "has",
    value: function has(key) {
      return !!this.get(key);
    }
    /**
     * Removes all the namespaced values from the map.
     * @param {NS} key The key.
     */

  }, {
    key: "delete",
    value: function _delete(key) {
      if (key.name) {
        this.internalMap["delete"](key.name);
      }

      if (key.altName) {
        this.internalMap["delete"](key.altName);
      }
    }
    /**
     * Determines if the map contains a specific namespaced value
     * instead of the parent NS type.
     * @param {string} key The key.
     * @returns {boolean} True if present.
     */

  }, {
    key: "hasNamespaced",
    value: function hasNamespaced(key) {
      return this.internalMap.has(key);
    }
    /**
     * Gets a specific namespaced value from the map instead of the
     * parent NS type. Returns falsy if not found.
     * @param {string} key The key.
     * @returns {Optional<V>} The value, or falsy.
     */

  }, {
    key: "getNamespaced",
    value: function getNamespaced(key) {
      return this.internalMap.get(key);
    }
  }]);

  return NamespacedMap;
}();

exports.NamespacedMap = NamespacedMap;

/***/ },

/***/ "../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/NamespacedValue.js"
(__unused_webpack_module, exports) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UnstableValue = exports.NamespacedValue = void 0;

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/*
Copyright 2021 - 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Represents a simple Matrix namespaced value. This will assume that if a stable prefix
 * is provided that the stable prefix should be used when representing the identifier.
 */
var NamespacedValue = /*#__PURE__*/function () {
  // Stable is optional, but one of the two parameters is required, hence the weird-looking types.
  // Goal is to have developers explicitly say there is no stable value (if applicable).
  function NamespacedValue(stable, unstable) {
    _classCallCheck(this, NamespacedValue);

    this.stable = stable;
    this.unstable = unstable;

    if (!this.unstable && !this.stable) {
      throw new Error("One of stable or unstable values must be supplied");
    }
  }

  _createClass(NamespacedValue, [{
    key: "name",
    get: function get() {
      if (this.stable) {
        return this.stable;
      }

      return this.unstable;
    }
  }, {
    key: "altName",
    get: function get() {
      if (!this.stable) {
        return null;
      }

      return this.unstable;
    }
  }, {
    key: "matches",
    value: function matches(val) {
      return !!this.name && this.name === val || !!this.altName && this.altName === val;
    } // this desperately wants https://github.com/microsoft/TypeScript/pull/26349 at the top level of the class
    // so we can instantiate `NamespacedValue<string, _, _>` as a default type for that namespace.

  }, {
    key: "findIn",
    value: function findIn(obj) {
      var val;

      if (this.name) {
        val = obj === null || obj === void 0 ? void 0 : obj[this.name];
      }

      if (!val && this.altName) {
        val = obj === null || obj === void 0 ? void 0 : obj[this.altName];
      }

      return val;
    }
  }, {
    key: "includedIn",
    value: function includedIn(arr) {
      var included = false;

      if (this.name) {
        included = arr.includes(this.name);
      }

      if (!included && this.altName) {
        included = arr.includes(this.altName);
      }

      return included;
    }
  }]);

  return NamespacedValue;
}();
/**
 * Represents a namespaced value which prioritizes the unstable value over the stable
 * value.
 */


exports.NamespacedValue = NamespacedValue;

var UnstableValue = /*#__PURE__*/function (_NamespacedValue) {
  _inherits(UnstableValue, _NamespacedValue);

  var _super = _createSuper(UnstableValue);

  // Note: Constructor difference is that `unstable` is *required*.
  function UnstableValue(stable, unstable) {
    var _this;

    _classCallCheck(this, UnstableValue);

    _this = _super.call(this, stable, unstable);

    if (!_this.unstable) {
      throw new Error("Unstable value must be supplied");
    }

    return _this;
  }

  _createClass(UnstableValue, [{
    key: "name",
    get: function get() {
      return this.unstable;
    }
  }, {
    key: "altName",
    get: function get() {
      return this.stable;
    }
  }]);

  return UnstableValue;
}(NamespacedValue);

exports.UnstableValue = UnstableValue;

/***/ },

/***/ "../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/EmoteEvent.js"
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.EmoteEvent = void 0;

var _MessageEvent2 = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/MessageEvent.js");

var _message_types = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/message_types.js");

var _events = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/utility/events.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Emote events are just decorated message events

/**
 * Represents an emote. This is essentially a MessageEvent with
 * emote characteristics considered.
 */
var EmoteEvent = /*#__PURE__*/function (_MessageEvent) {
  _inherits(EmoteEvent, _MessageEvent);

  var _super = _createSuper(EmoteEvent);

  function EmoteEvent(wireFormat) {
    _classCallCheck(this, EmoteEvent);

    return _super.call(this, wireFormat);
  }

  _createClass(EmoteEvent, [{
    key: "isEmote",
    get: function get() {
      return true; // override
    }
  }, {
    key: "isEquivalentTo",
    value: function isEquivalentTo(primaryEventType) {
      return (0, _events.isEventTypeSame)(primaryEventType, _message_types.M_EMOTE) || _get(_getPrototypeOf(EmoteEvent.prototype), "isEquivalentTo", this).call(this, primaryEventType);
    }
  }, {
    key: "serialize",
    value: function serialize() {
      var message = _get(_getPrototypeOf(EmoteEvent.prototype), "serialize", this).call(this);

      message.content['msgtype'] = "m.emote";
      return message;
    }
    /**
     * Creates a new EmoteEvent from text and HTML.
     * @param {string} text The text.
     * @param {string} html Optional HTML.
     * @returns {MessageEvent} The representative message event.
     */

  }], [{
    key: "from",
    value: function from(text, html) {
      var _content;

      return new EmoteEvent({
        type: _message_types.M_EMOTE.name,
        content: (_content = {}, _defineProperty(_content, _message_types.M_TEXT.name, text), _defineProperty(_content, _message_types.M_HTML.name, html), _content)
      });
    }
  }]);

  return EmoteEvent;
}(_MessageEvent2.MessageEvent);

exports.EmoteEvent = EmoteEvent;

/***/ },

/***/ "../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/ExtensibleEvent.js"
(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ExtensibleEvent = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/*
Copyright 2021 - 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Represents an Extensible Event in Matrix.
 */
var ExtensibleEvent = /*#__PURE__*/function () {
  function ExtensibleEvent(wireFormat) {
    _classCallCheck(this, ExtensibleEvent);

    this.wireFormat = wireFormat;
  }
  /**
   * Shortcut to wireFormat.content
   */


  _createClass(ExtensibleEvent, [{
    key: "wireContent",
    get: function get() {
      return this.wireFormat.content;
    }
    /**
     * Serializes the event into a format which can be used to send the
     * event to the room.
     * @returns {IPartialEvent<object>} The serialized event.
     */

  }]);

  return ExtensibleEvent;
}();

exports.ExtensibleEvent = ExtensibleEvent;

/***/ },

/***/ "../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/MessageEvent.js"
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MessageEvent = void 0;

var _ExtensibleEvent2 = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/ExtensibleEvent.js");

var _types = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/types.js");

var _InvalidEventError = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/InvalidEventError.js");

var _message_types = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/message_types.js");

var _events = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/utility/events.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Represents a message event. Message events are the simplest form of event with
 * just text (optionally of different mimetypes, like HTML).
 *
 * Message events can additionally be an Emote or Notice, though typically those
 * are represented as EmoteEvent and NoticeEvent respectively.
 */
var MessageEvent = /*#__PURE__*/function (_ExtensibleEvent) {
  _inherits(MessageEvent, _ExtensibleEvent);

  var _super = _createSuper(MessageEvent);

  /**
   * The default text for the event.
   */

  /**
   * The default HTML for the event, if provided.
   */

  /**
   * All the different renderings of the message. Note that this is the same
   * format as an m.message body but may contain elements not found directly
   * in the event content: this is because this is interpreted based off the
   * other information available in the event.
   */

  /**
   * Creates a new MessageEvent from a pure format. Note that the event is
   * *not* parsed here: it will be treated as a literal m.message primary
   * typed event.
   * @param {IPartialEvent<M_MESSAGE_EVENT_CONTENT>} wireFormat The event.
   */
  function MessageEvent(wireFormat) {
    var _this;

    _classCallCheck(this, MessageEvent);

    _this = _super.call(this, wireFormat);

    _defineProperty(_assertThisInitialized(_this), "text", void 0);

    _defineProperty(_assertThisInitialized(_this), "html", void 0);

    _defineProperty(_assertThisInitialized(_this), "renderings", void 0);

    var mmessage = _message_types.M_MESSAGE.findIn(_this.wireContent);

    var mtext = _message_types.M_TEXT.findIn(_this.wireContent);

    var mhtml = _message_types.M_HTML.findIn(_this.wireContent);

    if ((0, _types.isProvided)(mmessage)) {
      if (!Array.isArray(mmessage)) {
        throw new _InvalidEventError.InvalidEventError("m.message contents must be an array");
      }

      var text = mmessage.find(function (r) {
        return !(0, _types.isProvided)(r.mimetype) || r.mimetype === "text/plain";
      });
      var html = mmessage.find(function (r) {
        return r.mimetype === "text/html";
      });
      if (!text) throw new _InvalidEventError.InvalidEventError("m.message is missing a plain text representation");
      _this.text = text.body;
      _this.html = html === null || html === void 0 ? void 0 : html.body;
      _this.renderings = mmessage;
    } else if ((0, _types.isOptionalAString)(mtext)) {
      _this.text = mtext;
      _this.html = mhtml;
      _this.renderings = [{
        body: mtext,
        mimetype: "text/plain"
      }];

      if (_this.html) {
        _this.renderings.push({
          body: _this.html,
          mimetype: "text/html"
        });
      }
    } else {
      throw new _InvalidEventError.InvalidEventError("Missing textual representation for event");
    }

    return _this;
  }
  /**
   * Gets whether this message is considered an "emote". Note that a message
   * might be an emote and notice at the same time: while technically possible,
   * the event should be interpreted as one or the other.
   */


  _createClass(MessageEvent, [{
    key: "isEmote",
    get: function get() {
      return _message_types.M_EMOTE.matches(this.wireFormat.type) || (0, _types.isProvided)(_message_types.M_EMOTE.findIn(this.wireFormat.content));
    }
    /**
     * Gets whether this message is considered a "notice". Note that a message
     * might be an emote and notice at the same time: while technically possible,
     * the event should be interpreted as one or the other.
     */

  }, {
    key: "isNotice",
    get: function get() {
      return _message_types.M_NOTICE.matches(this.wireFormat.type) || (0, _types.isProvided)(_message_types.M_NOTICE.findIn(this.wireFormat.content));
    }
  }, {
    key: "isEquivalentTo",
    value: function isEquivalentTo(primaryEventType) {
      return (0, _events.isEventTypeSame)(primaryEventType, _message_types.M_MESSAGE);
    }
  }, {
    key: "serializeMMessageOnly",
    value: function serializeMMessageOnly() {
      var messageRendering = _defineProperty({}, _message_types.M_MESSAGE.name, this.renderings); // Use the shorthand if it's just a simple text event


      if (this.renderings.length === 1) {
        var mime = this.renderings[0].mimetype;

        if (mime === undefined || mime === "text/plain") {
          messageRendering = _defineProperty({}, _message_types.M_TEXT.name, this.renderings[0].body);
        }
      }

      return messageRendering;
    }
  }, {
    key: "serialize",
    value: function serialize() {
      var _this$html;

      return {
        type: "m.room.message",
        content: _objectSpread(_objectSpread({}, this.serializeMMessageOnly()), {}, {
          body: this.text,
          msgtype: "m.text",
          format: this.html ? "org.matrix.custom.html" : undefined,
          formatted_body: (_this$html = this.html) !== null && _this$html !== void 0 ? _this$html : undefined
        })
      };
    }
    /**
     * Creates a new MessageEvent from text and HTML.
     * @param {string} text The text.
     * @param {string} html Optional HTML.
     * @returns {MessageEvent} The representative message event.
     */

  }], [{
    key: "from",
    value: function from(text, html) {
      var _content;

      return new MessageEvent({
        type: _message_types.M_MESSAGE.name,
        content: (_content = {}, _defineProperty(_content, _message_types.M_TEXT.name, text), _defineProperty(_content, _message_types.M_HTML.name, html), _content)
      });
    }
  }]);

  return MessageEvent;
}(_ExtensibleEvent2.ExtensibleEvent);

exports.MessageEvent = MessageEvent;

/***/ },

/***/ "../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/NoticeEvent.js"
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.NoticeEvent = void 0;

var _MessageEvent2 = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/MessageEvent.js");

var _message_types = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/message_types.js");

var _events = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/utility/events.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Notice events are just decorated message events

/**
 * Represents a notice. This is essentially a MessageEvent with
 * notice characteristics considered.
 */
var NoticeEvent = /*#__PURE__*/function (_MessageEvent) {
  _inherits(NoticeEvent, _MessageEvent);

  var _super = _createSuper(NoticeEvent);

  function NoticeEvent(wireFormat) {
    _classCallCheck(this, NoticeEvent);

    return _super.call(this, wireFormat);
  }

  _createClass(NoticeEvent, [{
    key: "isNotice",
    get: function get() {
      return true; // override
    }
  }, {
    key: "isEquivalentTo",
    value: function isEquivalentTo(primaryEventType) {
      return (0, _events.isEventTypeSame)(primaryEventType, _message_types.M_NOTICE) || _get(_getPrototypeOf(NoticeEvent.prototype), "isEquivalentTo", this).call(this, primaryEventType);
    }
  }, {
    key: "serialize",
    value: function serialize() {
      var message = _get(_getPrototypeOf(NoticeEvent.prototype), "serialize", this).call(this);

      message.content['msgtype'] = "m.notice";
      return message;
    }
    /**
     * Creates a new NoticeEvent from text and HTML.
     * @param {string} text The text.
     * @param {string} html Optional HTML.
     * @returns {MessageEvent} The representative message event.
     */

  }], [{
    key: "from",
    value: function from(text, html) {
      var _content;

      return new NoticeEvent({
        type: _message_types.M_NOTICE.name,
        content: (_content = {}, _defineProperty(_content, _message_types.M_TEXT.name, text), _defineProperty(_content, _message_types.M_HTML.name, html), _content)
      });
    }
  }]);

  return NoticeEvent;
}(_MessageEvent2.MessageEvent);

exports.NoticeEvent = NoticeEvent;

/***/ },

/***/ "../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/PollEndEvent.js"
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PollEndEvent = void 0;

var _poll_types = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/poll_types.js");

var _InvalidEventError = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/InvalidEventError.js");

var _relationship_types = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/relationship_types.js");

var _MessageEvent = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/MessageEvent.js");

var _message_types = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/message_types.js");

var _events = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/utility/events.js");

var _ExtensibleEvent2 = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/ExtensibleEvent.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Represents a poll end/closure event.
 */
var PollEndEvent = /*#__PURE__*/function (_ExtensibleEvent) {
  _inherits(PollEndEvent, _ExtensibleEvent);

  var _super = _createSuper(PollEndEvent);

  /**
   * The poll start event ID referenced by the response.
   */

  /**
   * The closing message for the event.
   */

  /**
   * Creates a new PollEndEvent from a pure format. Note that the event is *not*
   * parsed here: it will be treated as a literal m.poll.response primary typed event.
   * @param {IPartialEvent<M_POLL_END_EVENT_CONTENT>} wireFormat The event.
   */
  function PollEndEvent(wireFormat) {
    var _this;

    _classCallCheck(this, PollEndEvent);

    _this = _super.call(this, wireFormat);

    _defineProperty(_assertThisInitialized(_this), "pollEventId", void 0);

    _defineProperty(_assertThisInitialized(_this), "closingMessage", void 0);

    var rel = _this.wireContent["m.relates_to"];

    if (!_relationship_types.REFERENCE_RELATION.matches(rel === null || rel === void 0 ? void 0 : rel.rel_type) || typeof (rel === null || rel === void 0 ? void 0 : rel.event_id) !== "string") {
      throw new _InvalidEventError.InvalidEventError("Relationship must be a reference to an event");
    }

    _this.pollEventId = rel.event_id;
    _this.closingMessage = new _MessageEvent.MessageEvent(_this.wireFormat);
    return _this;
  }

  _createClass(PollEndEvent, [{
    key: "isEquivalentTo",
    value: function isEquivalentTo(primaryEventType) {
      return (0, _events.isEventTypeSame)(primaryEventType, _poll_types.M_POLL_END);
    }
  }, {
    key: "serialize",
    value: function serialize() {
      return {
        type: _poll_types.M_POLL_END.name,
        content: _objectSpread(_defineProperty({
          "m.relates_to": {
            rel_type: _relationship_types.REFERENCE_RELATION.name,
            event_id: this.pollEventId
          }
        }, _poll_types.M_POLL_END.name, {}), this.closingMessage.serialize().content)
      };
    }
    /**
     * Creates a new PollEndEvent from a poll event ID.
     * @param {string} pollEventId The poll start event ID.
     * @param {string} message A closing message, typically revealing the top answer.
     * @returns {PollStartEvent} The representative poll closure event.
     */

  }], [{
    key: "from",
    value: function from(pollEventId, message) {
      var _content;

      return new PollEndEvent({
        type: _poll_types.M_POLL_END.name,
        content: (_content = {
          "m.relates_to": {
            rel_type: _relationship_types.REFERENCE_RELATION.name,
            event_id: pollEventId
          }
        }, _defineProperty(_content, _poll_types.M_POLL_END.name, {}), _defineProperty(_content, _message_types.M_TEXT.name, message), _content)
      });
    }
  }]);

  return PollEndEvent;
}(_ExtensibleEvent2.ExtensibleEvent);

exports.PollEndEvent = PollEndEvent;

/***/ },

/***/ "../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/PollResponseEvent.js"
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PollResponseEvent = void 0;

var _ExtensibleEvent2 = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/ExtensibleEvent.js");

var _poll_types = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/poll_types.js");

var _InvalidEventError = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/InvalidEventError.js");

var _relationship_types = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/relationship_types.js");

var _events = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/utility/events.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Represents a poll response event.
 */
var PollResponseEvent = /*#__PURE__*/function (_ExtensibleEvent) {
  _inherits(PollResponseEvent, _ExtensibleEvent);

  var _super = _createSuper(PollResponseEvent);

  /**
   * Creates a new PollResponseEvent from a pure format. Note that the event is *not*
   * parsed here: it will be treated as a literal m.poll.response primary typed event.
   *
   * To validate the response against a poll, call `validateAgainst` after creation.
   * @param {IPartialEvent<M_POLL_RESPONSE_EVENT_CONTENT>} wireFormat The event.
   */
  function PollResponseEvent(wireFormat) {
    var _this;

    _classCallCheck(this, PollResponseEvent);

    _this = _super.call(this, wireFormat);

    _defineProperty(_assertThisInitialized(_this), "internalAnswerIds", void 0);

    _defineProperty(_assertThisInitialized(_this), "internalSpoiled", void 0);

    _defineProperty(_assertThisInitialized(_this), "pollEventId", void 0);

    var rel = _this.wireContent["m.relates_to"];

    if (!_relationship_types.REFERENCE_RELATION.matches(rel === null || rel === void 0 ? void 0 : rel.rel_type) || typeof (rel === null || rel === void 0 ? void 0 : rel.event_id) !== "string") {
      throw new _InvalidEventError.InvalidEventError("Relationship must be a reference to an event");
    }

    _this.pollEventId = rel.event_id;

    _this.validateAgainst(null);

    return _this;
  }
  /**
   * Validates the poll response using the poll start event as a frame of reference. This
   * is used to determine if the vote is spoiled, whether the answers are valid, etc.
   * @param {PollStartEvent} poll The poll start event.
   */


  _createClass(PollResponseEvent, [{
    key: "answerIds",
    get:
    /**
     * The provided answers for the poll. Note that this may be falsy/unpredictable if
     * the `spoiled` property is true.
     */
    function get() {
      return this.internalAnswerIds;
    }
    /**
     * The poll start event ID referenced by the response.
     */

  }, {
    key: "spoiled",
    get:
    /**
     * Whether the vote is spoiled.
     */
    function get() {
      return this.internalSpoiled;
    }
  }, {
    key: "validateAgainst",
    value: function validateAgainst(poll) {
      var response = _poll_types.M_POLL_RESPONSE.findIn(this.wireContent);

      if (!Array.isArray(response === null || response === void 0 ? void 0 : response.answers)) {
        this.internalSpoiled = true;
        this.internalAnswerIds = [];
        return;
      }

      var answers = response.answers;

      if (answers.some(function (a) {
        return typeof a !== "string";
      }) || answers.length === 0) {
        this.internalSpoiled = true;
        this.internalAnswerIds = [];
        return;
      }

      if (poll) {
        if (answers.some(function (a) {
          return !poll.answers.some(function (pa) {
            return pa.id === a;
          });
        })) {
          this.internalSpoiled = true;
          this.internalAnswerIds = [];
          return;
        }

        answers = answers.slice(0, poll.maxSelections);
      }

      this.internalAnswerIds = answers;
      this.internalSpoiled = false;
    }
  }, {
    key: "isEquivalentTo",
    value: function isEquivalentTo(primaryEventType) {
      return (0, _events.isEventTypeSame)(primaryEventType, _poll_types.M_POLL_RESPONSE);
    }
  }, {
    key: "serialize",
    value: function serialize() {
      return {
        type: _poll_types.M_POLL_RESPONSE.name,
        content: _defineProperty({
          "m.relates_to": {
            rel_type: _relationship_types.REFERENCE_RELATION.name,
            event_id: this.pollEventId
          }
        }, _poll_types.M_POLL_RESPONSE.name, {
          answers: this.spoiled ? undefined : this.answerIds
        })
      };
    }
    /**
     * Creates a new PollResponseEvent from a set of answers. To spoil the vote, pass an empty
     * answers array.
     * @param {string} answers The user's answers. Should be valid from a poll's answer IDs.
     * @param {string} pollEventId The poll start event ID.
     * @returns {PollStartEvent} The representative poll response event.
     */

  }], [{
    key: "from",
    value: function from(answers, pollEventId) {
      return new PollResponseEvent({
        type: _poll_types.M_POLL_RESPONSE.name,
        content: _defineProperty({
          "m.relates_to": {
            rel_type: _relationship_types.REFERENCE_RELATION.name,
            event_id: pollEventId
          }
        }, _poll_types.M_POLL_RESPONSE.name, {
          answers: answers
        })
      });
    }
  }]);

  return PollResponseEvent;
}(_ExtensibleEvent2.ExtensibleEvent);

exports.PollResponseEvent = PollResponseEvent;

/***/ },

/***/ "../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/PollStartEvent.js"
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PollStartEvent = exports.PollAnswerSubevent = void 0;

var _poll_types = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/poll_types.js");

var _MessageEvent2 = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/MessageEvent.js");

var _message_types = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/message_types.js");

var _InvalidEventError = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/InvalidEventError.js");

var _NamespacedValue = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/NamespacedValue.js");

var _events = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/utility/events.js");

var _ExtensibleEvent2 = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/ExtensibleEvent.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Represents a poll answer. Note that this is represented as a subtype and is
 * not registered as a parsable event - it is implied for usage exclusively
 * within the PollStartEvent parsing.
 */
var PollAnswerSubevent = /*#__PURE__*/function (_MessageEvent) {
  _inherits(PollAnswerSubevent, _MessageEvent);

  var _super = _createSuper(PollAnswerSubevent);

  /**
   * The answer ID.
   */
  function PollAnswerSubevent(wireFormat) {
    var _this;

    _classCallCheck(this, PollAnswerSubevent);

    _this = _super.call(this, wireFormat);

    _defineProperty(_assertThisInitialized(_this), "id", void 0);

    var id = wireFormat.content.id;

    if (!id || typeof id !== "string") {
      throw new _InvalidEventError.InvalidEventError("Answer ID must be a non-empty string");
    }

    _this.id = id;
    return _this;
  }

  _createClass(PollAnswerSubevent, [{
    key: "serialize",
    value: function serialize() {
      return {
        type: "org.matrix.sdk.poll.answer",
        content: _objectSpread({
          id: this.id
        }, this.serializeMMessageOnly())
      };
    }
    /**
     * Creates a new PollAnswerSubevent from ID and text.
     * @param {string} id The answer ID (unique within the poll).
     * @param {string} text The text.
     * @returns {PollAnswerSubevent} The representative answer.
     */

  }], [{
    key: "from",
    value: function from(id, text) {
      return new PollAnswerSubevent({
        type: "org.matrix.sdk.poll.answer",
        content: _defineProperty({
          id: id
        }, _message_types.M_TEXT.name, text)
      });
    }
  }]);

  return PollAnswerSubevent;
}(_MessageEvent2.MessageEvent);
/**
 * Represents a poll start event.
 */


exports.PollAnswerSubevent = PollAnswerSubevent;

var PollStartEvent = /*#__PURE__*/function (_ExtensibleEvent) {
  _inherits(PollStartEvent, _ExtensibleEvent);

  var _super2 = _createSuper(PollStartEvent);

  /**
   * The question being asked, as a MessageEvent node.
   */

  /**
   * The interpreted kind of poll. Note that this will infer a value that is known to the
   * SDK rather than verbatim - this means unknown types will be represented as undisclosed
   * polls.
   *
   * To get the raw kind, use rawKind.
   */

  /**
   * The true kind as provided by the event sender. Might not be valid.
   */

  /**
   * The maximum number of selections a user is allowed to make.
   */

  /**
   * The possible answers for the poll.
   */

  /**
   * Creates a new PollStartEvent from a pure format. Note that the event is *not*
   * parsed here: it will be treated as a literal m.poll.start primary typed event.
   * @param {IPartialEvent<M_POLL_START_EVENT_CONTENT>} wireFormat The event.
   */
  function PollStartEvent(wireFormat) {
    var _this2;

    _classCallCheck(this, PollStartEvent);

    _this2 = _super2.call(this, wireFormat);

    _defineProperty(_assertThisInitialized(_this2), "question", void 0);

    _defineProperty(_assertThisInitialized(_this2), "kind", void 0);

    _defineProperty(_assertThisInitialized(_this2), "rawKind", void 0);

    _defineProperty(_assertThisInitialized(_this2), "maxSelections", void 0);

    _defineProperty(_assertThisInitialized(_this2), "answers", void 0);

    var poll = _poll_types.M_POLL_START.findIn(_this2.wireContent);

    if (!poll.question) {
      throw new _InvalidEventError.InvalidEventError("A question is required");
    }

    _this2.question = new _MessageEvent2.MessageEvent({
      type: "org.matrix.sdk.poll.question",
      content: poll.question
    });
    _this2.rawKind = poll.kind;

    if (_poll_types.M_POLL_KIND_DISCLOSED.matches(_this2.rawKind)) {
      _this2.kind = _poll_types.M_POLL_KIND_DISCLOSED;
    } else {
      _this2.kind = _poll_types.M_POLL_KIND_UNDISCLOSED; // default & assumed value
    }

    _this2.maxSelections = Number.isFinite(poll.max_selections) && poll.max_selections > 0 ? poll.max_selections : 1;

    if (!Array.isArray(poll.answers)) {
      throw new _InvalidEventError.InvalidEventError("Poll answers must be an array");
    }

    var answers = poll.answers.slice(0, 20).map(function (a) {
      return new PollAnswerSubevent({
        type: "org.matrix.sdk.poll.answer",
        content: a
      });
    });

    if (answers.length <= 0) {
      throw new _InvalidEventError.InvalidEventError("No answers available");
    }

    _this2.answers = answers;
    return _this2;
  }

  _createClass(PollStartEvent, [{
    key: "isEquivalentTo",
    value: function isEquivalentTo(primaryEventType) {
      return (0, _events.isEventTypeSame)(primaryEventType, _poll_types.M_POLL_START);
    }
  }, {
    key: "serialize",
    value: function serialize() {
      var _content2;

      return {
        type: _poll_types.M_POLL_START.name,
        content: (_content2 = {}, _defineProperty(_content2, _poll_types.M_POLL_START.name, {
          question: this.question.serialize().content,
          kind: this.rawKind,
          max_selections: this.maxSelections,
          answers: this.answers.map(function (a) {
            return a.serialize().content;
          })
        }), _defineProperty(_content2, _message_types.M_TEXT.name, "".concat(this.question.text, "\n").concat(this.answers.map(function (a, i) {
          return "".concat(i + 1, ". ").concat(a.text);
        }).join("\n"))), _content2)
      };
    }
    /**
     * Creates a new PollStartEvent from question, answers, and metadata.
     * @param {string} question The question to ask.
     * @param {string} answers The answers. Should be unique within each other.
     * @param {KNOWN_POLL_KIND|string} kind The kind of poll.
     * @param {number} maxSelections The maximum number of selections. Must be 1 or higher.
     * @returns {PollStartEvent} The representative poll start event.
     */

  }], [{
    key: "from",
    value: function from(question, answers, kind) {
      var _content3;

      var maxSelections = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      return new PollStartEvent({
        type: _poll_types.M_POLL_START.name,
        content: (_content3 = {}, _defineProperty(_content3, _message_types.M_TEXT.name, question), _defineProperty(_content3, _poll_types.M_POLL_START.name, {
          question: _defineProperty({}, _message_types.M_TEXT.name, question),
          kind: kind instanceof _NamespacedValue.NamespacedValue ? kind.name : kind,
          max_selections: maxSelections,
          answers: answers.map(function (a) {
            return _defineProperty({
              id: makeId()
            }, _message_types.M_TEXT.name, a);
          })
        }), _content3)
      });
    }
  }]);

  return PollStartEvent;
}(_ExtensibleEvent2.ExtensibleEvent);

exports.PollStartEvent = PollStartEvent;
var LETTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function makeId() {
  return _toConsumableArray(Array(16)).map(function () {
    return LETTERS.charAt(Math.floor(Math.random() * LETTERS.length));
  }).join('');
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/message_types.js"
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.M_TEXT = exports.M_NOTICE = exports.M_MESSAGE = exports.M_HTML = exports.M_EMOTE = void 0;

var _NamespacedValue = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/NamespacedValue.js");

/*
Copyright 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * The namespaced value for m.message
 */
var M_MESSAGE = new _NamespacedValue.UnstableValue("m.message", "org.matrix.msc1767.message");
/**
 * An m.message event rendering
 */

exports.M_MESSAGE = M_MESSAGE;

/**
 * The namespaced value for m.text
 */
var M_TEXT = new _NamespacedValue.UnstableValue("m.text", "org.matrix.msc1767.text");
/**
 * The content for an m.text event
 */

exports.M_TEXT = M_TEXT;

/**
 * The namespaced value for m.html
 */
var M_HTML = new _NamespacedValue.UnstableValue("m.html", "org.matrix.msc1767.html");
/**
 * The content for an m.html event
 */

exports.M_HTML = M_HTML;

/**
 * The namespaced value for m.emote
 */
var M_EMOTE = new _NamespacedValue.UnstableValue("m.emote", "org.matrix.msc1767.emote");
/**
 * The event definition for an m.emote event (in content)
 */

exports.M_EMOTE = M_EMOTE;

/**
 * The namespaced value for m.notice
 */
var M_NOTICE = new _NamespacedValue.UnstableValue("m.notice", "org.matrix.msc1767.notice");
/**
 * The event definition for an m.notice event (in content)
 */

exports.M_NOTICE = M_NOTICE;

/***/ },

/***/ "../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/poll_types.js"
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.M_POLL_START = exports.M_POLL_RESPONSE = exports.M_POLL_KIND_UNDISCLOSED = exports.M_POLL_KIND_DISCLOSED = exports.M_POLL_END = void 0;

var _NamespacedValue = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/NamespacedValue.js");

/*
Copyright 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Identifier for a disclosed poll.
 */
var M_POLL_KIND_DISCLOSED = new _NamespacedValue.UnstableValue("m.poll.disclosed", "org.matrix.msc3381.poll.disclosed");
/**
 * Identifier for an undisclosed poll.
 */

exports.M_POLL_KIND_DISCLOSED = M_POLL_KIND_DISCLOSED;
var M_POLL_KIND_UNDISCLOSED = new _NamespacedValue.UnstableValue("m.poll.undisclosed", "org.matrix.msc3381.poll.undisclosed");
/**
 * Any poll kind.
 */

exports.M_POLL_KIND_UNDISCLOSED = M_POLL_KIND_UNDISCLOSED;

/**
 * The namespaced value for m.poll.start
 */
var M_POLL_START = new _NamespacedValue.UnstableValue("m.poll.start", "org.matrix.msc3381.poll.start");
/**
 * The m.poll.start type within event content
 */

exports.M_POLL_START = M_POLL_START;

/**
 * The namespaced value for m.poll.response
 */
var M_POLL_RESPONSE = new _NamespacedValue.UnstableValue("m.poll.response", "org.matrix.msc3381.poll.response");
/**
 * The m.poll.response type within event content
 */

exports.M_POLL_RESPONSE = M_POLL_RESPONSE;

/**
 * The namespaced value for m.poll.end
 */
var M_POLL_END = new _NamespacedValue.UnstableValue("m.poll.end", "org.matrix.msc3381.poll.end");
/**
 * The event definition for an m.poll.end event (in content)
 */

exports.M_POLL_END = M_POLL_END;

/***/ },

/***/ "../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/relationship_types.js"
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.REFERENCE_RELATION = void 0;

var _NamespacedValue = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/NamespacedValue.js");

/*
Copyright 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * The namespaced value for an m.reference relation
 */
var REFERENCE_RELATION = new _NamespacedValue.NamespacedValue("m.reference");
/**
 * Represents any relation type
 */

exports.REFERENCE_RELATION = REFERENCE_RELATION;

/***/ },

/***/ "../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/index.js"
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _ExtensibleEvents = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/ExtensibleEvents.js");

Object.keys(_ExtensibleEvents).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ExtensibleEvents[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ExtensibleEvents[key];
    }
  });
});

var _IPartialEvent = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/IPartialEvent.js");

Object.keys(_IPartialEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IPartialEvent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IPartialEvent[key];
    }
  });
});

var _InvalidEventError = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/InvalidEventError.js");

Object.keys(_InvalidEventError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _InvalidEventError[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InvalidEventError[key];
    }
  });
});

var _NamespacedValue = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/NamespacedValue.js");

Object.keys(_NamespacedValue).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _NamespacedValue[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _NamespacedValue[key];
    }
  });
});

var _NamespacedMap = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/NamespacedMap.js");

Object.keys(_NamespacedMap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _NamespacedMap[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _NamespacedMap[key];
    }
  });
});

var _types = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/types.js");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});

var _MessageMatchers = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/utility/MessageMatchers.js");

Object.keys(_MessageMatchers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _MessageMatchers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MessageMatchers[key];
    }
  });
});

var _events = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/utility/events.js");

Object.keys(_events).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _events[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _events[key];
    }
  });
});

var _MRoomMessage = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/interpreters/legacy/MRoomMessage.js");

Object.keys(_MRoomMessage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _MRoomMessage[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MRoomMessage[key];
    }
  });
});

var _MMessage = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/interpreters/modern/MMessage.js");

Object.keys(_MMessage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _MMessage[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MMessage[key];
    }
  });
});

var _MPoll = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/interpreters/modern/MPoll.js");

Object.keys(_MPoll).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _MPoll[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MPoll[key];
    }
  });
});

var _relationship_types = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/relationship_types.js");

Object.keys(_relationship_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _relationship_types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _relationship_types[key];
    }
  });
});

var _ExtensibleEvent = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/ExtensibleEvent.js");

Object.keys(_ExtensibleEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ExtensibleEvent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ExtensibleEvent[key];
    }
  });
});

var _message_types = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/message_types.js");

Object.keys(_message_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _message_types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _message_types[key];
    }
  });
});

var _MessageEvent = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/MessageEvent.js");

Object.keys(_MessageEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _MessageEvent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MessageEvent[key];
    }
  });
});

var _EmoteEvent = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/EmoteEvent.js");

Object.keys(_EmoteEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _EmoteEvent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _EmoteEvent[key];
    }
  });
});

var _NoticeEvent = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/NoticeEvent.js");

Object.keys(_NoticeEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _NoticeEvent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _NoticeEvent[key];
    }
  });
});

var _poll_types = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/poll_types.js");

Object.keys(_poll_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _poll_types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _poll_types[key];
    }
  });
});

var _PollStartEvent = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/PollStartEvent.js");

Object.keys(_PollStartEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _PollStartEvent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PollStartEvent[key];
    }
  });
});

var _PollResponseEvent = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/PollResponseEvent.js");

Object.keys(_PollResponseEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _PollResponseEvent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PollResponseEvent[key];
    }
  });
});

var _PollEndEvent = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/PollEndEvent.js");

Object.keys(_PollEndEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _PollEndEvent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PollEndEvent[key];
    }
  });
});

/***/ },

/***/ "../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/interpreters/legacy/MRoomMessage.js"
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LEGACY_M_ROOM_MESSAGE = void 0;
exports.parseMRoomMessage = parseMRoomMessage;

var _MessageEvent = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/MessageEvent.js");

var _NoticeEvent = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/NoticeEvent.js");

var _EmoteEvent = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/EmoteEvent.js");

var _NamespacedValue = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/NamespacedValue.js");

var _message_types = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/message_types.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LEGACY_M_ROOM_MESSAGE = new _NamespacedValue.NamespacedValue("m.room.message");
exports.LEGACY_M_ROOM_MESSAGE = LEGACY_M_ROOM_MESSAGE;

function parseMRoomMessage(wireEvent) {
  var _wireEvent$content, _wireEvent$content2, _wireEvent$content3;

  if (_message_types.M_MESSAGE.findIn(wireEvent.content) || _message_types.M_TEXT.findIn(wireEvent.content)) {
    // We know enough about the event to coerce it into the right type
    return new _MessageEvent.MessageEvent(wireEvent);
  }

  var msgtype = (_wireEvent$content = wireEvent.content) === null || _wireEvent$content === void 0 ? void 0 : _wireEvent$content.msgtype;
  var text = (_wireEvent$content2 = wireEvent.content) === null || _wireEvent$content2 === void 0 ? void 0 : _wireEvent$content2.body;
  var html = ((_wireEvent$content3 = wireEvent.content) === null || _wireEvent$content3 === void 0 ? void 0 : _wireEvent$content3.format) === "org.matrix.custom.html" ? wireEvent.content.formatted_body : null;

  if (msgtype === "m.text") {
    var _objectSpread2;

    return new _MessageEvent.MessageEvent(_objectSpread(_objectSpread({}, wireEvent), {}, {
      content: _objectSpread(_objectSpread({}, wireEvent.content), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, _message_types.M_TEXT.name, text), _defineProperty(_objectSpread2, _message_types.M_HTML.name, html), _objectSpread2))
    }));
  } else if (msgtype === "m.notice") {
    var _objectSpread3;

    return new _NoticeEvent.NoticeEvent(_objectSpread(_objectSpread({}, wireEvent), {}, {
      content: _objectSpread(_objectSpread({}, wireEvent.content), {}, (_objectSpread3 = {}, _defineProperty(_objectSpread3, _message_types.M_TEXT.name, text), _defineProperty(_objectSpread3, _message_types.M_HTML.name, html), _objectSpread3))
    }));
  } else if (msgtype === "m.emote") {
    var _objectSpread4;

    return new _EmoteEvent.EmoteEvent(_objectSpread(_objectSpread({}, wireEvent), {}, {
      content: _objectSpread(_objectSpread({}, wireEvent.content), {}, (_objectSpread4 = {}, _defineProperty(_objectSpread4, _message_types.M_TEXT.name, text), _defineProperty(_objectSpread4, _message_types.M_HTML.name, html), _objectSpread4))
    }));
  } else {
    // TODO: Handle other types
    return null;
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/interpreters/modern/MMessage.js"
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.parseMMessage = parseMMessage;

var _MessageEvent = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/MessageEvent.js");

var _message_types = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/message_types.js");

var _EmoteEvent = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/EmoteEvent.js");

var _NoticeEvent = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/NoticeEvent.js");

/*
Copyright 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
function parseMMessage(wireEvent) {
  if (_message_types.M_EMOTE.matches(wireEvent.type)) {
    return new _EmoteEvent.EmoteEvent(wireEvent);
  } else if (_message_types.M_NOTICE.matches(wireEvent.type)) {
    return new _NoticeEvent.NoticeEvent(wireEvent);
  } // default: return a generic message


  return new _MessageEvent.MessageEvent(wireEvent);
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/interpreters/modern/MPoll.js"
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.parseMPoll = parseMPoll;

var _poll_types = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/poll_types.js");

var _PollStartEvent = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/PollStartEvent.js");

var _PollResponseEvent = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/PollResponseEvent.js");

var _PollEndEvent = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/PollEndEvent.js");

/*
Copyright 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
function parseMPoll(wireEvent) {
  if (_poll_types.M_POLL_START.matches(wireEvent.type)) {
    return new _PollStartEvent.PollStartEvent(wireEvent);
  } else if (_poll_types.M_POLL_RESPONSE.matches(wireEvent.type)) {
    return new _PollResponseEvent.PollResponseEvent(wireEvent);
  } else if (_poll_types.M_POLL_END.matches(wireEvent.type)) {
    return new _PollEndEvent.PollEndEvent(wireEvent);
  }

  return null; // not a poll event
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/types.js"
(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isOptionalAString = isOptionalAString;
exports.isProvided = isProvided;

/*
Copyright 2021 - 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Represents an optional type: can either be T or a falsy value.
 */

/**
 * Determines if the given optional string is a defined string.
 * @param {Optional<string>} s The input string.
 * @returns {boolean} True if the input is a defined string.
 */
function isOptionalAString(s) {
  return isProvided(s) && typeof s === 'string';
}
/**
 * Determines if the given optional was provided a value.
 * @param {Optional<T>} s The optional to test.
 * @returns {boolean} True if the value is defined.
 */


function isProvided(s) {
  return s !== null && s !== undefined;
}
/**
 * Represents either just T1, just T2, or T1 and T2 mixed.
 */

/***/ },

/***/ "../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/utility/MessageMatchers.js"
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LegacyMsgType = void 0;
exports.isEventLike = isEventLike;

var _message_types = __webpack_require__("../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/events/message_types.js");

/*
Copyright 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Represents a legacy m.room.message msgtype
 */
var LegacyMsgType;
/**
 * Determines if the given partial event looks similar enough to the given legacy msgtype
 * to count as that message type.
 * @param {IPartialEvent<EitherAnd<IPartialLegacyContent, M_MESSAGE_EVENT_CONTENT>>} event The event.
 * @param {LegacyMsgType} msgtype The message type to compare for.
 * @returns {boolean} True if the event appears to look similar enough to the msgtype.
 */

exports.LegacyMsgType = LegacyMsgType;

(function (LegacyMsgType) {
  LegacyMsgType["Text"] = "m.text";
  LegacyMsgType["Notice"] = "m.notice";
  LegacyMsgType["Emote"] = "m.emote";
})(LegacyMsgType || (exports.LegacyMsgType = LegacyMsgType = {}));

function isEventLike(event, msgtype) {
  var content = event.content;

  if (msgtype === LegacyMsgType.Text) {
    return _message_types.M_MESSAGE.matches(event.type) || event.type === "m.room.message" && (content === null || content === void 0 ? void 0 : content['msgtype']) === "m.text";
  } else if (msgtype === LegacyMsgType.Emote) {
    return _message_types.M_EMOTE.matches(event.type) || event.type === "m.room.message" && (content === null || content === void 0 ? void 0 : content['msgtype']) === "m.emote";
  } else if (msgtype === LegacyMsgType.Notice) {
    return _message_types.M_NOTICE.matches(event.type) || event.type === "m.room.message" && (content === null || content === void 0 ? void 0 : content['msgtype']) === "m.notice";
  }

  return false;
}

/***/ },

/***/ "../../node_modules/.pnpm/matrix-events-sdk@0.0.1/node_modules/matrix-events-sdk/lib/utility/events.js"
(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isEventTypeSame = isEventTypeSame;

/*
Copyright 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Represents a potentially namespaced event type.
 */

/**
 * Determines if two event types are the same, including namespaces.
 * @param {EventType} given The given event type. This will be compared
 * against the expected type.
 * @param {EventType} expected The expected event type.
 * @returns {boolean} True if the given type matches the expected type.
 */
function isEventTypeSame(given, expected) {
  if (typeof given === "string") {
    if (typeof expected === "string") {
      return expected === given;
    } else {
      return expected.matches(given);
    }
  } else {
    if (typeof expected === "string") {
      return given.matches(expected);
    } else {
      var expectedNs = expected;
      var givenNs = given;
      return expectedNs.matches(givenNs.name) || expectedNs.matches(givenNs.altName);
    }
  }
}

/***/ },

/***/ "../../node_modules/.pnpm/sdp-transform@3.0.0/node_modules/sdp-transform/lib/grammar.js"
(module) {

var grammar = module.exports = {
  v: [{
    name: 'version',
    reg: /^(\d*)$/
  }],
  o: [{
    // o=- 20518 0 IN IP4 203.0.113.1
    // NB: sessionId will be a String in most cases because it is huge
    name: 'origin',
    reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
    names: ['username', 'sessionId', 'sessionVersion', 'netType', 'ipVer', 'address'],
    format: '%s %s %d %s IP%d %s'
  }],
  // default parsing of these only (though some of these feel outdated)
  s: [{ name: 'name' }],
  i: [{ name: 'description' }],
  u: [{ name: 'uri' }],
  e: [{ name: 'email' }],
  p: [{ name: 'phone' }],
  z: [{ name: 'timezones' }], // TODO: this one can actually be parsed properly...
  r: [{ name: 'repeats' }],   // TODO: this one can also be parsed properly
  // k: [{}], // outdated thing ignored
  t: [{
    // t=0 0
    name: 'timing',
    reg: /^(\d*) (\d*)/,
    names: ['start', 'stop'],
    format: '%d %d'
  }],
  c: [{
    // c=IN IP4 10.47.197.26
    name: 'connection',
    reg: /^IN IP(\d) (\S*)/,
    names: ['version', 'ip'],
    format: 'IN IP%d %s'
  }],
  b: [{
    // b=AS:4000
    push: 'bandwidth',
    reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
    names: ['type', 'limit'],
    format: '%s:%s'
  }],
  m: [{
    // m=video 51744 RTP/AVP 126 97 98 34 31
    // NB: special - pushes to session
    // TODO: rtp/fmtp should be filtered by the payloads found here?
    reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/,
    names: ['type', 'port', 'protocol', 'payloads'],
    format: '%s %d %s %s'
  }],
  a: [
    {
      // a=rtpmap:110 opus/48000/2
      push: 'rtp',
      reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
      names: ['payload', 'codec', 'rate', 'encoding'],
      format: function (o) {
        return (o.encoding)
          ? 'rtpmap:%d %s/%s/%s'
          : o.rate
            ? 'rtpmap:%d %s/%s'
            : 'rtpmap:%d %s';
      }
    },
    {
      // a=fmtp:108 profile-level-id=24;object=23;bitrate=64000
      // a=fmtp:111 minptime=10; useinbandfec=1
      push: 'fmtp',
      reg: /^fmtp:(\d*) ([\S| ]*)/,
      names: ['payload', 'config'],
      format: 'fmtp:%d %s'
    },
    {
      // a=control:streamid=0
      name: 'control',
      reg: /^control:(.*)/,
      format: 'control:%s'
    },
    {
      // a=rtcp:65179 IN IP4 193.84.77.194
      name: 'rtcp',
      reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
      names: ['port', 'netType', 'ipVer', 'address'],
      format: function (o) {
        return (o.address != null)
          ? 'rtcp:%d %s IP%d %s'
          : 'rtcp:%d';
      }
    },
    {
      // a=rtcp-fb:98 trr-int 100
      push: 'rtcpFbTrrInt',
      reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
      names: ['payload', 'value'],
      format: 'rtcp-fb:%s trr-int %d'
    },
    {
      // a=rtcp-fb:98 nack rpsi
      push: 'rtcpFb',
      reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
      names: ['payload', 'type', 'subtype'],
      format: function (o) {
        return (o.subtype != null)
          ? 'rtcp-fb:%s %s %s'
          : 'rtcp-fb:%s %s';
      }
    },
    {
      // a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
      // a=extmap:1/recvonly URI-gps-string
      // a=extmap:3 urn:ietf:params:rtp-hdrext:encrypt urn:ietf:params:rtp-hdrext:smpte-tc 25@600/24
      push: 'ext',
      reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,
      names: ['value', 'direction', 'encrypt-uri', 'uri', 'config'],
      format: function (o) {
        return (
          'extmap:%d' +
          (o.direction ? '/%s' : '%v') +
          (o['encrypt-uri'] ? ' %s' : '%v') +
          ' %s' +
          (o.config ? ' %s' : '')
        );
      }
    },
    {
      // a=extmap-allow-mixed
      name: 'extmapAllowMixed',
      reg: /^(extmap-allow-mixed)/
    },
    {
      // a=crypto:1 AES_CM_128_HMAC_SHA1_80 inline:PS1uQCVeeCFCanVmcjkpPywjNWhcYD0mXXtxaVBR|2^20|1:32
      push: 'crypto',
      reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
      names: ['id', 'suite', 'config', 'sessionConfig'],
      format: function (o) {
        return (o.sessionConfig != null)
          ? 'crypto:%d %s %s %s'
          : 'crypto:%d %s %s';
      }
    },
    {
      // a=setup:actpass
      name: 'setup',
      reg: /^setup:(\w*)/,
      format: 'setup:%s'
    },
    {
      // a=connection:new
      name: 'connectionType',
      reg: /^connection:(new|existing)/,
      format: 'connection:%s'
    },
    {
      // a=mid:1
      name: 'mid',
      reg: /^mid:([^\s]*)/,
      format: 'mid:%s'
    },
    {
      // a=msid:0c8b064d-d807-43b4-b434-f92a889d8587 98178685-d409-46e0-8e16-7ef0db0db64a
      push: 'msid',
      reg: /^msid:([\w-]+)(?: ([\w-]+))?/,
      names: ['id', 'appdata'],
      format: 'msid:%s %s'
    },
    {
      // a=ptime:20
      name: 'ptime',
      reg: /^ptime:(\d*(?:\.\d*)*)/,
      format: 'ptime:%d'
    },
    {
      // a=maxptime:60
      name: 'maxptime',
      reg: /^maxptime:(\d*(?:\.\d*)*)/,
      format: 'maxptime:%d'
    },
    {
      // a=sendrecv
      name: 'direction',
      reg: /^(sendrecv|recvonly|sendonly|inactive)/
    },
    {
      // a=ice-lite
      name: 'icelite',
      reg: /^(ice-lite)/
    },
    {
      // a=ice-ufrag:F7gI
      name: 'iceUfrag',
      reg: /^ice-ufrag:(\S*)/,
      format: 'ice-ufrag:%s'
    },
    {
      // a=ice-pwd:x9cml/YzichV2+XlhiMu8g
      name: 'icePwd',
      reg: /^ice-pwd:(\S*)/,
      format: 'ice-pwd:%s'
    },
    {
      // a=fingerprint:SHA-1 00:11:22:33:44:55:66:77:88:99:AA:BB:CC:DD:EE:FF:00:11:22:33
      name: 'fingerprint',
      reg: /^fingerprint:(\S*) (\S*)/,
      names: ['type', 'hash'],
      format: 'fingerprint:%s %s'
    },
    {
      // a=candidate:0 1 UDP 2113667327 203.0.113.1 54400 typ host
      // a=candidate:1162875081 1 udp 2113937151 192.168.34.75 60017 typ host generation 0 network-id 3 network-cost 10
      // a=candidate:3289912957 2 udp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 generation 0 network-id 3 network-cost 10
      // a=candidate:229815620 1 tcp 1518280447 192.168.150.19 60017 typ host tcptype active generation 0 network-id 3 network-cost 10
      // a=candidate:3289912957 2 tcp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 tcptype passive generation 0 network-id 3 network-cost 10
      push:'candidates',
      reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
      names: ['foundation', 'component', 'transport', 'priority', 'ip', 'port', 'type', 'raddr', 'rport', 'tcptype', 'generation', 'network-id', 'network-cost'],
      format: function (o) {
        var str = 'candidate:%s %d %s %d %s %d typ %s';

        str += (o.raddr != null) ? ' raddr %s rport %d' : '%v%v';

        // NB: candidate has three optional chunks, so %void middles one if it's missing
        str += (o.tcptype != null) ? ' tcptype %s' : '%v';

        if (o.generation != null) {
          str += ' generation %d';
        }

        str += (o['network-id'] != null) ? ' network-id %d' : '%v';
        str += (o['network-cost'] != null) ? ' network-cost %d' : '%v';
        return str;
      }
    },
    {
      // a=end-of-candidates (keep after the candidates line for readability)
      name: 'endOfCandidates',
      reg: /^(end-of-candidates)/
    },
    {
      // a=remote-candidates:1 203.0.113.1 54400 2 203.0.113.1 54401 ...
      name: 'remoteCandidates',
      reg: /^remote-candidates:(.*)/,
      format: 'remote-candidates:%s'
    },
    {
      // a=ice-options:google-ice
      name: 'iceOptions',
      reg: /^ice-options:(\S*)/,
      format: 'ice-options:%s'
    },
    {
      // a=ssrc:2566107569 cname:t9YU8M1UxTF8Y1A1
      push: 'ssrcs',
      reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
      names: ['id', 'attribute', 'value'],
      format: function (o) {
        var str = 'ssrc:%d';
        if (o.attribute != null) {
          str += ' %s';
          if (o.value != null) {
            str += ':%s';
          }
        }
        return str;
      }
    },
    {
      // a=ssrc-group:FEC 1 2
      // a=ssrc-group:FEC-FR 3004364195 1080772241
      push: 'ssrcGroups',
      // token-char = %x21 / %x23-27 / %x2A-2B / %x2D-2E / %x30-39 / %x41-5A / %x5E-7E
      reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
      names: ['semantics', 'ssrcs'],
      format: 'ssrc-group:%s %s'
    },
    {
      // a=msid-semantic: WMS Jvlam5X3SX1OP6pn20zWogvaKJz5Hjf9OnlV
      name: 'msidSemantic',
      reg: /^msid-semantic:\s?(\w*) (\S*)/,
      names: ['semantic', 'token'],
      format: 'msid-semantic: %s %s' // space after ':' is not accidental
    },
    {
      // a=group:BUNDLE audio video
      push: 'groups',
      reg: /^group:(\w*) (.*)/,
      names: ['type', 'mids'],
      format: 'group:%s %s'
    },
    {
      // a=rtcp-mux
      name: 'rtcpMux',
      reg: /^(rtcp-mux)/
    },
    {
      // a=rtcp-rsize
      name: 'rtcpRsize',
      reg: /^(rtcp-rsize)/
    },
    {
      // a=sctpmap:5000 webrtc-datachannel 1024
      name: 'sctpmap',
      reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/,
      names: ['sctpmapNumber', 'app', 'maxMessageSize'],
      format: function (o) {
        return (o.maxMessageSize != null)
          ? 'sctpmap:%s %s %s'
          : 'sctpmap:%s %s';
      }
    },
    {
      // a=x-google-flag:conference
      name: 'xGoogleFlag',
      reg: /^x-google-flag:([^\s]*)/,
      format: 'x-google-flag:%s'
    },
    {
      // a=rid:1 send max-width=1280;max-height=720;max-fps=30;depend=0
      push: 'rids',
      reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
      names: ['id', 'direction', 'params'],
      format: function (o) {
        return (o.params) ? 'rid:%s %s %s' : 'rid:%s %s';
      }
    },
    {
      // a=imageattr:97 send [x=800,y=640,sar=1.1,q=0.6] [x=480,y=320] recv [x=330,y=250]
      // a=imageattr:* send [x=800,y=640] recv *
      // a=imageattr:100 recv [x=320,y=240]
      push: 'imageattrs',
      reg: new RegExp(
        // a=imageattr:97
        '^imageattr:(\\d+|\\*)' +
        // send [x=800,y=640,sar=1.1,q=0.6] [x=480,y=320]
        '[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)' +
        // recv [x=330,y=250]
        '(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?'
      ),
      names: ['pt', 'dir1', 'attrs1', 'dir2', 'attrs2'],
      format: function (o) {
        return 'imageattr:%s %s %s' + (o.dir2 ? ' %s %s' : '');
      }
    },
    {
      // a=simulcast:send 1,2,3;~4,~5 recv 6;~7,~8
      // a=simulcast:recv 1;4,5 send 6;7
      name: 'simulcast',
      reg: new RegExp(
        // a=simulcast:
        '^simulcast:' +
        // send 1,2,3;~4,~5
        '(send|recv) ([a-zA-Z0-9\\-_~;,]+)' +
        // space + recv 6;~7,~8
        '(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?' +
        // end
        '$'
      ),
      names: ['dir1', 'list1', 'dir2', 'list2'],
      format: function (o) {
        return 'simulcast:%s %s' + (o.dir2 ? ' %s %s' : '');
      }
    },
    {
      // old simulcast draft 03 (implemented by Firefox)
      //   https://tools.ietf.org/html/draft-ietf-mmusic-sdp-simulcast-03
      // a=simulcast: recv pt=97;98 send pt=97
      // a=simulcast: send rid=5;6;7 paused=6,7
      name: 'simulcast_03',
      reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
      names: ['value'],
      format: 'simulcast: %s'
    },
    {
      // a=framerate:25
      // a=framerate:29.97
      name: 'framerate',
      reg: /^framerate:(\d+(?:$|\.\d+))/,
      format: 'framerate:%s'
    },
    {
      // RFC4570
      // a=source-filter: incl IN IP4 239.5.2.31 10.1.15.5
      name: 'sourceFilter',
      reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,
      names: ['filterMode', 'netType', 'addressTypes', 'destAddress', 'srcList'],
      format: 'source-filter: %s %s %s %s %s'
    },
    {
      // a=bundle-only
      name: 'bundleOnly',
      reg: /^(bundle-only)/
    },
    {
      // a=label:1
      name: 'label',
      reg: /^label:(.+)/,
      format: 'label:%s'
    },
    {
      // RFC version 26 for SCTP over DTLS
      // https://tools.ietf.org/html/draft-ietf-mmusic-sctp-sdp-26#section-5
      name: 'sctpPort',
      reg: /^sctp-port:(\d+)$/,
      format: 'sctp-port:%s'
    },
    {
      // RFC version 26 for SCTP over DTLS
      // https://tools.ietf.org/html/draft-ietf-mmusic-sctp-sdp-26#section-6
      name: 'maxMessageSize',
      reg: /^max-message-size:(\d+)$/,
      format: 'max-message-size:%s'
    },
    {
      // RFC7273
      // a=ts-refclk:ptp=IEEE1588-2008:39-A7-94-FF-FE-07-CB-D0:37
      push:'tsRefClocks',
      reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/,
      names: ['clksrc', 'clksrcExt'],
      format: function (o) {
        return 'ts-refclk:%s' + (o.clksrcExt != null ? '=%s' : '');
      }
    },
    {
      // RFC7273
      // a=mediaclk:direct=963214424
      name:'mediaClk',
      reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,
      names: ['id', 'mediaClockName', 'mediaClockValue', 'rateNumerator', 'rateDenominator'],
      format: function (o) {
        var str = 'mediaclk:';
        str += (o.id != null ? 'id=%s %s' : '%v%s');
        str += (o.mediaClockValue != null ? '=%s' : '');
        str += (o.rateNumerator != null ? ' rate=%s' : '');
        str += (o.rateDenominator != null ? '/%s' : '');
        return str;
      }
    },
    {
      // a=keywds:keywords
      name: 'keywords',
      reg: /^keywds:(.+)$/,
      format: 'keywds:%s'
    },
    {
      // a=content:main
      name: 'content',
      reg: /^content:(.+)/,
      format: 'content:%s'
    },
    // BFCP https://tools.ietf.org/html/rfc4583
    {
      // a=floorctrl:c-s
      name: 'bfcpFloorCtrl',
      reg: /^floorctrl:(c-only|s-only|c-s)/,
      format: 'floorctrl:%s'
    },
    {
      // a=confid:1
      name: 'bfcpConfId',
      reg: /^confid:(\d+)/,
      format: 'confid:%s'
    },
    {
      // a=userid:1
      name: 'bfcpUserId',
      reg: /^userid:(\d+)/,
      format: 'userid:%s'
    },
    {
      // a=floorid:1
      name: 'bfcpFloorId',
      reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/,
      names: ['id', 'mStream'],
      format: 'floorid:%s mstrm:%s'
    },
    {
      // any a= that we don't understand is kept verbatim on media.invalid
      push: 'invalid',
      names: ['value']
    }
  ]
};

// set sensible defaults to avoid polluting the grammar with boring details
Object.keys(grammar).forEach(function (key) {
  var objs = grammar[key];
  objs.forEach(function (obj) {
    if (!obj.reg) {
      obj.reg = /(.*)/;
    }
    if (!obj.format) {
      obj.format = '%s';
    }
  });
});


/***/ },

/***/ "../../node_modules/.pnpm/sdp-transform@3.0.0/node_modules/sdp-transform/lib/index.js"
(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;
var parser = __webpack_require__("../../node_modules/.pnpm/sdp-transform@3.0.0/node_modules/sdp-transform/lib/parser.js");
var writer = __webpack_require__("../../node_modules/.pnpm/sdp-transform@3.0.0/node_modules/sdp-transform/lib/writer.js");
var grammar = __webpack_require__("../../node_modules/.pnpm/sdp-transform@3.0.0/node_modules/sdp-transform/lib/grammar.js");

__webpack_unused_export__ = grammar;
exports.M9 = writer;
exports.qg = parser.parse;
__webpack_unused_export__ = parser.parseParams;
__webpack_unused_export__ = parser.parseFmtpConfig; // Alias of parseParams().
__webpack_unused_export__ = parser.parsePayloads;
__webpack_unused_export__ = parser.parseRemoteCandidates;
__webpack_unused_export__ = parser.parseImageAttributes;
__webpack_unused_export__ = parser.parseSimulcastStreamList;


/***/ },

/***/ "../../node_modules/.pnpm/sdp-transform@3.0.0/node_modules/sdp-transform/lib/parser.js"
(__unused_webpack_module, exports, __webpack_require__) {

var toIntIfInt = function (v) {
  return String(Number(v)) === v ? Number(v) : v;
};

var attachProperties = function (match, location, names, rawName) {
  if (rawName && !names) {
    location[rawName] = toIntIfInt(match[1]);
  }
  else {
    for (var i = 0; i < names.length; i += 1) {
      if (match[i+1] != null) {
        location[names[i]] = toIntIfInt(match[i+1]);
      }
    }
  }
};

var parseReg = function (obj, location, content) {
  var needsBlank = obj.name && obj.names;
  if (obj.push && !location[obj.push]) {
    location[obj.push] = [];
  }
  else if (needsBlank && !location[obj.name]) {
    location[obj.name] = {};
  }
  var keyLocation = obj.push ?
    {} :  // blank object that will be pushed
    needsBlank ? location[obj.name] : location; // otherwise, named location or root

  attachProperties(content.match(obj.reg), keyLocation, obj.names, obj.name);

  if (obj.push) {
    location[obj.push].push(keyLocation);
  }
};

var grammar = __webpack_require__("../../node_modules/.pnpm/sdp-transform@3.0.0/node_modules/sdp-transform/lib/grammar.js");
var validLine = RegExp.prototype.test.bind(/^([a-z])=(.*)/);

exports.parse = function (sdp) {
  var session = {}
    , media = []
    , location = session; // points at where properties go under (one of the above)

  // parse lines we understand
  sdp.split(/(\r\n|\r|\n)/).filter(validLine).forEach(function (l) {
    var type = l[0];
    var content = l.slice(2);
    if (type === 'm') {
      media.push({rtp: [], fmtp: []});
      location = media[media.length-1]; // point at latest media line
    }

    for (var j = 0; j < (grammar[type] || []).length; j += 1) {
      var obj = grammar[type][j];
      if (obj.reg.test(content)) {
        return parseReg(obj, location, content);
      }
    }
  });

  session.media = media; // link it up
  return session;
};

var paramReducer = function (acc, expr) {
  var s = expr.split(/=(.+)/, 2);
  if (s.length === 2) {
    acc[s[0]] = toIntIfInt(s[1]);
  } else if (s.length === 1 && expr.length > 1) {
    acc[s[0]] = undefined;
  }
  return acc;
};

exports.parseParams = function (str) {
  return str.split(/;\s?/).reduce(paramReducer, {});
};

// For backward compatibility - alias will be removed in 3.0.0
exports.parseFmtpConfig = exports.parseParams;

exports.parsePayloads = function (str) {
  return str.toString().split(' ').map(Number);
};

exports.parseRemoteCandidates = function (str) {
  var candidates = [];
  var parts = str.split(' ').map(toIntIfInt);
  for (var i = 0; i < parts.length; i += 3) {
    candidates.push({
      component: parts[i],
      ip: parts[i + 1],
      port: parts[i + 2]
    });
  }
  return candidates;
};

exports.parseImageAttributes = function (str) {
  return str.split(' ').map(function (item) {
    return item.substring(1, item.length-1).split(',').reduce(paramReducer, {});
  });
};

exports.parseSimulcastStreamList = function (str) {
  return str.split(';').map(function (stream) {
    return stream.split(',').map(function (format) {
      var scid, paused = false;

      if (format[0] !== '~') {
        scid = toIntIfInt(format);
      } else {
        scid = toIntIfInt(format.substring(1, format.length));
        paused = true;
      }

      return {
        scid: scid,
        paused: paused
      };
    });
  });
};


/***/ },

/***/ "../../node_modules/.pnpm/sdp-transform@3.0.0/node_modules/sdp-transform/lib/writer.js"
(module, __unused_webpack_exports, __webpack_require__) {

var grammar = __webpack_require__("../../node_modules/.pnpm/sdp-transform@3.0.0/node_modules/sdp-transform/lib/grammar.js");

// customized util.format - discards excess arguments and can void middle ones
var formatRegExp = /%[sdv%]/g;
var format = function (formatStr) {
  var i = 1;
  var args = arguments;
  var len = args.length;
  return formatStr.replace(formatRegExp, function (x) {
    if (i >= len) {
      return x; // missing argument
    }
    var arg = args[i];
    i += 1;
    switch (x) {
    case '%%':
      return '%';
    case '%s':
      return String(arg);
    case '%d':
      return Number(arg);
    case '%v':
      return '';
    }
  });
  // NB: we discard excess arguments - they are typically undefined from makeLine
};

var makeLine = function (type, obj, location) {
  var str = obj.format instanceof Function ?
    (obj.format(obj.push ? location : location[obj.name])) :
    obj.format;

  var args = [type + '=' + str];
  if (obj.names) {
    for (var i = 0; i < obj.names.length; i += 1) {
      var n = obj.names[i];
      if (obj.name) {
        args.push(location[obj.name][n]);
      }
      else { // for mLine and push attributes
        args.push(location[obj.names[i]]);
      }
    }
  }
  else {
    args.push(location[obj.name]);
  }
  return format.apply(null, args);
};

// RFC specified order
// TODO: extend this with all the rest
var defaultOuterOrder = [
  'v', 'o', 's', 'i',
  'u', 'e', 'p', 'c',
  'b', 't', 'r', 'z', 'a'
];
var defaultInnerOrder = ['i', 'c', 'b', 'a'];


module.exports = function (session, opts) {
  opts = opts || {};
  // ensure certain properties exist
  if (session.version == null) {
    session.version = 0; // 'v=0' must be there (only defined version atm)
  }
  if (session.name == null) {
    session.name = ' '; // 's= ' must be there if no meaningful name set
  }
  session.media.forEach(function (mLine) {
    if (mLine.payloads == null) {
      mLine.payloads = '';
    }
  });

  var outerOrder = opts.outerOrder || defaultOuterOrder;
  var innerOrder = opts.innerOrder || defaultInnerOrder;
  var sdp = [];

  // loop through outerOrder for matching properties on session
  outerOrder.forEach(function (type) {
    grammar[type].forEach(function (obj) {
      if (obj.name in session && session[obj.name] != null) {
        sdp.push(makeLine(type, obj, session));
      }
      else if (obj.push in session && session[obj.push] != null) {
        session[obj.push].forEach(function (el) {
          sdp.push(makeLine(type, obj, el));
        });
      }
    });
  });

  // then for each media line, follow the innerOrder
  session.media.forEach(function (mLine) {
    sdp.push(makeLine('m', grammar.m[0], mLine));

    innerOrder.forEach(function (type) {
      grammar[type].forEach(function (obj) {
        if (obj.name in mLine && mLine[obj.name] != null) {
          sdp.push(makeLine(type, obj, mLine));
        }
        else if (obj.push in mLine && mLine[obj.push] != null) {
          mLine[obj.push].forEach(function (el) {
            sdp.push(makeLine(type, obj, el));
          });
        }
      });
    });
  });

  return sdp.join('\r\n') + '\r\n';
};


/***/ },

/***/ "../../node_modules/.pnpm/unhomoglyph@1.0.6/node_modules/unhomoglyph/index.js"
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";



var data = __webpack_require__("../../node_modules/.pnpm/unhomoglyph@1.0.6/node_modules/unhomoglyph/data.json");

function escapeRegexp(str) {
  return str.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}

var REPLACE_RE = RegExp(Object.keys(data).map(escapeRegexp).join('|'), 'g');

function replace_fn(match) {
  return data[match];
}

function unhomoglyph(str) {
  return str.replace(REPLACE_RE, replace_fn);
}

module.exports = unhomoglyph;


/***/ },

/***/ "../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _objectWithoutProperties)
});

;// ../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}

;// ../../node_modules/.pnpm/@babel+runtime@8.0.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}


/***/ },

/***/ "../../node_modules/.pnpm/bs58@6.0.0/node_modules/bs58/src/esm/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ src_esm)
});

;// ../../node_modules/.pnpm/base-x@5.0.1/node_modules/base-x/src/esm/index.js
// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
function base (ALPHABET) {
  if (ALPHABET.length >= 255) { throw new TypeError('Alphabet too long') }
  const BASE_MAP = new Uint8Array(256)
  for (let j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255
  }
  for (let i = 0; i < ALPHABET.length; i++) {
    const x = ALPHABET.charAt(i)
    const xc = x.charCodeAt(0)
    if (BASE_MAP[xc] !== 255) { throw new TypeError(x + ' is ambiguous') }
    BASE_MAP[xc] = i
  }
  const BASE = ALPHABET.length
  const LEADER = ALPHABET.charAt(0)
  const FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up
  const iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up
  function encode (source) {
    // eslint-disable-next-line no-empty
    if (source instanceof Uint8Array) { } else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength)
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source)
    }
    if (!(source instanceof Uint8Array)) { throw new TypeError('Expected Uint8Array') }
    if (source.length === 0) { return '' }
    // Skip & count leading zeroes.
    let zeroes = 0
    let length = 0
    let pbegin = 0
    const pend = source.length
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++
      zeroes++
    }
    // Allocate enough space in big-endian base58 representation.
    const size = ((pend - pbegin) * iFACTOR + 1) >>> 0
    const b58 = new Uint8Array(size)
    // Process the bytes.
    while (pbegin !== pend) {
      let carry = source[pbegin]
      // Apply "b58 = b58 * 256 + ch".
      let i = 0
      for (let it1 = size - 1; (carry !== 0 || i < length) && (it1 !== -1); it1--, i++) {
        carry += (256 * b58[it1]) >>> 0
        b58[it1] = (carry % BASE) >>> 0
        carry = (carry / BASE) >>> 0
      }
      if (carry !== 0) { throw new Error('Non-zero carry') }
      length = i
      pbegin++
    }
    // Skip leading zeroes in base58 result.
    let it2 = size - length
    while (it2 !== size && b58[it2] === 0) {
      it2++
    }
    // Translate the result into a string.
    let str = LEADER.repeat(zeroes)
    for (; it2 < size; ++it2) { str += ALPHABET.charAt(b58[it2]) }
    return str
  }
  function decodeUnsafe (source) {
    if (typeof source !== 'string') { throw new TypeError('Expected String') }
    if (source.length === 0) { return new Uint8Array() }
    let psz = 0
    // Skip and count leading '1's.
    let zeroes = 0
    let length = 0
    while (source[psz] === LEADER) {
      zeroes++
      psz++
    }
    // Allocate enough space in big-endian base256 representation.
    const size = (((source.length - psz) * FACTOR) + 1) >>> 0 // log(58) / log(256), rounded up.
    const b256 = new Uint8Array(size)
    // Process the characters.
    while (psz < source.length) {
      // Find code of next character
      const charCode = source.charCodeAt(psz)
      // Base map can not be indexed using char code
      if (charCode > 255) { return }
      // Decode character
      let carry = BASE_MAP[charCode]
      // Invalid character
      if (carry === 255) { return }
      let i = 0
      for (let it3 = size - 1; (carry !== 0 || i < length) && (it3 !== -1); it3--, i++) {
        carry += (BASE * b256[it3]) >>> 0
        b256[it3] = (carry % 256) >>> 0
        carry = (carry / 256) >>> 0
      }
      if (carry !== 0) { throw new Error('Non-zero carry') }
      length = i
      psz++
    }
    // Skip leading zeroes in b256.
    let it4 = size - length
    while (it4 !== size && b256[it4] === 0) {
      it4++
    }
    const vch = new Uint8Array(zeroes + (size - it4))
    let j = zeroes
    while (it4 !== size) {
      vch[j++] = b256[it4++]
    }
    return vch
  }
  function decode (string) {
    const buffer = decodeUnsafe(string)
    if (buffer) { return buffer }
    throw new Error('Non-base' + BASE + ' character')
  }
  return {
    encode,
    decodeUnsafe,
    decode
  }
}
/* harmony default export */ const esm = (base);

;// ../../node_modules/.pnpm/bs58@6.0.0/node_modules/bs58/src/esm/index.js

var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
/* harmony default export */ const src_esm = (esm(ALPHABET));


/***/ },

/***/ "../../node_modules/.pnpm/p-retry@8.0.1/node_modules/p-retry/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  lc: () => (/* binding */ AbortError),
  Ay: () => (/* binding */ pRetry)
});

// UNUSED EXPORTS: makeRetriable

;// ../../node_modules/.pnpm/is-network-error@1.3.2/node_modules/is-network-error/index.js
const objectToString = Object.prototype.toString;

const isError = value => objectToString.call(value) === '[object Error]';

const errorMessages = new Set([
	'network error', // Chrome
	'NetworkError when attempting to fetch resource.', // Firefox
	'The Internet connection appears to be offline.', // Safari 16
	'Network request failed', // `cross-fetch`
	'fetch failed', // Undici (Node.js)
	'terminated', // Undici (Node.js)
	' A network error occurred.', // Bun (WebKit)
	'Network connection lost', // Cloudflare Workers (fetch)
]);

function isNetworkError(error) {
	const isValid = error
		&& isError(error)
		&& error.name === 'TypeError'
		&& typeof error.message === 'string';

	if (!isValid) {
		return false;
	}

	const {message, stack} = error;

	// Safari 17+ has generic message but no stack for network errors
	if (message === 'Load failed' || (message.startsWith('Load failed (') && message.endsWith(')'))) {
		return stack === undefined
			// Sentry adds its own stack trace to the fetch error, so also check for that
			|| '__sentry_captured__' in error;
	}

	// Deno network errors start with specific text
	if (message.startsWith('error sending request for url')) {
		return true;
	}

	// Chrome: exact "Failed to fetch" or with hostname: "Failed to fetch (example.com)"
	if (message === 'Failed to fetch' || (message.startsWith('Failed to fetch (') && message.endsWith(')'))) {
		return true;
	}

	// Standard network error messages
	return errorMessages.has(message);
}

;// ../../node_modules/.pnpm/p-retry@8.0.1/node_modules/p-retry/index.js


function validateRetries(retries) {
	if (typeof retries === 'number') {
		if (retries < 0) {
			throw new TypeError('Expected `retries` to be a non-negative number.');
		}

		if (Number.isNaN(retries)) {
			throw new TypeError('Expected `retries` to be a valid number or Infinity, got NaN.');
		}

		if (Number.isFinite(retries) && !Number.isInteger(retries)) {
			throw new TypeError('Expected `retries` to be a non-negative integer or Infinity.');
		}
	} else if (retries !== undefined) {
		throw new TypeError('Expected `retries` to be a number or Infinity.');
	}
}

function validateNumberOption(name, value, {min = 0, allowInfinity = false} = {}) {
	if (value === undefined) {
		return;
	}

	if (typeof value !== 'number' || Number.isNaN(value)) {
		throw new TypeError(`Expected \`${name}\` to be a number${allowInfinity ? ' or Infinity' : ''}.`);
	}

	if (!allowInfinity && !Number.isFinite(value)) {
		throw new TypeError(`Expected \`${name}\` to be a finite number.`);
	}

	if (value < min) {
		throw new TypeError(`Expected \`${name}\` to be \u2265 ${min}.`);
	}
}

function validateFunctionOption(name, value) {
	if (value === undefined) {
		return;
	}

	if (typeof value !== 'function') {
		throw new TypeError(`Expected \`${name}\` to be a function.`);
	}
}

class AbortError extends Error {
	constructor(message) {
		super();

		if (message instanceof Error) {
			this.originalError = message;
			({message} = message);
		} else {
			this.originalError = new Error(message);
			this.originalError.stack = this.stack;
		}

		this.name = 'AbortError';
		this.message = message;
	}
}

function calculateDelay(retriesConsumed, options) {
	const attempt = Math.max(1, retriesConsumed + 1);
	const random = options.randomize ? (Math.random() + 1) : 1;

	let timeout = Math.round(random * options.minTimeout * (options.factor ** (attempt - 1)));
	timeout = Math.min(timeout, options.maxTimeout);

	return timeout;
}

function calculateRemainingTime(start, max) {
	if (!Number.isFinite(max)) {
		return max;
	}

	return max - (performance.now() - start);
}

async function delayForRetry(delay, options) {
	if (delay <= 0) {
		return;
	}

	await new Promise((resolve, reject) => {
		const onAbort = () => {
			clearTimeout(timeoutToken);
			options.signal?.removeEventListener('abort', onAbort);
			reject(options.signal.reason);
		};

		const timeoutToken = setTimeout(() => {
			options.signal?.removeEventListener('abort', onAbort);
			resolve();
		}, delay);

		if (options.unref) {
			timeoutToken.unref?.();
		}

		options.signal?.addEventListener('abort', onAbort, {once: true});
	});
}

async function onAttemptFailure({error, attemptNumber, retriesConsumed, startTime, options}) {
	const normalizedError = error instanceof Error
		? error
		: new TypeError(`Non-error was thrown: "${error}". You should only throw errors.`);

	if (normalizedError instanceof AbortError) {
		throw normalizedError.originalError;
	}

	const retriesLeft = Number.isFinite(options.retries)
		? Math.max(0, options.retries - retriesConsumed)
		: options.retries;

	const maxRetryTime = options.maxRetryTime ?? Number.POSITIVE_INFINITY;
	const delayTime = calculateDelay(retriesConsumed, options);
	const remainingTimeBeforeCallbacks = calculateRemainingTime(startTime, maxRetryTime);

	if (remainingTimeBeforeCallbacks <= 0) {
		const context = Object.freeze({
			error: normalizedError,
			attemptNumber,
			retriesLeft,
			retriesConsumed,
			retryDelay: 0,
		});

		await options.onFailedAttempt(context);

		throw normalizedError;
	}

	const consumeRetryContext = Object.freeze({
		error: normalizedError,
		attemptNumber,
		retriesLeft,
		retriesConsumed,
		retryDelay: retriesLeft > 0 ? delayTime : 0,
	});

	const consumeRetry = await options.shouldConsumeRetry(consumeRetryContext);
	const effectiveDelay = consumeRetry && retriesLeft > 0 ? delayTime : 0;
	const context = Object.freeze({
		error: normalizedError,
		attemptNumber,
		retriesLeft,
		retriesConsumed,
		retryDelay: effectiveDelay,
	});

	await options.onFailedAttempt(context);

	if (calculateRemainingTime(startTime, maxRetryTime) <= 0) {
		throw normalizedError;
	}

	const remainingTime = calculateRemainingTime(startTime, maxRetryTime);

	if (remainingTime <= 0 || retriesLeft <= 0) {
		throw normalizedError;
	}

	if (normalizedError instanceof TypeError && !isNetworkError(normalizedError)) {
		throw normalizedError;
	}

	if (!await options.shouldRetry(context)) {
		throw normalizedError;
	}

	const remainingTimeAfterShouldRetry = calculateRemainingTime(startTime, maxRetryTime);

	if (remainingTimeAfterShouldRetry <= 0) {
		throw normalizedError;
	}

	if (!consumeRetry) {
		options.signal?.throwIfAborted();
		return false;
	}

	const finalDelay = Math.min(effectiveDelay, remainingTimeAfterShouldRetry);

	options.signal?.throwIfAborted();

	await delayForRetry(finalDelay, options);

	options.signal?.throwIfAborted();

	return true;
}

async function pRetry(input, options = {}) {
	options = {...options};

	validateRetries(options.retries);

	if (Object.hasOwn(options, 'forever')) {
		throw new Error('The `forever` option is no longer supported. For many use-cases, you can set `retries: Infinity` instead.');
	}

	options.retries ??= 10;
	options.factor ??= 2;
	options.minTimeout ??= 1000;
	options.maxTimeout ??= Number.POSITIVE_INFINITY;
	options.maxRetryTime ??= Number.POSITIVE_INFINITY;
	options.randomize ??= false;
	options.onFailedAttempt ??= () => {};
	options.shouldRetry ??= () => true;
	options.shouldConsumeRetry ??= () => true;

	// Validate numeric options and normalize edge cases
	validateFunctionOption('onFailedAttempt', options.onFailedAttempt);
	validateFunctionOption('shouldRetry', options.shouldRetry);
	validateFunctionOption('shouldConsumeRetry', options.shouldConsumeRetry);
	validateNumberOption('factor', options.factor, {min: 0, allowInfinity: false});
	validateNumberOption('minTimeout', options.minTimeout, {min: 0, allowInfinity: false});
	validateNumberOption('maxTimeout', options.maxTimeout, {min: 0, allowInfinity: true});
	validateNumberOption('maxRetryTime', options.maxRetryTime, {min: 0, allowInfinity: true});

	// Treat non-positive factor as 1 to avoid zero backoff or negative behavior
	if (!(options.factor > 0)) {
		options.factor = 1;
	}

	options.signal?.throwIfAborted();

	let attemptNumber = 0;
	let retriesConsumed = 0;
	const startTime = performance.now();

	while (Number.isFinite(options.retries) ? retriesConsumed <= options.retries : true) {
		attemptNumber++;

		try {
			options.signal?.throwIfAborted();

			const result = await input(attemptNumber);

			options.signal?.throwIfAborted();

			return result;
		} catch (error) {
			if (await onAttemptFailure({
				error,
				attemptNumber,
				retriesConsumed,
				startTime,
				options,
			})) {
				retriesConsumed++;
			}
		}
	}

	// Should not reach here, but in case it does, throw an error
	throw new Error('Retry attempts exhausted without throwing an error.');
}

function makeRetriable(function_, options) {
	return function (...arguments_) {
		return pRetry(() => function_.apply(this, arguments_), options);
	};
}


/***/ },

/***/ "../../node_modules/.pnpm/unhomoglyph@1.0.6/node_modules/unhomoglyph/data.json"
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"0":"O","1":"l","֭":"֖","֮":"֘","֨":"֙","֤":"֚","᪴":"ۛ","⃛":"ۛ","ؙ":"̓","ࣳ":"̓","̓":"̓","̕":"̓","ُ":"̓","ٝ":"̔","֜":"́","֝":"́","ؘ":"́","݇":"́","́":"́","॔":"́","َ":"́","̀":"̀","॓":"̀","̌":"̆","꙼":"̆","٘":"̆","ٚ":"̆","ͮ":"̆","ۨ":"̆̇","̐":"̆̇","ँ":"̆̇","ঁ":"̆̇","ઁ":"̆̇","ଁ":"̆̇","ఀ":"̆̇","ಁ":"̆̇","ഁ":"̆̇","𑒿":"̆̇","᳐":"̂","̑":"̂","ٛ":"̂","߮":"̂","꛰":"̂","֯":"̊","۟":"̊","៓":"̊","゚":"̊","ْ":"̊","ஂ":"̊","ံ":"̊","ំ":"̊","𑌀":"̊","ํ":"̊","ໍ":"̊","ͦ":"̊","ⷪ":"̊","࣫":"̈","߳":"̈","ً":"̋","ࣰ":"̋","͂":"̃","ٓ":"̃","ׄ":"̇","۬":"̇","݀":"̇","࣪":"̇","݁":"̇","͘":"̇","ֹ":"̇","ֺ":"̇","ׂ":"̇","ׁ":"̇","߭":"̇","ं":"̇","ਂ":"̇","ં":"̇","்":"̇","̷":"̸","᪷":"̨","̢":"̨","ͅ":"̨","᳒":"̄","̅":"̄","ٙ":"̄","߫":"̄","꛱":"̄","᳚":"̎","ٗ":"̒","͗":"͐","ࣿ":"͐","ࣸ":"͐","ऀ":"͒","᳭":"̖","᳜":"̩","ٖ":"̩","᳕":"̫","͇":"̳","ࣹ":"͔","ࣺ":"͕","゛":"ﾞ","゜":"ﾟ","̶":"̵","〬":"̉","ׅ":"̣","࣭":"̣","᳝":"̣","ִ":"̣","ٜ":"̣","़":"̣","়":"̣","਼":"̣","઼":"̣","଼":"̣","𑇊":"̣","𑓃":"̣","𐨺":"̣","࣮":"̤","᳞":"̤","༷":"̥","〭":"̥","̧":"̦","̡":"̦","̹":"̦","᳙":"̭","᳘":"̮","॒":"̱","̠":"̱","ࣱ":"ٌ","ࣨ":"ٌ","ࣥ":"ٌ","ﱞ":"ﹲّ","ࣲ":"ٍ","ﱟ":"ﹴّ","ﳲ":"ﹷّ","ﱠ":"ﹶّ","ﳳ":"ﹹّ","ﱡ":"ﹸّ","ؚ":"ِ","̗":"ِ","ﳴ":"ﹻّ","ﱢ":"ﹺّ","ﱣ":"ﹼٰ","ٟ":"ٕ","̍":"ٰ","݂":"ܼ","ਃ":"ঃ","ః":"ঃ","ಃ":"ঃ","ഃ":"ঃ","ඃ":"ঃ","း":"ঃ","𑓁":"ঃ","់":"่","່":"่","້":"้","໊":"๊","໋":"๋","꙯":"⃩","\\u2028":" ","\\u2029":" "," ":" "," ":" "," ":" "," ":" "," ":" "," ":" "," ":" "," ":" "," ":" "," ":" "," ":" "," ":" "," ":" "," ":" "," ":" ","ߺ":"_","﹍":"_","﹎":"_","﹏":"_","‐":"-","‑":"-","‒":"-","–":"-","﹘":"-","۔":"-","⁃":"-","˗":"-","−":"-","➖":"-","Ⲻ":"-","⨩":"-̓","⸚":"-̈","﬩":"-̇","∸":"-̇","⨪":"-̣","꓾":"-.","～":"〜","؍":",","٫":",","‚":",","¸":",","ꓹ":",","⸲":"،","٬":"،",";":";","⸵":"؛","ः":":","ઃ":":","：":":","։":":","܃":":","܄":":","᛬":":","︰":":","᠃":":","᠉":":","⁚":":","׃":":","˸":":","꞉":":","∶":":","ː":":","ꓽ":":","⩴":"::=","⧴":":→","！":"!","ǃ":"!","ⵑ":"!","‼":"!!","⁉":"!?","ʔ":"?","Ɂ":"?","ॽ":"?","Ꭾ":"?","ꛫ":"?","⁈":"?!","⁇":"??","⸮":"؟","𝅭":".","․":".","܁":".","܂":".","꘎":".","𐩐":".","٠":".","۰":".","ꓸ":".","ꓻ":".,","‥":"..","ꓺ":"..","…":"...","꛴":"꛳꛳","・":"·","･":"·","᛫":"·","·":"·","⸱":"·","𐄁":"·","•":"·","‧":"·","∙":"·","⋅":"·","ꞏ":"·","ᐧ":"·","⋯":"···","ⵈ":"···","ᑄ":"·<","⋗":"·>","ᐷ":"·>","ᑀ":"·>","ᔯ":"·4","ᑾ":"·b","ᒀ":"·ḃ","ᑺ":"·d","ᒘ":"·J","ᒶ":"·L","ᑶ":"·P","ᑗ":"·U","ᐺ":"·V","ᐼ":"·Ʌ","ᒮ":"·Γ","ᐎ":"·Δ","ᑙ":"·Ո","ᐌ":"·ᐁ","ᐐ":"·ᐄ","ᐒ":"·ᐅ","ᐔ":"·ᐆ","ᐗ":"·ᐊ","ᐙ":"·ᐋ","ᐾ":"·ᐲ","ᑂ":"·ᐴ","ᑆ":"·ᐹ","ᑛ":"·ᑏ","ᑔ":"·ᑐ","ᑝ":"·ᑐ","ᑟ":"·ᑑ","ᑡ":"·ᑕ","ᑣ":"·ᑖ","ᑴ":"·ᑫ","ᑸ":"·ᑮ","ᑼ":"·ᑰ","ᒒ":"·ᒉ","ᒔ":"·ᒋ","ᒖ":"·ᒌ","ᒚ":"·ᒎ","ᒜ":"·ᒐ","ᒞ":"·ᒑ","ᒬ":"·ᒣ","ᒰ":"·ᒦ","ᒲ":"·ᒧ","ᒴ":"·ᒨ","ᒸ":"·ᒫ","ᓉ":"·ᓀ","ᣆ":"·ᓂ","ᣈ":"·ᓃ","ᣊ":"·ᓄ","ᣌ":"·ᓅ","ᓋ":"·ᓇ","ᓍ":"·ᓈ","ᓜ":"·ᓓ","ᓞ":"·ᓕ","ᓠ":"·ᓖ","ᓢ":"·ᓗ","ᓤ":"·ᓘ","ᓦ":"·ᓚ","ᓨ":"·ᓛ","ᓶ":"·ᓭ","ᓸ":"·ᓯ","ᓺ":"·ᓰ","ᓼ":"·ᓱ","ᓾ":"·ᓲ","ᔀ":"·ᓴ","ᔂ":"·ᓵ","ᔗ":"·ᔐ","ᔙ":"·ᔑ","ᔛ":"·ᔒ","ᔝ":"·ᔓ","ᔟ":"·ᔔ","ᔡ":"·ᔕ","ᔣ":"·ᔖ","ᔱ":"·ᔨ","ᔳ":"·ᔩ","ᔵ":"·ᔪ","ᔷ":"·ᔫ","ᔹ":"·ᔭ","ᔻ":"·ᔮ","ᣎ":"·ᕃ","ᣏ":"·ᕆ","ᣐ":"·ᕇ","ᣑ":"·ᕈ","ᣒ":"·ᕉ","ᣓ":"·ᕋ","ᕎ":"·ᕌ","ᕛ":"·ᕚ","ᕨ":"·ᕧ","ᢳ":"·ᢱ","ᢶ":"·ᢴ","ᢹ":"·ᢸ","ᣂ":"·ᣀ","꠰":"।","॥":"।।","᰼":"᰻᰻","။":"၊၊","᪩":"᪨᪨","᪫":"᪪᪨","᭟":"᭞᭞","𐩗":"𐩖𐩖","𑑌":"𑑋𑑋","𑙂":"𑙁𑙁","𑱂":"𑱁𑱁","᱿":"᱾᱾","՝":"\'","＇":"\'","‘":"\'","’":"\'","‛":"\'","′":"\'","‵":"\'","՚":"\'","׳":"\'","`":"\'","`":"\'","｀":"\'","´":"\'","΄":"\'","´":"\'","᾽":"\'","᾿":"\'","῾":"\'","ʹ":"\'","ʹ":"\'","ˈ":"\'","ˊ":"\'","ˋ":"\'","˴":"\'","ʻ":"\'","ʽ":"\'","ʼ":"\'","ʾ":"\'","ꞌ":"\'","י":"\'","ߴ":"\'","ߵ":"\'","ᑊ":"\'","ᛌ":"\'","𖽑":"\'","𖽒":"\'","᳓":"\'\'","\\"":"\'\'","＂":"\'\'","“":"\'\'","”":"\'\'","‟":"\'\'","″":"\'\'","‶":"\'\'","〃":"\'\'","״":"\'\'","˝":"\'\'","ʺ":"\'\'","˶":"\'\'","ˮ":"\'\'","ײ":"\'\'","‴":"\'\'\'","‷":"\'\'\'","⁗":"\'\'\'\'","Ɓ":"\'B","Ɗ":"\'D","ŉ":"\'n","Ƥ":"\'P","Ƭ":"\'T","Ƴ":"\'Y","［":"(","❨":"(","❲":"(","〔":"(","﴾":"(","⸨":"((","㈠":"(ー)","⑵":"(2)","⒇":"(2O)","⑶":"(3)","⑷":"(4)","⑸":"(5)","⑹":"(6)","⑺":"(7)","⑻":"(8)","⑼":"(9)","⒜":"(a)","🄐":"(A)","⒝":"(b)","🄑":"(B)","⒞":"(c)","🄒":"(C)","⒟":"(d)","🄓":"(D)","⒠":"(e)","🄔":"(E)","⒡":"(f)","🄕":"(F)","⒢":"(g)","🄖":"(G)","⒣":"(h)","🄗":"(H)","⒤":"(i)","⒥":"(j)","🄙":"(J)","⒦":"(k)","🄚":"(K)","⑴":"(l)","🄘":"(l)","⒧":"(l)","🄛":"(L)","⑿":"(l2)","⒀":"(l3)","⒁":"(l4)","⒂":"(l5)","⒃":"(l6)","⒄":"(l7)","⒅":"(l8)","⒆":"(l9)","⑾":"(ll)","⑽":"(lO)","🄜":"(M)","⒩":"(n)","🄝":"(N)","⒪":"(o)","🄞":"(O)","⒫":"(p)","🄟":"(P)","⒬":"(q)","🄠":"(Q)","⒭":"(r)","🄡":"(R)","⒨":"(rn)","⒮":"(s)","🄢":"(S)","🄪":"(S)","⒯":"(t)","🄣":"(T)","⒰":"(u)","🄤":"(U)","⒱":"(v)","🄥":"(V)","⒲":"(w)","🄦":"(W)","⒳":"(x)","🄧":"(X)","⒴":"(y)","🄨":"(Y)","⒵":"(z)","🄩":"(Z)","㈀":"(ᄀ)","㈎":"(가)","㈁":"(ᄂ)","㈏":"(나)","㈂":"(ᄃ)","㈐":"(다)","㈃":"(ᄅ)","㈑":"(라)","㈄":"(ᄆ)","㈒":"(마)","㈅":"(ᄇ)","㈓":"(바)","㈆":"(ᄉ)","㈔":"(사)","㈇":"(ᄋ)","㈕":"(아)","㈝":"(오전)","㈞":"(오후)","㈈":"(ᄌ)","㈖":"(자)","㈜":"(주)","㈉":"(ᄎ)","㈗":"(차)","㈊":"(ᄏ)","㈘":"(카)","㈋":"(ᄐ)","㈙":"(타)","㈌":"(ᄑ)","㈚":"(파)","㈍":"(ᄒ)","㈛":"(하)","㈦":"(七)","㈢":"(三)","🉁":"(三)","㈨":"(九)","㈡":"(二)","🉂":"(二)","㈤":"(五)","㈹":"(代)","㈽":"(企)","㉁":"(休)","㈧":"(八)","㈥":"(六)","㈸":"(労)","🉇":"(勝)","㈩":"(十)","㈿":"(協)","㈴":"(名)","㈺":"(呼)","㈣":"(四)","㈯":"(土)","㈻":"(学)","🉃":"(安)","🉅":"(打)","🉈":"(敗)","㈰":"(日)","㈪":"(月)","㈲":"(有)","㈭":"(木)","🉀":"(本)","㈱":"(株)","㈬":"(水)","㈫":"(火)","🉄":"(点)","㈵":"(特)","🉆":"(盗)","㈼":"(監)","㈳":"(社)","㈷":"(祝)","㉀":"(祭)","㉂":"(自)","㉃":"(至)","㈶":"(財)","㈾":"(資)","㈮":"(金)","］":")","❩":")","❳":")","〕":")","﴿":")","⸩":"))","❴":"{","𝄔":"{","❵":"}","〚":"⟦","〛":"⟧","⟨":"❬","〈":"❬","〈":"❬","㇛":"❬","く":"❬","𡿨":"❬","⟩":"❭","〉":"❭","〉":"❭","＾":"︿","⸿":"¶","⁎":"*","٭":"*","∗":"*","𐌟":"*","᜵":"/","⁁":"/","∕":"/","⁄":"/","╱":"/","⟋":"/","⧸":"/","𝈺":"/","㇓":"/","〳":"/","Ⳇ":"/","ノ":"/","丿":"/","⼃":"/","⧶":"/̄","⫽":"//","⫻":"///","＼":"\\\\","﹨":"\\\\","∖":"\\\\","⟍":"\\\\","⧵":"\\\\","⧹":"\\\\","𝈏":"\\\\","𝈻":"\\\\","㇔":"\\\\","丶":"\\\\","⼂":"\\\\","⳹":"\\\\\\\\","⑊":"\\\\\\\\","⟈":"\\\\ᑕ","ꝸ":"&","૰":"॰","𑂻":"॰","𑇇":"॰","⚬":"॰","𑇛":"꣼","៙":"๏","៕":"๚","៚":"๛","༌":"་","༎":"།།","˄":"^","ˆ":"^","꙾":"ˇ","˘":"ˇ","‾":"ˉ","﹉":"ˉ","﹊":"ˉ","﹋":"ˉ","﹌":"ˉ","¯":"ˉ","￣":"ˉ","▔":"ˉ","ъ":"ˉb","ꙑ":"ˉbi","͵":"ˏ","˻":"˪","꜖":"˪","꜔":"˫","。":"˳","⸰":"°","˚":"°","∘":"°","○":"°","◦":"°","⍜":"°̲","⍤":"°̈","℃":"°C","℉":"°F","௵":"௳","༛":"༚༚","༟":"༚༝","࿎":"༝༚","༞":"༝༝","Ⓒ":"©","Ⓡ":"®","Ⓟ":"℗","𝈛":"⅄","⯬":"↞","⯭":"↟","⯮":"↠","⯯":"↡","↵":"↲","⥥":"⇃⇂","⥯":"⇃ᛚ","𝛛":"∂","𝜕":"∂","𝝏":"∂","𝞉":"∂","𝟃":"∂","𞣌":"∂","𞣍":"∂̵","ð":"∂̵","⌀":"∅","𝛁":"∇","𝛻":"∇","𝜵":"∇","𝝯":"∇","𝞩":"∇","𑢨":"∇","⍢":"∇̈","⍫":"∇̴","█":"∎","■":"∎","⨿":"∐","᛭":"+","➕":"+","𐊛":"+","⨣":"+̂","⨢":"+̊","⨤":"+̃","∔":"+̇","⨥":"+̣","⨦":"+̰","⨧":"+₂","➗":"÷","‹":"<","❮":"<","˂":"<","𝈶":"<","ᐸ":"<","ᚲ":"<","⋖":"<·","Ⲵ":"<·","ᑅ":"<·","≪":"<<","⋘":"<<<","᐀":"=","⹀":"=","゠":"=","꓿":"=","≚":"=̆","≙":"=̂","≗":"=̊","≐":"=̇","≑":"=̣̇","⩮":"=⃰","⩵":"==","⩶":"===","≞":"=ͫ","›":">","❯":">","˃":">","𝈷":">","ᐳ":">","𖼿":">","ᑁ":">·","⪥":"><","≫":">>","⨠":">>","⋙":">>>","⁓":"~","˜":"~","῀":"~","∼":"~","⍨":"~̈","⸞":"~̇","⩪":"~̇","⸟":"~̣","𞣈":"∠","⋀":"∧","∯":"∮∮","∰":"∮∮∮","⸫":"∴","⸪":"∵","⸬":"∷","𑇞":"≈","♎":"≏","🝞":"≏","≣":"≡","⨃":"⊍","⨄":"⊎","𝈸":"⊏","𝈹":"⊐","⨅":"⊓","⨆":"⊔","⨂":"⊗","⍟":"⊛","🝱":"⊠","🝕":"⊡","◁":"⊲","▷":"⊳","⍣":"⋆̈","︴":"⌇","◠":"⌒","⨽":"⌙","⌥":"⌤","⧇":"⌻","◎":"⌾","⦾":"⌾","⧅":"⍂","⦰":"⍉","⏃":"⍋","⏂":"⍎","⏁":"⍕","⏆":"⍭","☸":"⎈","︵":"⏜","︶":"⏝","︷":"⏞","︸":"⏟","︹":"⏠","︺":"⏡","▱":"⏥","⏼":"⏻","︱":"│","｜":"│","┃":"│","┏":"┌","┣":"├","▐":"▌","▗":"▖","▝":"▘","☐":"□","￭":"▪","▸":"▶","►":"▶","⳩":"☧","🜊":"☩","🌒":"☽","🌙":"☽","⏾":"☾","🌘":"☾","⧙":"⦚","🜺":"⧟","⨾":"⨟","𐆠":"⳨","♩":"𝅘𝅥","♪":"𝅘𝅥𝅮","⓪":"🄍","↺":"🄎","˙":"ॱ","ൎ":"ॱ","－":"ー","—":"ー","―":"ー","─":"ー","━":"ー","㇐":"ー","ꟷ":"ー","ᅳ":"ー","ㅡ":"ー","一":"ー","⼀":"ー","ᆖ":"ーー","ힹ":"ーᅡ","ힺ":"ーᅥ","ힻ":"ーᅥ丨","ힼ":"ーᅩ","ᆕ":"ーᅮ","ᅴ":"ー丨","ㅢ":"ー丨","ᆗ":"ー丨ᅮ","🄏":"$⃠","₤":"£","〒":"₸","〶":"₸","᭜":"᭐","꧆":"꧐","𑓑":"১","೧":"౧","ၥ":"၁","①":"➀","⑩":"➉","⏨":"₁₀","𝟐":"2","𝟚":"2","𝟤":"2","𝟮":"2","𝟸":"2","🯲":"2","Ꝛ":"2","Ƨ":"2","Ϩ":"2","Ꙅ":"2","ᒿ":"2","ꛯ":"2","ꧏ":"٢","۲":"٢","૨":"२","𑓒":"২","೨":"౨","②":"➁","ƻ":"2̵","🄃":"2,","⒉":"2.","㏵":"22日","㍮":"22点","㏶":"23日","㍯":"23点","㏷":"24日","㍰":"24点","㏸":"25日","㏹":"26日","㏺":"27日","㏻":"28日","㏼":"29日","㏴":"2l日","㍭":"2l点","⒛":"2O.","㏳":"2O日","㍬":"2O点","෩":"෨ා","෯":"෨ී","㏡":"2日","㋁":"2月","㍚":"2点","𝈆":"3","𝟑":"3","𝟛":"3","𝟥":"3","𝟯":"3","𝟹":"3","🯳":"3","Ɜ":"3","Ȝ":"3","Ʒ":"3","Ꝫ":"3","Ⳍ":"3","З":"3","Ӡ":"3","𖼻":"3","𑣊":"3","۳":"٣","𞣉":"٣","૩":"३","③":"➂","Ҙ":"3̦","🄄":"3,","⒊":"3.","㏾":"3l日","㏽":"3O日","㏢":"3日","㋂":"3月","㍛":"3点","𝟒":"4","𝟜":"4","𝟦":"4","𝟰":"4","𝟺":"4","🯴":"4","Ꮞ":"4","𑢯":"4","۴":"٤","૪":"४","④":"➃","🄅":"4,","⒋":"4.","ᔰ":"4·","㏣":"4日","㋃":"4月","㍜":"4点","𝟓":"5","𝟝":"5","𝟧":"5","𝟱":"5","𝟻":"5","🯵":"5","Ƽ":"5","𑢻":"5","⑤":"➄","🄆":"5,","⒌":"5.","㏤":"5日","㋄":"5月","㍝":"5点","𝟔":"6","𝟞":"6","𝟨":"6","𝟲":"6","𝟼":"6","🯶":"6","Ⳓ":"6","б":"6","Ꮾ":"6","𑣕":"6","۶":"٦","𑓖":"৬","⑥":"➅","🄇":"6,","⒍":"6.","㏥":"6日","㋅":"6月","㍞":"6点","𝈒":"7","𝟕":"7","𝟟":"7","𝟩":"7","𝟳":"7","𝟽":"7","🯷":"7","𐓒":"7","𑣆":"7","⑦":"➆","🄈":"7,","⒎":"7.","㏦":"7日","㋆":"7月","㍟":"7点","ଃ":"8","৪":"8","੪":"8","𞣋":"8","𝟖":"8","𝟠":"8","𝟪":"8","𝟴":"8","𝟾":"8","🯸":"8","ȣ":"8","Ȣ":"8","𐌚":"8","૮":"८","⑧":"➇","🄉":"8,","⒏":"8.","㏧":"8日","㋇":"8月","㍠":"8点","੧":"9","୨":"9","৭":"9","൭":"9","𝟗":"9","𝟡":"9","𝟫":"9","𝟵":"9","𝟿":"9","🯹":"9","Ꝯ":"9","Ⳋ":"9","𑣌":"9","𑢬":"9","𑣖":"9","१":"٩","𑣤":"٩","۹":"٩","೯":"౯","⑨":"➈","🄊":"9,","⒐":"9.","㏨":"9日","㋈":"9月","㍡":"9点","⍺":"a","ａ":"a","𝐚":"a","𝑎":"a","𝒂":"a","𝒶":"a","𝓪":"a","𝔞":"a","𝕒":"a","𝖆":"a","𝖺":"a","𝗮":"a","𝘢":"a","𝙖":"a","𝚊":"a","ɑ":"a","α":"a","𝛂":"a","𝛼":"a","𝜶":"a","𝝰":"a","𝞪":"a","а":"a","ⷶ":"ͣ","Ａ":"A","𝐀":"A","𝐴":"A","𝑨":"A","𝒜":"A","𝓐":"A","𝔄":"A","𝔸":"A","𝕬":"A","𝖠":"A","𝗔":"A","𝘈":"A","𝘼":"A","𝙰":"A","Α":"A","𝚨":"A","𝛢":"A","𝜜":"A","𝝖":"A","𝞐":"A","А":"A","Ꭺ":"A","ᗅ":"A","ꓮ":"A","𖽀":"A","𐊠":"A","⍶":"a̲","ǎ":"ă","Ǎ":"Ă","ȧ":"å","Ȧ":"Å","ẚ":"ả","℀":"a/c","℁":"a/s","ꜳ":"aa","Ꜳ":"AA","æ":"ae","ӕ":"ae","Æ":"AE","Ӕ":"AE","ꜵ":"ao","Ꜵ":"AO","🜇":"AR","ꜷ":"au","Ꜷ":"AU","ꜹ":"av","ꜻ":"av","Ꜹ":"AV","Ꜻ":"AV","ꜽ":"ay","Ꜽ":"AY","ꭺ":"ᴀ","∀":"Ɐ","𝈗":"Ɐ","ᗄ":"Ɐ","ꓯ":"Ɐ","𐐟":"Ɒ","𝐛":"b","𝑏":"b","𝒃":"b","𝒷":"b","𝓫":"b","𝔟":"b","𝕓":"b","𝖇":"b","𝖻":"b","𝗯":"b","𝘣":"b","𝙗":"b","𝚋":"b","Ƅ":"b","Ь":"b","Ꮟ":"b","ᑲ":"b","ᖯ":"b","Ｂ":"B","ℬ":"B","𝐁":"B","𝐵":"B","𝑩":"B","𝓑":"B","𝔅":"B","𝔹":"B","𝕭":"B","𝖡":"B","𝗕":"B","𝘉":"B","𝘽":"B","𝙱":"B","Ꞵ":"B","Β":"B","𝚩":"B","𝛣":"B","𝜝":"B","𝝗":"B","𝞑":"B","В":"B","Ᏼ":"B","ᗷ":"B","ꓐ":"B","𐊂":"B","𐊡":"B","𐌁":"B","ɓ":"b̔","ᑳ":"ḃ","ƃ":"b̄","Ƃ":"b̄","Б":"b̄","ƀ":"b̵","ҍ":"b̵","Ҍ":"b̵","ѣ":"b̵","Ѣ":"b̵","ᑿ":"b·","ᒁ":"ḃ·","ᒈ":"b\'","Ы":"bl","в":"ʙ","ᏼ":"ʙ","ｃ":"c","ⅽ":"c","𝐜":"c","𝑐":"c","𝒄":"c","𝒸":"c","𝓬":"c","𝔠":"c","𝕔":"c","𝖈":"c","𝖼":"c","𝗰":"c","𝘤":"c","𝙘":"c","𝚌":"c","ᴄ":"c","ϲ":"c","ⲥ":"c","с":"c","ꮯ":"c","𐐽":"c","ⷭ":"ͨ","🝌":"C","𑣲":"C","𑣩":"C","Ｃ":"C","Ⅽ":"C","ℂ":"C","ℭ":"C","𝐂":"C","𝐶":"C","𝑪":"C","𝒞":"C","𝓒":"C","𝕮":"C","𝖢":"C","𝗖":"C","𝘊":"C","𝘾":"C","𝙲":"C","Ϲ":"C","Ⲥ":"C","С":"C","Ꮯ":"C","ꓚ":"C","𐊢":"C","𐌂":"C","𐐕":"C","𐔜":"C","¢":"c̸","ȼ":"c̸","₡":"C⃫","🅮":"C⃠","ç":"c̦","ҫ":"c̦","Ç":"C̦","Ҫ":"C̦","Ƈ":"C\'","℅":"c/o","℆":"c/u","🅭":"㏄\\t⃝","⋴":"ꞓ","ɛ":"ꞓ","ε":"ꞓ","ϵ":"ꞓ","𝛆":"ꞓ","𝛜":"ꞓ","𝜀":"ꞓ","𝜖":"ꞓ","𝜺":"ꞓ","𝝐":"ꞓ","𝝴":"ꞓ","𝞊":"ꞓ","𝞮":"ꞓ","𝟄":"ꞓ","ⲉ":"ꞓ","є":"ꞓ","ԑ":"ꞓ","ꮛ":"ꞓ","𑣎":"ꞓ","𐐩":"ꞓ","€":"Ꞓ","Ⲉ":"Ꞓ","Є":"Ꞓ","⍷":"ꞓ̲","ͽ":"ꜿ","Ͽ":"Ꜿ","ⅾ":"d","ⅆ":"d","𝐝":"d","𝑑":"d","𝒅":"d","𝒹":"d","𝓭":"d","𝔡":"d","𝕕":"d","𝖉":"d","𝖽":"d","𝗱":"d","𝘥":"d","𝙙":"d","𝚍":"d","ԁ":"d","Ꮷ":"d","ᑯ":"d","ꓒ":"d","Ⅾ":"D","ⅅ":"D","𝐃":"D","𝐷":"D","𝑫":"D","𝒟":"D","𝓓":"D","𝔇":"D","𝔻":"D","𝕯":"D","𝖣":"D","𝗗":"D","𝘋":"D","𝘿":"D","𝙳":"D","Ꭰ":"D","ᗞ":"D","ᗪ":"D","ꓓ":"D","ɗ":"d̔","ɖ":"d̨","ƌ":"d̄","đ":"d̵","Đ":"D̵","Ð":"D̵","Ɖ":"D̵","₫":"ḏ̵","ꝺ":"Ꝺ","ᑻ":"d·","ᒇ":"d\'","ʤ":"dȝ","ǳ":"dz","ʣ":"dz","ǲ":"Dz","Ǳ":"DZ","ǆ":"dž","ǅ":"Dž","Ǆ":"DŽ","ʥ":"dʑ","ꭰ":"ᴅ","⸹":"ẟ","δ":"ẟ","𝛅":"ẟ","𝛿":"ẟ","𝜹":"ẟ","𝝳":"ẟ","𝞭":"ẟ","ծ":"ẟ","ᕷ":"ẟ","℮":"e","ｅ":"e","ℯ":"e","ⅇ":"e","𝐞":"e","𝑒":"e","𝒆":"e","𝓮":"e","𝔢":"e","𝕖":"e","𝖊":"e","𝖾":"e","𝗲":"e","𝘦":"e","𝙚":"e","𝚎":"e","ꬲ":"e","е":"e","ҽ":"e","ⷷ":"ͤ","⋿":"E","Ｅ":"E","ℰ":"E","𝐄":"E","𝐸":"E","𝑬":"E","𝓔":"E","𝔈":"E","𝔼":"E","𝕰":"E","𝖤":"E","𝗘":"E","𝘌":"E","𝙀":"E","𝙴":"E","Ε":"E","𝚬":"E","𝛦":"E","𝜠":"E","𝝚":"E","𝞔":"E","Е":"E","ⴹ":"E","Ꭼ":"E","ꓰ":"E","𑢦":"E","𑢮":"E","𐊆":"E","ě":"ĕ","Ě":"Ĕ","ɇ":"e̸","Ɇ":"E̸","ҿ":"ę","ꭼ":"ᴇ","ə":"ǝ","ә":"ǝ","∃":"Ǝ","ⴺ":"Ǝ","ꓱ":"Ǝ","ɚ":"ǝ˞","ᴔ":"ǝo","ꭁ":"ǝo̸","ꭂ":"ǝo̵","Ә":"Ə","𝈡":"Ɛ","ℇ":"Ɛ","Ԑ":"Ɛ","Ꮛ":"Ɛ","𖼭":"Ɛ","𐐁":"Ɛ","ᶟ":"ᵋ","ᴈ":"ɜ","з":"ɜ","ҙ":"ɜ̦","𐑂":"ɞ","ꞝ":"ʚ","𐐪":"ʚ","𝐟":"f","𝑓":"f","𝒇":"f","𝒻":"f","𝓯":"f","𝔣":"f","𝕗":"f","𝖋":"f","𝖿":"f","𝗳":"f","𝘧":"f","𝙛":"f","𝚏":"f","ꬵ":"f","ꞙ":"f","ſ":"f","ẝ":"f","ք":"f","𝈓":"F","ℱ":"F","𝐅":"F","𝐹":"F","𝑭":"F","𝓕":"F","𝔉":"F","𝔽":"F","𝕱":"F","𝖥":"F","𝗙":"F","𝘍":"F","𝙁":"F","𝙵":"F","Ꞙ":"F","Ϝ":"F","𝟊":"F","ᖴ":"F","ꓝ":"F","𑣂":"F","𑢢":"F","𐊇":"F","𐊥":"F","𐔥":"F","ƒ":"f̦","Ƒ":"F̦","ᵮ":"f̴","℻":"FAX","ﬀ":"ff","ﬃ":"ffi","ﬄ":"ffl","ﬁ":"fi","ﬂ":"fl","ʩ":"fŋ","ᖵ":"Ⅎ","ꓞ":"Ⅎ","𝈰":"ꟻ","ᖷ":"ꟻ","ｇ":"g","ℊ":"g","𝐠":"g","𝑔":"g","𝒈":"g","𝓰":"g","𝔤":"g","𝕘":"g","𝖌":"g","𝗀":"g","𝗴":"g","𝘨":"g","𝙜":"g","𝚐":"g","ɡ":"g","ᶃ":"g","ƍ":"g","ց":"g","𝐆":"G","𝐺":"G","𝑮":"G","𝒢":"G","𝓖":"G","𝔊":"G","𝔾":"G","𝕲":"G","𝖦":"G","𝗚":"G","𝘎":"G","𝙂":"G","𝙶":"G","Ԍ":"G","Ꮐ":"G","Ᏻ":"G","ꓖ":"G","ᶢ":"ᵍ","ɠ":"g̔","ǧ":"ğ","Ǧ":"Ğ","ǵ":"ģ","ǥ":"g̵","Ǥ":"G̵","Ɠ":"G\'","ԍ":"ɢ","ꮐ":"ɢ","ᏻ":"ɢ","ｈ":"h","ℎ":"h","𝐡":"h","𝒉":"h","𝒽":"h","𝓱":"h","𝔥":"h","𝕙":"h","𝖍":"h","𝗁":"h","𝗵":"h","𝘩":"h","𝙝":"h","𝚑":"h","һ":"h","հ":"h","Ꮒ":"h","Ｈ":"H","ℋ":"H","ℌ":"H","ℍ":"H","𝐇":"H","𝐻":"H","𝑯":"H","𝓗":"H","𝕳":"H","𝖧":"H","𝗛":"H","𝘏":"H","𝙃":"H","𝙷":"H","Η":"H","𝚮":"H","𝛨":"H","𝜢":"H","𝝜":"H","𝞖":"H","Ⲏ":"H","Н":"H","Ꮋ":"H","ᕼ":"H","ꓧ":"H","𐋏":"H","ᵸ":"ᴴ","ɦ":"h̔","ꚕ":"h̔","Ᏺ":"h̔","Ⱨ":"H̩","Ң":"H̩","ħ":"h̵","ℏ":"h̵","ћ":"h̵","Ħ":"H̵","Ӊ":"H̦","Ӈ":"H̦","н":"ʜ","ꮋ":"ʜ","ң":"ʜ̩","ӊ":"ʜ̦","ӈ":"ʜ̦","Ԋ":"Ƕ","ꮀ":"ⱶ","Ͱ":"Ⱶ","Ꭸ":"Ⱶ","Ꮀ":"Ⱶ","ꚱ":"Ⱶ","ꞕ":"ꜧ","˛":"i","⍳":"i","ｉ":"i","ⅰ":"i","ℹ":"i","ⅈ":"i","𝐢":"i","𝑖":"i","𝒊":"i","𝒾":"i","𝓲":"i","𝔦":"i","𝕚":"i","𝖎":"i","𝗂":"i","𝗶":"i","𝘪":"i","𝙞":"i","𝚒":"i","ı":"i","𝚤":"i","ɪ":"i","ɩ":"i","ι":"i","ι":"i","ͺ":"i","𝛊":"i","𝜄":"i","𝜾":"i","𝝸":"i","𝞲":"i","і":"i","ꙇ":"i","ӏ":"i","ꭵ":"i","Ꭵ":"i","𑣃":"i","ⓛ":"Ⓘ","⍸":"i̲","ǐ":"ĭ","Ǐ":"Ĭ","ɨ":"i̵","ᵻ":"i̵","ᵼ":"i̵","ⅱ":"ii","ⅲ":"iii","ĳ":"ij","ⅳ":"iv","ⅸ":"ix","ｊ":"j","ⅉ":"j","𝐣":"j","𝑗":"j","𝒋":"j","𝒿":"j","𝓳":"j","𝔧":"j","𝕛":"j","𝖏":"j","𝗃":"j","𝗷":"j","𝘫":"j","𝙟":"j","𝚓":"j","ϳ":"j","ј":"j","Ｊ":"J","𝐉":"J","𝐽":"J","𝑱":"J","𝒥":"J","𝓙":"J","𝔍":"J","𝕁":"J","𝕵":"J","𝖩":"J","𝗝":"J","𝘑":"J","𝙅":"J","𝙹":"J","Ʝ":"J","Ϳ":"J","Ј":"J","Ꭻ":"J","ᒍ":"J","ꓙ":"J","ɉ":"j̵","Ɉ":"J̵","ᒙ":"J·","𝚥":"ȷ","յ":"ȷ","ꭻ":"ᴊ","𝐤":"k","𝑘":"k","𝒌":"k","𝓀":"k","𝓴":"k","𝔨":"k","𝕜":"k","𝖐":"k","𝗄":"k","𝗸":"k","𝘬":"k","𝙠":"k","𝚔":"k","K":"K","Ｋ":"K","𝐊":"K","𝐾":"K","𝑲":"K","𝒦":"K","𝓚":"K","𝔎":"K","𝕂":"K","𝕶":"K","𝖪":"K","𝗞":"K","𝘒":"K","𝙆":"K","𝙺":"K","Κ":"K","𝚱":"K","𝛫":"K","𝜥":"K","𝝟":"K","𝞙":"K","Ⲕ":"K","К":"K","Ꮶ":"K","ᛕ":"K","ꓗ":"K","𐔘":"K","ƙ":"k̔","Ⱪ":"K̩","Қ":"K̩","₭":"K̵","Ꝁ":"K̵","Ҟ":"K̵","Ƙ":"K\'","׀":"l","|":"l","∣":"l","⏽":"l","￨":"l","١":"l","۱":"l","𐌠":"l","𞣇":"l","𝟏":"l","𝟙":"l","𝟣":"l","𝟭":"l","𝟷":"l","🯱":"l","I":"l","Ｉ":"l","Ⅰ":"l","ℐ":"l","ℑ":"l","𝐈":"l","𝐼":"l","𝑰":"l","𝓘":"l","𝕀":"l","𝕴":"l","𝖨":"l","𝗜":"l","𝘐":"l","𝙄":"l","𝙸":"l","Ɩ":"l","ｌ":"l","ⅼ":"l","ℓ":"l","𝐥":"l","𝑙":"l","𝒍":"l","𝓁":"l","𝓵":"l","𝔩":"l","𝕝":"l","𝖑":"l","𝗅":"l","𝗹":"l","𝘭":"l","𝙡":"l","𝚕":"l","ǀ":"l","Ι":"l","𝚰":"l","𝛪":"l","𝜤":"l","𝝞":"l","𝞘":"l","Ⲓ":"l","І":"l","Ӏ":"l","ו":"l","ן":"l","ا":"l","𞸀":"l","𞺀":"l","ﺎ":"l","ﺍ":"l","ߊ":"l","ⵏ":"l","ᛁ":"l","ꓲ":"l","𖼨":"l","𐊊":"l","𐌉":"l","𝈪":"L","Ⅼ":"L","ℒ":"L","𝐋":"L","𝐿":"L","𝑳":"L","𝓛":"L","𝔏":"L","𝕃":"L","𝕷":"L","𝖫":"L","𝗟":"L","𝘓":"L","𝙇":"L","𝙻":"L","Ⳑ":"L","Ꮮ":"L","ᒪ":"L","ꓡ":"L","𖼖":"L","𑢣":"L","𑢲":"L","𐐛":"L","𐔦":"L","ﴼ":"l̋","ﴽ":"l̋","ł":"l̸","Ł":"L̸","ɭ":"l̨","Ɨ":"l̵","ƚ":"l̵","ɫ":"l̴","إ":"lٕ","ﺈ":"lٕ","ﺇ":"lٕ","ٳ":"lٕ","ŀ":"l·","Ŀ":"l·","ᒷ":"l·","🄂":"l,","⒈":"l.","ױ":"l\'","⒓":"l2.","㏫":"l2日","㋋":"l2月","㍤":"l2点","⒔":"l3.","㏬":"l3日","㍥":"l3点","⒕":"l4.","㏭":"l4日","㍦":"l4点","⒖":"l5.","㏮":"l5日","㍧":"l5点","⒗":"l6.","㏯":"l6日","㍨":"l6点","⒘":"l7.","㏰":"l7日","㍩":"l7点","⒙":"l8.","㏱":"l8日","㍪":"l8点","⒚":"l9.","㏲":"l9日","㍫":"l9点","ǉ":"lj","Ĳ":"lJ","ǈ":"Lj","Ǉ":"LJ","‖":"ll","∥":"ll","Ⅱ":"ll","ǁ":"ll","װ":"ll","𐆙":"l̵l̵","⒒":"ll.","Ⅲ":"lll","𐆘":"l̵l̵S̵","㏪":"ll日","㋊":"ll月","㍣":"ll点","Ю":"lO","⒑":"lO.","㏩":"lO日","㋉":"lO月","㍢":"lO点","ʪ":"ls","₶":"lt","Ⅳ":"lV","Ⅸ":"lX","ɮ":"lȝ","ʫ":"lz","أ":"lٴ","ﺄ":"lٴ","ﺃ":"lٴ","ٲ":"lٴ","ٵ":"lٴ","ﷳ":"lكبر","ﷲ":"lللّٰo","㏠":"l日","㋀":"l月","㍙":"l点","ⳑ":"ʟ","ꮮ":"ʟ","𐑃":"ʟ","Ｍ":"M","Ⅿ":"M","ℳ":"M","𝐌":"M","𝑀":"M","𝑴":"M","𝓜":"M","𝔐":"M","𝕄":"M","𝕸":"M","𝖬":"M","𝗠":"M","𝘔":"M","𝙈":"M","𝙼":"M","Μ":"M","𝚳":"M","𝛭":"M","𝜧":"M","𝝡":"M","𝞛":"M","Ϻ":"M","Ⲙ":"M","М":"M","Ꮇ":"M","ᗰ":"M","ᛖ":"M","ꓟ":"M","𐊰":"M","𐌑":"M","Ӎ":"M̦","🝫":"MB","ⷨ":"ᷟ","𝐧":"n","𝑛":"n","𝒏":"n","𝓃":"n","𝓷":"n","𝔫":"n","𝕟":"n","𝖓":"n","𝗇":"n","𝗻":"n","𝘯":"n","𝙣":"n","𝚗":"n","ո":"n","ռ":"n","Ｎ":"N","ℕ":"N","𝐍":"N","𝑁":"N","𝑵":"N","𝒩":"N","𝓝":"N","𝔑":"N","𝕹":"N","𝖭":"N","𝗡":"N","𝘕":"N","𝙉":"N","𝙽":"N","Ν":"N","𝚴":"N","𝛮":"N","𝜨":"N","𝝢":"N","𝞜":"N","Ⲛ":"N","ꓠ":"N","𐔓":"N","𐆎":"N̊","ɳ":"n̨","ƞ":"n̩","η":"n̩","𝛈":"n̩","𝜂":"n̩","𝜼":"n̩","𝝶":"n̩","𝞰":"n̩","Ɲ":"N̦","ᵰ":"n̴","ǌ":"nj","ǋ":"Nj","Ǌ":"NJ","№":"No","ͷ":"ᴎ","и":"ᴎ","𐑍":"ᴎ","ņ":"ɲ","ం":"o","ಂ":"o","ം":"o","ං":"o","०":"o","੦":"o","૦":"o","௦":"o","౦":"o","೦":"o","൦":"o","๐":"o","໐":"o","၀":"o","٥":"o","۵":"o","ｏ":"o","ℴ":"o","𝐨":"o","𝑜":"o","𝒐":"o","𝓸":"o","𝔬":"o","𝕠":"o","𝖔":"o","𝗈":"o","𝗼":"o","𝘰":"o","𝙤":"o","𝚘":"o","ᴏ":"o","ᴑ":"o","ꬽ":"o","ο":"o","𝛐":"o","𝜊":"o","𝝄":"o","𝝾":"o","𝞸":"o","σ":"o","𝛔":"o","𝜎":"o","𝝈":"o","𝞂":"o","𝞼":"o","ⲟ":"o","о":"o","ჿ":"o","օ":"o","ס":"o","ه":"o","𞸤":"o","𞹤":"o","𞺄":"o","ﻫ":"o","ﻬ":"o","ﻪ":"o","ﻩ":"o","ھ":"o","ﮬ":"o","ﮭ":"o","ﮫ":"o","ﮪ":"o","ہ":"o","ﮨ":"o","ﮩ":"o","ﮧ":"o","ﮦ":"o","ە":"o","ഠ":"o","ဝ":"o","𐓪":"o","𑣈":"o","𑣗":"o","𐐬":"o","߀":"O","০":"O","୦":"O","〇":"O","𑓐":"O","𑣠":"O","𝟎":"O","𝟘":"O","𝟢":"O","𝟬":"O","𝟶":"O","🯰":"O","Ｏ":"O","𝐎":"O","𝑂":"O","𝑶":"O","𝒪":"O","𝓞":"O","𝔒":"O","𝕆":"O","𝕺":"O","𝖮":"O","𝗢":"O","𝘖":"O","𝙊":"O","𝙾":"O","Ο":"O","𝚶":"O","𝛰":"O","𝜪":"O","𝝤":"O","𝞞":"O","Ⲟ":"O","О":"O","Օ":"O","ⵔ":"O","ዐ":"O","ଠ":"O","𐓂":"O","ꓳ":"O","𑢵":"O","𐊒":"O","𐊫":"O","𐐄":"O","𐔖":"O","⁰":"º","ᵒ":"º","ǒ":"ŏ","Ǒ":"Ŏ","ۿ":"ô","Ő":"Ö","ø":"o̸","ꬾ":"o̸","Ø":"O̸","ⵁ":"O̸","Ǿ":"Ó̸","ɵ":"o̵","ꝋ":"o̵","ө":"o̵","ѳ":"o̵","ꮎ":"o̵","ꮻ":"o̵","⊖":"O̵","⊝":"O̵","⍬":"O̵","𝈚":"O̵","🜔":"O̵","Ɵ":"O̵","Ꝋ":"O̵","θ":"O̵","ϑ":"O̵","𝛉":"O̵","𝛝":"O̵","𝜃":"O̵","𝜗":"O̵","𝜽":"O̵","𝝑":"O̵","𝝷":"O̵","𝞋":"O̵","𝞱":"O̵","𝟅":"O̵","Θ":"O̵","ϴ":"O̵","𝚯":"O̵","𝚹":"O̵","𝛩":"O̵","𝛳":"O̵","𝜣":"O̵","𝜭":"O̵","𝝝":"O̵","𝝧":"O̵","𝞗":"O̵","𝞡":"O̵","Ө":"O̵","Ѳ":"O̵","ⴱ":"O̵","Ꮎ":"O̵","Ꮻ":"O̵","ꭴ":"ơ","ﳙ":"oٰ","🄁":"O,","🄀":"O.","ơ":"o\'","Ơ":"O\'","Ꭴ":"O\'","%":"º/₀","٪":"º/₀","⁒":"º/₀","‰":"º/₀₀","؉":"º/₀₀","‱":"º/₀₀₀","؊":"º/₀₀₀","œ":"oe","Œ":"OE","ɶ":"oᴇ","∞":"oo","ꝏ":"oo","ꚙ":"oo","Ꝏ":"OO","Ꚙ":"OO","ﳗ":"oج","ﱑ":"oج","ﳘ":"oم","ﱒ":"oم","ﶓ":"oمج","ﶔ":"oمم","ﱓ":"oى","ﱔ":"oى","ൟ":"oരo","တ":"oာ","㍘":"O点","ↄ":"ɔ","ᴐ":"ɔ","ͻ":"ɔ","𐑋":"ɔ","Ↄ":"Ɔ","Ͻ":"Ɔ","ꓛ":"Ɔ","𐐣":"Ɔ","ꬿ":"ɔ̸","ꭢ":"ɔe","𐐿":"ɷ","⍴":"p","ｐ":"p","𝐩":"p","𝑝":"p","𝒑":"p","𝓅":"p","𝓹":"p","𝔭":"p","𝕡":"p","𝖕":"p","𝗉":"p","𝗽":"p","𝘱":"p","𝙥":"p","𝚙":"p","ρ":"p","ϱ":"p","𝛒":"p","𝛠":"p","𝜌":"p","𝜚":"p","𝝆":"p","𝝔":"p","𝞀":"p","𝞎":"p","𝞺":"p","𝟈":"p","ⲣ":"p","р":"p","Ｐ":"P","ℙ":"P","𝐏":"P","𝑃":"P","𝑷":"P","𝒫":"P","𝓟":"P","𝔓":"P","𝕻":"P","𝖯":"P","𝗣":"P","𝘗":"P","𝙋":"P","𝙿":"P","Ρ":"P","𝚸":"P","𝛲":"P","𝜬":"P","𝝦":"P","𝞠":"P","Ⲣ":"P","Р":"P","Ꮲ":"P","ᑭ":"P","ꓑ":"P","𐊕":"P","ƥ":"p̔","ᵽ":"p̵","ᑷ":"p·","ᒆ":"P\'","ᴩ":"ᴘ","ꮲ":"ᴘ","φ":"ɸ","ϕ":"ɸ","𝛗":"ɸ","𝛟":"ɸ","𝜑":"ɸ","𝜙":"ɸ","𝝋":"ɸ","𝝓":"ɸ","𝞅":"ɸ","𝞍":"ɸ","𝞿":"ɸ","𝟇":"ɸ","ⲫ":"ɸ","ф":"ɸ","𝐪":"q","𝑞":"q","𝒒":"q","𝓆":"q","𝓺":"q","𝔮":"q","𝕢":"q","𝖖":"q","𝗊":"q","𝗾":"q","𝘲":"q","𝙦":"q","𝚚":"q","ԛ":"q","գ":"q","զ":"q","ℚ":"Q","𝐐":"Q","𝑄":"Q","𝑸":"Q","𝒬":"Q","𝓠":"Q","𝔔":"Q","𝕼":"Q","𝖰":"Q","𝗤":"Q","𝘘":"Q","𝙌":"Q","𝚀":"Q","ⵕ":"Q","ʠ":"q̔","🜀":"QE","ᶐ":"ɋ","ᴋ":"ĸ","κ":"ĸ","ϰ":"ĸ","𝛋":"ĸ","𝛞":"ĸ","𝜅":"ĸ","𝜘":"ĸ","𝜿":"ĸ","𝝒":"ĸ","𝝹":"ĸ","𝞌":"ĸ","𝞳":"ĸ","𝟆":"ĸ","ⲕ":"ĸ","к":"ĸ","ꮶ":"ĸ","қ":"ĸ̩","ҟ":"ĸ̵","𝐫":"r","𝑟":"r","𝒓":"r","𝓇":"r","𝓻":"r","𝔯":"r","𝕣":"r","𝖗":"r","𝗋":"r","𝗿":"r","𝘳":"r","𝙧":"r","𝚛":"r","ꭇ":"r","ꭈ":"r","ᴦ":"r","ⲅ":"r","г":"r","ꮁ":"r","𝈖":"R","ℛ":"R","ℜ":"R","ℝ":"R","𝐑":"R","𝑅":"R","𝑹":"R","𝓡":"R","𝕽":"R","𝖱":"R","𝗥":"R","𝘙":"R","𝙍":"R","𝚁":"R","Ʀ":"R","Ꭱ":"R","Ꮢ":"R","𐒴":"R","ᖇ":"R","ꓣ":"R","𖼵":"R","ɽ":"r̨","ɼ":"r̩","ɍ":"r̵","ғ":"r̵","ᵲ":"r̴","ґ":"r\'","𑣣":"rn","m":"rn","ⅿ":"rn","𝐦":"rn","𝑚":"rn","𝒎":"rn","𝓂":"rn","𝓶":"rn","𝔪":"rn","𝕞":"rn","𝖒":"rn","𝗆":"rn","𝗺":"rn","𝘮":"rn","𝙢":"rn","𝚖":"rn","𑜀":"rn","₥":"rn̸","ɱ":"rn̦","ᵯ":"rn̴","₨":"Rs","ꭱ":"ʀ","ꮢ":"ʀ","я":"ᴙ","ᵳ":"ɾ̴","℩":"ɿ","ｓ":"s","𝐬":"s","𝑠":"s","𝒔":"s","𝓈":"s","𝓼":"s","𝔰":"s","𝕤":"s","𝖘":"s","𝗌":"s","𝘀":"s","𝘴":"s","𝙨":"s","𝚜":"s","ꜱ":"s","ƽ":"s","ѕ":"s","ꮪ":"s","𑣁":"s","𐑈":"s","Ｓ":"S","𝐒":"S","𝑆":"S","𝑺":"S","𝒮":"S","𝓢":"S","𝔖":"S","𝕊":"S","𝕾":"S","𝖲":"S","𝗦":"S","𝘚":"S","𝙎":"S","𝚂":"S","Ѕ":"S","Տ":"S","Ꮥ":"S","Ꮪ":"S","ꓢ":"S","𖼺":"S","𐊖":"S","𐐠":"S","ʂ":"s̨","ᵴ":"s̴","ꞵ":"ß","β":"ß","ϐ":"ß","𝛃":"ß","𝛽":"ß","𝜷":"ß","𝝱":"ß","𝞫":"ß","Ᏸ":"ß","🝜":"sss","ﬆ":"st","∫":"ʃ","ꭍ":"ʃ","∑":"Ʃ","⅀":"Ʃ","Σ":"Ʃ","𝚺":"Ʃ","𝛴":"Ʃ","𝜮":"Ʃ","𝝨":"Ʃ","𝞢":"Ʃ","ⵉ":"Ʃ","∬":"ʃʃ","∭":"ʃʃʃ","⨌":"ʃʃʃʃ","𝐭":"t","𝑡":"t","𝒕":"t","𝓉":"t","𝓽":"t","𝔱":"t","𝕥":"t","𝖙":"t","𝗍":"t","𝘁":"t","𝘵":"t","𝙩":"t","𝚝":"t","⊤":"T","⟙":"T","🝨":"T","Ｔ":"T","𝐓":"T","𝑇":"T","𝑻":"T","𝒯":"T","𝓣":"T","𝔗":"T","𝕋":"T","𝕿":"T","𝖳":"T","𝗧":"T","𝘛":"T","𝙏":"T","𝚃":"T","Τ":"T","𝚻":"T","𝛵":"T","𝜯":"T","𝝩":"T","𝞣":"T","Ⲧ":"T","Т":"T","Ꭲ":"T","ꓔ":"T","𖼊":"T","𑢼":"T","𐊗":"T","𐊱":"T","𐌕":"T","ƭ":"t̔","⍡":"T̈","Ⱦ":"T̸","Ț":"Ţ","Ʈ":"T̨","Ҭ":"T̩","₮":"T⃫","ŧ":"t̵","Ŧ":"T̵","ᵵ":"t̴","Ⴀ":"Ꞇ","Ꜩ":"T3","ʨ":"tɕ","℡":"TEL","ꝷ":"tf","ʦ":"ts","ʧ":"tʃ","ꜩ":"tȝ","τ":"ᴛ","𝛕":"ᴛ","𝜏":"ᴛ","𝝉":"ᴛ","𝞃":"ᴛ","𝞽":"ᴛ","т":"ᴛ","ꭲ":"ᴛ","ҭ":"ᴛ̩","ţ":"ƫ","ț":"ƫ","Ꮏ":"ƫ","𝐮":"u","𝑢":"u","𝒖":"u","𝓊":"u","𝓾":"u","𝔲":"u","𝕦":"u","𝖚":"u","𝗎":"u","𝘂":"u","𝘶":"u","𝙪":"u","𝚞":"u","ꞟ":"u","ᴜ":"u","ꭎ":"u","ꭒ":"u","ʋ":"u","υ":"u","𝛖":"u","𝜐":"u","𝝊":"u","𝞄":"u","𝞾":"u","ս":"u","𐓶":"u","𑣘":"u","∪":"U","⋃":"U","𝐔":"U","𝑈":"U","𝑼":"U","𝒰":"U","𝓤":"U","𝔘":"U","𝕌":"U","𝖀":"U","𝖴":"U","𝗨":"U","𝘜":"U","𝙐":"U","𝚄":"U","Ս":"U","ሀ":"U","𐓎":"U","ᑌ":"U","ꓴ":"U","𖽂":"U","𑢸":"U","ǔ":"ŭ","Ǔ":"Ŭ","ᵾ":"u̵","ꮜ":"u̵","Ʉ":"U̵","Ꮜ":"U̵","ᑘ":"U·","ᑧ":"U\'","ᵫ":"ue","ꭣ":"uo","ṃ":"ꭑ","պ":"ɰ","ሣ":"ɰ","℧":"Ʊ","ᘮ":"Ʊ","ᘴ":"Ʊ","ᵿ":"ʊ̵","∨":"v","⋁":"v","ｖ":"v","ⅴ":"v","𝐯":"v","𝑣":"v","𝒗":"v","𝓋":"v","𝓿":"v","𝔳":"v","𝕧":"v","𝖛":"v","𝗏":"v","𝘃":"v","𝘷":"v","𝙫":"v","𝚟":"v","ᴠ":"v","ν":"v","𝛎":"v","𝜈":"v","𝝂":"v","𝝼":"v","𝞶":"v","ѵ":"v","ט":"v","𑜆":"v","ꮩ":"v","𑣀":"v","𝈍":"V","٧":"V","۷":"V","Ⅴ":"V","𝐕":"V","𝑉":"V","𝑽":"V","𝒱":"V","𝓥":"V","𝔙":"V","𝕍":"V","𝖁":"V","𝖵":"V","𝗩":"V","𝘝":"V","𝙑":"V","𝚅":"V","Ѵ":"V","ⴸ":"V","Ꮩ":"V","ᐯ":"V","ꛟ":"V","ꓦ":"V","𖼈":"V","𑢠":"V","𐔝":"V","𐆗":"V̵","ᐻ":"V·","🝬":"VB","ⅵ":"vi","ⅶ":"vii","ⅷ":"viii","Ⅵ":"Vl","Ⅶ":"Vll","Ⅷ":"Vlll","🜈":"Vᷤ","ᴧ":"ʌ","𐓘":"ʌ","٨":"Ʌ","۸":"Ʌ","Λ":"Ʌ","𝚲":"Ʌ","𝛬":"Ʌ","𝜦":"Ʌ","𝝠":"Ʌ","𝞚":"Ʌ","Л":"Ʌ","ⴷ":"Ʌ","𐒰":"Ʌ","ᐱ":"Ʌ","ꛎ":"Ʌ","ꓥ":"Ʌ","𖼽":"Ʌ","𐊍":"Ʌ","Ӆ":"Ʌ̦","ᐽ":"Ʌ·","ɯ":"w","𝐰":"w","𝑤":"w","𝒘":"w","𝓌":"w","𝔀":"w","𝔴":"w","𝕨":"w","𝖜":"w","𝗐":"w","𝘄":"w","𝘸":"w","𝙬":"w","𝚠":"w","ᴡ":"w","ѡ":"w","ԝ":"w","ա":"w","𑜊":"w","𑜎":"w","𑜏":"w","ꮃ":"w","𑣯":"W","𑣦":"W","𝐖":"W","𝑊":"W","𝑾":"W","𝒲":"W","𝓦":"W","𝔚":"W","𝕎":"W","𝖂":"W","𝖶":"W","𝗪":"W","𝘞":"W","𝙒":"W","𝚆":"W","Ԝ":"W","Ꮃ":"W","Ꮤ":"W","ꓪ":"W","ѽ":"w҆҇","𑓅":"ẇ","₩":"W̵","ꝡ":"w̦","ᴍ":"ʍ","м":"ʍ","ꮇ":"ʍ","ӎ":"ʍ̦","᙮":"x","×":"x","⤫":"x","⤬":"x","⨯":"x","ｘ":"x","ⅹ":"x","𝐱":"x","𝑥":"x","𝒙":"x","𝓍":"x","𝔁":"x","𝔵":"x","𝕩":"x","𝖝":"x","𝗑":"x","𝘅":"x","𝘹":"x","𝙭":"x","𝚡":"x","х":"x","ᕁ":"x","ᕽ":"x","ⷯ":"ͯ","᙭":"X","╳":"X","𐌢":"X","𑣬":"X","Ｘ":"X","Ⅹ":"X","𝐗":"X","𝑋":"X","𝑿":"X","𝒳":"X","𝓧":"X","𝔛":"X","𝕏":"X","𝖃":"X","𝖷":"X","𝗫":"X","𝘟":"X","𝙓":"X","𝚇":"X","Ꭓ":"X","Χ":"X","𝚾":"X","𝛸":"X","𝜲":"X","𝝬":"X","𝞦":"X","Ⲭ":"X","Х":"X","ⵝ":"X","ᚷ":"X","ꓫ":"X","𐊐":"X","𐊴":"X","𐌗":"X","𐔧":"X","⨰":"ẋ","Ҳ":"X̩","𐆖":"X̵","ⅺ":"xi","ⅻ":"xii","Ⅺ":"Xl","Ⅻ":"Xll","ɣ":"y","ᶌ":"y","ｙ":"y","𝐲":"y","𝑦":"y","𝒚":"y","𝓎":"y","𝔂":"y","𝔶":"y","𝕪":"y","𝖞":"y","𝗒":"y","𝘆":"y","𝘺":"y","𝙮":"y","𝚢":"y","ʏ":"y","ỿ":"y","ꭚ":"y","γ":"y","ℽ":"y","𝛄":"y","𝛾":"y","𝜸":"y","𝝲":"y","𝞬":"y","у":"y","ү":"y","ყ":"y","𑣜":"y","Ｙ":"Y","𝐘":"Y","𝑌":"Y","𝒀":"Y","𝒴":"Y","𝓨":"Y","𝔜":"Y","𝕐":"Y","𝖄":"Y","𝖸":"Y","𝗬":"Y","𝘠":"Y","𝙔":"Y","𝚈":"Y","Υ":"Y","ϒ":"Y","𝚼":"Y","𝛶":"Y","𝜰":"Y","𝝪":"Y","𝞤":"Y","Ⲩ":"Y","У":"Y","Ү":"Y","Ꭹ":"Y","Ꮍ":"Y","ꓬ":"Y","𖽃":"Y","𑢤":"Y","𐊲":"Y","ƴ":"y̔","ɏ":"y̵","ұ":"y̵","¥":"Y̵","Ɏ":"Y̵","Ұ":"Y̵","ʒ":"ȝ","ꝫ":"ȝ","ⳍ":"ȝ","ӡ":"ȝ","ჳ":"ȝ","𝐳":"z","𝑧":"z","𝒛":"z","𝓏":"z","𝔃":"z","𝔷":"z","𝕫":"z","𝖟":"z","𝗓":"z","𝘇":"z","𝘻":"z","𝙯":"z","𝚣":"z","ᴢ":"z","ꮓ":"z","𑣄":"z","𐋵":"Z","𑣥":"Z","Ｚ":"Z","ℤ":"Z","ℨ":"Z","𝐙":"Z","𝑍":"Z","𝒁":"Z","𝒵":"Z","𝓩":"Z","𝖅":"Z","𝖹":"Z","𝗭":"Z","𝘡":"Z","𝙕":"Z","𝚉":"Z","Ζ":"Z","𝚭":"Z","𝛧":"Z","𝜡":"Z","𝝛":"Z","𝞕":"Z","Ꮓ":"Z","ꓜ":"Z","𑢩":"Z","ʐ":"z̨","ƶ":"z̵","Ƶ":"Z̵","ȥ":"z̦","Ȥ":"Z̦","ᵶ":"z̴","ƿ":"þ","ϸ":"þ","Ϸ":"Þ","𐓄":"Þ","⁹":"ꝰ","ᴤ":"ƨ","ϩ":"ƨ","ꙅ":"ƨ","ь":"ƅ","ꮟ":"ƅ","ы":"ƅi","ꭾ":"ɂ","ˤ":"ˁ","ꛍ":"ʡ","⊙":"ʘ","☉":"ʘ","⨀":"ʘ","Ꙩ":"ʘ","ⵙ":"ʘ","𐓃":"ʘ","ℾ":"Γ","𝚪":"Γ","𝛤":"Γ","𝜞":"Γ","𝝘":"Γ","𝞒":"Γ","Ⲅ":"Γ","Г":"Γ","Ꮁ":"Γ","ᒥ":"Γ","𖼇":"Γ","Ғ":"Γ̵","ᒯ":"Γ·","Ґ":"Γ\'","∆":"Δ","△":"Δ","🜂":"Δ","𝚫":"Δ","𝛥":"Δ","𝜟":"Δ","𝝙":"Δ","𝞓":"Δ","Ⲇ":"Δ","ⵠ":"Δ","ᐃ":"Δ","𖼚":"Δ","𐊅":"Δ","𐊣":"Δ","⍙":"Δ̲","ᐏ":"Δ·","ᐬ":"Δᐠ","𝟋":"ϝ","𝛇":"ζ","𝜁":"ζ","𝜻":"ζ","𝝵":"ζ","𝞯":"ζ","ⳤ":"ϗ","𝛌":"λ","𝜆":"λ","𝝀":"λ","𝝺":"λ","𝞴":"λ","Ⲗ":"λ","𐓛":"λ","µ":"μ","𝛍":"μ","𝜇":"μ","𝝁":"μ","𝝻":"μ","𝞵":"μ","𝛏":"ξ","𝜉":"ξ","𝝃":"ξ","𝝽":"ξ","𝞷":"ξ","𝚵":"Ξ","𝛯":"Ξ","𝜩":"Ξ","𝝣":"Ξ","𝞝":"Ξ","ϖ":"π","ℼ":"π","𝛑":"π","𝛡":"π","𝜋":"π","𝜛":"π","𝝅":"π","𝝕":"π","𝝿":"π","𝞏":"π","𝞹":"π","𝟉":"π","ᴨ":"π","п":"π","∏":"Π","ℿ":"Π","𝚷":"Π","𝛱":"Π","𝜫":"Π","𝝥":"Π","𝞟":"Π","Ⲡ":"Π","П":"Π","ꛛ":"Π","𐊭":"Ϙ","𐌒":"Ϙ","ϛ":"ς","𝛓":"ς","𝜍":"ς","𝝇":"ς","𝞁":"ς","𝞻":"ς","𝚽":"Φ","𝛷":"Φ","𝜱":"Φ","𝝫":"Φ","𝞥":"Φ","Ⲫ":"Φ","Ф":"Φ","Փ":"Φ","ቀ":"Φ","ᛰ":"Φ","𐊳":"Φ","ꭓ":"χ","ꭕ":"χ","𝛘":"χ","𝜒":"χ","𝝌":"χ","𝞆":"χ","𝟀":"χ","ⲭ":"χ","𝛙":"ψ","𝜓":"ψ","𝝍":"ψ","𝞇":"ψ","𝟁":"ψ","ѱ":"ψ","𐓹":"ψ","𝚿":"Ψ","𝛹":"Ψ","𝜳":"Ψ","𝝭":"Ψ","𝞧":"Ψ","Ⲯ":"Ψ","Ѱ":"Ψ","𐓑":"Ψ","ᛘ":"Ψ","𐊵":"Ψ","⍵":"ω","ꞷ":"ω","𝛚":"ω","𝜔":"ω","𝝎":"ω","𝞈":"ω","𝟂":"ω","ⲱ":"ω","ꙍ":"ω","Ω":"Ω","𝛀":"Ω","𝛺":"Ω","𝜴":"Ω","𝝮":"Ω","𝞨":"Ω","ᘯ":"Ω","ᘵ":"Ω","𐊶":"Ω","⍹":"ω̲","ώ":"ῴ","☰":"Ⲷ","Ⳝ":"Ϭ","җ":"ж̩","Җ":"Ж̩","𝈋":"И","Ͷ":"И","ꚡ":"И","𐐥":"И","Й":"Ѝ","Ҋ":"Ѝ̦","ѝ":"й","ҋ":"й̦","𐒼":"Ӄ","ᴫ":"л","ӆ":"л̦","ꭠ":"љ","𐓫":"ꙩ","ᷮ":"ⷬ","𐓍":"Ћ","𝈂":"Ӿ","𝈢":"Ѡ","Ꮗ":"Ѡ","ᗯ":"Ѡ","Ѽ":"Ѡ҆҇","ᣭ":"Ѡ·","Ꞷ":"Ꙍ","ӌ":"ҷ","Ӌ":"Ҷ","Ҿ":"Ҽ̨","ⲽ":"ш","Ⲽ":"Ш","Ꙑ":"Ъl","℈":"Э","🜁":"Ꙙ","𖼜":"Ꙙ","ꦒ":"ⰿ","և":"եւ","ኔ":"ձ","ﬔ":"մե","ﬕ":"մի","ﬗ":"մխ","ﬓ":"մն","∩":"Ո","⋂":"Ո","𝉅":"Ո","በ":"Ո","ᑎ":"Ո","ꓵ":"Ո","ᑚ":"Ո·","ᑨ":"Ո\'","ﬖ":"վն","₽":"Ք","˓":"ՙ","ʿ":"ՙ","ℵ":"א","ﬡ":"א","אָ":"אַ","אּ":"אַ","ﭏ":"אל","ℶ":"ב","ℷ":"ג","ℸ":"ד","ﬢ":"ד","ﬣ":"ה","יּ":"יִ","ﬤ":"כ","ﬥ":"ל","ﬦ":"ם","ﬠ":"ע","ﬧ":"ר","שׂ":"שׁ","שּ":"שׁ","שּׂ":"שּׁ","ﬨ":"ת","ﺀ":"ء","۽":"ء͈","ﺂ":"آ","ﺁ":"آ","ﭑ":"ٱ","ﭐ":"ٱ","𞸁":"ب","𞸡":"ب","𞹡":"ب","𞺁":"ب","𞺡":"ب","ﺑ":"ب","ﺒ":"ب","ﺐ":"ب","ﺏ":"ب","ݑ":"بۛ","ࢶ":"بۢ","ࢡ":"بٔ","ﲠ":"بo","ﳢ":"بo","ﲜ":"بج","ﰅ":"بج","ﲝ":"بح","ﰆ":"بح","ﷂ":"بحى","ﲞ":"بخ","ﰇ":"بخ","ﳒ":"بخ","ﱋ":"بخ","ﶞ":"بخى","ﱪ":"بر","ﱫ":"بز","ﲟ":"بم","ﳡ":"بم","ﱬ":"بم","ﰈ":"بم","ﱭ":"بن","ﱮ":"بى","ﰉ":"بى","ﱯ":"بى","ﰊ":"بى","ﭔ":"ٻ","ﭕ":"ٻ","ﭓ":"ٻ","ﭒ":"ٻ","ې":"ٻ","ﯦ":"ٻ","ﯧ":"ٻ","ﯥ":"ٻ","ﯤ":"ٻ","ﭜ":"ڀ","ﭝ":"ڀ","ﭛ":"ڀ","ﭚ":"ڀ","ࢩ":"ݔ","ݧ":"ݔ","⍥":"ة","ö":"ة","ﺔ":"ة","ﺓ":"ة","ۃ":"ة","𞸕":"ت","𞸵":"ت","𞹵":"ت","𞺕":"ت","𞺵":"ت","ﺗ":"ت","ﺘ":"ت","ﺖ":"ت","ﺕ":"ت","ﲥ":"تo","ﳤ":"تo","ﲡ":"تج","ﰋ":"تج","ﵐ":"تجم","ﶠ":"تجى","ﶟ":"تجى","ﲢ":"تح","ﰌ":"تح","ﵒ":"تحج","ﵑ":"تحج","ﵓ":"تحم","ﲣ":"تخ","ﰍ":"تخ","ﵔ":"تخم","ﶢ":"تخى","ﶡ":"تخى","ﱰ":"تر","ﱱ":"تز","ﲤ":"تم","ﳣ":"تم","ﱲ":"تم","ﰎ":"تم","ﵕ":"تمج","ﵖ":"تمح","ﵗ":"تمخ","ﶤ":"تمى","ﶣ":"تمى","ﱳ":"تن","ﱴ":"تى","ﰏ":"تى","ﱵ":"تى","ﰐ":"تى","ﭠ":"ٺ","ﭡ":"ٺ","ﭟ":"ٺ","ﭞ":"ٺ","ﭤ":"ٿ","ﭥ":"ٿ","ﭣ":"ٿ","ﭢ":"ٿ","𞸂":"ج","𞸢":"ج","𞹂":"ج","𞹢":"ج","𞺂":"ج","𞺢":"ج","ﺟ":"ج","ﺠ":"ج","ﺞ":"ج","ﺝ":"ج","ﲧ":"جح","ﰕ":"جح","ﶦ":"جحى","ﶾ":"جحى","ﷻ":"جل جلlلo","ﲨ":"جم","ﰖ":"جم","ﵙ":"جمح","ﵘ":"جمح","ﶧ":"جمى","ﶥ":"جمى","ﴝ":"جى","ﴁ":"جى","ﴞ":"جى","ﴂ":"جى","ﭸ":"ڃ","ﭹ":"ڃ","ﭷ":"ڃ","ﭶ":"ڃ","ﭴ":"ڄ","ﭵ":"ڄ","ﭳ":"ڄ","ﭲ":"ڄ","ﭼ":"چ","ﭽ":"چ","ﭻ":"چ","ﭺ":"چ","ﮀ":"ڇ","ﮁ":"ڇ","ﭿ":"ڇ","ﭾ":"ڇ","𞸇":"ح","𞸧":"ح","𞹇":"ح","𞹧":"ح","𞺇":"ح","𞺧":"ح","ﺣ":"ح","ﺤ":"ح","ﺢ":"ح","ﺡ":"ح","څ":"حۛ","ځ":"حٔ","ݲ":"حٔ","ﲩ":"حج","ﰗ":"حج","ﶿ":"حجى","ﲪ":"حم","ﰘ":"حم","ﵛ":"حمى","ﵚ":"حمى","ﴛ":"حى","ﳿ":"حى","ﴜ":"حى","ﴀ":"حى","𞸗":"خ","𞸷":"خ","𞹗":"خ","𞹷":"خ","𞺗":"خ","𞺷":"خ","ﺧ":"خ","ﺨ":"خ","ﺦ":"خ","ﺥ":"خ","ﲫ":"خج","ﰙ":"خج","ﰚ":"خح","ﲬ":"خم","ﰛ":"خم","ﴟ":"خى","ﴃ":"خى","ﴠ":"خى","ﴄ":"خى","𐋡":"د","𞸃":"د","𞺃":"د","𞺣":"د","ﺪ":"د","ﺩ":"د","ڈ":"دؕ","ﮉ":"دؕ","ﮈ":"دؕ","ڎ":"دۛ","ﮇ":"دۛ","ﮆ":"دۛ","ۮ":"د̂","ࢮ":"د̤̣","𞸘":"ذ","𞺘":"ذ","𞺸":"ذ","ﺬ":"ذ","ﺫ":"ذ","ﱛ":"ذٰ","ڋ":"ڊؕ","ﮅ":"ڌ","ﮄ":"ڌ","ﮃ":"ڍ","ﮂ":"ڍ","𞸓":"ر","𞺓":"ر","𞺳":"ر","ﺮ":"ر","ﺭ":"ر","ڑ":"رؕ","ﮍ":"رؕ","ﮌ":"رؕ","ژ":"رۛ","ﮋ":"رۛ","ﮊ":"رۛ","ڒ":"ر̆","ࢹ":"ر̆̇","ۯ":"ر̂","ݬ":"رٔ","ﱜ":"رٰ","ﷶ":"رسول","﷼":"رىlل","𞸆":"ز","𞺆":"ز","𞺦":"ز","ﺰ":"ز","ﺯ":"ز","ࢲ":"ز̂","ݱ":"ڗؕ","𞸎":"س","𞸮":"س","𞹎":"س","𞹮":"س","𞺎":"س","𞺮":"س","ﺳ":"س","ﺴ":"س","ﺲ":"س","ﺱ":"س","ش":"سۛ","𞸔":"سۛ","𞸴":"سۛ","𞹔":"سۛ","𞹴":"سۛ","𞺔":"سۛ","𞺴":"سۛ","ﺷ":"سۛ","ﺸ":"سۛ","ﺶ":"سۛ","ﺵ":"سۛ","ݾ":"س̂","ﴱ":"سo","ﳨ":"سo","ﴲ":"سۛo","ﳪ":"سۛo","ﲭ":"سج","ﴴ":"سج","ﰜ":"سج","ﴭ":"سۛج","ﴷ":"سۛج","ﴥ":"سۛج","ﴉ":"سۛج","ﵝ":"سجح","ﵞ":"سجى","ﵩ":"سۛجى","ﲮ":"سح","ﴵ":"سح","ﰝ":"سح","ﴮ":"سۛح","ﴸ":"سۛح","ﴦ":"سۛح","ﴊ":"سۛح","ﵜ":"سحج","ﵨ":"سۛحم","ﵧ":"سۛحم","ﶪ":"سۛحى","ﲯ":"سخ","ﴶ":"سخ","ﰞ":"سخ","ﴯ":"سۛخ","ﴹ":"سۛخ","ﴧ":"سۛخ","ﴋ":"سۛخ","ﶨ":"سخى","ﷆ":"سخى","ﴪ":"سر","ﴎ":"سر","ﴩ":"سۛر","ﴍ":"سۛر","ﲰ":"سم","ﳧ":"سم","ﰟ":"سم","ﴰ":"سۛم","ﳩ":"سۛم","ﴨ":"سۛم","ﴌ":"سۛم","ﵡ":"سمج","ﵠ":"سمح","ﵟ":"سمح","ﵫ":"سۛمخ","ﵪ":"سۛمخ","ﵣ":"سمم","ﵢ":"سمم","ﵭ":"سۛمم","ﵬ":"سۛمم","ﴗ":"سى","ﳻ":"سى","ﴘ":"سى","ﳼ":"سى","ﴙ":"سۛى","ﳽ":"سۛى","ﴚ":"سۛى","ﳾ":"سۛى","𐋲":"ص","𞸑":"ص","𞸱":"ص","𞹑":"ص","𞹱":"ص","𞺑":"ص","𞺱":"ص","ﺻ":"ص","ﺼ":"ص","ﺺ":"ص","ﺹ":"ص","ڞ":"صۛ","ࢯ":"ص̤̣","ﲱ":"صح","ﰠ":"صح","ﵥ":"صحح","ﵤ":"صحح","ﶩ":"صحى","ﲲ":"صخ","ﴫ":"صر","ﴏ":"صر","ﷵ":"صلعم","ﷹ":"صلى","ﷰ":"صلى","ﷺ":"صلى lللo علىo وسلم","ﲳ":"صم","ﰡ":"صم","ﷅ":"صمم","ﵦ":"صمم","ﴡ":"صى","ﴅ":"صى","ﴢ":"صى","ﴆ":"صى","𞸙":"ض","𞸹":"ض","𞹙":"ض","𞹹":"ض","𞺙":"ض","𞺹":"ض","ﺿ":"ض","ﻀ":"ض","ﺾ":"ض","ﺽ":"ض","ﲴ":"ضج","ﰢ":"ضج","ﲵ":"ضح","ﰣ":"ضح","ﵮ":"ضحى","ﶫ":"ضحى","ﲶ":"ضخ","ﰤ":"ضخ","ﵰ":"ضخم","ﵯ":"ضخم","ﴬ":"ضر","ﴐ":"ضر","ﲷ":"ضم","ﰥ":"ضم","ﴣ":"ضى","ﴇ":"ضى","ﴤ":"ضى","ﴈ":"ضى","𐋨":"ط","𞸈":"ط","𞹨":"ط","𞺈":"ط","𞺨":"ط","ﻃ":"ط","ﻄ":"ط","ﻂ":"ط","ﻁ":"ط","ڟ":"طۛ","ﲸ":"طح","ﰦ":"طح","ﴳ":"طم","ﴺ":"طم","ﰧ":"طم","ﵲ":"طمح","ﵱ":"طمح","ﵳ":"طمم","ﵴ":"طمى","ﴑ":"طى","ﳵ":"طى","ﴒ":"طى","ﳶ":"طى","𞸚":"ظ","𞹺":"ظ","𞺚":"ظ","𞺺":"ظ","ﻇ":"ظ","ﻈ":"ظ","ﻆ":"ظ","ﻅ":"ظ","ﲹ":"ظم","ﴻ":"ظم","ﰨ":"ظم","؏":"ع","𞸏":"ع","𞸯":"ع","𞹏":"ع","𞹯":"ع","𞺏":"ع","𞺯":"ع","ﻋ":"ع","ﻌ":"ع","ﻊ":"ع","ﻉ":"ع","ﲺ":"عج","ﰩ":"عج","ﷄ":"عجم","ﵵ":"عجم","ﷷ":"علىo","ﲻ":"عم","ﰪ":"عم","ﵷ":"عمم","ﵶ":"عمم","ﵸ":"عمى","ﶶ":"عمى","ﴓ":"عى","ﳷ":"عى","ﴔ":"عى","ﳸ":"عى","𞸛":"غ","𞸻":"غ","𞹛":"غ","𞹻":"غ","𞺛":"غ","𞺻":"غ","ﻏ":"غ","ﻐ":"غ","ﻎ":"غ","ﻍ":"غ","ﲼ":"غج","ﰫ":"غج","ﲽ":"غم","ﰬ":"غم","ﵹ":"غمم","ﵻ":"غمى","ﵺ":"غمى","ﴕ":"غى","ﳹ":"غى","ﴖ":"غى","ﳺ":"غى","𞸐":"ف","𞸰":"ف","𞹰":"ف","𞺐":"ف","𞺰":"ف","ﻓ":"ف","ﻔ":"ف","ﻒ":"ف","ﻑ":"ف","ڧ":"ف","ﲾ":"فج","ﰭ":"فج","ﲿ":"فح","ﰮ":"فح","ﳀ":"فخ","ﰯ":"فخ","ﵽ":"فخم","ﵼ":"فخم","ﳁ":"فم","ﰰ":"فم","ﷁ":"فمى","ﱼ":"فى","ﰱ":"فى","ﱽ":"فى","ﰲ":"فى","𞸞":"ڡ","𞹾":"ڡ","ࢻ":"ڡ","ٯ":"ڡ","𞸟":"ڡ","𞹟":"ڡ","ࢼ":"ڡ","ڤ":"ڡۛ","ﭬ":"ڡۛ","ﭭ":"ڡۛ","ﭫ":"ڡۛ","ﭪ":"ڡۛ","ڨ":"ڡۛ","ࢤ":"ڢۛ","ﭰ":"ڦ","ﭱ":"ڦ","ﭯ":"ڦ","ﭮ":"ڦ","𞸒":"ق","𞸲":"ق","𞹒":"ق","𞹲":"ق","𞺒":"ق","𞺲":"ق","ﻗ":"ق","ﻘ":"ق","ﻖ":"ق","ﻕ":"ق","ﳂ":"قح","ﰳ":"قح","ﷱ":"قلى","ﳃ":"قم","ﰴ":"قم","ﶴ":"قمح","ﵾ":"قمح","ﵿ":"قمم","ﶲ":"قمى","ﱾ":"قى","ﰵ":"قى","ﱿ":"قى","ﰶ":"قى","𞸊":"ك","𞸪":"ك","𞹪":"ك","ﻛ":"ك","ﻜ":"ك","ﻚ":"ك","ﻙ":"ك","ک":"ك","ﮐ":"ك","ﮑ":"ك","ﮏ":"ك","ﮎ":"ك","ڪ":"ك","ڭ":"كۛ","ﯕ":"كۛ","ﯖ":"كۛ","ﯔ":"كۛ","ﯓ":"كۛ","ݣ":"كۛ","ﲀ":"كl","ﰷ":"كl","ﳄ":"كج","ﰸ":"كج","ﳅ":"كح","ﰹ":"كح","ﳆ":"كخ","ﰺ":"كخ","ﳇ":"كل","ﳫ":"كل","ﲁ":"كل","ﰻ":"كل","ﳈ":"كم","ﳬ":"كم","ﲂ":"كم","ﰼ":"كم","ﷃ":"كمم","ﶻ":"كمم","ﶷ":"كمى","ﲃ":"كى","ﰽ":"كى","ﲄ":"كى","ﰾ":"كى","ݢ":"ڬ","ﮔ":"گ","ﮕ":"گ","ﮓ":"گ","ﮒ":"گ","ࢰ":"گ","ڴ":"گۛ","ﮜ":"ڱ","ﮝ":"ڱ","ﮛ":"ڱ","ﮚ":"ڱ","ﮘ":"ڳ","ﮙ":"ڳ","ﮗ":"ڳ","ﮖ":"ڳ","𞸋":"ل","𞸫":"ل","𞹋":"ل","𞺋":"ل","𞺫":"ل","ﻟ":"ل","ﻠ":"ل","ﻞ":"ل","ﻝ":"ل","ڷ":"لۛ","ڵ":"ل̆","ﻼ":"لl","ﻻ":"لl","ﻺ":"لlٕ","ﻹ":"لlٕ","ﻸ":"لlٴ","ﻷ":"لlٴ","ﳍ":"لo","ﻶ":"لآ","ﻵ":"لآ","ﳉ":"لج","ﰿ":"لج","ﶃ":"لجج","ﶄ":"لجج","ﶺ":"لجم","ﶼ":"لجم","ﶬ":"لجى","ﳊ":"لح","ﱀ":"لح","ﶵ":"لحم","ﶀ":"لحم","ﶂ":"لحى","ﶁ":"لحى","ﳋ":"لخ","ﱁ":"لخ","ﶆ":"لخم","ﶅ":"لخم","ﳌ":"لم","ﳭ":"لم","ﲅ":"لم","ﱂ":"لم","ﶈ":"لمح","ﶇ":"لمح","ﶭ":"لمى","ﲆ":"لى","ﱃ":"لى","ﲇ":"لى","ﱄ":"لى","𞸌":"م","𞸬":"م","𞹬":"م","𞺌":"م","𞺬":"م","ﻣ":"م","ﻤ":"م","ﻢ":"م","ﻡ":"م","ࢧ":"مۛ","۾":"م͈","ﲈ":"مl","ﳎ":"مج","ﱅ":"مج","ﶌ":"مجح","ﶒ":"مجخ","ﶍ":"مجم","ﷀ":"مجى","ﳏ":"مح","ﱆ":"مح","ﶉ":"محج","ﶊ":"محم","ﷴ":"محمد","ﶋ":"محى","ﳐ":"مخ","ﱇ":"مخ","ﶎ":"مخج","ﶏ":"مخم","ﶹ":"مخى","ﳑ":"مم","ﲉ":"مم","ﱈ":"مم","ﶱ":"ممى","ﱉ":"مى","ﱊ":"مى","𞸍":"ن","𞸭":"ن","𞹍":"ن","𞹭":"ن","𞺍":"ن","𞺭":"ن","ﻧ":"ن","ﻨ":"ن","ﻦ":"ن","ﻥ":"ن","ݨ":"نؕ","ݩ":"ن̆","ﳖ":"نo","ﳯ":"نo","ﶸ":"نجح","ﶽ":"نجح","ﶘ":"نجم","ﶗ":"نجم","ﶙ":"نجى","ﷇ":"نجى","ﳓ":"نح","ﱌ":"نح","ﶕ":"نحم","ﶖ":"نحى","ﶳ":"نحى","ﳔ":"نخ","ﱍ":"نخ","ﲊ":"نر","ﲋ":"نز","ﳕ":"نم","ﳮ":"نم","ﲌ":"نم","ﱎ":"نم","ﶛ":"نمى","ﶚ":"نمى","ﲍ":"نن","ﲎ":"نى","ﱏ":"نى","ﲏ":"نى","ﱐ":"نى","ۂ":"ۀ","ﮥ":"ۀ","ﮤ":"ۀ","𐋤":"و","𞸅":"و","𞺅":"و","𞺥":"و","ﻮ":"و","ﻭ":"و","ࢱ":"و","ۋ":"وۛ","ﯟ":"وۛ","ﯞ":"وۛ","ۇ":"و̓","ﯘ":"و̓","ﯗ":"و̓","ۆ":"و̆","ﯚ":"و̆","ﯙ":"و̆","ۉ":"و̂","ﯣ":"و̂","ﯢ":"و̂","ۈ":"وٰ","ﯜ":"وٰ","ﯛ":"وٰ","ؤ":"وٴ","ﺆ":"وٴ","ﺅ":"وٴ","ٶ":"وٴ","ٷ":"و̓ٴ","ﯝ":"و̓ٴ","ﷸ":"وسلم","ﯡ":"ۅ","ﯠ":"ۅ","ٮ":"ى","𞸜":"ى","𞹼":"ى","ں":"ى","𞸝":"ى","𞹝":"ى","ﮟ":"ى","ﮞ":"ى","ࢽ":"ى","ﯨ":"ى","ﯩ":"ى","ﻰ":"ى","ﻯ":"ى","ي":"ى","𞸉":"ى","𞸩":"ى","𞹉":"ى","𞹩":"ى","𞺉":"ى","𞺩":"ى","ﻳ":"ى","ﻴ":"ى","ﻲ":"ى","ﻱ":"ى","ی":"ى","ﯾ":"ى","ﯿ":"ى","ﯽ":"ى","ﯼ":"ى","ے":"ى","ﮯ":"ى","ﮮ":"ى","ٹ":"ىؕ","ﭨ":"ىؕ","ﭩ":"ىؕ","ﭧ":"ىؕ","ﭦ":"ىؕ","ڻ":"ىؕ","ﮢ":"ىؕ","ﮣ":"ىؕ","ﮡ":"ىؕ","ﮠ":"ىؕ","پ":"ىۛ","ﭘ":"ىۛ","ﭙ":"ىۛ","ﭗ":"ىۛ","ﭖ":"ىۛ","ث":"ىۛ","𞸖":"ىۛ","𞸶":"ىۛ","𞹶":"ىۛ","𞺖":"ىۛ","𞺶":"ىۛ","ﺛ":"ىۛ","ﺜ":"ىۛ","ﺚ":"ىۛ","ﺙ":"ىۛ","ڽ":"ىۛ","ۑ":"ىۛ","ؿ":"ىۛ","ࢷ":"ىۛۢ","ݖ":"ى̆","ێ":"ى̆","ࢺ":"ى̆̇","ؽ":"ى̂","ࢨ":"ىٔ","ﲐ":"ىٰ","ﱝ":"ىٰ","ﳞ":"ىo","ﳱ":"ىo","ﳦ":"ىۛo","ئ":"ىٴ","ﺋ":"ىٴ","ﺌ":"ىٴ","ﺊ":"ىٴ","ﺉ":"ىٴ","ٸ":"ىٴ","ﯫ":"ىٴl","ﯪ":"ىٴl","ﲛ":"ىٴo","ﳠ":"ىٴo","ﯭ":"ىٴo","ﯬ":"ىٴo","ﯸ":"ىٴٻ","ﯷ":"ىٴٻ","ﯶ":"ىٴٻ","ﲗ":"ىٴج","ﰀ":"ىٴج","ﲘ":"ىٴح","ﰁ":"ىٴح","ﲙ":"ىٴخ","ﱤ":"ىٴر","ﱥ":"ىٴز","ﲚ":"ىٴم","ﳟ":"ىٴم","ﱦ":"ىٴم","ﰂ":"ىٴم","ﱧ":"ىٴن","ﯯ":"ىٴو","ﯮ":"ىٴو","ﯱ":"ىٴو̓","ﯰ":"ىٴو̓","ﯳ":"ىٴو̆","ﯲ":"ىٴو̆","ﯵ":"ىٴوٰ","ﯴ":"ىٴوٰ","ﯻ":"ىٴى","ﯺ":"ىٴى","ﱨ":"ىٴى","ﯹ":"ىٴى","ﰃ":"ىٴى","ﱩ":"ىٴى","ﰄ":"ىٴى","ﳚ":"ىج","ﱕ":"ىج","ﰑ":"ىۛج","ﶯ":"ىجى","ﳛ":"ىح","ﱖ":"ىح","ﶮ":"ىحى","ﳜ":"ىخ","ﱗ":"ىخ","ﲑ":"ىر","ﱶ":"ىۛر","ﲒ":"ىز","ﱷ":"ىۛز","ﳝ":"ىم","ﳰ":"ىم","ﲓ":"ىم","ﱘ":"ىم","ﲦ":"ىۛم","ﳥ":"ىۛم","ﱸ":"ىۛم","ﰒ":"ىۛم","ﶝ":"ىمم","ﶜ":"ىمم","ﶰ":"ىمى","ﲔ":"ىن","ﱹ":"ىۛن","ﲕ":"ىى","ﱙ":"ىى","ﲖ":"ىى","ﱚ":"ىى","ﱺ":"ىۛى","ﰓ":"ىۛى","ﱻ":"ىۛى","ﰔ":"ىۛى","ﮱ":"ۓ","ﮰ":"ۓ","𐊸":"ⵀ","⁞":"ⵂ","⸽":"ⵂ","⦙":"ⵂ","︙":"ⵗ","⁝":"ⵗ","⋮":"ⵗ","Մ":"ሆ","Ռ":"ቡ","Ի":"ኮ","Պ":"ጣ","आ":"अा","ऒ":"अाॆ","ओ":"अाे","औ":"अाै","ऄ":"अॆ","ऑ":"अॉ","ऍ":"एॅ","ऎ":"एॆ","ऐ":"एे","ई":"र्इ","ઽ":"ऽ","𑇜":"ꣻ","𑇋":"ऺ","ુ":"ु","ૂ":"ू","ੋ":"ॆ","੍":"्","્":"्","আ":"অা","ৠ":"ঋৃ","ৡ":"ঋৃ","𑒒":"ঘ","𑒔":"চ","𑒖":"জ","𑒘":"ঞ","𑒙":"ট","𑒛":"ড","𑒪":"ণ","𑒞":"ত","𑒟":"থ","𑒠":"দ","𑒡":"ধ","𑒢":"ন","𑒣":"প","𑒩":"ব","𑒧":"ম","𑒨":"য","𑒫":"র","𑒝":"ল","𑒭":"ষ","𑒮":"স","𑓄":"ঽ","𑒰":"া","𑒱":"ি","𑒹":"ে","𑒼":"ো","𑒾":"ৌ","𑓂":"্","𑒽":"ৗ","ਉ":"ੳੁ","ਊ":"ੳੂ","ਆ":"ਅਾ","ਐ":"ਅੈ","ਔ":"ਅੌ","ਇ":"ੲਿ","ਈ":"ੲੀ","ਏ":"ੲੇ","આ":"અા","ઑ":"અાૅ","ઓ":"અાે","ઔ":"અાૈ","ઍ":"અૅ","એ":"અે","ઐ":"અૈ","ଆ":"ଅା","௮":"அ","ர":"ஈ","ா":"ஈ","௫":"ஈு","௨":"உ","ഉ":"உ","ஊ":"உள","ഊ":"உൗ","௭":"எ","௷":"எவ","ஜ":"ஐ","ജ":"ஐ","௧":"க","௪":"ச","௬":"சு","௲":"சூ","ഺ":"டி","ണ":"ண","௺":"நீ","௴":"மீ","௰":"ய","ഴ":"ழ","ௗ":"ள","ை":"ன","ശ":"ஶ","௸":"ஷ","ി":"ி","ീ":"ி","ொ":"ெஈ","ௌ":"ெள","ோ":"ேஈ","ಅ":"అ","ಆ":"ఆ","ಇ":"ఇ","ౠ":"ఋా","ౡ":"ఌా","ಒ":"ఒ","ఔ":"ఒౌ","ಔ":"ఒౌ","ఓ":"ఒౕ","ಓ":"ఒౕ","ಜ":"జ","ಞ":"ఞ","ఢ":"డ̣","ಣ":"ణ","థ":"ధּ","భ":"బ̣","ಯ":"య","ఠ":"రּ","ಱ":"ఱ","ಲ":"ల","ష":"వ̣","హ":"వా","మ":"వు","ూ":"ుా","ౄ":"ృా","ೡ":"ಌಾ","ഈ":"ഇൗ","ഐ":"എെ","ഓ":"ഒാ","ഔ":"ഒൗ","ൡ":"ഞ","൫":"ദ്ര","൹":"നു","ഌ":"നു","ങ":"നു","൯":"ന്","ൻ":"ന്","൬":"ന്ന","൚":"ന്മ","റ":"ര","൪":"ര്","ർ":"ര്","൮":"വ്ര","൶":"ഹ്മ","ൂ":"ു","ൃ":"ു","ൈ":"െെ","෪":"ජ","෫":"ද","𑐓":"𑐴𑑂𑐒","𑐙":"𑐴𑑂𑐘","𑐤":"𑐴𑑂𑐣","𑐪":"𑐴𑑂𑐩","𑐭":"𑐴𑑂𑐬","𑐯":"𑐴𑑂𑐮","𑗘":"𑖂","𑗙":"𑖂","𑗚":"𑖃","𑗛":"𑖄","𑗜":"𑖲","𑗝":"𑖳","ฃ":"ข","ด":"ค","ต":"ค","ม":"ฆ","ຈ":"จ","ซ":"ช","ฏ":"ฎ","ท":"ฑ","ບ":"บ","ປ":"ป","ຝ":"ฝ","ພ":"พ","ຟ":"ฟ","ฦ":"ภ","ຍ":"ย","។":"ฯ","ๅ":"า","ำ":"̊า","ិ":"ิ","ី":"ี","ឹ":"ึ","ឺ":"ื","ຸ":"ุ","ູ":"ู","แ":"เเ","ໜ":"ຫນ","ໝ":"ຫມ","ຳ":"̊າ","༂":"འུྂཿ","༃":"འུྂ༔","ཪ":"ར","ༀ":"ཨོཾ","ཷ":"ྲཱྀ","ཹ":"ླཱྀ","𑲲":"𑲪","ႁ":"ဂှ","က":"ဂာ","ၰ":"ဃှ","ၦ":"ပှ","ဟ":"ပာ","ၯ":"ပာှ","ၾ":"ၽှ","ဩ":"သြ","ဪ":"သြော်","႞":"ႃ̊","ឣ":"អ","᧐":"ᦞ","᧑":"ᦱ","᪀":"ᩅ","᪐":"ᩅ","꩓":"ꨁ","꩖":"ꨣ","᭒":"ᬍ","᭓":"ᬑ","᭘":"ᬨ","ꦣ":"ꦝ","ᢖ":"ᡜ","ᡕ":"ᠵ","ῶ":"Ꮿ","ᐍ":"ᐁ·","ᐫ":"ᐁᐠ","ᐑ":"ᐄ·","ᐓ":"ᐅ·","ᐭ":"ᐅᐠ","ᐕ":"ᐆ·","ᐘ":"ᐊ·","ᐮ":"ᐊᐠ","ᐚ":"ᐋ·","ᣝ":"ᐞᣟ","ᓑ":"ᐡ","ᕀ":"ᐩ","ᐿ":"ᐲ·","ᑃ":"ᐴ·","⍩":"ᐵ","ᑇ":"ᐹ·","ᑜ":"ᑏ·","⸧":"ᑐ","⊃":"ᑐ","ᑞ":"ᑐ·","ᑩ":"ᑐ\'","⟉":"ᑐ/","⫗":"ᑐᑕ","ᑠ":"ᑑ·","⸦":"ᑕ","⊂":"ᑕ","ᑢ":"ᑕ·","ᑪ":"ᑕ\'","ᑤ":"ᑖ·","ᑵ":"ᑫ·","ᒅ":"ᑫ\'","ᑹ":"ᑮ·","ᑽ":"ᑰ·","ᘃ":"ᒉ","ᒓ":"ᒉ·","ᒕ":"ᒋ·","ᒗ":"ᒌ·","ᒛ":"ᒎ·","ᘂ":"ᒐ","ᒝ":"ᒐ·","ᒟ":"ᒑ·","ᒭ":"ᒣ·","ᒱ":"ᒦ·","ᒳ":"ᒧ·","ᒵ":"ᒨ·","ᒹ":"ᒫ·","ᓊ":"ᓀ·","ᣇ":"ᓂ·","ᣉ":"ᓃ·","ᣋ":"ᓄ·","ᣍ":"ᓅ·","ᓌ":"ᓇ·","ᓎ":"ᓈ·","ᘄ":"ᓓ","ᓝ":"ᓓ·","ᓟ":"ᓕ·","ᓡ":"ᓖ·","ᓣ":"ᓗ·","ᓥ":"ᓘ·","ᘇ":"ᓚ","ᓧ":"ᓚ·","ᓩ":"ᓛ·","ᓷ":"ᓭ·","ᓹ":"ᓯ·","ᓻ":"ᓰ·","ᓽ":"ᓱ·","ᓿ":"ᓲ·","ᔁ":"ᓴ·","ᔃ":"ᓵ·","ᔌ":"ᔋ<","ᔎ":"ᔋb","ᔍ":"ᔋᑕ","ᔏ":"ᔋᒐ","ᔘ":"ᔐ·","ᔚ":"ᔑ·","ᔜ":"ᔒ·","ᔞ":"ᔓ·","ᔠ":"ᔔ·","ᔢ":"ᔕ·","ᔤ":"ᔖ·","ᔲ":"ᔨ·","ᔴ":"ᔩ·","ᔶ":"ᔪ·","ᔸ":"ᔫ·","ᔺ":"ᔭ·","ᔼ":"ᔮ·","ᘢ":"ᕃ","ᣠ":"ᕃ·","ᘣ":"ᕆ","ᘤ":"ᕊ","ᕏ":"ᕌ·","ᖃ":"ᕐb","ᖄ":"ᕐḃ","ᖁ":"ᕐd","ᕿ":"ᕐP","ᙯ":"ᕐᑫ","ᕾ":"ᕐᑬ","ᖀ":"ᕐᑮ","ᖂ":"ᕐᑰ","ᖅ":"ᕐᒃ","ᕜ":"ᕚ·","ᣣ":"ᕞ·","ᣤ":"ᕦ·","ᕩ":"ᕧ·","ᣥ":"ᕫ·","ᣨ":"ᖆ·","ᖑ":"ᖕJ","ᙰ":"ᖕᒉ","ᖎ":"ᖕᒊ","ᖏ":"ᖕᒋ","ᖐ":"ᖕᒌ","ᖒ":"ᖕᒎ","ᖓ":"ᖕᒐ","ᖔ":"ᖕᒑ","ᙳ":"ᖖJ","ᙱ":"ᖖᒋ","ᙲ":"ᖖᒌ","ᙴ":"ᖖᒎ","ᙵ":"ᖖᒐ","ᙶ":"ᖖᒑ","ᣪ":"ᖗ·","ᙷ":"ᖧ·","ᙸ":"ᖨ·","ᙹ":"ᖩ·","ᙺ":"ᖪ·","ᙻ":"ᖫ·","ᙼ":"ᖬ·","ᙽ":"ᖭ·","⪫":"ᗒ","⪪":"ᗕ","ꓷ":"ᗡ","ᣰ":"ᗴ·","ᣲ":"ᘛ·","ᶻ":"ᙆ","ꓭ":"ᙠ","ᶺ":"ᣔ","ᴾ":"ᣖ","ᣜ":"ᣟᐞ","ˡ":"ᣳ","ʳ":"ᣴ","ˢ":"ᣵ","ᣛ":"ᣵ","ꚰ":"ᚹ","ᛡ":"ᚼ","⍿":"ᚽ","ᛂ":"ᚽ","𝈿":"ᛋ","↑":"ᛏ","↿":"ᛐ","⥮":"ᛐ⇂","⥣":"ᛐᛚ","ⵣ":"ᛯ","↾":"ᛚ","⨡":"ᛚ","⋄":"ᛜ","◇":"ᛜ","◊":"ᛜ","♢":"ᛜ","🝔":"ᛜ","𑢷":"ᛜ","𐊔":"ᛜ","⍚":"ᛜ̲","⋈":"ᛞ","⨝":"ᛞ","𐓐":"ᛦ","↕":"ᛨ","𐳼":"𐲂","𐳺":"𐲥","ㄱ":"ᄀ","ᆨ":"ᄀ","ᄁ":"ᄀᄀ","ㄲ":"ᄀᄀ","ᆩ":"ᄀᄀ","ᇺ":"ᄀᄂ","ᅚ":"ᄀᄃ","ᇃ":"ᄀᄅ","ᇻ":"ᄀᄇ","ᆪ":"ᄀᄉ","ㄳ":"ᄀᄉ","ᇄ":"ᄀᄉᄀ","ᇼ":"ᄀᄎ","ᇽ":"ᄀᄏ","ᇾ":"ᄀᄒ","ㄴ":"ᄂ","ᆫ":"ᄂ","ᄓ":"ᄂᄀ","ᇅ":"ᄂᄀ","ᄔ":"ᄂᄂ","ㅥ":"ᄂᄂ","ᇿ":"ᄂᄂ","ᄕ":"ᄂᄃ","ㅦ":"ᄂᄃ","ᇆ":"ᄂᄃ","ퟋ":"ᄂᄅ","ᄖ":"ᄂᄇ","ᅛ":"ᄂᄉ","ᇇ":"ᄂᄉ","ㅧ":"ᄂᄉ","ᅜ":"ᄂᄌ","ᆬ":"ᄂᄌ","ㄵ":"ᄂᄌ","ퟌ":"ᄂᄎ","ᇉ":"ᄂᄐ","ᅝ":"ᄂᄒ","ᆭ":"ᄂᄒ","ㄶ":"ᄂᄒ","ᇈ":"ᄂᅀ","ㅨ":"ᄂᅀ","ㄷ":"ᄃ","ᆮ":"ᄃ","ᄗ":"ᄃᄀ","ᇊ":"ᄃᄀ","ᄄ":"ᄃᄃ","ㄸ":"ᄃᄃ","ퟍ":"ᄃᄃ","ퟎ":"ᄃᄃᄇ","ᅞ":"ᄃᄅ","ᇋ":"ᄃᄅ","ꥠ":"ᄃᄆ","ꥡ":"ᄃᄇ","ퟏ":"ᄃᄇ","ꥢ":"ᄃᄉ","ퟐ":"ᄃᄉ","ퟑ":"ᄃᄉᄀ","ꥣ":"ᄃᄌ","ퟒ":"ᄃᄌ","ퟓ":"ᄃᄎ","ퟔ":"ᄃᄐ","ㄹ":"ᄅ","ᆯ":"ᄅ","ꥤ":"ᄅᄀ","ᆰ":"ᄅᄀ","ㄺ":"ᄅᄀ","ꥥ":"ᄅᄀᄀ","ퟕ":"ᄅᄀᄀ","ᇌ":"ᄅᄀᄉ","ㅩ":"ᄅᄀᄉ","ퟖ":"ᄅᄀᄒ","ᄘ":"ᄅᄂ","ᇍ":"ᄅᄂ","ꥦ":"ᄅᄃ","ᇎ":"ᄅᄃ","ㅪ":"ᄅᄃ","ꥧ":"ᄅᄃᄃ","ᇏ":"ᄅᄃᄒ","ᄙ":"ᄅᄅ","ᇐ":"ᄅᄅ","ퟗ":"ᄅᄅᄏ","ꥨ":"ᄅᄆ","ᆱ":"ᄅᄆ","ㄻ":"ᄅᄆ","ᇑ":"ᄅᄆᄀ","ᇒ":"ᄅᄆᄉ","ퟘ":"ᄅᄆᄒ","ꥩ":"ᄅᄇ","ᆲ":"ᄅᄇ","ㄼ":"ᄅᄇ","ퟙ":"ᄅᄇᄃ","ꥪ":"ᄅᄇᄇ","ᇓ":"ᄅᄇᄉ","ㅫ":"ᄅᄇᄉ","ꥫ":"ᄅᄇᄋ","ᇕ":"ᄅᄇᄋ","ퟚ":"ᄅᄇᄑ","ᇔ":"ᄅᄇᄒ","ꥬ":"ᄅᄉ","ᆳ":"ᄅᄉ","ㄽ":"ᄅᄉ","ᇖ":"ᄅᄉᄉ","ᄛ":"ᄅᄋ","ퟝ":"ᄅᄋ","ꥭ":"ᄅᄌ","ꥮ":"ᄅᄏ","ᇘ":"ᄅᄏ","ᆴ":"ᄅᄐ","ㄾ":"ᄅᄐ","ᆵ":"ᄅᄑ","ㄿ":"ᄅᄑ","ᄚ":"ᄅᄒ","ㅀ":"ᄅᄒ","ᄻ":"ᄅᄒ","ᆶ":"ᄅᄒ","ퟲ":"ᄅᄒ","ᇗ":"ᄅᅀ","ㅬ":"ᄅᅀ","ퟛ":"ᄅᅌ","ᇙ":"ᄅᅙ","ㅭ":"ᄅᅙ","ퟜ":"ᄅᅙᄒ","ㅁ":"ᄆ","ᆷ":"ᄆ","ꥯ":"ᄆᄀ","ᇚ":"ᄆᄀ","ퟞ":"ᄆᄂ","ퟟ":"ᄆᄂᄂ","ꥰ":"ᄆᄃ","ᇛ":"ᄆᄅ","ퟠ":"ᄆᄆ","ᄜ":"ᄆᄇ","ㅮ":"ᄆᄇ","ᇜ":"ᄆᄇ","ퟡ":"ᄆᄇᄉ","ꥱ":"ᄆᄉ","ᇝ":"ᄆᄉ","ㅯ":"ᄆᄉ","ᇞ":"ᄆᄉᄉ","ᄝ":"ᄆᄋ","ㅱ":"ᄆᄋ","ᇢ":"ᄆᄋ","ퟢ":"ᄆᄌ","ᇠ":"ᄆᄎ","ᇡ":"ᄆᄒ","ᇟ":"ᄆᅀ","ㅰ":"ᄆᅀ","ㅂ":"ᄇ","ᆸ":"ᄇ","ᄞ":"ᄇᄀ","ㅲ":"ᄇᄀ","ᄟ":"ᄇᄂ","ᄠ":"ᄇᄃ","ㅳ":"ᄇᄃ","ퟣ":"ᄇᄃ","ᇣ":"ᄇᄅ","ퟤ":"ᄇᄅᄑ","ퟥ":"ᄇᄆ","ᄈ":"ᄇᄇ","ㅃ":"ᄇᄇ","ퟦ":"ᄇᄇ","ᄬ":"ᄇᄇᄋ","ㅹ":"ᄇᄇᄋ","ᄡ":"ᄇᄉ","ㅄ":"ᄇᄉ","ᆹ":"ᄇᄉ","ᄢ":"ᄇᄉᄀ","ㅴ":"ᄇᄉᄀ","ᄣ":"ᄇᄉᄃ","ㅵ":"ᄇᄉᄃ","ퟧ":"ᄇᄉᄃ","ᄤ":"ᄇᄉᄇ","ᄥ":"ᄇᄉᄉ","ᄦ":"ᄇᄉᄌ","ꥲ":"ᄇᄉᄐ","ᄫ":"ᄇᄋ","ㅸ":"ᄇᄋ","ᇦ":"ᄇᄋ","ᄧ":"ᄇᄌ","ㅶ":"ᄇᄌ","ퟨ":"ᄇᄌ","ᄨ":"ᄇᄎ","ퟩ":"ᄇᄎ","ꥳ":"ᄇᄏ","ᄩ":"ᄇᄐ","ㅷ":"ᄇᄐ","ᄪ":"ᄇᄑ","ᇤ":"ᄇᄑ","ꥴ":"ᄇᄒ","ᇥ":"ᄇᄒ","ㅅ":"ᄉ","ᆺ":"ᄉ","ᄭ":"ᄉᄀ","ㅺ":"ᄉᄀ","ᇧ":"ᄉᄀ","ᄮ":"ᄉᄂ","ㅻ":"ᄉᄂ","ᄯ":"ᄉᄃ","ㅼ":"ᄉᄃ","ᇨ":"ᄉᄃ","ᄰ":"ᄉᄅ","ᇩ":"ᄉᄅ","ᄱ":"ᄉᄆ","ퟪ":"ᄉᄆ","ᄲ":"ᄉᄇ","ㅽ":"ᄉᄇ","ᇪ":"ᄉᄇ","ᄳ":"ᄉᄇᄀ","ퟫ":"ᄉᄇᄋ","ᄊ":"ᄉᄉ","ㅆ":"ᄉᄉ","ᆻ":"ᄉᄉ","ퟬ":"ᄉᄉᄀ","ퟭ":"ᄉᄉᄃ","ꥵ":"ᄉᄉᄇ","ᄴ":"ᄉᄉᄉ","ᄵ":"ᄉᄋ","ᄶ":"ᄉᄌ","ㅾ":"ᄉᄌ","ퟯ":"ᄉᄌ","ᄷ":"ᄉᄎ","ퟰ":"ᄉᄎ","ᄸ":"ᄉᄏ","ᄹ":"ᄉᄐ","ퟱ":"ᄉᄐ","ᄺ":"ᄉᄑ","ퟮ":"ᄉᅀ","ㅇ":"ᄋ","ᆼ":"ᄋ","ᅁ":"ᄋᄀ","ᇬ":"ᄋᄀ","ᇭ":"ᄋᄀᄀ","ᅂ":"ᄋᄃ","ꥶ":"ᄋᄅ","ᅃ":"ᄋᄆ","ᅄ":"ᄋᄇ","ᅅ":"ᄋᄉ","ᇱ":"ᄋᄉ","ㆂ":"ᄋᄉ","ᅇ":"ᄋᄋ","ㆀ":"ᄋᄋ","ᇮ":"ᄋᄋ","ᅈ":"ᄋᄌ","ᅉ":"ᄋᄎ","ᇯ":"ᄋᄏ","ᅊ":"ᄋᄐ","ᅋ":"ᄋᄑ","ꥷ":"ᄋᄒ","ᅆ":"ᄋᅀ","ᇲ":"ᄋᅀ","ㆃ":"ᄋᅀ","ㅈ":"ᄌ","ᆽ":"ᄌ","ퟷ":"ᄌᄇ","ퟸ":"ᄌᄇᄇ","ᅍ":"ᄌᄋ","ᄍ":"ᄌᄌ","ㅉ":"ᄌᄌ","ퟹ":"ᄌᄌ","ꥸ":"ᄌᄌᄒ","ㅊ":"ᄎ","ᆾ":"ᄎ","ᅒ":"ᄎᄏ","ᅓ":"ᄎᄒ","ㅋ":"ᄏ","ᆿ":"ᄏ","ㅌ":"ᄐ","ᇀ":"ᄐ","ꥹ":"ᄐᄐ","ㅍ":"ᄑ","ᇁ":"ᄑ","ᅖ":"ᄑᄇ","ᇳ":"ᄑᄇ","ퟺ":"ᄑᄉ","ᅗ":"ᄑᄋ","ㆄ":"ᄑᄋ","ᇴ":"ᄑᄋ","ퟻ":"ᄑᄐ","ꥺ":"ᄑᄒ","ㅎ":"ᄒ","ᇂ":"ᄒ","ᇵ":"ᄒᄂ","ᇶ":"ᄒᄅ","ᇷ":"ᄒᄆ","ᇸ":"ᄒᄇ","ꥻ":"ᄒᄉ","ᅘ":"ᄒᄒ","ㆅ":"ᄒᄒ","ᄽ":"ᄼᄼ","ᄿ":"ᄾᄾ","ㅿ":"ᅀ","ᇫ":"ᅀ","ퟳ":"ᅀᄇ","ퟴ":"ᅀᄇᄋ","ㆁ":"ᅌ","ᇰ":"ᅌ","ퟵ":"ᅌᄆ","ퟶ":"ᅌᄒ","ᅏ":"ᅎᅎ","ᅑ":"ᅐᅐ","ㆆ":"ᅙ","ᇹ":"ᅙ","ꥼ":"ᅙᅙ","ㅤ":"ᅠ","ㅏ":"ᅡ","ᆣ":"ᅡー","ᅶ":"ᅡᅩ","ᅷ":"ᅡᅮ","ᅢ":"ᅡ丨","ㅐ":"ᅡ丨","ㅑ":"ᅣ","ᅸ":"ᅣᅩ","ᅹ":"ᅣᅭ","ᆤ":"ᅣᅮ","ᅤ":"ᅣ丨","ㅒ":"ᅣ丨","ㅓ":"ᅥ","ᅼ":"ᅥー","ᅺ":"ᅥᅩ","ᅻ":"ᅥᅮ","ᅦ":"ᅥ丨","ㅔ":"ᅥ丨","ㅕ":"ᅧ","ᆥ":"ᅧᅣ","ᅽ":"ᅧᅩ","ᅾ":"ᅧᅮ","ᅨ":"ᅧ丨","ㅖ":"ᅧ丨","ㅗ":"ᅩ","ᅪ":"ᅩᅡ","ㅘ":"ᅩᅡ","ᅫ":"ᅩᅡ丨","ㅙ":"ᅩᅡ丨","ᆦ":"ᅩᅣ","ᆧ":"ᅩᅣ丨","ᅿ":"ᅩᅥ","ᆀ":"ᅩᅥ丨","ힰ":"ᅩᅧ","ᆁ":"ᅩᅧ丨","ᆂ":"ᅩᅩ","ힱ":"ᅩᅩ丨","ᆃ":"ᅩᅮ","ᅬ":"ᅩ丨","ㅚ":"ᅩ丨","ㅛ":"ᅭ","ힲ":"ᅭᅡ","ힳ":"ᅭᅡ丨","ᆄ":"ᅭᅣ","ㆇ":"ᅭᅣ","ᆆ":"ᅭᅣ","ᆅ":"ᅭᅣ丨","ㆈ":"ᅭᅣ丨","ힴ":"ᅭᅥ","ᆇ":"ᅭᅩ","ᆈ":"ᅭ丨","ㆉ":"ᅭ丨","ㅜ":"ᅮ","ᆉ":"ᅮᅡ","ᆊ":"ᅮᅡ丨","ᅯ":"ᅮᅥ","ㅝ":"ᅮᅥ","ᆋ":"ᅮᅥー","ᅰ":"ᅮᅥ丨","ㅞ":"ᅮᅥ丨","ힵ":"ᅮᅧ","ᆌ":"ᅮᅧ丨","ᆍ":"ᅮᅮ","ᅱ":"ᅮ丨","ㅟ":"ᅮ丨","ힶ":"ᅮ丨丨","ㅠ":"ᅲ","ᆎ":"ᅲᅡ","ힷ":"ᅲᅡ丨","ᆏ":"ᅲᅥ","ᆐ":"ᅲᅥ丨","ᆑ":"ᅲᅧ","ㆊ":"ᅲᅧ","ᆒ":"ᅲᅧ丨","ㆋ":"ᅲᅧ丨","ힸ":"ᅲᅩ","ᆓ":"ᅲᅮ","ᆔ":"ᅲ丨","ㆌ":"ᅲ丨","ㆍ":"ᆞ","ퟅ":"ᆞᅡ","ᆟ":"ᆞᅥ","ퟆ":"ᆞᅥ丨","ᆠ":"ᆞᅮ","ᆢ":"ᆞᆞ","ᆡ":"ᆞ丨","ㆎ":"ᆞ丨","ヘ":"へ","⍁":"〼","⧄":"〼","꒞":"ꁊ","꒬":"ꁐ","꒜":"ꃀ","꒨":"ꄲ","꒿":"ꉙ","꒾":"ꊱ","꒔":"ꋍ","꓀":"ꎫ","꓂":"ꎵ","꒺":"ꎿ","꒰":"ꏂ","꒧":"ꑘ","⊥":"ꓕ","⟂":"ꓕ","𝈜":"ꓕ","Ʇ":"ꓕ","Ꞟ":"ꓤ","⅁":"ꓨ","⅂":"ꓶ","𝈕":"ꓶ","𝈫":"ꓶ","𖼦":"ꓶ","𐐑":"ꓶ","⅃":"𖼀","𑫦":"𑫥𑫯","𑫨":"𑫥𑫥","𑫩":"𑫥𑫥𑫯","𑫪":"𑫥𑫥𑫰","𑫧":"𑫥𑫰","𑫴":"𑫳𑫯","𑫶":"𑫳𑫳","𑫷":"𑫳𑫳𑫯","𑫸":"𑫳𑫳𑫰","𑫵":"𑫳𑫰","𑫬":"𑫫𑫯","𑫭":"𑫫𑫫","𑫮":"𑫫𑫫𑫯","⊕":"𐊨","⨁":"𐊨","🜨":"𐊨","Ꚛ":"𐊨","▽":"𐊼","𝈔":"𐊼","🜄":"𐊼","⧖":"𐋀","ꞛ":"𐐺","Ꞛ":"𐐒","𐒠":"𐒆","𐏑":"𐎂","𐏓":"𐎓","𒀸":"𐎚","☥":"𐦞","𓋹":"𐦞","〹":"卄","不":"不","丽":"丽","並":"並","⎜":"丨","⎟":"丨","⎢":"丨","⎥":"丨","⎪":"丨","⎮":"丨","㇑":"丨","ᅵ":"丨","ㅣ":"丨","⼁":"丨","ᆜ":"丨ー","ᆘ":"丨ᅡ","ᆙ":"丨ᅣ","ힽ":"丨ᅣᅩ","ힾ":"丨ᅣ丨","ힿ":"丨ᅧ","ퟀ":"丨ᅧ丨","ᆚ":"丨ᅩ","ퟁ":"丨ᅩ丨","ퟂ":"丨ᅭ","ᆛ":"丨ᅮ","ퟃ":"丨ᅲ","ᆝ":"丨ᆞ","ퟄ":"丨丨","串":"串","丸":"丸","丹":"丹","乁":"乁","㇠":"乙","⼄":"乙","㇟":"乚","⺃":"乚","㇖":"乛","⺂":"乛","⻲":"亀","亂":"亂","㇚":"亅","⼅":"亅","了":"了","ニ":"二","⼆":"二","𠄢":"𠄢","⼇":"亠","亮":"亮","⼈":"人","イ":"亻","⺅":"亻","什":"什","仌":"仌","令":"令","你":"你","倂":"併","倂":"併","侀":"侀","來":"來","例":"例","侮":"侮","侮":"侮","侻":"侻","便":"便","值":"値","倫":"倫","偺":"偺","備":"備","像":"像","僚":"僚","僧":"僧","僧":"僧","㒞":"㒞","⼉":"儿","兀":"兀","⺎":"兀","充":"充","免":"免","免":"免","兔":"兔","兤":"兤","⼊":"入","內":"內","全":"全","兩":"兩","ハ":"八","⼋":"八","六":"六","具":"具","𠔜":"𠔜","𠔥":"𠔥","冀":"冀","㒹":"㒹","⼌":"冂","再":"再","𠕋":"𠕋","冒":"冒","冕":"冕","㒻":"㒻","最":"最","⼍":"冖","冗":"冗","冤":"冤","⼎":"冫","冬":"冬","况":"况","况":"况","冷":"冷","凉":"凉","凌":"凌","凜":"凜","凞":"凞","⼏":"几","𠘺":"𠘺","凵":"凵","⼐":"凵","⼑":"刀","⺉":"刂","刃":"刃","切":"切","切":"切","列":"列","利":"利","㓟":"㓟","刺":"刺","刻":"刻","剆":"剆","割":"割","剷":"剷","劉":"劉","𠠄":"𠠄","カ":"力","力":"力","⼒":"力","劣":"劣","㔕":"㔕","劳":"劳","勇":"勇","勇":"勇","勉":"勉","勉":"勉","勒":"勒","勞":"勞","勤":"勤","勤":"勤","勵":"勵","⼓":"勹","勺":"勺","勺":"勺","包":"包","匆":"匆","𠣞":"𠣞","⼔":"匕","北":"北","北":"北","⼕":"匚","⼖":"匸","匿":"匿","⼗":"十","〸":"十","〺":"卅","卉":"卉","࿖":"卍","࿕":"卐","卑":"卑","卑":"卑","博":"博","ト":"卜","⼘":"卜","⼙":"卩","⺋":"㔾","即":"即","卵":"卵","卽":"卽","卿":"卿","卿":"卿","卿":"卿","⼚":"厂","𠨬":"𠨬","⼛":"厶","參":"參","⼜":"又","及":"及","叟":"叟","𠭣":"𠭣","ロ":"口","⼝":"口","囗":"口","⼞":"口","句":"句","叫":"叫","叱":"叱","吆":"吆","吏":"吏","吝":"吝","吸":"吸","呂":"呂","呈":"呈","周":"周","咞":"咞","咢":"咢","咽":"咽","䎛":"㖈","哶":"哶","唐":"唐","啓":"啓","啟":"啓","啕":"啕","啣":"啣","善":"善","善":"善","喇":"喇","喙":"喙","喙":"喙","喝":"喝","喝":"喝","喫":"喫","喳":"喳","嗀":"嗀","嗂":"嗂","嗢":"嗢","嘆":"嘆","嘆":"嘆","噑":"噑","噴":"噴","器":"器","囹":"囹","圖":"圖","圗":"圗","⼟":"土","士":"土","⼠":"土","型":"型","城":"城","㦳":"㘽","埴":"埴","堍":"堍","報":"報","堲":"堲","塀":"塀","塚":"塚","塚":"塚","塞":"塞","填":"塡","壿":"墫","墬":"墬","墳":"墳","壘":"壘","壟":"壟","𡓤":"𡓤","壮":"壮","売":"売","壷":"壷","⼡":"夂","夆":"夆","⼢":"夊","タ":"夕","⼣":"夕","多":"多","夢":"夢","⼤":"大","奄":"奄","奈":"奈","契":"契","奔":"奔","奢":"奢","女":"女","⼥":"女","𡚨":"𡚨","𡛪":"𡛪","姘":"姘","姬":"姬","娛":"娛","娧":"娧","婢":"婢","婦":"婦","嬀":"媯","㛮":"㛮","㛼":"㛼","媵":"媵","嬈":"嬈","嬨":"嬨","嬾":"嬾","嬾":"嬾","⼦":"子","⼧":"宀","宅":"宅","𡧈":"𡧈","寃":"寃","寘":"寘","寧":"寧","寧":"寧","寧":"寧","寮":"寮","寳":"寳","𡬘":"𡬘","⼨":"寸","寿":"寿","将":"将","⼩":"小","尢":"尢","⺐":"尢","⼪":"尢","⺏":"尣","㞁":"㞁","⼫":"尸","尿":"尿","屠":"屠","屢":"屢","層":"層","履":"履","屮":"屮","屮":"屮","⼬":"屮","𡴋":"𡴋","⼭":"山","峀":"峀","岍":"岍","𡷤":"𡷤","𡷦":"𡷦","崙":"崙","嵃":"嵃","嵐":"嵐","嵫":"嵫","嵮":"嵮","嵼":"嵼","嶲":"嶲","嶺":"嶺","⼮":"巛","巢":"巢","エ":"工","⼯":"工","⼰":"己","⺒":"巳","㠯":"㠯","巽":"巽","⼱":"巾","帲":"帡","帨":"帨","帽":"帽","幩":"幩","㡢":"㡢","𢆃":"𢆃","⼲":"干","年":"年","𢆟":"𢆟","⺓":"幺","⼳":"幺","⼴":"广","度":"度","㡼":"㡼","庰":"庰","庳":"庳","庶":"庶","廊":"廊","廊":"廊","廉":"廉","廒":"廒","廓":"廓","廙":"廙","廬":"廬","⼵":"廴","廾":"廾","⼶":"廾","𢌱":"𢌱","𢌱":"𢌱","弄":"弄","⼷":"弋","⼸":"弓","弢":"弢","弢":"弢","⼹":"彐","⺔":"彑","当":"当","㣇":"㣇","⼺":"彡","形":"形","彩":"彩","彫":"彫","⼻":"彳","律":"律","㣣":"㣣","徚":"徚","復":"復","徭":"徭","⼼":"心","⺖":"忄","⺗":"㣺","忍":"忍","志":"志","念":"念","忹":"忹","怒":"怒","怜":"怜","恵":"恵","㤜":"㤜","㤺":"㤺","悁":"悁","悔":"悔","悔":"悔","惇":"惇","惘":"惘","惡":"惡","𢛔":"𢛔","愈":"愈","慨":"慨","慄":"慄","慈":"慈","慌":"慌","慌":"慌","慎":"慎","慎":"慎","慠":"慠","慺":"慺","憎":"憎","憎":"憎","憎":"憎","憐":"憐","憤":"憤","憯":"憯","憲":"憲","𢡄":"𢡄","𢡊":"𢡊","懞":"懞","懲":"懲","懲":"懲","懲":"懲","懶":"懶","懶":"懶","戀":"戀","⼽":"戈","成":"成","戛":"戛","戮":"戮","戴":"戴","⼾":"戶","戸":"戶","⼿":"手","⺘":"扌","扝":"扝","抱":"抱","拉":"拉","拏":"拏","拓":"拓","拔":"拔","拼":"拼","拾":"拾","𢬌":"𢬌","挽":"挽","捐":"捐","捨":"捨","捻":"捻","掃":"掃","掠":"掠","掩":"掩","揄":"揄","揤":"揤","摒":"摒","𢯱":"𢯱","搜":"搜","搢":"搢","揅":"揅","摩":"摩","摷":"摷","摾":"摾","㨮":"㨮","搉":"㩁","撚":"撚","撝":"撝","擄":"擄","㩬":"㩬","⽀":"支","⽁":"攴","⺙":"攵","敏":"敏","敏":"敏","敖":"敖","敬":"敬","數":"數","𣀊":"𣀊","⽂":"文","⻫":"斉","⽃":"斗","料":"料","⽄":"斤","⽅":"方","旅":"旅","⽆":"无","⺛":"旡","既":"既","旣":"旣","⽇":"日","易":"易","曶":"㫚","㫤":"㫤","晉":"晉","晩":"晚","晴":"晴","晴":"晴","暑":"暑","暑":"暑","暈":"暈","㬈":"㬈","暜":"暜","暴":"暴","曆":"曆","㬙":"㬙","𣊸":"𣊸","⽈":"曰","更":"更","書":"書","⽉":"月","𣍟":"𣍟","肦":"朌","胐":"朏","胊":"朐","脁":"朓","胶":"㬵","朗":"朗","朗":"朗","朗":"朗","脧":"朘","望":"望","望":"望","幐":"㬺","䐠":"㬻","𣎓":"𣎓","膧":"朣","𣎜":"𣎜","⽊":"木","李":"李","杓":"杓","杖":"杖","杞":"杞","𣏃":"𣏃","柿":"杮","杻":"杻","枅":"枅","林":"林","㭉":"㭉","𣏕":"𣏕","柳":"柳","柺":"柺","栗":"栗","栟":"栟","桒":"桒","𣑭":"𣑭","梁":"梁","梅":"梅","梅":"梅","梎":"梎","梨":"梨","椔":"椔","楂":"楂","㮝":"㮝","㮝":"㮝","槩":"㮣","樧":"榝","榣":"榣","槪":"槪","樂":"樂","樂":"樂","樂":"樂","樓":"樓","𣚣":"𣚣","檨":"檨","櫓":"櫓","櫛":"櫛","欄":"欄","㰘":"㰘","⽋":"欠","次":"次","𣢧":"𣢧","歔":"歔","㱎":"㱎","⽌":"止","⻭":"歯","歲":"歲","歷":"歷","歹":"歹","⽍":"歹","⺞":"歺","殟":"殟","殮":"殮","⽎":"殳","殺":"殺","殺":"殺","殺":"殺","殻":"殻","𣪍":"𣪍","⽏":"毋","⺟":"母","𣫺":"𣫺","⽐":"比","⽑":"毛","⽒":"氏","⺠":"民","⽓":"气","⽔":"水","⺡":"氵","⺢":"氺","汎":"汎","汧":"汧","沈":"沈","沿":"沿","泌":"泌","泍":"泍","泥":"泥","𣲼":"𣲼","洛":"洛","洞":"洞","洴":"洴","派":"派","流":"流","流":"流","流":"流","洖":"洖","浩":"浩","浪":"浪","海":"海","海":"海","浸":"浸","涅":"涅","𣴞":"𣴞","淋":"淋","淚":"淚","淪":"淪","淹":"淹","渚":"渚","港":"港","湮":"湮","潙":"溈","滋":"滋","滋":"滋","溜":"溜","溺":"溺","滇":"滇","滑":"滑","滛":"滛","㴳":"㴳","漏":"漏","漢":"漢","漢":"漢","漣":"漣","𣻑":"𣻑","潮":"潮","𣽞":"𣽞","𣾎":"𣾎","濆":"濆","濫":"濫","濾":"濾","瀛":"瀛","瀞":"瀞","瀞":"瀞","瀹":"瀹","灊":"灊","㶖":"㶖","⽕":"火","⺣":"灬","灰":"灰","灷":"灷","災":"災","炙":"炙","炭":"炭","烈":"烈","烙":"烙","煮":"煮","煮":"煮","𤉣":"𤉣","煅":"煅","煉":"煉","𤋮":"𤋮","熜":"熜","燎":"燎","燐":"燐","𤎫":"𤎫","爐":"爐","爛":"爛","爨":"爨","⽖":"爪","爫":"爫","⺤":"爫","爵":"爵","爵":"爵","⽗":"父","⽘":"爻","⺦":"丬","⽙":"爿","⽚":"片","牐":"牐","⽛":"牙","𤘈":"𤘈","⽜":"牛","牢":"牢","犀":"犀","犕":"犕","⽝":"犬","⺨":"犭","犯":"犯","狀":"狀","𤜵":"𤜵","狼":"狼","猪":"猪","猪":"猪","𤠔":"𤠔","獵":"獵","獺":"獺","⽞":"玄","率":"率","率":"率","⽟":"玉","王":"王","㺬":"㺬","玥":"玥","玲":"玲","㺸":"㺸","㺸":"㺸","珞":"珞","琉":"琉","理":"理","琢":"琢","瑇":"瑇","瑜":"瑜","瑩":"瑩","瑱":"瑱","瑱":"瑱","璅":"璅","璉":"璉","璘":"璘","瓊":"瓊","⽠":"瓜","⽡":"瓦","㼛":"㼛","甆":"甆","⽢":"甘","⽣":"生","甤":"甤","⽤":"用","⽥":"田","画":"画","甾":"甾","𤰶":"𤰶","留":"留","略":"略","異":"異","異":"異","𤲒":"𤲒","⽦":"疋","⽧":"疒","痢":"痢","瘐":"瘐","瘟":"瘟","瘝":"瘝","療":"療","癩":"癩","⽨":"癶","⽩":"白","𤾡":"𤾡","𤾸":"𤾸","⽪":"皮","⽫":"皿","𥁄":"𥁄","㿼":"㿼","益":"益","益":"益","盛":"盛","盧":"盧","䀈":"䀈","⽬":"目","直":"直","直":"直","𥃲":"𥃲","𥃳":"𥃳","省":"省","䀘":"䀘","𥄙":"𥄙","眞":"眞","真":"真","真":"真","𥄳":"𥄳","着":"着","睊":"睊","睊":"睊","鿃":"䀹","䀹":"䀹","䀹":"䀹","晣":"䀿","䁆":"䁆","瞋":"瞋","𥉉":"𥉉","瞧":"瞧","⽭":"矛","⽮":"矢","⽯":"石","䂖":"䂖","𥐝":"𥐝","硏":"研","硎":"硎","硫":"硫","碌":"碌","碌":"碌","碑":"碑","磊":"磊","磌":"磌","磌":"磌","磻":"磻","䃣":"䃣","礪":"礪","⽰":"示","⺭":"礻","礼":"礼","社":"社","祈":"祈","祉":"祉","𥘦":"𥘦","祐":"祐","祖":"祖","祖":"祖","祝":"祝","神":"神","祥":"祥","視":"視","視":"視","祿":"祿","𥚚":"𥚚","禍":"禍","禎":"禎","福":"福","福":"福","𥛅":"𥛅","禮":"禮","⽱":"禸","⽲":"禾","秊":"秊","䄯":"䄯","秫":"秫","稜":"稜","穊":"穊","穀":"穀","穀":"穀","穏":"穏","⽳":"穴","突":"突","𥥼":"𥥼","窱":"窱","立":"立","⽴":"立","⻯":"竜","𥪧":"𥪧","𥪧":"𥪧","竮":"竮","⽵":"竹","笠":"笠","節":"節","節":"節","䈂":"䈂","𥮫":"𥮫","篆":"篆","䈧":"䈧","築":"築","𥲀":"𥲀","𥳐":"𥳐","簾":"簾","籠":"籠","⽶":"米","类":"类","粒":"粒","精":"精","糒":"糒","糖":"糖","糨":"糨","䊠":"䊠","糣":"糣","糧":"糧","⽷":"糸","⺯":"糹","𥾆":"𥾆","紀":"紀","紐":"紐","索":"索","累":"累","絶":"絕","絣":"絣","絛":"絛","綠":"綠","綾":"綾","緇":"緇","練":"練","練":"練","練":"練","縂":"縂","䌁":"䌁","縉":"縉","縷":"縷","繁":"繁","繅":"繅","𦇚":"𦇚","䌴":"䌴","⽸":"缶","𦈨":"𦈨","缾":"缾","𦉇":"𦉇","⽹":"网","⺫":"罒","⺲":"罒","⺱":"罓","䍙":"䍙","署":"署","𦋙":"𦋙","罹":"罹","罺":"罺","羅":"羅","𦌾":"𦌾","⽺":"羊","羕":"羕","羚":"羚","羽":"羽","⽻":"羽","翺":"翺","老":"老","⽼":"老","⺹":"耂","者":"者","者":"者","者":"者","⽽":"而","𦓚":"𦓚","⽾":"耒","𦔣":"𦔣","⽿":"耳","聆":"聆","聠":"聠","𦖨":"𦖨","聯":"聯","聰":"聰","聾":"聾","⾀":"聿","⺺":"肀","⾁":"肉","肋":"肋","肭":"肭","育":"育","䏕":"䏕","䏙":"䏙","腁":"胼","脃":"脃","脾":"脾","䐋":"䐋","朡":"朡","𦞧":"𦞧","𦞵":"𦞵","朦":"䑃","臘":"臘","⾂":"臣","臨":"臨","⾃":"自","臭":"臭","⾄":"至","⾅":"臼","舁":"舁","舁":"舁","舄":"舄","⾆":"舌","舘":"舘","⾇":"舛","⾈":"舟","䑫":"䑫","⾉":"艮","良":"良","⾊":"色","⾋":"艸","艹":"艹","艹":"艹","⺾":"艹","⺿":"艹","⻀":"艹","芋":"芋","芑":"芑","芝":"芝","花":"花","芳":"芳","芽":"芽","若":"若","若":"若","苦":"苦","𦬼":"𦬼","茶":"茶","荒":"荒","荣":"荣","茝":"茝","茣":"茣","莽":"莽","荓":"荓","菉":"菉","菊":"菊","菌":"菌","菜":"菜","菧":"菧","華":"華","菱":"菱","著":"著","著":"著","𦰶":"𦰶","莭":"莭","落":"落","葉":"葉","蔿":"蒍","𦳕":"𦳕","𦵫":"𦵫","蓮":"蓮","蓱":"蓱","蓳":"蓳","蓼":"蓼","蔖":"蔖","䔫":"䔫","蕤":"蕤","𦼬":"𦼬","藍":"藍","䕝":"䕝","𦾱":"𦾱","䕡":"䕡","藺":"藺","蘆":"蘆","䕫":"䕫","蘒":"蘒","蘭":"蘭","𧃒":"𧃒","虁":"蘷","蘿":"蘿","⾌":"虍","⻁":"虎","虐":"虐","虜":"虜","虜":"虜","虧":"虧","虩":"虩","⾍":"虫","蚩":"蚩","蚈":"蚈","蛢":"蛢","蜎":"蜎","蜨":"蜨","蝫":"蝫","蟡":"蟡","蝹":"蝹","蝹":"蝹","螆":"螆","䗗":"䗗","𧏊":"𧏊","螺":"螺","蠁":"蠁","䗹":"䗹","蠟":"蠟","⾎":"血","行":"行","⾏":"行","衠":"衠","衣":"衣","⾐":"衣","⻂":"衤","裂":"裂","𧙧":"𧙧","裏":"裏","裗":"裗","裞":"裞","裡":"裡","裸":"裸","裺":"裺","䘵":"䘵","褐":"褐","襁":"襁","襤":"襤","⾑":"襾","⻄":"西","⻃":"覀","覆":"覆","見":"見","⾒":"見","𧢮":"𧢮","⻅":"见","⾓":"角","⾔":"言","𧥦":"𧥦","詽":"訮","訞":"䚶","䚾":"䚾","䛇":"䛇","誠":"誠","說":"說","說":"說","調":"調","請":"請","諒":"諒","論":"論","諭":"諭","諭":"諭","諸":"諸","諸":"諸","諾":"諾","諾":"諾","謁":"謁","謁":"謁","謹":"謹","謹":"謹","識":"識","讀":"讀","讏":"讆","變":"變","變":"變","⻈":"讠","⾕":"谷","⾖":"豆","豈":"豈","豕":"豕","⾗":"豕","豣":"豜","⾘":"豸","𧲨":"𧲨","⾙":"貝","貫":"貫","賁":"賁","賂":"賂","賈":"賈","賓":"賓","贈":"贈","贈":"贈","贛":"贛","⻉":"贝","⾚":"赤","⾛":"走","起":"起","趆":"赿","𧻓":"𧻓","𧼯":"𧼯","⾜":"足","跋":"跋","趼":"趼","跺":"跥","路":"路","跰":"跰","躛":"躗","⾝":"身","車":"車","⾞":"車","軔":"軔","輧":"軿","輦":"輦","輪":"輪","輸":"輸","輸":"輸","輻":"輻","轢":"轢","⻋":"车","⾟":"辛","辞":"辞","辰":"辰","⾠":"辰","⾡":"辵","辶":"辶","⻌":"辶","⻍":"辶","巡":"巡","連":"連","逸":"逸","逸":"逸","遲":"遲","遼":"遼","𨗒":"𨗒","𨗭":"𨗭","邏":"邏","⾢":"邑","邔":"邔","郎":"郎","郞":"郎","郞":"郎","郱":"郱","都":"都","𨜮":"𨜮","鄑":"鄑","鄛":"鄛","⾣":"酉","酪":"酪","醙":"醙","醴":"醴","⾤":"釆","里":"里","⾥":"里","量":"量","金":"金","⾦":"金","鈴":"鈴","鈸":"鈸","鉶":"鉶","鋗":"鋗","鋘":"鋘","鉼":"鉼","錄":"錄","鍊":"鍊","鎮":"鎭","鏹":"鏹","鐕":"鐕","𨯺":"𨯺","⻐":"钅","⻑":"長","⾧":"長","⻒":"镸","⻓":"长","⾨":"門","開":"開","䦕":"䦕","閭":"閭","閷":"閷","𨵷":"𨵷","⻔":"门","⾩":"阜","⻏":"阝","⻖":"阝","阮":"阮","陋":"陋","降":"降","陵":"陵","陸":"陸","陼":"陼","隆":"隆","隣":"隣","䧦":"䧦","⾪":"隶","隷":"隷","隸":"隷","隸":"隷","⾫":"隹","雃":"雃","離":"離","難":"難","難":"難","⾬":"雨","零":"零","雷":"雷","霣":"霣","𩅅":"𩅅","露":"露","靈":"靈","⾭":"靑","⻘":"青","靖":"靖","靖":"靖","𩇟":"𩇟","⾮":"非","⾯":"面","𩈚":"𩈚","⾰":"革","䩮":"䩮","䩶":"䩶","⾱":"韋","韛":"韛","韠":"韠","⻙":"韦","⾲":"韭","𩐊":"𩐊","⾳":"音","響":"響","響":"響","⾴":"頁","䪲":"䪲","頋":"頋","頋":"頋","頋":"頋","領":"領","頩":"頩","𩒖":"𩒖","頻":"頻","頻":"頻","類":"類","⻚":"页","⾵":"風","𩖶":"𩖶","⻛":"风","⾶":"飛","⻜":"飞","⻝":"食","⾷":"食","⻟":"飠","飢":"飢","飯":"飯","飼":"飼","䬳":"䬳","館":"館","餩":"餩","⻠":"饣","⾸":"首","⾹":"香","馧":"馧","⾺":"馬","駂":"駂","駱":"駱","駾":"駾","驪":"驪","⻢":"马","⾻":"骨","䯎":"䯎","⾼":"高","⾽":"髟","𩬰":"𩬰","鬒":"鬒","鬒":"鬒","⾾":"鬥","⾿":"鬯","⿀":"鬲","⿁":"鬼","⻤":"鬼","⿂":"魚","魯":"魯","鱀":"鱀","鱗":"鱗","⻥":"鱼","⿃":"鳥","鳽":"鳽","䳎":"䳎","鵧":"鵧","䳭":"䳭","𪃎":"𪃎","鶴":"鶴","𪄅":"𪄅","䳸":"䳸","鷺":"鷺","𪈎":"𪈎","鸞":"鸞","鹃":"鹂","⿄":"鹵","鹿":"鹿","⿅":"鹿","𪊑":"𪊑","麗":"麗","麟":"麟","⿆":"麥","⻨":"麦","麻":"麻","⿇":"麻","𪎒":"𪎒","⿈":"黃","⻩":"黄","⿉":"黍","黎":"黎","䵖":"䵖","⿊":"黑","黒":"黑","墨":"墨","黹":"黹","⿋":"黹","⿌":"黽","鼅":"鼅","黾":"黾","⿍":"鼎","鼏":"鼏","⿎":"鼓","鼖":"鼖","⿏":"鼠","鼻":"鼻","⿐":"鼻","齃":"齃","⿑":"齊","⻬":"齐","⿒":"齒","𪘀":"𪘀","⻮":"齿","龍":"龍","⿓":"龍","龎":"龎","⻰":"龙","龜":"龜","龜":"龜","龜":"龜","⿔":"龜","⻳":"龟","⿕":"龠"}');

/***/ }

}]);
//# sourceMappingURL=945.js.map