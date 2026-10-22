/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

// UNUSED EXPORTS: default

;// ../../node_modules/.pnpm/@babel+runtime@7.29.10/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

;// ../../node_modules/.pnpm/@babel+runtime@7.29.10/node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function toPrimitive(t, e) {
  if ("object" != _typeof(t) || !t) return t;
  var r;
  if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) {
    var i = r.call(t, e || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === e ? String : Number)(t);
}

;// ../../node_modules/.pnpm/@babel+runtime@7.29.10/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

;// ../../node_modules/.pnpm/@babel+runtime@7.29.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

;// ../../packages/shared-components/dist/numbers.js
//#region src/core/utils/numbers.ts
function e(e, t) {
	return Number.isFinite(e) ? Number(e) : t;
}
function t(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
function n(...e) {
	return [...e].reduce((e, t) => t + e, 0);
}
function r(e, t, n) {
	return e * (n - t) + t;
}
function i(e, t, n) {
	let r = (e - t) / (n - t);
	return Number.isNaN(r) ? 0 : r;
}
//#endregion


;// ./src/utils/arrays.ts
/* unused harmony import specifier */ var percentageWithin;
/* unused harmony import specifier */ var percentageOf;
/*
Copyright 2024 New Vector Ltd.
Copyright 2020, 2021 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/



/**
 * Quickly resample an array to have less/more data points. If an input which is larger
 * than the desired size is provided, it will be downsampled. Similarly, if the input
 * is smaller than the desired size then it will be upsampled.
 * @param {number[]} input The input array to resample.
 * @param {number} points The number of samples to end up with.
 * @returns {number[]} The resampled array.
 */
function arrayFastResample(input, points) {
  if (input.length === points) return input; // short-circuit a complicated call

  // Heavily inspired by matrix-media-repo (used with permission)
  // https://github.com/turt2live/matrix-media-repo/blob/abe72c87d2e29/util/util_audio/fastsample.go#L10
  const samples = [];
  if (input.length > points) {
    // Danger: this loop can cause out of memory conditions if the input is too small.
    const everyNth = Math.round(input.length / points);
    for (let i = 0; i < input.length; i += everyNth) {
      samples.push(input[i]);
    }
  } else {
    // Smaller inputs mean we have to spread the values over the desired length. We
    // end up overshooting the target length in doing this, but we're not looking to
    // be super accurate so we'll let the sanity trims do their job.
    const spreadFactor = Math.ceil(points / input.length);
    for (const val of input) {
      samples.push(...arraySeed(val, spreadFactor));
    }
  }

  // Trim to size & return
  return arrayTrimFill(samples, points, arraySeed(input[input.length - 1], points));
}

/**
 * Attempts a smooth resample of the given array. This is functionally similar to arrayFastResample
 * though can take longer due to the smoothing of data.
 * @param {number[]} input The input array to resample.
 * @param {number} points The number of samples to end up with.
 * @returns {number[]} The resampled array.
 */
function arraySmoothingResample(input, points) {
  if (input.length === points) return input; // short-circuit a complicated call

  let samples = [];
  if (input.length > points) {
    // We're downsampling. To preserve the curve we'll actually reduce our sample
    // selection and average some points between them.

    // All we're doing here is repeatedly averaging the waveform down to near our
    // target value. We don't average down to exactly our target as the loop might
    // never end, and we can over-average the data. Instead, we'll get as far as
    // we can and do a followup fast resample (the neighbouring points will be close
    // to the actual waveform, so we can get away with this safely).
    while (samples.length > points * 2 || samples.length === 0) {
      samples = [];
      for (let i = 1; i < input.length - 1; i += 2) {
        const prevPoint = input[i - 1];
        const nextPoint = input[i + 1];
        const currPoint = input[i];
        const average = (prevPoint + nextPoint + currPoint) / 3;
        samples.push(average);
      }
      input = samples;
    }
    return arrayFastResample(samples, points);
  } else {
    // In practice there's not much purpose in burning CPU for short arrays only to
    // end up with a result that can't possibly look much different than the fast
    // resample, so just skip ahead to the fast resample.
    return arrayFastResample(input, points);
  }
}

/**
 * Rescales the input array to have values that are inclusively within the provided
 * minimum and maximum.
 * @param {number[]} input The array to rescale.
 * @param {number} newMin The minimum value to scale to.
 * @param {number} newMax The maximum value to scale to.
 * @returns {number[]} The rescaled array.
 */
function arrayRescale(input, newMin, newMax) {
  const min = Math.min(...input);
  const max = Math.max(...input);
  return input.map(v => percentageWithin(percentageOf(v, min, max), newMin, newMax));
}

/**
 * Creates an array of the given length, seeded with the given value.
 * @param {T} val The value to seed the array with.
 * @param {number} length The length of the array to create.
 * @returns {T[]} The array.
 */
function arraySeed(val, length) {
  // Size the array up front for performance, and use `fill` to let the browser
  // optimize the operation better than we can with a `for` loop, if it wants.
  return new Array(length).fill(val);
}

/**
 * Trims or fills the array to ensure it meets the desired length. The seed array
 * given is pulled from to fill any missing slots - it is recommended that this be
 * at least `len` long. The resulting array will be exactly `len` long, either
 * trimmed from the source or filled with the some/all of the seed array.
 * @param {T[]} a The array to trim/fill.
 * @param {number} len The length to trim or fill to, as needed.
 * @param {T[]} seed Values to pull from if the array needs filling.
 * @returns {T[]} The resulting array of `len` length.
 */
function arrayTrimFill(a, len, seed) {
  // Dev note: we do length checks because the spread operator can result in some
  // performance penalties in more critical code paths. As a utility, it should be
  // as fast as possible to not cause a problem for the call stack, no matter how
  // critical that stack is.
  if (a.length === len) return a;
  if (a.length > len) return a.slice(0, len);
  return a.concat(seed.slice(0, len - a.length));
}

/**
 * Clones an array as fast as possible, retaining references of the array's values.
 * @param a The array to clone. Must be defined.
 * @returns A copy of the array.
 */
function arrayFastClone(a) {
  return a.slice(0);
}

/**
 * Determines if the two arrays are different either in length, contents,
 * or order of those contents.
 * @param a The first array. Must be defined.
 * @param b The second array. Must be defined.
 * @returns True if they are different, false otherwise.
 */
function arrayHasOrderChange(a, b) {
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return true;
    }
    return false;
  } else {
    return true; // like arrayHasDiff, a difference in length is a natural change
  }
}

/**
 * Determines if two arrays are different through a shallow comparison.
 * @param a The first array. Must be defined.
 * @param b The second array. Must be defined.
 * @returns True if they are different, false otherwise.
 */
function arrayHasDiff(a, b) {
  if (a.length === b.length) {
    // When the lengths are equal, check to see if either array is missing
    // an element from the other.
    if (b.some(i => !a.includes(i))) return true;
    if (a.some(i => !b.includes(i))) return true;

    // if all the keys are common, say so
    return false;
  } else {
    return true; // different lengths means they are naturally diverged
  }
}
/**
 * Performs a diff on two arrays. The result is what is different with the
 * first array (`added` in the returned object means objects in B that aren't
 * in A). Shallow comparisons are used to perform the diff.
 * @param a The first array. Must be defined.
 * @param b The second array. Must be defined.
 * @returns The diff between the arrays.
 */
function arrayDiff(a, b) {
  return {
    added: b.filter(i => !a.includes(i)),
    removed: a.filter(i => !b.includes(i))
  };
}

/**
 * Returns the intersection of two arrays.
 * @param a The first array. Must be defined.
 * @param b The second array. Must be defined.
 * @returns The intersection of the arrays.
 */
function arrayIntersection(a, b) {
  return a.filter(i => b.includes(i));
}

/**
 * Unions arrays, deduping contents using a Set.
 * @param a The arrays to merge.
 * @returns The union of all given arrays.
 */
function arrayUnion(...a) {
  return Array.from(a.reduce((c, v) => {
    v.forEach(i => c.add(i));
    return c;
  }, new Set()));
}

/**
 * Moves a single element from fromIndex to toIndex.
 * @param {array} list the list from which to construct the new list.
 * @param {number} fromIndex the index of the element to move.
 * @param {number} toIndex the index of where to put the element.
 * @returns {array} A new array with the requested value moved.
 */
function moveElement(list, fromIndex, toIndex) {
  const result = Array.from(list);
  const [removed] = result.splice(fromIndex, 1);
  result.splice(toIndex, 0, removed);
  return result;
}

/**
 * Helper functions to perform LINQ-like queries on arrays.
 */
class ArrayUtil {
  /**
   * Create a new array helper.
   * @param a The array to help. Can be modified in-place.
   */
  constructor(a) {
    this.a = a;
  }

  /**
   * The value of this array, after all appropriate alterations.
   */
  get value() {
    return this.a;
  }

  /**
   * Groups an array by keys.
   * @param fn The key-finding function.
   * @returns This.
   */
  groupBy(fn) {
    const obj = this.a.reduce((rv, val) => {
      const k = fn(val);
      if (!rv.has(k)) rv.set(k, []);
      rv.get(k).push(val);
      return rv;
    }, new Map());
    return new GroupedArray(obj);
  }
}

/**
 * Helper functions to perform LINQ-like queries on groups (maps).
 */
class GroupedArray {
  /**
   * Creates a new group helper.
   * @param val The group to help. Can be modified in-place.
   */
  constructor(val) {
    this.val = val;
  }

  /**
   * The value of this group, after all applicable alterations.
   */
  get value() {
    return this.val;
  }

  /**
   * Orders the grouping into an array using the provided key order.
   * @param keyOrder The key order.
   * @returns An array helper of the result.
   */
  orderBy(keyOrder) {
    const a = [];
    for (const k of keyOrder) {
      if (!this.val.has(k)) continue;
      a.push(...this.val.get(k));
    }
    return new ArrayUtil(a);
  }
}
const concat = (...arrays) => {
  return arrays.reduce((concatenatedSoFar, toBeConcatenated) => {
    const concatenated = new Uint8Array(concatenatedSoFar.length + toBeConcatenated.length);
    concatenated.set(concatenatedSoFar, 0);
    concatenated.set(toBeConcatenated, concatenatedSoFar.length);
    return concatenated;
  }, new Uint8Array(0));
};

/**
 * Async version of Array.every.
 */
async function asyncEvery(values, predicate) {
  for (const value of values) {
    if (!(await predicate(value))) return false;
  }
  return true;
}

/**
 * Async version of Array.some.
 */
async function asyncSome(values, predicate) {
  for (const value of values) {
    if (await predicate(value)) return true;
  }
  return false;
}

/**
 * Async version of Array.some that runs all promises in parallel.
 * @param values
 * @param predicate
 */
async function asyncSomeParallel(values, predicate) {
  try {
    return await Promise.any(values.map(value => predicate(value).then(result => result ? Promise.resolve(true) : Promise.reject(false))));
  } catch (e) {
    // If the array is empty or all the promises are false, Promise.any will reject an AggregateError
    if (e instanceof AggregateError) return false;
    throw e;
  }
}

/**
 * Async version of Array.filter.
 * If one of the promises rejects, the whole operation will reject.
 * @param values
 * @param predicate
 */
async function asyncFilter(values, predicate) {
  const results = await Promise.all(values.map(predicate));
  return values.filter((_, i) => results[i]);
}
function filterBoolean(values) {
  return values.filter(Boolean);
}
;// ./src/audio/consts.ts
/*
Copyright 2024 New Vector Ltd.
Copyright 2021 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/


const WORKLET_NAME = "mx-voice-worklet";
let PayloadEvent = /*#__PURE__*/function (PayloadEvent) {
  PayloadEvent["Timekeep"] = "timekeep";
  PayloadEvent["AmplitudeMark"] = "amplitude_mark";
  return PayloadEvent;
}({});
const PLAYBACK_WAVEFORM_SAMPLES = 39;
const DEFAULT_WAVEFORM = arraySeed(0, PLAYBACK_WAVEFORM_SAMPLES);
;// ../../node_modules/.pnpm/babel-loader@10.1.1_@babel+core@7.29.7_webpack@5.111.1/node_modules/babel-loader/lib/index.js!./src/audio/RecorderWorklet.ts

/*
Copyright 2024 New Vector Ltd.
Copyright 2021 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/




// from AudioWorkletGlobalScope: https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletGlobalScope

// declare const currentFrame: number;
// declare const sampleRate: number;

// We rate limit here to avoid overloading downstream consumers with amplitude information.
// The two major consumers are the voice message waveform thumbnail (resampled down to an
// appropriate length) and the live waveform shown to the user. Effectively, this controls
// the refresh rate of that live waveform and the number of samples the thumbnail has to
// work with.
const TARGET_AMPLITUDE_FREQUENCY = 16; // Hz

function roundTimeToTargetFreq(seconds) {
  // Epsilon helps avoid floating point rounding issues (1 + 1 = 1.999999, etc)
  return Math.round((seconds + Number.EPSILON) * TARGET_AMPLITUDE_FREQUENCY) / TARGET_AMPLITUDE_FREQUENCY;
}
function nextTimeForTargetFreq(roundedSeconds) {
  // The extra round is just to make sure we cut off any floating point issues
  return roundTimeToTargetFreq(roundedSeconds + 1 / TARGET_AMPLITUDE_FREQUENCY);
}
class MxVoiceWorklet extends AudioWorkletProcessor {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "nextAmplitudeSecond", 0);
    _defineProperty(this, "amplitudeIndex", 0);
  }
  process(inputs, outputs, parameters) {
    const currentSecond = roundTimeToTargetFreq(currentTime);
    // We special case the first ping because there's a fairly good chance that we'll miss the zeroth
    // update. Firefox for instance takes 0.06 seconds (roughly) to call this function for the first
    // time. Edge and Chrome occasionally lag behind too, but for the most part are on time.
    //
    // When this doesn't work properly we end up producing a waveform of nulls and no live preview
    // of the recorded message.
    if (currentSecond === this.nextAmplitudeSecond || this.nextAmplitudeSecond === 0) {
      // We're expecting exactly one mono input source, so just grab the very first frame of
      // samples for the analysis.
      const monoChan = inputs[0][0];

      // The amplitude of the frame's samples is effectively the loudness of the frame. This
      // translates into a bar which can be rendered as part of the whole recording clip's
      // waveform.
      //
      // We translate the amplitude down to 0-1 for sanity's sake.
      const minVal = Math.min(...monoChan);
      const maxVal = Math.max(...monoChan);
      const amplitude = i(maxVal, -1, 1) - i(minVal, -1, 1);
      this.port.postMessage({
        ev: PayloadEvent.AmplitudeMark,
        amplitude: amplitude,
        forIndex: this.amplitudeIndex++
      });
      this.nextAmplitudeSecond = nextTimeForTargetFreq(currentSecond);
    }

    // We mostly use this worklet to fire regular clock updates through to components
    this.port.postMessage({
      ev: PayloadEvent.Timekeep,
      timeSeconds: currentTime
    });

    // We're supposed to return false when we're "done" with the audio clip, but seeing as
    // we are acting as a passive processor we are never truly "done". The browser will clean
    // us up when it is done with us.
    return true;
  }
}
registerProcessor(WORKLET_NAME, MxVoiceWorklet);
/* harmony default export */ const RecorderWorklet = (""); // to appease module loaders (we never use the export)
/******/ })()
;
//# sourceMappingURL=recorder.worklet.js.map