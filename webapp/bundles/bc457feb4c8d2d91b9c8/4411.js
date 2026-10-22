"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[4411],{

/***/ "./src/components/views/rooms/wysiwyg_composer/utils/editing.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ cancelPreviousPendingEdit),
/* harmony export */   w: () => (/* binding */ endEditing)
/* harmony export */ });
/* harmony import */ var matrix_js_sdk_src_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrix.ts");
/* harmony import */ var _dispatcher_dispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/dispatcher/dispatcher.ts");
/* harmony import */ var _dispatcher_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/dispatcher/actions.ts");
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/




function endEditing(roomContext) {
  // todo local storage
  // localStorage.removeItem(this.editorRoomKey);
  // localStorage.removeItem(this.editorStateKey);

  // close the event editing and focus composer
  _dispatcher_dispatcher__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.dispatch({
    action: _dispatcher_actions__WEBPACK_IMPORTED_MODULE_2__/* .Action */ .r.EditEvent,
    event: null,
    timelineRenderingType: roomContext.timelineRenderingType
  });
  _dispatcher_dispatcher__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.dispatch({
    action: _dispatcher_actions__WEBPACK_IMPORTED_MODULE_2__/* .Action */ .r.FocusSendMessageComposer,
    context: roomContext.timelineRenderingType
  });
}
function cancelPreviousPendingEdit(mxClient, editorStateTransfer) {
  const originalEvent = editorStateTransfer.getEvent();
  const previousEdit = originalEvent.replacingEvent();
  if (previousEdit && (previousEdit.status === matrix_js_sdk_src_matrix__WEBPACK_IMPORTED_MODULE_0__/* .EventStatus */ .fbu.QUEUED || previousEdit.status === matrix_js_sdk_src_matrix__WEBPACK_IMPORTED_MODULE_0__/* .EventStatus */ .fbu.NOT_SENT)) {
    mxClient.cancelPendingEvent(previousEdit);
  }
}

/***/ },

/***/ "./src/components/views/rooms/wysiwyg_composer/utils/message.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u: () => (/* binding */ editMessage),
  sendMessage: () => (/* binding */ sendMessage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.29.10/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.29.10/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrix.ts + 9 modules
var matrix = __webpack_require__("../../node_modules/.pnpm/matrix-js-sdk@file+matrix-js-sdk+matrix-js-sdk.tgz/node_modules/matrix-js-sdk/src/matrix.ts");
// EXTERNAL MODULE: ./src/PosthogAnalytics.ts + 1 modules
var PosthogAnalytics = __webpack_require__("./src/PosthogAnalytics.ts");
// EXTERNAL MODULE: ./src/settings/SettingsStore.ts + 10 modules
var SettingsStore = __webpack_require__("./src/settings/SettingsStore.ts");
// EXTERNAL MODULE: ./src/sendTimePerformanceMetrics.ts
var sendTimePerformanceMetrics = __webpack_require__("./src/sendTimePerformanceMetrics.ts");
// EXTERNAL MODULE: ./src/utils/local-room.ts + 1 modules
var local_room = __webpack_require__("./src/utils/local-room.ts");
// EXTERNAL MODULE: ./src/effects/index.ts
var effects = __webpack_require__("./src/effects/index.ts");
// EXTERNAL MODULE: ./src/effects/utils.ts
var utils = __webpack_require__("./src/effects/utils.ts");
// EXTERNAL MODULE: ./src/dispatcher/dispatcher.ts
var dispatcher = __webpack_require__("./src/dispatcher/dispatcher.ts");
// EXTERNAL MODULE: ./src/components/views/dialogs/ConfirmRedactDialog.tsx
var ConfirmRedactDialog = __webpack_require__("./src/components/views/dialogs/ConfirmRedactDialog.tsx");
// EXTERNAL MODULE: ./src/components/views/rooms/wysiwyg_composer/utils/editing.ts
var editing = __webpack_require__("./src/components/views/rooms/wysiwyg_composer/utils/editing.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.29.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.29.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vector-im+matrix-wysiwyg@2.40.0_patch_hash=7bdf6150f2905bc2f055a6bcaa7b9d78fa7ffde82e8_82694a8abcd552466227a4828a903595/node_modules/@vector-im/matrix-wysiwyg/dist/matrix-wysiwyg.js + 1 modules
var matrix_wysiwyg = __webpack_require__("../../node_modules/.pnpm/@vector-im+matrix-wysiwyg@2.40.0_patch_hash=7bdf6150f2905bc2f055a6bcaa7b9d78fa7ffde82e8_82694a8abcd552466227a4828a903595/node_modules/@vector-im/matrix-wysiwyg/dist/matrix-wysiwyg.js");
// EXTERNAL MODULE: ./src/utils/permalinks/Permalinks.ts + 2 modules
var Permalinks = __webpack_require__("./src/utils/permalinks/Permalinks.ts");
// EXTERNAL MODULE: ./src/utils/Reply.ts
var Reply = __webpack_require__("./src/utils/Reply.ts");
// EXTERNAL MODULE: ./src/Typeguards.ts
var Typeguards = __webpack_require__("./src/Typeguards.ts");
;// ./src/components/views/rooms/wysiwyg_composer/utils/createMessageContent.ts

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

;





const EMOTE_PREFIX = "/me ";

// Merges favouring the given relation
function attachRelation(content, relation) {
  if (relation) {
    content["m.relates_to"] = _objectSpread(_objectSpread({}, content["m.relates_to"]), relation);
  }
}
const isMatrixEvent = e => e instanceof matrix/* MatrixEvent */.klx;
async function createMessageContent(message, isHTML, {
  relation,
  replyToEvent,
  editedEvent
}) {
  const isEditing = isMatrixEvent(editedEvent);
  const isEmote = message.startsWith(EMOTE_PREFIX);
  if (isEmote) {
    // if we are dealing with an emote we want to remove the prefix so that `/me` does not
    // appear after the `* <userName>` text in the timeline
    message = message.slice(EMOTE_PREFIX.length);
  }
  if (message.startsWith("//")) {
    // if user wants to enter a single slash at the start of a message, this
    // is how they have to do it (due to it clashing with commands), so here we
    // remove the first character to make sure //word displays as /word
    message = message.slice(1);
  }

  // if we're editing rich text, the message content is pure html
  // BUT if we're not, the message content will be plain text where we need to convert the mentions
  const body = isHTML ? await (0,matrix_wysiwyg.richToPlain)(message, false) : convertPlainTextToBody(message);
  const content = {
    msgtype: isEmote ? matrix/* MsgType */.Wrw.Emote : matrix/* MsgType */.Wrw.Text,
    body: isEditing ? `* ${body}` : body
  };

  // TODO markdown support

  const isMarkdownEnabled = SettingsStore/* default */.A.getValue("MessageComposerInput.useMarkdown");
  const formattedBody = isHTML ? message : isMarkdownEnabled ? await (0,matrix_wysiwyg.plainToRich)(message, true) : null;
  if (formattedBody) {
    content.format = "org.matrix.custom.html";
    content.formatted_body = isEditing ? `* ${formattedBody}` : formattedBody;
  }
  if (isEditing) {
    content["m.new_content"] = {
      msgtype: content.msgtype,
      body: body
    };
    if (formattedBody) {
      content["m.new_content"].format = "org.matrix.custom.html";
      content["m.new_content"]["formatted_body"] = formattedBody;
    }
  }
  const newRelation = isEditing ? _objectSpread(_objectSpread({}, relation), {}, {
    rel_type: "m.replace",
    event_id: editedEvent.getId()
  }) : relation;

  // TODO Do we need to attach mentions here?
  // TODO Handle editing?
  attachRelation(content, newRelation);
  if (!isEditing && replyToEvent) {
    (0,Reply/* addReplyToMessageContent */.fh)(content, replyToEvent);
  }
  return content;
}

/**
 * Without a model, we need to manually amend mentions in uncontrolled message content
 * to make sure that mentions meet the matrix specification.
 *
 * @param content - the output from the `MessageComposer` state when in plain text mode
 * @returns - a string formatted with the mentions replaced as required
 */
function convertPlainTextToBody(content) {
  const document = new DOMParser().parseFromString(content, "text/html");
  const mentions = Array.from(document.querySelectorAll("a[data-mention-type]"));
  mentions.forEach(mention => {
    const mentionType = mention.getAttribute("data-mention-type");
    switch (mentionType) {
      case "at-room":
        {
          mention.replaceWith("@room");
          break;
        }
      case "user":
        {
          const innerText = mention.innerHTML;
          mention.replaceWith(innerText);
          break;
        }
      case "room":
        {
          // for this case we use parsePermalink to try and get the mx id
          const href = mention.getAttribute("href");

          // if the mention has no href attribute, leave it alone
          if (href === null) break;

          // otherwise, attempt to parse the room alias or id from the href
          const permalinkParts = (0,Permalinks/* parsePermalink */.$N)(href);

          // then if we have permalink parts with a valid roomIdOrAlias, replace the
          // room mention with that text
          if ((0,Typeguards/* isNotNull */.P)(permalinkParts) && (0,Typeguards/* isNotNull */.P)(permalinkParts.roomIdOrAlias)) {
            mention.replaceWith(permalinkParts.roomIdOrAlias);
          }
          break;
        }
      default:
        break;
    }
  });
  return document.body.innerHTML;
}
;// ./src/components/views/rooms/wysiwyg_composer/utils/isContentModified.ts
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

function isContentModified(newContent, editorStateTransfer) {
  // if nothing has changed then bail
  const oldContent = editorStateTransfer.getEvent().getContent();
  if (oldContent["msgtype"] === newContent["msgtype"] && oldContent["body"] === newContent["body"] && oldContent["format"] === newContent["format"] && oldContent["formatted_body"] === newContent["formatted_body"]) {
    return false;
  }
  return true;
}
// EXTERNAL MODULE: ./src/slash-commands/SlashCommands.tsx + 12 modules
var SlashCommands = __webpack_require__("./src/slash-commands/SlashCommands.tsx");
// EXTERNAL MODULE: ./src/editor/commands.tsx
var commands = __webpack_require__("./src/editor/commands.tsx");
// EXTERNAL MODULE: ./src/dispatcher/actions.ts
var actions = __webpack_require__("./src/dispatcher/actions.ts");
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__("./src/utils/messages.ts");
// EXTERNAL MODULE: ./src/utils/UrlUtils.ts
var UrlUtils = __webpack_require__("./src/utils/UrlUtils.ts");
;// ./src/components/views/rooms/wysiwyg_composer/utils/message.ts

const _excluded = ["roomContext", "mxClient", "urlPreviewSnapshot"];
/*
Copyright 2024 New Vector Ltd.
Copyright 2022, 2023 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/



















async function sendMessage(message, isHTML, _ref) {
  let {
      roomContext,
      mxClient,
      urlPreviewSnapshot
    } = _ref,
    params = (0,objectWithoutProperties/* default */.A)(_ref, _excluded);
  const {
    relation,
    replyToEvent
  } = params;
  const {
    room
  } = roomContext;
  const roomId = room === null || room === void 0 ? void 0 : room.roomId;
  if (!roomId) {
    return;
  }
  const posthogEvent = {
    eventName: "Composer",
    isEditing: false,
    messageType: "Text",
    isReply: Boolean(replyToEvent),
    // TODO thread
    inThread: (relation === null || relation === void 0 ? void 0 : relation.rel_type) === matrix/* THREAD_RELATION_TYPE */.RNJ.name
  };

  // TODO thread
  /*if (posthogEvent.inThread) {
      const threadRoot = room.findEventById(relation?.event_id);
      posthogEvent.startsThread = threadRoot?.getThread()?.events.length === 1;
  }*/
  PosthogAnalytics/* PosthogAnalytics */.Vo.instance.trackEvent(posthogEvent);
  let content = null;

  // Slash command handling here approximates what can be found in SendMessageComposer.sendMessage()
  // but note that the /me and // special cases are handled by the call to createMessageContent
  if (message.startsWith("/") && !message.startsWith("//") && !message.startsWith((/* inlined export .EMOTE_PREFIX */"/me "))) {
    const {
      cmd,
      args
    } = (0,SlashCommands.getCommand)(roomId, message);
    if (cmd) {
      const threadId = (relation === null || relation === void 0 ? void 0 : relation.rel_type) === matrix/* THREAD_RELATION_TYPE */.RNJ.name ? relation === null || relation === void 0 ? void 0 : relation.event_id : null;
      let commandSuccessful;
      [content, commandSuccessful] = await (0,commands/* runSlashCommand */.m8)(mxClient, cmd, args, roomId, threadId !== null && threadId !== void 0 ? threadId : null);
      if (!commandSuccessful) {
        return; // errored
      }
      if (content && (cmd.category === SlashCommands.CommandCategories.messages || cmd.category === SlashCommands.CommandCategories.effects)) {
        (0,messages/* attachRelation */.gV)(content, relation);
        if (replyToEvent) {
          (0,Reply/* addReplyToMessageContent */.fh)(content, replyToEvent);
        }
      } else {
        // instead of setting shouldSend to false as in SendMessageComposer, just return
        return;
      }
    } else {
      const sendAnyway = await (0,commands/* shouldSendAnyway */.d8)(message);
      // re-focus the composer after QuestionDialog is closed
      dispatcher/* default */.A.dispatch({
        action: actions/* Action */.r.FocusAComposer,
        context: roomContext.timelineRenderingType
      });
      // if !sendAnyway bail to let the user edit the composer and try again
      if (!sendAnyway) return;
    }
  }

  // if content is null, we haven't done any slash command processing, so generate some content
  content !== null && content !== void 0 ? content : content = await createMessageContent(message, isHTML, params);
  if (await (0,messages/* attachUrlPreviews */.QZ)(mxClient, room, urlPreviewSnapshot, content, (0,UrlUtils/* linksIn */.Lf)(message).size !== 0)) {
    return;
  }

  // TODO replace emotion end of message ?

  // TODO quick reaction

  // don't bother sending an empty message
  if (!content.body.trim()) {
    return;
  }
  if (SettingsStore/* default */.A.getValue("Performance.addSendMessageTimingMetadata")) {
    (0,sendTimePerformanceMetrics/* decorateStartSendingTime */.H)(content);
  }
  const threadId = relation !== null && relation !== void 0 && relation.event_id && (relation === null || relation === void 0 ? void 0 : relation.rel_type) === matrix/* THREAD_RELATION_TYPE */.RNJ.name ? relation.event_id : null;
  const prom = (0,local_room/* doMaybeLocalRoomAction */.Y)(roomId, actualRoomId => mxClient.sendMessage(actualRoomId, threadId, content), mxClient);
  if (replyToEvent) {
    // Clear reply_to_event as we put the message into the queue
    // if the send fails, retry will handle resending.
    dispatcher/* default */.A.dispatch({
      action: "reply_to_event",
      event: null,
      context: roomContext.timelineRenderingType
    });
  }
  dispatcher/* default */.A.dispatch({
    action: "message_sent"
  });
  effects/* CHAT_EFFECTS */.y.forEach(effect => {
    if (content && (0,utils/* containsEmoji */._)(content, effect.emojis)) {
      // For initial threads launch, chat effects are disabled
      // see #19731
      const isNotThread = (relation === null || relation === void 0 ? void 0 : relation.rel_type) !== matrix/* THREAD_RELATION_TYPE */.RNJ.name;
      if (isNotThread) {
        dispatcher/* default */.A.dispatch({
          action: `effects.${effect.command}`
        });
      }
    }
  });
  if (SettingsStore/* default */.A.getValue("Performance.addSendMessageTimingMetadata")) {
    void prom.then(resp => {
      (0,sendTimePerformanceMetrics/* sendRoundTripMetric */._)(mxClient, roomId, resp.event_id);
    });
  }

  // TODO save history
  // TODO save local state

  //if (shouldSend && SettingsStore.getValue("scrollToBottomOnMessageSent")) {
  if (SettingsStore/* default */.A.getValue("scrollToBottomOnMessageSent")) {
    dispatcher/* default */.A.dispatch({
      action: "scroll_to_bottom",
      timelineRenderingType: roomContext.timelineRenderingType
    });
  }
  return prom;
}
async function editMessage(html, {
  roomContext,
  mxClient,
  editorStateTransfer,
  attachBundles,
  isUrlPreviewsModified
}) {
  const editedEvent = editorStateTransfer.getEvent();
  PosthogAnalytics/* PosthogAnalytics */.Vo.instance.trackEvent({
    eventName: "Composer",
    isEditing: true,
    messageType: "Text",
    inThread: Boolean(editedEvent === null || editedEvent === void 0 ? void 0 : editedEvent.getThread()),
    isReply: Boolean(editedEvent.replyEventId)
  });

  // TODO emoji
  // Replace emoticon at the end of the message
  /*    if (SettingsStore.getValue('MessageComposerInput.autoReplaceEmoji')) {
      const caret = this.editorRef.current?.getCaret();
      const position = this.model.positionForOffset(caret.offset, caret.atNodeEnd);
      this.editorRef.current?.replaceEmoticon(position, REGEX_EMOTICON);
  }*/
  const editContent = await createMessageContent(html, true, {
    editedEvent
  });
  const newContent = editContent["m.new_content"];
  const shouldSend = true;
  if ((newContent === null || newContent === void 0 ? void 0 : newContent.body) === "") {
    (0,editing/* cancelPreviousPendingEdit */.r)(mxClient, editorStateTransfer);
    (0,ConfirmRedactDialog/* createRedactEventDialog */.Q)({
      mxEvent: editedEvent,
      onCloseDialog: () => {
        (0,editing/* endEditing */.w)(roomContext);
      }
    });
    return;
  }
  let response;
  const roomId = editedEvent.getRoomId();

  // If content is modified then send an updated event into the room
  // either text content or list of URL previews modified counts
  if ((isContentModified(newContent, editorStateTransfer) || isUrlPreviewsModified) && roomId) {
    // TODO Slash Commands

    if (shouldSend) {
      (0,editing/* cancelPreviousPendingEdit */.r)(mxClient, editorStateTransfer);
      const event = editorStateTransfer.getEvent();
      const threadId = event.threadRootId || null;

      // the previews are read synchronously, so the editor can be closed straight away
      // rather than making the user wait for any preview images to upload
      const attaching = attachBundles === null || attachBundles === void 0 ? void 0 : attachBundles(newContent);
      (0,editing/* endEditing */.w)(roomContext);

      // the edit was cancelled while its preview images were uploading
      if (await attaching) return;
      response = mxClient.sendMessage(roomId, threadId, editContent);
      dispatcher/* default */.A.dispatch({
        action: "message_sent"
      });
      return response;
    }
  }
  ;(0,editing/* endEditing */.w)(roomContext);
  return response;
}

/***/ }

}]);
//# sourceMappingURL=4411.js.map